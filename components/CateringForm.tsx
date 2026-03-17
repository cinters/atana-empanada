"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function CateringForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      date: (form.elements.namedItem("date") as HTMLInputElement).value,
      guests: (form.elements.namedItem("guests") as HTMLInputElement).value,
      notes: (form.elements.namedItem("notes") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/catering", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  const inputClass =
    "w-full bg-white border-2 border-border rounded-xl px-4 py-3 text-navy-dark placeholder-navy-dark/30 focus:outline-none focus:border-gold transition-colors font-medium";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-extrabold text-navy mb-2">
            Name <span className="text-gold">*</span>
          </label>
          <input name="name" type="text" required placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-extrabold text-navy mb-2">
            Phone <span className="text-gold">*</span>
          </label>
          <input name="phone" type="tel" required placeholder="(704) 555-1234" className={inputClass} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-extrabold text-navy mb-2">
          Email <span className="text-gold">*</span>
        </label>
        <input name="email" type="email" required placeholder="you@example.com" className={inputClass} />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-extrabold text-navy mb-2">
            Event Date <span className="text-gold">*</span>
          </label>
          <input name="date" type="date" required className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-extrabold text-navy mb-2">
            Estimated Guests
          </label>
          <input name="guests" type="number" placeholder="50" min="1" className={inputClass} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-extrabold text-navy mb-2">
          Event Location & Notes
        </label>
        <textarea
          name="notes"
          rows={4}
          placeholder="Address, type of event, any special requests..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {state === "success" && (
        <div className="bg-green-50 border-2 border-green-300 rounded-xl px-4 py-3 text-green-700 text-sm font-bold">
          🎉 Got it! We&apos;ll reach out within 24 hours to confirm details.
        </div>
      )}
      {state === "error" && (
        <div className="bg-red-50 border-2 border-red-300 rounded-xl px-4 py-3 text-red-700 text-sm font-bold">
          Something went wrong. Please call us at (980) 355-4099 instead.
        </div>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full bg-gold hover:bg-gold-dark disabled:opacity-50 text-white font-extrabold py-4 rounded-full transition-colors text-base shadow-md"
      >
        {state === "loading" ? "Sending…" : "Send Catering Request"}
      </button>
    </form>
  );
}
