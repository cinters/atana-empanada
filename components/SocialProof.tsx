const testimonials = [
  {
    text: "Best empanadas I've ever had outside of my abuela's kitchen. The La Tanita is absolutely unreal.",
    name: "Maria G.",
    source: "Google Review",
  },
  {
    text: "Found them at Birdsong and now I'm obsessed. Crispy, packed with flavor, and the sauces are incredible.",
    name: "James T.",
    source: "Yelp Review",
  },
  {
    text: "Catered our company lunch and everyone went back for seconds. Already booked them for our next event.",
    name: "Sarah L.",
    source: "Facebook Review",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="py-20 px-6 bg-card-bg border-y-2 border-border">
      <div className="max-w-5xl mx-auto">
        {/* Press badge */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-3 bg-navy text-white px-6 py-3 rounded-full font-bold text-sm">
            <span className="text-gold">📺</span>
            As featured on WCCB Charlotte
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-navy mb-3">What People Are Saying</h2>
          <p className="text-navy-dark/60">The truck speaks for itself.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-cream border-2 border-border rounded-2xl p-6">
              <Stars />
              <p className="text-navy-dark/80 text-sm leading-relaxed mb-4 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="text-navy font-extrabold text-sm">{t.name}</p>
                <p className="text-navy-dark/50 text-xs">{t.source}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social follow CTA */}
        <div className="text-center mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/atanafoodtruck/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold px-6 py-3 rounded-full transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Follow on Instagram
          </a>
          <a
            href="https://www.facebook.com/atanafoodtruck/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold px-6 py-3 rounded-full transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Follow on Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
