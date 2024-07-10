import React from 'react';
import './Card.css';
import Title from '../title/Title.js';
import Content from '../Content.js';
import Footer from '../footer/Footer.js';

export default function Card(props) {
    return (
        <div className="card">
            <Title 
                nombre ={props.nombre}
            />
            <Content 
                descripcion = {props.descripcion}
                frase = {props.frase}
            />
            <Footer 
                nacimiento = {props.nacimiento}
                muerte = {props.muerte}
            />  
        </div>
    )
}