import Image from "next/image"

export function FeaturesSection() {
  return (
    <section className="p-8 md:p-16 lg:p-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left Side: Text & Tabs */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Alat MiBi Tech</h2>
            <p className="text-blue-100/80">
              MibiTech is committed to providing sustainable energy solutions for a brighter future. We strive to reduce
              carbon emissions and promote renewable resources through innovative technologies.
            </p>
          </div>

          {/* Vertical Accordion/Tabs */}
          <div className="space-y-4">
            {/* Active Item */}
            <div className="border-l-4 border-emerald-400 bg-white/5 pl-6 py-4">
              <h3 className="text-lg font-semibold text-white">Fitur 1</h3>
              <p className="mt-2 text-sm text-blue-100/70">
                MibiTech is committed to providing sustainable energy solutions for a brighter future. We strive to
                reduce carbon emissions and promote renewable resources through innovative technologies and responsible
                practices.
              </p>
            </div>

            {/* Inactive Items */}
            <div className="border-l-4 border-transparent pl-6 py-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
              <h3 className="text-lg font-semibold text-white">Fitur 3</h3>
              <p className="text-sm text-blue-100/70">Lorem ipsum</p>
            </div>

            <div className="border-l-4 border-transparent pl-6 py-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
              <h3 className="text-lg font-semibold text-white">Fitur 4</h3>
              <p className="text-sm text-blue-100/70">Lorem ipsum</p>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative h-[400px] overflow-hidden rounded-2xl bg-white/10 lg:h-auto">
          <Image
            src="https://placehold.co/400"
            alt="Scientist using microscope"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
