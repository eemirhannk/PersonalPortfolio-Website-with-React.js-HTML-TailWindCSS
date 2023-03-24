import React from 'react'
import Footer from './Footer'

const Contact = () => {
  return (
    <section className="min-h-screen pt-80 px-[9%] pb-8 flex-col max-[991px]:pt-40 max-[991px]:px-[3%] max-[991px]:pb-8" id="contact">
        <h2 className="mb-20 text-center text-[4.5rem] font-bold">Contact <span className='text-blue'> Me!</span></h2>

        <form action="#" className='max-w-[70rem] my-4 mx-auto text-center mb-12'>
            <div className="flex justify-between flex-wrap">
                <input type="text" placeholder='Full Name' className='w-[49%] p-6 text-[1.6rem] text-blue bg-grey rounded-[.8rem] my-[.7rem] mx-0'/>
                <input type="email" placeholder='Email Adress' className='w-[49%] p-6 text-[1.6rem] text-blue bg-grey rounded-[.8rem] my-[.7rem] mx-0' />
            </div>

            <div className="flex justify-between flex-wrap">
                <input type="number" placeholder='Mobile Number' className='w-[49%] p-6 text-[1.6rem] text-blue bg-grey rounded-[.8rem] my-[.7rem] mx-0' />
                <input type="text" placeholder='Email Subject' className='w-[49%] p-6 text-[1.6rem] text-blue bg-grey rounded-[.8rem] my-[.7rem] mx-0' />
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder='Your Message' className='w-full resize-none p-6 text-[1.6rem] text-blue bg-grey rounded-[.8rem] my-[.7rem] mx-0'></textarea>
            <input type="submit" value="Send Message" className='cursor-pointer inline-block py-[1rem] px-[2.8rem] mt-8 mb-16 bg-blue rounded-[4rem] text-[1.6rem] text-dark tracking-[.1rem] font-semibold border-solid border-2 ease-linear duration-[.4s] hover:bg-dark hover:text-blue' />
        </form>
        <Footer/>
        
    </section>
  )
}

export default Contact
