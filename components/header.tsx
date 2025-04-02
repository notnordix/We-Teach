"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, X, Menu } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen) {
      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        if (!target.closest(".mobile-menu") && !target.closest(".mobile-menu-button")) {
          setMobileMenuOpen(false)
        }
      }

      document.addEventListener("click", handleClickOutside)
      return () => document.removeEventListener("click", handleClickOutside)
    }
  }, [mobileMenuOpen])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [mobileMenuOpen])

  return (
    <>
      {/* Fixed logo that rotates when scrolling */}
      <div
        className={`fixed z-50 transition-all duration-700 ease-in-out hidden lg:block ${
          isScrolled ? "top-4 left-20 rotate-90 transform origin-top-left" : "top-4 left-6 rotate-0 transform"
        }`}
      >
        <Link href="/" className={`flex items-center ${isScrolled ? "p-2" : ""}`}>
          <Image
            src="cropped-w-300x71.png"
            alt="WeTeach Logo"
            width={isScrolled ? 120 : 140}
            height={isScrolled ? 30 : 33}
            className="transition-opacity duration-300 hover:opacity-80"
            unoptimized
          />
        </Link>
      </div>

      <div className="lg:hidden fixed z-50 top-4 left-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/cropped-w-300x71.png"
            alt="WeTeach Logo"
            width={120}
            height={30}
            className="transition-opacity duration-300 hover:opacity-80"
            unoptimized
          />
        </Link>
      </div>

      {/* Main header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 py-4 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center">
          {/* Empty space for logo - takes 20% of the space */}
          <div className="w-1/5">{/* Logo is now in the fixed div above */}</div>

          {/* Navigation - takes 60% of the space with evenly spaced links */}
          <nav className="hidden lg:flex items-center justify-evenly w-3/5">
            <Link
              href="/qui-sommes-nous"
              className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-wet-redwood transition-colors relative group`}
            >
              Qui sommes-nous ?
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wet-redwood group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/nos-formations"
              className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-wet-redwood transition-colors relative group`}
            >
              Nos formations
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wet-redwood group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/futur-apprenti"
              className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-wet-redwood transition-colors relative group`}
            >
              Futur(e) apprenti(e)
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wet-redwood group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/futur-partenaire"
              className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-wet-redwood transition-colors relative group`}
            >
              Futur(e) partenaire
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wet-redwood group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* PDF link - takes 20% of the space and is right-aligned */}
          <div className="hidden lg:flex w-1/5 justify-end">
            <a
              href="/wp-content/uploads/2024/12/Brochure-2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isScrolled ? "bg-wet-redwood text-white" : "bg-wet-redwood text-white"} py-2 px-4 rounded hover:bg-white hover:text-red-700 transition-colors flex items-center`}
            >
              <ExternalLink size={16} className="mr-2" /> Notre brochure
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden ${isScrolled ? "text-gray-800" : "text-white"} ml-auto mobile-menu-button z-50`}
            onClick={(e) => {
              e.stopPropagation()
              setMobileMenuOpen(!mobileMenuOpen)
            }}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 lg:hidden transition-opacity duration-300 mobile-menu ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col justify-center items-center p-6">
          <button
            className="absolute top-6 right-6 text-white hover:text-wet-redwood transition-colors"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-8 w-8" />
          </button>
          <nav className="flex flex-col items-center space-y-6 mb-12">
            <Link
              href="/qui-sommes-nous"
              className="text-white text-xl font-medium hover:text-wet-redwood transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Qui sommes-nous ?
            </Link>
            <Link
              href="/nos-formations"
              className="text-white text-xl font-medium hover:text-wet-redwood transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nos formations
            </Link>
            <Link
              href="/futur-apprenti"
              className="text-white text-xl font-medium hover:text-wet-redwood transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Futur(e) apprenti(e)
            </Link>
            <Link
              href="/futur-partenaire"
              className="text-white text-xl font-medium hover:text-wet-redwood transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Futur(e) partenaire
            </Link>
            <Link
              href="/faq"
              className="text-white text-xl font-medium hover:text-wet-redwood transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/mentions-legales"
              className="text-white text-xl font-medium hover:text-wet-redwood transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mentions légales
            </Link>
          </nav>

          <a
            href="/wp-content/uploads/2024/12/Brochure-2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-wet-redwood text-white py-3 px-6 rounded hover:bg-red-700 transition-colors flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <ExternalLink size={18} className="mr-2" /> Notre brochure
          </a>

          <div className="flex space-x-6 mt-12">
            <a
              href="mailto:contact@we-teach.fr"
              className="text-white/60 hover:text-wet-redwood transition-colors"
              aria-label="Email"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="20"
                  height="16"
                  x="2"
                  y="4"
                  rx="2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></rect>
                <path
                  d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
            <a
              href="https://wa.me/33624529805"
              className="text-white/60 hover:text-wet-redwood transition-colors"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
              </svg>
            </a>
            <a
              href="tel:+33624529805"
              className="text-white/60 hover:text-wet-redwood transition-colors"
              aria-label="Téléphone"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

