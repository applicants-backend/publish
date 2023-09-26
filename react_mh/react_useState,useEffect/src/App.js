import { useState, useEffect } from "react";

import "./App.css";
import LifePrac2 from "./LifePrac2";
// import LifePrac1 from "./LifePrac1";
// import LifeCycleClass from "./LifeCycleClass";
// import LifeCycleFunc from "./LifeCycleFunc";
// import UseEffectPractice from "./UseEffectPractice";
// import ViewText from "./ViewText";
// import ToggleFunc from "./ToggleFunc";
// import ChangeText from "./changeText";
// import Board from "./Board";
// import PracticeFive from "./PracticeFive";
// import BoardAns from "../../react_state/src/BoardAns";

function App() {
  const [status, setStatus] = useState(true);

  const removeComponent = () => {
    setStatus(() => false);
  };
  const startComponent = () => {
    setStatus(() => true);
  };

  return (
    <div>
      <button onClick={removeComponent}>연결 해제</button>
      <button onClick={startComponent}>재연결</button>
      {status && <LifePrac2 />}
      {/* <ToggleFunc></ToggleFunc> */}
      {/* <ChangeText></ChangeText>
      <ViewText></ViewText>
      <Board></Board> */}
      {/* <PracticeFive></PracticeFive> */}
      {/* <BoardAns></BoardAns> */}
      {/* <LifeCycleClass></LifeCycleClass> */}
      {/* <LifeCycleFunc></LifeCycleFunc> */}
      {/* <UseEffectPractice></UseEffectPractice> */}
      {/* <LifePrac1></LifePrac1> */}
      {/* <LifePrac2></LifePrac2> */}
    </div>
  );
}

export default App;
