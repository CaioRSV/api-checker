"use client";

import { Room } from "@/components/card/room";
import { useTheme } from "next-themes";


export default function Home() {
  const {theme, resolvedTheme, setTheme} = useTheme();

  return (
    <div className={`
      h-screen w-screen 
      bg-gradient-to-br from-backgroundShade3 to-backgroundShade1
      transition-colors duration-500
      `}>
        <p className={`text-white text-lg`}>123</p>
        <Room></Room>
    </div>
  );
}
