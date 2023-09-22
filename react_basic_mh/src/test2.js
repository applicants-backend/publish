import { Component } from "react";
import "./test.css";
import Cat from "./russianblue.jpg";

class Test2 extends Component {
  render() {
    return (
      <>
        <div className="style">
          <h2>안녕하세요</h2>
          <img src={Cat} alt="사진없어용" />
        </div>
      </>
    );
  }
}
export default Test2;
