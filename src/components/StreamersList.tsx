import styled from "styled-components";

import type { StreamerType } from "../types/index";
import Streamer from "./Streamer";
import StreamerRankOne from "./StreamerRankOne";
import AnimVertically from "./utils/AnimVertically";

const Container = styled.div`
  margin: 0 10px;
`;

const StyledStreamer = styled(Streamer)<{ rank: number }>`
  background: hsl(${(p) => 304 - p.rank * 10} ${(p) => 90 - p.rank * 7}% 40%);
`;

const StyledAnimVertically = styled(AnimVertically)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrap = styled.div`
  position: relative;
`;

type Props = {
  streamers: StreamerType[];
};

const StreamersList = ({ streamers }: Props) => {
  return (
    <Container>
      <StreamerRankOne {...streamers[0]} />
      <Wrap style={{ height: `${(streamers.length - 1) * 60}px` }}>
        {streamers
          .slice(1, streamers.length)
          .map(({ userID, ...restStreamer }, rank) => (
            <StyledAnimVertically key={userID} rank={rank} elemHeight={60}>
              <StyledStreamer rank={rank} {...restStreamer} />
            </StyledAnimVertically>
          ))}
      </Wrap>
    </Container>
  );
};

export default StreamersList;
