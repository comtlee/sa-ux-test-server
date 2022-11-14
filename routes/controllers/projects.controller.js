const Project = require("../../models/Project");

exports.createProject = async (req, res, next) => {
  const userId = req.params.id;
  const { projectName, projectUrl, key } = req.body;

  try {
    await Project.create({
      creator: JSON.parse(userId),
      projectName,
      projectUrl,
      key,
    });

    res.json({ result: "success" });
  } catch (error) {
    next(error);
  }
};
