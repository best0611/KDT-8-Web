import { Component, createRef } from "react";

class RefClass extends Component {
  myInput = createRef();
  handleFocus = () => {
    // this.myInput.focus();
    this.myInput.current.focus();
  };
  render() {
    return (
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭 시 input에 focus 처리</p>
        {/* 1. 콜백함수 사용하는 방법 */}
        {/* <input ref={(ref) => (this.myInput = ref)} /> */}
        {/* 2. 내장함수 creteRef 사용 */}
        <input ref={this.myInput} />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}

export default RefClass;
