const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

// 세션 이용
// 옵션 객체
// httpOnly: 값을 true로 하면, 사용자가 자바스크립트를 통해서 세션을 사용할 수 없도록 강제
// secure: 값을 true로 하면, https에서만 세션을 주고받음
// secret: 안전하게 쿠키를 전송하기 위해 쿠키 서명 값(세션을 발급할 때 사용되는 키)
// resave: 세션에 수정사항이 생기지 않더라도, 매 요청(req)마다 세션을 다시 저장할 것인지. 덮어쓰기 가능하게 하기 (true)
// saveUninitialized: 세션에 저장할 내역이 없더라도, 처음부터 세션을 생성할지 설정
app.use(
  session({
    secret: "mySessionKey",
    resave: false,
    saveUninitialized: true,
  })
);
app.get("/", (req, res) => {
  //세션 설정
  req.session.name = "홍길동";
  res.send("세션 설정 완료");
});

app.get("/name", (req, res) => {
  res.send(req.session.name);
});

app.get("/destroy", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
  // 세션이 삭제되었다는 것은, 그 페이지에 대한 접근 제한 등의 액션이 필요하기 때문에 콜백함수 필요함.
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
