"use client"

import { Button } from "@/components/ui/button"
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
    <section className="container mx-auto mt-4 px-2 md:mt-6 md:px-4" data-aos="fade-up">
      <div 
        className="relative h-[400px] overflow-hidden rounded-2xl md:h-[500px] lg:h-[600px] md:rounded-3xl transition-all duration-300 ease-out mx-auto"
        style={{ width: `${widthPercentage}%` }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/assets/header.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-green-300/40 to-blue-500/30" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-4 md:px-12 lg:px-20">
            <div className="max-w-xl space-y-3 md:space-y-6 text-white">
              <h1 
                className="text-lg font-bold leading-tight md:text-2xl lg:text-4xl"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Mengolah Sampah Organik Menjadi Energi Terbarukan
              </h1>
              <p 
                className="text-xs md:text-sm text-slate-100/90 leading-relaxed"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                MiBi-Tech adalah inovasi yang berfokus pada pemanfaatan sampah organik menjadi energi terbarukan dan produk bernilai guna. Sistem terintegrasi yang mengolah limbah pasar menjadi bioetanol dan biobriket tanpa meninggalkan limbah akhir yang signifikan.
              </p>
              <div data-aos="fade-up" data-aos-delay="600">
                <Button size="lg" className="h-10 md:h-12 rounded-full bg-blue-600 px-6 md:px-8 text-sm md:text-base hover:bg-blue-700 text-white">
                  Explore Mibi Tech
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
