import React, { useState } from "react";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";
import Form from "./Components/Form";
import "./index.css";

export default function App() {
  const [toDoList, setTodoList] = useState([]);

  const toggleCompleted = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, completed: !task.completed }
        : { ...task };
    });
    setTodoList(mapped);
  };

  const deleteCompleted = () => {
    let filtered = toDoList.filter((task) => {
      return !task.completed;
    });
    setTodoList(filtered);
  };

  const addTask = (input) => {
    let copiedArray = [...toDoList];
    copiedArray.push({
      id: toDoList.length + 1,
      task: input,
      completed: false,
    });
    setTodoList(copiedArray);
  };

  return (
    <div>
      <Header />
      <ToDoList
        toDoList={toDoList}
        toggleCompleted={toggleCompleted}
        deleteCompleted={deleteCompleted}
      />
      <Form addTask={addTask} />
    </div>
  );
}
