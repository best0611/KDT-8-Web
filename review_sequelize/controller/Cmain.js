// const model = require('../model/Model');
const { User } = require("../models");
const bcrypt = require("bcrypt");

// 쿠키 설정
const cookieConfig = {
  httpOnly: true,
  maxAge: 60 * 1000, // 1분
};

///////////////////////////////////////
//GET
const main = (req, res) => {
  // 쿠키사용
  console.log("cookie", req.cookies);
  res.render("index");
};
//회원가입 페이지
const signup = (req, res) => {
  // 쿠키생성
  // res.cookie(쿠키이름, 쿠키값, 옵션객체)
  res.cookie("testCookie", "test", cookieConfig);
  res.render("signup");
};
//로그인 페이지
const signin = (req, res) => {
  res.render("signin");
};
//회원정보 조회 페이지
const profile = (req, res) => {
  console.log(req.params);
  console.log(req.session.name);
  // model.db_profile(req.params, (result) => {
  //     res.render('profile', { data: result[0] });
  // });
  //findOne 데이터베이스에서 하나의 정보를 찾을 때 사용, 객체 반환
  //where 는 객체형태로 찾을 정보를 입력
  User.findOne({
    where: { id: req.params.init },
  }).then((result) => {
    res.render("profile", { data: result });
  });
};
const buy = () => {};

////////////////////////////////////////////////
//POST
//회원가입
const post_signup = async (req, res) => {
  // model.db_signup(req.body, () => {
  //     res.json({ result: true });
  // });
  const { userid, name, pw } = req.body;
  //create 데이터 생성
  //실습과제 - 비밀번호 암호화하여 저장
  const hash = await bcryptPassword(pw); // 비동기함수로 pending 상태이므로, async, await 처리 필요함
  User.create({
    userid,
    name,
    pw: hash,
  }).then(() => {
    res.json({ result: true });
  });
};

const post_signin = async (req, res) => {
  // model.db_signin(req.body, (result) => {
  //     if (result.length > 0) {
  //         res.json({ result: true, data: result[0] });
  //     } else {
  //         res.json({ result: false });
  //     }
  // });
  //실습과제 - 로그인
  //step1 아이디를 찾아서 사용자 존재 유/무 체크
  const { userid, pw } = req.body;
  const user = await User.findOne({
    where: { userid },
  });
  //step2 입력된 비밀번호와 기존 데이터와 비교
  if (user) {
    const result = await comparePassword(pw, user.pw);
    if (result) {
      req.session.name = user.name;
      res.json({ result: true, data: user });
    } else {
      res.json({
        result: false,
        message: "아이디와 비밀번호가 일치하지 않습니다.",
      });
    }
  } else {
    res.json({ result: false, message: "회원정보가 없습니다." });
  }
};
///////////////////////////////////////////
//PATCH
const edit_profile = (req, res) => {
  // model.db_profile_edit(req.body, () => {
  //     res.json({ result: true });
  // });
  //update( 수정될 정보를 객체형태로 입력, 수정될 곳 객체 입력  )
  const { name, pw, id } = req.body;
  User.update({ name, pw }, { where: { id } }).then(() => {
    res.json({ result: true });
  });
};

/////////////////////////////////////////////
//DELETE
//회원탈퇴 destory()
const destroy = (req, res) => {
  const { id } = req.body;
  User.destroy({ where: { id } }).then(() => {
    res.json({ result: true });
  });
};

module.exports = {
  main,
  signup,
  signin,
  profile,
  buy,
  post_signup,
  post_signin,
  edit_profile,
  destroy,
};

///////////////////////////
// 암호화
// 화살표함수 축약형(한줄일 때 가능): {}삭제, return 삭제
const bcryptPassword = (password) => bcrypt.hash(password, 11);
// 비교
const comparePassword = (password, dbPassword) =>
  bcrypt.compare(password, dbPassword);
