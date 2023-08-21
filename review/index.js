const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models");
const Router = require("./routes");

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", Router);
app.use("*", (req, res) => {
  res.render("404");
});

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost${PORT}`);
  });
});
