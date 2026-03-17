import type { Stop } from "@/lib/schedule";

type Props = {
  stop: Stop;
};

export default function ScheduleCard({ stop }: Props) {
  return (
    <div
      className={`rounded-2xl border-2 p-6 flex flex-col gap-3 transition-transform hover:-translate-y-1 ${
        stop.confirmed
          ? "border-gold bg-card-bg shadow-md"
          : "border-border bg-cream opacity-70"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="font-black text-navy text-lg">{stop.day}</span>
        {stop.confirmed ? (
          <span className="bg-gold text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wide">
            Confirmed
          </span>
        ) : (
          <span className="bg-border text-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            TBD
          </span>
        )}
      </div>
      <p className="text-navy-dark font-bold text-sm">{stop.date}</p>
      <p className="text-navy font-extrabold text-base">{stop.location}</p>
      {stop.confirmed && (
        <>
          <p className="text-navy-dark/70 text-sm">{stop.address}</p>
          <p className="text-gold font-extrabold text-sm">🕐 {stop.time}</p>
        </>
      )}
      <a
        href={stop.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-2 text-center font-bold text-sm py-2.5 rounded-full transition-colors ${
          stop.confirmed
            ? "bg-navy text-white hover:bg-navy-dark"
            : "border border-border text-navy/60 hover:border-navy hover:text-navy"
        }`}
      >
        {stop.confirmed ? "📍 Get Directions" : "🔍 Check Schedule"}
      </a>
    </div>
  );
}
