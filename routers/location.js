const express = require("express");
const Location = require("../models/location.js");
const router = express.Router();

router.get("/location", async (req, res) => {
  const location = await Location.find();
  res.json({ data: location });
});

router.post("/location", async (req, res) => {
  await Location.create(req.body);
  const location = await Location.find();
  res.json({ data: location });
});

module.exports = router;
