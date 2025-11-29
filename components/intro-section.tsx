import { Button } from "@/components/ui/button"
import Image from "next/image"
import labImage from "@/assets/IMG_20240816_103434.jpg"

export function IntroSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid gap-12 md:grid-cols-2 md:items-center lg:gap-24">
        {/* Text Content */}
        <div className="space-y-6" data-aos="fade-right">
          <span className="text-sm font-semibold tracking-wider text-slate-500 uppercase">Introduction</span>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Who Are We?</h2>
          <p className="text-lg leading-relaxed text-slate-600">
            MibiTech is committed to providing sustainable energy solutions for a brighter future. We strive to reduce
            carbon emissions and promote renewable resources through innovative technologies and responsible practices.
          </p>
          <Button className="h-12 rounded-full bg-blue-600 px-8 hover:bg-blue-700 text-white">Contact Us</Button>
        </div>

        {/* Image Side */}
        <div className="relative mx-auto max-w-md md:max-w-none" data-aos="fade-left" data-aos-delay="200">
          {/* Abstract Green Shape Background */}
          <div className="absolute -right-12 -top-12 h-full w-full rounded-[3rem] bg-emerald-400/20 blur-3xl" />

          {/* Main Image Container with Shape Mask */}
          <div className="relative overflow-hidden rounded-4xl rounded-tr-[8rem] rounded-bl-[4rem] bg-emerald-50">
            <Image
              src={labImage}
              alt="Laboratory and bioenergy research"
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
