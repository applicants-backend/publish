import { Component } from "react";
class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "disappear",
      content: "안녕하세요",
      label: "사라져라",
    };
  }
  changeToView = () => {
    if (this.state.label === "사라져라") {
      this.setState({
        name: "view",
        content: "",
        label: "보여라",
      });
    } else {
      this.setState({
        name: "disappear",
        content: "안녕하세요",
        label: "사라져라",
      });
    }
  };
  changeToDis = () => {
    this.setState({
      name: "disappear",
      content: "안녕하세요",
      label: "사라져라",
    });
  };
  render() {
    return (
      <>
        <button className={this.state.name} onClick={this.changeToView}>
          {this.state.label}
        </button>
        <div>{this.state.content}</div>
      </>
    );
  }
}

export default View;
