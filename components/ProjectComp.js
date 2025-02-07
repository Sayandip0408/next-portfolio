import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { db } from '@/firebase_config';
import { collection, getDocs, query } from 'firebase/firestore';
import Link from 'next/link';

const ProjectComp = () => {
    const [projectData, setProjectData] = useState([]);

    const getData = async () => {
        const projects = [];
        const q = query(collection(db, "projects"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            projects.push(doc.data());
        });
        projects.sort((a, b) => b.projectCount - a.projectCount);
        setProjectData(projects);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='mt-10 p-1 grid grid-cols-1 md:grid-cols-2 lg:w-[80vw] mx-auto gap-5'>
            {projectData.map((data) => (
                <motion.div
                    key={data.docID}
                    initial={{ translateY: '100vw', opacity: 0, scale: 0.8 }}
                    animate={{ translateY: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className='rounded-3xl bg-[#161B22] flex flex-col items-center justify-between p-2 gap-2'>
                    <Image src={data.image} alt='img' className='rounded-t-3xl h-[250px] xl:h-[400px] w-full' width={900} height={300} />
                    {/* <div className='h-[fit-content] rounded-b-3xl flex flex-col items-center justify-between p-3 gap-2'> */}
                    <h3 className='text-white text-2xl font-bold line-clamp-1'>{data.projectName}</h3>
                    <p className='text-[#B2BFDB] text-lg font-semibold line-clamp-1'>{data.technologies}</p>
                    <p className='text-gray-400 text-center'>{data.projectDesc}</p>
                    <Link href={data.url} target='_blank' className='bg-gradient-to-r from-[#4AA4FF] to-[#B575F7] h-10 w-[60%] rounded-full text-white text-sm font-semibold flex items-center justify-center gap-1 hover:scale-105 transition-all duration-200'>Learn More <BsArrowRight /></Link>
                    {/* </div> */}
                </motion.div>
            ))}
        </div>
    )
}

export default ProjectComp