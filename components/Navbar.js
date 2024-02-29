import React, { useState } from 'react'
import logo from '../public/SA.png';
import Image from 'next/image';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const router = useRouter();

    return (
        <nav className='bg-[#0E1117] h-20 w-[100vw] flex items-center justify-between px-5 md:px-16 sticky top-0 z-50'>
            <motion.div whileTap={{ scale: 0.8 }}>
                <Image src={logo} alt='logo' className='text-gray cursor-pointer h-20 w-20' onClick={() => router.push('/')} />
            </motion.div>
            {sidebarVisible ?
                <AiOutlineClose className='text-white active:text-gray-300 active:scale-95 text-3xl cursor-pointer md:hidden' onClick={() => setSidebarVisible(false)} />
                :
                <AiOutlineMenu className='text-white active:text-gray-300 active:scale-95 text-3xl cursor-pointer md:hidden' onClick={() => setSidebarVisible(true)} />
            }
            <div className={`absolute top-[80px] md:hidden left-0 pt-5 bg-[#0E1117] h-[calc(100vh-80px)] w-[100vw] flex flex-col items-center justify-around z-50 duration-300 ${sidebarVisible ? `translate-x-0` : `translate-x-full`}`}>
                <div className='px-5 w-full'>
                    <h3 className="text-white font-semibold pb-5 font-Raleway">All Projects</h3>
                    <ul>
                        <Link href="projects" className='text-gray-300 flex items-center justify-start gap-4 font-Raleway mb-3 text-xl'><Image src={require('../public/project.png')} className='h-12 w-12' /> See all my Projects</Link>
                        <Link href="https://github.com/Sayandip0408" className='text-gray-300 flex items-center justify-start gap-6 font-Raleway mt-3 text-xl'><Image src={require('../public/github.png')} className='h-10 w-10' /> Visit my GitHub Account</Link>
                    </ul>
                </div>
                <div className='px-5'>
                    <h3 className='text-white font-semibold pb-5 font-Raleway'>About Me</h3>
                    <ul>
                        <Link href="about" className='text-gray-300 flex items-center justify-start gap-4 font-Raleway mb-3 text-xl'><Image src={require('../public/about.png')} className='h-12 w-12' /> Know about me, my Education and Skills</Link>
                    </ul>
                </div>
                <div className='px-5'>
                    <h3 className='text-white font-semibold pb-5 font-Raleway'>Contact Me</h3>
                    <ul>
                        <Link href="contact" className='text-gray-300 flex items-center justify-start gap-4 font-Raleway mb-3 text-xl'><Image src={require('../public/contact.png')} className='h-12 w-12' /> Find out the ways to connect with me</Link>
                    </ul>
                </div>
            </div>
            <ul className='hidden md:flex items-center justify-center gap-10'>
                <Link href="projects" className='text-white font-sans text-[17px] flex items-center justify-center gap-1 font-Raleway'>
                    Projects
                </Link>
                <Link href="about" className='text-white font-sans text-[17px] flex items-center justify-center gap-1 font-Raleway'>
                    About
                </Link>
                <Link href="contact" className='text-white font-sans text-[17px] flex items-center justify-center gap-1 font-Raleway'>
                    Contact
                </Link>
            </ul>
        </nav >
    )
}

export default Navbar