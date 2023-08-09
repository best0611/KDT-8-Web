"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"]; // development가 불러지면, config.json의 development으로 접속됨.

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
); // 데이터에 접속하는 접속정보

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// }

// model
db.Visitor = require("./Visitor")(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
