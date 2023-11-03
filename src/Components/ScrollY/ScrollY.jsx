import { motion,useScroll } from 'framer-motion'
import React from 'react'

export default function ScrollY() {
  const { scrollYProgress } = useScroll();

  return <>
     {localStorage.getItem("currentMode")=='dark'?
       <motion.div
       style={{
         scaleX:scrollYProgress,
         top:0,
         right:0,
         left:0,
         height:5,
         backgroundColor:"#23272F",
         
         transformOrigin:"0%"
 
       }}>
     </motion.div>
     :
     <motion.div
     style={{
       scaleX:scrollYProgress,
       top:0,
       right:0,
       left:0,
       height:5,
       backgroundColor:"#FEFCF6",
       
       transformOrigin:"0%"

     }}>
   </motion.div>
     }
  
  </>
  
}
