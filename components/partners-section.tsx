import { Button } from "@/components/ui/button"
import Image from "next/image"
import logoImage from "@/assets/logo.png"

export function PartnersSection() {
  const partners = [
    { name: "Partner 1", logo: logoImage },
    { name: "Partner 2", logo: logoImage },
    { name: "Partner 3", logo: logoImage },
    { name: "Partner 4", logo: logoImage },
    { name: "Partner 5", logo: logoImage },
    { name: "Partner 6", logo: logoImage },
    { name: "Partner 7", logo: logoImage },
    { name: "Partner 8", logo: logoImage },
  ]

  return (
    <section className="container mx-auto px-4 pt-10 pb-20">
      <div className="grid gap-12 lg:grid-cols-12">
        {/* Left Side */}
        <div className="lg:col-span-4 space-y-6" data-aos="fade-right">
          <h2 className="text-3xl font-bold text-slate-900">Our Valued Partners</h2>
          <p className="text-slate-600">
            We have partnered with more than 30 institutions and companies to upscale upstream ecosystem together
          </p>
          <Button className="rounded-full bg-blue-600 px-8 hover:bg-blue-700 text-white">Contact Us</Button>
        </div>

        {/* Right Side - Grid */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="flex items-center justify-center rounded-xl border border-slate-100 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain opacity-80 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
