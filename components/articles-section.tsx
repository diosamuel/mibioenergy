import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import alatImage from "@/assets/alat.jpg"
import rancangImage from "@/assets/rancang.jpg"
import labImage1 from "@/assets/IMG_20240626_181331.jpg"
import labImage2 from "@/assets/IMG_20240717_173102.jpg"

export function ArticlesSection() {
  const articles = [
    {
      title: "Sampah organik dengan kadar gula dan air yang tinggi dimasukkan ke dalam spinner untuk dipisahkan antara air lindi dengan padatannya",
      category: "Pemisahan",
      image: alatImage,
    },
    {
      title: "Air lindi diolah menjadi bioetanol melalui proses fermentasi dan destilasi yang menghasilkan energi terbarukan",
      category: "Fermentasi & Destilasi",
      image: rancangImage,
    },
    {
      title: "Sampah padat dibakar dengan sedikit oksigen dan ditambahkan perekat untuk dijadikan briket",
      category: "Pembakaran & Pembriketan",
      image: labImage1,
    },
    {
      title: "Sistem ini dilengkapi dengan PLTS yang terhubung ke spinner untuk input tegangan awal operasional mandiri",
      category: "PLTS Integration",
      image: labImage2,
    },
  ]

  return (
    <section className="px-4 pb-12 md:px-8 md:pb-16 lg:px-16 xl:px-20">
      <div 
        className="mb-8 md:mb-10 flex flex-col items-start justify-between gap-4 md:gap-6 md:flex-row md:items-end"
        data-aos="fade-up"
      >
        <div className="space-y-2">
          <span className="text-xs md:text-sm font-medium text-emerald-400 uppercase tracking-wide">
            Artikel Mibi Tech
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white lg:text-4xl">Artikel Mibi Tech</h2>
          <p className="max-w-2xl text-sm md:text-base text-blue-100/80">
            Sistem terintegrasi yang mengolah sampah organik menjadi energi terbarukan melalui proses pemisahan, fermentasi, pembakaran, dan waste-to-product sehingga setiap bagian sampah dapat dimanfaatkan secara maksimal.
          </p>
        </div>
        <Button 
          className="rounded-full bg-white px-6 md:px-8 text-sm md:text-base text-slate-900 hover:bg-slate-100 whitespace-nowrap"
          data-aos="fade-left"
        >
          Contact Us
        </Button>
      </div>

      <div className="grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {articles.map((article, i) => (
          <div 
            key={i} 
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
        ))}
      </div>

      <div 
        className="mt-6 md:mt-8 flex justify-center gap-3 md:gap-4"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <button className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full border border-white/20 bg-transparent text-white hover:bg-white/10 transition-colors">
          <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
        </button>
        <button className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full border border-white/20 bg-transparent text-white hover:bg-white/10 transition-colors">
          <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
        </button>
      </div>
    </section>
  )
}
