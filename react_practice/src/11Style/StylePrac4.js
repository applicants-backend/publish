import styled from "styled-components";
import { useState } from "react";

const _Button = styled.button`
  padding: 10px 15px;
  background-color: skyblue;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    opacity: 0.8;
  }
`;

export default function StylePrac4() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  const _Input = styled.input`
    padding: 10px;
    margin-right: 10px;
  `;

  const onClick = () => {
    if (inputValue !== "") {
      setList([...list, inputValue]);
      setInputValue("");
    }
  };

  const _Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const _List = styled.ul`
    width: 300px;
    height: 200px;
    overflow-y: scroll;
    padding: 0;
  `;

  const _ListItem = styled.li`
    color: black;
  `;

  return (
    <>
      <_Container>
        <div>
          <div>
            <_Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <_Button onClick={onClick}>Add</_Button>
          </div>
        </div>
        <_List>
          {list.map((value, idx) => {
            return <li key={idx}>{value}</li>;
          })}
        </_List>
      </_Container>
    </>
  );
}
