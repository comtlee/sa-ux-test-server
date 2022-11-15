const express = require("express");
const router = express.Router();
const {
  createProject,
  getProject,
  deleteProject,
} = require("./controllers/projects.controller");

router.route("/:id").post(createProject).get(getProject).delete(deleteProject);

module.exports = router;
