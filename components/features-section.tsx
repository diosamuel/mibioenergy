"use client"

import { useEffect, useRef, useState } from "react"

interface TimelineItem {
  id: number
  title: string
  description: string
  videoTime: number // seconds in video
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "Pengumpulan Sampah Organik",
    description: "",
    videoTime: 0
  },
  {
    id: 2,
    title: "Proses Spinner",
    description: "",
    videoTime: 3
  },
  {
    id: 3,
    title: "Pembakaran Pirolisis",
    description: "",
    videoTime: 6
  },
  {
    id: 4,
    title: "Pembuatan Biobriket",
    description: "",
    videoTime: 9
  },
  {
    id: 5,
    title: "Fermentasi Air Lindi",
    description: "",
    videoTime: 12
  },
  {
    id: 6,
    title: "Destilasi Bioetanol",
    description: "",
    videoTime: 30
  }
]

const advantages = [
  "Mengurangi volume sampah pasar yang lembap dan cepat membusuk",
  "Menghasilkan energi dari limbah organik",
  "Mengurangi emisi metana dari sampah basah",
  "Memanfaatkan seluruh komponen sampah tanpa menyisakan residu padat",
  "Operasional mandiri energi melalui pemanfaatan PLTS untuk daya awal"
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeItem, setActiveItem] = useState<number>(1)
  const [scrollProgress, setScrollProgress] = useState(0)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const sectionRect = section.getBoundingClientRect()

      // Calculate progress based on section position
      const sectionTop = sectionRect.top
      const sectionHeight = sectionRect.height
      const viewportHeight = window.innerHeight

      // Progress: 0 when section enters, 1 when section leaves
      const scrolled = viewportHeight - sectionTop
      const totalScroll = sectionHeight + viewportHeight * 0.5
      const progress = Math.max(0, Math.min(1, scrolled / totalScroll))

      setScrollProgress(progress)

      // Find which timeline item is currently in view
      let currentItemIndex = 0
      for (let i = 0; i < itemRefs.current.length; i++) {
        const itemEl = itemRefs.current[i]
        if (itemEl) {
          const itemRect = itemEl.getBoundingClientRect()
          const itemCenter = itemRect.top + itemRect.height / 2
          // If item center is above viewport center, it's the current one
          if (itemCenter < viewportHeight * 0.6) {
            currentItemIndex = i
          }
        }
      }

      setActiveItem(timelineItems[currentItemIndex]?.id || 1)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative container mx-auto px-4 py-8 md:py-16"
    >
      <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12 lg:mx-20">

        {/* Left Side: Freely Scrolling Timeline Content */}
        <div className="flex-1 lg:flex-[1_1_50%] space-y-6 md:space-y-8">
          {/* Header */}
          <div className="space-y-3 md:space-y-4" data-aos="fade-right">
            <h2 className="text-2xl md:text-3xl font-bold text-white lg:text-4xl">
              Lebih dekat dengan MiBi-Tech <span className="animate-wave">👋🏻</span>
            </h2>
            <p className="text-sm md:text-base text-blue-100/80">
              Dalam prosesnya MiBi-Tech dapat menghasilkan 2 output (produk) utama dan sistem terintegrasi yang mengolah seluruh komponen sampah organik menjadi energi terbarukan.
            </p>
          </div>

          {/* Timeline Items */}
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-white/20">
              <div
                className="w-full bg-linear-to-b from-emerald-400 to-green-mibi transition-all duration-300"
                style={{ height: `${scrollProgress * 100}%` }}
              />
            </div>

            {/* Timeline Items Container */}
            <div className="space-y-6 pl-10">
              {timelineItems.map((item, index) => (
                <div
                  key={item.id}
                  ref={(el) => { itemRefs.current[index] = el }}
                  className={`relative transition-all duration-500 ${activeItem === item.id
                      ? "opacity-100 scale-100"
                      : activeItem > item.id
                        ? "opacity-50"
                        : "opacity-70"
                    }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute -left-10 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${activeItem >= item.id
                        ? "bg-emerald-400 border-emerald-400 shadow-lg shadow-emerald-400/50"
                        : "bg-transparent"
                      }`}
                  >
                    <div className={`w-2 h-2 rounded-full transition-colors ${activeItem >= item.id ? "bg-white" : "bg-white/40"
                      }`} />
                  </div>

                  {/* Content Card */}
                  <div className={`p-4 md:p-5 rounded-xl transition-all duration-300 ${activeItem === item.id
                      ? "bg-white/10 backdrop-blur-sm"
                      : "bg-white/2"
                    }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className={`text-base md:text-lg font-semibold ${activeItem === item.id ? "text-white" : "text-white/20"
                      }`}>
                        {item.title}
                      </h3>
                    </div>
                    <p className={`text-xs md:text-sm transition-all duration-300 ${activeItem === item.id ? "text-blue-100/90" : "text-blue-100/60"
                      }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advantages */}
          <div className="space-y-2 pt-4 border-t border-white/10">
            <h3 className="text-sm md:text-base font-semibold text-white">Keunggulan:</h3>
            <ul className="text-xs text-blue-100/70 space-y-1">
              {advantages.map((adv, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  {adv}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Sticky Video */}
        <div
          className="lg:flex-[1_1_50%] sticky top-28 h-[300px] md:h-[400px] lg:h-[calc(100vh-8rem)] overflow-hidden rounded-2xl bg-black/30 backdrop-blur-sm border border-white/10"
        >
          {/* Video Element */}
          <video
            src="/assets/video2.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Video Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

          {/* Video Progress Indicator */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">


            {/* Current Step Label */}
            <div className="mt-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm md:text-base font-medium text-white">
                {/* {timelineItems[activeItem - 1]?.title} */}
                Alat Mibio-Tech
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
