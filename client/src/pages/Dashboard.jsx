import axios from "axios"
import { useState, useEffect } from "react"

export default function Dashboard() {

    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [audio, setAudio] = useState(null)
    const [cover, setCover] = useState(null)
    const [songs, setSongs] = useState([])

    const uploadSong = async () => {

        const form = new FormData()

        form.append("title", title)
        form.append("artist", artist)
        form.append("audio", audio)
        form.append("cover", cover)

        await axios.post("/api/songs/upload", form)

        alert("Song Uploaded")

    }

    useEffect(() => {
        axios.get("/api/songs")
            .then(res => setSongs(res.data))
    }, [])

    return (

        <div className="min-h-screen p-10 bg-black text-white">

            <h2 className="text-2xl mb-6">
                Admin Dashboard 🎵
            </h2>

            <input
                placeholder="Song Title"
                className="block mb-2 p-2 text-black"
                onChange={e => setTitle(e.target.value)}
            />

            <input
                placeholder="Artist"
                className="block mb-2 p-2 text-black"
                onChange={e => setArtist(e.target.value)}
            />

            <input
                type="file"
                className="block mb-2"
                onChange={e => setAudio(e.target.files[0])}
            />

            <input
                type="file"
                className="block mb-2"
                onChange={e => setCover(e.target.files[0])}
            />

            <button
                onClick={uploadSong}
                className="bg-purple-600 p-2 rounded"
            >
                Upload Song
            </button>

            <h3 className="mt-6">
                Songs Library
            </h3>

            {
                songs.map(song => (

                    <div key={song._id}>
                        {song.title}
                    </div>

                ))
            }

        </div>

    )
}