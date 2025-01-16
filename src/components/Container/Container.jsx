import React from "react";
import './Container.css'
import Header from "../Header/Header";
import Form from "../Form/Form";

function Container() {

    return(
        <div className="container">
        <Header/>
        <Form/>
        <hr className="hr" />
        </div>
    )

}

export default Container