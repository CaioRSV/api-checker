"use client"

import React, { useState, useEffect } from 'react'


import { ApiItemType } from '@/app/utils/types';
import { motion } from 'framer-motion';

import { BsThreeDots } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { RiAiGenerate2 } from "react-icons/ri";


import { Istok_Web } from "next/font/google";
import StatusBadge from './statusBadge';

const istokWeb = Istok_Web({
  subsets: ["latin"],
  weight: "400",
});

const istokWeb_Bold = Istok_Web({
    subsets: ["latin"],
    weight: "700",
  });



interface ApiCardProps {
    item: ApiItemType,
    viewGridMode: string,
    index: number,
}

export default function ApiCard({ item, viewGridMode, index } : ApiCardProps) {
  return (
    <motion.div layout transition={{
            ease: "easeOut",
            delay: 0.05*index,
        }} 
        style={{
        width: viewGridMode=='onePerLine'?'100%':'45%',
        height: viewGridMode=="onePerLine"?150:180,
        }}                         
        className={`
            bg-muted py-4 pl-8 pr-4
        `}
    >
        <div className={`flex flex-wrap w-full h-full max-h-full max-w-full`}>
            <div className={`h-full aspect-square flex justify-center items-center`}>
                <div className={`
                    size-full rounded-full
                    max-h-[100px] max-w-[100px]
                    bg-gradient-to-br from-backdropShade1 to-backdropShade2
                    border border-borderDark
                `}/>
            </div>

            <div className={`flex-1 min-w-0 max-h-full flex flex-col p-3 gap-[4px]`}>
                <div className={`flex gap-6 items-center `}>
                    <p className={`${istokWeb_Bold.className} text-md`}>{item.label}</p>
                    <a href={`https://${item.url}`} target="_blank">
                        <p className={`${istokWeb.className} text-sm text-muted-foreground transition-colors underline decoration-transparent hover:decoration-muted-foreground`}>{item.url}/</p>
                    </a>
                </div>

                <div className={`flex-1 max-h-full overflow-auto flex items-center`}>
                    {
                        item.description ?
                        <p className={`break-all text-xs ${istokWeb.className} `}>
                            {item.description}
                        </p>
                        :
                        <div className={`flex gap-2`}>
                            <p className={`break-all text-xs text-muted-foreground ${istokWeb.className}`}>
                                Sem descrição
                            </p>
                            <motion.button
                                style={{
                                    color: 'var(--primary-foreground)'
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    rotateZ: 10,
                                    color: ['hsl(0 0% 98%)','hsl(314 100% 50%)', 'hsl(277 100% 50%)', 'hsl(180 100% 50%)', 'hsl(314 100% 50%)', 'var(--primary-foreground)'],
                                    transition: { 
                                        rotateZ: {ease: "easeInOut", duration: 0.5},
                                        color: {repeat: Infinity, ease: "easeInOut", duration: 2.5}
                                     },
                                }}
                            >
                                <RiAiGenerate2/>
                            </motion.button>
                        </div>
                    }
                </div>

                <div className={`text-xs flex gap-3`}>
                    <StatusBadge type="status" online={true} />
                    <StatusBadge type="code" label="100" />
                    <StatusBadge type="status" online={false} />
                    <StatusBadge type="code" label="504" />
                </div>

            </div>

            <div className={`flex-none max-w-full w-fit flex flex-col aspect-square`}>
                <div className={`w-full flex items-end justify-end`}>
                    <BsThreeDots className={`text-white`}/>
                </div>  

                <div className={`flex-1 w-full h-full flex justify-center items-center`}>
                    <FaCheck className={`text-successGreen size-full ${viewGridMode=="onePerLine"?'max-h-8':'max-h-6'}`}/>
                </div>

                <div className={`${istokWeb.className} text-muted-foreground w-full flex justify-center text-[11px]`}>
                    <p className={`text-center`}>01/01/2025, 00h15</p>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

