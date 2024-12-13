import React from 'react'

import { ViewModeSwitcher } from './viewModeSwitcher';
import { BrandBadge } from './brandBadge';
import URLButton from './urlButton';
import SaveButton from './saveButton';

export default function Header() {
  return (
    <div className={`w-full flex justify-between items-center gap-2`}>
        <BrandBadge />

        <ViewModeSwitcher/>

        <div className={`flex gap-2`}>
            <URLButton/>
            <SaveButton/>
        </div>
    </div>
  )
}