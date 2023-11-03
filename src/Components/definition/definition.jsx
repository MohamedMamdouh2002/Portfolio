import React, { useEffect, useState } from 'react'
import { Cursor,useTypewriter} from 'react-simple-typewriter'
import MyPhoto from '../../Assets/Mypohotom.jpg'
import { motion } from 'framer-motion';
import {Helmet} from "react-helmet";
import { Link } from "react-scroll";
import a from '../../Assets/MohamedMamouh.cv.pdf'

export default function Definition() {
  const [showbtn,setShowBtn]=useState(false)
  useEffect(() => {
    window.addEventListener('scroll',()=>{
      if(window.scrollY>300){
        setShowBtn(true)
      }else{
    
        setShowBtn(false)

      }
     
    })
  }, [])
  const [text]= useTypewriter({
    words:[' A Front-end Developer','Mobile Developer','UI/UX Designer'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:200
  })
  return <>
    <div id='home' className="grid-cols-1 pt-20   lg:grid-cols-2  items-center gap-3 lg:gap-0 grid lg:mt-9 mt-2">
        <div className=" w-max   h-max ">
          <div className=''>
            <motion.img 
            initial={{scale:0}}
            animate={{scale:1}}
            transition={{stiffness:100,type:"spring", damping:7}}
            className=" rounded-3xl   h-60 w-64 lg:w-96 sm:w-auto sm:h-auto" src={MyPhoto}  alt="" />
          </div>
        </div>
        <motion.div
          initial={{x:100 ,opacity:0}}
          transition={{duration:.7}}
          animate={{x:0,opacity:1}}
        className="tracking-widest relative flex flex-col  justify-between gap-28">
          <div className="">
            <div
       
            className='sm:text-5xl text-2xl bodyColor '>  
                <span className=' block'>
                     Hello,
                </span>
                <p className='my-2 lg:text-3xl'>

                     I’m 
                      <span className='ml-2  text-yellow-400'>
                         Mohamed Mamdouh, 
                      </span>
                </p>
                <span className=''>
                   {text }
                <Cursor   />
                </span>   
                <p className='my-2 text-lg'>
                I am a self-taught frontend developer, Creating web pages and web applications is my passion. I am looking forward to being the kind of assistant you need to make your business flourish.
                </p>
            </div>
            <div className=" links mt-9 flex sm:text-3xl text-2xl bodyColor gap-5">
              <a className=' text-blue-700   link  px-1' href="https://www.facebook.com/mohamed.mamdouh.58555" rel="noreferrer" target='_blank'>
                <i className="fa-brands  fa-facebook"></i>     
              </a>
              <a className=' link  text-blue-500' href="https://www.linkedin.com/in/mohammed-mamdouh-884a3027b/" rel="noreferrer" target="_blank"> 
                <i className="fa-brands fa-linkedin"></i> 
              </a>
              <a className='  link ' href="https://github.com/MohamedMamdouh2002" rel="noreferrer" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a className=' link  text-emerald-500' href="https://wa.me/+201210898884?text=Welcome" rel="noreferrer" target='_blank'>
                <i className="fa-brands fa-whatsapp"></i>
              </a>
          
            </div>
              <div className="mt-9">

                <a href={a} download className=' cv  '>
                <span>Download CV</span>
                <span>Download CV</span>
                          
                </a>
              </div>
            
        
          </div>
        </motion.div>
        {showbtn&& (  <Link 
                        activeClass="active" 
                        to="home" 
                        spy={true} 
                        smooth={true} 
                        offset={-60} 
                        duration={500} 
                        >

<button  className=' duration-700 leading-4   bg-yellow-400 px-3 py-2  z-10 fixed right-2 bottom-2 rounded-full'>
<i class="fa-solid fa-circle-chevron-up text-xl"></i>
</button>
</Link>
    )}

    </div>
  </>
  
}
