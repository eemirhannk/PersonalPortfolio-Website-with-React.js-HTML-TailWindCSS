import React from 'react'

const About = () => {
  return (
    <section className='min-h-screen flex justify-center items-center gap-8  bg-grey' id='about'>

        <img className='max-w-[30vw] my-[5rem] ml-[17rem]' src="About.jpg" alt="" />

      <div className="ml-72">
        <h2 className='text-left text-[4.5rem] font-bold leading-[1.2]'>About <span className='text-blue'>Me</span></h2>
        <h3 className='text-[2.6rem] font-bold'>Frontend Developer</h3>
        <p className='text-[1.6rem] mt-8 mr-72 mb-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias placeat totam suscipit error recusandae fugiat aliquid, eius ea esse, inventore maiores voluptatum perferendis dicta alias aliquam, commodi doloremque! Illum harum aliquid itaque culpa quasi voluptate dolores reprehenderit temporibus distinctio animi. Illum eius maxime aut libero error.</p>
        <a href="#" className='inline-block py-[1rem] px-[2.8rem] bg-blue rounded-[4rem] text-[1.6rem] text-dark tracking-[.1rem] font-semibold border-solid border-2 ease-linear duration-[.4s] hover:bg-dark hover:text-blue hover:scale-[1.02]'>Read More</a>
      </div>

    </section>
  )
}

export default About
