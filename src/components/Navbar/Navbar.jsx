import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { NavLink } from 'react-router-dom';

export default function Navbar() {

  // const [sticky, setSticky] = useState(false);

  // useEffect(()=> {
  //   window.addEventListener('scroll', ()=> {
  //     window.scrollY > 50 ? setSticky(true) : setSticky(false);
  //   })
  // },[])

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true); 
  }
  return (
    // <nav className={`container ${sticky ? 'dark-nav' : ''}`}> // This is for above useEffect functionality.  
    <nav className='dark-nav'>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/programs">Programs</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/campus">Campus</NavLink></li>
        <li><NavLink to="/testimonials">Testimonials</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
      </ul>  
      <img src={menu_icon} alt="menu icon" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}