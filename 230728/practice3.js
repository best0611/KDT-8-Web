const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("p3test", { data: [1, 2, 3, 4, 5, 6, 7, 8, 9] });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
