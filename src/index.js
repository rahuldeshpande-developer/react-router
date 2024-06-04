import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App(){
  return (
    <BrowserRouter>    
      <main>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </main>
      <Routes>
        <Route path = "/home" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
