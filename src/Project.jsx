import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div id='Project' className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'></h1>
      <div className='py-12 px-8 flex flex-wrap gap-5'>
        <ProjectCard title="Blogging website" main="this is a blogging website created next js and used component liberary"/>


        <ProjectCard title="Youtube-colone" main="this is a blogging website created next js and used component liberary"/>



        <ProjectCard title="Netflix-colone" main="this is a blogging website created next js and used component liberary"/>



      </div>
    </div>
  )
};

export default Project;
