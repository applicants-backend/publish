import { Component } from "react";
import "./test.css";

class Test extends Component {
  render() {
    const name = "minhyun";
    return (
      <>
        <div className="my_style">{name}</div>
      </>
    );
  }
}
export default Test;
