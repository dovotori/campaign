import type { StreamerType } from "../types/index";

const API_ENDPOINT = "https://webcdn.17app.co/campaign/pretest/data.json";

export const fetchData = async (): Promise<never | StreamerType[]> => {
  try {
    const response = await fetch(API_ENDPOINT);
    return await response.json();
  } catch {
    return [];
  }
};
