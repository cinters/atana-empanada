import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-navy overflow-hidden relative">
      {/* Decorative gold dots pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, #F5A623 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold font-extrabold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            🚚 Charlotte, NC · Veteran-Owned
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            Handcrafted
            <br />
            <span className="text-gold">Empanadas,</span>
            <br />
            Rolling Through
            <br />
            Charlotte.
          </h1>
          <p className="text-blue-200 text-lg mb-10 leading-relaxed">
            Made from scratch. Made with family recipes. Made for you.<br />
            <span className="text-gold font-bold">Love food · Live free.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/find-us"
              className="bg-gold hover:bg-gold-dark text-white font-extrabold px-8 py-4 rounded-full text-base transition-colors shadow-lg text-center"
            >
              📍 See Where We Are
            </Link>
            <Link
              href="/menu"
              className="border-2 border-white text-white hover:bg-white hover:text-navy font-extrabold px-8 py-4 rounded-full text-base transition-colors text-center"
            >
              View the Menu
            </Link>
          </div>
        </div>

        {/* Logo / illustration */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            {/* Gold ring decoration */}
            <div className="absolute -inset-4 rounded-full border-4 border-gold/30 animate-pulse" />
            <div className="absolute -inset-8 rounded-full border-2 border-gold/15" />
            <Image
              src="/logo.jpg"
              alt="A Tana Empanada — Love Food, Live Free"
              width={320}
              height={320}
              className="rounded-full shadow-2xl relative z-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
