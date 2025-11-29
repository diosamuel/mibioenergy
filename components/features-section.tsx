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
    title: "Sustainable Energy",
    description: "MibiTech is committed to providing sustainable energy solutions for a brighter future. We strive to reduce carbon emissions and promote renewable resources through innovative technologies and responsible practices.",
    image: alatImage,
    imageAlt: "Laboratory equipment and tools"
  },
  {
    id: 2,
    title: "Innovation & Research",
    description: "Our dedicated research team continuously explores cutting-edge technologies in bioenergy. We invest in R&D to develop efficient, scalable solutions that address global energy challenges while maintaining environmental sustainability.",
    image: rancangImage,
    imageAlt: "Research and development"
  },
  {
    id: 3,
    title: "Expert Team",
    description: "Our team consists of experienced scientists, engineers, and sustainability experts who work together to deliver world-class bioenergy solutions. We combine expertise with passion to drive meaningful change in the energy sector.",
    image: personImage,
    imageAlt: "Our expert team"
  }
]

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<number>(1)

  const currentFeature = features.find(f => f.id === activeFeature) || features[0]

  return (
    <section className="p-8 md:p-16 lg:p-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left Side: Text & Tabs */}
        <div className="space-y-8" data-aos="fade-right">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white md:text-4xl">We Know</h2>
            <p className="text-blue-100/80">
              MibiTech is committed to providing sustainable energy solutions for a brighter future. We strive to reduce
              carbon emissions and promote renewable resources through innovative technologies.
            </p>
          </div>

          {/* Vertical Accordion/Tabs */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`border-l-4 pl-6 transition-all cursor-pointer ${
                  activeFeature === feature.id
                    ? "border-emerald-400 bg-white/5 py-4 opacity-100"
                    : "border-transparent py-2 opacity-50 hover:opacity-100 hover:border-emerald-400/30"
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                {activeFeature === feature.id && (
                  <p className="mt-2 text-sm text-blue-100/70 animate-in fade-in duration-300">
                    {feature.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image */}
        <div 
          className="relative h-[400px] overflow-hidden rounded-2xl bg-white/10 lg:h-auto"
          data-aos="fade-left"
          data-aos-delay="200"
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
