import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MenuCard from "@/components/MenuCard";
import { menuSections } from "@/lib/menu";

export const metadata: Metadata = {
  title: "Menu | A Tana Empanada",
  description: "Handcrafted empanadas, crispy fries, and house-made sauces. All empanadas $5.00. Find A Tana Empanada in Charlotte, NC.",
};

export default function MenuPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-cream">
        {/* Header */}
        <section className="bg-navy py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold font-extrabold tracking-widest text-sm uppercase mb-3">
              Fresh Made Daily
            </p>
            <h1 className="text-5xl font-black text-white mb-4">The Menu</h1>
            <p className="text-blue-200 text-lg max-w-xl mx-auto">
              Everything is fried fresh to order. Grab the sauces — all three. You&apos;ll want them.
            </p>
          </div>
        </section>

        {/* Menu sections */}
        <div className="py-16 px-6 space-y-16">
          {menuSections.map((section) => (
            <section key={section.title} className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-black text-navy mb-8 pb-4 border-b-2 border-border">
                {section.title}
              </h2>
              <div className={`grid gap-6 ${
                section.title === "Empanadas"
                  ? "sm:grid-cols-2 lg:grid-cols-4"
                  : section.title === "Sides"
                  ? "sm:grid-cols-2 max-w-md"
                  : "sm:grid-cols-3"
              }`}>
                {section.items.map((item) => (
                  <MenuCard key={item.name} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Payments + Order */}
        <section className="py-16 px-6 bg-card-bg border-t-2 border-border">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-black text-navy mb-4">Ready to Order?</h2>
            <p className="text-navy-dark/70 mb-8">
              Order online via Square or find us in person. We accept cash, card, Apple Pay, Google Pay, and Venmo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/order"
                className="bg-gold hover:bg-gold-dark text-white font-extrabold px-8 py-4 rounded-full transition-colors"
              >
                Order Online
              </Link>
              <a
                href="/find-us"
                className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-extrabold px-8 py-4 rounded-full transition-colors"
              >
                Find the Truck
              </a>
            </div>
            <a
              href="https://venmo.com/Atanafoodtruck"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-navy-dark/50 text-sm mt-6 hover:text-gold transition-colors"
            >
              💸 Venmo: <span className="font-bold text-navy">@Atanafoodtruck</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
