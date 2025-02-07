import React from 'react'
import Education from './Education'
import Skills from './Skills'
import Link from 'next/link'
import Certifications from './Certifications'

const AboutContent = () => {
    return (
        <div className='p-5'>
            <h1 className='text-white capitalize text-3xl md:text-4xl font-black text-center'>A brief story about <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4AA4FF] to-[#B575F7]'>who I am</span> & how my <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4AA4FF] to-[#B575F7]'>journey</span> began</h1>
            <div className='lg:w-[80vw] mx-auto mt-5'>
                <p className='text-white text-lg text-justify my-2'>
                    My name is <span className='font-bold'>Sayandip Adhikary</span>, often called Sandy. I am from West Bengal, India, and hold a <span className='font-bold'>Master of Computer Applications</span> degree from the <span className='font-bold'>University of Kalyani</span>. Currently, I am working as a <span className='font-bold'>Software Engineer</span> at <span className='font-bold'>Sutantra Technologies</span>, a role I have been passionately engaged in since January 2023.
                </p>
                <p className='text-white text-lg text-justify my-2'>I am a frontend developer eager to continue learning and growing in the tech industry. My short-term goal is to contribute meaningfully to a reputed organization that provides opportunities to enhance my skills and knowledge. In the long term, I aspire to achieve a leadership role within the same organization, contributing to its growth and success.</p>
                <p className='text-white text-lg text-justify my-2'>I pride myself on being highly adaptable to new environments and challenges, enabling me to thrive in dynamic situations and deliver impactful results.</p>
                <p className='text-white text-lg text-justify my-2'>I have a passion for <Link href='https://shutter-island.netlify.app/' target='_blank' className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4AA4FF] to-[#B575F7] hover:underline decoration-[#B575F7]'>photography </Link> and enjoy playing cricket. In my leisure time, I love immersing myself in movies and TV shows, which help me relax and recharge.</p>
            </div>
            <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-[#4AA4FF] to-[#B575F7] text-2xl text-center font-bold'>
                : Educational Details :
            </h3>
            <Education />
            <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-[#4AA4FF] to-[#B575F7] text-2xl text-center font-bold mt-10'>: My Skills & Expertise :</h3>
            <Skills />
            <Certifications />
        </div>
    )
}

export default AboutContent