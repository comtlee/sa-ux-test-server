const express = require("express");
const router = express.Router();
const { connectTest, basicTest } = require("./controllers/tests.controller");

router.get("/", connectTest);
router.post("/:key/basic", basicTest);

module.exports = router;
