import React, { useState } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
uuidv4();
const TodoList = () => {
  const [todoValue, setTodoValue] = useState([]);
  const createTodo = (todo) => {
    setTodoValue([
      ...todoValue,
      { id: uuidv4(), task: todo, isEditing: false },
    ]);
  };
  const deleteTodo = (id) => {
    setTodoValue(todoValue.filter((todo) => todo.id !== id));
  };
  const editTodo = (id) => {
    setTodoValue(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div className="container bg-gray-700 mt-20 p-8 rounded-md ">
      <Form createTodo={createTodo} />
      {todoValue.map((todo, idx) => (
        <Todo
          key={idx}
          task={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
