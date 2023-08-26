const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//쿠키 설정
const cookieConfig = {
  httpOnly: true,
  maxAge: 60 * 1000, //1분
};
const SECRET = "mySecret";

///////////////////////////////////////
//GET
const main = (req, res) => {
  //쿠키사용
  console.log("cookie", req.cookies);
  if (!req.cookies.isLoggin) {
    res.render("index", { cookie: false });
  } else {
    res.render("index", { cookie: true });
  }
};
//회원가입 페이지
const signup = (req, res) => {
  // //쿠키생성
  // //res.cookie(쿠키이름, 쿠키값, 옵션객체)
  // res.cookie('testCookie', 'test', cookieConfig);
  res.render("signup");
};
//로그인 페이지
const signin = (req, res) => {
  console.log(req.session.userInfo);
  if (req.session.userInfo) {
    res.redirect(`/profile/${req.session.userInfo.id}`);
  } else {
    res.render("signin");
  }
};
//회원정보 조회 페이지
const profile = (req, res) => {
  console.log(req.params);
  console.log(req.session.userInfo, req.sessionID);
  //findOne 데이터베이스에서 하나의 정보를 찾을 때 사용, 객체 반환
  //where 는 객체형태로 찾을 정보를 입력
  User.findOne({
    where: { id: req.params.init },
  }).then((result) => {
    res.render("profile", { data: result });
  });
};

const all = (req, res) => {
  if (req.session.userInfo) {
    User.findAll().then((result) => {
      res.render("members", { name: req.session.userInfo.name, result });
    });
  } else {
    res.redirect("/signin");
  }
};

const buy = () => {};

////////////////////////////////////////////////
//POST
//회원가입
const post_signup = async (req, res) => {
  const { userid, name, pw } = req.body;
  //create 데이터 생성
  const hash = await bcryptPassword(pw);
  User.create({
    userid,
    name,
    pw: hash,
  }).then(() => {
    res.json({ result: true });
  });
};

const post_signin = async (req, res) => {
  const { userid, pw } = req.body;
  //step1 아이디를 찾아서 사용자 존재 유/무 체크
  const user = await User.findOne({
    where: { userid },
  });

  if (user) {
    //step2 입력된 비밀번호와 기존 데이터와 비교
    //사용자가 존재함
    const result = await compareFunc(pw, user.pw);
    if (result) {
      //비밀번호 일치
      res.cookie("isLoggin", true, cookieConfig);
      // req.session.userInfo = { name: user.name, id: user.id };
      const token = jwt.sign({ id: user.id, name: user.name }, SECRET);
      res.json({ result: true, token, data: user });
    } else {
      //비밀번호 틀림
      res.json({ result: false, message: "비밀번호가 틀렸습니다." });
    }
  } else {
    //사용자가 존재하지 않음
    res.json({ result: false, message: "존재하는 사용자가 없습니다" });
  }
};
///////////////////////////////////////////
//PATCH
const edit_profile = (req, res) => {
  //update( 수정될 정보를 객체형태로 입력, 수정될 곳 객체 입력  )
  const [bearer, token] = req.headers.authorization.split(" ");
  if (bearer === "Bearer") {
    // 토큰 인증
    const result = jwt.verify(token, SECRET);
    console.log(result);
    const { name, pw, id } = req.body;
    User.update({ name, pw }, { where: { id } }).then(() => {
      res.json({ result: true });
    });
  } else {
    res.json({ result: false, message: "올바른 인증방식이 아닙니다." });
  }
};

/////////////////////////////////////////////
//DELETE
//회원탈퇴 destory()
const destroy = (req, res) => {
  const { id } = req.body;
  User.destroy({
    where: { id },
  }).then(() => {
    //쿠키삭제
    //res.clearCookie(쿠키이름)
    res.clearCookie("testCookie");
    //세션삭제
    // req.session.destroy();
    res.json({ result: true });
  });
};

module.exports = {
  main,
  signup,
  signin,
  profile,
  buy,
  all,
  post_signup,
  post_signin,
  edit_profile,
  destroy,
};

///////////////////////////function
//암호화
//화살표함수 축약형 {} 삭제, return 삭제 (한줄코드일때사용!!)
const bcryptPassword = (password) => bcrypt.hash(password, 11);
//비교
const compareFunc = (password, dbpass) => bcrypt.compare(password, dbpass);
