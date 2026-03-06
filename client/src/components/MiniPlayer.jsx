import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

export default function MiniPlayer() {
  const { song, playing, pauseSong, playSong } = useContext(PlayerContext);

  if (!song) return null;

  return (
    <div className="fixed bottom-16 left-0 right-0 bg-white shadow p-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={song.cover} className="w-10 h-10 rounded" />

        <div>
          <p className="text-sm font-semibold">{song.title}</p>

          <p className="text-xs text-gray-500">{song.artist}</p>
        </div>
      </div>

      <div className="flex gap-4">
        <button>⏮</button>

        <button onClick={() => (playing ? pauseSong() : playSong(song))}>
          {playing ? "⏸" : "▶"}
        </button>

        <button>⏭</button>
      </div>
    </div>
  );
}
