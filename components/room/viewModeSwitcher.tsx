"use client";

import React from 'react'

import { CiGrid2H } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

import { useViewGridModeContext } from '@/app/contexts/ViewGridModeContext';

export function ViewModeSwitcher() {
  const {viewGridMode, setViewGridMode} = useViewGridModeContext();

  return (
      <div className={`
        flex justify-between
        w-fit p-1 gap-2 bg-background
        rounded-md
        border border-borderLight
      `}>
        <ToggleGroup type="single" value={viewGridMode} onValueChange={(value)=>{
          const resolvedValue = (value as "onePerLine" | "manyPerLine");
          
          value!=viewGridMode && resolvedValue.length 
          && setViewGridMode(resolvedValue)
        }}>
          <ToggleGroupItem value="onePerLine" className={`px-4 hover:text-emerald-600 data-[state=on]:text-emerald-400`}>
            <CiGrid2H/>
          </ToggleGroupItem>
          <ToggleGroupItem value="manyPerLine" className={`px-4 hover:text-emerald-600 data-[state=on]:text-emerald-400`}>
            <CiGrid41/>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
  )
}