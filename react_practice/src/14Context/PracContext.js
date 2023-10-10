import { createContext, useState } from "react";

// Context 생성.
// createContext() : Provider와 Consumer 두개의 리액트 컴포넌트를 반환
const MyTheme = createContext({
  theme: "",
  abc: 0,
  setTheme: () => {},
});

// provider
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("None");

  return (
    <MyTheme.Provider value={{ theme, setTheme }}>{children}</MyTheme.Provider>
  );
}

export default MyTheme;
