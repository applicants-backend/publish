import styled from "styled-components";
import { useState } from "react";

const _Btn = styled.button`
  background-color: ${(props) => (props.isClicked ? "red" : "blue")};
  color: ${(props) => (props.isClicked ? "black" : "white")};
  padding: 10px, 10px;
  border-radius: 4px;
  cursor: pointer;
`;

export default function StylePrac3() {
  const [isClicked, setIsClicked] = useState(false);

  const onToggle = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div>
        <_Btn onClick={onToggle} isClicked={isClicked}>
          색상 변경
        </_Btn>
      </div>
    </>
  );
}
