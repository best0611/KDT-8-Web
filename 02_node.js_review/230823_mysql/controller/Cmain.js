const model = require("../model/Model");

// GET
const main = (req, res) => {
  res.render("index");
};
const signup = (req, res) => {
  res.render("signup");
};
const signin = (req, res) => {
  res.render("signin");
};
const profile = (req, res) => {
  model.db_profile((result) => {
    res.render("profile", { data: result });
  });
};

// POST
const post_signup = (req, res) => {
  model.db_signup(req.body, () => {
    res.json({ result: true });
  });
};
const post_signin = (req, res) => {
  model.db_signin(req.body, (result) => {
    if (result.length > 0) {
      res.json({ result: true, data: result[0] });
    } else {
      res.json({ result: false });
    }
  });
};

const pickProfile = (req, res) => {
  //   console.log(req.query);
  model.db_pickProfile(req.query.id, (result) => {
    res.json({ data: result });
  });
};
const editProfile = (req, res) => {
  model.db_editProfile(req.body, () => {
    res.json({ result: true });
  });
};
// res.render: 뷰페이지(Nodejs가 제공하는 템플릿)를 렌더링. render('뷰페이지이름', 데이터(선택))
// res.send: 모든 타입의 데이터(문자열, 배열, 객체, 숫자 등) 전송
// res.json: 객체 타입 데이터만 전송
// res.redirect: 페이지를 이동

module.exports = {
  main,
  signup,
  signin,
  profile,
  post_signup,
  post_signin,
  pickProfile,
  editProfile,
};
