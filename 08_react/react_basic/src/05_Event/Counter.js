import { Component } from "react";

class Counter extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       number: 0,
  //       // number:0으로 state가 초기화 되어 렌더됨.
  //     };
  //     // 바인딩
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  //   handleIncrement() {}

  state = {
    number: 0,
  };
  handleIncrement = () => {
    // this.state.number++; // 이런 방식으로 직접 바꾸면 안됨.
    this.setState({ number: this.state.number + 1 });
    // 아래의 증가 버튼을 누르면, 1씩 증가하면서, 재렌더링 되는 것.
  };
  handleDecrement = () => {
    // setState는 호출 직후에, 상태가 바로 업데이트 되지 않음
    // 리액트는 여러 setState 호출을 일괄 처리
    // 2번의 setState가 1번의 setState의 결과를 기반으로 동작하지 않음.
    // this.setState({ number: this.state.number - 1 }); // 1번
    // this.setState({ number: this.state.number - 1 }); // 2번
    //
    this.setState((prevState) => ({ number: prevState.number - 1 }));
    this.setState((prevState) => ({ number: prevState.number - 1 }));
    // 이전 상태를 기억하고 있다가 값을 전달해주기 때문에 2씩 감소됨.
    // this.setState((prevState)=> {
    //   return {number: prevState.number -1, comment: [...prevState.comment, newObject]}
    // })
  };

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.handleIncrement}>증가</button>
        <button onClick={this.handleDecrement}>감소</button>
      </div>
    );
  }
}

export default Counter;
