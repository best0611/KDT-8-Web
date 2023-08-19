const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const visitorRouter = require("./routes");
app.use("/visitor", visitorRouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.use("*", (req, res) => {
  res.render("404");
});

db.sequelize.sync({ force: false }).then(() => {
  // force: false 이면, 테이블 없으면 생성, 있으면 있는 것을 가져옴
  // force: true 이면, 항상 테이블을 새로 생성. (원래 있던 것 지워짐)
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
