// const express = require("express");
import express from "express";
const app = express();
const PORT = 8000;
import { Person } from "./app.js";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("login");
});

app.post("/appLogin", (req, res) => {
  console.log("back", req.body);
  if (req.body.Id == Person.ID && req.body.password == Person.PW) {
    res.send(req.body);
  } else {
    res.end();
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
