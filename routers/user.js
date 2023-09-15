const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json({ data: users });
});

router.post("/add-user", async (req, res) => {
  User.create(req.body);
  const users = await User.find();
  res.json({ data: users });
});

router.post("/update-user/:id", async (req, res) => {
  const id = req.params.id;
  await User.findByIdAndUpdate(id, req.body);
  const users = await User.find();
  res.json(users);
});

module.exports = router;
