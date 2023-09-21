import { Component } from "react";
class Counter extends Component {
  //   constructor(props) {
  //     // 부모 클래스인 컴포넌트의 생성자 호출
  //     super(props);

  //     this.state = {
  //       number: 0,
  //     };

  //     // 일반함수 사용시 바인딩 사용
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   handleIncrement() {
  //     console.log("증가함수", this);
  //     // XXXX this.state.number++ 처럼 직접적으로 증가를 시키지 말아야한다. XXXX
  //     this.setState({ number: this.state.number + 1 });
  //   }

  // 화살표 함수만 사용한다면
  // 자바스크립트는 함수형 언어이기에 이런식으로 써도 작동한다.
  state = {
    number: 0,
  };
  handleDecrement = () => {
    // setState 는 호출 직후에 상태가 바로 업데이트 되지 않는다.
    // 리액트는 여러 setState 호출을 일괄 처리.
    // 2번의 setState가 1번의 setState의 결과를 기반으로 동작하지 않습니다.

    // console.log("감소함수", this);
    // this.setState({ number: this.state.number - 1 }); // 1번
    // this.setState({ n    umber: this.state.number - 1 }); // 2번

    this.setState((prevState) => {
      return { number: prevState.number - 1 };
    });
    this.setState((prevState) => {
      return { number: prevState.number - 1 };
    });
  };

  render() {
    return (
      <>
        <div>
          <h1>{this.state.number}</h1>
          <button onClick={this.handleIncrement}>증가</button>
          <button onClick={this.handleDecrement}>감소</button>
        </div>
      </>
    );
  }
}

export default Counter;
