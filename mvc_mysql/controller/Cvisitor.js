const visitor = require("../model/Visitor");

exports.main = (req, res) => {
  res.render("index");
};
exports.getVisitors = (req, res) => {
  res.render("visitor", { data: visitor.getVisitors() });
};
