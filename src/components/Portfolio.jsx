import React from 'react'

const Portfolio = () => {
  return (
    <section className='min-h-screen pt-96 px-[9%] pb-8 bg-grey max-[991px]:pt-40 max-[991px]:px-[3%] max-[991px]:pb-8' id='portfolio'>
        <h2 className="mb-56 text-center text-[4.5rem] font-bold">Latest <span className='text-blue'>Projects</span></h2>

        <div className="grid grid-cols-3 items-center gap-10">
          {/* Box shadow eklenecek 0 0 1rem olacak şekilde aşağıya*/}
            <div className="cursor-default relative rounded-[2rem] overflow-hidden flex ease-linear duration-[.4s] hover:shadow-first">
                <img src="portfolio-2.jpg" className='w-full ease-linear duration-[.4s] hover:scale-[1.1]' alt="" />
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-blue to-dark flex justify-center items-center flex-col text-center py-0 px-16">
                  <h4 className='my-8 text-[3rem] font-bold'>E-Commerce Website Clone</h4>
                  <p className='text-[1.6rem] mt-[.3rem] mx-0 mb-8'>E-Commerce Website Clone Project using React.js, Redux and TailwindCSS.(Developed with JavaScript.)</p>
                  <a  className='inline-flex justify-center items-center w-20 h-20 bg-white rounded-[50%]' href="https://github.com/eemirhannk/Website-Clone-with-React.js-HTML-TailWindCSS" target='_blank'><i className='text-[2rem] text-grey bx bx-link-external'></i></a>
                </div>
            </div>
            {/* Box shadow eklenecek 0 0 1rem olacak şekilde aşağıya*/}
            <div className="cursor-default relative rounded-[2rem] overflow-hidden flex ease-linear duration-[.4s] hover:shadow-first">
                <img src="portfolio-2.jpg"  className='w-full ease-linear duration-[.4s] hover:scale-[1.1]' alt="" />
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-blue to-dark flex justify-center items-center flex-col text-center py-0 px-16">
                  <h4 className='my-8 text-[3rem] font-bold'>Personal Portfolio Website</h4>
                  <p className='text-[1.6rem] mt-[.3rem] mx-0 mb-8'>Personal Portfolio Website using React.js and TailwindCSS.(Developed with JavaScript.)</p>
                  <a  className='inline-flex justify-center items-center w-20 h-20 bg-white rounded-[50%]' href="https://github.com/eemirhannk/PersonalPortfolio-Website-with-React.js-HTML-TailWindCSS" target='_blank'><i className='text-[2rem] text-grey bx bx-link-external'></i></a>
                </div>
            </div>
            {/* Box shadow eklenecek 0 0 1rem olacak şekilde aşağıya*/}
            <div className="cursor-default relative rounded-[2rem] overflow-hidden flex ease-linear duration-[.4s] hover:shadow-first">
                <img src="portfolio-2.jpg"  className='w-full ease-linear duration-[.4s] hover:scale-[1.1]' alt="" />
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-blue to-dark flex justify-center items-center flex-col text-center py-0 px-16">
                  <h4 className='my-8 text-[3rem] font-bold'>Multithreading</h4>
                  <p className='text-[1.6rem] mt-[.3rem] mx-0 mb-8'>Multithreading in big data with similar recordings detection.(Developed with Python.)</p>
                  <a  className='inline-flex justify-center items-center w-20 h-20 bg-white rounded-[50%]' href="https://github.com/eemirhannk/Multithreading-with-Python" target='_blank'><i className='text-[2rem] text-grey bx bx-link-external'></i></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio