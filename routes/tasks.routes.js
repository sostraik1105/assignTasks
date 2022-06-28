const { Router } = require("express");
const {
  getAllTasks,
  assignTask,
  getTasksByStatus,
} = require("../controllers/tasks.controller");

const tasksRoutes = Router();

tasksRoutes.get("/", getAllTasks);
tasksRoutes.post("/", assignTask);
tasksRoutes.get("/:status", getTasksByStatus);
tasksRoutes.route("/:id").patch().delete();

module.exports = { tasksRoutes };
