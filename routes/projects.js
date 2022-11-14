const express = require("express");
const router = express.Router();
const {
  createProject,
  getProject,
} = require("./controllers/projects.controller");

router.route("/:id").post(createProject).get(getProject);

module.exports = router;
