import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

export default function Home() {
  const { playSong } = useContext(PlayerContext);

  const recent = [
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      img: "https://i.scdn.co/image/ab67616d0000b2730f3c4d3e5f5cde4df2f3e1a5",
    },
    {
      title: "Future Nostalgia",
      artist: "Dua Lipa",
      img: "https://i.scdn.co/image/ab67616d0000b273e6c6b8d0d6a5d3d6d5c2d2f0",
    },
    {
      title: "Currents",
      artist: "Tame Impala",
      img: "https://i.scdn.co/image/ab67616d0000b2739a7f5f2c3d5e2a4c6f2e3d4f",
    },
  ];

  const mixes = ["Daily Mix 1", "Chill Drake", "Travis Scott", "Daily Hits"];

  const playlists = [
    "https://picsum.photos/200?1",
    "https://picsum.photos/200?2",
    "https://picsum.photos/200?3",
    "https://picsum.photos/200?4",
  ];

  const logout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  };

  return (
    <div className="p-6 pb-40">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
            S
          </div>

          <h1 className="text-xl font-semibold">SoundsOn</h1>
        </div>

        <button onClick={logout} className="text-red-500 text-sm font-medium">
          Logout
        </button>
      </div>

      {/* HOME QUICK PLAYLISTS */}

      <h2 className="section-title">Home</h2>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="card p-4 flex items-center gap-2">💜 Liked Songs</div>

        <div className="card p-4">Throwly Mix</div>

        <div className="card p-4">Tweekback Mix</div>

        <div className="card p-4">Happy Vibes</div>
      </div>

      {/* RECENTLY PLAYED */}

      <h2 className="section-title">Recently Played</h2>

      <div className="scroll-x mb-8">
        {recent.map((song, i) => (
          <div
            key={i}
            className="card w-40 cursor-pointer"
            onClick={() => playSong(song)}
          >
            <img
              src={song.img}
              className="rounded-t-xl h-32 w-full object-cover"
            />

            <div className="p-3">
              <p className="font-semibold text-sm">{song.title}</p>

              <p className="text-xs text-gray-500">{song.artist}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MADE FOR YOU */}

      <h2 className="section-title">Made For You</h2>

      <div className="scroll-x mb-8">
        {mixes.map((mix, i) => (
          <div key={i} className="card w-28 p-3">
            <div className="h-16 bg-gray-200 rounded mb-2"></div>

            <p className="text-xs text-center">{mix}</p>
          </div>
        ))}
      </div>

      {/* POPULAR PLAYLISTS */}

      <h2 className="section-title">Popular Playlists</h2>

      <div className="scroll-x">
        {playlists.map((img, i) => (
          <img key={i} src={img} className="w-20 h-20 rounded-full shadow-md" />
        ))}
      </div>
    </div>
  );
}
