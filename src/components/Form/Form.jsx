import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="form">
      <form>
        <input className="add-task-input" type="text" />
        <button className="add-task-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokelinecap="round"
            strokelinejoin="round"
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
