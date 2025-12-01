"use client"

import { useState } from "react"
import Image from "next/image"
import alatImage from "@/assets/alat.jpg"
import rancangImage from "@/assets/rancang.jpg"
import personImage from "@/assets/person.png"

interface Feature {
  id: number
  title: string
  description: string
  image: any
  imageAlt: string
}

const features: Feature[] = [
  {
    id: 1,
    title: "Bioetanol",
    description: "Bioetanol dihasilkan dari fermentasi cairan sampah organik dengan kadar gula dan air yang tinggi. Proses ini memanfaatkan limbah cair yang dipisahkan dari sampah padat melalui spinner, kemudian diolah melalui fermentasi dan destilasi.",
    image: alatImage,
    imageAlt: "Bioethanol production equipment"
  },
  {
    id: 2,
    title: "Biobriket",
    description: "Biobriket dibuat dari abu pembakaran sampah padat dengan tambahan perekat cair organik. Sampah padat dibakar dengan sedikit oksigen untuk menghasilkan abu yang kemudian dibentuk menjadi briket sebagai sumber energi alternatif.",
    image: rancangImage,
    imageAlt: "Biobriquette production"
  },
  {
    id: 3,
    title: "Sistem Zero-Waste",
    description: "Seluruh komponen sampah, baik padat maupun cair, diproses hingga menghasilkan energi atau produk baru. Tidak ada residu padat yang tersisa, menjadikan MiBi-Tech solusi pengolahan sampah yang benar-benar berkelanjutan.",
    image: rancangImage,
    imageAlt: "Zero-waste system"
  }
]

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<number>(1)

  const currentFeature = features.find(f => f.id === activeFeature) || features[0]

  return (
    <section className="p-4 md:p-8 lg:p-16 xl:p-20">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        {/* Left Side: Text & Tabs */}
        <div className="space-y-6 md:space-y-8" data-aos="fade-right">
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white lg:text-4xl">Produk MiBi</h2>
            <p className="text-sm md:text-base text-blue-100/80">
              Dalam prosesnya MiBi-Tech dapat menghasilkan 2 output (produk) utama dan sistem terintegrasi yang mengolah seluruh komponen sampah organik menjadi energi terbarukan.
            </p>
            <div className="mt-4 md:mt-6 space-y-2">
              <h3 className="text-lg md:text-xl font-semibold text-white">Keunggulan:</h3>
              <ul className="text-xs md:text-sm text-blue-100/80 space-y-1 list-disc list-inside">
                <li>Mengurangi volume sampah pasar yang lembap dan cepat membusuk</li>
                <li>Menghasilkan energi dari limbah organik</li>
                <li>Mengurangi emisi metana dari sampah basah</li>
                <li>Memanfaatkan seluruh komponen sampah tanpa menyisakan residu padat</li>
                <li>Operasional mandiri energi melalui pemanfaatan PLTS untuk daya awal</li>
              </ul>
            </div>
          </div>

          {/* Vertical Accordion/Tabs */}
          <div className="space-y-3 md:space-y-4">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`border-l-4 pl-4 md:pl-6 py-3 md:py-4 transition-all duration-300 cursor-pointer ${
                  activeFeature === feature.id
                    ? "border-emerald-400 bg-white/5 opacity-100"
                    : "border-transparent opacity-70 hover:opacity-100 hover:border-emerald-400/30 hover:bg-white/5"
                }`}
                data-aos-delay={index * 100}
              >
                <h3 className="text-base md:text-lg font-semibold text-white">{feature.title}</h3>
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    activeFeature === feature.id 
                      ? "grid-rows-[1fr] opacity-100 mt-2" 
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs md:text-sm text-blue-100/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image */}
        <div 
          className="relative h-[300px] md:h-[400px] overflow-hidden rounded-2xl bg-white/10 lg:h-auto lg:min-h-[500px]"
          data-aos="fade-left"
        >
          <Image
            key={currentFeature.id}
            src={currentFeature.image}
            alt={currentFeature.imageAlt}
            fill
            className="object-cover animate-in fade-in duration-500"
          />
        </div>
      </div>
    </section>
  )
}
