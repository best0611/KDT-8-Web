const User = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};
exports.getsignup = (req, res) => {
  res.render("signup");
};
exports.postsignup = (req, res) => {
  console.log(req.body);
  User.signup(req.body, () => {
    res.send({ result: true });
  });
};

exports.getsignin = (req, res) => {
  res.render("signin");
};
exports.postsignin = (req, res) => {
  console.log(req.body);
  User.signin(req.body, (result) => {
    console.log(result);
    if (result.length > 0) {
      res.send({ result: true, data: result[0] });
    } else {
      res.send({ result: false });
    }
  });
};

exports.postprofile = (req, res) => {
  User.postprofile(req.body.profile, (result) => {
    // console.log(result);
    if (result.length > 0) {
      res.render("profile", { data: result[0] });
    } else {
      res.redirect("/user/signin");
    }
  });
};
