const express = require("express");
const app = express();
const PORT = 8000;
const multer = require("multer");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "./views");

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

app.post("/signup", (req, res) => {
  console.log("back", req.body);
  //   res.send(req.body);
});
app.post("/signup/image", upload.single("userimage"), (req, res) => {
  console.log(req.file);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
