// const mysql = require("mysql");
import mysql from "mysql2/prommise"; // async, await 사용 가능

const conn = mysql.createPool({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
});
// createConnection: 단일 연결, 매번 연결이 필요할 때마다 새로운 연결 생성해야 함.
// 연결 수가 많아지면 성능에 영향이 생김.
// createPool: 여러 연결, 여러개의 연결을 미리 생성하고 관리.
// 요청이 들어올 때마다 생성한 연결을 할당. 동시처리가 가능.

export const signup = async (data) => {
  try {
    const sql = `INSERT INTO userinfo (userid, name, pw) VALUES (?, ?, ?)`;
    const rows = await conn.query(sql, [data.userid, data.name, data.pw]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const signin = async (data) => {
  try {
    const sql = `SELECT * FROM userinfo WHERE userid = ? AND pw ?`;
    const [rows] = await conn.query(sql, [data.userid, data.pw]); // 배열 구조분해 할당을 이용하여, query의 결과 배열 내 첫번째 배열만을 받아옴
    return rows;
  } catch (error) {
    console.log(error);
  }
};
// exports.signin = (data, cb) => {
//   conn.query(sql, (err, row) => {
//     cb(row);
//   });
// };

export const postprofile = async (data) => {
  try {
    const sql = `SELECT * FROM userinfo WHERE userid = ?`;
    const [rows] = await conn.query(sql, [data]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const editprofile = async (data) => {
  try {
    const sql = `UPDATE userinfo SET userid= ?, name= ?, pw = ? WHERE id= ?`;
    const [rows] = await conn.query(sql, [
      data.id,
      data.name,
      data.pw,
      data.indexId,
    ]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const delprofile = async (data) => {
  try {
    const sql = `DELETE FROM userinfo WHERE id= ?`;
    const [rows] = await conn.query(sql, [data]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};
