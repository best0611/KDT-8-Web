import { Component } from "react"; // 1번 방법
import PropTypes from "prop-types";
// import React from 'react'; // 2번 방법
// class형 컴포넌트
// class 컴포넌트명 extends Component
// 컴포넌트명은 대문자로 시작.
// class ClassComponent extends React.Component {} // 2번 방법
// 1번 방법
class ClassComponent extends Component {
  // 클래스형 컴포넌트에서는 render 함수 필수
  render() {
    // const name = "홍길동";
    const { name } = this.props;
    return (
      <>
        {/* <h1>Hello {name}</h1> */}
        <h1>Hello {this.props.name}</h1>
        <p>여기는 클래스형 컴포넌트</p>
        {/* 위에서 구조분해 할당한 경우, 아래와 같이 name만 입력할 수 있음 */}
        <h4>{name}</h4>
      </>
    );
  }
}

ClassComponent.defaultProps = {
  name: "홍길동",
};
ClassComponent.propTypes = {
  // string 타입이 아닌 경우, console에 오류 뜸
  name: PropTypes.string,
  // .required으로 필수 입력을 지정 (지정 안하면 console에 오류 뜸. 지금은 defaultProps 지정되어 있어서 안뜸)
  // name: PropTypes.string.required
};
export default ClassComponent;
