const mongoose = require("mongoose");

const LoactionScheme = mongoose.Schema({
  lat: {
    type: string,
  },
  long: {
    type: string,
  },
});

const Location = mongoose.model("Location", LoactionScheme);

module.exports = Location;
