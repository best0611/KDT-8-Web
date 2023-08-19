const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const PORT = 8000;
const SECRET = "Gu%#-GG/j:{xDrk";

const userinfo = { id: "kdt8", pw: "1234", name: "홍길동" };

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("reindex");
});
app.get("/login", (req, res) => {
  res.render("relogin");
});
app.post("/login", (req, res) => {
  try {
    const { id, pw } = req.body;
    const { id: uId, pw: uPw } = userinfo;
    if (id === uId && pw === uPw) {
      const token = jwt.sign({ id }, SECRET);
      res.send({ result: true, token });
    } else {
      res.send({ result: false, message: "아이디와 비밀번호를 확인해주세요" });
    }
  } catch (error) {
    console.log(error);
  }
});
app.post("/token", (req, res) => {
  const token = req.headers.authorization.split(" ");
  try {
    const result = jwt.verify(token[1], SECRET);
    console.log(result);
    if (result.id === userinfo.id) {
      res.json({ result: true, name: userinfo.name });
    } else {
      res.json({ result: false, message: "잘못된 접근입니다." });
    }
  } catch (error) {
    console.log(error);
    res.redirect("/login");
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
