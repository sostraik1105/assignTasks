const { app } = require("./app");

// utils
const { db } = require("./utils/database");

// models
const { rels } = require("./models/relEntity");

rels();

db.sync();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App running at port ${PORT}`);
});
