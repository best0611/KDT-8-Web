import { useEffect, useState } from "react";
import axios from "axios";

export default function Todo() {
  const [todolist, setTodolist] = useState([]);
  const [inputTodo, setInputTodo] = useState("");

  const axiosTodo = async () => {
    const result = await axios({
      method: "GET",
      url: "http://localhost:8000/todos",
    });
    const resultTodo = result.data.data.map((value) => ({
      ...value,
      readOnly: true,
    }));
    setTodolist(resultTodo);
    console.log("todos", resultTodo);
  };
  useEffect(() => {
    axiosTodo();
  }, []);

  const toggleDone = async (id) => {
    const todo = todolist.find((value) => value.id === id);
    if (todo) {
      try {
        const res = await axios({
          method: "PATCH",
          url: `http://localhost:8000/todo/${id}`,
          data: {
            id,
            title: todo.title,
            done: todo.done === 0 ? 1 : 0,
          },
        });
        setTodolist(
          todolist.map((todo) => {
            return todo.id === id
              ? todo.done === 0
                ? { ...todo, done: 1 }
                : { ...todo, done: 0 }
              : todo;
          })
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const addTodo = async () => {
    if (inputTodo.trim("") != "") {
      await axios({
        method: "POST",
        url: "http://localhost:8000/todo",
        data: {
          title: inputTodo,
        },
      });
      setInputTodo("");
      axiosTodo();
    }
  };
  const delTodo = async (id) => {
    await axios({
      method: "DELETE",
      url: `http://localhost:8000/todo/${id}`,
    });
    axiosTodo();
  };
  const editHandler = (id) => {
    setTodolist(
      todolist.map((value) => {
        return value.id === id ? { ...value, readOnly: false } : value;
      })
    );
  };
  const editTodo = async (id) => {
    const editedTodo = todolist.find((value) => value.id === id);
    if (editedTodo) {
      const res = await axios({
        method: "PATCH",
        url: `http://localhost:8000/todo/${id}`,
        data: {
          id,
          title: editedTodo.title,
          done: editedTodo.done,
        },
      });
      console.log(res);
    }
    setTodolist(
      todolist.map((value) => {
        return value.id === id ? { ...value, readOnly: true } : value;
      })
    );
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Add your new Todo"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <button type="button" onClick={addTodo}>
          ADD
        </button>
      </div>
      {todolist.map((value) => {
        return (
          <div key={value.id}>
            <input
              type="checkbox"
              checked={value.done}
              onChange={() => toggleDone(value.id)}
            />
            <input
              type="text"
              value={value.title}
              readOnly={value.readOnly}
              onClick={() => {
                editHandler(value.id);
              }}
              onChange={(e) =>
                setTodolist(
                  todolist.map((todo) => {
                    return todo.id === value.id
                      ? { ...todo, title: e.target.value }
                      : todo;
                  })
                )
              }
            />
            {value.readOnly ? (
              <button type="button" onClick={() => delTodo(value.id)}>
                DELETE
              </button>
            ) : (
              <button type="button" onClick={() => editTodo(value.id)}>
                EDIT
              </button>
            )}
          </div>
        );
      })}
    </>
  );
}
