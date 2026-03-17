import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-dark pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.jpg" alt="A Tana Empanada" width={52} height={52} className="rounded-full" />
              <div>
                <p className="text-white font-black text-lg leading-tight">A TANA</p>
                <p className="text-gold font-extrabold text-sm tracking-widest">EMPANADA</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Love Food · Live Free<br />
              Veteran-owned family food truck<br />
              Charlotte, NC
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wide mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: "/menu", label: "Menu" },
                { href: "/find-us", label: "Find the Truck" },
                { href: "/about", label: "Our Story" },
                { href: "/catering", label: "Catering" },
                { href: "https://atanaempanada.square.site/", label: "Order Online ↗", external: true },
                { href: "https://streetfoodfinder.com/atanafoodtruck", label: "StreetFoodFinder ↗", external: true },
              ].map((l) => (
                l.external ? (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-200 hover:text-gold text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link key={l.label} href={l.href} className="block text-blue-200 hover:text-gold text-sm transition-colors">
                    {l.label}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wide mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm text-blue-200">
              <a href="tel:9803554099" className="block hover:text-gold transition-colors">
                📞 (980) 355-4099
              </a>
              <a href="mailto:info@atanaempanada.com" className="block hover:text-gold transition-colors">
                ✉️ info@atanaempanada.com
              </a>
              <p>💸 Venmo: @Atanafoodtruck</p>
            </div>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/atanafoodtruck/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-gold rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/atanafoodtruck/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-gold rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-blue-200/50">
          <p>&copy; {new Date().getFullYear()} A Tana Empanada / Ubany LLC. All rights reserved.</p>
          <p>Made with ❤️ in Charlotte, NC</p>
        </div>
      </div>
    </footer>
  );
}
