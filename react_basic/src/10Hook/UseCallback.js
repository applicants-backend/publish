import { useState, useMemo, useCallback } from "react";

function ChildComponent({ onClick }) {
  return (
    <>
      <button>Count</button>
    </>
  );
}
export default function UseCallback() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const plusCount = () => {
    console.log("plusCount", count);
    setCount((prev) => prev + 1);
  };

  // useCallback 사용
  // 반복해서 생성되는 이벤트 핸들러 함수를 useCallback 으로 감싸줘서 함수를 메모리제이션
  const plusCountCallback = useCallback(() => {
    console.log("plusCountCallback", count);
    setCount((prev) => prev + 1);
  }, []);

  // count가 변경될때만 실행, inputValue가 변경되어도 컴포넌트는 리랜더링되지만, calc는 다시 계산되지않는다
  // 제공된 함수의 반환값을 기억하며, 의존성 배열의 값이 (여기선 count) 변경될떄만 해당 함수를 재실행
  const calc = useMemo(() => {
    for (let i = 0; i < 10000; i++) {
      i = i + 2;
    }
    return count * 2;
  }, [count]);

  const onChange = (e) => {
    setInputValue(e.target.value);
    plusCount();
  };

  return (
    <>
      <input value={inputValue} onChange={(e) => onChange(e)} />
      {/* <ChildComponent onClick={plusCountCallback} /> */}
      {/* <button onClick={() => setCount(() => count + 1)}>PLUS</button> */}
      <p>count : {count}</p>
      <button onClick={plusCountCallback}>PLUS</button>
      {/* <p>calc : {calc}</p> */}
    </>
  );
}
