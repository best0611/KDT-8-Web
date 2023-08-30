const http = require("http");
const ws = require("ws");
const express = require("express");
const app = express();
const PORT = 8000;
// http 서버
const server = http.createServer(app);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

// 웹소켓 서버 접속
const wss = new ws.Server({ server }); // http 서버에 접속.

// 브라우저(클라이언트)들을 담을 변수 선언
const sockets = [];

// wss.on: 서버 실행
// socket: 접속한 브라우저를 의미
wss.on("connection", (socket) => {
  console.log("클라이언트가 연결되었습니다.");
  // sockets 배열에 브라우저 추가
  sockets.push(socket);

  socket.on("message", (message) => {
    console.log(`클라이언트로부터 받은 메세지: ${message}`);
    // 클라이언트로 응답 메세지 전송
    // socket.send(`서버메세지: ${message}`);
    sockets.forEach((elem) => {
      elem.send(`서버메세지: ${message}`);
    });
  });
  // 오류
  socket.on("error", (err) => {
    console.log("에러가 발생하였습니다.", err);
  });
  // 접속 종료
  socket.on("close", () => {
    console.log("클라이언트와 연결이 종료됨");
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
