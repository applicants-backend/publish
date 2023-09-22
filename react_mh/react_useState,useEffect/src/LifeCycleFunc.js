import { useState, useEffect } from "react";

export default function LifeCycleFunc() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumberState = () => {};
  const changeVisibleState = () => {};
  return (
    <>
      <button onClick={changeNumberState}>플러스</button>
      <button onClick={changeVisibleState}>ON / OFF</button>
    </>
  );
}
