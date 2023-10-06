import { createStore } from "redux";

export const ADD_ITEM = "ADD_ITEM";
export const DEL_ITEM = "DEL_ITEM";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return (state = [...state, action.product]);
    case DEL_ITEM:
      console.log(action.id);
      return state.filter((el) => el.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
