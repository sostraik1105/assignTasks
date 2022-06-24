const express = require("express");
const { db } = require("./utils/database");

const { Users } = require("./models/users.model");
const { Tasks } = require("./models/tasks.model");

Users.hasMany(Tasks);
Tasks.belongsTo(Users);

const app = express();

app.use(express.json());

db.sync({ force: true });

app.listen(process.env.PORT || 4000, () => {
  console.log(`App running at port ${process.env.PORT}`);
});
