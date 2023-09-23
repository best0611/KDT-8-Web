import { useState } from "react";

// export default function State5Func() {
//   const [todo, setTodo] = useState("");
//   const [todoList, setTodoList] = useState([]);

//   const addTodo = () => {
//     if (todoList.length < 10) {
//       setTodoList([...todoList, { status: false, text: todo }]);
//       setTodo("");
//     } else {
//       alert("할 일이 너무 많아요!");
//     }
//   };
//   const changeStatus = (text, checked) => {
//     if (checked) {
//       setTodoList(
//         todoList.map((value) =>
//           value.text === text ? { ...value, status: true } : value
//         )
//       );
//     }
//   };
//   const removeTodo = () => {
//     const editedTodoList = todoList.filter((value) => {
//       if (value.status) {
//         return false;
//       } else {
//         return true;
//       }
//     });
//     setTodoList(editedTodoList);
//     console.log(todoList);
//   };
//   return (
//     <div>
//       <form>
//         <input
//           type="text"
//           placeholder="할 일 입력..."
//           value={todo}
//           onChange={(e) => {
//             setTodo(e.target.value);
//           }}
//         />
//         <button type="button" onClick={addTodo}>
//           추가
//         </button>
//       </form>
//       <ul>
//         {todoList.map((value, index) => {
//           return (
//             <li key={index}>
//               <input
//                 type="checkbox"
//                 value={value.text}
//                 onChange={(e) => changeStatus(e.target.value, e.target.checked)}
//                 checked={value.status}
//               />
//               {value.text}
//             </li>
//           );
//         })}
//       </ul>
//       <button type="button" onClick={removeTodo}>
//         완료된 할 일 삭제
//       </button>
//     </div>
//   );
// }

export default function State5Func() {
  // 리더님 풀이
  const [todos, setTodos] = useState([]); // 할 일 목록
  const [inputTodo, setInputTodo] = useState(""); // input에 입력할 값

  const addTodo = () => {
    if (todos.length > 9) {
      alert("할 일이 너무 많아요!");
    }
    // 값이 있을 때만 추가되도록 설정
    if (inputTodo !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputTodo,
        checked: false,
      };
      setTodos([...todos, newTodo]);
      setInputTodo("");
    }
  };
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
      })
    );
  };
  const RemoveTodo = () => {
    setTodos(todos.filter((todo) => todo.checked === false));
  };
  return (
    <>
      <input
        type="text"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
        placeholder="할 일 입력..."
      />
      <button type="button" onClick={addTodo}>
        추가
      </button>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => toggleTodo(todo.id)}
              />
              {todo.text}
            </li>
          );
        })}
      </ul>
      <button onClick={RemoveTodo}>완료된 할 일 삭제</button>
    </>
  );
}
