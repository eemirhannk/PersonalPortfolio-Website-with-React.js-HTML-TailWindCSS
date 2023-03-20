import React from 'react'

const About = () => {
  return (
    <section className='flex justify-center items-center gap-8 bg-dark' id='about'>
      <div className="w-4/5">
        <img className='max-w-md ml-10 mb-10' src="About.jpg" alt="" />
      </div>

      <div className="about-content">
        <h2 className='text-center text-7xl mb-5 '>About <span className='multiple-text'>Me</span></h2>
        <h3 className='text-3xl mb-3'>Frontend Developer</h3>
        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eveniet maxime atque odio quae vero, doloribus quasi soluta beatae! Maiores inventore laudantium, consequatur saepe iste tenetur! Dicta optio ratione, non necessitatibus nemo qui accusantium ad mollitia iste tempora error, rerum quaerat reiciendis dolorum reprehenderit? Distinctio facilis, voluptate reiciendis vitae suscipit, sit ipsa necessitatibus id error at autem. Nam quidem vel, quaerat explicabo sapiente debitis voluptatem assumenda ipsa omnis possimus facere repudiandae obcaecati tempore molestiae quo voluptate ut molestias velit cum quod nesciunt placeat perferendis, laboriosam illo. Asperiores commodi officiis odit voluptas aliquid, eligendi non! Hic excepturi aliquid impedit delectus numquam!</p>
        <a href="#" className='inline-block px-3 py-7 bg-blue rounded-3xl text-base text-dark tracking-widest font-semibold hover:bg-dark hover:text-blue'>Read More</a>
      </div>

    </section>
  )
}

export default About
