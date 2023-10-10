import { createContext, useState } from "react";

// Context 생성.
// createContext() : Provider와 Consumer 두개의 리액트 컴포넌트를 반환
const MyContext = createContext({
  language: "",
  abc: 0,
  setLanguage: () => {},
});

// provider
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("ko");

  return (
    <MyContext.Provider value={{ language, setLanguage }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyContext;
