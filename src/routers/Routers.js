
import React from 'react'
import { Routes, Route, Navigate,BrowserRouter} from 'react-router-dom'
import { Home } from '../pages/Home';
const Routers = () => {
  return ( 
    <BrowserRouter>
  <Routes>
     
     <Route path='/' element={<Navigate to='/home'/>} />
     <Route path='/home' element={<Home />} />

  </Routes>
  </BrowserRouter>
  );
} 
export default Routers
