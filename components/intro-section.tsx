import { Zap, LeafIcon } from "lucide-react"

export function IntroSection() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid gap-8 md:gap-12 md:grid-cols-2 md:items-center lg:gap-24">
        {/* Text Content */}
        <div className="space-y-4 md:space-y-6" data-aos="fade-right">
          <span className="text-xs md:text-sm font-semibold tracking-wider text-slate-500 uppercase">Tentang Kami</span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 lg:text-4xl flex items-center gap-3">
            <LeafIcon className="h-7 w-7 md:h-9 md:w-9 lg:h-10 lg:w-10 text-green-mibi fill-green-mibi" />
            Kenalan Yuk!
          </h2>
          <p className="text-xs md:text-base lg:text-lg leading-relaxed text-slate-600">
            <strong>MiBi-Tech</strong> adalah inovasi yang berfokus pada pemanfaatan sampah organik menjadi energi terbarukan dan produk bernilai guna. Kami mengembangkan MiBi-Tech sebagai sebuah prototipe terintegrasi yang mengolah limbah pasar menjadi bioetanol, dan biobriket tanpa meninggalkan limbah akhir yang signifikan.
          </p>
          <p className="text-xs md:text-base lg:text-lg leading-relaxed text-slate-600">
            <strong>MiBi-Tech</strong> dirancang untuk menjawab masalah penumpukan sampah basah di pasar tradisional sekaligus menawarkan solusi energi yang efisien, berkelanjutan, dan ramah lingkungan.
          </p>
          <div className="pt-2 md:pt-4 space-y-3 md:space-y-4 bg-gray-100 p-3 md:p-5 rounded-2xl border-t-4 border border-blue-mibi hover:shadow-lg transition-all duration-300">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Visi</h3>
              <p className="text-xs md:text-base text-slate-600">
                Mewujudkan sistem pengolahan sampah organik menjadi energi terbarukan yang efisien dan berkelanjutan berbasis prinsip ekonomi sirkular dan inovasi teknologi.
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Misi</h3>
              <ul className="text-xs md:text-base text-slate-600 space-y-1 md:space-y-2 list-disc list-inside">
                <li>Mengembangkan teknologi pengolahan sampah organik yang inovatif dan efisien sebagai solusi energi berkelanjutan.</li>
                <li>Menerapkan konsep ekonomi sirkular dalam setiap tahapan produksi untuk menciptakan nilai tambah bagi lingkungan dan masyarakat.</li>
                <li>Menjalin kemitraan strategis dengan industri dan lembaga penelitian untuk memperluas penerapan teknologi berkelanjutan di bidang energi dan lingkungan.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative mx-auto w-full max-w-sm md:max-w-none" data-aos="fade-left" data-aos-delay="200">
          {/* Abstract Green Shape Background */}
          {/* <div className="absolute -right-6 -top-6 md:-right-12 md:-top-12 h-full w-full rounded-[3rem] bg-emerald-400/20 blur-3xl" /> */}

          {/* Main Image Container with Shape Mask */}
          <div className="relative overflow-hidden rounded-3xl aspect-square">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full absolute inset-0"
            >
              <source src="/assets/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
