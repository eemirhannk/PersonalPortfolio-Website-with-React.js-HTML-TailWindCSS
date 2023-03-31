import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <a href="#home" className='active animate-[slideTop_1s_ease_forwards] inline-block text-[1.7rem] text-white no-underline font-medium ml-16 ease-linear duration-[.3s] hover:text-blue'>Home</a>
      <a href="#about"  className='animate-[slideTop_1s_ease_forwards] inline-block text-[1.7rem] text-white no-underline font-medium ml-16 ease-linear duration-[.3s] hover:text-blue'>About</a>
      <a href="#skills"  className='animate-[slideTop_1s_ease_forwards] inline-block text-[1.7rem] text-white no-underline font-medium ml-16 ease-linear duration-[.3s] hover:text-blue'>Skills</a>
      <a href="#portfolio"  className='animate-[slideTop_1s_ease_forwards] inline-block text-[1.7rem] text-white no-underline font-medium ml-16 ease-linear duration-[.3s] hover:text-blue'>Projects</a>
      <a href="#contact"  className='animate-[slideTop_1s_ease_forwards] inline-block text-[1.7rem] text-white no-underline font-medium ml-16 ease-linear duration-[.3s] hover:text-blue'>Contact</a>
    </nav>
  )
}

export default Navbar
