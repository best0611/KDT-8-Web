const express = require("express");
// 변수에 저장하여, 모듈을 가져옴. 보통 모듈 이름과 동일하게.

// import express from "express";
// json 파일에 type: module 추가해야 인식됨. (추가되면, 위의 require은 오류)

const app = express();
const PORT = 8000; // 관례 상, 상수는 대문자로.
// express 자체적으로 쓸 수 없기 때문에, 변수에 넣어줌.

// 뷰엔진
app.set("view engine", "ejs"); // view engine을 ejs로 세팅함.
app.set("views", "./views");

// 정적인 파일 불러오기 (관례 상, 정적인 파일은 public이라는 폴더를 만들어 저장해둠)
// app.use("public", express.static("./public"));
// 앞의 views는 도메인의 경로(그래서 / 붙여줌), 뒷부분은 서버의 경로를 말해줌 -> ejs 파일에서 불러오는 파일의 위치도 public에서 시작해야겠지.

app.get("/", (req, res) => {
  // send() 클라이언트에 응답 데이터를 보낼 때
  //   res.send("Hello express");
  //   res.send({
  //     result: true,
  //     code: 1000,
  //     message: "회원가입에 성공하였습니다.",
  //     data: { name: "martin" },
  //   });

  // render() 뷰 엔진 렌더링
  res.render("test", { data: "martin" });
});
//get 방식으로 불러옴. "/"는 도메인 이름.
// "/app"을 입력하면 localhost:8000/app 으로 주소 입력해야함.
// .send: 데이터를 보내줌. (객체도 가능. 객체 안에 객체도 가능)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
// listen: 서버를 열어줌.
// console.log는 브라우저가 아닌, terminal 창에서 확인가능.
console.log(express);
