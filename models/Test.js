const mongoose = require("mongoose");

const basicEventSchema = new mongoose.Schema({
  visit: {
    type: Number,
  },
  referrer: {
    type: Array,
  },
  connectTime: {
    type: Date,
  },
  disconnectTime: {
    type: Date,
  },
  lastIp: {
    type: Array,
  },
});

const mouseEventSchema = new mongoose.Schema({
  tag: {
    type: Array,
  },
  context: {
    type: Array,
  },
});

const videoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
});

const TestSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  basicEvent: {
    type: [basicEventSchema],
    default: {},
  },
  mouseEvent: {
    type: [mouseEventSchema],
    default: {},
  },
  video: {
    type: [videoSchema],
    default: {},
  },
});

module.exports = mongoose.model("Test", TestSchema);
