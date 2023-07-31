const express = require("express");
const app = express();
const PORT = 8000;

// 전송된 body 값을 받아올 수 있는 미들웨어를 설정해 줌 (body-parser)
// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// router (주소 구분)
app.get("/", (req, res) => {
  //   res.send("Hello");
  res.render("index", { title: "폼 실습" });
});

app.get("/getForm", (req, res) => {
  console.log(req.query);
  res.render("result", {
    title: "GET요청 폼 결과 확인하기",
    userInfo: req.query,
    // userInfo: {id: '', pw: ''}
  });
});

app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.render("result", {
    title: "POST요청 폼 결과 확인하기",
    userInfo: req.body,
    // userInfo: {id: '', pw: ''}
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
