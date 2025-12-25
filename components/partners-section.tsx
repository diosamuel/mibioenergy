import { Button } from "@/components/ui/button"
import Image from "next/image"
import logoImage from "@/assets/logo.png"
import pertaminaImage from "@/assets/pertamina.png"
import pertamudaImage from "@/assets/pertamuda.png"
import pkmImage from "@/assets/pkm.png"
export function PartnersSection() {
  const partners = [
    { name: "Pertamina", logo: pertaminaImage },
    { name: "Pertamuda", logo: pertamudaImage },
    { name: "PKM", logo: pkmImage },
  ]

  return (
    <section className="container mx-auto px-4 pt-8 pb-12 md:pt-10 md:pb-16 lg:pb-20">
      <div className="grid gap-8 md:gap-12 lg:grid-cols-12">
        {/* Left Side */}
        <div className="lg:col-span-4 space-y-4 md:space-y-6" data-aos="fade-right">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Acknowledged by</h2>
          <p className="text-sm md:text-base text-slate-600">
            Kami telah di dukung oleh institusi dan perusahaan untuk meningkatkan ekosistem bersama
          </p>
          {/* <Button className="h-10 md:h-12 rounded-full bg-blue-600 px-6 md:px-8 text-sm md:text-base hover:bg-blue-700 text-white">Contact Us</Button> */}
        </div>

        {/* Right Side - Grid */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6 sm:grid-cols-4">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="flex items-center justify-center rounded-lg md:rounded-xl border border-slate-100 bg-white p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow min-h-[80px] md:min-h-[100px]"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={60}
                  className="h-8 md:h-12 w-auto object-contain opacity-80 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
