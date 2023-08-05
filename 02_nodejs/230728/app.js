const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.render("apptest", {
    data: [
      "http://localhost:8000/apple",
      "http://localhost:8000/banana",
      "http://localhost:8000/peach",
    ],
    image: "",
  });
});
app.get("/apple", (req, res) => {
  res.render("apptest", {
    data: [
      "http://localhost:8000/apple",
      "http://localhost:8000/banana",
      "http://localhost:8000/peach",
    ],
    image: "public/apple.jpeg",
  });
});

app.get("/banana", (req, res) => {
  res.render("apptest", {
    data: [
      "http://localhost:8000/apple",
      "http://localhost:8000/banana",
      "http://localhost:8000/peach",
    ],
    image: "public/banana.jpeg",
  });
});
app.get("/peach", (req, res) => {
  res.render("apptest", {
    data: [
      "http://localhost:8000/apple",
      "http://localhost:8000/banana",
      "http://localhost:8000/peach",
    ],
    image: "public/peach.jpeg",
  });
});

app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
