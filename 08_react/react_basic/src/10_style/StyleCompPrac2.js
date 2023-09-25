import { useState } from "react";
import styled from "styled-components";

const _InputBox = styled.div`
  text-align: center;
  margin: 20px 0px;
  input {
    height: 30px;
    width: 200px;
  }
  button {
    height: 30px;
    width: 50px;
    margin-left: 10px;
    border: 0px;
    border-radius: 5px;
    background-color: skyblue;
  }
`;
const _List = styled.div`
  max-height: 200px;
  overflow: auto;
  p {
    padding: 5px;
    border-bottom: 2px solid lightgray;
    margin: 0px;
  }
`;

export default function StyleCompPrac2() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const addList = () => {
    setList([...list, inputValue]);
    setInputValue("");
  };
  return (
    <>
      <_InputBox>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addList}>Add</button>
      </_InputBox>
      <_List>
        {list.map((elem) => {
          return <p>{elem}</p>;
        })}
      </_List>
    </>
  );
}
