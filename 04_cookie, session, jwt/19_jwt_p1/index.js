const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8000;
const SECRET = "mySecretKey";

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("login");
});

const userinfo = { id: "kdt8", pw: "1234" };

app.post("/login", (req, res) => {
  const { userid, userpw } = req.body;
  if (userid === userinfo.id && userpw === userinfo.pw) {
    const token = jwt.sign({ userid }, SECRET);
    res.send({ result: true, userid, token });
  } else {
    res.send({ result: false });
  }
});

app.get("/verify", (req, res) => {
  console.log(req.headers.authorization);
  const auth = req.headers.authorization;
  const token = auth.split(" ");
  jwt.verify(token[1], SECRET, (err, decoded) => {
    if (err) {
      res.send({ result: false });
    }
    res.send({ result: true, userid: decoded });
  });
});

app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}`);
});
