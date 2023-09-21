import { useState } from "react";

export default function State1Func() {
  const [message, setMessage] = useState("검은색 글씨");
  const [style, setStyle] = useState({ color: "black" });

  function redColor() {
    setMessage("빨간색 글씨");
    setStyle({ color: "red" });
  }
  function blueColor() {
    setMessage("파란색 글씨");
    setStyle({ color: "blue" });
  }
  return (
    <>
      <h1 style={style}>{message}</h1>
      <button onClick={redColor}>빨간색</button>
      <button onClick={blueColor}>파란색</button>
    </>
  );
}
