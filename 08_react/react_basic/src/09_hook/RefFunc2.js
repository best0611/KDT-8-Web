import { useRef } from "react";

export default function RefFunc2() {
  // 1. ref 객체 만들기
  const idReft = useRef(1); // 초기화 값을 넣어줌
  const plusIdRef = () => {
    idReft.current += 1;
    console.log(idReft.current);
  };
  return (
    <>
      <p>useRef 로컬변수 사용</p>
      {/* state는 리렌더링이 되지만, ref의 경우 값은 변경되어도 리렌더링 되지 않음. (값이 변경되더라도 리렌더링 되지 않도록 할 때 ref 활용 가능) */}
      <h2>{idReft.current}</h2>
      <button onClick={plusIdRef}>plus ref</button>
    </>
  );
}
