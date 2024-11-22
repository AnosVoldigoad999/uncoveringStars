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
>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatem cupiditate accusamus minima aliquid animi corrupti quisquam officiis at natus, nam expedita quis quaerat eveniet nulla enim earum est quod.</motion.p>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error asperiores, est in quibusdam beatae pariatur corrupti porro eum adipisci? Soluta nulla nihil sequi porro nesciunt ea eum aliquam et quis veniam?</p>
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