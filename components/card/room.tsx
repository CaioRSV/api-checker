"use client";

import React from 'react'
import { Button } from '../ui/button'
import { useTheme } from 'next-themes';


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ViewModeSwitcher } from './viewModeSwitcher';
import { BrandBadge } from './brandBadge';
import URLButton from './urlButton';
import SaveButton from './saveButton';
import Header from './header';


export function Room() {
    const {theme, resolvedTheme, setTheme} = useTheme();

    const themes = ["dark", "light", "default"];

  return (
    <div className={`
    max-w-[90%]
    w-[90%]
    sm:w-[1000px]
    min-h-fit
    h-[85vh]
    sm:h-[500px]
    bg-background
    border-2
    border-slate-500
    rounded-3xl
    overflow-hidden
    p-4
    `}>
      <Header></Header>
      
        <Button onClick={()=>{
            setTheme(
                themes[
                    (themes.indexOf(resolvedTheme ?? "default") + 1) % themes.length
                    ] 
                )}}>Defaultar</Button>

        <div className={`h-12 w-12 bg-secondary`}></div>

        <BrandBadge />

        <ViewModeSwitcher/>

        <URLButton/>

        <SaveButton/>

        <Dialog>
            <DialogTrigger>
                <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogDescription>Dialog Description</DialogDescription>
                </DialogHeader>
                <Label>Label</Label>
                <Input></Input>
                <DialogFooter>
                    <Button>Cancel</Button>
                    <Button>Accept</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
        {/* {Array.from("A213123213123112321321321321321321321312").map((elem) => (
          <>
            <div>{elem}</div>
          </>
        ))} */}
    </div>
  )
}