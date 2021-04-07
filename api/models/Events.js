const mongoose = require("mongoose");

const eventsSchema = new mongoose.Schema({
  startRecur: {
    type: String,
    required: true,
  },
  endRecur: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  experience: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Experience",
  },
});

module.exports = mongoose.model("Events", eventsSchema);
