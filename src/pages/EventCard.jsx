import React from 'react'
import {motion} from 'framer-motion'

const EventCard = (props) => {
  return (

    <motion.div className="eventCard"
    whileHover={{
        scale: 1.1
    }} 
    whileTap={{
        scale: 0.9
    }}
    >
      <img src={props.image}/>
      <div className="eventDetail">
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
      </div>
    </motion.div>
  )
}

export default EventCard