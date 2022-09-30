import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {SiShopware} from 'react-icons/si';
import {NavHashLink} from 'react-router-hash-link'
import logo from '../images/evoExpoLogo.png'
import '../landingPage.css'

const NavBar = () => {
    const [nav,setNav] = useState(false);
    const [buttonStyle1, setButtonStyle1] = useState(true);
    const [buttonStyle2, setButtonStyle2] = useState(false);
    const [buttonStyle3, setButtonStyle3] = useState(false);
    const [buttonStyle4, setButtonStyle4] = useState(false);
    const changeBackground = () =>{
        if(window.scrollY>=50){
            setNav(true);
        }
        else{
            setNav(false);
        }
    }
    const changeBackgroundButton = () =>{
        if(window.scrollY>=0 && window.scrollY<window.innerWidth/1.1){
            setButtonStyle1(true);
            setButtonStyle2(false);
            setButtonStyle3(false);
            setButtonStyle4(false);
        }
        else if(window.scrollY>=window.innerWidth/1.1 && window.scrollY<window.innerWidth*1.2){
            setButtonStyle1(false);
            setButtonStyle2(true);
            setButtonStyle3(false);
            setButtonStyle4(false);
        }
        else if(window.scrollY>=window.innerWidth*1.2 && window.scrollY<window.innerWidth*1.7){
            setButtonStyle1(false);
            setButtonStyle2(false);
            setButtonStyle3(true);
            setButtonStyle4(false);
        }
        else{
            setButtonStyle1(false);
            setButtonStyle2(false);
            setButtonStyle3(false);
            setButtonStyle4(true);
        }
    }

    window.addEventListener('scroll', changeBackground);
    window.addEventListener('scroll', changeBackgroundButton);
    
    const changeStyle1 = () =>{
        setButtonStyle2(false);
        setButtonStyle1(true);
        setButtonStyle3(false);
        setButtonStyle4(false);
    }

    const changeStyle2 = () =>{
        setButtonStyle2(true);
        setButtonStyle1(false);
        setButtonStyle3(false);
        setButtonStyle4(false);
    }
    const changeStyle3 = () =>{
        setButtonStyle2(false);
        setButtonStyle1(false);
        setButtonStyle3(true);
        setButtonStyle4(false);
    }
    const changeStyle4 = () =>{
        setButtonStyle2(false);
        setButtonStyle1(false);
        setButtonStyle3(false);
        setButtonStyle4(true);
    }

  return (   
    <nav className={nav?'navScroll':'navNotScroll'}>
        <a href="#" className='logo' style={{color: 'black'}}>
            <div><SiShopware/></div><p>EvoExpo</p>
        </a>
        <input type='checkbox' className='menu-btn' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><a href="#" onClick={changeStyle1} className={buttonStyle1?'active':'inactive'}>Home</a></li>
            <li><NavHashLink to='/#features'  onClick={changeStyle2} className={buttonStyle2?'active':'inactive'}>Features</NavHashLink></li>
            <li><NavHashLink to='/#about'   onClick={changeStyle3} className={buttonStyle3?'active':'inactive'}>About</NavHashLink></li>
            <li><NavHashLink to='/#contact'   onClick={changeStyle4} className={buttonStyle4?'active':'inactive'}>Contact</NavHashLink></li>
        </ul>
    </nav>
  )
}

export default NavBar