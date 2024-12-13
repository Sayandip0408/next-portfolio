import React from 'react'
import ProjectComp from './ProjectComp'

const ProjectHero = () => {
    return (
        <div className='p-5'>
            <h1 className='text-white capitalize text-3xl md:text-4xl font-black text-center'>all the <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4AA4FF] to-[#B575F7]'>projects</span> i have done so far are <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4AA4FF] to-[#B575F7]'>listed below</span></h1>
            <ProjectComp />
            <h3 className='text-white text-lg mt-10 text-center'>Visit my <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4AA4FF] to-[#B575F7]'>GitHub</span> Repository <a className='text-transparent bg-clip-text bg-gradient-to-r from-[#4AA4FF] to-[#B575F7]' href="https://github.com/Sayandip0408?tab=repositories">Sayandip0408/repositories</a></h3>
        </div>
    )
}

export default ProjectHero