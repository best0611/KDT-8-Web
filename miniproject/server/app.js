const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;
const db = require("./models");
const Router = require("./routes");

app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", Router);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`localhost:${PORT}`);
  });
});
