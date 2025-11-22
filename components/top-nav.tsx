import Link from "next/link"
import { Button } from "@/components/ui/button"
import logo from "@/assets/logo.png"
export function TopNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top Bar */}
      <div className="w-full bg-linear-to-r from-red-400 to-black py-2 text-center text-sm font-medium text-white">
        Top 7 Pertamuda Startup by Pertamina
      </div>

      {/* Navbar */}
      <div className="container mx-auto mt-[5px] px-4">
        <nav className="flex items-center justify-between rounded-full bg-white px-6 py-3 shadow-lg ring-1 ring-slate-100">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg">
            <img src={logo.src} alt="MibiTech" className="w-10" />
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
