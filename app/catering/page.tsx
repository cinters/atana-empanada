import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CateringForm from "@/components/CateringForm";

export const metadata: Metadata = {
  title: "Catering | A Tana Empanada",
  description: "Book A Tana Empanada for your next event in Charlotte, NC. Corporate lunches, parties, weddings, and more.",
};

export default function CateringPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-cream">
        {/* Header */}
        <section className="bg-gold py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white/80 font-extrabold tracking-widest text-sm uppercase mb-3">
              Events · Parties · Corporate
            </p>
            <h1 className="text-5xl font-black text-white mb-4">
              Bring A Tana to Your Event
            </h1>
            <p className="text-white/90 text-lg max-w-xl mx-auto">
              Fresh empanadas, house-made sauces, and a crew that shows up ready to feed your people.
              Let&apos;s make your event one they actually talk about.
            </p>
          </div>
        </section>

        {/* What's included */}
        <section className="py-16 px-6 border-b-2 border-border">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-navy text-center mb-10">
              What Catering Includes
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "🍽️", title: "Full Menu", desc: "All four empanadas + fries served fresh to order" },
                { icon: "🫙", title: "All 3 Sauces", desc: "Chipotle, Aji, and Cilantro — made fresh that day" },
                { icon: "🚚", title: "We Come to You", desc: "Full truck setup at your venue" },
                { icon: "👨‍🍳", title: "Full Service", desc: "Our crew handles setup, service, and cleanup" },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-extrabold text-navy mb-1">{item.title}</h3>
                  <p className="text-navy-dark/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form + contact */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-black text-navy mb-3">Request a Quote</h2>
              <p className="text-navy-dark/70 mb-8">
                Fill out the form and we&apos;ll get back to you within 24 hours with availability and pricing.
              </p>
              <CateringForm />
            </div>

            {/* Direct contact */}
            <div className="md:pt-12">
              <div className="bg-card-bg border-2 border-border rounded-2xl p-8 mb-6">
                <h3 className="text-xl font-black text-navy mb-4">Prefer to Call or Text?</h3>
                <div className="space-y-3">
                  <a href="tel:9803554099" className="flex items-center gap-3 text-navy font-bold hover:text-gold transition-colors">
                    <span className="text-xl">📞</span> (980) 355-4099
                  </a>
                  <a href="mailto:info@atanaempanada.com" className="flex items-center gap-3 text-navy font-bold hover:text-gold transition-colors">
                    <span className="text-xl">✉️</span> info@atanaempanada.com
                  </a>
                </div>
              </div>
              <div className="bg-navy rounded-2xl p-8">
                <h3 className="text-xl font-black text-white mb-3">Good For…</h3>
                <ul className="space-y-2">
                  {[
                    "Corporate lunches & team events",
                    "Birthday & private parties",
                    "Weddings & rehearsal dinners",
                    "Breweries & taprooms",
                    "Community events & festivals",
                    "Office happy hours",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-blue-200 text-sm">
                      <span className="text-gold">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
