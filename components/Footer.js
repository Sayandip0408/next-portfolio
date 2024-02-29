import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import logo from '../public/SA.png';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
    const router = useRouter();
    return (
        <footer className='bg-[#0E1016] py-10 px-0 md:px-10 border-t border-gray-700'>
            <div className='h-[fit-content] w-[100%] lg:w-[75vw] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0'>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className='flex items-center md:items-start justify-start flex-col m-1'>
                    <Image src={logo} alt='logo' className='text-gray cursor-pointer h-20 w-20' onClick={() => router.push('/')} />
                    <h2 className='text-white  font-bold uppercase'>SayanDip Adhikary</h2>
                    <p className='text-white text-center md:text-start'>Copyright © 2023 SayanDip Adhikary | All Rights Reserved</p>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className='flex items-center md:items-start justify-start flex-col m-1 gap-1'>
                    <Link href="projects" className='text-white uppercase'>
                        Projects
                    </Link>
                    <Link href="about" className='text-white uppercase'>
                        About
                    </Link>
                    <Link href="https://sayandip-gallery.netlify.app/" className='text-white uppercase'>
                        Photography
                    </Link>
                    <Link href="contact" className='text-white uppercase'>
                        Contact
                    </Link>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className='flex items-center md:items-start justify-start flex-col m-1'>
                    <Link href="https://www.facebook.com/sayandip.adhikary.96" className='text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#0091e9] flex items-center justify-start uppercase w-[135px]'>
                        <Image src={require("../public/facebook.png")} className='h-10 w-10' />
                        facebook
                    </Link>
                    <Link href="https://www.instagram.com/sayan.dip7/" className='text-transparent bg-clip-text bg-gradient-to-r from-[#c13da6] to-[#f6a05b] flex items-center justify-start uppercase w-[135px]'>
                        <Image src={require("../public/instagram.png")} className='h-10 w-10' />
                        instagram
                    </Link>
                    <Link href="https://github.com/Sayandip0408" className='text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#7a39d6] flex items-center justify-start uppercase w-[135px] gap-1 ml-1'>
                        <Image src={require("../public/github.png")} className='h-8 w-8' />
                        github
                    </Link>
                    <Link href="https://www.linkedin.com/in/sayandip-adhikary-7359a8199" className='text-transparent bg-clip-text bg-gradient-to-r from-[#0071d4] to-[#0094e8] flex items-center justify-start uppercase w-[135px]'>
                        <Image src={require("../public/linkedin.png")} className='h-10 w-10' />
                        linkedin
                    </Link>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer