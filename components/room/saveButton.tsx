import React from 'react'

import { FaSave } from "react-icons/fa";
import { Button } from '../ui/button';


export default function SaveButton() {
  return (
    <div className={`
        flex justify-between
        w-fit bg-background
        rounded-md aspect-square
        border border-borderLight
    `}>
        <Button onClick={()=>{}} className={`bg-transparent hover:bg-muted w-full h-full`}>
            <FaSave className={`text-foreground`} />
        </Button>
    </div>
  )
}
