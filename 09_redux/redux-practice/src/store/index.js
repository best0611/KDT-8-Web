import { createStore } from "redux";

export const ADD_ITEM = "ADD_ITEM";
export const DEL_ITEM = "DEL_ITEM";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      // findIndex()는 배열의 index값을 찾아 반환해주며, 없으면 -1 반환.
      const findIndex = state.findIndex(
        (elem) => elem.id === action.product.id
      );
      if (findIndex !== -1) {
        const newState = [...state];
        newState[findIndex].quantity++;
        return newState;
      } else {
        return (state = [...state, { ...action.product, quantity: 1 }]);
      }
    case DEL_ITEM:
      console.log(action.id);
      return state.filter((el) => el.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
