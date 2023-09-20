import { Component } from "react";

class StatePractice1 extends Component {
  state = {
    message: "검정색 글씨",
    style: { color: "black" },
  };
  redColor = () => {
    this.setState((prevState) => ({
      message: "빨간색 글씨",
      style: { color: "red" },
    }));
  };
  blueColor = () => {
    this.setState((prevState) => ({
      message: "파란색 글씨",
      style: { color: "blue" },
    }));
  };
  render() {
    return (
      <>
        <h1 style={this.state.style}>{this.state.message}</h1>
        <button onClick={this.redColor}>빨간색</button>
        <button onClick={this.blueColor}>파란색</button>
      </>
    );
  }
}

export default StatePractice1;
