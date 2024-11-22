import React from 'react'
import '../styles/contact.css'
import {motion} from "framer-motion"
import { GoArrowRight } from "react-icons/go";
function Contact() {
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
    const viewport={
        once:true
    }
  return <>
    <div className="contact">
    <div className='banner'>
<motion.h1
 initial={leftanimationinitial}
 animate={rightanimation}
 transition={transition}
>Contact Us</motion.h1>
<motion.p
 initial={rightanimationinitial}
 animate={rightanimation}
 transition={transition}
>Whether you're aiming to innovate or build impactful solutions, Uncovering Stars is here to empower you with resources, guidance, and a vibrant community to help you thrive and make a difference in the modern world.</motion.p>
    </div>
    <section className="contactsection1">
        <motion.img
         initial={leftanimationinitial}
         whileInView={rightanimation}
         transition={transition}
         viewport={viewport}
        src="/contactussection.jpg" alt="contactus" />
        <motion.div
         initial={rightanimationinitial}
         whileInView={rightanimation}
         transition={transition}
         viewport={viewport}
        className="des">
            <h1>Leave us a Message</h1>
            <p>Our team at Uncovering Stars is excited to learn about your aspirations. Connect with us today, and let’s discover how we can empower you to innovate, achieve your goals, and create lasting impact in your journey.</p>
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <input type="email" placeholder='Email' />
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Subject' />
                <textarea placeholder='Message' />
                <span>Send a Message <GoArrowRight className='icon' /></span>
            </form>
        </motion.div>
    </section>
    </div>
    </>
}

export default Contact