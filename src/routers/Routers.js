
import React from 'react'
import { Routes, Route, Navigate,BrowserRouter} from 'react-router-dom'
import { Home } from '../pages/Home';
import Aboutheader from '../components/Aboutcomps/Aboutheader';
const Routers = () => {
  return ( 
    <BrowserRouter>
  <Routes>
     
     <Route path='/' element={<Navigate to='/home'/>} />
     <Route path='/home' element={<Home />} />
     <Route path='/about' element={<Aboutheader />} />

  </Routes>
  </BrowserRouter>
  );
} 
export default Routers
