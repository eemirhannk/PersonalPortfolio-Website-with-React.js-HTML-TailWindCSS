import React from 'react'

const Skills = () => {
  return (
    <section className='min-h-screen pt-96 px-[9%] pb-8' id='skills'>
        <h2 className="mb-32 text-center text-[4.5rem] font-bold">My <span className='text-blue'>Skills</span></h2>

        <div className="flex justify-center items-center gap-8 ">

            <div className="flex-2 bg-grey pt-12 px-10 pb-16 text-center rounded-[2rem] border-[.2rem] border-solid border-grey ease-linear duration-[.4s] hover:border-blue hover:scale-[1.02]">
            <i className='bx bx-code-alt text-[7rem] text-blue'></i>
            <h3 className='text-[2.6rem] mb-10'>Frontend Development</h3>
            <p className='text-[1.6rem] mt-4 mx-0 mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus quis quia ullam, explicabo ipsa nemo quod ad commodi magni?</p>
            <a href="#" className='inline-block py-[1rem] px-[2.8rem] bg-blue rounded-[4rem] text-[1.6rem] text-dark tracking-[.1rem] font-semibold border-solid border-2 ease-linear duration-[.4s] hover:bg-dark hover:text-blue'>Read More</a>
            </div>

            <div className="flex-2 bg-grey pt-12 px-10 pb-16 text-center rounded-[2rem] border-[.2rem] border-solid border-grey ease-linear duration-[.4s] hover:border-blue hover:scale-[1.02]">
            <i class='bx bxs-paint text-[7rem] text-blue'></i>
            <h3 className='text-[2.6rem] mb-10'>UI Designing</h3>
            <p className='text-[1.6rem] mt-4 mx-0 mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus quis quia ullam, explicabo ipsa nemo quod ad commodi magni?</p>
            <a href="#" className='inline-block py-[1rem] px-[2.8rem] bg-blue rounded-[4rem] text-[1.6rem] text-dark tracking-[.1rem] font-semibold border-solid border-2 ease-linear duration-[.4s] hover:bg-dark hover:text-blue'>Read More</a>
            </div>

            <div className="flex-2 bg-grey pt-12 px-10 pb-16 text-center rounded-[2rem] border-[.2rem] border-solid border-grey ease-linear duration-[.4s] hover:border-blue hover:scale-[1.02]">
            <i class='bx bx-bar-chart-alt text-[7rem] text-blue'></i>
            <h3 className='text-[2.6rem] mb-10'>Web Development</h3>
            <p className='text-[1.6rem] mt-4 mx-0 mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus quis quia ullam, explicabo ipsa nemo quod ad commodi magni?</p>
            <a href="#" className='inline-block py-[1rem] px-[2.8rem] bg-blue rounded-[4rem] text-[1.6rem] text-dark tracking-[.1rem] font-semibold border-solid border-2 ease-linear duration-[.4s] hover:bg-dark hover:text-blue'>Read More</a>
            </div>
        </div>
    </section>
  )
}

export default Skills
