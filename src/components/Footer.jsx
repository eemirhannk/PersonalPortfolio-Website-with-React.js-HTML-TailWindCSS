import React from 'react'

const Footer = () => {
  return (
    <footer className="flex justify-between flex-wrap py-8">
        <div className="mt-6">
            {/* Alttaki href e siteyi yayına alınca sitenin linkini koy.*/}
            <p className='text-[1.6rem] font-bold'>Created and designed by <a href="https://twitter.com/eemirkocc" target='_blank'>Emirhan Koç.</a></p>
        </div>

        <div className="footer-iconTop">
            <a href="#home" className='inline-flex justify-center items-center p-[.8rem] bg-blue rounded-[.8rem] ease-linear duration-[.4s] hover:shadow-first'><i className='text-[2.4rem] text-grey bx bx-up-arrow-alt'></i></a>
        </div>
    </footer>
  )
}

export default Footer