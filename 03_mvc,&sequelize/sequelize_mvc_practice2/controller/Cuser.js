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
  // User.signup(req.body, () => {
  //   res.send({ result: true });
  // });
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
  // console.log(req.body);
  // User.signin(req.body, (result) => {
  //   console.log(result);
  // });
};

exports.postprofile = (req, res) => {
  models.User.findOne({
    where: { userid: req.body.profile },
  }).then((result) => {
    res.render("profile", { data: result });
    // SELECT문을 사용했을 때는 결과가 배열로 와서, result[0]으로 객체를 빼서 돌려주었지만, findOne으로 하는 경우 객체로 result가 오기 때문에 그냥 바로 보내주면 됨. (객체 내에서 실제로 보내는 값은 'dataValues'이다!)
  });
  // User.postprofile(req.body.profile, (result) => {
  //   // console.log(result);
  //   if (result.length > 0) {
  //     res.render("profile", { data: result[0] });
  //   } else {
  //     res.redirect("/user/signin");
  //   }
  // });
};

exports.editprofile = (req, res) => {
  console.log(req.body);
  const { id, indexId, name, pw } = req.body;
  models.User.update({ userid: id, pw, name }, { where: { id: indexId } }).then(
    () => {
      res.send({ result: true });
    }
  );
  // User.editprofile(req.body, (result) => {
  //   res.send(result);
  // });
};

exports.delprofile = (req, res) => {
  console.log(req.query);
  const { id } = req.query;
  models.User.destroy({ where: { id } }).then((result) => {
    console.log("result", result);
    res.send({ result: true });
  });
  // User.delprofile(req.query.indexId, (result) => {
  //   res.send(result);
  // });
};

// findall
exports.findall = (req, res) => {
  models.User.findAll({
    // attributes 원하는 컬럼 조회
    attribute: ["name", "userid"],
    // Op.gt() 초과, Op.gte() 이상, Op.lt() 미만, Op.ne() 같지않은
    // Op.or() 또는, Op.in() 배열 요소 중 하나, Op.notIn() 배열 요소와 모두 다름
    where: { id: { [Op.gte]: 4 } },
    order: [["id", "DESC "]],
    limit: 1,
    offset: 1,
  }).then((result) => {
    res.send(result);
  });
};
