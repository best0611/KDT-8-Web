const express = require("express");
const app = express();
const PORT = 8000;
const bcrypt = require("bcrypt");
const db = require("./models");
const { Users } = require("./models");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.get("/signin", (req, res) => {
  res.render("signin");
});

app.post("/signup", (req, res) => {
  try {
    const { userid, pw, name } = req.body;
    const hash = bcryptPassword(pw);
    console.log(hash);
    Users.create({
      pw: hash,
      name,
      userid,
    }).then(() => {
      res.send({ result: true });
    });
  } catch (error) {
    console.log(error);
    res.send({ result: false });
  }
});

app.post("/signin", (req, res) => {
  const { userid, pw } = req.body;
  Users.findOne({
    where: {
      userid,
    },
  }).then((result) => {
    if (!result) {
      res.json({ result: null });
    } else {
      const dbPassword = result.pw;
      const compare = comparePassword(pw, dbPassword);
      res.json({ compare });
    }
  });
});

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});

const salt = 10;
const bcryptPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};
const comparePassword = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
};
