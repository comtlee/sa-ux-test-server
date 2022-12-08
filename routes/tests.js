const express = require("express");
const router = express.Router();
const {
  connectTest,
  basicTest,
  mouseTest,
  unloadTest,
  getTestlist,
  videoTest,
  getVideolist,
} = require("./controllers/tests.controller");

router.get("/", connectTest);

router.post("/:key/unload", unloadTest);
router.post("/:key/basic", basicTest);
router.post("/:key/mouse", mouseTest);
router.post("/:key/video", videoTest);

router.get("/:id/testlist", getTestlist);
router.get("/:id/videolist", getVideolist);

module.exports = router;
