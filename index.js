const express = require("express");
const app = express();
const User = require("./models/User");
const Course = require("./models/Courses");
const cors = require("cors");
const mongoose = require("mongoose");

// enable cors
app.use(
  cors({
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

mongoose.connect(
  "mongodb+srv://shukurulla:zLKEU8n7Qk9kBRRV@cluster0.9jlzjnl.mongodb.net/it-database"
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/add-user", (req, res) => {
  User.create(req.body);
});
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});
app.post("/create-course", (req, res) => {
  Course.create(req.body);
});

app.get("/courses", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

app.post("/delete-course/:id", async (req, res) => {
  const id = req.body.id;
  await Course.findByIdAndRemove(id);
  const courses = await Course.find();
  res.json(courses);
});

app.post("/edit-course/:id", async (req, res) => {
  const id = req.params.id;
  const product = await Course.findByIdAndUpdate(id, req.body);
});

app.post("/update-user/:id", async (req, res) => {
  const id = req.params.id;
  const user = await Course.findByIdAndUpdate(id, req.body);
  res.json(user)
});

app.listen(1111, () => {
  console.log("server has ben started");
});
