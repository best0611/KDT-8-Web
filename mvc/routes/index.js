const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.main); // GET으로 / 경로 요청들어왔을 때 실행
router.get("/comments", controller.comments); // Get으로 comments 경로 들어왔을 때 실행
router.get("/comment/:id", controller.comment); // GET으로 comment에서 :id 경로로 들어왔을 때 실행

module.exports = router;
