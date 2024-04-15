"use client"
import React from 'react'
import  { motion } from "framer-motion"
export default function Loading({children}:any) {
  const anim = (variants:any, custom = null) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom
    };
  };

  const expand ={
    initial: {
      top:0 ,
    },
    enter: (i:any) => ({
      top: "100%", 
      transition: {
        duration: 0.5,
        delay:0.05 * i
      },
     
    }),
  }

  return (
   <>
     <div className=''>
      <div className='fixed w-full h-screen z-30 top-0 left-0 pointer-events-none flex'>
        {[...Array(5)].map((_, i:any) => {
          return <motion.div  {...anim(expand, i)} className='bg-white mix-blend-difference w-[100%] h-[100%] relative'>

          </motion.div>
        })}
      </div>
    </div>

    {children}
   </>
  )
}
