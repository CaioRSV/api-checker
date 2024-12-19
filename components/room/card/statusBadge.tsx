import React from 'react'

import { Istok_Web } from "next/font/google";

const istokWeb = Istok_Web({
    subsets: ["latin"],
    weight: "400",
  });
  
const istokWeb_Bold = Istok_Web({
    subsets: ["latin"],
    weight: "700",
});

interface StatusBadge_Status {
    type: "status",
    online: boolean,
};

interface StatusBadge_Code {
    type: "code",
    label: string,
};

type StatusBadgeProps = StatusBadge_Status | StatusBadge_Code;

// Informational responses (100 – 199)
// Successful responses (200 – 299) 
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)

function colorHandler(label:string){
    if(!isNaN(Number(label))){
        if(Number(label) >= 200 && Number(label) < 300){
            return "bg-successGreen"
        }
        else if(Number(label) >= 300 && Number(label) < 400){
            return "bg-warningYellow"
        }
        else if (Number(label) >= 400 && Number(label) < 600){
            return "bg-failureRed"
        }        
    }

    return "bg-slate-500";
}

export default function StatusBadge(props: StatusBadgeProps) {
  return (
    <div className={`
        h-fit w-fit 
        rounded-full
        ${props.type=="status" ? "px-[20px]" : "px-[16px] "}
        py-[2px]
        flex justify-center items-center
        ${props.type=="status"
            ?`
            border
            ${props.online ? 'border-successGreen text-successGreen' : 'border-muted-foreground text-muted-foreground'}
            `
            :`
            text-white
            ${colorHandler(props.label)}
            `
        }
        ${props.type=="status" ? istokWeb.className : istokWeb_Bold.className}
    `}
    >
        {props.type=="status"? props.online?"Online":"Offline" : props.label}
    </div>
  )
}
