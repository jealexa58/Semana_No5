import React from 'react';
// import '../../../public/assets/img/bannerImage.jpg';
import './Banner.css';

export default function Banner(props) {
    return(
        <div className='container'>
            <div className='content'>
                <h1>{props.title}</h1>
                <h3>{props.subTitle}</h3>
            </div>
        </div>
    )
}