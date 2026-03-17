import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Story | A Tana Empanada",
  description: "A veteran-owned family food truck bringing handcrafted empanadas to Charlotte, NC. Made from scratch, from family recipes, with love.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-cream">
        {/* Header */}
        <section className="bg-navy py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold font-extrabold tracking-widest text-sm uppercase mb-3">
              🎖️ Veteran-Owned · Family-Run
            </p>
            <h1 className="text-5xl font-black text-white mb-4">Our Story</h1>
            <p className="text-blue-200 text-lg max-w-xl mx-auto">
              Two guys, one truck, a whole lot of empanadas — and a whole lot of love.
            </p>
          </div>
        </section>

        {/* Main story */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gold/20 rounded-full" />
                <div className="absolute -inset-8 bg-gold/10 rounded-full" />
                <Image
                  src="/logo.jpg"
                  alt="A Tana Empanada — the two chefs"
                  width={320}
                  height={320}
                  className="rounded-full relative z-10"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-black text-navy mb-6">
                Two Guys, One Truck, A Whole Lot of Empanadas
              </h2>
              <div className="space-y-4 text-navy-dark/80 leading-relaxed">
                <p>
                  A Tana Empanada was born out of a simple belief: great food should be accessible,
                  made with care, and shared with the people around you. We&apos;re a veteran-owned
                  family business, and those values — service, discipline, community — are baked into
                  every empanada we make.
                </p>
                <p>
                  Our recipes come from family. Not a cookbook, not a culinary school — family.
                  The kind of recipes passed down at kitchen tables over decades.
                  We&apos;ve taken that tradition and brought it to the streets of Charlotte,
                  one crispy, golden empanada at a time.
                </p>
                <p>
                  Whether you catch us at Birdsong Brewery on a Friday evening or at your
                  company event, we&apos;re bringing the same thing every time: made-from-scratch
                  empanadas, house-made sauces, and the kind of warmth that only comes from
                  cooking for people you care about.
                </p>
                <p className="text-navy font-extrabold text-lg">
                  Love food. Live free. From our family to yours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-6 bg-card-bg border-y-2 border-border">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "🎖️", label: "Veteran-Owned" },
              { value: "CLT", label: "Charlotte, NC" },
              { value: "100%", label: "Made From Scratch" },
              { value: "❤️", label: "Family Recipes" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-black text-navy mb-2">{s.value}</p>
                <p className="text-navy-dark/70 font-bold text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-navy text-center mb-12">What We Stand For</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🏠",
                  title: "Family First",
                  desc: "Our recipes come from family and so does our approach — personal, caring, and never cutting corners.",
                },
                {
                  icon: "🎖️",
                  title: "Service & Integrity",
                  desc: "Veteran-owned means we take our commitment seriously. To our food, our community, and our customers.",
                },
                {
                  icon: "🌮",
                  title: "Made From Scratch",
                  desc: "No shortcuts. Every empanada, every sauce, every day — fresh and made with care.",
                },
              ].map((v) => (
                <div key={v.title} className="bg-card-bg border-2 border-border rounded-2xl p-6 text-center">
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="text-navy font-black text-lg mb-2">{v.title}</h3>
                  <p className="text-navy-dark/70 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-gold">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-black text-white mb-4">Come Find Us</h2>
            <p className="text-white/90 mb-8">
              The best way to get to know us is in person. See where the truck will be this week.
            </p>
            <Link
              href="/find-us"
              className="inline-block bg-navy hover:bg-navy-dark text-white font-extrabold px-8 py-4 rounded-full transition-colors"
            >
              See This Week&apos;s Schedule
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
