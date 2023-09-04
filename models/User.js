const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  status: {
    type: String,
    default: "New",
  },
});

const User = mongoose.model("Users", UserSchema);
module.exports = User;
