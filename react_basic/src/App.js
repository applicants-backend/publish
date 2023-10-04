// import Book from "./Book";
import { Outlet } from "react-router-dom";
import Header from "./12Router/Header";
// import Router from "./12Router/Router";

// import SassComponent from "./11Style/SassComponent";
// import StyledComponent from "./11Style/StyledCompoent";
// import Style from "./11Style/Style";

function App() {
  return (
    <>
      {/* <Style></Style> */}
      {/* </SassComponent></SassComponent> */}
      {/* <StyledComponent></StyledComponent> */}

      {/* Version 1 */}
      {/* <Router></Router> */}

      {/* Version 2 */}
      <Header />
      <Outlet />
    </>
  );
}
export default App;
