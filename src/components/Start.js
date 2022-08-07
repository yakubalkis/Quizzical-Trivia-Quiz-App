import React from "react";

export default function Start(props){
    return (
        <div className="start">
            <h1>Quizzical</h1>
            <h5>Some description if needed</h5>
            <button onClick={props.handleClickStart}>Start quiz</button>
        </div>
    )
}