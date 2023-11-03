import React from 'react'
import daneil from '../../Assets/dainal.png'
import go from '../../Assets/go.png'
import dev from '../../Assets/DevFolio.png'
import portfolio from '../../Assets/portfolio.png'
import ep from '../../Assets/Egyptian-party.png'
import cart from '../../Assets/FreshCart.png'
import fikra from '../../Assets/fikra.png'
import meal from '../../Assets/Mealify.png'
import weather from '../../Assets/Weather.png'
import yummy from '../../Assets/yummy-logo.png'
import { GrHtml5 } from "react-icons/gr";
import { GrCss3 } from "react-icons/gr";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { motion } from 'framer-motion'



let projects = [
  {
      name: 'Go-CART Website',
      date:'Oct,2023',
      image: go,
      githPage: 'https://gocartshop.bsite.net/',
      code: 'https://github.com/MohamedMamdouh2002/Go-Cart',
      skills: [ 'HTML', 'CSS', 'JavaScript', 'Bootstrap','jQuery'],
      pre: [<GrHtml5/>,<GrCss3/>,<FaNodeJs/>,<FaBootstrap/>]
  },
  {
      name: 'E-commerce Website',
      date:'Oct,2023',
      image: cart,
      githPage: 'https://e-commerce-react-beryl.vercel.app/',
      code: 'https://github.com/MohamedMamdouh2002/E-commerce-React',
      skills: ['React', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      pre: [<BiLogoReact/>,<GrHtml5/>,<GrCss3/>,<FaNodeJs/>,<FaBootstrap/>]      
  },
  {
      name: 'Fikra',
      date:'Oct,2023',
      image: fikra ,
      githPage: 'https://fikra-website.vercel.app/login',
      code: 'https://github.com/MohamedMamdouh2002/Fikra-website',
      skills: ['React', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      pre: [<BiLogoReact/>,<GrHtml5/>,<GrCss3/>,<FaNodeJs/>,<FaBootstrap/>]      
  },
  {
      name: 'portfolio',
      date:'Nov,2023',
      image: portfolio ,
      githPage: 'https://fikra-website.vercel.app/login',
      code: 'https://github.com/MohamedMamdouh2002/Fikra-website',
      skills: ['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind'],
      pre: [<BiLogoReact/>,<GrHtml5/>,<GrCss3/>,<FaNodeJs/>,<BiLogoTailwindCss/>]      
  },
  {
      name: 'Yummy',
      date:'Sep,2023',
      image: yummy,
      githPage: 'https://mohamedmamdouh2002.github.io/YummyAPI/',
      code: 'https://github.com/MohamedMamdouh2002/YummyAPI',
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap','jQuery'],
      pre: [<GrHtml5/>,<GrCss3/>,<FaNodeJs/>,<FaBootstrap/>]      
  },
  {
      name: 'Egyptian-party',
      date:'Sep,2023',
      image: ep,
      githPage: 'https://github.com/MohamedMamdouh2002/Egyptian-Party',
      code: 'https://mohamedmamdouh2002.github.io/Egyptian-Party/',
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap','jQuery'],
      pre: [<GrHtml5/>,<GrCss3/>,<FaNodeJs/>,<FaBootstrap/>]      
  },
  {
      name: 'Weather',
      date:'Aug,2023',
      image: weather,
      githPage: 'https://mohamedmamdouh2002.github.io/Weather-API-/',
      code: 'https://github.com/MohamedMamdouh2002/Weather-API-',
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      pre: [<GrHtml5/>,<GrCss3/>,<FaNodeJs/>,<FaBootstrap/>]      

  },
  {
      name: 'DevFolio',
      date:'Mar,2023',
      image: dev,
      githPage: 'https://mohamed-abdelghaffar-abdelghaffar.github.io/DevFolio-Website/',
      code: 'https://github.com/Mohamed-AbdElGhaffar-AbdElGhaffar/DevFolio-Website.git',
      skills: ['HTML', 'CSS', 'Bootstrap'],
      pre: [<GrHtml5/>,<GrCss3/>,<FaBootstrap/>]      

  },
  {
      name: 'Mealify',
      date:'Mar,2023',
      image:meal,
      githPage: 'https://mohamed-abdelghaffar-abdelghaffar.github.io/Mealify-Website/',
      code: 'https://github.com/Mohamed-AbdElGhaffar-AbdElGhaffar/Mealify-Website.git',
      skills: ['HTML', 'CSS'],
      pre: [<GrHtml5/>,<GrCss3/>]      
  },
  {
      name: 'DANIELS',
      date:'Apr,2023',
      image: daneil,
      githPage: 'https://mohamedmamdouh2002.github.io/DANIELS/',
      code: 'https://github.com/MohamedMamdouh2002/DANIELS',
      skills: ['HTML', 'CSS'],
      pre: [<GrHtml5/>,<GrCss3/>]      
  },
  
];
export default function Project() {
  return <>
   <div id='project'  className="  py-12  gap-3 bodyColor lg:gap-0  lg:mt-9 ">

        <h1 className='text-4xl mb-12 bodyColor  text-center tracking-widest italic	'> " Projects "</h1>
        <div className="">
          
        </div>
        <div
         className=" grid   lg:grid-cols-3 md:grid-cols-2 gap-9">
          {projects.map((pro)=>(
                  <div
                  
                  key={pro.name} 
               
                  className=" border hover:-rotate-1 hover:shadow-2xl hover:shadow-amber-300 rounded-md hover:border-yellow-400 duration-300 hover:-translate-y-2 ">
                    <div className=" ">

                  <div className="  relative">
                  <img className='h-44 w-full rounded-md' src={pro.image} alt="" />
                    <div className=' absolute bottom-2 right-1 flex gap-2 '>
                    <a href={pro.githPage} target="_blank" className=' flex justify-center rounded-full w-7 h-7 bg-yellow-300 '><i class="fa-brands text-black fa-github text-xl"></i></a>
                    <a href={pro.code} target="_blank" className=' text-yellow-300 flex justify-center rounded-full w-7 h-7 bg-yellow-300 '><i className="fa-solid fa-code text-lg text-black"></i></a>

                      </div>
                  </div>
                  <div className="  ">

                  <div className="grid grid-cols-2 w-full relative my-3 pb-1">
                  <h2 className='absolute text-lg lg:text-xl ml-1 font-mono tracking-wider font-semibold '>{pro.name}</h2>
                  <h2 className='absolute end-1 mt-1 text-amber-400'>{pro.date}</h2>
                  </div>
                  <div className="mt-7 ml-1 h-36">
                  <hr />
                  <ul className="  grid lg:grid-cols-3 grid-cols-2">
                    {pro.skills.map((skill) => (<li key={skill.id} className= 'm-2 py-1 px-3 w-max rounded-2xl flex justify-center   bg-yellow-400 text-black '>{skill}</li>))}
                    </ul>
                   </div>
                   <div className="flex  justify-center">

                    {pro.pre.map((s) => (<i className=' m-2 py-1 px-3 w-max rounded-2xl text-black flex justify-center   bg-yellow-400 text' >{s}</i>))}
                   </div>
                  </div>
                    </div>

                </div>
          )
          )}
         
        </div>
    </div>
  </>
  
}
