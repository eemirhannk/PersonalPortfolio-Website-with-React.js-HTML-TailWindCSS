import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='fixed z-[1000] top-0 left-0 w-full px-[9%] py-[2rem] flex justify-between items-center z-100 bg-dark max-[991px]:py-8 max-[991px]:px-[3%] '>
    <a href="#home" className='animate-[slideRight_1s_ease_forwards] text-[2.5rem] text-white font-semibold cursor-pointer'>Portfolio</a>
    <i className='text-[3.6rem] text-white hidden bx bx-menu max-[768px]:block cursor-pointer' id='menu-icon'></i>

      <Navbar/>
    </header>
  )
}

export default Header