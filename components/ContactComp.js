import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactComp = () => {
    return (
        <div className='p-5'>
            <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }} className='flex items-center justify-around'>
                <Image src={require('../public/hacker.gif')} className='h-[300px] w-[300px]' />
                <p className='hidden lg:block text-white text-3xl font-bold uppercase'>Get in touch</p>
                <Image src={require('../public/me.gif')} className='h-[300px] w-[300px] hidden lg:block' />
            </motion.div>
            <p className='text-white text-center text-lg font-semibold'>You can reach SayanDip via -</p>
            <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }} className='flex flex-col items-center justify-around mt-5'>
                <Image src={require('../public/gmail.gif')} className='h-10 w-10' />
                <Link href="mailto:adhikarysayandip@gmail.com" className='text-transparent bg-clip-text bg-gradient-to-r from-[#4AA4FF] to-[#B575F7] text-lg font-semibold'>adhikarysayandip@gmail.com</Link>
            </motion.div>
            <p className='text-white text-center mt-5 text-lg font-semibold'>or</p>
            <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }} className='flex flex-col items-center justify-around mt-5'>
                <Image src={require('../public/call.gif')} className='h-10 w-10' />
                <Link href="tel:+917003576794" className='text-transparent bg-clip-text bg-gradient-to-r from-[#4AA4FF] to-[#B575F7] text-lg font-semibold'>+91 700-3576-794</Link>
            </motion.div>
            <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }} className='flex flex-col items-center justify-around mt-5'>
                <Image src={require('../public/whatsapp.gif')} className='h-12 w-12' />
                <Link href="whatsapp://send?phone=+917003576794&text=Hello%20Sayandip,%20" className='text-transparent bg-clip-text bg-gradient-to-r from-[#4AA4FF] to-[#B575F7] text-lg font-semibold'>+91 700-3576-794</Link>
            </motion.div>
        </div>
    )
}

export default ContactComp