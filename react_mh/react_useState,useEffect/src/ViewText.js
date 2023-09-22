import { useState } from "react";

export default function ViewText() {
  const [view, setView] = useState(true);
  const [text, setText] = useState("사라져라");
  const [content, setContent] = useState("안녕하세요");

  const handleView = () => {
    if (view === true) {
      setView(false);
      setText((text) => "사라져라");
      setContent((content) => "안녕하세요");
    } else {
      setView(true);
      setText((text) => "보여라");
      setContent((content) => "");
    }
  };
  return (
    <div>
      <div>
        <button onClick={handleView}>{text}</button>
        <h1>{content}</h1>
      </div>
    </div>
  );
}
