const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

router.get("/", controller.main);
router.get("/user/signup", controller.getsignup);
router.post("/user/signup", controller.postsignup);
router.get("/user/signin", controller.getsignin);
router.post("/user/signin", controller.postsignin);
router.post("/user/profile", controller.postprofile);
// router.patch("/profile/edit", controller.edit);
// router.delete("/profile/delete", controller.del);

module.exports = router;
