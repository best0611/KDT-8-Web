import { useState } from "react";
import MyContext from "../store/lang-context";

export default function LangProvider(props) {
  const [language, setLanguage] = useState("ko");
  return (
    <MyContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </MyContext.Provider>
  );
}
