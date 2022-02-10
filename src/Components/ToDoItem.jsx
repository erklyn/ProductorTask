import React from "react";

export default function ToDoItem({ toDo, toggleCompleted }) {
  const handleClick = (e) => {
    e.preventDefault();
    toggleCompleted(e.currentTarget.id);
  };
  return (
    <div
      value={toDo.id}
      id={toDo.id}
      name="task"
      key={toDo.id + toDo.task}
      onClick={handleClick}
      className={toDo.completed ? "task strike" : "task incomplete"}
    >
      {toDo.task}
    </div>
  );
}
