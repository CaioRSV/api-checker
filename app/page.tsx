"use client";

import { Room } from "@/components/room/room";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={`
      min-h-screen w-full
      bg-gradient-to-br from-backgroundShade3 to-backgroundShade1
      transition-colors duration-200
      flex justify-center items-center
      py-5
      `}>
        <motion.div
          initial={{ opacity: 0, y: +20}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8
           }}
        >
          <Room/>
        </motion.div>
    </div>
  );
}
