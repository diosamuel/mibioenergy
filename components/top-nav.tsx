import Link from "next/link"
import { Button } from "@/components/ui/button"

export function TopNav() {
  return (
    <header className="relative z-50 w-full">
      {/* Top Bar */}
      <div className="w-full bg-teal-400 py-2 text-center text-sm font-medium text-white">
        Top 7 Pertamuda Startup by Pertamina
      </div>

      {/* Navbar */}
      <div className="container mx-auto mt-4 px-4">
        <nav className="flex items-center justify-between rounded-full bg-white px-6 py-3 shadow-lg ring-1 ring-slate-100">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
              {/* Simple M Logo */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-5 w-5 text-emerald-600"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3c-4 0-7 3-7 8 0 4 3 8 8 8s8-4 8-8c0-5-3-8-7-8" className="opacity-0" />
                <path d="M7 17v-6a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v4" />
                <path d="M17 17v-6a3 3 0 0 0-3-3h0a3 3 0 0 0-3 3v4" />
              </svg>
            </div>
            <span className="font-bold text-slate-900 hidden sm:inline-block">MibiTech</span>
          </Link>

          {/* Links */}
          <div className="hidden items-center gap-8 md:flex text-sm font-medium text-slate-600">
            <Link href="#" className="text-slate-900 hover:text-blue-600">
              Beranda
            </Link>
            <Link href="#" className="hover:text-blue-600">
              Tentang Mibi
            </Link>
            <Link href="#" className="hover:text-blue-600">
              Kerja Sama
            </Link>
            <Link href="#" className="hover:text-blue-600">
              Artikel
            </Link>
          </div>

          {/* CTA */}
          <Button className="rounded-full bg-blue-600 px-6 hover:bg-blue-700 text-white">Contact Us</Button>
        </nav>
      </div>
    </header>
  )
}
