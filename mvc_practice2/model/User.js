const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
});

exports.signup = (data, cb) => {
  const sql = `INSERT userinfo (userid, name, pw) VALUES ('${data.userid}','${data.name}', ${data.pw})`;
  conn.query(sql, (err, row) => {
    if (err) throw err;
    cb(row);
  });
};

exports.signin = (data, cb) => {
  const sql = `SELECT * FROM userinfo WHERE userid = '${data.userid}' AND pw = ${data.pw}`;
  conn.query(sql, (err, row) => {
    cb(row);
  });
};

exports.postprofile = (data, cb) => {
  const sql = `SELECT * FROM userinfo WHERE userid = '${data}'`;
  conn.query(sql, (err, row) => {
    cb(row);
  });
};
