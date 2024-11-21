
import React from 'react'
import { Routes, Route, Navigate,HashRouter} from 'react-router-dom'
import { Home } from '../pages/Home';
const Routers = () => {
  return ( 
    <HashRouter>
  <Routes>
     
     <Route path='/' element={<Navigate to='/home'/>} />
     <Route path='/home' element={<Home />} />

  </Routes>
  </HashRouter>
  );
} 
export default Routers
