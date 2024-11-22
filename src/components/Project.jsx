import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import {motion} from "framer-motion"
function Project({project, setProject, setPage}) {
    const rightanimationinitial={
        x:100,
        opacity:0
    }
    const rightanimation ={
        x:0,
        opacity:1
    }
    const leftanimationinitial={
        x:-100,
        opacity:0
    }
    const transition = {
        duration:0.7,
        ease:"easeInOut"
    }
  return <>
    <div className='projectinfo'>
        <IoIosArrowRoundBack className='icon' onClick={()=>{setPage("portfolio")}} />
        <div className="info">
            <motion.img 
               initial={leftanimationinitial}
               animate={rightanimation}
               transition={transition}
            src={project.image} alt={project.name} />
            <motion.div 
               initial={rightanimationinitial}
               animate={rightanimation}
               transition={transition}
            className="des">
                <h1>Case Study</h1>
                <p>{project.description}</p>
               <div className="projectdesbottom">
               <h2>Project Info</h2>
                <span>CATEGORY: {project.type}</span>
                <span>DATE: {project.date}</span>
               </div>
               <div className="icons">
                <a href={project.gitHubLink} className='link' target='_blank'><FaGithub className='icon'/></a>
                <a href={project.siteLink} className='link' target='_blank'><GoLinkExternal className='icon'/></a>
               </div>
            </motion.div>
        </div>
    </div>
  </>
}

export default Project