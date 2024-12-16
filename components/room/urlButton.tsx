import React from 'react'

import { MdContentCopy } from "react-icons/md";
import { Button } from '../ui/button';


export default function URLButton() {
  return (
    <div className={`
        flex justify-between
        w-fit bg-background
        rounded-md aspect-square
        border border-borderLight
    `}>
        <Button onClick={()=>{}} className={`bg-transparent hover:bg-muted w-full h-full`}>
            <MdContentCopy className={`text-foreground`} />
        </Button>
    </div>
  )
}
