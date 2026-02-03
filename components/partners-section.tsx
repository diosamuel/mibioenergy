import { Button } from "@/components/ui/button"
import Image from "next/image"
import logoImage from "@/assets/logo.png"
import pertaminaImage from "@/assets/pertamina.png"
import pertamudaImage from "@/assets/pertamuda.png"
import pkmImage from "@/assets/pkm.png"
import btnHPImage from "@/assets/btnhp_2025.png"
export function PartnersSection() {
  const partners = [
    { name: "Pertamina", logo: pertaminaImage },
    { name: "Pertamuda", logo: pertamudaImage },
    { name: "PKM", logo: pkmImage },
    { name: "BTN", logo: btnHPImage },
  ]

  return (
    <section className="container mx-auto px-4 pt-8 pb-12 md:pt-10 md:pb-16 lg:pb-20">
      <div className="grid gap-8 md:gap-12 lg:grid-cols-12 lg:mx-20">
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
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 sm:grid-cols-3">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="flex items-center justify-center rounded-xl md:rounded-2xl border border-slate-100 bg-white p-5 md:p-6 lg:p-8 shadow-sm hover:shadow-lg transition-shadow min-h-[120px] md:min-h-[160px] lg:min-h-[180px]"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={280}
                  height={100}
                  className="h-16 md:h-20 lg:h-24 w-auto object-contain opacity-80 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
