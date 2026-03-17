import Link from "next/link";
import { upcomingStops } from "@/lib/schedule";
import ScheduleCard from "@/components/ScheduleCard";

export default function WhereAreWe() {
  const preview = upcomingStops.slice(0, 3);

  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-extrabold tracking-widest text-sm uppercase mb-2">
            📍 Find the Truck
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-4">
            Where Are We This Week?
          </h2>
          <p className="text-navy-dark/70 text-base max-w-lg mx-auto">
            We move around Charlotte — here are our upcoming stops. Follow us on Instagram for last-minute updates.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {preview.map((stop, i) => (
            <ScheduleCard key={i} stop={stop} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/find-us"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white font-extrabold px-8 py-4 rounded-full transition-colors"
          >
            Full Schedule & Live Tracker
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
