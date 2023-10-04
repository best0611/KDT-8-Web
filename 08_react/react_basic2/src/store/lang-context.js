import { createContext, useState } from "react";

// Context 생성
// Provider와 Consumer 두개의 리액트 컴포넌트를 반환
const MyContext = createContext({
  language: "",
  setLanguage: () => {},
});

// LangProvider 파일 별도로 생성하지 않고, 이렇게 Provider까지 하나의 파일로 한번에 관리하는 것이 보편적.
export function LangProvider(props) {
  const [language, setLanguage] = useState("Korean");
  return (
    <MyContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyContext;
