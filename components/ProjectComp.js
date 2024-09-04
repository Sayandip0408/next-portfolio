import React, { useState, useEffect } from 'react'
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
import { db } from '@/firebase_config';
import { collection, getDocs, query } from 'firebase/firestore';

// const projectData = [

//     {
//         "projectName": "Tic Tac Toe",
//         "image": tictactoe,
//         "projectDesc": "Tic Tac Toe game is very famous among us, it doesn't need much explanation I guess.",
//         "technologies": "React JS, HTML, CSS, JavaScript",
//         "url": "https://tictactoe-sayandip.netlify.app/",
//         "delay": 0.7,
//     },
//     {
//         "projectName": "Quiz-Buzz",
//         "image": quizbuzz,
//         "projectDesc": "A website to play MCQ quiz on subjects like C/C++, Database, Data Structure HTML/CSS, JavaScript, Python, Java etc.",
//         "technologies": "React JS, HTML, CSS, JavaScript",
//         "url": "https://quiz-buzz-sayandip.netlify.app/",
//         "delay": 0.9,
//     },
//     {
//         "projectName": "Simple Calculator with Dark mode",
//         "image": calculatorW,
//         "projectDesc": "Hi! My name is SayanDip Adhikary, I have created this calculator using HTML, CSS, JS.",
//         "technologies": "HTML, CSS, JavaScript",
//         "url": "https://calculator-sayandip.netlify.app/",
//         "delay": 1.7,
//     },
//     {
//         "projectName": "INDIA COVID-19 Dashboard",
//         "image": covid,
//         "projectDesc": "Hi! My name is SayanDip Adhikary, I have created this website using React, HTML, CSS, JS.",
//         "technologies": "React JS, HTML, CSS, JavaScript",
//         "url": "https://covid19-sayandip.netlify.app/",
//         "delay": 1.7,
//     },
//     {
//         "projectName": "CoursePro E-Learning",
//         "image": coursepro,
//         "projectDesc": "Hi! My name is SayanDip Adhikary, I have created this website using React, HTML, CSS, JS.",
//         "technologies": "React, HTML, CSS, JavaScript",
//         "url": "https://coursepro-sayandip.netlify.app/",
//         "delay": 1.7,
//     },
// ]

const ProjectComp = () => {
    const [projectData, setProjectData] = useState([]);
    const router = useRouter();

    const goToWebsite = (url) => {
        router.push(url);
    }

    const getData = async () => {
        const projects = [];
        const q = query(collection(db, "projects"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            projects.push(doc.data());
        });
        setProjectData(projects);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='mt-10 p-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:w-[80vw] mx-auto gap-5'>
            {projectData.map((data) => (
                <motion.div key={data.docID} initial={{ translateY: '100vw', opacity: 0, scale: 0.8 }} animate={{ translateY: 0, opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='rounded-3xl bg-[#161B22] cursor-pointer relative'>
                    <Image src={data.image} alt='img' className='rounded-t-3xl h-[200px] w-full' width={600} height={300} />
                    <div className='h-[fit-content] rounded-b-3xl flex flex-col items-start justify-between p-3 gap-2'>
                        <h3 className='text-white text-2xl font-bold line-clamp-1'>{data.projectName}</h3>
                        <p className='text-[#B2BFDB] text-lg font-semibold line-clamp-1'>{data.technologies}</p>
                        <p className='text-gray-400 line-clamp-2'>{data.projectDesc}</p>
                        <motion.button initial={{ scale: 0.9 }} whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} className='bg-gradient-to-r from-[#4AA4FF] to-[#B575F7] h-10 w-full rounded-full text-white text-sm font-semibold flex items-center justify-center gap-1' onClick={() => goToWebsite(data.url)}>Learn More <BsArrowRight /></motion.button>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

export default ProjectComp