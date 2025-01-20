import React, { useContext, useState } from "react";
import "./Form.css";
import { TaskContext } from "../../App";

function Form() {
  const [inputValue, setInputValue] = useState('');
  const { createTask } = useContext(TaskContext);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  function generateUniqueId() {
    return Date.now() + Math.floor(Math.random() * 1000);
  }

  const initializeTask = (event) => {
    event.preventDefault(); 
    if (inputValue.trim() === "") {
      return; 
    }
    const newTask = {
      id: generateUniqueId(),
      task: inputValue,
      isDone: false
    };
    console.log(newTask);
    createTask(newTask);
    setInputValue('');
  }

  return (
    <div className="form">
      <form onSubmit={initializeTask}>
        <input
          className="add-task-input"
          value={inputValue}
          onChange={handleChange}
          type="text"
        />
        <button className="add-task-btn" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            width={24}
            height={24}
            strokeWidth={3}
          >
            {" "}
            <path d="M12 5l0 14"></path> <path d="M5 12l14 0"></path>{" "}
          </svg>
        </button>
      </form>
    </div>
  );
}

export default Form;
