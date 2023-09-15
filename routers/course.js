const express = require("express");
const Course = require("../models/Courses");
const router = express.Router();

router.get("/courses", async (req, res) => {
  const courses = await Course.find();
  res.json({ data: courses });
});

router.post("/delete-course/:id", async (req, res) => {
  const id = req.body.id;
  await Course.findByIdAndRemove(id);
  const courses = await Course.find();
  res.json(courses);
});

router.post("/create-course", (req, res) => {
  Course.create(req.body);
});

router.post("/edit-course/:id", async (req, res) => {
  const id = req.params.id;
  await Course.findByIdAndUpdate(id, req.body);
});
module.exports = router;
