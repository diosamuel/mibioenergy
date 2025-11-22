import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#003366] text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Brand & Address */}
          <div className="max-w-sm space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-6 w-6 text-emerald-600"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3c-4 0-7 3-7 8 0 4 3 8 8 8s8-4 8-8c0-5-3-8-7-8" className="opacity-0" />
                  <path d="M7 17v-6a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v4" />
                  <path d="M17 17v-6a3 3 0 0 0-3-3h0a3 3 0 0 0-3 3v4" />
                </svg>
              </div>
              <span className="text-xl font-bold">MiBio Energy Tech</span>
            </div>

            <div className="space-y-4 text-sm text-blue-100/80">
              <div>
                <p className="font-semibold text-white">Head Office</p>
                <p>Wisma Barito Pacific Tower A, 7th Floor Jl.</p>
                <p>Let. Jend. S. Parman Kav. 62-63 Jakarta 11410,</p>
                <p>Indonesia</p>
              </div>
              <div className="space-y-1">
                <p>
                  <span className="w-16 inline-block">Telepon</span> (62-21) 530 7950
                </p>
                <p>
                  <span className="w-16 inline-block">Fax</span> (62-21) 530 8930
                </p>
              </div>
            </div>
          </div>

          {/* Links could go here if design had them, mostly it's clean */}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-xs text-blue-100/60 md:flex-row">
          <p>© 2025 MiBio Energy Tech.</p>

          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="#" className="hover:text-white">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link href="#" className="hover:text-white">
              <Youtube className="h-4 w-4" />
            </Link>
            <Link href="#" className="hover:text-white">
              <div className="h-4 w-4 font-bold">𝕏</div> {/* Custom X icon or use Twitter */}
            </Link>
            <Link href="#" className="hover:text-white">
              <Facebook className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">
              Syarat & Ketentuan
            </Link>
            <Link href="#" className="hover:text-white">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="hover:text-white">
              Persetujuan Cookie
            </Link>
            <Link href="#" className="hover:text-white">
              Penafian
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
