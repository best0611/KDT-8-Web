const mysql = require("mysql");

//mysql연결
// createConnection (단일연결)
// 요청할 때마다 새로운 연결을 생성
// 적은 수의 동시연결이나 단순한 데이터베이스 쿼리일 때 사용
// const conn = mysql.createConnection({
//   host: "localhost",
//   user: "user",
//   password: "1234",
//   database: "kdt8",
//   port: 3306,
// });

// createPool (다중연결)
// 연결 풀을 생성. 풀은 미리 정의된 수의 연결을 생성하고 관리함.
// 요청이 들어오면, 연결 풀에서 사용 가능한 연결을 제공.
// 작업 완료 후, 해당 연결은 반환됨.
// 연결이 필요하지 않을 경우, 자동으로 반환되어, 풀의 연결수를 제한하고 관리를 최적화.
// 다중연결 서비스에 적합
const conn = mysql.createPool({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
  port: 3306,
  connectionLimit: 30, // 최대 연결 수 (기본값: 10)
});

// 문자열 보간방법
// 단점
// 1. sql 인젝션 공격에 취약함
// 2. 문자열에 특수문자가 포함될 경우 오류가 발생할 수 있음
// Prepared Statement 방식으로 보완

// Prepared Statement
// INSERT INTO userinfo (userid, pw, name) VALUES (?, ?, ?)
//

// 회원가입 정보를 데이터베이스에 저장
const db_signup = (data, cb) => {
  // 문자열 보간방법
  //   const query = `INSERT INTO userinfo (userid, pw, name) VALUES ('${data.userid}','${data.pw}', '${data.name}')`; // 숫자가 아니면 따옴표!!!!
  //   conn.query(query, (err, rows) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     console.log("db_signup", rows);
  //     cb();
  //   });
  // prepared statement
  const query = "INSERT INTO userinfo (userid, pw, name) VALUES (?, ?, ?)";
  conn.query(query, [data.userid, data.pw, data.name], (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("db_signup", rows);
    cb();
  });
};

const db_signin = (data, cb) => {
  //   const query = `SELECT * FROM userinfo WHERE userid='${data.userid}' AND pw='${data.pw}'`;
  //   conn.query(query, (err, rows) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     console.log("db_signin", rows);
  //     cb(rows);
  //   });
  // prepaerd statement
  const query = "SELECT * FROM userinfo WHERE userid = ? AND pw = ?";
  conn.query(query, [data.userid, data.pw], (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("db_signin", rows);
    cb(rows);
  });
};

const db_profile = (cb) => {
  const query = "SELECT userid, name, id FROM userinfo";
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
    }
    console.log("db_profile", rows);
    cb(rows);
  });
};

const db_pickProfile = (id, cb) => {
  const query = "SELECT userid, name, id FROM userinfo WHERE id = ?";
  conn.query(query, [id], (err, rows) => {
    if (err) {
      console.log(err);
    }
    console.log("db_pickProfile", rows);
    cb(rows[0]);
  });
};

const db_editProfile = (data, cb) => {
  const query = "UPDATE userinfo SET userid = ?, name = ? WHERE id = ?";
  conn.query(query, [data.userid, data.name, data.id], (err, rows) => {
    if (err) {
      console.log(err);
    }
    console.log("db_editProfile", rows);
    cb();
  });
};

module.exports = {
  db_signup,
  db_signin,
  db_profile,
  db_pickProfile,
  db_editProfile,
};
