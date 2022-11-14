const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  projectUrl: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
