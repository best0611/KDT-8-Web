const express = require("express");
// multer 불러오기
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8000;

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// 정적 파일 설정
app.use("/uploads", express.static(__dirname + "/uploads"));

// multer setting
const upload = multer({
  // dest: 업로드할 파일을 저장할 경로를 지정
  dest: "uploads/", // 자동으로 폴더 생성됨
});

// multer 세부설정
const uploadDetail = multer({
  // storage: 저장할 공간에 대한 정보
  // diskStorage: 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
  storage: multer.diskStorage({
    destination(req, file, done) {
      // done은 콜백임.
      done(null, "uploads/"); // 자동으로 생성안되므로 미리 만들어놔야 함
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 원래 이름에서 확장자를 가져옴
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 1024 * 1024 * 5 }, // 5메가
});

app.get("/", (req, res) => {
  res.render("index");
});

// single
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
});
// multi (ver1)
app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
  console.log(req.files);
  console.log(req.body);
});
// multi (ver2)
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
  }
);
// 동적
app.post(
  "/dynamicFile",
  uploadDetail.single("dynamic-userfile"),
  (req, res) => {
    console.log(req.file);
    res.send(req.file);
  }
);
app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
