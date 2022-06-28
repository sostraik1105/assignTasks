const { app } = require("./app");
const { db } = require("./utils/database");
const { rels } = require("./models/relEntity");

rels();

db.sync();

app.listen(process.env.PORT || 4000, () => {
  console.log(`App running at port ${process.env.PORT}`);
});
