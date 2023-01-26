import type { StreamerType } from "../types/index";

export const randomScoreChangeAndSort = (
  streamers: StreamerType[]
): StreamerType[] => {
  const randomStreamerIndex = Math.floor(Math.random() * streamers.length);
  const randomScore = Math.round(1000 + Math.random() * 1000);
  return streamers
    .map((streamer, index) => ({
      ...streamer,
      score:
        index === randomStreamerIndex
          ? streamer.score + randomScore
          : streamer.score
    }))
    .sort((a, b) => (a.score - b.score > 0 ? -1 : 1));
};
