const { Todo } = require("../models");

exports.getTodos = async (req, res) => {
  const data = await Todo.findAll();
  res.json({ result: true, data });
};
exports.addTodo = async (req, res) => {
  console.log(req.body);
  try {
    await Todo.create({
      title: req.body.title,
    });
    res.json({ result: true });
  } catch (error) {
    console.log("error", error);
    res.json({ result: false });
  }
};
exports.editTodo = async (req, res) => {
  try {
    Todo.update(
      { title: req.body.title, done: req.body.done },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    res.json({ result: true });
  } catch (error) {
    console.log("error", error);
    res.json({ result: false });
  }
};
exports.remTodo = (req, res) => {
  // console.log(req.params.todoId);
  Todo.destroy({
    where: {
      id: req.params.todoId,
    },
  });
  res.json({ result: true });
};
