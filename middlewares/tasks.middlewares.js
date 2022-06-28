const { Tasks } = require("../models/tasks.model");
const { AppError } = require("../utils/appError");
const { errorHandler } = require("../utils/errorHandler");

const existTask = errorHandler(async (req, res, next) => {
  const { id } = req.params;
  const dbTask = await Tasks.findOne({ where: { id, status: "active" } });
  if (!dbTask) {
    return next(new AppError("Task not found!", 404));
  }

  req.dbTask = dbTask;
  next();
});

module.exports = { existTask };
