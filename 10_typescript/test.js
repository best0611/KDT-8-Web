// typescript를 쓰는 이유
// 1) js로 실행 시, 타입 체크가 없어 의도와 다른 방식으로 쓰일 수 있음.
// 2) 정적 파일 언어 -> 실행하지 않고 코드 상의 에러를 알려줌 (실시간 디버깅)
/*
function sum(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
  return a + b + c;
}

console.log(sum(1, 2, 3));
console.log(sum(1,2));
*/
var a = "hi";
console.log(a);
var b = 1;
var c = true;
var d = {
  name: "luna",
  age: 100,
};

function jsPrint(a, b) {
  console.log(a);
  console.log(b);
}
jsPrint(1, 2, 3);
