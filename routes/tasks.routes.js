const { Router } = require("express");
const { getAllTasks } = require("../controllers/tasks.controller");

const tasksRoutes = Router();

tasksRoutes.get("/", getAllTasks);
tasksRoutes.post("/");
tasksRoutes.route("/:id").get().put().delete();

module.exports = { tasksRoutes };
