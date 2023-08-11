const express = require("express"); // router 이용하려면 express 가져와야 함
const controller = require("../controller/Cvisitor"); // Cvisitor 파일에 있는 것을 가져와 router가 사용할 수 있도록 함. -> 아래의 controller.main 등의 표현이 가능한 이유!
const router = express.Router();

router.get("/", controller.main);
router.get("/visitor", controller.getVisitors);

router.get("/visitor/get", controller.get);
router.post("/visitor/write", controller.write);
router.patch("/visitor/edit", controller.edit);
router.delete("/visitor/delete", controller.delete);

module.exports = router;
// 외부에서 이 모듈을 사용할 수 있도록 보내는 것.
