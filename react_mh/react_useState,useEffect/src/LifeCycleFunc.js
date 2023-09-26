import { useState, useEffect } from "react";

function MyComponent({ number }) {
  // props 로 사용하고싶다면
  // const {number} = props; 위아래 props 를 작성하고 사용가능
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("항상 실행됩니다.");
  });

  useEffect(() => {
    console.log("컴포넌트가 생설될때 실행됩니다.");

    return () => {
      console.log("제거 될때 실행됩니다.");
    };
  }, []);

  return (
    <>
      <div>My Component Func {number}</div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}

export default function LifeCycleFunc() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumberState = () => {
    setNumber(() => number + 1);
  };
  const changeVisibleState = () => {
    setVisible(() => !visible);
  };
  return (
    <>
      <button onClick={changeNumberState}>PLUS</button>
      <button onClick={changeVisibleState}>ON / OFF</button>
      {visible && <MyComponent number={number} />}
    </>
  );
}
