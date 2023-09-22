import { Component } from "react"; // 1번 방법
// import React from "react"; // 2번 방법

// class 형 컴포넌트
// class 컴포넌트 명 extends Component{} 1번 방법
// class ClassCopmonent extends React.Component {} // 2번 방법.

import PropTypes from "prop-types";

class ClassCopmonent extends Component {
  // 클래스형 컴포넌트에서는 렌더 함수는 필수입니다.
  render() {
    const name = "홍길동";
    const { age } = this.props;
    return (
      <>
        <h1>Hello {name}</h1>
        <h2>안녕하세요 이름은 {this.props.name} 입니다. </h2>
        <h2>나이는 {age}살 입니다. </h2>
        <p>여기는 클래스형 컴포넌트</p>
      </>
    );
  }
}

ClassCopmonent.defaultProps = {
  name: "홍길동",
  age: 19,
};

ClassCopmonent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};

export default ClassCopmonent;
