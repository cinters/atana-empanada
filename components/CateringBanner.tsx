import Link from "next/link";

export default function CateringBanner() {
  return (
    <section className="py-20 px-6 bg-gold">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-white/80 font-extrabold tracking-widest text-sm uppercase mb-3">
          Events · Parties · Corporate Lunches
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          Feed Your Whole Crew
        </h2>
        <p className="text-white/90 text-lg mb-10 max-w-xl mx-auto">
          Bring the A Tana truck to your next event. We&apos;ll serve up fresh empanadas
          and make your party one people actually talk about.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/catering"
            className="bg-navy hover:bg-navy-dark text-white font-extrabold px-8 py-4 rounded-full transition-colors shadow-lg"
          >
            Request Catering
          </Link>
          <a
            href="tel:9803554099"
            className="border-2 border-white text-white hover:bg-white hover:text-gold font-extrabold px-8 py-4 rounded-full transition-colors"
          >
            Call (980) 355-4099
          </a>
        </div>
      </div>
    </section>
  );
}
