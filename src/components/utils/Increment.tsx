import { useEffect, useRef } from "react";

import usePrevious from "../../hooks/usePrevious";

import type { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  value: number;
  duration?: number;
  className?: string;
};

export const normalizeValue = (
  valeur: number,
  minRef: number,
  maxRef: number,
  minDest: number,
  maxDest: number
): number => {
  let result =
    minDest +
    ((valeur - minRef) * (maxDest - minDest)) / (maxRef - minRef || 1);
  if (result < Math.min(minDest, maxDest)) {
    result = Math.min(minDest, maxDest);
  }
  if (result > Math.max(minDest, maxDest)) {
    result = Math.max(minDest, maxDest);
  }
  return result;
};

const Increment = ({ className, value, duration = 500 }: Props) => {
  const startTime = useRef<number>(0);
  const ref = useRef<null | HTMLSpanElement>(null);
  const animValue = useRef(0);
  const previousValue = usePrevious(value);

  useEffect(() => {
    let req: number | null = null;
    startTime.current = new Date().getTime();

    const animated = () => {
      const now = new Date().getTime();
      const milli = now - startTime.current;
      if (milli < duration) {
        const step = normalizeValue(
          milli,
          0,
          duration,
          previousValue || 0,
          value
        );
        animValue.current = Math.round(step);
        req = window.requestAnimationFrame(animated);
      } else {
        animValue.current = value;
      }
      if (ref.current) ref.current.innerHTML = `${animValue.current}`;
    };
    req = window.requestAnimationFrame(animated);

    return () => {
      if (req) window.cancelAnimationFrame(req);
    };
  }, [value, duration, previousValue]);

  return <span className={className} ref={ref} />;
};

export default Increment;
