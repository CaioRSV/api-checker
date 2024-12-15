import React from 'react'

import { ViewModeSwitcher } from './viewModeSwitcher';
import { BrandBadge } from './brandBadge';
import URLButton from './urlButton';
import SaveButton from './saveButton';

import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className={`w-full flex justify-between items-center gap-2`}>

        <motion.div
          initial={{opacity: 0, y: +10}}
          animate={{opacity: 1, y: 0}}
          transition={{
            duration: 0.8,
            delay: 0.6
          }}
        >
          <BrandBadge />
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: +10}}
          animate={{opacity: 1, y: 0}}
          transition={{
            duration: 0.8,
            delay: 0.7
          }}
        >
          <ViewModeSwitcher/>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: +10}}
          animate={{opacity: 1, y: 0}}
          transition={{
            duration: 0.8,
            delay: 0.8
          }}
          className={`flex gap-2`}
        >
            <URLButton/>
            <SaveButton/>
        </motion.div>
    </div>
  )
}