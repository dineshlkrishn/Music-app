const router = require("express").Router();
const jwt = require("jsonwebtoken");

let users = [
  { email: "admin@test.com", password: "123456", role: "admin" },
  { email: "user@test.com", password: "123456", role: "user" },
];

router.post("/signup", (req, res) => {
  const { email, password, role = "user" } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const exists = users.find((u) => u.email === email);

  if (exists) {
    return res.status(409).json({ error: "User already exists" });
  }

  const newUser = {
    email,
    password,
    role: role === "admin" ? "admin" : "user",
  };

  users.push(newUser);

  res.status(201).json({
    email: newUser.email,
    role: newUser.role,
    message: "Signup successful",
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign(
    { email: user.email, role: user.role },
    "soundson-secret"
  );

  res.json({
    token,
    role: user.role,
    email: user.email,
  });
});

module.exports = router;
