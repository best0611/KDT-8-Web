import { useState } from "react";

export default function State2Func() {
  const [visible, setVisible] = useState(true);
  function toggleButton() {
    setVisible(!visible);
  }

  return (
    <div>
      <button onClick={toggleButton}>{visible ? "사라져라" : "보여라"}</button>
      {}
      <h2>{visible && "안녕하세요"}</h2>
    </div>
  );
}
