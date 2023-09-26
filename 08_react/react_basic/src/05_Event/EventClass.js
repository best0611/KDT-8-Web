import { Component } from "react";

class EventClass extends Component {
  //생성자
  constructor(props) {
    super(props); // 부모 클래스인 Component의 생성자를 호출

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this);
    alert("클래스형 컴포넌트");
  }

  handleClick2 = () => {
    console.log("화살표함수", this);
    alert("클래스형 컴포넌트 2번");
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>클릭Class</button>
        <button onClick={this.handleClick2}>클릭Class2번</button>
      </>
    );
  }
}

export default EventClass;
