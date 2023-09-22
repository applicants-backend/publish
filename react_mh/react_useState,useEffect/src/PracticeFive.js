import { useState } from "react";

export default function PracticeFive() {
  const [todos, setTodos] = useState([]); // 할 일 목록
  const [inputTodo, setInputTodo] = useState("");

  const addTodo = () => {
    if (todos.length > 10) {
      alert("할 일이 너무 많아요");
    }
    if (inputTodo !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputTodo,
        checked: false,
      };
      setTodos([...todos, newTodo]);
      setInputTodo("");
    }
  };
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        // console.log(todo);
        return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
      })
    );
  };
  const removeTodo = () => {
    const result = todos.filter((value) => value.checked === false);
    setTodos(result);
  };
  return (
    <>
      <input
        type="text"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
      />
      <button onClick={addTodo}>추가</button>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => toggleTodo(todo.id)}
              />
              {todo.text}
            </li>
          );
        })}
      </ul>
      <button>완료된 할 일</button>
      <button onClick={removeTodo}>완료된 일 삭제</button>
    </>
  );
}
