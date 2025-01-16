import React from "react";
import './NotFound.css'

function NotFound() {
    return(
        <div className="not-found">
            <div className="nf-pic">
                <img src="/pictures/nf-picture.png" alt="1" />
            </div>
            <div className="nf-message">
            <p>Oppss nothing here...</p>
            <p>Try creating some new tasks to get started!</p>
            </div>
        </div>
    )
}

export default NotFound