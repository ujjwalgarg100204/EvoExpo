import React,{useState} from 'react'
import Axios from 'axios'
import ContactBox from './ContactBox'
import address from '../images/address.png'
import phone from '../images/phone.png'
import email from '../images/email.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import discord from '../images/discord.png'
import linkedin from '../images/linkedin.png'
import {motion} from 'framer-motion'
import github from '../images/github.png'
import '../landingPage.css'

const Contact = () => {
  const url="https://evoexpo-backend-api.herokuapp.com/contact-form"
  const [data, setData] = useState({
    name: "",
    email: "",
    message:""
  })

  const submit = (e) =>{
    e.preventDefault();
    Axios.post(url,{
      name: data.name,
      email: data.email,
      message: data.message
    }).then(res=>{
      console.log(res.data);
    })
  }

  const handle = (e) =>{
    const newdata = {...data};
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata);
  }
  return (
    <div id="contact">
      <div className="contactInner">
        <div className="contact-1">
          <ContactBox image={address} heading="Address" info="VIT Vellore Campus Vellore - 632 014 Tamilnadu"/>
          <ContactBox image={phone} heading="Phone" info="9415483472, 9354416441"/>
          <ContactBox image={email} heading="Email" info="eventive34@gmail.com"/>
          <div className="contactLinks">
            <motion.a href="#"
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            >
              <img src={facebook} alt=""/>
            </motion.a>
            <motion.a href="#"
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            >
              <img src={instagram} alt=""/>
            </motion.a>
            <motion.a href="#"
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            >
              <img src={discord} alt=""/>
            </motion.a>
            <motion.a href="#"
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            >
              <img src={linkedin} alt=""/>
            </motion.a>
            <motion.a href="#"
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            >
              <img src={github} alt=""/>
            </motion.a>
            
          </div>
      </div>
      <div className="contact-2">
        <h3>Send Us Mail</h3>
        <p>If you have any queries regarding our software please send us message. It's our pleasure to help you.</p>
        <div className='contact-input'>
          <form onSubmit={(e)=> submit(e)} className='contact-input'>
            <input onChange={(e)=>handle(e)} id="name" value={data.name} type='text' placeholder='Enter Your Name'/>
            <input onChange={(e)=>handle(e)} id="email" value={data.email} type='email' placeholder='Enter Your Email'/>
            <textarea onChange={(e)=>handle(e)} id="message" value={data.message} type='text' placeholder='Enter Your Message' id="message"/>
            <button href="#" className="cv-btn" id="sendNow">Send Now</button>
          </form>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Contact