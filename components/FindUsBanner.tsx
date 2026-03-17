import Link from "next/link";

export default function FindUsBanner() {
  return (
    <section className="py-16 px-6 bg-cream border-b-2 border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-gold font-extrabold tracking-widest text-sm uppercase mb-2">
            📍 Find the Truck
          </p>
          <h2 className="text-3xl font-black text-navy mb-2">
            Where Are We Today?
          </h2>
          <p className="text-navy-dark/70">
            Our full live schedule — updated in real time.
          </p>
        </div>
        <Link
          href="/find-us"
          className="shrink-0 bg-navy hover:bg-navy-dark text-white font-extrabold px-8 py-4 rounded-full transition-colors whitespace-nowrap"
        >
          See This Week&apos;s Schedule →
        </Link>
      </div>
    </section>
  );
}
