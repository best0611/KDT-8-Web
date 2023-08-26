const express = require("express");
const app = express();
const PORT = 8000;
const multer = require("multer");
const path = require("path");

const upload = multer({
  dest: "uploads/",
});
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/uploads", express.static(__dirname + "/uploads"));
// __dirname은 절대 경로를 뜻함
// .use는 미들웨어 설정할때 사용.
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // json 형태로 받겠다.

app.get("/", (req, res) => {
  res.render("index");
});
app.post("/upload", upload.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send("Upload!!");
});
app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
  console.log(req.files); // 업로드한 파일 정보 [{}, {}]
  console.log(req.body);
  res.send("Upload Multiple Each!");
});
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send("Upload 완료~!");
  }
);
app.post("/upload/axios", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file.path);
  //   console.log("gg");
  res.send(req.file.path);
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
