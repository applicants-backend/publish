import "./Style.css";
import styled from "./Style.module.css";
export default function Style() {
  return (
    <>
      <div className="main">
        <div>안녕</div>
        <div>반가워</div>
      </div>
      <div className={styled.main}>
        <div>안녕</div>
        <div>반가워</div>
      </div>
    </>
  );
}
