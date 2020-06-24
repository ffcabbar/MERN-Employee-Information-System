const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  task: { type: String, required: true },
});

module.exports = Task = mongoose.model("task", taskSchema);
