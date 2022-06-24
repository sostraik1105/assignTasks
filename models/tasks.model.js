const { db, DataTypes } = require("../utils/database");

const Tasks = db.define("task", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  limitDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  finishDate: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.STRING,
    validate: {
      isIn: [["active", "completed", "late", "cancelled"]],
    },
  },
});

module.exports = { Tasks };
