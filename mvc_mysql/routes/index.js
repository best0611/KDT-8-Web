const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/", controller.main);
router.get("/visitor", controller.getVisitors);

router.get("/visitor/get", controller.get);
router.post("/visitor/write", controller.write);
router.patch("/visitor/edit", controller.edit);
router.delete("/visitor/delete", controller.delete);

module.exports = router;
