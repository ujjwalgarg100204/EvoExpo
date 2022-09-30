import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Feature from '../pages/Features'
import Header from '../components/Header'
import Login from '../pages/Login'
import aboutImage from '../images/download.png'


const Main = () => {
  return (
    <>
    <Header/>
    <Home/>
    <Feature/>
    <About image={aboutImage} title='Comes with all you need for daily life' button='Get the App'/>
    <Contact/>
    
    </>
  )
}

export default Main