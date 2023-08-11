const express = require("express");
const router = express.Router();
const controller = require("../controller/CVisitor");

router.get("/", controller.main);
router.post("/record", controller.record);
router.delete("/delete", controller.del);
router.get("/pick", controller.pick);
router.patch("/edit", controller.edit);
module.exports = router;
