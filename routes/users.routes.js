const { Router } = require("express");

// controllers
const {
  getAllActiveUsers,
  updateUser,
  createUser,
  disableUser,
  getAllUsers,
  getUserActiveById,
} = require("../controllers/users.controller");

// middlewares
const { userExists } = require("../middlewares/users.middlewares");
const {
  checkResults,
  userValidations,
} = require("../middlewares/validation.middleware");

const usersRoutes = Router();

usersRoutes.get("/", getAllActiveUsers);
usersRoutes.get("/all", getAllUsers);
usersRoutes.post("/", userValidations, checkResults, createUser);
usersRoutes
  .use("/:id", userExists)
  .route("/:id")
  .get(getUserActiveById)
  .patch(updateUser)
  .delete(disableUser);

module.exports = { usersRoutes };
