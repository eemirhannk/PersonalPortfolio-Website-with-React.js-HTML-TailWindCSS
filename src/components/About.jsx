import React from 'react'

const About = () => {
  return (
    <section className='min-h-screen flex justify-center items-center gap-8  bg-grey' id='about'>

        <img className='max-w-[30vw] my-[5rem] ml-[17rem]' src="About.jpg" alt="" />

      <div className="ml-72">
        <h2 className='text-left text-[4.5rem] font-bold leading-[1.2]'>About <span className='text-blue'>Me</span></h2>
        <h3 className='text-[2.6rem] font-bold'> <span className='text-blue'>Frontend </span>Developer !</h3>
        <p className='text-[1.6rem] mt-8 mr-72 mb-12'>I have effective communication and time management
skills. Ability to easily adapt to and learn new technologies.
Ability to work in an organized, analytical and detailoriented manner. Good written and verbal English
communication skill. Also I'm passionate about Front End Development.</p>
        <p className='text-[1.6rem] mt-8 mr-72 mb-12'>Graduated from Necmettin Erbakan Science High School.</p>
        <a href="#" className='inline-block py-[1rem] px-[2.8rem] bg-blue rounded-[4rem] text-[1.6rem] text-dark tracking-[.1rem] font-semibold border-solid border-2 ease-linear duration-[.4s] hover:bg-dark hover:text-blue hover:scale-[1.02]'>Read More</a>
      </div>

    </section>
  )
}

export default About
