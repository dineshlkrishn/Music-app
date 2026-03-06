const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const songRoutes = require("./routes/songRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/songs", songRoutes);
app.use("/uploads", express.static("uploads"));

app.get("/api/test", (req, res) => {
  res.send("Backend working!");
});

app.use(express.static(path.join(__dirname, "../client/dist")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on ${PORT}`);
});
