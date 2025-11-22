import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function TeamSection() {
  return (
    <section className="container mx-auto px-4">
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Meet Our Team</h2>
        <p className="max-w-lg text-right text-sm text-slate-500 md:text-base">
          Chandra Asri Group berdedikasi untuk mencapai pertumbuhan berkelanjutan melalui berbagai inisiatif
          transformasional, produk-produk esensial, dan solusi infrastruktur penting.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src={`https://placehold.co/400`}
              alt="Team member background"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 w-full p-6 text-white">
              <h3 className="text-lg font-bold">Febiola Serafim</h3>
              <Link
                href="#"
                className="mt-2 flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300"
              >
                Lihat Detail
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
