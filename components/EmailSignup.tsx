export default function EmailSignup() {
  return (
    <section className="py-16 px-6 bg-gold">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-white/80 font-extrabold tracking-widest text-sm uppercase mb-2">
          📬 Never Miss the Truck
        </p>
        <h2 className="text-3xl font-black text-white mb-3">
          Get the Weekly Schedule
        </h2>
        <p className="text-white/80 mb-8">
          Drop your email and we&apos;ll send you where we&apos;re popping up each week.
          No spam — just empanadas.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            disabled
            className="flex-1 px-5 py-3 rounded-full text-navy font-bold placeholder:text-navy/40 border-2 border-transparent opacity-75 cursor-not-allowed"
          />
          <button
            disabled
            className="bg-navy text-white font-extrabold px-6 py-3 rounded-full opacity-75 cursor-not-allowed whitespace-nowrap"
          >
            Sign Me Up
          </button>
        </div>
        <p className="text-white/60 text-xs mt-4">Email signup coming soon</p>
      </div>
    </section>
  );
}
