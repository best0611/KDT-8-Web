const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(cookieParser());
const cookieConfig = {
  httpOnly: true,
  maxAge: 60 * 1000 * 60 * 24,
};

app.get("/", (req, res) => {
  res.render("index");
  // res.render('index', {popup: req.cookies.modal})
});

app.get("/stopShow", (req, res) => {
  res.cookie("stopShow", "checked", cookieConfig);
  res.send(req.cookies.stopShow);
  // res.send({result: true, msg: '쿠키 생성 완료'})
});

app.get("/clearCookie", (req, res) => {
  res.clearCookie("stopShow", "checked", cookieConfig);
  res.send("clear cookie");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
