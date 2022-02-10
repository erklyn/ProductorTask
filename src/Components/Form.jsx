import React, { useState } from "react";

export default function Form({ addTask }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "" || value === " ") {
      alert("Please Enter a Task");
    } else {
      addTask(value);
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        type="text"
        onChange={handleChange}
        placeholder="Add new Task"
      />
      <button className="btn"> Add Task </button>
    </form>
  );
}
