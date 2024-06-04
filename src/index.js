import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./server"

function App(){
  return (
    <BrowserRouter>    
      <main>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </main>
      <Routes>
        <Route path = "/home" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/vans" element = {<Vans />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
