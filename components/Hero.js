import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='h-[fit-content] w-[100vw] overflow-y-scroll overflow-x-hidden grid grid-cols-1 md:grid-cols-2'>
            <motion.div initial={{ opacity: 0, translateX: '-50%' }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ duration: 0.8 }} className='px-8 py-6 md:flex md:flex-col md:justify-center md:gap-5 md:px-16 lg:px-20'>
                <h1 className='text-white capitalize text-4xl font-black lg:text-6xl z-0'>
                    hi there,<br />I am <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4AA4FF] to-[#B575F7]'>Sayandip adhikary<br /></span> you&apos;re welcome to my personal portfolio
                </h1>
                <p className='text-gray-400 mt-5 text-[17px]'>
                    A frontend developer, specializing in creating engaging user interfaces and experiences for websites and web applications with expertise in MERN Stack.
                </p>
                <motion.a href='https://drive.google.com/file/d/1T_T6qa1YllZk3chK2vueCCVKCr8ESse8/view?usp=sharing' target='_blank' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className='p-[2px] h-12 w-[170px] mt-8 rounded-full text-white font-bold text-sm bg-gradient-to-r from-[#4AA4FF] to-[#B575F7]'>
                    <span className='flex items-center justify-center h-[100%] w-[100%] rounded-full bg-gradient-to-r from-[#0E1117] to-[#0E1117] hover:bg-gradient-to-r hover:from-[#4AA4FF] hover:to-[#B575F7] hover:transition-colors hover:duration-500'>See Resume</span>
                </motion.a>
            </motion.div>
            <motion.div initial={{ opacity: 0, translateX: '50%' }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ duration: 0.8 }} className='p-2 flex items-center justify-center'>
                <Image
                    src={require('../public/heroImg2.png')}
                    alt='img'
                />
            </motion.div>
        </div >
    )
}

export default Hero