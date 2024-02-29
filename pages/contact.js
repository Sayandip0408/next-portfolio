import ContactComp from '@/components/ContactComp'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'
import Head from 'next/head'
import React from 'react'

const contact = () => {
    return (
        <>
            <Head>
                <title>SayanDip Adhikary | Contact</title>
                <meta name="description" content="Sayandip Adhikary's contact information" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
                className='relative h-[100vh] w-[100vw] overflow-x-hidden bg-[#0E1117] z-0 noScrollBar'>
                <Navbar />
                <ContactComp />
                <Footer />
            </motion.main>
        </>
    )
}

export default contact