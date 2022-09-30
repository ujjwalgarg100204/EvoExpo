import React from 'react'
import {motion} from 'framer-motion'
import google from '../images/googleLogo1.png'
import linkedin from '../images/linkedinLogo.png'
import facebook from '../images/facebook.png'

const AdminLogin = () => {
  return (
    <div id="login-page-participant">
        <motion.button className="login-button"
        whileHover={{
          scale: 1.1
        }}
        whileTap={{
          scale: 0.95
        }}
        ><p>Google</p><img src={google}/></motion.button>
        <motion.button className="login-button"
        whileHover={{
          scale: 1.1
        }}
        whileTap={{
          scale: 0.95
        }}
        ><p>LinkedIn</p><img src={linkedin}/></motion.button>
        <motion.button className="login-button"
        whileHover={{
          scale: 1.1
        }}
        whileTap={{
          scale: 0.95
        }}
        ><p>FaceBook</p><img src={facebook}/></motion.button>
    </div>
  )
}

export default AdminLogin