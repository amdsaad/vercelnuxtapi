const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
  hero_email: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model("Experience", experienceSchema);
