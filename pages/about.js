import React from 'react'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import AboutContent from '@/components/AboutContent'

const about = () => {
    return (
        <>
            <Head>
                <title>About | SayanDip Adhikary</title>
                <meta name="description" content="Get detailed information about Sayandip Adhikary" />
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
                <AboutContent />
                <Footer />
            </motion.main>
        </>
    )
}

export default about