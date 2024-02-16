import { useEpisodes } from "../hooks/useEpisodes.js";
import { useEpisode } from "../hooks/useEpisode.js";
// import { fetchSingelEpisode } from "../logic/fetch"

import "../css/EpisodeCard.css";
import { Episode } from "../components/Episode.jsx";
import { EpisodeCard } from "../components/EpisodeCard.jsx";
export const Episodes = () => {
  const episodes = useEpisodes();
  const [episode, getSingleEpisode] = useEpisode()
  return (
    <>
      <div className="container__episodes">
        {episodes &&
          episodes.map((episode) => (
            <Episode
              key={episode.id}
              id={episode.id}
              name={episode.name}
              fetchEpisode={getSingleEpisode}
            />
          ))}
      </div>
      <div className="episode">
        {episode && (
          <EpisodeCard
            key={episode.id}
            id={episode.id}
            name={episode.name}
            characters={episode.characters}
          />
        )}
      </div>
    </>
  );
};
