const express = require("express");
const router = express.Router();
const controller = require("../controller/todo");

router.get("/todos", controller.getTodos);
router.post("/todo", controller.addTodo);
router.patch("/todo/:todoId", controller.editTodo);
router.delete("/todo/:todoId", controller.remTodo);

module.exports = router;
