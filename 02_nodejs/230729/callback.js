// 콜백함수 사용 예시
// 메인 함수, 함수 타입 파라미터 맨 마지막에 하나 더 선언
/* function mainFunc(param1, parma2, callback) {
  // 콜백 함수에 결과 전달
  const result = param1 + parma2;
  console.log("mainFunc");
  callback(result);
}

function callbackFunc(param) {
  console.log(param);
}

mainFunc(1, 2, callbackFunc); */

// #######################
/* let product;
let price;
goMart();
pickDrink(pay);
// pay(product, price);

function goMart() {
  console.log("마트에 와서 어떤 음료 마실까??");
}

function pickDrink(callback) {
  setTimeout(function () {
    console.log("고민 끝!!");
    product = "제로 콜라";
    price = 2000;
    callback(product, price);
  }, 3000);
}

function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}*/

// ######################
// callback hell

// 1초마다 배경색이 변경되는 코드
// 빨 -> 주 -> 노 -> 초 -> 파

setTimeout(function () {
  document.querySelector("body").style.backgroundColor = "red";
  setTimeout(function () {
    document.querySelector("body").style.backgroundColor = "orange";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "yellow";
      setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "green";
        setTimeout(function () {
          document.querySelector("body").style.backgroundColor = "blue";
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
