import logo from './logo.svg';
import './App.css';
import Login from './pages/Login'

import {Route, Routes, Link} from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'




function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/login/*" element={<Login/>}/>
        </Routes>
        </>
    );
}

export default App;
