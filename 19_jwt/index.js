const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8000;
const SECRET = "secretKey";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post("/login", (req, res) => {
  const { id } = req.body;
  const token = jwt.sign({ id }, SECRET); // jwt 생성
  //   console.log(token);
  res.send({ result: true, token });
});
app.post("/verify", (req, res) => {
  console.log(req.headers.authorization);
  const auth = req.headers.authorization;
  const token = auth.split(" ");
  console.log(token);
  if (token[0] === "Bearer") {
    // const result = jwt.verify(token[1], SECRET) // 이렇게 변수 지정해서 return 받아 사용할 수 있지만, 이런 경우 try, catch 필요함
    jwt.verify(token[1], SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(403)
          .send({ result: false, message: "검증에 실패하였습니다." });
      }
      res.send({ result: true, user: decoded });
    });
  } else {
    res.send({ result: false, message: "올바른 인증방식 아닙니다." });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
