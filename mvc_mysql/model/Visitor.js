// mysql 연결 전
// exports.getVisitors = () => {
//   return [
//     { id: 1, name: "홍길동", comment: "내가 왔다." },
//     { id: 2, name: "이찬혁", comment: "으라차차" },
//   ];
// };

const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
});

// mysql 연결 후
exports.getVisitors = (callback) => {
  const sql = "SELECT * FROM visitor;";
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    // console.log("Visitor : ", rows);
    callback(rows);
  });
};

exports.write = (info, callback) => {
  const sql = `INSERT INTO visitor (name, comment) VALUES ('${info.username}','${info.content}');`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    callback(rows);
  });
};

exports.delete = (id, callback) => {
  console.log(id);
  const sql = `DELETE FROM visitor WHERE id = ${id}`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    callback(id);
  });
};

exports.get = (id, callback) => {
  // console.log(id);
  const sql = `SELECT * FROM visitor WHERE id = ${id}`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    // console.log(rows);
    callback(rows);
  });
};
exports.edit = (info, callback) => {
  const sql = `UPDATE visitor SET name = '${info.username}', comment = '${info.content}' WHERE id = ${info.id}`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    callback(rows);
  });
};
