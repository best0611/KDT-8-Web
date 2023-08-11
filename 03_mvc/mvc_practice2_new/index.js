// const express = require("express");
import express from "express";
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
// app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const indexRouter = require("./routes/user");
import indexRouter from "./routes/user.js";
app.use("/user", indexRouter);

app.use("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
