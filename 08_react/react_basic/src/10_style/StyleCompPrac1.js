import { useState } from "react";
import styled from "styled-components";

const _Btn = styled.button`
  background-color: ${(props) => (props.btnColor ? "blue" : "red")};
  p {
    color: ${(props) => (props.btnColor ? "white" : "black")};
  }
`;

export default function StyleCompPrac1() {
  const [color, setColor] = useState(true);
  function changeColor() {
    setColor(!color);
  }

  return (
    <>
      <_Btn btnColor={color} onClick={changeColor}>
        <p>색상변경</p>
      </_Btn>
    </>
  );
}
