import React, { useEffect, useState } from "react";
import './Container.css'
import Header from "../Header/Header";
import Form from "../Form/Form";
import NotFound from "../NotFound/NotFound";
import { getFromLocalStorage } from "../../services/localStorage";
import TasksContainer from "../TasksContainer/TasksContainer";

function Container() {

    const [tasks, setTasks] = useState([])
    

    useEffect(() => {
        const key = 'tasksList'
        if(getFromLocalStorage(key)){
        setTasks(getFromLocalStorage(key))
        }
    }, [])

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