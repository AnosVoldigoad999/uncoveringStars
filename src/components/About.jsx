import React from 'react'
import '../styles/about.css'
import {motion} from 'framer-motion'
function About() {
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
  return <>
    <div className='about'>
    <div className="banner">
        <motion.h1 style={{
            display:"block",
            margin:"0 auto"
        }}
        initial={rightanimationinitial}
        animate={rightanimation}
        transition={transition}
        >
            About Us
        </motion.h1>
        <motion.p
        initial={leftanimationinitial}
        animate={rightanimation}
        transition={transition}
        >Our team at Uncovering Stars is committed to empowering Nigerians with resources, opportunities, and a supportive community to innovate and excel..</motion.p>
    </div>
    <section className="aboutsection1">
        <motion.img
        initial={leftanimationinitial}
        whileInView={rightanimation}
        transition={transition}
        viewport={viewport}
        src="/aboutsection1.jpg" alt="brainbox" />
        <motion.div
        initial={rightanimationinitial}
        whileInView={rightanimation}
        transition={transition}
        viewport={viewport}
        className="des">
        <h1>Uncovering Stars.</h1>
        <p>At Uncovering Stars, we are committed to shaping the future of Nigeria through innovation and empowerment. Focused on entrepreneurship, technology, and impactful initiatives, we provide aspiring leaders with the resources, opportunities, and community they need to thrive. We empower students, innovators, and entrepreneurs to turn their ideas into transformative solutions for a better tomorrow.</p>
        </motion.div>
       </section>
       <section className="aboutsection2">
        <motion.h1
        initial={leftanimationinitial}
        whileInView={rightanimation}
        transition={transition}
        viewport={viewport}
        >Our Story</motion.h1>
        <motion.p
        initial={rightanimationinitial}
        whileInView={rightanimation}
        transition={transition}
        viewport={viewport}
        >
        Uncovering Stars was born from a passion to empower Nigerians with untapped potential. We envisioned a platform that bridges gaps, provides resources, and builds a thriving community, enabling individuals to innovate, lead, and create lasting societal impact.
        </motion.p>
       </section>
       <section className="aboutsection3">
        <motion.div
        initial={leftanimationinitial}
        whileInView={rightanimation}
        transition={transition}
        viewport={viewport}>
            <h2>Our Mission</h2>
            <p>Our mission is to identify, inspire, and empower Nigerians by providing resources, opportunities, and a supportive community. We aim to nurture innovation, foster entrepreneurship, and enable individuals to unlock their full potential for societal impact and growth.</p>
        </motion.div>
        <motion.div
        initial={rightanimationinitial}
        whileInView={rightanimation}
        transition={transition}
        viewport={viewport}
        >
            <h2>Our Vision</h2>
            <p>Our vision is to build a vibrant ecosystem of Nigerian innovators and leaders, driving transformative change. We aspire to create a future where empowered individuals contribute to sustainable development, economic progress, and a globally recognized culture of creativity and excellence.?</p> 
            </motion.div>
       </section>
       <section className="aboutsection4">
        <motion.h1
        initial={leftanimationinitial}
        whileInView={rightanimation}
        transition={transition}
        viewport={viewport}
        >Why Choose Uncovering Stars?</motion.h1>
        <div className="des">
            <motion.div
            initial={frombottomanimationinitial}
            whileInView={frombottomanimation}
            transition={{...transition, delay:0.05*1}}
            viewport={viewport}
            >
                <h2>Empowering Nigeria’s Brightest Minds</h2>
                <p>Uncovering Stars is dedicated to discovering and nurturing the next generation of Nigerian innovators. We provide tools, mentorship, and opportunities to help individuals develop their skills, unlock their potential, and make meaningful contributions to society.</p>
            </motion.div>
            <motion.div  initial={frombottomanimationinitial}
            whileInView={frombottomanimation}
            transition={{...transition, delay:0.05*2}}
            viewport={viewport}>
                <h2>Unlocking Potential, Driving Innovation</h2>
                <p>Our platform equips aspiring entrepreneurs and creatives with the resources they need to turn their ideas into reality. Through workshops, funding, and access to industry experts, we enable them to drive innovation and create transformative solutions for real-world challenges.</p>
            </motion.div>
            <motion.div
              initial={frombottomanimationinitial}
              whileInView={frombottomanimation}
              transition={{...transition, delay:0.05*3}}
              viewport={viewport}
            >
                <h2>Building a Community of Changemakers</h2>
                <p>We bring together a vibrant community of like-minded individuals passionate about making an impact. By fostering collaboration, sharing knowledge, and building strong networks, we create an ecosystem where changemakers thrive and drive sustainable development in Nigeria and beyond.</p>
            </motion.div>
        </div>
       </section>
    </div>
  </>
}

export default About