const express = require("express");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("views"));
// app.use("public", express.static("./public"));

app.get("/", (req, res) => {
  res.render("p1test");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
