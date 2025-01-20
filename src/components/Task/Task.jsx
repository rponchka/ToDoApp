import React, { useContext } from "react";
import "./Task.css";
import { TaskContext } from "../../App";

function Task({ data }) {

  const { getTask, removeTask } = useContext(TaskContext);

  const handleCheckboxClick = () => {
    getTask(data.id);
  };

  const handleRemoveButton = () => {
    removeTask(data.id)
  }

  return (
    <label className="checkbox-label">
      <input
        type="checkbox"
        className="checkbox"
        checked={data.isDone}
        onChange={handleCheckboxClick}
      />
      <div className="label-text">{data.task}</div>
      <button className="btn-delete" onClick={handleRemoveButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path d="M18 6l-12 12" /> <path d="M6 6l12 12" />{" "}
        </svg>
      </button>
    </label>
  );
}

export default Task;
