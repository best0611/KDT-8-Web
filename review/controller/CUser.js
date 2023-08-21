const { where } = require("sequelize");
const { User } = require("../models");
// 암호화
const bcrypt = require("bcrypt");
const salt = 10;
// JWT
const jwt = require("jsonwebtoken");
const SECRET = "QA5RDogcXd";

const bcryptPassword = (pw) => {
  return bcrypt.hashSync(pw, salt);
};
const comparePassword = (pw, dbPw) => {
  return bcrypt.compareSync(pw, dbPw);
};

exports.getHome = (req, res) => {
  res.render("index");
};
exports.getSignup = (req, res) => {
  res.render("signup");
};
exports.getSignin = (req, res) => {
  res.render("signin");
};
exports.postSignup = async (req, res) => {
  try {
    const { userid, pw, name } = req.body;
    const dbPw = bcryptPassword(pw);
    console.log(dbPw);
    await User.create({ userid, pw: dbPw, name });
    res.send({ result: true, message: "회원가입을 환영합니다!" });
  } catch (error) {
    res.send({ result: false, message: "회원가입에 실패하였습니다." });
    console.log(error);
  }
};
exports.postSignin = async (req, res) => {
  try {
    const { userid, pw } = req.body;
    const result = await User.findOne({ where: { userid } });
    // console.log("result", result);
    if (comparePassword(pw, result.pw)) {
      const token = jwt.sign({ name: result.name }, SECRET);
      res.send({ result: true, message: "로그인 되었습니다.", token });
    } else {
      res.send({
        result: false,
        message: "아이디와 비밀번호가 일치하지 않습니다.",
      });
    }
  } catch (error) {
    res.send({ result: false, message: "회원정보가 없습니다." });
    console.log(error);
  }
};
exports.postToken = (req, res) => {
  const token = req.headers.authorization.split(" ");
  jwt.verify(token[1], SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .send({ result: false, message: "검증에 실패하였습니다." });
    }
    res.send({ result: true, name: decoded.name });
  });
};
