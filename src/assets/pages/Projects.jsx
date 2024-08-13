import React from 'react'
import { Link } from 'react-router-dom'

import placeholder from '/200x150.png'
import ProjectComponent from '@/components/ProjectComponent';

export default function Projects() {
  return (
    <>
      <div className="flex flex-col items-center justify-start pt-20 h-[60svh] md:h-[30svh]">
        <h1 className="text-5xl text-white font-bold">Projects</h1>
        <p className="text-xl text-white">Projects page</p>
      </div>
      <ProjectComponent
        description="Project 1"
        image={placeholder}
        projectName={"project1"}
        />
        <ProjectComponent
        description="Project 2"
        image={placeholder}
        projectName={"project2"}
        />
        <ProjectComponent
        description="Project 3"
        image={placeholder}
        projectName={"project3"}
        />

    </>
  );
}
