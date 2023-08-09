const models = require("../models");

exports.main = (req, res) => {
  // Mvisitor.main((result) => {
  //   res.render("visitor", { data: result });
  //   console.log(result);
  // });
  models.Visitor.findAll().then((result) => {
    res.render("visitor", { data: result });
  });
};

exports.record = (req, res) => {
  models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  }).then((result) => {
    // console.log("result", result);
    res.send(result);
  });
  // Mvisitor.record(req.body, (result) => {
  //   res.send(result);
  // });
};

exports.del = (req, res) => {
  models.Visitor.destroy({
    where: {
      id: req.body.id,
    },
  }).then(() => {
    res.send({ result: true });
  });
  // Mvisitor.del(req.body.id, (result) => {
  //   res.send(result);
  // });
};

exports.pick = (req, res) => {
  models.Visitor.findOne({
    where: { id: req.query.id },
  }).then((result) => {
    // console.log(result.dataValues);
    res.send(result.dataValues);
  });
  // Mvisitor.pick(req.query.id, (result) => {
  //   console.log(result);
  //   res.send(result);
  // });
};

exports.edit = (req, res) => {
  models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then(() => {
    res.send({ result: true });
  });
  // console.log(req.body);
  // Mvisitor.edit(req.body, (result) => {
  //   res.send(result);
  // });
};
