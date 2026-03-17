import Link from "next/link";
import { menuSections } from "@/lib/menu";
import MenuCard from "@/components/MenuCard";

export default function MenuHighlights() {
  const empanadas = menuSections[0].items;

  return (
    <section className="py-20 px-6 bg-navy">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-extrabold tracking-widest text-sm uppercase mb-2">
            The Menu
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            All Empanadas. All $5.
          </h2>
          <p className="text-blue-200 text-base max-w-lg mx-auto">
            Fried fresh to order. Pick your favorite — or get one of each.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {empanadas.map((item) => (
            <MenuCard key={item.name} item={item} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-white font-extrabold px-8 py-4 rounded-full transition-colors"
          >
            Full Menu + Sauces
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
