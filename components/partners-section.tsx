import { Button } from "@/components/ui/button"
import Image from "next/image"

export function PartnersSection() {
  const partners = [
    { name: "Kemenpora", logo: "/placeholder.svg?height=80&width=160&text=Kemenpora" },
    { name: "Kantor Staf Presiden", logo: "/placeholder.svg?height=80&width=160&text=Staf+Presiden" },
    { name: "Scala", logo: "/placeholder.svg?height=80&width=160&text=SCALA" },
    { name: "Dompet Dhuafa", logo: "/placeholder.svg?height=80&width=160&text=Dompet+Dhuafa" },
    { name: "Kitabisa", logo: "/placeholder.svg?height=80&width=160&text=kitabisa" },
    { name: "ACA Asuransi", logo: "/placeholder.svg?height=80&width=160&text=ACA" },
    { name: "Rumah Yatim", logo: "/placeholder.svg?height=80&width=160&text=Rumah+Yatim" },
    { name: "Rumah Zakat", logo: "/placeholder.svg?height=80&width=160&text=Rumah+Zakat" },
  ]

  return (
    <section className="container mx-auto px-4 pt-10 pb-20">
      <div className="grid gap-12 lg:grid-cols-12">
        {/* Left Side */}
        <div className="lg:col-span-4 space-y-6">
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
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
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
