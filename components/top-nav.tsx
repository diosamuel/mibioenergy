"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Icon, Instagram, Menu, X } from "lucide-react"
import logo from "@/assets/logo.png"
import { useState, useEffect } from "react"

export function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? '' : ''}`}>
      {/* Top Bar */}
      <div className="w-full bg-linear-to-r from-blue-mibi to-green-mibi py-2 text-center text-sm font-medium text-white">
        <a href="#kerjasama" className=" flex items-center justify-center gap-2">
        <p className="font-bold text-sm">Top 12 Pertamuda Seed and Scale 2025 by PT Pertamina</p>
        <span className="flex items-center gap-1">
          <ArrowRight className="h-4 w-4" />
        </span>
        </a>
      </div>

      {/* Navbar */}
      <div className="container mx-auto mt-[5px] px-4">
        <nav className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white border shadow-lg ring-1 ring-[#d9d9d9]' 
            : 'bg-transparent shadow-none'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg">
              <img src={logo.src} alt="MibiTech" className="w-10" />
            </div>
            <span className={`font-bold hidden sm:inline-block transition-colors duration-300 ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>MiBi-Tech</span>
          </Link>

          {/* Desktop Links */}
          <div className={`hidden items-center gap-8 md:flex text-sm font-medium transition-colors duration-300 ${
            isScrolled ? 'text-slate-600' : 'text-white/80'
          }`}>
            <Link href="/" className={`hover:text-blue-mibi transition-colors ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
              Beranda
            </Link>
            <Link href="#" className="hover:text-blue-mibi transition-colors">
              Tentang Mibi
            </Link>
            <Link href="#" className="hover:text-blue-mibi transition-colors">
              Kerja Sama
            </Link>
            <Link href="/articles" className="hover:text-blue-mibi transition-colors">
              Artikel
            </Link>
          </div>

          {/* Desktop CTA */}
          <Button className={`hidden md:flex rounded-full px-6 transition-all duration-300 ${
            isScrolled 
              ? 'bg-blue-mibi text-white hover:bg-blue-mibi/90' 
              : 'bg-white text-blue-mibi hover:bg-white/90'
          }`}>
            Hubungi Kami
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-slate-900 hover:text-blue-mibi' : 'text-white hover:text-white/80'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg">
                <img src={logo.src} alt="MibiTech" className="w-10" />
              </div>
              <span className="font-bold text-slate-900">MiBi-Tech</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-slate-900 hover:text-blue-mibi transition-colors"
              aria-label="Close menu"
            >
              {/* <X className="h-6 w-6" /> */}
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col p-6 space-y-2 flex-1">
            <Link
              href="#"
              className="text-slate-900 hover:text-blue-mibi font-medium py-3 px-4 rounded-lg hover:bg-slate-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="#"
              className="text-slate-600 hover:text-blue-mibi font-medium py-3 px-4 rounded-lg hover:bg-slate-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang Mibi
            </Link>
            <Link
              href="#"
              className="text-slate-600 hover:text-blue-mibi font-medium py-3 px-4 rounded-lg hover:bg-slate-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Kerja Sama
            </Link>
            <Link
              href="#"
              className="text-slate-600 hover:text-blue-mibi font-medium py-3 px-4 rounded-lg hover:bg-slate-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Artikel
            </Link>
          </div>

          {/* Menu Footer with CTA */}
          <div className="p-6 border-t border-slate-200 space-y-2">
            <div className="">
              <a href="https://www.instagram.com/mibioenergy_tech/" className="flex flex-col">
                <span className="text-sm">Find us</span>
                <span className="flex items-center gap-2"><Instagram className="h-4 w-4" /> @mibioenergy_tech</span>
              </a>
            </div>
            <Link
              className="w-full rounded-full bg-blue-mibi text-white hover:bg-blue-mibi/90"
              href="https://wa.me/6281213353174"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
