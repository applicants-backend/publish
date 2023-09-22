import { Component } from "react";
class EventClass extends Component {
  constructor(props) {
    super(props);
    // super 는 부모의 값을 사용하기 위하여 넣은 키워드

    this.handleClick = this.handleClick.bind(this);
    // this 바인딩
    // 일반형 함수일때만 사용
  }
  handleClick = () => {
    alert("클래스형 컴포넌트");
  };
  handleClick2 = () => {
    alert("클래스형 컴포넌트 2");
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>클릭 class</button>
        <button onClick={this.handleClick2}>클릭 class2</button>
      </>
    );
  }
}

export default EventClass;
