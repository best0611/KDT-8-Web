const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");

const app = express();
const PORT = 8000;

// http 서버 연결
const server = http.createServer(app);
// socket 서버 연결
const io = SocketIO(server);

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("client");
});
app.get("/chat", (req, res) => {
  res.render("chat");
});

////////////소켓
// io.on("connection", (socket) => {
//   socket.on("new_message", (arg, val1, val2, val3, cb) => {
//     console.log(arg, val1, val2, val3);
//     cb(arg);
//   });
// });
// io.on("connection", (socket) => {
//   socket.on("new_message", (arg, cb) => {
//     console.log(arg);
//     cb(arg);
//   });
// });

io.on("connection", (socket) => {
  socket.on("join", (chatroom) => {
    socket.join(chatroom);
    socket.room = chatroom; // socket에 room 정보를 추가함
    console.log(socket.id);
    // io.to(특정방).emit(이벤트): 특정방의 전체 사용자에게 메시지 전달
    // io.to("room").emit("userjoin", `${username}님이 입장하셨습니다.`);
    // broadcast 포함 시, 나를 제외한 전체 사용자에게 메시지 전달
    socket.broadcast.to(chatroom).emit("userjoin", chatroom);
  });
  socket.on("message", (message) => {
    io.to(socket.room).emit("chat", socket.id, `${message}`);
  });
});

// 서버오픈
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
