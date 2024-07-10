import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {

  // const [playState, setPlayState] = useState(false)

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}></Route>
        <Route path='/programs' element={<Programs/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        {/* <Route path='/about' element={<About state= {playState}/>}></Route> */}
        <Route path='/campus' element={<Campus/>}></Route>
        <Route path='/testimonials' element={<Testimonials/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
      {/* <VideoPlayer/> */}
    </div>  
  )
}

export default App

