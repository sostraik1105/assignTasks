const { Tasks } = require("../models/tasks.model");
const { errorHandler } = require("../utils/ErrorHandler");

const getAllTasks = errorHandler(async (req, res, next) => {
  const task = await Tasks.findAll();
  res.status(200).json({ task });
});

const getTasksByStatus = errorHandler(async (req, res, next) => {
  const { status } = req.params;
  const tasks = await Tasks.findAll({ where: { status: `${status}` } });
  res.status(200).json({ tasks });
});

const assignTask = errorHandler(async (req, res, next) => {
  const { title, userId, limitDate } = req.body;
  const task = await Tasks.create({
    title,
    userId,
    limitDate,
  });
  res.status(201).json(task);
});

module.exports = { getAllTasks, assignTask, getTasksByStatus };
