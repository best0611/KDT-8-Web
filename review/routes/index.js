const express = require("express");
const router = express.Router();
const controller = require("../controller/CUser");

router.get("/", controller.getHome);
router.get("/signup", controller.getSignup);
router.get("/signin", controller.getSignin);
router.post("/signup", controller.postSignup);
router.post("/signin", controller.postSignin);
router.post("/token", controller.postToken);

module.exports = router;
