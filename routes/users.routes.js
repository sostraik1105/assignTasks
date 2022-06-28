const { Router } = require("express");
const {
  getAllActiveUsers,
  updateUser,
  createUser,
  disableUser,
  getAllUsers,
  getUserActiveById,
} = require("../controllers/users.controller");
const { userExists } = require("../middlewares/users.middlewares");

const usersRoutes = Router();

usersRoutes.get("/", getAllActiveUsers);
usersRoutes.get("/all", getAllUsers);
usersRoutes.post("/", createUser);
usersRoutes
  .use("/:id", userExists)
  .route("/:id")
  .get(getUserActiveById)
  .patch(updateUser)
  .delete(disableUser);

module.exports = { usersRoutes };
