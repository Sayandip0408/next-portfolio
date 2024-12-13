import React from 'react'
import Image from 'next/image'
import { AiFillHeart } from "react-icons/ai";
import { motion } from "framer-motion"

const HomeMid = () => {
    return (
        <div className='py-4 px-4 md:px-0'>
            <motion.h2 initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1 }} className='text-white text-2xl md:text-3xl font-semibold text-center mb-3'>I <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4AA4FF] to-[#B575F7]'>LOVE</span> TO CREATE SOMETHING SIMPLE AND CLEAN <AiFillHeart className='text-[#B575F7] inline animate-bounce' /></motion.h2>
            <div className='mt-10'>
                <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='h-[fit-content] w-[fit-content] p-[2px] mx-auto rounded-lg'>
                    <Image
                        src='https://res.cloudinary.com/dgb69w56a/image/upload/v1725458447/gt1rdcd2xeqbxgbi65ps.jpg'
                        alt='img'
                        height={400}
                        width={300}
                        className='h-[300px] w-[225px] md:h-[400px] md:w-[300px] mx-auto rounded-lg'
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default HomeMid