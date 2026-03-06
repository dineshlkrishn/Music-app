import { createContext, useState } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [song, setSong] = useState(null);
  const [playing, setPlaying] = useState(false);

  const playSong = (track) => {
    setSong(track);
    setPlaying(true);
  };

  const pauseSong = () => {
    setPlaying(false);
  };

  const nextSong = () => {
    console.log("Next song");
  };

  const prevSong = () => {
    console.log("Previous song");
  };

  return (
    <PlayerContext.Provider
      value={{
        song,
        playing,
        playSong,
        pauseSong,
        nextSong,
        prevSong,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
