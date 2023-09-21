import { Component } from "react";
import "./App.css";
class TextColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "검정색 글씨",
      color: "black",
    };
  }
  changeToRed = () => {
    this.setState({
      name: "빨간색 글씨",
      color: "red",
    });
  };
  changeToBlue = () => {
    this.setState({
      name: "파란색 글씨",
      color: "blue",
    });
  };
  render() {
    return (
      <>
        <div>
          <div className={this.state.color}>{this.state.name}</div>
          <button onClick={this.changeToRed}>빨간색</button>
          <button onClick={this.changeToBlue}>파란색</button>
        </div>
      </>
    );
  }
}

export default TextColor;
