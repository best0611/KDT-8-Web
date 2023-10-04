import { useContext } from "react";
import themeContext from "./store/theme-context";

export default function ThemeSelector() {
  const value = useContext(themeContext);
  return (
    <div>
      <h2>현재 선택된 테마: {value.theme}</h2>
      <select
        value={value.theme}
        onChange={(e) => value.setTheme(e.target.value)}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
      </select>
    </div>
  );
}
