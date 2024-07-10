import React from 'react';
import './display.css';

export default function Display(props) {
    return(

        <div className='container-display'>
            <h2>{props.operations}</h2>
        </div>

    )
}