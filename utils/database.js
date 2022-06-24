const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const db = new Sequelize({
  dialect: "postgres",
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  logging: false,
});

module.exports = { db, DataTypes };
