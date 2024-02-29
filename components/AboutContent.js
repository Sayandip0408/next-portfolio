import React from 'react'
import Education from './Education'
import Skills from './Skills'

const AboutContent = () => {
    return (
        <div className='p-5'>
            <h1 className='text-white capitalize text-3xl md:text-4xl font-black text-center'>short story <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4AA4FF] to-[#B575F7]'>about me &</span> the beginning of <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4AA4FF] to-[#B575F7]'>my journey</span></h1>
            <div className='lg:w-[70vw] mx-auto mt-5'>
                <p className='text-white text-lg text-justify my-2'>
                    My name is <span className='font-bold'>Sayandip Adhikary</span>, usually called Sandy, I came from West Bengal, India. <span className='font-bold'>Master of Computer Application</span> graduate from <span className='font-bold'>University of Kalyani</span> and a frontend developer looking for an opportunity to kick start my career.
                </p>
                <p className='text-white text-lg text-justify my-2 indent-8 md:indent-0'>My short term goal is to get palced in a reputed company, which allows me to enhance my skills and knowledge. My long term goal would be to reach a higher position in the same company. My strength is that I can adapt quickly to any environment.</p>
                <p className='text-white text-lg text-justify my-2 indent-8 md:indent-0'>My hobbies are <a href='https://sayandip-gallery.netlify.app/' className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4AA4FF] to-[#B575F7] hover:underline decoration-[#B575F7]'>photography </a> and playing cricket. I also love watching movies and webseries in my leisure.</p>
            </div>
            <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-[#4AA4FF] to-[#B575F7] text-2xl text-center font-bold'>
                : Educational Details :
            </h3>
            <Education />
            <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-[#4AA4FF] to-[#B575F7] text-2xl text-center font-bold mt-10'>: My Skills & Expertise :</h3>
            <Skills />
        </div>
    )
}

export default AboutContent