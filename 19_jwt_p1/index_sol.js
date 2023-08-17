const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8000;
const SECRET = "xRaE4zFPIIpr0nWhpwhC1w8G2rwBsGHU"; // random key gen 활용해도 됨

const userInfo = { id: "kdt8", pw: "1234", name: "홍길동" };

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/index", (req, res) => {
  res.render("index");
});

app.get("/login2", (req, res) => {
  res.render("login2");
});

app.post("/login2", (req, res) => {
  // async, awiat과 try, catch 함께 쓰는 습관!
  try {
    const { id, pw } = req.body;
    const { id: uId, pw: uPw } = userInfo; // 구조분해 할당 시, 이름이 겹친다면 :을 이용하여 이름 바꿔줄 수 있음
    if (id === uId && pw === uPw) {
      // 토큰 생성
      const token = jwt.sign({ id }, SECRET);
      res.json({ result: true, token });
      // .json은 객체 형태만 보낼 수 있음. (객체를 보낼 때는 .json을 쓰는 것이 일반적임)
      // .send는 json, script, string 등 다양하게 보낼 수 있음
    } else {
      res.json({ result: false, message: "로그인 정보가 올바르지 않습니다." });
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/token", (req, res) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ");
    try {
      const result = jwt.verify(token[1], SECRET);
      // error가 나면 catch문에서 처리됨 (콜백함수 안넣어도 처리된 것)
      if (result.id === userInfo.id) {
        res.json({ result: true, name: userInfo.name });
      }
    } catch (error) {
      console.log(error);
      res.json({ result: false, message: "인증된 회원이 아닙니다." });
    }
  } else {
    res.redirect("/login2");
  }
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
