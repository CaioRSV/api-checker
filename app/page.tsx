"use client";

import { Room } from "@/components/card/room";
import { useTheme } from "next-themes";


export default function Home() {
  const {theme, resolvedTheme, setTheme} = useTheme();

  return (
    <div className={`
      min-h-screen w-full
      bg-gradient-to-br from-backgroundShade3 to-backgroundShade1
      transition-colors duration-500
      flex justify-center items-center
      py-5
      `}>
        <Room/>
    </div>
  );
}
