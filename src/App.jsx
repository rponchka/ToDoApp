import { createContext, useEffect, useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "./services/localStorage";

export const TaskContext = createContext();

function App() {
  const key = "tasksList";

  const [tasksList, setTasks] = useState([]);

  useEffect(() => {
    const tasksFromLocalStorage = getFromLocalStorage(key);
    if (tasksFromLocalStorage) {
      setTasks(tasksFromLocalStorage);
    }
  }, []);

  const createNewTask = (task) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, task];
      saveToLocalStorage(key, updatedTasks);
      return updatedTasks;
    });
  };

  const AccesTask = (id) => {
    const updatedTasks = tasksList.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    )
    setTasks(updatedTasks)
    saveToLocalStorage(key ,updatedTasks)
  };

  const deleteTask = (id) => {
    const indexToRemove = tasksList.findIndex(task => task.id === id);
    
    if (indexToRemove !== -1) {
      console.log(1);
      const updatedTasks = [...tasksList]; 
      updatedTasks.splice(indexToRemove, 1);
      setTasks(updatedTasks);
      saveToLocalStorage(key, updatedTasks);
    }
  };
  

  return (
    <div className="App">
      <TaskContext.Provider
        value={{
          tasksList: tasksList,
          createTask: createNewTask,
          getTask: AccesTask,
          removeTask: deleteTask
        }}
      >
        <Container />
      </TaskContext.Provider>
    </div>
  );
}

export default App;
