const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);
// 회원가입
router.get("/signup", controller.signup);
router.post("/signup", controller.post_signup);
// 로그인
router.get("/signin", controller.signin);
router.post("/signin", controller.post_signin);
// 수정
router.get("/profile", controller.profile);
router.get("/pick", controller.pickProfile);
router.patch("/edit", controller.editProfile);
module.exports = router;
