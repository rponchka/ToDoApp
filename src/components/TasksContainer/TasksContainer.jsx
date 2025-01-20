import React, { useContext } from "react";
import "./TasksContainer.css";
import Task from '../Task/Task'
import { TaskContext } from "../../App";

function TasksContainer() {
  const { tasksList } = useContext(TaskContext);

  return (
    <div className="tasks-container">
      {
      tasksList.map((task) => {
        return <Task key={task.id} data={task}/>;
      })
      }
    </div>
  );
}

export default TasksContainer;
