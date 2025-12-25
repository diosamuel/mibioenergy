"use client"

import { useEffect, useRef, useState } from "react"

interface TimelineItem {
  id: number
  title: string
  description: string
  timestamp: string
  videoTime: number // seconds in video
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "Pengumpulan Sampah Organik",
    description: "Sampah organik dengan kadar gula dan air yang tinggi dikumpulkan dari pasar dan sumber lainnya untuk diproses lebih lanjut.",
    timestamp: "00:00",
    videoTime: 0
  },
  {
    id: 2,
    title: "Proses Spinner",
    description: "Sampah dimasukkan ke dalam spinner untuk memisahkan air lindi dari padatannya dengan teknologi sentrifugal.",
    timestamp: "00:03",
    videoTime: 3
  },
  {
    id: 3,
    title: "Pembakaran Pirolisis",
    description: "Sampah padat kemudian dibakar dengan sedikit oksigen dalam proses pirolisis untuk menghasilkan arang.",
    timestamp: "00:06",
    videoTime: 6
  },
  {
    id: 4,
    title: "Pembuatan Biobriket",
    description: "Arang hasil pembakaran dicampur dengan perekat organik dan dicetak menjadi biobriket yang siap digunakan.",
    timestamp: "00:09",
    videoTime: 9
  },
  {
    id: 5,
    title: "Fermentasi Air Lindi",
    description: "Air lindi yang kaya gula difermentasi menggunakan ragi untuk menghasilkan alkohol.",
    timestamp: "00:12",
    videoTime: 12
  },
  {
    id: 6,
    title: "Destilasi Bioetanol",
    description: "Hasil fermentasi didestilasi untuk memurnikan bioetanol hingga kadar yang optimal untuk bahan bakar.",
    timestamp: "00:15",
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
  const videoRef = useRef<HTMLVideoElement>(null)
  const [activeItem, setActiveItem] = useState<number>(1)
  const [scrollProgress, setScrollProgress] = useState(0)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !videoRef.current) return

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

      // Calculate video time based on active item (each item = 3 seconds)
      const targetTime = currentItemIndex * 3
      if (Math.abs(videoRef.current.currentTime - targetTime) > 0.3) {
        videoRef.current.currentTime = targetTime
      }
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
      <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">

        {/* Left Side: Freely Scrolling Timeline Content */}
        <div className="flex-1 lg:flex-[1_1_50%] space-y-6 md:space-y-8">
          {/* Header */}
          <div className="space-y-3 md:space-y-4" data-aos="fade-right">
            <h2 className="text-2xl md:text-3xl font-bold text-white lg:text-4xl">
              Lebih dekat dengan MiBi-Tech
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
                        : "bg-transparent border-white/40"
                      }`}
                  >
                    <div className={`w-2 h-2 rounded-full transition-colors ${activeItem >= item.id ? "bg-white" : "bg-white/40"
                      }`} />
                  </div>

                  {/* Content Card */}
                  <div className={`p-4 md:p-5 rounded-xl transition-all duration-300 ${activeItem === item.id
                      ? "bg-white/10 backdrop-blur-sm border"
                      : "bg-white/5"
                    }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-base md:text-lg font-semibold text-white">
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
          data-aos="fade-left"
        >
          {/* Video Element */}
          <video
            ref={videoRef}
            src="/assets/video.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            muted
            playsInline
            preload="auto"
          />

          {/* Video Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

          {/* Video Progress Indicator */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">


            {/* Current Step Label */}
            <div className="mt-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm md:text-base font-medium text-white">
                {timelineItems[activeItem - 1]?.title}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
