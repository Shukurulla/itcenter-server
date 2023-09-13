const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const UserRoutes = require("./routers/user");
const MentorRoutes = require("./routers/mentor");
const CourseRoutes = require("./routers/course");
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
app.use(UserRoutes);
app.use(MentorRoutes);
app.use(CourseRoutes);

app.get('/', (req,res) => {
  
  res.json({data: 'Hello World'})
})

app.listen(3001, () => {
  console.log("server has ben started");
});
