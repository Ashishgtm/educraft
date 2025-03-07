import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import Aboutheader from '../components/Aboutcomps/Aboutheader';
import Contactheader from '../components/Contactcomps/Contactheader';
import Serviceheader from '../components/Servicecomps/Serviceheader';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Aboutheader />} />
        <Route path="/services" element={<Serviceheader />} />
        <Route path="/contact" element={<Contactheader />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;



