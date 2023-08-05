const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("practice1");
});

app.get("/getForm", (req, res) => {
  res.render("result_p1", {
    userInfo: req.query,
  });
  console.log(req.query);
});

app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.render("result_p1", {
    userInfo: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
