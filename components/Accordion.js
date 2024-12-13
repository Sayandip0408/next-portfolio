import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const AccordionData = [
    {
        'question': "What is highest qualification of SayanDip?",
        'answer': "SayanDip has completed Master of Computer Application (MCA) from University of Kalyani in 2022.",
        'id': "0"
    },
    {
        'question': "How can I connect with SayanDip?",
        'answer': "Feel free to mail SayanDip on adhikarysayandip@gmail.com",
        'id': "1"
    },
    {
        'question': "What are the hobbies of SayanDip?",
        'answer': "Watching movies and photography",
        'id': "2"
    },
    {
        'question': "What kind of technologies SayanDip knows?",
        'answer': "Please visit the about page to see the technologies known by SayanDip.",
        'id': "3"
    },
]

const AccordionComp = (item) => {
    const [accordion, setAccordion] = useState(false);
    return (
        <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='mt-5 border-b border-gray-700 pb-3'>
            <div className='flex items-center justify-between px-2 cursor-pointer' onClick={() => setAccordion(!accordion)}>
                <h2 className='text-[#D1DEFE] text-xl md:text-2xl font-semibold'>{item.question}</h2>
                {!accordion ? <AiOutlinePlus className='text-white text-xl' /> : <AiOutlineMinus className='text-white text-xl' />}
            </div>
            {
                accordion ? <p className='text-[#A3B3BC] md:text-lg px-2 pt-2 animate-accordion' key={item.key}>
                    {item.answer}
                </p> : <></>
            }
        </motion.div>
    )
}

const Accordion = () => {
    return (
        <div className='p-4 lg:w-[70vw] mx-auto pb-20'
        >
            <h1 className='text-white text-2xl md:text-3xl text-center font-semibold'>Frequently Asked Questions</h1>
            {AccordionData.map(AccordionComp)}
        </div>
    )
}

export default Accordion