const Project = require("../../models/Project");

exports.createProject = async (req, res, next) => {
  const userId = req.params.id;
  const { projectName, projectUrl, key } = req.body;

  try {
    const newProject = await Project.create({
      creator: JSON.parse(userId),
      projectName,
      projectUrl,
      key,
    });

    res.json({ result: "success", newProject });
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

exports.deleteProject = async (req, res, next) => {
  const result = req.params.id;
  const projectID = JSON.parse(result).id;

  try {
    await Project.findByIdAndDelete(projectID).lean();

    res.json({ result: "success" });
  } catch (error) {
    next(error);
  }
};
