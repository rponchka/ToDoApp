import React, { useContext, useEffect, useState } from "react";
import './Container.css'
import Header from "../Header/Header";
import Form from "../Form/Form";
import NotFound from "../NotFound/NotFound";
import TasksContainer from "../TasksContainer/TasksContainer";
import { TaskContext } from "../../App";

function Container() {

    const {tasksList} = useContext(TaskContext)

    const [tasks, setTasks] = useState(tasksList)
    useEffect(() => {
        setTasks(tasksList);
        
      }, [tasksList]);
    

    return(
        <div className="container">
        <Header/>
        <Form/>
        <hr className="hr" />
        {tasks.length == 0 ? <NotFound/> : <TasksContainer/>}
        </div>
    )

}

export default Container