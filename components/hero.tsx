import { Button } from "@/components/ui/button"
import Image from "next/image"
import hero from "@/assets/header.png"
export function Hero() {
  return (
    <section className="container mx-auto mt-6 px-4">
      <div className="relative h-[500px] w-full overflow-hidden rounded-3xl md:h-[600px]">
        {/* Background Image */}
        <Image
          src={hero.src}
          alt="Wind turbines in a green field"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-green/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-8 md:px-16 lg:px-20">
            <div className="max-w-xl space-y-6 text-white">
              <h1 className="text-xl font-bold leading-tight md:text-3xl lg:text-4xl">
                Bioethanol & Bricket for sustainable energy
              </h1>
              <p className="text-lg text-slate-100/90 md:text-xl">
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
