const models = require("../models");
const { Op } = require("sequelize");

exports.main = (req, res) => {
  res.render("index");
};

exports.getsignup = (req, res) => {
  res.render("signup");
};
exports.getsignin = (req, res) => {
  res.render("signin");
};

exports.postsignup = (req, res) => {
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then((result) => {
    console.log("result", result);
    res.send({ result: true });
  });
};
exports.postsignin = (req, res) => {
  models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  }).then((result) => {
    res.send({ result: true, data: result });
  });
};
exports.postprofile = (req, res) => {
  models.User.findOne({
    where: { userid: req.body.profile },
  }).then((result) => {
    res.render("profile", { data: result });
  });
};
exports.editprofile = (req, res) => {
  console.log(req.body);
  const { id, indexId, name, pw } = req.body;
  models.User.update({ userid: id, pw, name }, { where: { id: indexId } }).then(
    () => {
      res.send({ result: true });
    }
  );
};
exports.delprofile = (req, res) => {
  console.log(req.query);
  const { id } = req.query;
  models.User.destroy({ where: { id } }).then((result) => {
    console.log("result", result);
    res.send({ result: true });
  });
};
