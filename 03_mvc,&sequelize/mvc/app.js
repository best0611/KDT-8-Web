const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
//app.use('/views', express.static(__dirname + '/views'));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require("./routes"); // routes 폴더 내 index.js 파일을 가져온다 (index.js는 생략 가능)
app.use("/", indexRouter); // '/'로 가는 것은 indexRouter에서 처리하겠다. (index.js에서 경로를 controller와 연결)

// app.get("/", (req, res) => {
//   res.render("index");
// });

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
