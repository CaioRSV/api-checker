import React from 'react'

import { ApiItemType } from '@/app/utils/types';
import { motion } from 'framer-motion';

import { BsThreeDots } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";

import { Istok_Web } from "next/font/google";

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
        }} 
        style={{
        width: viewGridMode=='onePerLine'?'100%':'45%',
        height: viewGridMode=="onePerLine"?150:120,
        minHeight: 'fit-content',
        }}                         
        className={`
            bg-muted py-4 pl-8 pr-4
        `}
    >
        <div className={`flex w-full h-full overflow-scroll`}>
            <div className={`flex-none p-1`}>
                <div className={`h-full aspect-square flex justify-center items-center`}>
                    <div className={`
                        size-full rounded-full
                        max-h-32 max-w-32
                        bg-gradient-to-br from-backdropShade1 to-backdropShade2
                        border border-borderDark
                    `}/>
                </div>
            </div>

            <div className={`flex-1 text-wrap break-all flex flex-col m-3`}>
                <div className={`flex gap-6 items-center`}>
                    <p className={`${istokWeb_Bold.className} text-md`}>Assigned Name</p>
                    <p className={`${istokWeb.className} text-sm`}>http://localhost:3000/</p>
                </div>
            </div>

            <div className={`flex-none w-fit flex flex-col aspect-square`}>
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

