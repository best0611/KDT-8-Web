import { useEffect, useState } from "react";

// 자식 컴포넌트 (보통은 하나의 파일에 하나의 컴포넌트만 넣는 게 좋음)
function MyComponent({ number }) {
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("항상 실행됩니다.");
  });
  useEffect(() => {
    console.log("생성될 때 실행됩니다.");
    return () => {
      console.log("제거될 때 실행됩니다.");
    };
  }, []);
  useEffect(() => {
    console.log("state가 변경될 때");
  }, [text]);
  return (
    <>
      <div>My Component {number}</div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}

export default function LifeCycleFunc() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumberState = () => {
    setNumber(() => number + 1);
  };

  const changeVisibleState = () => {
    setVisible(() => !visible);
  };
  return (
    <>
      <button onClick={changeNumberState}>PLUS</button>
      <button onClick={changeVisibleState}>ON/OFF</button>
      {visible && <MyComponent number={number} />}
      {/* 앞의 number는 props, 뒤의 number는 state */}
    </>
  );
}
