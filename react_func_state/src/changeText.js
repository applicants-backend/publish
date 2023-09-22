import { useState } from "react";

export default function ChangeText() {
  const [name, setName] = useState("");
  const [TextColor, setColor] = useState("");

  const handleToBlack = () => {
    setName((name) => "검정색 글씨");
    setColor((TextColor) => "black");
  };
  const handleToRed = () => {
    setName((name) => "빨간색 글씨");
    setColor((TextColor) => "red");
  };
  const handleToBlue = () => {
    setName((name) => "파란색 글씨");
    setColor((TextColor) => "blue");
  };
  return (
    <div>
      <p className={TextColor}>{name}</p>
      <button onClick={handleToBlack}>검정색</button>
      <button onClick={handleToRed}>빨간색</button>
      <button onClick={handleToBlue}>파란색</button>
    </div>
  );
}
