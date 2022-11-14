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

exports.getProject = async (req, res, next) => {
  const userId = req.params.id;

  try {
    const projects = await Project.find({}).populate("creator").lean();
    const filteredProjects = projects.filter(
      (data) => String(data.creator._id) === JSON.parse(userId),
    );

    res.json({ result: "success", filteredProjects });
  } catch (error) {
    next(error);
  }
};
