import { createContext, useState } from "react";
import styled from "styled-components";

// context
const themeContext = createContext({
  // type 설정해줌 (협업 시, 유용)
  theme: "",
  setTheme: () => {},
});

// provider component
export function ThemeProvider(props) {
  const [theme, setTheme] = useState("light");
  const _Div = styled.div`
    background-color: ${(props) =>
      props.type === "light" ? "white" : "black"};
    color: ${(props) => (props.type === "light" ? "black" : "white")};
    height: 100%;
  `;
  return (
    <>
      <themeContext.Provider value={{ theme, setTheme }}>
        <_Div type={theme}>{props.children}</_Div>
      </themeContext.Provider>
    </>
  );
}

export default themeContext;
