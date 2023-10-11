import React, { useState, useRef } from "react";

interface Props {
  name: string;
  age?: number;
}

const PropsType1: React.FC<Props> = ({ name, age }) => {
  // useState에서 타입 지정안해도 알아서 유추하긴 함.
  // 협업을 위해, 표기해주는 것이 좋음.
  const [count, setCout] = useState<number>(0);

  const myInput = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    myInput.current?.focus();
    // myInput.current가 있다고 장담하는 경우에는 ! 사용
    // myInput.current!.focus();
  };

  const onClick = (e: React.MouseEvent<HTMLElement>) => {};
  return (
    <>
      <h2>Hello {name}</h2>
      <h4>{age}</h4>
      <input ref={myInput} />
      <button onClick={handleFocus}>버튼</button>
      <form>
        <button onClick={(e) => onClick(e)}>제출</button>
      </form>
    </>
  );
};
export default PropsType1;

/*
export default function PropsType1({ name }: Props) {
  return (
    <>
      <h2>Hello {name}</h2>
    </>
  );
}
*/
