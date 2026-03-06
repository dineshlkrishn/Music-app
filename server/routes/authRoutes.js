const router = require("express").Router();
const jwt = require("jsonwebtoken");

let users = [
  { email: "admin@test.com", password: "123456", role: "admin" },
  { email: "user@test.com", password: "123456", role: "user" },
];

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(email, "--email", password, "--pass");
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
