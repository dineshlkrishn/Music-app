const router = require("express").Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const uploadDir = path.join(process.cwd(), "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const songs = [];

router.post(
  "/upload",
  upload.fields([{ name: "audio" }, { name: "cover" }]),
  async (req, res) => {
    if (!req.files?.audio?.[0] || !req.files?.cover?.[0]) {
      return res.status(400).json({ error: "Audio and cover files are required" });
    }

    const song = {
      _id: `${Date.now()}`,
      title: req.body.title || "Untitled",
      artist: req.body.artist || "Unknown",
      coverImage: `/uploads/${path.basename(req.files.cover[0].path)}`,
      audioUrl: `/uploads/${path.basename(req.files.audio[0].path)}`,
      plays: 0,
    };

    songs.unshift(song);

    res.status(201).json(song);
  }
);

router.get("/", async (req, res) => {
  res.json(songs);
});

module.exports = router;
