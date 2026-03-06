import { useState } from "react";

export default function Library(){

  const [tab,setTab]=useState("Playlists");

  return(

    <div className="p-6 pb-32">

      <div className="flex gap-6 mb-6">

        {["Playlists","Artists","Albums"].map(t=>(
          <button
            key={t}
            onClick={()=>setTab(t)}
            className={tab===t ? "text-red-600 font-bold" : ""}
          >
            {t}
          </button>
        ))}

      </div>

      <div className="space-y-4">

        <div className="soft-card p-4">
          My Favorites
        </div>

        <div className="soft-card p-4">
          Chill Vibes
        </div>

      </div>

    </div>
  )
}