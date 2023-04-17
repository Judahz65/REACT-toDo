import React from "react";

function TodoItem(props){
    return(
    <li>
        <span>I</span>
        <p>{props.text}</p>
        <span>F</span>
    </li>
    );
}

export {TodoItem};