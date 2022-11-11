const express = require("express");
const router = express.Router();
const { tests } = require("./controllers/tests.controller");

router.get("/", tests);

module.exports = router;
