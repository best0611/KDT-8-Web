const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require("./routes");
app.use("/", indexRouter); // ('/'으로 시작하면 indexRouter로 들어가게 됨.)
// '/visitor'으로 지정하면, routes 파일에서 '/visitors' 생략 가능 (그 파일 안에 있는 '/' main 페이지는 따로 이 app.js 파일에 빼놓으면 됨.)

app.get("*", (req, res) => {
  res.render("404");
});

// app.use('*', (req, res) => {
//   res.render('404')
// })
// get, post, patch, delete 각각에 대해 동일한 도메인/visitor 받아 실행하도록. (정보 전달 방식에 따라 각각의 도메인/visitor 요청 받아 별도로 실행)
// use의 경우 모두 받아서 실행 -> 오류처리는 분리할 필요가 없으므로 app.use로 처리해도 됨

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
