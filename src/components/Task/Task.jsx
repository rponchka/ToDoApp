import React, { useContext } from "react";
import "./Task.css";
import { TaskContext } from "../../App";

function Task({ data }) {
  const { getTask } = useContext(TaskContext);

  const handleCheckboxClick = () => {
    getTask(data.id)
  };

  return (
    <label className="cyberpunk-checkbox-label">
      <input
        type="checkbox"
        className="cyberpunk-checkbox"
        checked={data.isDone}
        onChange={handleCheckboxClick}
      />
      {data.task}
    </label>
  );
}

export default Task;
