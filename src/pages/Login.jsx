import React,{useState} from 'react'
import AdminLogin from '../pages/AdminLogin'
import StaffLogin from '../pages/StaffLogin'
import ParticipantLogin from '../pages/ParticipantLogin'
import {Link, Route,Routes} from 'react-router-dom'
import './pages.css'
import '../landingPage.css'


const Login = () => {
  const [styleAdmin,setStyleAdmin] = useState(false)
  const [styleStaff,setStyleStaff] = useState(false)
  const [styleParticipant,setStyleParticipant] = useState(false)
  const changeStyleAdmin =() =>{
    setStyleAdmin(true);
    setStyleStaff(false);
    setStyleParticipant(false);
  }
  const changeStyleStaff =() =>{
    setStyleAdmin(false);
    setStyleStaff(true);
    setStyleParticipant(false);
  }
  const changeStyleParticipant =() =>{
    setStyleAdmin(false);
    setStyleStaff(false);
    setStyleParticipant(true);
  }
  return (
    <div className="page" id="login">
      <div className="login-container">
      <h2>Login as</h2>
        <div className="login-upper">
          <div><Link to='adminLogin' onClick={changeStyleAdmin} className={styleAdmin?'active1':'inactive1'}>Admin</Link></div>
          <div><Link to='staffLogin' onClick={changeStyleStaff} className={styleStaff?'active1':'inactive1'}>Staff</Link></div>
          <div><Link to='participantLogin' onClick={changeStyleParticipant} className={styleParticipant?'active1':'inactive1'}>Participant</Link></div>
        </div>
        <hr/>
        <div className="login-lower">
          <Routes>
            <Route path="adminLogin" element={<AdminLogin/>}/>
            <Route path="staffLogin" element={<StaffLogin/>}/>
            <Route path="participantLogin" element={<ParticipantLogin/>}/>
          </Routes>
        </div>
      </div>
      
    </div>
  )
}

export default Login