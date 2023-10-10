import MyTheme from "./PracContext";
import { useContext } from "react";
export default function ThemeSelector() {
  // 두번째 방법
  const value = useContext(MyTheme);
  return (
    <div>
      <h2>현재 선택된 테마 : {value.theme}</h2>
      <select
        value={value.theme}
        onChange={(e) => value.setTheme(e.target.value)}
      >
        <option value="Light">Light</option>
        <option value="Dark">Dark</option>
      </select>
    </div>
  );
}
