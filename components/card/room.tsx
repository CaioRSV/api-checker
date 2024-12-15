import React from 'react'
import Header from './header';

import { motion } from "framer-motion";
import Body from './body';
import RoomConfig from './roomConfig';
import ThemeSwitcher from './themeSwitcher';

export function Room() {
  return (
    <div className={`
      max-w-[90%]
      w-[90%]
      sm:w-[1000px]

      min-h-fit
      h-[85vh]

      sm:h-[500px]
      bg-background
      border-2
      border-slate-500
      rounded-3xl
      overflow-hidden
      p-4
      flex
      flex-col
      transition-all
      duration-300
    `}>
      <Header/>

      <motion.div 
        initial={{opacity: 0, y: +10}}
        animate={{opacity: 1, y: 0}}
        transition={{
          duration: 0.8,
          delay: 1.2
        }}
        className={`flex-1`}
      >
        <Body/>
      </motion.div>

      <div className={`flex`}>
        <RoomConfig/>
        <ThemeSwitcher/>
      </div>
      
      
    </div>
  )
}