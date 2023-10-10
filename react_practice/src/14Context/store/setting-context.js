import { createContext, useState } from "react";

const SettingContext = createContext({
  theme: "",
  language: "",
  setTheme: () => {},
  setLanguage: () => {},
});

//Provider Component
export function SettingProvider(props) {
  const [theme, setTheme] = useState("DARK");
  const [language, setLanguage] = useState("KOR");

  return (
    <SettingContext.Provider value={{ theme, setTheme, language, setLanguage }}>
      {props.children}
    </SettingContext.Provider>
  );
}

export default SettingContext;
