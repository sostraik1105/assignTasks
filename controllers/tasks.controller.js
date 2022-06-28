const { Tasks } = require("../models/tasks.model");
const { AppError } = require("../utils/appError");
const { db } = require("../utils/database");
const { errorHandler } = require("../utils/ErrorHandler");

const allStatus = ["active", "completed", "late", "cancelled"];

const getAllTasks = errorHandler(async (req, res, next) => {
  const task = await Tasks.findAll();
  res.status(200).json({ task });
});

const getTasksByStatus = errorHandler(async (req, res, next) => {
  const { status } = req.params;
  const final = allStatus.find((el) => status === el) || null;
  if (final === null) {
    return next(new AppError("Status not found"), 404);
  }
  const tasks = await Tasks.findAll({ where: { status: `${status}` } });
  res.status(200).json({ tasks });
});

const assignTask = errorHandler(async (req, res, next) => {
  const { title, userId, limitDate } = req.body;
  const task = await Tasks.create({
    title,
    userId,
    limitDate,
    startDate: Date(),
  });
  res.status(201).json(task);
});

const cancelTask = errorHandler(async (req, res, next) => {
  const { dbTask } = req;
  await dbTask.update({ status: "cancelled" });
  res.status(200).json({ status: "deleted" });
});

const sendTask = errorHandler(async (req, res, next) => {
  const { dbTask } = req;

  const date = Date.now() - dbTask.limitDate;

  if (date <= 0) {
    await dbTask.update({ finishDate: Date, status: "completed" });
  } else {
    await dbTask.update({ finishDate: Date, status: "late" });
  }

  res.status(200).json({ dbTask });
});

module.exports = {
  getAllTasks,
  assignTask,
  getTasksByStatus,
  cancelTask,
  sendTask,
};
