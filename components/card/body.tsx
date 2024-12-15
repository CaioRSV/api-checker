"use client";

import React, { useState, useEffect } from 'react'

import { ApiItemType } from '@/app/utils/types';

import { useViewGridModeContext } from '@/app/contexts/ViewGridModeContext';
import { motion } from 'framer-motion';

export default function Body() {
    const {viewGridMode} = useViewGridModeContext();
    const [apiList, setApiList] = useState<ApiItemType[]>();

    useEffect(()=>{
        setApiList([
            {
                id: 1,
                room_id: 0,
                label: 'string',
                url: 'url',
                checkInterval: 50,
                toleranceType: "onlyAccept",
                allowRedirect: false,
            },
            {
                id: 2,
                room_id: 0,
                label: 'string2',
                url: 'url2',
                checkInterval: 50,
                toleranceType: "allowClientErrors",
                allowRedirect: true,
            },
            {
                id: 2,
                room_id: 0,
                label: 'string2',
                url: 'url2',
                checkInterval: 50,
                toleranceType: "allowClientErrors",
                allowRedirect: true,
            },
            {
                id: 2,
                room_id: 0,
                label: 'string2',
                url: 'url2',
                checkInterval: 50,
                toleranceType: "allowClientErrors",
                allowRedirect: true,
            },
            {
                id: 2,
                room_id: 0,
                label: 'string2',
                url: 'url2',
                checkInterval: 50,
                toleranceType: "allowClientErrors",
                allowRedirect: true,
            },
        ])
    }, []);

  if(!apiList) return <></>
  else 
    return (
        <div className={`w-full h-full p-2 mt-1`}>
            <motion.div className={`w-full flex flex-wrap gap-4 justify-center items-center`}
                layout
                style={{
                    flexDirection: viewGridMode=='onePerLine'?'column':'row',
                    ...(viewGridMode=='onePerLine'?{
                        alignItems: 'start'
                    }:{
                        justifyContent: 'center',
                        alignItems: 'center'
                    })
                }}
            >
                {
                    apiList.map((api, index) => (
                        <motion.div layout transition={{
                            ease: "easeOut",
                            }} 
                            style={{
                            width: viewGridMode=='onePerLine'?'100%':'45%',
                            overflow: 'hidden',
                            }}                         
                            key={index} 
                            className={`
                                h-24
                                bg-muted
                            `}
                        >
                            {api.label}
                        </motion.div>
                    ))
                }
            </motion.div>
        </div>
    );
}