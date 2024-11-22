import React, {useState} from 'react'
import '../styles/home.css'
import { GoArrowRight } from "react-icons/go";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { delay, motion } from 'framer-motion';
function Home() {
    const [isOver, setIsOver] = useState("")
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
    const frombottomanimationinitial={
        y:100,
        opacity:0
    }
    const frombottomanimation={
        y:0,
        opacity:1
    }
    const viewport={
        once:true
    }
  return <div className="home">
    <div className="banner">
        <motion.h1
        initial={rightanimationinitial}
        animate={rightanimation}
        transition={transition}
        >
            Empowering Nigerian Innovators to Build, Create, and Transform Their Communities
        </motion.h1>
        <Link className='link' to='/contact'>
        <motion.button
        initial={leftanimationinitial}
        animate={rightanimation}
        transition={transition}
        >Get Started</motion.button></Link>
    </div>
    <section className="homesection1">
        <motion.h1
        initial={rightanimationinitial}
        whileInView={rightanimation}
        transition={transition}
        viewport={viewport}
        >Empowering Nigerians with resources and community to drive impact and innovation.</motion.h1>
        <Link className='link' to="/contact">
        <motion.p
         initial={leftanimationinitial}
         whileInView={rightanimation}
         transition={transition}
         viewport={viewport}
        >Tell us about your project <GoArrowRight className='icon' /></motion.p>
        </Link>
    </section>
    <section className="homesection2">
        <motion.h1
         initial={rightanimationinitial}
         whileInView={rightanimation}
         transition={transition}
         viewport={viewport}
        >From Ideas to Digital Realities</motion.h1>
        <div className="services">
            <motion.div
            initial={frombottomanimationinitial}
            whileInView={frombottomanimation}
            transition={transition}
            viewport={viewport}
            className="service">
                <img src="/webandmobiledev.jpg" alt="webandmobiledesign" />
                <div className="des">
                <h2>Ideas to Reality</h2>
                <p>
                At Uncovering Stars, we turn visionary ideas into tangible solutions. By providing resources, mentorship, and technology, we help entrepreneurs and innovators bring their concepts to life, empowering them to create products and services that drive societal change and progress.
                </p>
                </div>
            </motion.div>
            <motion.div
               initial={frombottomanimationinitial}
               whileInView={frombottomanimation}
               transition={transition}
               viewport={viewport}
            className="service">
                <img src="/webdesign.jpg" alt="web design" />
                <div className="des">
                <h2>Innovate and Transform</h2>
                <p>
                We believe in the power of innovation to transform industries and communities. Through our platform, we equip individuals with the tools, knowledge, and networks they need to create cutting-edge solutions that address pressing challenges and shape the future of Nigeria.
                </p>
                </div>
            </motion.div>
            <motion.div
               initial={frombottomanimationinitial}
               whileInView={frombottomanimation}
               transition={transition}
               viewport={viewport}
            className="service">
                <img src="/educationalprogram.jpg" alt="educational programs" />
                <div className="des">
                <h2>Dream, Build, Achieve</h2>
                <p>
                Uncovering Stars is here to help you turn dreams into reality. We provide the resources, guidance, and support necessary for aspiring innovators to build, launch, and scale impactful projects. Our mission is to empower you to achieve your goals.
                </p>
                </div>
            </motion.div>
            <motion.div 
               initial={frombottomanimationinitial}
               whileInView={frombottomanimation}
               transition={transition}
               viewport={viewport}
            className="service">
                <img src="/datascienceandAI.jpg" alt="data science and AI" />
                <div className="des">
                <h2>From Vision to Impact</h2>
                <p>
                We bridge the gap between vision and execution. By fostering collaboration, offering expert advice, and providing access to essential tools, we guide entrepreneurs and innovators through the journey of transforming their ideas into impactful solutions that create lasting change.
                </p>
                </div>
            </motion.div>
        </div>
    </section>
    <section className="homesection3">
        <motion.h1
           initial={rightanimationinitial}
           whileInView={rightanimation}
           transition={transition}
           viewport={viewport}
        >Builders We Empower</motion.h1>
        <div className="industries">
            <motion.div 
               initial={frombottomanimationinitial}
               whileInView={frombottomanimation}
               transition={transition}
               viewport={viewport}
            className="industry">
            <img src="/researchers.jpg" alt="research" />
                <div className="des">
                <h2>Students</h2>
                <p>
                We empower students by providing access to learning resources, mentorship, and networking opportunities. Our programs help them develop critical skills, explore innovative ideas, and build a strong foundation to become future leaders, entrepreneurs, and changemakers in their communities.
                </p>
                </div>
            </motion.div>
            <motion.div 
            initial={frombottomanimationinitial}
            whileInView={frombottomanimation}
            transition={transition}
            viewport={viewport}
            className="industry">
            <img src="/corporations.jpg" alt="corporations" />
                <div className="des">
                <h2>Entrepreneurs</h2>
                <p>
                Uncovering Stars supports aspiring and established entrepreneurs with tools, funding, and expert guidance. We aim to help them turn their visions into impactful businesses, fostering innovation and driving economic growth across Nigeria while solving real-world challenges through creative solutions.
                </p>
                </div>
            </motion.div>
            <motion.div 
            initial={frombottomanimationinitial}
            whileInView={frombottomanimation}
            transition={transition}
            viewport={viewport}
            className="industry">
            <img src="/businesses.jpg" alt="businesses" />
                <div className="des">
                <h2>Innovators</h2>
                <p>
                We nurture innovators passionate about technology, creativity, and problem-solving. By connecting them with industry experts, advanced tools, and collaborative networks, we enable them to develop groundbreaking solutions that inspire progress and contribute meaningfully to society's advancement.
                </p>
                </div>
            </motion.div>
            
        </div>
    </section>
    <Link className='link' to="/contact">
    <section className="homesection4" onMouseOver={()=>{setIsOver(true)}} onMouseOut={()=>{setIsOver(false)}}>
        <motion.div className="before"
        animate={{
            width:`${isOver?"20%":"100%"}`,
            height:`${isOver?"60%":"100%"}`
        }}
        />
        <h1>
            CONTACT US <FaExternalLinkAlt className='icon' />
        </h1>
    </section>
    </Link>
  
  </div>
}

export default Home