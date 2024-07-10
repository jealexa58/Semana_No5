import React from "react";
import './button.css';


export default function Button(props) {
    return (
        <div className="button">
            <button>{props.value}</button>
        </div>
    )
}