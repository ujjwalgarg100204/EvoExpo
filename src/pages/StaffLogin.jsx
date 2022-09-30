import React from 'react'
import './pages.css'
import '../landingPage.css'
import styled from 'styled-components'

const StaffLogin = () => {
  
  return (
    <div id="login-page">
      <form>
        <input type="text" placeholder='Enter Your UserName'/>
        <input type="password" placeholder='Enter Your Password'/>
        <input type="text" placeholder='Enter Event Code'/>
        <button type="submit" className='cv-btn'>Login</button>
      </form>
    </div>
  )
}

export default StaffLogin