import { useContext } from "react";
import themeContext from "./store/theme-context";

export default function ThemeSelector() {
  const value = useContext(themeContext);
  // 별도의 css 파일 만들어, theme이 바뀔 때마다 그에 맞는 className을 body에 걸어주면 됨
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
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
