"use client";

import React, { useState, useEffect } from 'react'

import { ApiItemType } from '@/app/utils/types';

import { useViewGridModeContext } from '@/app/contexts/ViewGridModeContext';
import { motion } from 'framer-motion';
import ApiCard from './card/card';

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
                description: "loremipsudaksdjksajdkasidiqowueioqw uioeuqowioqw ueio uqwoeuoqw ueoquw oequwioe uqwio euoqwueqwuioeu qoweuoqw eio uqwoie uoqweuoi qwioeu qwoeuoqwuioe uqwoeuoqw ueiou qwoieq"
            },
            {
                id: 2,
                room_id: 0,
                label: 'string2',
                url: 'url2',
                checkInterval: 50,
                toleranceType: "allowClientErrors",
                allowRedirect: true,
                description: "loremipsudaksdjksajdkasidiqodasdasdasdasdasdasdasdasdasdasdaueioieq"

            },
            {
                id: 3,
                room_id: 0,
                label: 'string2',
                url: 'url2',
                checkInterval: 50,
                toleranceType: "allowClientErrors",
                allowRedirect: true,
                description: "loremipsudaksdjksajdkasidiqowueioqw uioeuqowioqw ueio uqwoeuoqw ueoquw oequwioe uqwio e das das dasda sdas dasdasdsakpdasdpia osdipaosi dpoais dopiasp diaop dopasidopa ipdoiaopdi opasid opasi dop iasdoiaspdoi oasidpais dopia sdiapsdo ipasidpoasdiopa sidpasi dpoasid opasidpoia sdopias pdiaspodsi opai dopaidpai dpoai dopaisdopia odpi uoqwueqwuioeu qoweuoqw eio uqwoie uoqweuoi qwioeu qwoeuoqwuioe uqwoeuoqw ueiou qwoieq"
            },
            {
                id: 4,
                room_id: 0,
                label: 'string2',
                url: 'url2',
                checkInterval: 50,
                toleranceType: "allowClientErrors",
                allowRedirect: true,
            },
            {
                id: 5,
                room_id: 0,
                label: 'string2',
                url: 'url2',
                checkInterval: 50,
                toleranceType: "allowClientErrors",
                allowRedirect: true,
            },
        ])
    }, []);
    
    const [test, setTest] = useState<boolean>(false);

    const [test2, setTest2] = useState<boolean>(false);

  if(!apiList) return <></>
  else 
    return (
        <motion.div className={`w-full h-full p-2 mt-1 //bg-green-400 overflow-hidden`}>
            
            <motion.div className={`w-full bg-transparent overflow-hidden`}
                layout
                style={{
                    display: 'flex',
                    gap: '16px',
                    flexWrap: 'wrap',
                    flexDirection: viewGridMode=='onePerLine'?'column':'row',
                    ...(viewGridMode=='onePerLine'?{
                        alignItems: 'start'
                    }:{
                        justifyContent: 'center',
                        alignItems: 'center'
                    })
                }}
                transition={{
                    duration: 0.5,
                }}
            >
                {
                    apiList.map((api, index) => (
                      <ApiCard
                        key={index}
                        item={api}
                        viewGridMode={viewGridMode}
                        index={index}
                      />  
                    ))
                }
            </motion.div>
        </motion.div>
    );
}