const createError = require("http-errors");
const ERROR = require("../../constants/error");
const fs = require("fs");
const Project = require("../../models/Project");
const Test = require("../../models/Test");
const puppeteer = require("puppeteer");
const { PuppeteerScreenRecorder } = require("puppeteer-screen-recorder");

exports.connectTest = (req, res, next) => {
  const uniqId = req.query.key;

  if (!uniqId) {
    next(createError(ERROR.FAILED_REQUEST));
  }

  fs.unlinkSync("public/javascripts/writeFile.js");

  const read = fs.createReadStream("public/javascripts/readFile.js");
  const write = fs.createWriteStream("public/javascripts/writeFile.js");

  write.on("close", () => {
    fs.appendFileSync(
      "public/javascripts/writeFile.js",
      `const key = "${uniqId}";`,
    );

    const source = fs.readFileSync("public/javascripts/writeFile.js", "utf8");

    res.send(source);
  });

  read.pipe(write);
};

exports.basicTest = async (req, res, next) => {
  const params = req.params.key;
  const event = req.query.event;
  const parseEvent = JSON.parse(event);

  try {
    const searchKey = await Project.findOne({ key: params });

    if (!searchKey) {
      next(createError(ERROR.FAILED_REQUEST));
    }

    const projectID = searchKey._id;
    const findID = await Test.findOne({ projectId: projectID });

    if (!findID && parseEvent.name === "connect") {
      const newBasicTest = await new Test({
        projectId: projectID,
        basicEvent: {
          visit: 1,
          referrer: parseEvent.data.url,
          connectTime: new Date(),
          disconnectTime: new Date(),
          lastIp: parseEvent.data.lastIp,
        },
      });

      newBasicTest.save();
    }

    await Test.updateOne(
      { projectId: projectID },
      {
        $inc: {
          "basicEvent.0.visit": 1,
        },
        $set: {
          "basicEvent.0.connectTime": new Date(),
        },
        $push: {
          "basicEvent.0.referrer": parseEvent.data.url,
          "basicEvent.0.lastIp": parseEvent.data.lastIp,
        },
      },
    );

    res.end();
  } catch (error) {
    next(error);
  }
};

exports.mouseTest = async (req, res, next) => {
  const params = req.params.key;
  const event = req.query.event;
  const parseEvent = JSON.parse(event);

  try {
    const searchKey = await Project.findOne({ key: params });

    const findID = await Test.findOne({ projectId: searchKey._id });

    if (parseEvent.name === "click") {
      await Test.updateOne(
        { projectId: findID.projectId },
        {
          $push: {
            mouseEvent: {
              tag: parseEvent.data.tag,
              context: parseEvent.data.context,
            },
          },
        },
      );
    }

    res.end();
  } catch (error) {
    next(error);
  }
};

exports.videoTest = async (req, res, next) => {
  const params = req.params.key;

  (async () => {
    try {
      const browser = await puppeteer.launch({
        defaultViewport: {
          width: 1100,
          height: 1100,
          isLandscape: true,
        },
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
        ignoreDefaultArgs: ["--disable-extensions"],
      });

      const page = await browser.newPage();
      const recorder = new PuppeteerScreenRecorder(page, {
        fps: 20,
      });

      await recorder.start(`./upload/${params}.mp4`);
      await page.goto("https://www.vanillacoding.co/");

      //---------**테스트 하는 사이트**----------//
      // await page.goto("https://scintillating-cassata-f06e40.netlify.app", {
      //   waitUntil: "networkidle2",
      // });

      await recorder.stop();
      await browser.close();

      const searchKey = await Project.findOne({ key: params });
      const findID = await Test.findOne({ projectId: searchKey._id });

      await Test.updateOne(
        { projectId: findID.projectId },
        {
          $push: {
            video: {
              createdAt: new Date(),
            },
          },
        },
      );

      res.end();
    } catch (error) {
      next(error);
    }
  })();
};

exports.unloadTest = async (req, res, next) => {
  const params = req.params.key;
  const event = req.query.event;
  const parseEvent = JSON.parse(event);

  try {
    const searchKey = await Project.findOne({ key: params });

    if (!searchKey) {
      next(createError(ERROR.FAILED_REQUEST));
    }

    const projectID = searchKey._id;
    const findID = await Test.findOne({ projectId: projectID });

    if (parseEvent.name === "unload") {
      return await Test.updateOne(
        { projectId: findID.projectId },
        {
          $set: {
            "basicEvent.0.disconnectTime": new Date(),
          },
        },
      );
    }

    res.end();
  } catch (error) {
    next(error);
  }
};

exports.getTestlist = async (req, res, next) => {
  const projectID = req.params.id;

  try {
    const testlist = await Test.find({ projectId: JSON.parse(projectID) });

    if (testlist.length > 0) {
      res.json({ result: "success", testlist: testlist[0] });
    } else {
      res.json({ result: "failure", testlist: undefined });
    }
  } catch (error) {
    next(error);
  }
};

exports.getVideolist = async (req, res, next) => {
  const projectID = req.params.id;

  try {
    const tests = await Test.find({ projectId: JSON.parse(projectID) });

    if (tests.length > 0) {
      const project = await Project.find({ projectId: tests.projectId });
      const params = project[0].key;

      let readStream = fs.createReadStream(`./upload/${params}.mp4`);
      let stat = fs.statSync(`./upload/${params}.mp4`);

      readStream.on("close", () => {
        res.end();
      });

      res.setHeader("Content-Length", stat.size);
      res.setHeader("Content-Type", "multipart/form-data");
      res.setHeader("Content-Disposition", "inline; filename=test.mp4");

      readStream.pipe(res);
    } else {
      res.json({ result: "failure" });
    }
  } catch (error) {
    next(error);
  }
};
