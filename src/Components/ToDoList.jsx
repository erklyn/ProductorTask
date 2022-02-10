import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({
  toDoList,
  toggleCompleted,
  deleteCompleted,
}) {
  if (toDoList.length > 0) {
    return (
      <div>
        <section className="toDoList">
          {toDoList.map((toDo) => {
            return (
              <ToDoItem
                toDo={toDo}
                toggleCompleted={toggleCompleted}
                deleteCompleted={deleteCompleted}
              />
            );
          })}
        </section>

        <button className="btn" onClick={deleteCompleted}>
          {" "}
          Delete Completed
        </button>
      </div>
    );
  }
}
