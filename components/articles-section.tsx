import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import alatImage from "@/assets/alat.jpg"
import rancangImage from "@/assets/rancang.jpg"
import labImage1 from "@/assets/IMG_20240626_181331.jpg"
import labImage2 from "@/assets/IMG_20240717_173102.jpg"
import pertamudaImage from "@/assets/prestasi/pertamuda-1761874282045_169.jpeg"
import ceritamedanImage from "@/assets/prestasi/ceritamedan.jpeg"
import pkmIteraImage from "@/assets/prestasi/PKM-Itera-3-1024x683-1.jpg"
import btnHousingpreneurImage from "@/assets/prestasi/btnhousingpreneur.jpg"
import winnerBtnHousingPreneur from "@/assets/prestasi/winnerbtnhousepreneur.jpeg"
export function ArticlesSection() {
  const articles = [
    {
      title:"Selamat! Mibi-Tech Juara 3 BTN Housingpreneur kategori Housing Related Innovation",
      category:"BTN Housingpreneur",
      image:winnerBtnHousingPreneur,
      url: "https://www.cnbcindonesia.com/news/20260131195529-4-707003/btn-housingpreneur-2025-lahirkan-inovator-muda-ekosistem-perumahan"
    },
    {
      title: "MiBi-Tech Lolos ke Tahap Grand Judging BTN Housingpreneur 2025 Bersama 60 Peserta Terpilih",
      category: "BTN Housingpreneur",
      image: btnHousingpreneurImage,
      url: "https://www.instagram.com/p/DTfSdrVibjs/?img_index=5"
    },
    {
      title: "TOP! 12 Startup Jebolan Pertamuda Langsung Teken MoU dengan Investor",
      category: "CNBC Indonesia",
      image: pertamudaImage,
      url: "https://www.cnbcindonesia.com/entrepreneur/20251031082400-25-680937/top-12-startup-jebolan-pertamuda-langsung-teken-mou-dengan-investor"
    },
    {
      title: "Febiola Silitonga Mahasiswa ITERA Medan Bawa Inovasi Olah Sampah Jadi Energi Terbarukan di Top 40 Pertamuda 2025",
      category: "Cerita Medan",
      image: ceritamedanImage,
      url: "https://www.ceritamedan.com/febiola-silitonga-mahasiswa-itera-medan-bawa-inovasi-olah-sampah-jadi-energi-terbarukan-di-top-40-pertamuda-2025"
    },
    {
      title: "12 Startup Jebolan Pertamuda Langsung Teken MoU Dengan Investor",
      category: "Tempo",
      image: pertamudaImage,
      url: "https://www.tempo.co/info-tempo/12-startup-jebolan-pertamuda-langsung-teken-mou-dengan-investor-2085019"
    },
    {
      title: "12 Startup Jebolan Pertamuda Langsung Teken MoU dengan Investor di Panggung",
      category: "ESPOS",
      image: pertamudaImage,
      url: "https://bisnis.espos.id/12-startup-jebolan-pertamuda-langsung-teken-mou-dengan-investor-di-panggung-2157163"
    },
    {
      title: "7 Tim Mahasiswa ITERA Lolos Pendanaan PKM 2021",
      category: "Institut Teknologi Sumatera",
      image: pkmIteraImage,
      url: "https://www.itera.ac.id/7-tim-mahasiswa-itera-lolos-pendanaan-pkm-2021/"
    },
    {
      title: "Usulkan Aneka Inovasi Teknologi, 11 Tim Mahasiswa Itera Lolos PKM",
      category: "Institut Teknologi Sumatera",
      image: pkmIteraImage,
      url: "https://www.itera.ac.id/usulkan-aneka-inovasi-teknologi-11-tim-mahasiswa-itera-lolos-pkm/"
    },
  ]

  return (
    <section className="px-4 pb-12 md:px-8 md:pb-16 container mx-auto" id="kerjasama">
      <div 
        className="mb-8 md:mb-10 flex flex-col items-start justify-between gap-4 md:gap-6 md:flex-row md:items-end"
        data-aos="fade-up"
      >
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-black-mibi lg:text-4xl">Lihat Prestasi Kami</h2>
          <p className="max-w-2xl text-sm md:text-base text-black-mibi/60">
            Perjalanan kami dimulai dari PKM, Pertamina Muda, hingga BTN Housingpreneur. Setiap langkah adalah bukti dedikasi kami dalam mengembangkan solusi energi terbarukan yang berkelanjutan.
          </p>
        </div>
      </div>

      <div className="grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {articles.map((article, i) => (
          <a href={article.url} target="_blank" key={i}>
          <div 
            className="group relative h-[280px] md:h-[320px] overflow-hidden rounded-xl md:rounded-2xl bg-slate-800"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <Image
              src={article.image}
              alt={article.category}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 p-4 md:p-5 text-white">
              <p className="mb-2 text-xs md:text-sm font-medium text-slate-200 line-clamp-3">{article.title}</p>
              <span className="text-[10px] md:text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                {article.category}
              </span>
            </div>
          </div>
          </a>
        ))}
      </div>

      <div 
        className="mt-6 md:mt-8 flex justify-center"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <Link 
          href="/articles"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-mibi text-white font-medium rounded-full hover:bg-blue-mibi/90 transition-colors"
        >
          Lihat Semua Artikel
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
