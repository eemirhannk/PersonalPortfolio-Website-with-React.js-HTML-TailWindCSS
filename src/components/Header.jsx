import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full px-[9%] py-[2rem] flex justify-between items-center z-100'>
    <a href="#home" className='text-[2.5rem] text-white font-semibold cursor-pointer'>Portfolio</a>
    <i className='text-[3.6rem] text-white hidden bx bx-menu' id='menu-icon'></i>
      <Navbar/>
    </header>
  )
}

export default Header