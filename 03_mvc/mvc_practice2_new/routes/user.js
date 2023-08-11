// const express = require("express");
const router = express.Router();
// const controller = require("../controller/Cuser");
import express from "express";
import * as controller from "../controller/Cuser.js";
// Cuser에서 하나씩 export 하기 때문에 '* as'도 붙여서 받아와야 함.
// 하나로 통으로 export 한다면, * as 없이 'import controller from~' 형식으로 가능.

router.get("/", controller.main);
router.get("/signup", controller.getsignup);
router.post("/signup", controller.postsignup);
router.get("/signin", controller.getsignin);
router.post("/signin", controller.postsignin);
router.post("/profile", controller.postprofile);
router.patch("/profile/edit", controller.editprofile);
router.delete("/profile/delete", controller.delprofile);

export default router;
// module.exports = router;
