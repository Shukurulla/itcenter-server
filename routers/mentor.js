const express = require("express");
const Mentor = require("../models/Mentors");
const router = express.Router();

router.get("/mentors", async (req, res) => {
  const mentors = await Mentor.find();
  res.json({data:mentors});
});


router.post("/add-mentor", (req, res) => {
  Mentor.create(req.body);
});
router.post("/create-course", (req, res) => {
  Course.create(req.body);
});

router.post("/edit-mentor/:id", async (req, res) => {
  const id = req.params.id;
  await Mentor.findByIdAndUpdate(id, req.body);
  const mentors = await Mentor.find();
  res.json(mentors);
});
router.delete("/delete-mentor/:id", async (req, res) => {
  const id = req.params.id;
  await Mentor.findByIdAndRemove(id);
  const mentors = await Mentor.find();
  res.json(mentors);
});

module.exports = router;
