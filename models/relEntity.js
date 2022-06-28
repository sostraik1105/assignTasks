const { Tasks } = require("./tasks.model");
const { Users } = require("./users.model");

const rels = () => {
  Users.hasMany(Tasks);
  Tasks.belongsTo(Users);
};

module.exports = { rels };
