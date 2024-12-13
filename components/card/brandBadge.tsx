import React from 'react'

import { Istok_Web } from "next/font/google";
import LogoElement from './logoElement';

const istokWeb = Istok_Web({
  subsets: ["latin"],
  weight: "700",
});

export function BrandBadge(){
  return (
    <div className={`
        bg-gradient-to-r from-transparent to-brandBadgeColor/20
        py-3 px-6
        flex justify-center items-center 
        w-fit gap-2
        relative
        overflow-hidden
      `}>

      {/* TOFIX: Gotta figure out why SVGs will not ever work in the slightest for some reason */}
      <LogoElement /> 

      <p className={`${istokWeb.className}`}>API Checker</p>
      
      <div className="absolute right-[-23px] bottom-0 w-0 h-0 border-[23px] border-transparent border-b-background"></div>
      <div className="absolute right-[-23px] top-0 w-0 h-0 border-[23px] border-transparent border-t-background"></div>

      </div>
  )
}