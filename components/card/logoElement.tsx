import React from 'react'

import Image from 'next/image'

import LogoPath  from "@/public/custom_svgs/crsv_logo.svg"

export default function LogoElement() {
  return (
    <div>
        <Image alt="logo" width={20} height={20}
            src={LogoPath}
            className={`grayscale invert brightness-0 filter hue-rotate(45deg)`}
        />
    </div>
  )
}
