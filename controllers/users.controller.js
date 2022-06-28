const { Users } = require("../models/users.model");
const { errorHandler } = require("../utils/errorHandler");

const getAllActiveUsers = errorHandler(async (req, res, next) => {
  const activeUsers = await Users.findAll({ where: { status: "active" } });
  res.status(200).json({ activeUsers });
});

const getAllUsers = errorHandler(async (req, res, next) => {
  const activeUsers = await Users.findAll({
    attributes: { exclude: ["password"] },
  });
  res.status(200).json({ activeUsers });
});

const getUserActiveById = errorHandler(async (req, res, next) => {
  const { dbUser } = req;
  res.status(301).json({ dbUser });
});

const createUser = errorHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  const newUser = await Users.create({ name, email, password });
  res.status(200).json({ newUser });
});

const updateUser = errorHandler(async (req, res, next) => {
  const { name, email } = req.body;
  const { dbUser } = req;
  await dbUser.update({ name, email });
  res.status(202).json(dbUser);
});

const disableUser = errorHandler(async (req, res, next) => {
  const { dbUser } = req;
  await dbUser.update({ status: "inactive" });
  res.status(200).json({ status: "deleted" });
});

module.exports = {
  getAllActiveUsers,
  getAllUsers,
  createUser,
  updateUser,
  disableUser,
  getUserActiveById,
};
