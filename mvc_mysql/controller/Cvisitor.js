const visitor = require("../model/Visitor");

exports.main = (req, res) => {
  res.render("index");
};
exports.getVisitors = (req, res) => {
  // [before]
  //   res.render("visitor", { data: visitor.getVisitors() });
  // mysql 연결 후
  visitor.getVisitors((result) => {
    // console.log("Cvisitor", result);
    // [{}, {}, {}] 형식인 것을 확인할 수 있음
    res.render("visitor", { data: result });
  });
};
exports.write = (req, res) => {
  // console.log("write", req.body);
  visitor.write(req.body, (result) => {
    res.send(result);
  });
};

exports.delete = (req, res) => {
  console.log(req.body.id);
  // res.send(req.body.id);
  visitor.delete(req.body.id, (result) => {
    res.send(result);
    console.log(result);
  });
};

exports.get = (req, res) => {
  console.log(req.query);
  visitor.get(req.query.id, (result) => {
    res.send(result);
  });
};

exports.edit = (req, res) => {
  console.log("req", req.body);
  visitor.edit(req.body, (result) => {
    res.send(result);
  });
};
