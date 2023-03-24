import React from 'react'

const Navbar = () => {
  return (
    <nav className=''>
      <a href="#home" className='active text-[1.7rem] text-white no-underline font-medium ml-16 ease-linear duration-[.3s] hover:text-blue'>Home</a>
      <a href="#about" className='text-[1.7rem] text-white no-underline font-medium ml-16 ease-linear duration-[.3s] hover:text-blue'>About</a>
      <a href="#skills" className='text-[1.7rem] text-white no-underline font-medium ml-16 ease-linear duration-[.3s] hover:text-blue'>Skills</a>
      <a href="#portfolio" className='text-[1.7rem] text-white no-underline font-medium ml-16 ease-linear duration-[.3s] hover:text-blue'>Projects</a>
      <a href="#contact" className='text-[1.7rem] text-white no-underline font-medium ml-16 ease-linear duration-[.3s] hover:text-blue'>Contact</a>
    </nav>
  )
}

export default Navbar
