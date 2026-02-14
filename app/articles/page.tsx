import { TopNav } from "@/components/top-nav"
import { Footer } from "@/components/footer"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import pertamudaImage from "@/assets/prestasi/pertamuda-1761874282045_169.jpeg"
import ceritamedanImage from "@/assets/prestasi/ceritamedan.jpeg"
import pkmIteraImage from "@/assets/prestasi/PKM-Itera-3-1024x683-1.jpg"
import btnHousingpreneurImage from "@/assets/prestasi/btnhousingpreneur.jpg"
import headerImage from "@/assets/header.png"

const articles = [
  {
    title: "MiBi-Tech Lolos ke Tahap Grand Judging BTN Housingpreneur 2025 Bersama 60 Peserta Terpilih",
    category: "BTN Housingpreneur",
    description: "MiBi-Tech berhasil lolos ke tahap Grand Judging BTN Housingpreneur 2025 yang akan diselenggarakan pada 26 Januari 2026. Bersama 60 peserta terpilih lainnya, MiBi-Tech siap bersaing membawa inovasi energi terbarukan.",
    image: btnHousingpreneurImage,
    url: "https://www.instagram.com/p/DTfSdrVibjs/?img_index=5",
    date: "22 Januari 2026",
    featured: true
  },
  {
    title: "TOP! 12 Startup Jebolan Pertamuda Langsung Teken MoU dengan Investor",
    category: "CNBC Indonesia",
    description: "Dua belas startup jebolan program Pertamuda berhasil menandatangani MoU dengan investor dalam acara demo day yang berlangsung meriah.",
    image: pertamudaImage,
    url: "https://www.cnbcindonesia.com/entrepreneur/20251031082400-25-680937/top-12-startup-jebolan-pertamuda-langsung-teken-mou-dengan-investor",
    date: "31 Oktober 2025",
    featured: true
  },
  {
    title: "Febiola Silitonga Mahasiswa ITERA Medan Bawa Inovasi Olah Sampah Jadi Energi Terbarukan di Top 40 Pertamuda 2025",
    category: "Cerita Medan",
    description: "Mahasiswa ITERA asal Medan berhasil membawa inovasi pengolahan sampah menjadi energi terbarukan hingga masuk Top 40 Pertamuda 2025.",
    image: ceritamedanImage,
    url: "https://www.ceritamedan.com/febiola-silitonga-mahasiswa-itera-medan-bawa-inovasi-olah-sampah-jadi-energi-terbarukan-di-top-40-pertamuda-2025",
    date: "28 Oktober 2025",
    featured: true
  },
  {
    title: "12 Startup Jebolan Pertamuda Langsung Teken MoU Dengan Investor",
    category: "Tempo",
    description: "Program inkubasi Pertamuda berhasil mencetak 12 startup yang langsung mendapatkan pendanaan dari investor.",
    image: pertamudaImage,
    url: "https://www.tempo.co/info-tempo/12-startup-jebolan-pertamuda-langsung-teken-mou-dengan-investor-2085019",
    date: "30 Oktober 2025",
    featured: false
  },
  {
    title: "12 Startup Jebolan Pertamuda Langsung Teken MoU dengan Investor di Panggung",
    category: "ESPOS",
    description: "Acara demo day Pertamuda berlangsung sukses dengan penandatanganan MoU antara 12 startup dengan para investor.",
    image: pertamudaImage,
    url: "https://bisnis.espos.id/12-startup-jebolan-pertamuda-langsung-teken-mou-dengan-investor-di-panggung-2157163",
    date: "30 Oktober 2025",
    featured: false
  },
  {
    title: "7 Tim Mahasiswa ITERA Lolos Pendanaan PKM 2021",
    category: "Institut Teknologi Sumatera",
    description: "Tujuh tim mahasiswa ITERA berhasil lolos seleksi pendanaan Program Kreativitas Mahasiswa (PKM) tahun 2021.",
    image: pkmIteraImage,
    url: "https://www.itera.ac.id/7-tim-mahasiswa-itera-lolos-pendanaan-pkm-2021/",
    date: "15 Mei 2021",
    featured: false
  },
  {
    title: "Usulkan Aneka Inovasi Teknologi, 11 Tim Mahasiswa Itera Lolos PKM",
    category: "Institut Teknologi Sumatera",
    description: "Sebelas tim mahasiswa ITERA lolos PKM dengan berbagai usulan inovasi teknologi yang menjanjikan.",
    image: pkmIteraImage,
    url: "https://www.itera.ac.id/usulkan-aneka-inovasi-teknologi-11-tim-mahasiswa-itera-lolos-pkm/",
    date: "20 April 2021",
    featured: false
  },
]

export default function ArticlesPage() {
  const featuredArticles = articles.filter(a => a.featured)
  const regularArticles = articles.filter(a => !a.featured)

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <TopNav />
      
      <main className="pb-12 md:pb-16 lg:pb-20">
        {/* Hero Header */}
        <section className="relative h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden" data-aos="fade-up">
          {/* Background Image */}
          <Image
            src={headerImage}
            alt="Artikel & Prestasi MiBi-Tech"
            fill
            className="object-cover"
            priority
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-blue-900/90 to-green-500/30" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 md:px-12 lg:px-20">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors mb-6"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Beranda
              </Link>
              
              <div className="max-w-2xl space-y-4">
                <h1 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  Artikel & Prestasi
                </h1>
                <p 
                  className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  Ikuti perkembangan terbaru MiBi-Tech dan pencapaian tim kami dalam mengembangkan solusi energi terbarukan dari sampah organik.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Spacer */}
        <div className="h-12 md:h-16"></div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="container mx-auto px-4 mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6" data-aos="fade-up">
              Sorotan Utama
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredArticles.map((article, i) => (
                <a 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  key={i}
                  className="group"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <article className="relative h-[350px] md:h-[400px] overflow-hidden rounded-2xl bg-slate-800">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                          {article.category}
                        </span>
                        <span className="text-xs text-white/60">•</span>
                        <span className="text-xs text-white/60">{article.date}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-emerald-300 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-white/70 line-clamp-2 mb-4">
                        {article.description}
                      </p>
                      <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                        <span>Baca Selengkapnya</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* All Articles */}
        <section className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6" data-aos="fade-up">
            Semua Artikel
          </h2>
          <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {regularArticles.map((article, i) => (
              <a 
                href={article.url} 
                target="_blank" 
                rel="noopener noreferrer"
                key={i}
                className="group"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <article className="h-full bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-[180px] md:h-[200px] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] md:text-xs font-semibold text-white bg-blue-mibi/90 backdrop-blur-sm px-2 py-1 rounded-full uppercase tracking-wider">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 md:p-5">
                    <span className="text-xs text-slate-400 mb-2 block">{article.date}</span>
                    <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-mibi transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 line-clamp-2 mb-3">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-1 text-blue-mibi text-xs md:text-sm font-medium">
                      <span>Baca</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 mt-16 md:mt-20">
          <div 
            className="bg-linear-to-br from-blue-mibi to-green-mibi rounded-2xl p-8 md:p-12 text-center"
            data-aos="fade-up"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Tertarik dengan MiBi-Tech?
            </h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Hubungi kami untuk mengetahui lebih lanjut tentang teknologi pengolahan sampah organik menjadi energi terbarukan.
            </p>
            <Link 
              href="https://wa.me/6281213353174"
              className="inline-flex items-center gap-2 bg-white text-blue-mibi font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

