const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const UserRoutes = require("./routers/user");
const MentorRoutes = require("./routers/mentor");
const CourseRoutes = require("./routers/course");
const Auth = require("./routers/auth");

require("dotenv").config();
// enable cors
app.use(
  cors({
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

mongoose.connect(process.env.MONGO_URI).then((res) => {
  res && console.log("database connected");
});

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(err);
    process.exit(1);
  }
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(UserRoutes);
app.use(MentorRoutes);
app.use(CourseRoutes);
app.use(Auth);

app.get("/", (req, res) => {
  res.json({ data: "Hello World" });
});

connectDB().then(() => {
  app.listen(3001, () => {
    console.log("server has ben started");
  });
});
