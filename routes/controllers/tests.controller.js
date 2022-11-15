const createError = require("http-errors");
const ERROR = require("../../constant/error");

exports.getKey = (req, res, next) => {
  const key = req.query.key;

  if (!key) {
    next(createError(ERROR.FAILED_REQUEST));
  }

  res.json({ message: "success" });
};
