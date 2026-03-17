"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SQUARE_URL = "https://atanaempanada.square.site/";

export default function OrderPage() {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((n) => {
        if (n <= 1) {
          clearInterval(interval);
          window.location.href = SQUARE_URL;
          return 0;
        }
        return n - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-navy flex flex-col items-center justify-center px-6 text-center">
      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/logo.jpg"
          alt="A Tana Empanada"
          width={120}
          height={120}
          className="rounded-full mx-auto mb-4"
        />
        <p className="text-gold font-extrabold tracking-widest text-sm uppercase">
          A Tana Empanada
        </p>
      </div>

      {/* Message */}
      <h1 className="text-3xl font-black text-white mb-3">
        Taking you to your order…
      </h1>
      <p className="text-blue-200 mb-10">
        You&apos;ll be redirected in {countdown} second{countdown !== 1 ? "s" : ""}.
      </p>

      {/* Spinner */}
      <div className="w-12 h-12 rounded-full border-4 border-gold/30 border-t-gold animate-spin mb-10" />

      {/* Manual link fallback */}
      <a
        href={SQUARE_URL}
        className="text-gold hover:text-white text-sm font-bold underline transition-colors"
      >
        Click here if you&apos;re not redirected
      </a>
    </div>
  );
}
