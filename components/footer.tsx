import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#2F2F2F] text-white py-12">
      <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
        {/* Top row with links - flex-wrap for mobile */}
        <div className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-0 mb-12 text-center md:text-left">
          <Link
            href="/qui-sommes-nous"
            className="text-white/80 hover:text-white transition-colors relative group px-3 py-1 md:px-0 md:py-0"
          >
            Qui sommes-nous ?
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wet-redwood group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/nos-formations"
            className="text-white/80 hover:text-white transition-colors relative group px-3 py-1 md:px-0 md:py-0"
          >
            Nos formations
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wet-redwood group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/futur-apprenti"
            className="text-white/80 hover:text-white transition-colors relative group px-3 py-1 md:px-0 md:py-0"
          >
            Futur(e) apprenti(e)
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wet-redwood group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/futur-partenaire"
            className="text-white/80 hover:text-white transition-colors relative group px-3 py-1 md:px-0 md:py-0"
          >
            Futur(e) partenaire
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wet-redwood group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/mentions-legales"
            className="text-white/80 hover:text-white transition-colors relative group px-3 py-1 md:px-0 md:py-0"
          >
            Mentions légales
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wet-redwood group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/faq"
            className="text-white/80 hover:text-white transition-colors relative group px-3 py-1 md:px-0 md:py-0"
          >
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wet-redwood group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {/* Bottom row with logo, copyright, and social icons - stacked on mobile */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          {/* Logo on the left */}
          <Link href="/" className="inline-block">
            <Image
              src="https://we-teach.fr/wp-content/uploads/2024/12/1-2-768x180.png"
              alt="WeTeach"
              width={100}
              height={23}
              className="brightness-200"
            />
          </Link>

          {/* Copyright in the middle */}
          <p className="text-white/60">© WeTeach, 2024</p>

          {/* Social icons on the right */}
          <div className="flex gap-4">
            <a
              href="mailto:contact@we-teach.fr"
              className="text-white/60 hover:text-wet-redwood transition-colors"
              aria-label="Email"
            >
              <svg
                className="w-6 h-6"
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
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
              </svg>
            </a>
            <a
              href="tel:+33624529805"
              className="text-white/60 hover:text-wet-redwood transition-colors"
              aria-label="Téléphone"
            >
              <svg
                className="w-6 h-6"
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
    </footer>
  )
}

