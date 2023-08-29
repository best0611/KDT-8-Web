const ws = require("ws");
const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("clientP1");
});

const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

const sockets = [];
const wss = new ws.Server({ server });

wss.on("connection", (socket) => {
  console.log("클라이언트가 연결되었습니다.");
  sockets.push(socket);
  socket.on("message", (message) => {
    // 웹소켓을 통해 클라이언트와 서버 간의 데이터를 주고받을 때는 일반적으로 문자열 또는 버퍼 형태로 전달됨
    // 서버가 모두 다른 환경이기 때문에, 객체를 전달할 때 객체를 일련의 바이트로 변환하는 직렬화과정이 필요

    // 문자열로 받은 message를 다시 객체로 parsing. (nodejs는 객체 읽을 수 있으므로)
    const user = JSON.parse(message).user;
    const msg = JSON.parse(message).msg;

    // wss.clients: 현재 서버에 접속하고 있는 클라이언트 모두 속해 있음.
    wss.clients.forEach((elem) => {
      elem.send(`${user}: ${msg}`);
    });
    // sockets.forEach((elem) => {
    //   elem.send(`${user}: ${msg}`);
    // });
  });
  socket.on("error", (err) => {
    console.log("에러가 발생하였습니다.", err);
  });
  socket.on("close", () => {
    console.log("클라이언트와 연결이 종료됨");
  });
});

// json.Stringify - nodejs 외에 c++, java 등 다양한 서버가 있음. 이것들을 프론트에서 처리해주기 위해 json 방식 이용. 객체를 만들어서 서버에 보내도, 그걸 이해하지 못하는 서버도 있기 때문에 string 형태로 만들어서 보내야함. json.Stringify는 json 방식으로 string 형태로 만들어서 보냄.
// 그렇게 받은 string 형식을 서버에서 parsing.
