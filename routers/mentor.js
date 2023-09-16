const express = require("express");
const Mentor = require("../models/Mentors");
const router = express.Router();

router.get("/mentors", async (req, res) => {
  const mentors = await Mentor.find();
  res.json({ data: mentors });
});

router.post("/add-mentor", async(req, res) => {
  await Mentor.create(req.body.mentor);
  const mentors = await Mentor.find()
  res.json({data: mentors})
});


router.post("/edit-mentor/:id", async (req, res) => {
  const id = req.params.id;
  await Mentor.findByIdAndUpdate(id, req.body.mentor);
  const mentors = await Mentor.find();
  res.json({data:mentors});
});
router.delete("/delete-mentor/:id", async (req, res) => {
  const id = req.params.id;
  await Mentor.findByIdAndRemove(id);
  const mentors = await Mentor.find();
  res.json({data:mentors});
});

module.exports = router;
