const router = require("express").Router();
const multer = require("multer");
const Song = require("../models/Song");

const storage = multer.diskStorage({
  destination: "uploads/",

  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/upload",

  upload.fields([{ name: "audio" }, { name: "cover" }]),

  async (req, res) => {
    const song = await Song.create({
      title: req.body.title,
      artist: req.body.artist,
      coverImage: req.files.cover[0].path,
      audioUrl: req.files.audio[0].path,
    });

    res.json(song);
  }
);

router.get("/", async (req, res) => {
  // const songs = await Song.find();
  // res.json(songs);
});

module.exports = router;
