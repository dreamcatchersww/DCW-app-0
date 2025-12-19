'use client'
import React, { useState, useEffect } from 'react'
import VolunteeringAucklandLogo from './ui/VolunteeringAucklandLogo'
import DreamCatcherBlackLogo from './ui/DreamCatcherBlackLogo'
import Feed4AllLogo from './ui/Feed4AllLogo'
import SimplyConnectLogo from './ui/SimplyConnectLogo'
import { useLocale } from './LocaleContext'

export default function TopLogos() {
  const { isUK } = useLocale()
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null
  return (
    <div className="pt-5 lg:pb-5 grid grid-cols-3 grid-rows-1 gap-4 relative lg:mx-50 md:mx-30 sm:mx-10 px-4 text-black overflow-hidden">
      <div className="flex justify-start">
        {isUK ? <SimplyConnectLogo /> : <VolunteeringAucklandLogo />}
      </div>
      <div className="flex justify-center">
        <DreamCatcherBlackLogo />
      </div>
      <div className="flex justify-end">
        <Feed4AllLogo />
      </div>
    </div>
  )
}
