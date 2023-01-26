import { useEffect, useState } from "react";
import styled from "styled-components";

import { fetchData } from "../api/index";
import type { StreamerType } from "../types/index";
import StreamersList from "./StreamersList";
import { randomScoreChangeAndSort } from "../utils/index";

const Error = styled.p`
  background: ${(p) => p.theme.gradient};
  border-radius: 0.4em;
  padding: 1em;
`;

export default function App() {
  const [streamers, setStreamers] = useState<StreamerType[]>([]);

  useEffect(() => {
    // fetch data
    const setup = async () => {
      const data = await fetchData();
      setStreamers(data);
    };
    setup();
  }, []);

  useEffect(() => {
    // randomize scores every second for one streamer
    const timeout = setInterval(() => {
      setStreamers(randomScoreChangeAndSort);
    }, 1000);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <div className="App">
      {streamers.length ? (
        <StreamersList streamers={streamers} />
      ) : (
        <Error>No streamers availables.</Error>
      )}
    </div>
  );
}
