import { motion } from 'framer-motion';
import React from 'react'

import { MdOutlineSettingsBrightness } from "react-icons/md";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import { useTheme } from "next-themes";
import { DropdownMenuPortal, DropdownMenuSubTrigger } from '@radix-ui/react-dropdown-menu';

export default function ThemeSwitcher() {
    const {theme, resolvedTheme, setTheme} = useTheme();
    const themes = ["default","dark", "light"];

  return (
    <motion.div 
        initial={{opacity: 0, y: -10}}
        animate={{opacity: 1, y: 0}}
        transition={{
            duration: 0.8,
            delay: 0.8
        }}
        className={`flex-1 flex justify-end`}
    >
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className={`
                    hover:bg-accent
                    bg-transparent
                    hover:border-muted-foreground
                    rounded-lg
                    cursor-pointer
                    select-none
                    transition-all
                    p-[6px]
                `}>
                    <MdOutlineSettingsBrightness className={`text-lg text-muted-foreground`}/>
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuLabel>Opções visuais</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Tema</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuRadioGroup value={resolvedTheme} onValueChange={setTheme}>
                                <DropdownMenuRadioItem value={themes[0]}>Padrão</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value={themes[1]}>Escuro</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value={themes[2]}>Claro</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
            </DropdownMenuContent>
            </DropdownMenu>

    </motion.div>
  )
}

