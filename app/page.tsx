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
      <main className="pt-28 space-y-20 pb-20">
        <Hero />
        <IntroSection />
        {/* Grouping dark sections together */}
        <div className="bg-[#0F3D6E] text-white rounded-3xl mx-4 md:mx-8 overflow-hidden">
          <FeaturesSection />
          <ArticlesSection />
        </div>
        <TeamSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  )
}
