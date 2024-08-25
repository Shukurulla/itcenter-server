const mongoose = require("mongoose");

const Location = mongoose.model("Location", {
  lat: {
    type: String,
  },
  long: {
    type: String,
  },
});

module.exports = Location;
