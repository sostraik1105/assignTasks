const express = require("express");
const { globalErrorHandler } = require("./controllers/error.controller");
const { tasksRoutes } = require("./routes/tasks.routes");
const { usersRoutes } = require("./routes/users.routes");
const { AppError } = require("./utils/appError");
const app = express();

app.use(express.json());

app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/tasks", tasksRoutes);

app.all("*", (req, res, next) => {
  next(
    new AppError(
      `${req.method} ${req.originalUrl} not found in this server`,
      404
    )
  );
});

app.use(globalErrorHandler);

module.exports = { app };
