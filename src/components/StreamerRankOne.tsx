import { memo } from "react";
import styled from "styled-components";
import { StreamerType } from "../types/index";

import Increment from "./utils/Increment";
import Ripple from "./utils/Ripple";
import Crown from "./icons/Crown";
import Banner from "./icons/Banner";
import Triangle from "./icons/Triangle";

type Props = Omit<
  StreamerType & {
    className?: string;
  },
  "userID"
>;

const Wrap = styled.div`
  position: relative;
  overflow: hidden;
  background: ${(p) => p.theme.gradient};
  border-radius: 0.4em;
  padding: 1em;
  margin: 5px auto 3px;
`;

type PictureType = Pick<Props, "picture">;
const Picture = styled.div<PictureType>`
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
  border: 4px solid ${(p) => p.theme.first};
  background-size: cover;
  background-image: url(${(p) => p.picture});
  box-shadow: 4px 4px 10px rgba(0, 0, 255, 0.3);
  z-index: 1;
`;

const WrapRank = styled.div`
  position: relative;
  margin-bottom: -20px;
  z-index: 0;
`;

const Rank = styled.p`
  position: absolute;
  width: 100%;
  top: 40%;
  text-align: center;
  font-size: 2em;
  z-index: 2;
  margin: 0;
  color: white;
`;

const StyledCrown = styled(Crown)`
  width: 100px;
  color: ${(p) => p.theme.second};
  opacity: 0.5;
`;

const Name = styled.p`
  position: relative;
  letter-spacing: 0.1em;
  font-weight: 800;
  display: inline-block;
  text-align: center;
  color: white;
  padding: 4px 2em;
  margin: -1em 0 0.5em;
  background: rgb(84, 0, 90);
  text-shadow: 1px 1px 0 black;
  z-index: 3;
`;

const Score = styled.p`
  margin: 0;
  font-weight: 800;
  color: white;
  text-shadow: 1px 1px 0 black;
`;

const Pt = styled.span`
  font-size: 0.9em;
  font-weight: 400;
  opacity: 0.8;
  margin-left: 1px;
`;

const CommonTriangle = styled(Triangle)`
  position: absolute;
  z-index: 0;
  top: 10px;
  height: 20px;
  color: rgb(180, 0, 255);
`;

const LeftTriangle = styled(CommonTriangle)`
  transform: scaleX(-1);
  right: 100%;
`;

const RightTriangle = styled(CommonTriangle)`
  left: 100%;
`;

const CommonBanner = styled(Banner)`
  position: absolute;
  z-index: 0;
  top: 15px;
  height: 20px;
  color: rgb(150, 0, 180);
`;

const LeftBanner = styled(CommonBanner)`
  transform: scaleX(-1);
  right: 95%;
`;

const RightBanner = styled(CommonBanner)`
  left: 95%;
`;

const StyledRipple = styled(Ripple)`
  left: calc(50% - 25px);
  bottom: 0;
  && {
    top: auto;
  }
`;

const StreamerRankOne = ({ className, displayName, score, picture }: Props) => {
  return (
    <Wrap className={className}>
      <StyledRipple watch={score} />
      <WrapRank>
        <StyledCrown />
        <Rank>1</Rank>
      </WrapRank>
      <Picture picture={picture} />
      <Name>
        {displayName}
        <LeftTriangle />
        <RightTriangle />
        <LeftBanner />
        <RightBanner />
      </Name>
      <Score>
        <Increment value={score} />
        <Pt>pt</Pt>
      </Score>
    </Wrap>
  );
};

export default memo(StreamerRankOne);
