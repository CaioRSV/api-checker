"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";


export default function Home() {
  return (
    <div className={`dark bg-background p-2 transition-colors duration-500`}>
      <p className={`text-white`}>dsoidosidos</p>
      <Button onClick={()=>{}}>MUDAR</Button>
    </div>
  );
}
