const { Router } = require("express");

// controller
const {
  getAllTasks,
  assignTask,
  getTasksByStatus,
  cancelTask,
  sendTask,
} = require("../controllers/tasks.controller");

// middleware
const { existTask } = require("../middlewares/tasks.middlewares");

const tasksRoutes = Router();

tasksRoutes.get("/", getAllTasks);
tasksRoutes.post("/", assignTask);
tasksRoutes.get("/:status", getTasksByStatus);
tasksRoutes
  .use("/:id", existTask)
  .route("/:id")
  .patch(sendTask)
  .delete(cancelTask);

module.exports = { tasksRoutes };
