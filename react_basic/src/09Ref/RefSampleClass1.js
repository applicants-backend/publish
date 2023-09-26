import { Component } from "react";

class RefSampleClass1 extends Component {
  render() {
    return (
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>

        <input
          ref={(ref) => {
            this.myInput = ref;
          }}
        />
      </>
    );
  }
}

export default RefSampleClass1;
