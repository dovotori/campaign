import { randomScoreChangeAndSort } from "./index";

describe("randomScoreChangeAndSort", () => {
  test("should return an array", () => {
    expect(randomScoreChangeAndSort([])).toEqual([]);
  });

  test("should add random score to one streamer", () => {
    const streamers = [{ displayName: "", picture: "", userID: 0, score: 0 }];
    const results = randomScoreChangeAndSort(streamers);
    expect(results[0].score).not.toBe(0);
  });
});
