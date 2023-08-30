const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");

const PORT = 8000;
const app = express();

const server = http.createServer(app);
const io = SocketIO(server);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/:room", (req, res) => {
  const room = req.params.room;
});

// 참고) Map()함수
// const a =new Map()
// a.set("aaa", "hi"); // key, value 형태로 저장됨.
// a.get("aaa") // hi 가져올 수 있음

function getUsersInRoom(room) {
  const users = [];
  // room에 접속한 clients의 정보를 확인 (각 socketId를 가져옴)
  const clients = io.sockets.adapter.rooms.get(room);
  // map 함수이기 때문에 get 사용
  // adapter는 다양한 서버에 있는 브라우저를 연결해준다고 생각
  if (clients) {
    clients.forEach((socketId) => {
      const userSocket = io.sockets.sockets.get(socketId);
      // socketId가 키값이 되어, value를 불러올 수 있음 (해당 socketId에 해당하는 socket 정보를 가져옴)
      // 밑에서 추가한 user, room 정보 포함되어 있음

      // 사용자에게 메세지를 보내기 위해서 객체 형태로 변경
      // key: 소켓아아디, value: 이름
      const info = { name: userSocket.user, key: socketId };
      users.push(info);
    });
  }
  return users;
}
const roomList = [];

io.on("connection", (socket) => {
  //socket!//
  //socket은 접속한 웹페이지, io는 접속해있는 모든 웹페이지
  //웹 페이지가 접속이되면 고유한 id값이 생성됨. socket.id로 확인가능
  //console.log(io.sockets);
  //채팅방 목록 보내기
  socket.emit("roomList", roomList);
  //채팅방 만들기 생성
  socket.on("create", (roomName, userName, cb) => {
    //join(방이름) 해당 방이름으로 없다면 생성. 존재하면 입장
    //socket.rooms에 socket.id값과 방이름 확인가능
    socket.join(roomName);
    //socket은 객체이며 원하는 값을 할당할 수 있음
    socket.room = roomName;
    socket.user = userName;

    socket.to(roomName).emit("notice", `${socket.user}님이 입장하였습니다.`);

    //채팅방 목록 갱신
    if (!roomList.includes(roomName)) {
      roomList.push(roomName);
      //갱신된 목록은 전체가 봐야함
      io.emit("roomList", roomList);
    }
    const usersInRoom = getUsersInRoom(roomName);
    io.to(roomName).emit("userList", usersInRoom);
    cb();
  });

  socket.on("sendMessage", (message) => {
    if (message.user === "all") {
      io.to(socket.room).emit("newMessage", message.message, message.nick);
    } else {
      io.to(message.user).emit("newMessageDM", message.message, message.nick);
      io.to(socket.id).emit("newMessageDM", message.message, message.nick);
    }
  });
  // socket.on("sendMessageDM", (sender, message) => {
  // console.log(sender);
  // const userlist = io.sockets.adapter.rooms.get(socket.room);
  // const userlistId = [];
  // userlist.forEach((socketId) => {
  //   userlistId.push(socketId);
  // });
  // const receiver = userlistId[Number(message.user)];
  // });

  socket.on("disconnect", () => {
    if (socket.room) {
      socket.leave(socket.room);
    }
  });
});

server.listen(8000, () => {
  console.log(`http://localhost:${PORT}`);
});
