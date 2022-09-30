import React from 'react'
import '../landingPage.css'
import {motion} from 'framer-motion'

const FeatureBox = (props) => {
  return (
    <motion.div className="a-box"
    whileHover={{scale: 1.1}}
    >
        <div className="a-b-img">
            <img src={props.image}/>
        </div>
        <div className='s-b-text'>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    </motion.div>
  )
}

export default FeatureBox