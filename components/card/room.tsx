"use client";

import React from 'react'
import { Button } from '../ui/button'
import { useTheme } from 'next-themes';

export function Room() {
    const {theme, resolvedTheme, setTheme} = useTheme();

    const themes = ["dark", "light", "default"];

  return (
    <div>
        <p></p>
        <Button onClick={()=>{
            setTheme(
                themes[
                    (themes.indexOf(resolvedTheme ?? "default") + 1) % themes.length
                    ] 
                )}}>Defaultar</Button>
    </div>
  )
}