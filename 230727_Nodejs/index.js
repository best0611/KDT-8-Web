// const mod = require("./module.js");
// // 변수를 만들어, require()으로 가져와야 함.
// // 이렇게 require로 외부 모듈을 가져오면 됨
// console.log(mod);

const http = require("http");
// http 모듈은 node 자체적으로 가지고 있음.
const fs = require("fs");

const server = http.createServer((request, response) => {
  //   response.writeHead(200);
  //   response.write("<h1>Hello World</h1>");
  //   response.end("<p>End</p>");

  // 파일전송
  try {
    const data = fs.readFileSync("./index.html");
    response.writeHead(200);
    response.end(data);
  } catch (error) {
    console.log(error);
    response.writeHead(404);
    response.end(error.message);
  }
});

server.listen(8000, function () {
  console.log("localhost: 8000포트로 실행");
});
