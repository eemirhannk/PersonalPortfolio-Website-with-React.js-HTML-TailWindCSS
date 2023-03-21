import React from 'react'

const About = () => {
  return (
    <section className='flex justify-center items-center gap-8 bg-grey' id='about'>
      <div className="w-4/5">
        <img className='w-[35vw]' src="About.jpg" alt="" />
      </div>

      <div className="about-content">
        <h2 className='text-left text-[4.5rem] leading-[1.2]'>About <span className='text-blue'>Me</span></h2>
        <h3 className='text-[2.6rem]'>Frontend Developer</h3>
        <p className='text-[1.6rem] mt-8 mx-0 mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eveniet maxime atque odio quae vero, doloribus quasi soluta beatae! Maiores inventore laudantium, consequatur saepe iste tenetur! Dicta optio ratione, non necessitatibus nemo qui accusantium ad mollitia iste tempora error, rerum quaerat reiciendis dolorum reprehenderit? Distinctio facilis, voluptate reiciendis vitae suscipit, sit ipsa necessitatibus id error at autem. Nam quidem vel, quaerat explicabo sapiente debitis voluptatem assumenda ipsa omnis possimus facere repudiandae obcaecati tempore molestiae quo voluptate ut molestias velit cum quod nesciunt placeat perferendis, laboriosam illo. Asperiores commodi officiis odit voluptas aliquid, eligendi non! Hic excepturi aliquid impedit delectus numquam!</p>
        <a href="#" className='inline-block px-3 py-7 bg-blue rounded-3xl text-base text-dark tracking-widest font-semibold hover:bg-dark hover:text-blue'>Read More</a>
      </div>

    </section>
  )
}

export default About
