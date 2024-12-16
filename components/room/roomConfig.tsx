"use client";

import React, { useState, useEffect } from 'react'

import { motion } from "framer-motion";

import { Istok_Web } from "next/font/google";

import { MdOutlineSettingsApplications } from "react-icons/md";


const istokWeb = Istok_Web({
  subsets: ["latin"],
  weight: "400",
});

export default function RoomConfig() {
    const [roomName, setRoomName] = useState<string>();

    useEffect(() => {
        setRoomName("#TESTE_01_CODE");
    }, []);

  if(!roomName) return null;
  else return (
    <motion.div
        initial={{opacity: 0, y: -10}}
        animate={{opacity: 1, y: 0}}
        transition={{
            duration: 0.8,
            delay: 0.8
        }}
        className={`
            flex-1
            flex 
            justify-start
        `}
    >
        <div className={`
            flex 
            justify-center items-center 
            gap-1 
            hover:bg-accent
            bg-transparent
            hover:border-muted-foreground
            rounded-lg
            cursor-pointer
            select-none
            transition-all
            p-1
        `}>
            <MdOutlineSettingsApplications className={`text-sm text-muted-foreground`}/>
            <p className={`text-xs text-muted-foreground ${istokWeb.className}`}>{roomName}</p>
        </div>
    </motion.div>
  )
}
