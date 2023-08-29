const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");

const PORT = 8000;
const app = express();

const server = http.createServer(app);
const io = SocketIO(server);

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("clientP1");
});

io.on("connection", (socket) => {
  console.log("Server Socket Connected");
  socket.on("helloE", (arg) => {
    console.log(`${arg.name}: ${arg.message}`);
    socket.emit("response", { name: "server", message: "안녕하세요." });
  });
  socket.on("studyE", (arg) => {
    console.log(`${arg.name}: ${arg.message}`);
    socket.emit("response", { name: "server", message: "공부합시다!" });
  });
  socket.on("byeE", (arg) => {
    console.log(`${arg.name}: ${arg.message}`);
    socket.emit("response", { name: "server", message: "잘가~" });
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
