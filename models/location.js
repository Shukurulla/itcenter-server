const mongoose = require("mongoose");

const Location = mongoose.model("Location", {
  lat: {
    type: string,
  },
  long: {
    type: string,
  },
});

module.exports = Location;
