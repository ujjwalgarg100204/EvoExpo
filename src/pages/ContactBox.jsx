import React from 'react'
import '../landingPage.css'

const ContactBox = (props) => {
  return (
    <div className="contactBox">
        <img src={props.image} alt=""/>
        <h4>{props.heading}</h4>
        <p>{props.info}</p>
    </div>
  )
}

export default ContactBox