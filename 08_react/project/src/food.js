import { Component } from "react";

class FoodComponent extends Component {
  render() {
    return (
      <>
        <div>
          제가 좋아하는 음식은{" "}
          <span style={{ color: "red" }}>{this.props.food}</span>입니다.
        </div>
      </>
    );
  }
}

FoodComponent.defaultProps = {
  food: "기본값",
};

export default FoodComponent;
