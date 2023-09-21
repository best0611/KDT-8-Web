import { useState } from "react";

export default function State5Func() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    if (todoList.length < 10) {
      setTodoList([...todoList, { status: false, text: todo }]);
      setTodo("");
    } else {
      alert("할 일이 너무 많아요!");
    }
  };
  const changeStatus = (target, i) => {
    // console.log(i.index);
    if (target.checked) {
      todoList[i.index].status = true;
    } else {
      todoList[i.index].status = false;
    }
  };
  const removeTodo = () => {
    const editedTodoList = todoList.filter((value) => {
      if (value.status) {
        return false;
      } else {
        return true;
      }
    });
    setTodoList(editedTodoList);
    console.log(todoList);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="할 일 입력..."
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button type="button" onClick={addTodo}>
          추가
        </button>
      </form>
      <ul>
        {todoList.map((value, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                value={value.text}
                onChange={(e) => changeStatus(e.target, { index })}
                checked={value.status}
              />
              {value.text}
            </li>
          );
        })}
      </ul>
      <button onClick={removeTodo}>완료된 할 일 삭제</button>
    </div>
  );
}
