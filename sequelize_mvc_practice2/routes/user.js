const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

router.get("/", controller.main);
router.get("/signup", controller.getsignup);
router.post("/signup", controller.postsignup);
router.get("/signin", controller.getsignin);
router.post("/signin", controller.postsignin);
router.post("/profile", controller.postprofile);
router.patch("/profile/edit", controller.editprofile);
router.delete("/profile/delete", controller.delprofile);

router.get("/findall", controller.findall);

module.exports = router;
