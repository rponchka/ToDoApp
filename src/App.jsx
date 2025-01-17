import { createContext, useEffect, useState } from 'react';
import './App.css';
import Container from './components/Container/Container';
import { getFromLocalStorage } from './services/localStorage';

export const TaskContext = createContext();

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const key = 'tasksList';
    if (getFromLocalStorage(key)) {
      setTasks(getFromLocalStorage(key));
    }
  }, []); 

  return (
    <div className="App">
      <TaskContext.Provider value={{ tasksList: tasks, setTasks }}>
        <Container />
      </TaskContext.Provider>
    </div>
  );
}

export default App;
