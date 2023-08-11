const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.use(
  session({
    secret: "mySessionKey",
    resave: false,
    saveUninitialized: true,
  })
);

//router
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
