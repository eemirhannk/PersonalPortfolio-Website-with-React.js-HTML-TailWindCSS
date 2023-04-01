import React from 'react'
import Typed from 'typed.js'



const Home = () => {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);
  
    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Frontend Developer.', 'UI Designer.','CS Student.'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
  return (
    <section className='min-h-screen pt-40 px-[9%] pb-8 flex justify-between items-center max-[991px]:pt-40 max-[991px]:px-[3%] max-[991px]:pb-8 max-[768px]:flex-col' id='home'>
    <div className='home-content'>
        <h3 className='animate-[slideBottom_2s_ease_forwards] opacity-0 animation-delay-800 text-[3.2rem] font-bold max-[768px]:text-[2.6rem]'>Hello, It's Me</h3>
        <h1 className='animate-[slideRight_2s_ease_forwards] opacity-0 animation-delay-1200 text-[5rem] font-bold leading-[1.3] max-[768px]:text-[5rem]'>Emirhan Koç</h1>
        <h3 className='animate-[slideBottom_2s_ease_forwards] opacity-0 animation-delay-800 text-[3.2rem] font-bold mb-4 max-[768px]:text-[2.6rem]'>And I'm a <span ref={el} className='text-blue'>Frontend Developer.</span></h3>
        <p className='animate-[slideLeft_2s_ease_forwards] opacity-0 animation-delay-600 text-[1.6rem]'>I'm 20 years old Computer Engineering Student of Kocaeli University.</p>
        <div className='social-media'>
          {/* Aşağıdaki linklere box shadow koyulacak tailwind kullanarak başaramadım. */}
            <a href="https://www.instagram.com/eemirkoc" target='_blank' className='animate-[slideLeft_2s_ease_forwards] opacity-0 animation-delay-1500 inline-flex justify-center items-center w-16 h-16 bg-transparent border-[.2rem] border-solid border-blue rounded-[50%] text-[2rem] text-blue mt-12 mr-6 mb-12 ml-0 ease-linear duration-[.3s] hover:bg-blue hover:text-grey hover:shadow-first'><i class='bx bxl-instagram-alt'></i></a>
            <a href="https://www.twitter.com/eemirkocc" target='_blank' className='animate-[slideLeft_2s_ease_forwards] opacity-0 animation-delay-1500 inline-flex justify-center items-center w-16 h-16 bg-transparent border-[.2rem] border-solid border-blue rounded-[50%] text-[2rem] text-blue mt-12 mr-6 mb-12 ml-0 ease-linear duration-[.3s] hover:bg-blue hover:text-grey hover:shadow-first'><i class='bx bxl-twitter' ></i></a>
            <a href="https://www.github.com/eemirhannk" target='_blank' className='animate-[slideLeft_2s_ease_forwards] opacity-0 animation-delay-1500 inline-flex justify-center items-center w-16 h-16 bg-transparent border-[.2rem] border-solid border-blue rounded-[50%] text-[2rem] text-blue mt-12 mr-6 mb-12 ml-0 ease-linear duration-[.3s] hover:bg-blue hover:text-grey hover:shadow-first' ><i class='bx bxl-github' ></i></a>
            <a href="https://www.linkedin.com/in/emirhan-koç-706a32234/" target='_blank' className='animate-[slideLeft_2s_ease_forwards] opacity-0 animation-delay-1500 inline-flex justify-center items-center w-16 h-16 bg-transparent border-[.2rem] border-solid border-blue rounded-[50%] text-[2rem] text-blue mt-12 mr-6 mb-12 ml-0 ease-linear duration-[.3s] hover:bg-blue hover:text-grey hover:shadow-first' ><i class='bx bxl-linkedin' ></i></a>
        </div>
        <a href="https://drive.google.com/file/d/1IUzPRpLfnTugGDktY4oMOZuz6o3GNxBu/view?usp=share_link" target="_blank" className="inline-block py-[1rem] px-[2.8rem] bg-blue rounded-[4rem] text-[1.6rem] text-dark tracking-[.1rem] font-semibold border-solid border-2 ease-linear duration-[.4s] hover:bg-dark hover:text-blue hover:scale-[1.02]">Download CV</a>
        </div>
        <div className="home-img">
            <img className='opacity-0 animate-[zoomIn_3s_ease_forwards] animate-[floatImage_4s_ease-in-out_forwards] animation-delay-2000 max-w-[30vw] mr-36 max-[768px]:w-[70vw] max-[768px]:mt-16' src="https://gcdnb.pbrd.co/images/SCP1HecvzzrC.jpg?o=1"alt="" />
        
    </div>
    </section>
  )
}

export default Home
