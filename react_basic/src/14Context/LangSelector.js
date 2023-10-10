import MyContext from "./store/lang-context";
import { useContext } from "react";
export default function LanguageSelector() {
  // 두번째 방법
  const value = useContext(MyContext);
  return (
    <div>
      <h2>현재 선택된 언어 : {value.launguage}</h2>
      <select
        value={value.launguage}
        onChange={(e) => value.setLanguage(e.target.value)}
      >
        <option value="ko">한국어</option>
        <option value="en">영어</option>
        <option value="jp">일본어</option>
      </select>
    </div>
  );

  // 첫번째 방법
  //   return (
  //     <>
  //       <MyContext.Consumer>
  //         {(value) => {
  //           // 화살표 함수의 리턴이다.
  //           return (
  //             <div>
  //               <h2>현재 선택된 언어 : {value.launguage}</h2>
  //               <select
  //                 value={value.launguage}
  //                 onChange={(e) => value.setLanguage(e.target.value)}
  //               >
  //                 <option value="ko">한국어</option>
  //                 <option value="en">영어</option>
  //                 <option value="jp">일본어</option>
  //               </select>
  //             </div>
  //           );
  //         }}
  //       </MyContext.Consumer>
  //     </>
  //   );
}
