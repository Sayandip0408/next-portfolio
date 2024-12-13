import React from 'react'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import { motion } from 'framer-motion'
import ProjectHero from '@/components/ProjectHero'
import Footer from '@/components/Footer'

const projects = () => {
    return (
        <>
            <Head>
                <title>Projects | SayanDip Adhikary</title>
                <meta name="description" content="Personal portfolio website of Sayandip Adhikary" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
                className='relative h-[100vh] w-[100vw] overflow-x-hidden bg-[#0E1117] noScrollBar'>
                <Navbar />
                <ProjectHero />
                <Footer />
            </motion.main>
        </>
    )
}

export default projects