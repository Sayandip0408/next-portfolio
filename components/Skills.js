import { motion } from 'framer-motion'
import React from 'react'

const skillData = [
    {
        "sub": "React JS",
        "exp": "95%",
    },
    {
        "sub": "Next JS",
        "exp": "92%",
    },
    {
        "sub": "JavaScript",
        "exp": "95%",
    },
    {
        "sub": "C",
        "exp": "99%",
    },
    {
        "sub": "C++",
        "exp": "96%",
    },
    {
        "sub": "Python",
        "exp": "90%",
    },
    {
        "sub": "Flutter",
        "exp": "85%",
    },
    {
        "sub": "Node JS",
        "exp": "90%",
    },
    {
        "sub": "SQL",
        "exp": "93%",
    },
    {
        "sub": "MongoDB",
        "exp": "90%",
    },
    {
        "sub": "Firebase",
        "exp": "90%",
    },
    {
        "sub": "HTML",
        "exp": "95%",
    },
    {
        "sub": "CSS",
        "exp": "90%",
    },
    {
        "sub": "Data Structure",
        "exp": "97%",
    },
    {
        "sub": "Object Oriented Programming",
        "exp": "96%",
    },
    {
        "sub": "Java",
        "exp": "80%",
    },
]

const SkillFun = (data) => {
    return (
        <>
            <p className='text-white lg:w-[70vw] mx-auto'>{data.sub}</p>
            <div className='bg-[#161B22] w-[100%] lg:w-[70vw] mx-auto h-3 rounded-full my-1'>
                <motion.p initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1 }} className={`bg-gradient-to-r from-[#4AA4FF] to-[#B575F7] h-[inherit] text-white text-xs flex items-center justify-center rounded-full`} style={{ width: data.exp }}>
                    {data.exp}
                </motion.p>
            </div>
        </>
    )
}

const Skills = () => {
    return (
        <div className='mt-2 p-2'>
            {skillData.map(SkillFun)}
        </div>
    )
}

export default Skills