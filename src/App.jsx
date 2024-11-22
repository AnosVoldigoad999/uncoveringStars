import React, {useState} from 'react'
import "./App.css"
import Home from './components/Home'
import { IoMdClose } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import {motion, AnimatePresence} from "framer-motion"
import {Routes, Route, Link} from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";
import About from './components/About';
import Contact from './components/Contact';
import Webinars from './components/Webinars';
function App() {
  const [openMenu, setOpenMenu] = useState(false)
  return <>
 <AnimatePresence>
 {
  openMenu &&  <motion.div 
  initial={{
    right:"-100vw"
  }}
  animate={{
    right:"0"
  }}
  exit={{
    right:"-100vw"
  }}
  transition={{
    duration:0.7 ,
    ease:"backInOut"
  }}
  className="mobilemenu">
  <IoMdClose className='icon' onClick={()=>{setOpenMenu(false)}} />
<ul>
<Link to="/" className='link' onClick={()=>{setOpenMenu(false)}}><li>Home</li></Link>
      <Link className="link" to="/about" onClick={()=>{setOpenMenu(false)}}><li>About</li></Link>
      <Link className='link' to="/webinars" onClick={()=>{setOpenMenu(false)}}><li>Webinars</li></Link>
      <Link className='link' to="/contact" onClick={()=>{setOpenMenu(false)}}><li>Contact</li></Link>
    </ul>
</motion.div>
 }
 </AnimatePresence>
    <div className="navcontainer">
    <nav>
      <Link className='link' to="/"><img className="logo" src='/logo.jpg' /></Link>
      <ul>
        <Link to="/" className='link'><li>Home</li></Link>
      <Link className="link" to="/about"><li>About</li></Link>
      <Link className='link' to="/webinars"><li>Webinars</li></Link>
      <Link className='link' to="/contact"><li>Contact</li></Link>
      </ul>
      <RiMenu3Fill className='icon' onClick={()=>{setOpenMenu(true)}} />
    </nav>
    </div>
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/webinars' element={<Webinars />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <footer>
        <div className="footerleft">
            <h1>
            We empower with passion, and we thrive on making impact.
            </h1>
            <h1>Uncovering Stars.</h1>
        </div>
        <div className="footercenter">
            <h2>Office</h2>
            <p>
                <span className='number'>
                    01.
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                <span className='number'>
                    02.
                </span>
                +2341234567890
            </p>
            <p>
                <span className='number'>
                    03.
                </span>
                hello@uncoveringstars.org
            </p>
        </div>
        <div className="footerright">
            <h2>Newsletter</h2>
            <p>Submit to our newsletter & subscribe to our newsletter to be on the up and up</p>
            <input placeholder='mail@address.com' type="text" />
            <span>Subscribe <GoArrowRight className='icon' /></span>
        </div>
    </footer>
      </main>
  </>
}

export default App