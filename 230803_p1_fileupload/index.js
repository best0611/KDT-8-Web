const exp = require("constants");
const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8000;

// multer 세팅
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "uploads/");
    },
    filename(req, file, cb) {
      console.log("filename", req.body);
      const ext = path.extname(file.originalname);
      cb(null, req.body.userId + Date.now() + ext);
    },
  }),
  limits: { fileSize: 1024 * 1024 * 5 },
});

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// view engine
app.set("view engine", "ejs");
app.set("views", "./views");
// 정적파일 세팅
app.use("/uploads", express.static(__dirname + "/uploads"));

// router
app.get("/", (req, res) => {
  res.render("index");
});
app.post("/result", uploadDetail.single("profile"), (req, res) => {
  console.log(req.file);
  res.render("result", {
    userInfo: req.body,
    profile: req.file.path,
  });
});

// server open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
