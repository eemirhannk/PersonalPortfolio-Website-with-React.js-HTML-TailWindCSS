import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <a className='text-lg text-white no-underline font-medium ml-9 hover:text-blue ease-in duration-150' href="#">Home</a>
      <a className='text-lg text-white no-underline font-medium ml-9 hover:text-blue ease-in duration-150'  href="#">About</a>
      <a className='text-lg text-white no-underline font-medium ml-9 hover:text-blue ease-in duration-150'  href="#">Skills</a>
      <a className='text-lg text-white no-underline font-medium ml-9 hover:text-blue ease-in duration-150'  href="#">Portfolio</a>
      <a className='text-lg text-white no-underline font-medium ml-9 hover:text-blue ease-in duration-150'  href="#">Contact</a>
    </nav>
  )
}

export default Navbar
