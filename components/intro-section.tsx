"use client"

import { Zap, LeafIcon, Play, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function IntroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="container mx-auto px-4 py-8 md:py-12 overflow-hidden">
      <div className="grid gap-8 md:gap-12 md:grid-cols-2 md:items-center lg:gap-24">
        {/* Text Content */}
        <div className="space-y-4 md:space-y-6" data-aos="fade-right">
          <span className="text-xs md:text-sm font-semibold tracking-wider text-slate-500 uppercase">Tentang Kami</span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 lg:text-4xl flex items-center gap-3">
            Kenalan Yuk!
          </h2>
          <p className="text-xs md:text-base lg:text-lg leading-relaxed text-slate-600">
            <strong>MiBi-Tech</strong> adalah inovasi yang berfokus pada pemanfaatan sampah organik menjadi energi terbarukan dan produk bernilai guna. Kami mengembangkan MiBi-Tech sebagai sebuah prototipe terintegrasi yang mengolah limbah pasar menjadi bioetanol, dan biobriket tanpa meninggalkan limbah akhir yang signifikan.
          </p>
          <p className="text-xs md:text-base lg:text-lg leading-relaxed text-slate-600">
            <strong>MiBi-Tech</strong> dirancang untuk menjawab masalah penumpukan sampah basah di pasar tradisional sekaligus menawarkan solusi energi yang efisien, berkelanjutan, dan ramah lingkungan.
          </p>
          <div className="pt-2 md:pt-4 space-y-3 md:space-y-4 bg-gray-50 p-3 md:p-5 rounded-2xl border-t-4 border hover:shadow-lg transition-all duration-300">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Visi</h3>
              <p className="text-xs md:text-base text-slate-600">
                Mewujudkan sistem pengolahan sampah organik menjadi energi terbarukan yang efisien dan berkelanjutan berbasis prinsip ekonomi sirkular dan inovasi teknologi.
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Misi</h3>
              <ul className="text-xs md:text-base text-slate-600 space-y-1 md:space-y-2 list-disc list-inside">
                <li>Mengembangkan teknologi pengolahan sampah organik yang inovatif dan efisien sebagai solusi energi berkelanjutan.</li>
                <li>Menerapkan konsep ekonomi sirkular dalam setiap tahapan produksi untuk menciptakan nilai tambah bagi lingkungan dan masyarakat.</li>
                <li>Menjalin kemitraan strategis dengan industri dan lembaga penelitian untuk memperluas penerapan teknologi berkelanjutan di bidang energi dan lingkungan.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative mx-auto w-full max-w-sm md:max-w-none" data-aos="fade-left" data-aos-delay="200">
          {/* Abstract Green Shape Background */}
          <div className="absolute -right-[10em] -top-[8em] hidden md:block">
            <Image src="/assets/logo_hd.png" alt="Abstract Green Shape" width={550} height={100} />
          </div>

          {/* Main Image Container with Shape Mask */}
          <div 
            className="relative overflow-hidden rounded-3xl aspect-square cursor-pointer group"
            onClick={() => setIsModalOpen(true)}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full absolute inset-0 transition-transform duration-300 group-hover:scale-105 shadow-sm"
            >
              <source src="/assets/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Play Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-white/90 rounded-full p-4 md:p-6 transform transition-transform group-hover:scale-110">
                <Play className="h-8 w-8 md:h-12 md:w-12 text-blue-mibi fill-blue-mibi" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 z-101 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            aria-label="Close video"
          >
            <X className="h-6 w-6 md:h-8 md:w-8" />
          </button>

          {/* Video Container */}
          <div 
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              autoPlay
              loop
              controls
              playsInline
              className="w-full h-full rounded-lg shadow-2xl"
            >
              <source src="/assets/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  )
}
