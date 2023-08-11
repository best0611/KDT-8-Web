const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set(cookieParser());
const cookieConfig = {
  maxAge: 60 * 1000 * 60 * 24,
};

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/stopShow", (req, res) => {
  res.cookie("stopShow", "checked", cookieConfig);
  res.send({ result: true });
});

app.get("/clearCookie", (req, res) => {
  res.clearCookie("stopShow", "checked", cookieConfig);
  res.send("clear cookie");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
