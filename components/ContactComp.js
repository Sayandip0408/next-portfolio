import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsSend } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from 'react-toastify';
import { MdWavingHand } from "react-icons/md";
import { IoMail } from "react-icons/io5";

const ContactComp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [sendingData, setSendingData] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSendingData(true);

        const formData = { name, email, phone, subject, message };

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Message sent successfully!', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                });
                setName('');
                setEmail('');
                setPhone('');
                setSubject('');
                setMessage('');
            } else {
                toast.error('Failed to send message!', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                });
            }
        } catch (error) {
            console.error(error);
            toast.error('There was an error sending your message!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
        } finally {
            setSendingData(false);
        }
    }

    return (
        <div className='p-5 min-h-[calc(100vh-200px)]'>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ scale: 0 }}
                className='w-full md:w-[calc(100vw-128px)] lg:w-[900px] mx-auto h-fit'>
                <h1
                    className='text-white text-2xl md:text-4xl lg:text-5xl font-semibold font-Raleway'
                >
                    Love to here fom you, <br></br>
                    Get in touch
                    <span className=''> <MdWavingHand className='text-yellow-500 animate-bounce inline' /></span>
                </h1>
                <form className='my-10 h-fit w-full grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5' onSubmit={handleSubmit}>
                    <div className='h-fit w-full flex flex-col'>
                        <label className='text-white capitalize text-sm font-Raleway'>your name <span className='text-xl text-red-500'>*</span></label>
                        <input type='text' placeholder='e.g. John Doe' required value={name} onChange={(e) => setName(e.target.value)} className='h-10 md:h-12 px-1 text-sm w-full focus:outline-none border border-transparent focus:border-white bg-[#2d3436] text-gray-200 font-medium font-Raleway' />
                    </div>
                    <div className='h-fit w-full flex flex-col'>
                        <label className='text-white capitalize text-sm font-Raleway'>your email <span className='text-xl text-red-500'>*</span></label>
                        <input type='email' placeholder='e.g. abc@xyz.com' required value={email} onChange={(e) => setEmail(e.target.value)} className='h-10 md:h-12 px-1 text-sm w-full focus:outline-none border border-transparent focus:border-white bg-[#2d3436] text-gray-200 font-medium font-Raleway' />
                    </div>
                    <div className='h-fit w-full flex flex-col'>
                        <label className='text-white capitalize text-sm font-Raleway'>phone number <span className='text-xl text-red-500'>*</span></label>
                        <input type='text' placeholder='e.g. XXX-XXX-XXXX' required value={phone} onChange={(e) => setPhone(e.target.value)} className='h-10 md:h-12 px-1 text-sm w-full focus:outline-none border border-transparent focus:border-white bg-[#2d3436] text-gray-200 font-medium font-Raleway' />
                    </div>
                    <div className='h-fit w-full flex flex-col'>
                        <label className='text-white capitalize text-sm font-Raleway'>subject <span className='text-xl text-red-500'>*</span></label>
                        <input type='text' placeholder='e.g. Job offers' required value={subject} onChange={(e) => setSubject(e.target.value)} className='h-10 md:h-12 px-1 text-sm w-full focus:outline-none border border-transparent focus:border-white bg-[#2d3436] text-gray-200 font-medium font-Raleway' />
                    </div>
                    <div className='h-fit w-full flex flex-col lg:col-span-2'>
                        <label className='text-white capitalize text-sm font-Raleway'>message <span className='text-xl text-red-500'>*</span></label>
                        <textarea type='text' rows={5} placeholder='Write your message here...' required value={message} onChange={(e) => setMessage(e.target.value)} className='p-1 text-sm w-full focus:outline-none border border-transparent focus:border-white bg-[#2d3436] text-gray-200 font-medium font-Raleway' />
                    </div>
                    {sendingData ? (
                        <button className='bg-gray-300 w-full h-10 md:h-12 flex items-center justify-center gap-2 capitalize text-sm font-Raleway font-semibold cursor-wait'>
                            <AiOutlineLoading3Quarters className='animate-spin' />
                        </button>
                    ) : (
                        <button className='bg-white hover:bg-gray-100 w-full h-10 md:h-12 flex items-center justify-center gap-2 capitalize text-sm font-Raleway font-semibold' type='submit'>
                            just send
                            <BsSend className='animate-bounce' />
                        </button>
                    )}
                </form>
                <h3 className='text-white w-full text-center'>or, feel free to reach out directly via email at <Link href='mailto:adhikarysayandip@gmail.com' className='text-transparent bg-clip-text bg-gradient-to-r from-[#4AA4FF] to-[#B575F7] underline decoration-[#4AA4FF] items-center justify-center inline-flex gap-1'>adhikarysayandip@gmail.com <IoMail className='text-[#B575F7] mt-1' /></Link></h3>
            </motion.div>
        </div>
    )
}

export default ContactComp