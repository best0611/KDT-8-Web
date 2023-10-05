import { createContext, useState } from "react";

const cartContext = createContext({
  cart: [],
  setCart: () => {},
});

export function Cart(props) {
  const [cart, setCart] = useState([]);
  return (
    <>
      <cartContext.Provider value={{ cart, setCart }}>
        {props.children}
      </cartContext.Provider>
    </>
  );
}

export default cartContext;
