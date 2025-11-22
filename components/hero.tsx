"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import hero from "@/assets/header.png"
import { useEffect, useState } from "react"

export function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const maxScroll = 300 // Maximum scroll distance to track
      const progress = Math.min(scrollPosition / maxScroll, 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate width: starts at 90% (with container padding), expands to 100%
  const widthPercentage = 90 + scrollProgress * 10

  return (
    <section className="container mx-auto mt-6">
      <div 
        className="relative h-[500px] overflow-hidden rounded-3xl md:h-[600px] transition-all duration-300 ease-out mx-auto"
        style={{ width: `${widthPercentage}%` }}
      >
        {/* Background Image */}
        <Image
          src={hero.src}
          alt="Wind turbines in a green field"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-green-300/40 to-blue-500/30" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-8 md:px-16 lg:px-20">
            <div className="max-w-xl space-y-6 text-white">
              <h1 className="text-xl font-bold leading-tight md:text-3xl lg:text-4xl">
                Bioethanol & Bricket for sustainable energy
              </h1>
              <p className="text-sm text-slate-100/90 md:text-sm">
                MibiTech is committed to providing sustainable energy solutions for a brighter future. We strive to
                reduce carbon emissions and promote renewable resources through innovative technologies and responsible
                practices.
              </p>
              <Button size="lg" className="h-12 rounded-full bg-blue-600 px-8 text-base hover:bg-blue-700 text-white">
                Explore Mibi Tech
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
