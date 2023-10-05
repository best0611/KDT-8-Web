import { createStore } from "redux";

const add = document.querySelector("#add");
// const del = document.querySelector("#del");
const todos = document.querySelector("#todos");
const todotext = document.querySelector("#todotext");
const ADD_TODO = "add todo";
const DELETE_TODO = "delete todo";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return (state = [...state, { id: Date.now(), text: todotext.value }]);
    case DELETE_TODO:
      return (state = state.filter((val) => val.id !== delId));
    default:
      return;
  }
};
let delId;
const todoStore = createStore(todoReducer);
todoStore.subscribe(() => {
  document.querySelector(".todoUl")?.remove();
  const todolist = todoStore.getState();
  const ul = document.createElement("ul");
  ul.classList.add("todoUl");
  todolist.map((todo) => {
    const li = document.createElement("li");
    li.innerHTML = `${todo.text}<button id="${todo.id}">Del</button>`;
    ul.appendChild(li);
  });
  todos.appendChild(ul);
  todolist.map((todo) => {
    document.getElementById(todo.id).addEventListener("click", () => {
      delId = todo.id;
      todoStore.dispatch({ type: DELETE_TODO });
    });
  });
});

add.addEventListener("click", () => {
  todoStore.dispatch({ type: ADD_TODO });
  todotext.value = "";
});
