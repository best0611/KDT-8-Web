import { useCallback, useState } from "react";

export default function UseCallback() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    console.log("not useCallback count: ", count);
  };
  const incrementCount = useCallback(() => {
    console.log("count: ", count);
    setCount((prevCount) => prevCount + 1);
    // 처음 만들어둔 함수를 사용하기 때문에, console 창에 출력되는 count 값은 변하지 않음
  }, []);

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={increment}>Increment</button>
      <button onClick={incrementCount}>Increment count</button>
      <p>Count: {count}</p>
    </>
  );
}
