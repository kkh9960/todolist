import React, { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    {
      value: "react를 배워 봅시다.",
    },
    {
      value: "useState를 배워 봅시다.",
    },
  ]);

  const initialState = {
    value: "",
  };

  const [todo, setTodo] = useState(initialState);
  const onChangeHandler = (event) => {
    const inputValue = event.target.value;
    setTodo({ ...todo, value: inputValue });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.value.trim() === "") return;
    setTodoList([...todoList, { ...todo }]);
    setTodo(initialState);
  };

  return (
    <div className="form-con">
      <form className="add-form">
        <div>
          <input
            type="text"
            name="content"
            className="add-input"
            value={todo.value}
            onChange={onChangeHandler}
          />
          <button className="add-button" onClick={onSubmitHandler}>
            추가하기
          </button>
        </div>
      </form>
      <h2>Todo List</h2>
      <div className="square">
        {todoList.map((todo) => {
          return <div>{todo.value}</div>;
        })}
      </div>
    </div>
  );
}
export default App;
