import React, { useState } from 'react'
import vrppc from "../public/vrppc.avif";
import lockeKey from "../public/lockeKey.png";
import tictactoe from "../public/tictactoe.png";
import quizbuzz from "../public/quizbuzz.png";
import codepen from "../public/codepen.png";
import calculatorW from "../public/calculatorW.png";
import netflix from "../public/netflix.png";
import covid from "../public/covid.png";
import coursepro from "../public/coursepro.png";
import bank from "../public/bank.png";
import gallery from "../public/gallery.png";
import irctc from "../public/irctc.png";
import blog from "../public/blog.png";
import portfolio from "../public/portfolio.png";
import amazkart from "../public/amazkart.png";
import kb from "../public/kb.png";
import keep from "../public/keep.png";
import calculator from "../public/calculator.png";
import katha from "../public/katha.png";
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const projectData = [
    {
        "projectName": "কথা-katha",
        "image": katha,
        "projectDesc": "Hi! This is a clone of WhatsApp developed using Flutter and Firebase",
        "technologies": "Dart, Flutter, Firebase",
        "url": "https://github.com/Sayandip0408/katha-chatting-app-using-flutter",
        "delay": 0.3,
    },
    {
        "projectName": "Locke & Key",
        "image": lockeKey,
        "projectDesc": "Locke & Key is a password manager MERN website to store new password securely, show all your saved passwords, also generates extremely strong passwords.",
        "technologies": "React JS, Node JS, MongoDB, Express, HTML, CSS, JavaScript",
        "url": "https://plain-pinafore-worm.cyclic.app/",
        "delay": 0.3,
    },
    {
        "projectName": "Vehicle Routing Problem With Private Fleet And Common Carrier",
        "image": vrppc,
        "projectDesc": "The vehicle-routing problem with private fleet and common carrier (VRPPC) is a variant of the VRP in which customers can be subcontracted at a customer-dependent cost if the privately-owned capacity is insufficient to serve all customers, or if doing so is beneficial from a cost point of view.",
        "technologies": "C++ Programming Language",
        "url": "https://github.com/Sayandip0408/VRPPC",
        "delay": 0.5,
    },
    {
        "projectName": "Tic Tac Toe",
        "image": tictactoe,
        "projectDesc": "Tic Tac Toe game is very famous among us, it doesn't need much explanation I guess.",
        "technologies": "React JS, HTML, CSS, JavaScript",
        "url": "https://tictactoe-sayandip.netlify.app/",
        "delay": 0.7,
    },
    {
        "projectName": "Quiz-Buzz",
        "image": quizbuzz,
        "projectDesc": "A website to play MCQ quiz on subjects like C/C++, Database, Data Structure HTML/CSS, JavaScript, Python, Java etc.",
        "technologies": "React JS, HTML, CSS, JavaScript",
        "url": "https://quiz-buzz-sayandip.netlify.app/",
        "delay": 0.9,
    },
    {
        "projectName": "Codepen Clone",
        "image": codepen,
        "projectDesc": "Hi! My name is SayanDip Adhikary, I have created this Codepen Clone Website using React JS.",
        "technologies": "React JS, HTML, CSS, JavaScript",
        "url": "https://codepen-by-sayandip.netlify.app/",
        "delay": 1.1,
    },
    {
        "projectName": "Google Keep App",
        "image": keep,
        "projectDesc": "Hi! This is a clone of Google Keep app developed using Flutter and Firebase",
        "technologies": "Dart, Flutter, Firebase",
        "url": "https://github.com/Sayandip0408/google-keep-clone-using-flutter-firebase",
        "delay": 1.7,
    },
    {
        "projectName": "IRCTC MERN",
        "image": irctc,
        "projectDesc": "IRCTC is fullstack website developed by me using React JS, Node JS, Express, MongoDB (MERN)",
        "technologies": "React JS, Node JS, MongoDB, Express, HTML, CSS, JavaScript",
        "url": "https://github.com/Sayandip0408/MERN-IRCTC-CLONE",
        "delay": 1.5,
    },
    {
        "projectName": "BLOG MERN",
        "image": blog,
        "projectDesc": "This is a Blog fullstack website developed by me using React JS, Node JS, Express, MongoDB (MERN)",
        "technologies": "React JS, Node JS, MongoDB, Express, HTML, CSS, JavaScript",
        "url": "https://github.com/Sayandip0408/MERN-BLOG",
        "delay": 1.7,
    },
    {
        "projectName": "AmazKart Ecommerce App",
        "image": amazkart,
        "projectDesc": "Hi! This is a E-commerce app developed using Flutter and Firebase",
        "technologies": "Dart, Flutter, Firebase",
        "url": "https://github.com/Sayandip0408/amazkart-ecom-app",
        "delay": 1.7,
    },
    {
        "projectName": "My Portfolio Website",
        "image": portfolio,
        "projectDesc": "This is a my portfolio website developed by me using Next JS",
        "technologies": "React JS, Next JS, HTML, CSS, JavaScript",
        "url": "https://github.com/Sayandip0408/MERN-BLOG",
        "delay": 1.7,
    },
    {
        "projectName": "Simple Calculator with Dark mode",
        "image": calculatorW,
        "projectDesc": "Hi! My name is SayanDip Adhikary, I have created this calculator using HTML, CSS, JS.",
        "technologies": "HTML, CSS, JavaScript",
        "url": "https://calculator-sayandip.netlify.app/",
        "delay": 1.7,
    },
    {
        "projectName": "Knowledge Bhandar",
        "image": kb,
        "projectDesc": "Hi! This is a General Knowledge app developed using Flutter and Firebase",
        "technologies": "Dart, Flutter, Firebase",
        "url": "https://github.com/Sayandip0408/Knowledge-Bhandar-Flutter",
        "delay": 1.7,
    },
    {
        "projectName": "INDIA COVID-19 Dashboard",
        "image": covid,
        "projectDesc": "Hi! My name is SayanDip Adhikary, I have created this website using React, HTML, CSS, JS.",
        "technologies": "React JS, HTML, CSS, JavaScript",
        "url": "https://covid19-sayandip.netlify.app/",
        "delay": 1.7,
    },
    {
        "projectName": "CoursePro E-Learning",
        "image": coursepro,
        "projectDesc": "Hi! My name is SayanDip Adhikary, I have created this website using React, HTML, CSS, JS.",
        "technologies": "React, HTML, CSS, JavaScript",
        "url": "https://coursepro-sayandip.netlify.app/",
        "delay": 1.7,
    },
    {
        "projectName": "Bank Management System with Java",
        "image": bank,
        "projectDesc": "Hi! My name is SayanDip Adhikary, I have created this application using Java",
        "technologies": "Java",
        "url": "https://github.com/Sayandip0408/Bank-Management-System-JAVA",
        "delay": 1.7,
    },
    {
        "projectName": "Pro Calculator",
        "image": calculator,
        "projectDesc": "Hi! this is a flutter calculator app for both iOS and Android",
        "technologies": "Flutter",
        "url": "https://github.com/Sayandip0408/Calculator_Pro-using-Flutter",
        "delay": 1.7,
    },
    {
        "projectName": "Netflix UI Clone",
        "image": netflix,
        "projectDesc": "Hi! My name is SayanDip Adhikary, I have created this Netflix Clone Website using React JS, HTML, CSS, JS.",
        "technologies": "React, HTML, CSS, JavaScript",
        "url": "https://netflix-sayandip.netlify.app/",
        "delay": 1.3,
    },
]

const ProjectFun = (data) => {
    const [showDetail, setShowDetail] = useState(false);
    const router = useRouter();

    const goToWebsite = () => {
        router.push(data.url);
    }

    return (
        <motion.div initial={{ translateX: '-100vw', opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ duration: 1, delay: data.delay }} className='rounded-3xl bg-[#161B22] cursor-pointer relative' onMouseOver={() => setShowDetail(true)} onMouseOut={() => setShowDetail(false)}>
            <Image src={data.image} className='rounded-t-3xl' />
            <div className='h-[fit-content] lg:h-[150px] rounded-b-3xl flex flex-col items-start justify-around'>
                <h3 className='text-white text-2xl font-bold mb-2 px-2'>{data.projectName}</h3>
                <p className='text-[#B2BFDB] text-lg font-semibold mb-2 px-2'>{data.technologies}</p>
                {showDetail ?
                    <motion.div initial={{ opacity: 0, translateY: '50%' }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.5 }} className='hidden lg:flex absolute bottom-0 bg-[#161B22] h-[calc(100%-30%)] rounded-b-3xl flex-col justify-around px-2'>
                        <p className='text-[#B2BFDB] text-xl font-semibold mb-2'>{data.technologies}</p>
                        <p className='text-gray-400 mb-2'>{data.projectDesc}</p>
                        <motion.button initial={{ scale: 0.8 }} whileHover={{ scale: 1 }} whileTap={{ scale: 0.8 }} className='bg-gradient-to-r from-[#4AA4FF] to-[#B575F7] py-2 px-4 rounded-full text-white text-sm font-semibold mb-5 flex items-center justify-center gap-1' onClick={goToWebsite}>Learn More <BsArrowRight /></motion.button>
                    </motion.div> : ""}
                <p className='text-gray-400 mb-2 px-2 lg:hidden'>{data.projectDesc}</p>
                <motion.button whileTap={{ scale: 0.8 }} className='bg-gradient-to-r from-[#4AA4FF] to-[#B575F7] py-2 px-4 rounded-full text-white text-sm font-semibold mb-5 flex items-center justify-center gap-1 mx-2 lg:hidden' onClick={goToWebsite}>Learn More <BsArrowRight /></motion.button>
            </div>
        </motion.div>
    )
}

const ProjectComp = () => {
    return (
        <div className='mt-10 p-1 grid grid-cols-1 lg:grid-cols-3 lg:w-[80vw] mx-auto gap-5'>
            {projectData.map(ProjectFun)}
        </div>
    )
}

export default ProjectComp