import React from 'react';
import NavBar from './NavBar';
import '../landingPage.css'
import {motion} from 'framer-motion';
import {AiOutlineArrowUp} from 'react-icons/ai'

const Header = ()=>{
  return (
    <div id='main'>
      <NavBar/>
      <motion.a href="#" className="backToHome"
      whileHover={{
        scale: 1.05
      }}
      whileTap={{
        scale: 0.95
      }}
      >
        <AiOutlineArrowUp size={35}/>
      </motion.a>
    </div>
  );
}

export default Header;

