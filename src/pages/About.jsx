import React from 'react'
import '../landingPage.css'


const About = (props) => {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt=''/>
            </div>
            <div className='about-text'>
                <h2> {props.title} </h2>
                <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolo
                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolo
                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolo
                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolo
                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolo
                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolo
                </p>
                <button>{props.button}</button>
            </div>
        </div>
    )
}

export default About