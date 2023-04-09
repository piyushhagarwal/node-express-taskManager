const mongoose = require("mongoose");

const TaskScema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Must provide a value"],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskScema);
