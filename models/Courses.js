const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  courseImage: {
    type: String,
  },
  name: {
    type: String,
  },
  brief_info: {
    type: String,
  },
  info: {
    type: String,
  },
  mentor: {
    type: String,
  },
  course: {
    type: String,
    default: "Offline",
  },
  duration: {
    type: String,
  },
  sertificat: {
    type: String,
    default: "Mavjud",
  },
  price: {
    type: String,
  },
  tech: {
    type: String,
  },
  slug: {
    type: String,
  },
});

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;
