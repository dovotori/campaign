import styled, { keyframes } from "styled-components";
import { useEffect, useState, useCallback } from "react";

const rippling = keyframes`
  0% {
    opacity: 1;
    transform: scale(0);
  }
  100% {
    opacity: 0;
    transform: scale(20);
  }
}
`;

const Wrap = styled.div`
  position: absolute;
  top: 0;
  right: 15px;
  opacity: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${(p) => p.theme.second};
  transform-origin: center;
  &.anim {
    animation: ${rippling} 300ms linear;
  }
`;

const Ripple = ({
  className,
  watch
}: {
  className?: string;
  watch: number;
}) => {
  const [ripple, setRipple] = useState(false);

  const resetRipple = useCallback(() => {
    setRipple(false);
  }, []);

  useEffect(() => {
    setRipple(true);
  }, [watch]);

  return (
    <Wrap
      onAnimationEnd={resetRipple}
      className={`${className} ${ripple ? "anim" : ""}`}
    />
  );
};

export default Ripple;
