import { useState } from "react";
// import LangProvider from "./13_Context/LangProvider";
// import LangSelector from "./13_Context/LangSelector";
// import MyContext, { LangProvider } from "./store/lang-context";
// import Test from "./13_Context/Test";
// import { ThemeProvider } from "./store/theme-context";
// import ThemeSelector from "./13_Context/ThemeSelector";
import ProductList from "./ProductList";
import { Cart } from "./store/cart-context";
import CartItem from "./CartItem";

function App() {
  // const [language, setLanguage] = useState("ko");
  return (
    <>
      {/* <MyContext.Provider value={{ language, setLanguage }}>
      <LangSelector />
      <Test />
    </MyContext.Provider> */}
      {/* <LangProvider> */}
      {/* <ThemeProvider> */}
      {/* <LangProvider> */}
      {/* <LangSelector /> */}
      {/* </LangProvider> */}
      {/* </LangProvider> */}
      {/* <ThemeSelector /> */}
      {/* </ThemeProvider> */}
      <Cart>
        <ProductList />
        <CartItem />
      </Cart>
    </>
  );
}

export default App;
