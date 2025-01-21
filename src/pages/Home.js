import React from 'react'
import Header from '../components/Header/Header'
import HomeA from '../components/Homecomps/HomeA'
import HomeB from '../components/Homecomps/HomeB'
import HomeC from '../components/Homecomps/HomeC'
import Whychooseus from '../components/Homecomps/Whychooseus'
import Testimonials from '../components/Homecomps/Testimonials'
import Contact from '../components/Homecomps/Contact'
import Footer from '../components/Footer/Footer'

export const Home = () => {
 
  return (
    <div>
      <Header/>
      <HomeA/>
      <HomeB/>
      <HomeC/>
      <Whychooseus/>
      <Testimonials/>
      <Contact/>
      <Footer/>
        </div>
  )
}

