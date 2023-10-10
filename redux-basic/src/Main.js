import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TODO, DELETE_TODO } from "./store/todo";

export default function Main() {
  const [text, setText] = useState("");

  // useSelect() : 리덕스 store의 state 를 조회
  // 인자로 콜백함스, 콜백함수의 매개변수로 state를 받을수있음.
  // 자동으로subscribe를 하고있기때문에 데이터가 변형되면 컴포넌트가 재실행

  const todos = useSelector((state) => state);
  console.log(todos);

  // 디스패치는 우리가 호출 할 수 있는 함수
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_TODO });
    setText("");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <h1> Todos</h1>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button>Add</button>
      </form>
      <ul>{/* <li key={todo.id} id={todo.id}></li> */}</ul>
    </>
  );
}
