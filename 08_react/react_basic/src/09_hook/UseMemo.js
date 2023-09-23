import { useMemo, useState } from "react";

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const calc = useMemo(() => {
    console.log("calc...");
    for (let i = 0; i < 10000000; i++) {}
    return count * 2;
  }, [count]);
  // count가 변할 때만 calc 값 변하겠지.
  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {/* input value가 변하여 리렌더링될 때, count 값은 변하지 않았으므로 calc는 실행되지 않음 */}
      {/* useMemo는 memorization을 하여 결과값을 재사용한다는 점에서, useEffect와 차이가 있음 */}
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
      <p>Doubled Count: {calc}</p>
    </>
  );
}
