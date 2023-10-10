import { useContext, useEffect } from "react";
import SettingContext from "./store/setting-context";

export default function ThemeSelector() {
  const { theme, setTheme } = useContext(SettingContext);
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <div>
        <h2>현재 테마 : {theme}</h2>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value={"DARK"}>DARK</option>
          <option value={"LIGHT"}>LIGHT</option>
        </select>
      </div>
    </>
  );
}
