import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { regularSpots } from "@/lib/schedule";

export const metadata: Metadata = {
  title: "Find the Truck | A Tana Empanada",
  description:
    "Track A Tana Empanada food truck in Charlotte, NC. See this week's schedule, locations, and hours.",
};

export default function FindUsPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-cream">
        {/* Header */}
        <section className="bg-navy py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold font-extrabold tracking-widest text-sm uppercase mb-3">
              📍 Live Schedule
            </p>
            <h1 className="text-5xl font-black text-white mb-4">Track the Truck</h1>
            <p className="text-blue-200 text-lg max-w-xl mx-auto">
              Our live schedule — always up to date. Follow us on Instagram for
              last-minute stops.
            </p>
          </div>
        </section>

        {/* Live tracker */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden border-2 border-border bg-card-bg">
              <iframe
                src="https://streetfoodfinder.com/atanafoodtruck"
                className="w-full"
                style={{ height: "650px", border: "none" }}
                title="A Tana Empanada live schedule on StreetFoodFinder"
              />
            </div>
            <p className="text-navy-dark/50 text-sm mt-3 text-center">
              Can&apos;t see the tracker?{" "}
              <a
                href="https://streetfoodfinder.com/atanafoodtruck"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold font-bold hover:underline"
              >
                View on StreetFoodFinder →
              </a>
            </p>
          </div>
        </section>

        {/* Regular spots */}
        <section className="py-16 px-6 bg-card-bg border-y-2 border-border">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-navy mb-8">Regular Spots</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {regularSpots.map((spot) => (
                <div key={spot.name} className="bg-cream border-2 border-border rounded-2xl p-6">
                  <h3 className="text-xl font-black text-navy mb-1">{spot.name}</h3>
                  <p className="text-navy-dark/70 text-sm mb-2">{spot.address}</p>
                  <p className="text-gold font-bold text-sm mb-4">{spot.notes}</p>
                  <a
                    href={spot.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-navy font-bold text-sm hover:text-gold transition-colors"
                  >
                    📍 Get Directions →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stay in the loop */}
        <section className="py-16 px-6 bg-navy">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-black text-white mb-4">Stay In The Loop</h2>
            <p className="text-blue-200 mb-8">
              We announce last-minute stops and special events on social media first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/atanafoodtruck/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-gold-dark text-white font-extrabold px-6 py-3 rounded-full transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Follow on Instagram
              </a>
              <a
                href="https://streetfoodfinder.com/atanafoodtruck"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-navy font-extrabold px-6 py-3 rounded-full transition-colors"
              >
                StreetFoodFinder
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
