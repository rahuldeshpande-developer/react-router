import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import HostLayout from './Components/HostLayout';
import Income from './pages/host/Income';
import Layout from './Components/Layout';
import VanDetails from './pages/VanDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./server"
import Dashboard from './pages/host/Dashboard';
import Reviews from './pages/host/Reviews';
import Test from './Components/Test';
import Basic from './Components/Basic';
import Contact from './pages/Contact';
import { Navigate } from 'react-router-dom';
import HostVans from './pages/host/HostVans';
import HostVanDetailsLayout from './Components/HostVanDetailsLayout';
import HostVanDetails from './pages/host/HostVanDetails';
import HostVanDetailsPricing from './pages/host/HostVanDetailsPricing';
import HostVanDetailsPhotos from './pages/host/HostVanDetailsPhotos';

function App(){
  return (
    <BrowserRouter>    
      <Routes>
        <Route path = "/" element = {<Layout/>}>
          <Route index  element= {<Home />} />
          <Route path = "home" element = {<Navigate to = "/" />} />
          <Route path = "about" element = {<About />} />
          <Route path = "vans" element = {<Vans />} />
          <Route path = "vans/:id" element = {<VanDetails />} />

          <Route path = "host" element = {<HostLayout />}>
            <Route index element = {<Dashboard />} />
            <Route path = "income" element = {<Income />} />
            <Route path = "reviews" element = {<Reviews />} />
            <Route path = "vans" element = {<HostVans />} />
            <Route path = "vans/:id" element = {<HostVanDetailsLayout />}>
              <Route index element = {<HostVanDetails />} />
              <Route path = "pricing" element = {<HostVanDetailsPricing />} />
              <Route path = "photos" element = {<HostVanDetailsPhotos />} />
            </Route>
          </Route>          
        </Route>
        <Route path = "/income" element = {<Test />} />
        <Route path = "/basic" element = {<Basic />}>
          <Route path = "" element = {<Navigate to = "home" />} />
          <Route path = "home" element = {<Home />} />
          <Route path = "about" element = {<About />} />
          <Route path = "contact" element = {<Contact />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
