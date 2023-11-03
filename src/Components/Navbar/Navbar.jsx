import { Fragment ,React, useEffect, useRef, useState} from 'react'
import { Disclosure, Menu,  } from '@headlessui/react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-scroll";
import { motion } from 'framer-motion';






export default function Navbar() {
  const [theme,setTheme]=useState(localStorage.getItem("currentMode")??"light")
  const [open ,setOpen]=useState(false)
    useEffect(
      ()=>{
        if(theme==="light"){
          document.body.classList.remove("light")
          document.body.classList.add("dark")
          
        }else{
          document.body.classList.remove("dark")
          document.body.classList.add("light")
        }
    },[theme])
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <><div className="container-fluid fixed  top-0 left-0 end-0 z-10 mainColor border-b">

            <div className="mx-auto max-w-7xl px-2 ">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                  {/* Mobile menu button*/}
                  {localStorage.getItem("currentMode")=='light'?
                
                  <Disclosure.Button className="relative inline-flex  
                  items-center justify-center rounded-lg p-2 text-white hover:bg-white
                  hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block   h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block   h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>  
                :
                  <Disclosure.Button className="relative inline-flex 
                  items-center justify-center rounded-lg p-2  text-black hover:bg-black
                  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only  text-orange-500">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block   h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block   h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
            
                }
                </div>
                <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
                  <div className="flex flex-shrink-0 navItem items-center">
                    <i className="fa-solid fa-m text-5xl  hover:translate-x-1   hover:translate-y-1" ></i>

                  </div>
                  <div className="hidden lg:ml-96  lg:block ">
                    <div className="flex  gap-8">
                      <ul className="flex navItem  font-semibold items-center mt-2 gap-9">
                        <Link 
                        activeClass="active" 
                        to="home" 
                        spy={true} 
                        smooth={true} 
                        offset={-60} 
                        duration={500} 
                        >
                        <li className='italic hover:not-italic hover:-translate-y-2 text-2xl pl-3 hover:text-amber-100 duration-200 cursor-pointer'>
                          Home
                        </li>
                        </Link>
                        <Link 
                        activeClass="active" 
                        to="skills" 
                        spy={true} 
                        smooth={true} 
                        offset={-14} 
                        duration={500} 
                        >
                        <li className='italic hover:not-italic hover:-translate-y-2 text-2xl pl-3 hover:text-amber-100 duration-200 cursor-pointer'>
                          Skills
                        </li>
                        </Link>
                        <Link 
                        activeClass="active" 
                        to="project" 
                        spy={true} 
                        smooth={true} 
                        offset={-14} 
                        duration={500} 
                        >

                        <li className='italic hover:not-italic hover:-translate-y-2 text-2xl pl-3 hover:text-amber-100 duration-200 cursor-pointer'>
                          Projects
                        </li>
                          </Link>

                          <Link 
                        activeClass="active" 
                        to="contact" 
                        spy={true} 
                        smooth={true} 
                        offset={-14} 
                        duration={500} 
                        >

                        <li className='italic hover:not-italic hover:-translate-y-2 text-2xl pl-3 hover:text-amber-100 duration-200 cursor-pointer'>
                          Contact
                        </li>
                          </Link>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                  <Menu as="div" className="relative ml-3">
                    <div
                        onClick={
                          ()=>{
                            localStorage.setItem("currentMode",theme === "dark" ? "light":"dark")
                            setTheme(localStorage.getItem("currentMode"))}
                              }
                            className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                            {
                            theme==="dark"?
                            <button className='border-l-2 border-black px-3 py-1 navItem '>
                              <i className="fa-solid fa-sun text-2xl"></i>      
                            </button>
                              
                            :
                            <button className='border-l-2 px-3 py-1 navItem  '>
                              <i className="fas fa-moon text-2xl  "></i>
                            </button>

                            }
                                      
                      </div>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
                      {localStorage.getItem("currentMode")=='light'?
                        
                        
                        <Disclosure.Panel className='lg:hidden mt-12 border mx-1 rounded-b-lg'>
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <Disclosure.Button className=' '>
                              <ul
                                
                                className="flex navItem w-full  flex-col font-semibold items-center mt-2 gap-4">
                                <Link 
                                activeClass="active" 
                                to="home" 
                                spy={true} 
                                smooth={true} 
                                offset={-60} 
                                duration={500} 
                                >
                                <li

                                className='italic  hover:not-italic hover:translate-x-2 text-xl pl-3 hover:text-slate-400 duration-200 cursor-pointer'>
                                  Home
                                </li>
                                  
                                </Link>
                                <Link 
                                activeClass="active" 
                                to="skills" 
                                spy={true} 
                                smooth={true} 
                                offset={-14} 
                                duration={500} 
                                >
                                <li className='italic hover:not-italic hover:translate-x-2 text-xl  hover:text-slate-400 duration-200 cursor-pointer'>
                                  Skills
                                </li>
                                </Link>
                                <Link 
                                activeClass="active" 
                                to="project" 
                                spy={true} 
                                smooth={true} 
                                offset={-14} 
                                duration={500} 
                                >
                
                                <li className='italic hover:not-italic hover:translate-x-2 text-xl pl-3 hover:text-slate-400 duration-200 cursor-pointer'>
                                  Projects
                                </li>
                                  </Link>
                                  <Link 
                                activeClass="active" 
                                to="contact" 
                                spy={true} 
                                smooth={true} 
                                offset={-14} 
                                duration={500} 
                                >
                
                                <li className='italic hover:not-italic hover:translate-x-2 text-xl pl-3 hover:text-slate-400 duration-200 cursor-pointer'>
                                  Contact
                                </li>
                                  </Link>
                              </ul>
                
                            </Disclosure.Button>
                        </div>
                      </Disclosure.Panel> 
                      :
                      <Disclosure.Panel className='lg:hidden border mt-12 border-black mx-1 rounded-b-lg'>
                      <div className="space-y-1 px-2 pb-3 pt-2">
                          <Disclosure.Button>
                            <ul className="flex navItem  flex-col font-semibold items-center mt-2 gap-4">
                              <Link 
                              activeClass="active" 
                              to="home" 
                              spy={true} 
                              smooth={true} 
                              offset={-60} 
                              duration={500} 
                              >
                              <li className='italic hover:not-italic hover:translate-x-2 text-xl pl-3 hover:text-slate-400 duration-200 cursor-pointer'>
                                Home
                              </li>
                                
                              </Link>
                              <Link 
                              activeClass="active" 
                              to="skills" 
                              spy={true} 
                              smooth={true} 
                              offset={-14} 
                              duration={500} 
                              >
                              <li className='italic hover:not-italic hover:translate-x-2 text-xl  hover:text-slate-400 duration-200 cursor-pointer'>
                                Skills
                              </li>
                              </Link>
                              <Link 
                              activeClass="active" 
                              to="project" 
                              spy={true} 
                              smooth={true} 
                              offset={-14} 
                              duration={500} 
                              >
              
                              <li className='italic hover:not-italic hover:translate-x-2 text-xl pl-3 hover:text-slate-400 duration-200 cursor-pointer'>
                                Projects
                              </li>
                                </Link>
                                <Link 
                              activeClass="active" 
                              to="contact" 
                              spy={true} 
                              smooth={true} 
                              offset={-14} 
                              duration={500} 
                              >
              
                              <li className='italic hover:not-italic hover:translate-x-2 text-xl pl-3 hover:text-slate-400 duration-200 cursor-pointer'>
                                Contact
                              </li>
                                </Link>
                            </ul>
                          </Disclosure.Button>
                      </div>
                    </Disclosure.Panel>
              
                      }    
    
        </>
      )}
    </Disclosure>
  )
}
