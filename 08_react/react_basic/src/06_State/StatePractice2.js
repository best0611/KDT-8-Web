import { Component } from "react";

class StatePractice2 extends Component {
  state = {
    visible: true,
    // message: "안녕하세요",
  };
  handleVisible = () => {
    // this.setState(() => ({ message: "" }));
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };
  render() {
    return (
      <>
        <button onClick={this.handleVisible}>
          {this.state.visible ? "사라져라" : "보여라"}
        </button>
        <h1>{this.state.visible && "안녕하세요"}</h1>
      </>
    );
  }
}

export default StatePractice2;
