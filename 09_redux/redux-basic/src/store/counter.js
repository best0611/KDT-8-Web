import { createSlice } from "@reduxjs/toolkit";

// createSlice(): 리듀서와 액션을 함께 생성하는 함수
const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 100 },
  reducers: {
    // 사용할 액션을 정의. switch문 없이 바로 함수 사용.
    increment(state, action) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    plus(state, action) {
      console.log(action);
      const { ten, minus } = action.payload;
      state.counter = state.counter + ten + minus;
    },
  },
});

export const counterAction = counterSlice.actions;
export default counterSlice.reducer;
