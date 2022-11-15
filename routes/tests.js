const express = require("express");
const router = express.Router();
const { getKey } = require("./controllers/tests.controller");

router.get("/", getKey);

module.exports = router;
