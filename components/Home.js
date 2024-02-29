import React from 'react'
import Hero from './Hero'
import HomeMid from './HomeMid';
import Accordion from './Accordion';
import Footer from './Footer';

const Home = () => {
    return (
        <div className='h-[calc(100vh-80px)] w-[100vw]'>
            <Hero />
            <HomeMid />
            <Accordion />
            <Footer />
        </div>
    )
}

export default Home