import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import loginSlice from "./login";

// import { createSlice, configureStore } from "@reduxjs/toolkit";

// // createSlice(): 리듀서와 액션을 함께 생성하는 함수
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: { counter: 100 },
//   reducers: {
//     // 사용할 액션을 정의. switch문 없이 바로 함수 사용.
//     increment(state, action) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     plus(state, action) {
//       console.log(action);
//       const { ten, minus } = action.payload;
//       state.counter = state.counter + ten + minus;
//     },
//   },
// });

// const initLogin = { isLogin: false };
// const loginSlice = createSlice({
//   name: "login",
//   initialState: initLogin,
//   reducers: {
//     login(state) {
//       state.isLogin = true;
//     },
//     logout(state) {
//       state.isLogin = false;
//     },
//   },
// });

// const store = configureStore({
//   reducer: counterSlice.reducer,
// });
const store = configureStore({
  reducer: { count: counterSlice, login: loginSlice },
});
// export const counterAction = counterSlice.actions;
// export const loginAction = loginSlice.actions;

export default store;
