const { Tasks } = require("../models/tasks.model");
const { errorHandler } = require("../utils/ErrorHandler");
const { AppError } = require("../utils/appError");

const getAllTasks = async (req, res) => {
  const task = await Tasks.findAll();
  res.status(200).json({ task });
};
module.exports = { getAllTasks };
