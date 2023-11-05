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
import jq from '../../Assets/jq.png'
import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from "framer-motion"


const loop=[
    {name:<h1 className='font-mono text-2xl proColor  -mt-4'>HTML5</h1>,
    logo:<Lottie className='w-20 -mt-3' animationData={Html} />,
    pre:'99%',
    index:1,
    pro: '99', 

  },

    {name:<h1 className='font-mono text-2xl proColor -mt-4'>CSS3</h1>,
     logo:<Lottie className='w-20 -mt-6' animationData={css} />,
     pre:'99%',
     index:2, 
     pro: '99',
  },
    {name:<h1 className='font-mono text-2xl proColor mt-3'>Bootstrap</h1>,
     logo:<i className="fa-brands fa-bootstrap fa-beat text-5xl mr-2 mt-2 text-indigo-500"></i>,
     pre:'90%',
     index:3, 
     pro: '90',
    },
    {name:<h1 className='font-mono text-2xl proColor mt-3'>Tailwindcss</h1>,
     logo:<img className='w-16 mt-3 skill2' src={tc} alt="" />,
     pre:'85%',
     index:4, 
     pro: '85',
    },
    {name:<h1 className='font-mono text-2xl proColor '>Javascript</h1>,
     logo:<Lottie className='w-20 -mt-2 ' animationData={js} />,
     pre:'95%',
     index:5, 
     pro: '95',
    },
    {name:<h1 className='font-mono text-2xl proColor mt-3'>Typescript</h1>,
     logo:<img className='w-14 skill2 mt-2 mr-2' src={ts} alt="" />,
     pre:'80%',
     index:6, 
     pro: '80',
    },
    {name:<h1 className='font-mono text-2xl proColor mt-3 ml-2'>Sass</h1>,
     logo:<i className="fa-brands fa-sass fa-bounce text-5xl text-fuchsia-500"></i>,
     pre:'80%',
     index:7, 
     pro: '80',
    },
    {name:<h1 className='font-mono text-2xl proColor mt-1 ml-1'>jquery</h1>,
     logo:<img className='w-14 skill2 ' src={jq} alt="" />,
     pre:'85%',
     index:8, 
     pro: '85',
    },
    {name:<h1 className='font-mono text-2xl proColor -mt-1 ml-1'>React</h1>,
     logo:<Lottie className='w-20 -mt-3' animationData={react} />,
     pre:'90%',
     index:10, 
     pro: '90',
    },
    {name:<h1 className='font-mono text-2xl proColor -mt-1 ml-1'>Next js</h1>,
    logo:<Lottie className='w-20 -mt-3' animationData={next} />,
    pre:'80%',
     index:11, 
     pro: '80',
    },
    {name:<h1 className='font-mono text-2xl proColor -mt-1 ml-1'>UI/Ux Design</h1>,
     logo:<Lottie className='w-20 -mt-3' animationData={figma} />,
     pre:'75%',
     index:12, 
     pro: '75',
    },
    {name:<h1 className='font-mono text-2xl proColor  ml-1'>React Native</h1>,
     logo:<Lottie className='w-20 -mt-3' animationData={react} />,
     pre:'85%',
     index:9, 
     pro: '85',
    },
    {name:<h1 className='font-mono text-2xl proColor -mt-1 ml-1'>GIT & GITHUB</h1>,
     logo:<Lottie className='w-20 -mt-3' animationData={git} />,
     pre:'75%',
     index:13, 
     pro: '75',
    },
  ]
  

export default function Skills() {
return <>
     <div id='skills' className="  py-12  gap-3 bodyColor lg:gap-0  lg:mt-9 ">
        <h1 className='font-mono  text-4xl mb-12 bodyColor  text-center tracking-widest italic	'>" Skills " </h1>
        <div className=" grid  lg:grid-cols-4 md:grid-cols-2 gap-9">


          {loop.map((skill)=>
            <motion.div key={skill.index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
           className=" border h-28 p-3 rounded-sm relative bg-white">
           
             <div className="end-1 absolute top-1  perBGColor perColor p-1  rounded-md" >{skill.pre}</div>
           <div className="flex items-center justify-between">
             <div className="flex items-center mt-3">

                <div>
                  {skill.logo}
                  </div> 
             {skill.name}
             </div>
           </div>
            <ProgressBar className='absolute bottom-0 right-0 left-0
            ' completed={skill.pro} customLabel="."  borderRadius='0' animateOnRender={true} bgColor='#FFCD34'  height='5px'  >

            </ProgressBar>
         </motion.div>
          )}
        </div>
     </div>
  </>
  
}
