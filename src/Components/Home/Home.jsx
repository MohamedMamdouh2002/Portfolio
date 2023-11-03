import React, { useEffect, useState } from 'react'
import Definition from '../definition/definition'
import Skills from '../Skills/Skills'
import Project from '../Project/Project'
import Contact from '../Contact/Contact'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'


export default function Home() {
 
  return <>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Portfolio</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

           
  <div 
  className=" container  lg:mx-auto lg:max-w-7xl  lg:px-2 px-5">


  <Definition/>
  <Skills/>
  <Project/> 
 <Contact/>

  </div>
  </>
  
}
