import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"

export function ArticlesSection() {
  const articles = [
    {
      title: "Reduced number of farmers below poverty line by 13% from 54% in 2022 to 35% in 2023",
      category: "Elevate Socio-Economic Welfare and Well-Being",
      image: "/farmer-in-rice-field-harvest.jpg",
    },
    {
      title: "7 out of 10 farmers already received advisory on Good Agriculture Practice",
      category: "Elevate Literacy",
      image: "/farmer-wearing-hat-planting.jpg",
    },
    {
      title: "Increased women farmers threefold with its rate grew 30% from 9% to 11.7%",
      category: "Elevate Inclusivity",
      image: "/women-farmers-smiling-field.jpg",
    },
    {
      title: "Reduced CO2 emissions by 43% compared to last year, from 467.52 tCO2e in 2022",
      category: "Elevate Sustainable Environment",
      image: "/green-agriculture-landscape-farm.jpg",
    },
  ]

  return (
    <section className="px-8 pb-16 md:px-16 lg:px-20">
      <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="space-y-2">
          <span className="text-sm font-medium text-emerald-400 uppercase tracking-wide">
            Impact and Sustainability
          </span>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Artikel MiBi Tech</h2>
          <p className="max-w-2xl text-blue-100/80">
            Sustainability is not merely a buzzword within our organization; it stands as our guiding principle,
            influencing the formulation and execution of our policies and initiatives.
          </p>
        </div>
        <Button className="rounded-full bg-white px-8 text-slate-900 hover:bg-slate-100">Contact Us</Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {articles.map((article, i) => (
          <div key={i} className="group relative h-[320px] overflow-hidden rounded-2xl bg-slate-800">
            <Image
              src={article.image || "/placeholder.svg"}
              alt="Article thumbnail"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 p-5 text-white">
              <p className="mb-2 text-sm font-medium text-slate-200 line-clamp-3">{article.title}</p>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                {article.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-transparent text-white hover:bg-white/10 transition-colors">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-transparent text-white hover:bg-white/10 transition-colors">
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}
