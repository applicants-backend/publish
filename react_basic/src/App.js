import { useState } from "react";
// import Book from "./Book";
// import { Outlet } from "react-router-dom";
// import Header from "./12Router/Header";
// import Router from "./12Router/Router";

// import Form from "./13Form/Form";
import MyContext, { LanguageProvider } from "./14Context/store/lang-context";
import LanguageSelector from "./14Context/LangSelector";

// import SassComponent from "./11Style/SassComponent";
// import StyledComponent from "./11Style/StyledCompoent";
// import Style from "./11Style/Style";

function App() {
  const [launguage, setLanguage] = useState("ko");
  return (
    <>
      <LanguageProvider>
        <LanguageSelector />
      </LanguageProvider>

      {/* <Style></Style> */}
      {/* </SassComponent></SassComponent> */}
      {/* <StyledComponent></StyledComponent> */}

      {/* Version 1 */}
      {/* <Router></Router> */}

      {/* Version 2 */}
      {/* <Header />
      <Outlet /> */}
      {/* <Form></Form> */}
    </>
  );
}
export default App;
