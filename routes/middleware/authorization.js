const admin = require("../../config/firebase");
const createError = require("http-errors");
const ERROR = require("../../constants/error");

exports.verifyToken = async (req, res, next) => {
  const token = req.headers?.authorization.split(" ")[1];

  try {
    const decoded = await admin.auth().verifyIdToken(token);

    if (!decoded) {
      next(createError(401, ERROR.UNAUTHORIZED_USER));
    }

    req.user = decoded;

    next();
  } catch (error) {
    next(error);
  }
};
