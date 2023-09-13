const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const UserRoutes = require("./routers/user");
const MentorRoutes = require("./routers/mentor");
const CourseRoutes = require("./routers/course");
const Course = require("./models/Courses");
const Mentor = require("./models/Mentors");

require('dotenv').config()
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
).then(res => {
  res && console.log('database connected');
})

mongoose.set('strictQuery', false)

const connectDB = async() => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(err);
    process.exit(1)
  }
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(UserRoutes);
app.use(MentorRoutes);
app.use(CourseRoutes);

app.get('/', (req,res) => {
  
  res.json({data: 'Hello World'})
})

app.get("/courses", async (req, res) => {
  const courses = await Course.find();
  res.json({data: courses});
});

app.post("/delete-course/:id", async (req, res) => {
  const id = req.body.id;
  await Course.findByIdAndRemove(id);
  const courses = await Course.find();
  res.json(courses);
});

app.post("/edit-course/:id", async (req, res) => {
  const id = req.params.id;
  await Course.findByIdAndUpdate(id, req.body);
});

app.get("/mentors", async (req, res) => {
  const mentors = await Mentor.find();
  res.json({data:mentors});
});


app.post("/add-mentor", (req, res) => {
  Mentor.create(req.body);
});
app.post("/create-course", (req, res) => {
  Course.create(req.body);
});

app.post("/edit-mentor/:id", async (req, res) => {
  const id = req.params.id;
  await Mentor.findByIdAndUpdate(id, req.body);
  const mentors = await Mentor.find();
  res.json(mentors);
});
app.delete("/delete-mentor/:id", async (req, res) => {
  const id = req.params.id;
  await Mentor.findByIdAndRemove(id);
  const mentors = await Mentor.find();
  res.json(mentors);
});
connectDB().then(() => {

  app.listen(3001, () => {
    console.log("server has ben started");
  });
})


