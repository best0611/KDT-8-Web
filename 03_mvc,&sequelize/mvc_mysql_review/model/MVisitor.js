const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
});

exports.main = (cb) => {
  const sql = `SELECT * FROM visitor`;
  conn.query(sql, (err, row) => {
    if (err) throw err;
    cb(row);
  });
};

exports.record = (userdata, cb) => {
  const sql = `INSERT INTO visitor (name, comment) VALUES ('${userdata.name}', '${userdata.comment}')`;
  conn.query(sql, (err, row) => {
    if (err) throw err;
    cb(row);
  });
};

exports.del = (id, cb) => {
  const sql = `DELETE FROM visitor WHERE id = ${id}`;
  conn.query(sql, (err, row) => {
    if (err) throw err;
    cb(row);
  });
};

exports.pick = (id, cb) => {
  const sql = `SELECT * FROM visitor WHERE id = ${id}`;
  conn.query(sql, (err, row) => {
    if (err) throw err;
    cb(row);
  });
};

exports.edit = (userdata, cb) => {
  const sql = `UPDATE visitor SET name = '${userdata.name}', comment = '${userdata.comment}' WHERE id = ${userdata.id}`;
  conn.query(sql, (err, row) => {
    if (err) throw err;
    cb(row);
  });
};
