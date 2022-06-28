const { body, validationResult } = require("express-validator");

const userValidations = [
  body("name").notEmpty().withMessage("Name cannot be null"),
  body("email")
    .notEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("Must be a valid email"),
  body("password")
    .notEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];

const taskValidation = [
  body("userId")
    .notEmpty()
    .withMessage("Id user cannot be empty")
    .isInt()
    .withMessage("Id user is a number"),
  body("title").notEmpty().withMessage("Id user cannot be empty"),
  body("limitDate")
    .notEmpty()
    .withMessage("limit date cannot be empty")
    .isDate()
    .withMessage("Date format is invalid"),
  body("startDate")
    .notEmpty()
    .withMessage("limit date cannot be empty")
    .isDate()
    .withMessage("Date format is invalid"),
];

const checkResults = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const list = errors.array().map((el) => `${el.param}: ${el.msg}.`);
    return res.status(400).json({ status: "error", message: list.join(" ") });
  }
  next();
};

module.exports = { userValidations, taskValidation, checkResults };
