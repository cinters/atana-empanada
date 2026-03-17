import Image from "next/image";

const stats = [
  { label: "Veteran-Owned", icon: "🎖️" },
  { label: "Charlotte, NC", icon: "📍" },
  { label: "Made Fresh Daily", icon: "👨‍🍳" },
  { label: "Family Recipes", icon: "❤️" },
];

export default function StoryStrip() {
  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Logo / visual */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gold/20 rounded-full" />
            <div className="absolute inset-3 bg-gold/10 rounded-full" />
            <Image
              src="/logo.jpg"
              alt="A Tana Empanada chefs"
              fill
              className="object-cover rounded-full relative z-10 p-4"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-gold font-extrabold tracking-widest text-sm uppercase mb-3">
            Our Story
          </p>
          <h2 className="text-4xl font-black text-navy mb-6 leading-tight">
            From Scratch.<br />
            From Family.<br />
            From the Heart.
          </h2>
          <p className="text-navy-dark/80 leading-relaxed mb-6">
            We&apos;re a veteran-owned family food truck bringing authentic, handcrafted
            empanadas to the streets of Charlotte. Every empanada is made fresh using
            family recipes passed down through generations — no shortcuts, no compromises.
          </p>
          <p className="text-navy-dark/80 leading-relaxed mb-8">
            The name &quot;A Tana&quot; means everything to us. It&apos;s the spirit behind everything
            we serve. Come hungry. Leave happy.
          </p>

          {/* Stat pills */}
          <div className="flex flex-wrap gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 bg-card-bg border-2 border-border rounded-full px-4 py-2"
              >
                <span>{s.icon}</span>
                <span className="text-navy font-bold text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
