import React from 'react'
import Lottie from "lottie-react";
import Html from "../../animation/html.json";
import css from "../../animation/css.json";
import git from "../../animation/git.json";
import react from "../../animation/react.json";
import next from "../../animation/next.json";
import figma from "../../animation/figma.json";
import js from "../../animation/js.json";
import tc from '../../Assets/tailwind.png'
import ts from '../../Assets/ts.png'
import bs from '../../Assets/bootstrap.png'
import sass from '../../Assets/sass.png'
import jq from '../../Assets/jq.png'
import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from "framer-motion"


 
  

export default function Skills() {
return <>
     <div id='skills' className="  py-12  gap-3 bodyColor lg:gap-0  lg:mt-9 ">
        <h1 className='text-4xl mb-12 bodyColor  text-center tracking-widest italic	'>" Skills " </h1>
        <div className=" grid  lg:grid-cols-4 md:grid-cols-2 gap-9">
          
          <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
             className="hover:-translate-x-6 border h-28  rounded-sm relative bg-white">
            
              <div className="end-1 absolute top-1  perBGColor perColor p-1  rounded-md" >99%</div>
            <div className="flex items-center justify-between">
              <div className="flex items-center mt-3  ">

             <Lottie className='w-20' animationData={Html} />
             <h3 className='text-2xl font-mono text-black'>HTML5</h3>
              </div>
            </div>
             <ProgressBar className='absolute bottom-0 right-0 left-0
             ' completed={99} customLabel="."  borderRadius='0' animateOnRender={true} bgColor='#FFCD34'  height='5px'  >

             </ProgressBar>
          </motion.div>
          <motion.div
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
          className=" border h-28 rounded-sm relative bg-white">
            
              <div className="end-1 absolute top-1  perBGColor perColor p-1  rounded-md" >99%</div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">

             <Lottie className='w-20' animationData={css} />
             <h3 className='text-2xl font-mono text-black'>CSS3</h3>
              </div>
            </div>
             <ProgressBar className='absolute bottom-0 right-0 left-0
             ' completed={99} customLabel="."  borderRadius='0' animateOnRender={true} bgColor='#FFCD34'  height='5px'  >

             </ProgressBar>
          </motion.div>
          <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
           className=" border h-28 p-3 rounded-sm relative bg-white">
            
              <div className="end-1 absolute top-1  perBGColor perColor p-1  rounded-md" >90%</div>
            <div className="flex items-center justify-between">
              <div className="flex items-center mt-3">

                <i class="fa-brands fa-bootstrap text-5xl text-violet-600 mr-2 skill1"></i>        
                <h3 className='text-2xl font-mono text-black'>Bootstrap</h3>
              </div>
            </div>
             <ProgressBar className='absolute bottom-0 right-0 left-0
             ' completed={90} customLabel="."  borderRadius='0' animateOnRender={true} bgColor='#FFCD34'  height='5px'  >

             </ProgressBar>
          </motion.div>
          <motion.div
          
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className=" border p-3 h-28 rounded-sm relative bg-white">
            
              <div className="end-1 absolute top-1  perBGColor perColor p-1  rounded-md" >85%</div>
            <div className="flex items-center justify-between">
              <div className="flex items-center mt-4">

                  <img className='w-16 skill2' src={tc} alt="" />
                  <h3 className='text-2xl font-mono text-black'>TailwindCss</h3>
              </div>
            </div>
             <ProgressBar className='absolute bottom-0 right-0 left-0
             ' completed={85} customLabel="."  borderRadius='0' animateOnRender={true} bgColor='#FFCD34'  height='5px'  >

             </ProgressBar>
          </motion.div>
          <motion.div
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
          className=" border p-3 h-28 rounded-sm relative bg-white">
            
              <div className="end-1 absolute top-1  perBGColor perColor p-1  rounded-md" >95%</div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">

             <Lottie className='w-20' animationData={js} />
             <h3 className='text-2xl font-mono text-black'>Javascript</h3>
              </div>
            </div>
             <ProgressBar className='absolute bottom-0 right-0 left-0
             ' completed={95} customLabel="."  borderRadius='0' animateOnRender={true} bgColor='#FFCD34'  height='5px'  >

             </ProgressBar>
          </motion.div>
         
          <motion.div
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
          className=" border p-3 h-28 rounded-sm relative bg-white">
            
              <div className="end-1 absolute top-1  perBGColor perColor p-1  rounded-md" >80%</div>
            <div className="flex items-center justify-between">
              <div className="flex items-center mt-4">

                  <img className='w-14 rounded-md skill4' src={ts} alt="" /> 
                  <h3 className='text-2xl font-mono text-black ml-2'>Typescript</h3>
              </div>
            </div>
             <ProgressBar className='absolute bottom-0 right-0 left-0
             ' completed={80} customLabel="."  borderRadius='0' animateOnRender={true} bgColor='#FFCD34'  height='5px'  >

             </ProgressBar>
          </motion.div>
          <motion.div
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
          className=" border h-28 p-3 rounded-sm relative bg-white">
            
            <div className="end-1 absolute top-1  perBGColor perColor p-1  rounded-md" >75%</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center mt-3">

            <img className='w-14 skill3' src={sass} alt="" />
           <h3 className='text-2xl font-mono text-black ml-2'>Sass</h3>
            </div>
          </div>
           <ProgressBar className='absolute bottom-0 right-0 left-0
           ' completed={75} customLabel="."  borderRadius='0' animateOnRender={true} bgColor='#FFCD34'  height='5px'  >

           </ProgressBar>
        </motion.div>
        
          <motion.div
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
            className=" border h-28 p-3 rounded-sm relative bg-white">
            
              <div className="end-1 absolute top-1  perBGColor perColor p-1  rounded-md" >85%</div>
            <div className="flex items-center justify-between">
              <div className="flex items-center mt-3">

                  <img className='w-14 skill2' src={jq} alt="" />
                 <h3 className='text-2xl font-mono text-black ml-2'>jquery</h3>
              </div>
            </div>
             <ProgressBar className='absolute bottom-0 right-0 left-0
             ' completed={85} customLabel="."  borderRadius='0' animateOnRender={true} bgColor='#FFCD34'  height='5px'  >

             </ProgressBar>
          </motion.div>
          <motion.div
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }}
            className=" border h-28 p-3 rounded-sm relative bg-white">
            
            <div className="end-1 absolute top-1  perBGColor perColor p-1  rounded-md" >90%</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">

           <Lottie className='w-20' animationData={react} />
           <h3 className='text-2xl font-mono text-black'>React </h3>
            </div>
          </div>
           <ProgressBar className='absolute bottom-0 right-0 left-0
           ' completed={90} customLabel="."  borderRadius='0' animateOnRender={true} bgColor='#FFCD34'  height='5px'  >

           </ProgressBar>
        </motion.div>
          <motion.div
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
          className=" border h-28 p-3 rounded-sm relative bg-white">
            
            <div className="end-1 absolute top-1  perBGColor perColor p-1  rounded-md" >80%</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">

           <Lottie className='w-20' animationData={next} />
           <h3 className='text-2xl font-mono text-black ml-2'>Next</h3>
            </div>
          </div>
           <ProgressBar className='absolute bottom-0 right-0 left-0
           ' completed={80} customLabel="."  borderRadius='0' animateOnRender={true} bgColor='#FFCD34'  height='5px'  >

           </ProgressBar>
        </motion.div>
        
        <motion.div
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }}
        className=" border h-28 p-3 rounded-sm relative bg-white">
            
            <div className="end-1 absolute top-1  perBGColor perColor p-1   rounded-md" >70%</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">

           <Lottie className='w-20' animationData={figma} />
           <h3 className='text-2xl font-mono text-black ml-2'>UI/Ux Design</h3>
            </div>
          </div>
           <ProgressBar className='absolute bottom-0 right-0 left-0 px-0 ' completed={70} customLabel="."  borderRadius='0' animateOnRender={true} bgColor='#FFCD34'  height='5px'  >

           </ProgressBar>
        </motion.div>    
            <motion.div
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
            className=" border h-28 p-3 rounded-sm relative bg-white">
            
            <div className="end-1 absolute top-1  perBGColor perColor p-1  rounded-md" >80%</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">

           <Lottie className='w-20' animationData={react} />
           <h3 className='text-2xl font-mono text-black ml-2'>React Native</h3>
            </div>
          </div>
           <ProgressBar className='absolute bottom-0 right-0 left-0
           ' completed={80} customLabel="."  borderRadius='0' animateOnRender={true} bgColor='#FFCD34'  height='5px'  >

           </ProgressBar>
        </motion.div> 
        <motion.div
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }} 
        className=" border h-28 p-3 rounded-sm relative bg-white">
            
            <div className="end-1 absolute top-1  perBGColor perColor p-1  rounded-md" >75%</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">

           <Lottie className='w-20' animationData={git} />
           <h3 className='text-2xl font-mono text-black'>GIT & GITHUB</h3>
            </div>
          </div>
           <ProgressBar className='absolute bottom-0 right-0 left-0
           ' completed={75} customLabel="."  borderRadius='0' animateOnRender={true} bgColor='#FFCD34'  height='5px'  >

           </ProgressBar>
        </motion.div>      


   
         
        </div>
     </div>
  </>
  
}
