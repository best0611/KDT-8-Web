const express = require("express");
const app = express();
const PORT = 8000;
const multer = require("multer");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/uploads", express.static(__dirname + "/uploads"));

const upload = multer({
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

app.get("/", (req, res) => {
  res.render("practice1");
});

app.post("/signup", upload.single("userimage"), (req, res) => {
  req.file.filename =
    "uploads/" + req.body.userId + path.extname(req.file.originalname);
  const resultData = [req.body, req.file];
  console.log(resultData);
  res.render("p1_result", { user: resultData[0], image: resultData[1] });
  // res.send(resultData);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
