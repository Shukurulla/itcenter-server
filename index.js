const express = require("express");
const app = express();
const User = require("./models/User");
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

app.listen(3001, () => {
  console.log("server has ben started");
});
//zLKEU8n7Qk9kBRRV
