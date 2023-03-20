import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full px-32 py-10 bg-transparent flex justify-between items-center z-100'>
    <a href="#" className='portfolio'>Portfolio.</a>
      <Navbar/>
    </header>
  )
}

export default Header