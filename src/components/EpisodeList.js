import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = props.match.url;

    axios.get("https://rickandmortyapi.com/api/episode/").then(response => {
      setData(response.data.results);
      console.log("axios episodes:", response.data.results);
    });
  }, [props.match.url]);

  return (
    <section className="episode-list grid-view">
      {data.map(episode => (
        <EpisodeCard
          key={episode.id}
          name={episode.name}
          episode={episode.episode}
          airDate={episode.air_date}
        />
      ))}
    </section>
  );
}
