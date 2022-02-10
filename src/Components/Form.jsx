import React, { useState } from "react";

export default function Form({ addTask }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        type="text"
        onChange={handleChange}
        placeholder="Add new Task"
      />
      <button> Add Task </button>
    </form>
  );
}
