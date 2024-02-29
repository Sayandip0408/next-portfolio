import React from 'react'
import ku from "../public/ku.jpg";
import bstm from "../public/bstm.jpeg";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const EduData = [
    {
        "institute": "University of Kalyani",
        "image": ku,
        "course": "Master of Computer Application",
        "board": "Department of Computer Science and Engineering",
        "link": "https://klyuniv.ac.in/",
        "delay": 0.1,
    },
    {
        "institute": "Bengal School of Technology and Management",
        "image": bstm,
        "course": "Bachelor of Computer Application",
        "board": "MAKAUT (Formerly WBUT)",
        "link": "https://bstmanagement.in/",
        "delay": 0.5,
    },
]

const EduFun = (data) => {
    const router = useRouter();
    const gotolink = () => {
        router.push(`${data.link}`);
    }
    return (
        <motion.div initial={{ translateX: '-100vw', opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ duration: 1, delay: data.delay }} className='bg-[#161B22] rounded-3xl h-fit md:h-[450px]'>
            <Image src={data.image} alt='img' className='rounded-t-3xl h-[180px] md:h-[250px]' />
            <div className='p-5'>
                <h4 className='text-transparent bg-clip-text bg-gradient-to-r from-[#4AA4FF] to-[#B575F7] text-2xl font-semibold'>{data.course}</h4>
                <p className='text-white my-1'>{data.institute}</p>
                <p className='text-white my-1'>{data.board}</p>
                <motion.button initial={{ scale: 0.9 }} whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} onClick={gotolink} className='bg-gradient-to-r from-[#4AA4FF] to-[#B575F7] rounded-full h-10 w-[150px] md:h-12 md:w-[150px] flex items-center justify-center text-white mt-5'>Lern more</motion.button>
            </div>
        </motion.div>
    )
}

const Education = () => {
    return (
        <div className='lg:w-[70vw] mx-auto mt-5 h-[fit-content] grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2'>
            {EduData.map(EduFun)}
        </div>
    )
}

export default Education