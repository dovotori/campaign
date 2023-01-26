import styled, { keyframes, css } from "styled-components";
import type { PropsWithChildren } from "react";

import usePrevious from "../../hooks/usePrevious";

type Props = PropsWithChildren & {
  className?: string;
  rank: number;
  elemHeight?: number;
};

const moveVertically = (fromY: number, toY: number, midY: number) => keyframes`
  0% {
    transform : translateY(${fromY}px);
  }
  50% {
    transform : translateY(${midY}px) scale(${fromY < toY ? 0.9 : 1.1});
  }
  100% {
    transform : translateY(${toY}px);
  }
`;

type StyledProps = Pick<Props, "elemHeight"> & { fromY: number; toY: number };
const Wrap = styled.div<StyledProps>`
  position: absolute;
  height: ${(p) => p.elemHeight || 60}px;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${(p) => p.fromY};
  transform-origin: center center;
  transform: translateY(${(p) => p.toY * (p.elemHeight || 60)}px);
  ${({ fromY, toY, elemHeight }) => {
    if (fromY !== toY) {
      const from = fromY * (elemHeight || 60);
      const to = toY * (elemHeight || 60);
      const mid = (from + to) / 2;
      const anim = moveVertically(from, to, mid);
      return css`
        animation: ${anim} 300ms linear forwards;
      `;
    }
  }}
`;

const AnimVertically = ({
  children,
  className,
  rank = 0,
  elemHeight = 60
}: Props) => {
  const previousRank = usePrevious(rank);
  return (
    <Wrap
      className={className}
      fromY={previousRank}
      toY={rank}
      elemHeight={elemHeight}
    >
      {children}
    </Wrap>
  );
};

export default AnimVertically;
