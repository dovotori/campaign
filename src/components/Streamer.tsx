import { memo } from "react";
import styled from "styled-components";

import Increment from "./utils/Increment";
import Ripple from "./utils/Ripple";
import type { StreamerType } from "../types/index";

type Props = Omit<
  StreamerType & {
    className?: string;
    rank: number;
  },
  "userID"
>;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 0.4em;
  font-size: 0.9em;
  color: white;
  position: relative;
  overflow: hidden;
`;

const Column = styled.div`
  padding: 0 0.5em;
`;

const FirstColumn = styled(Column)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Ellipsis = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Rank = styled.p`
  text-align: center;
  min-width: 30px;
  font-weight: 800;
`;

const Name = styled(Ellipsis)`
  margin-left: 5px;
  text-shadow: 1px 1px 0 black;
`;

type PrictureProps = Pick<Props, "picture">;
const Picture = styled.div<PrictureProps>`
  width: 36px;
  height: 36px;
  margin: 0.5em;
  border-radius: 50%;
  background-size: cover;
  background-image: url(${(p) => p.picture});
`;

const SecondColumn = styled(Column)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 0.5em;
  text-shadow: 1px 1px 0 black;
`;

const Score = styled(Increment)``;

const Pt = styled.span`
  font-size: 0.9em;
  font-weight: 400;
  opacity: 0.8;
  margin-left: 1px;
`;

const Streamer = ({ className, rank, picture, displayName, score }: Props) => {
  return (
    <Wrap className={className}>
      <Ripple watch={score} />
      <FirstColumn>
        <Rank>{rank + 2}</Rank>
        <Picture picture={picture} />
        <Name>{displayName}</Name>
      </FirstColumn>
      <SecondColumn>
        <Score value={score} />
        <Pt>pt</Pt>
      </SecondColumn>
    </Wrap>
  );
};

export default memo(Streamer);
