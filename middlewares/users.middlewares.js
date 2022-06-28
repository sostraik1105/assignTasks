const { Users } = require("../models/users.model");
const { AppError } = require("../utils/appError");
const { errorHandler } = require("../utils/errorHandler");

const userExists = errorHandler(async (req, res, next) => {
  const { id } = req.params;
  const dbUser = await Users.findOne({ where: { id, status: "active" } });
  if (!dbUser) {
    return next(new AppError("User not found!", 404));
  }
  req.dbUser = dbUser;
  next();
});

module.exports = { userExists };
