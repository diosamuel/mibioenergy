import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="flex flex-col gap-6 md:gap-8 md:flex-row md:justify-between">
          {/* Brand & Address */}
          <div className="max-w-sm space-y-4 md:space-y-6" data-aos="fade-up">
            <div className="flex items-center gap-2">
              <span className="text-lg md:text-xl font-bold">Mibi-Tech</span>
            </div>

            <div className="space-y-3 md:space-y-4 text-xs md:text-sm text-blue-100/80">
              <div>
                <p className="font-semibold text-white">Contact Us</p>
                <p className="mt-2">
                  <span className="font-medium text-white">Email:</span>
                  <br />
                  <a href="mailto:minibioenergytechnology@gmail.com" className="hover:text-emerald-400 transition-colors break-all">
                    minibioenergytechnology@gmail.com
                  </a>
                </p>
                <p className="mt-2">
                  <span className="font-medium text-white">Instagram:</span>
                  <br />
                  <a href="https://instagram.com/mibioenergy_tech" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                    @mibioenergy_tech
                  </a>
                </p>
              </div>
              <div className="pt-2">
                <p className="font-semibold text-white mb-2">Our Journey</p>
                <ul className="space-y-1">
                  <li>• PKM Karsa Cipta 2024</li>
                  <li>• PKM AI 2025</li>
                  <li>• Pertamuda 2025</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Links could go here if design had them, mostly it's clean */}
        </div>

        <div 
          className="mt-8 md:mt-12 flex flex-col items-center justify-between gap-4 md:gap-6 border-t border-white/10 pt-6 md:pt-8 text-[10px] md:text-xs text-blue-100/60 md:flex-row"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-center md:text-left">© 2025 MiBio Energy Tech.</p>

          <div className="flex gap-4 md:gap-5">
            <Link href="https://instagram.com/mibioenergy_tech" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Instagram className="h-4 w-4 md:h-5 md:w-5" />
            </Link>
            <Link href="mailto:minibioenergytechnology@gmail.com" className="hover:text-white transition-colors">
              <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6">
            <Link href="#" className="hover:text-white whitespace-nowrap">
              Syarat & Ketentuan
            </Link>
            <Link href="#" className="hover:text-white whitespace-nowrap">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="hover:text-white whitespace-nowrap">
              Persetujuan Cookie
            </Link>
            <Link href="#" className="hover:text-white whitespace-nowrap">
              Penafian
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
