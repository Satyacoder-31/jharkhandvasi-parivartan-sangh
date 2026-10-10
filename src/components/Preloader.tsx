"use client";

import { useState, useEffect } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  // Guarantee that on site load or page refresh, it ALWAYS starts from the very top (0, 0)
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      const handleBeforeUnload = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      };
      window.addEventListener("beforeunload", handleBeforeUnload);

      // Lock scroll while preloader is active
      document.body.style.overflow = "hidden";

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
        document.body.style.overflow = "unset";
      };
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Smooth natural acceleration
        const increment = prev < 60 ? Math.floor(Math.random() * 8) + 6 : Math.floor(Math.random() * 12) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 55);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setFadeOut(true);
      }, 250);

      const hideTimer = setTimeout(() => {
        setLoading(false);
        if (typeof window !== "undefined") {
          document.body.style.overflow = "unset";
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }
      }, 850);

      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, [progress]);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#071F14] text-white transition-all duration-700 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none scale-102" : "opacity-100 scale-100"
      }`}
      aria-label="Loading Website"
      role="status"
    >
      {/* Ambient Botanical Glow */}
      <div className="absolute w-96 h-96 rounded-full bg-[#1D5139]/40 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6 text-center space-y-6">
        {/* Emblem */}
        <div className="relative">
          <div className="w-16 h-16 rounded-3xl bg-[#123B2A] border border-[#B8CBA5]/30 flex items-center justify-center shadow-2xl relative overflow-hidden group">
            <svg viewBox="0 0 36 36" className="w-10 h-10 text-[#B8CBA5] animate-pulse" fill="currentColor">
              <path d="M18 3C17.4 3 17 3.4 17 4C17 11.2 12.3 16.5 6 17C5.4 17.05 5 17.5 5 18C5 18.5 5.4 18.95 6 19C12.3 19.5 17 24.8 17 32C17 32.6 17.4 33 18 33C18.6 33 19 32.6 19 32C19 24.8 23.7 19.5 30 19C30.6 18.95 31 18.5 31 18C31 17.5 30.6 17.05 30 17C23.7 16.5 19 11.2 19 4C19 3.4 18.6 3 18 3Z" />
              <circle cx="18" cy="18" r="3" fill="#E28723" />
            </svg>
          </div>
          <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E28723] opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#E28723]" />
          </span>
        </div>

        {/* Brand Text */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#B8CBA5] block">
            झारखंडवासी परिवर्तन संघ
          </span>
          <h2 className="font-serif text-xl sm:text-2xl font-normal text-white tracking-wide">
            Jharkhandvasi Parivartan Sangh
          </h2>
          <p className="text-xs text-[#E28723] font-medium tracking-wider">
            सेवा • सशक्तिकरण • परिवर्तन
          </p>
        </div>

        {/* Loading Bar & Percentage */}
        <div className="w-full space-y-2 pt-2">
          {/* Track */}
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden border border-white/5 relative">
            <div
              className="h-full bg-gradient-to-r from-[#6F8D58] via-[#B8CBA5] to-[#E28723] rounded-full transition-all duration-150 ease-out shadow-sm"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Progress Indicators */}
          <div className="flex items-center justify-between text-[11px] font-mono text-[#F7F5EC]/60">
            <span>Loading Experience</span>
            <span className="text-[#B8CBA5] font-semibold">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
