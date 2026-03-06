import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { useNavigate } from "react-router-dom";

export default function Player(){

 const nav = useNavigate();

 const {
   currentSong,
   isPlaying,
   play,
   pause,
   next,
   prev,
   isShuffle,
   setIsShuffle,
   isRepeat,
   setIsRepeat,
   progress,
   volume,
   setVolume
 } = useContext(PlayerContext);

 if(!currentSong) return null;

 return(

  <div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-black flex flex-col items-center justify-center">

    <button
      onClick={()=>nav(-1)}
      className="absolute top-6 left-6 text-red-500"
    >
      ←
    </button>

    <div className="relative">

      <img
        src={currentSong.cover}
        className="w-72 h-72 rounded-full object-cover vinyl-spin shadow-2xl"
      />

    </div>

    <h2 className="mt-6 text-2xl font-bold">
      {currentSong.title}
    </h2>

    <p className="text-gray-400">
      {currentSong.artist}
    </p>

    <div className="w-80 mt-4 bg-gray-700 h-1">
      <div
        className="h-1 bg-red-600"
        style={{width:`${progress}%`}}
      />
    </div>

    <div className="flex gap-6 mt-6 text-2xl">

      <button onClick={()=>setIsShuffle(!isShuffle)}>🔀</button>

      <button onClick={prev}>⏮</button>

      <button
        className="bg-red-600 p-4 rounded-full"
        onClick={isPlaying ? pause : play}
      >
        {isPlaying ? "⏸" : "▶"}
      </button>

      <button onClick={next}>⏭</button>

      <button onClick={()=>setIsRepeat(!isRepeat)}>🔁</button>

    </div>

    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={volume}
      onChange={e=>setVolume(e.target.value)}
      className="w-60 mt-6"
    />

  </div>
 )
}