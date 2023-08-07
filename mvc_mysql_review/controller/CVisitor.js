const Mvisitor = require("../model/MVisitor");

exports.main = (req, res) => {
  Mvisitor.main((result) => {
    res.render("visitor", { data: result });
    console.log(result);
  });
};

exports.record = (req, res) => {
  Mvisitor.record(req.body, (result) => {
    res.send(result);
  });
};

exports.del = (req, res) => {
  Mvisitor.del(req.body.id, (result) => {
    res.send(result);
  });
};

exports.pick = (req, res) => {
  Mvisitor.pick(req.query.id, (result) => {
    console.log(result);
    res.send(result);
  });
};

exports.edit = (req, res) => {
  console.log(req.body);
  Mvisitor.edit(req.body, (result) => {
    res.send(result);
  });
};
