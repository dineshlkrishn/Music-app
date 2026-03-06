const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  coverImage: String,
  audioUrl: String,
  plays: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Song", songSchema);
