//하나의 모듈 파일에 여러개 만들기

const a = "a 변수";
const b = "b 변수";

// module.exports = { a, b };
// 사실 상 아래의 객체로 저장되어 있는 것.
// module.exports = {
//     a: "a 변수"
//     b: "b 변수"
// }

// const abc = "a변수";
// const b = "b변수";
// const c = 20;
// module.exports = {a: abc, b, age: c}
// {
// a : "a 변수"
// b: "b변수"
// age: 20
// }

//하나의 모듈 파일에 하나 만들기
function connect() {
  return a + b;
}
module.exports = connect;
