"use client"
import { useInView } from 'framer-motion';
import React, { useRef, useState } from 'react'
import ProjectsTag from './ProjectsTag';
import {motion} from "framer-motion"
import ProjectsCard from './ProjectsCard';

const projectsData = [
    {
      id: 1,
      title: "Quiz App",
      description: "Javascript soruları olan quiz uygulaması",
      image: "/quiz-app.png",
      tag: ["All","Fullstack"],
      gitUrl: "https://github.com/canbedir/quiz-app-nextjs14",
      previewUrl: "https://hix-quiz-app.vercel.app/",
    },
];

const Projects = () => {

    const [tag,setTag] = useState("All")
    const ref = useRef(null)

    const isInview = useInView(ref,{once:true})
    
    const handleTagChange = (newTag:any)=>{
        setTag(newTag)
    }

    const filtredProject = projectsData.filter((project)=>(
        project.tag.includes(tag)
    ))

    const cardVariants ={
        initial:{y:50,opacity:0},
        animate:{y:0,opacity:1},
    }

  return (
    <section>
        <h2 className='text-white text-center text-4xl font-semibold mt-4 mb-8 lg:mt-8 lg:mb-12'>
            My Projects
        </h2>

        <div className='text-white flex flex-row justify-center items-center gap-5 py-6'>

            <ProjectsTag name='All' onClick={handleTagChange} isSelected={tag==="All"}/>
            <ProjectsTag name='Frontend' onClick={handleTagChange} isSelected={tag==="Frontend"}/>
            <ProjectsTag name='Fullstack' onClick={handleTagChange} isSelected={tag==="Fullstack"}/>

        </div>

        <ul ref={ref}
         className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10'>
            
            {filtredProject.map((project,index)=>(
                <motion.li
                 variants={cardVariants}
                 key={index}
                 initial="initial"
                 animate={isInview ? "animate" : "initial"}
                 transition={{duration:0.3, delay:index*0.4}}
                 >

                    <ProjectsCard description={project.description} gitUrl={project.gitUrl} image={project.image} previewUrl={project.previewUrl}
                     title={project.title} key={project.id}/>
                    
                </motion.li>
            ))}

        </ul>
    </section>
  )
}

export default Projects