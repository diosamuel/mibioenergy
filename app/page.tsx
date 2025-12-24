import { TopNav } from "@/components/top-nav"
import { Hero } from "@/components/hero"
import { IntroSection } from "@/components/intro-section"
import { FeaturesSection } from "@/components/features-section"
import { ArticlesSection } from "@/components/articles-section"
import { TeamSection } from "@/components/team-section"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <TopNav />
      <main className="space-y-12 md:space-y-16 lg:space-y-20 pb-12 md:pb-16 lg:pb-20">
        <Hero />
        <IntroSection />
        {/* Grouping dark sections together */}
        <div className="bg-linear-to-br from-blue-950 to-green-mibi text-white rounded-2xl md:rounded-3xl mx-2 md:mx-4 lg:mx-8 overflow-hidden">
          <FeaturesSection />
        </div>
        <ArticlesSection />
        <TeamSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  )
}
