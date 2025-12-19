'use client'

import { useLocale } from './LocaleContext'
import { useState, useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import TopLogos from './TopLogos'
// import Toggle from './Toggle'
import PageWrapper from './PageWrapper'
import MobileMenuToggle from './MobileMenuToggle'

export default function RootClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isUK } = useLocale()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const backgroundStyle = isUK
    ? { backgroundColor: '#f1f9fb' } // UK
    : {
        backgroundImage: 'url(/bg-pattern-symmetrical.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }

  return (
    <div style={backgroundStyle} className="overflow-visible">
      <TopLogos />

      <div className=" sticky flex items-center justify-between lg:hidden px-6 top-0 z-50 bg-gradient-to-r from-[#8A5082] to-[#A5CAD2] py-1 mt-4 shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
        <MobileMenuToggle />
        {/* <Toggle /> */}
      </div>

      {/* Sticky Toggle */}
      <div className="sticky top-0 z-50 hidden lg:block  px-0">
        <div className="">{/* <Toggle /> */}</div>
      </div>

      {/* Sticky Navbar under Toggle */}
      <div className="sticky top-[48px] z-40 hidden lg:block ">
        <Navbar />
      </div>

      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </div>
  )
}
