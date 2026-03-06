const express = require("express");
const path = require("path");
require("dotenv").config();
const songRoutes = require("./routes/songRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/songs", songRoutes);
app.use("/uploads", express.static("uploads"));

// API ROUTE
app.get("/api/test", (req, res) => {
  res.send("Backend working!");
});

// SERVE REACT BUILD
app.use(express.static(path.join(__dirname, "../client/dist")));

// EXPRESS 5 REACT ROUTER FALLBACK
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

const User = require("./models/User");

app.get("/makeadmin",async(req,res)=>{

 await User.create({
  email:"admin@test.com",
  password:"123456",
  role:"admin"
 });

 res.send("Admin created");
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Backend running on 5000");
});

// setInterval(() => {
//   console.log("Server still alive...");
// }, 10000);