import { TopNav } from "@/components/top-nav"
import { Hero } from "@/components/hero"
import { IntroSection } from "@/components/intro-section"
import { FeaturesSection } from "@/components/features-section"
import { ArticlesSection } from "@/components/articles-section"
import { TeamSection } from "@/components/team-section"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"
import Link from "next/link"
export default function Page() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <TopNav />
      <main className="space-y-12 md:space-y-16 lg:space-y-20 pb-12 md:pb-16 lg:pb-20">
        <Hero />
        <IntroSection />
        {/* Grouping dark sections together */}
        <div className="bg-linear-to-br bg-blue-950 text-white">
          <FeaturesSection />
        </div>
        <ArticlesSection />
        <TeamSection />
        <PartnersSection />
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
              href="/#contact"
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
