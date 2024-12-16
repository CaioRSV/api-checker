import React from 'react'
import Header from './header';

import { AnimatePresence, motion } from "framer-motion";
import Body from './body';
import RoomConfig from './roomConfig';
import ThemeSwitcher from './themeSwitcher';

export function Room() {
  return (
    <motion.div 
    layout
    style={{ minHeight: "fit-content", height: "auto" }}
    animate={{height: "auto"}}
    transition={{
      duration: 1.5,
    }}
    className={`
      max-w-[90%]
      w-[90%]
      sm:w-[1000px]

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
        layout
        initial={{opacity: 0, y: +10}}
        animate={{opacity: 1, y: 0, flex: 1, height: 'auto'}}
        transition={{
          duration: 0.8,
          delay: 1.2
        }}
        className={`flex-1 bg-purple-600 p-2 m-2 transition-all`}
      >
        <Body/>
      </motion.div>

      <div className={`flex`}>
        <RoomConfig/>
        <ThemeSwitcher/>
      </div>

    </motion.div>
  )
}