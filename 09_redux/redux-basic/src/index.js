import { createStore } from "redux";
const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const num = document.querySelector("#num");

//// redux를 이용한 코드
// 리듀서는 action에 따라 데이터를 수정해주는 함수
const countReducer = (state = 0, action) => {
  console.log(state, action);
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};
// store는 데이터를 넣는 곳
// createStore: store 생성, 리듀서 함수 필수
const countStore = createStore(countReducer);
console.log(countStore);

// subscribe()는 함수를 반환하며, 데이터와 저장소가 변경될때마다 해당 함수를 실행
countStore.subscribe(() => {
  num.textContent = countStore.getState();
});

const ADD = "ADD";
const MINUS = "MINUS";
// 액션에 직접 "ADD", "MINUS"와 같이 지정하면 오타가 발생해도 오류를 인식하지 못함 (그냥 실행안될뿐)
// 위처럼 변수 설정하여 넣어주면, 오타 발생했을 때 오류. 코드 오류 확인에 좋음
add.addEventListener("click", () => {
  countStore.dispatch({ type: ADD });
});
minus.addEventListener("click", () => {
  countStore.dispatch({ type: MINUS });
});

// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "MINUS" });

// getState()는 createStore로 생성된 저장소에서 최신 상태의 값을 반환할 때 사용하는 메소드
// console.log(countStore.getState());
// countStore.dispatch({type: "MINUS"})

////
//// javascript를 이용한 +1, -1 코드
// let count = 0;
// num.textContent = count;

// add.addEventListener("click", () => {
//   count = count + 1;
//   num.textContent = count;
// });
// minus.addEventListener("click", () => {
//   count = count - 1;
//   num.textContent = count;
// });
