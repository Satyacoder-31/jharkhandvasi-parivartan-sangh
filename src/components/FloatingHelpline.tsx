"use client";

import { useState, useEffect } from "react";
import { Phone, ArrowUp, MessageCircle } from "lucide-react";

export default function FloatingHelpline() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* WhatsApp Direct Chat */}
        <a
          href="https://wa.me/919022288222?text=Hello%20Jharkhandvasi%20Parivartan%20Sangh,%20I%20would%20like%20to%20connect."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#1D5139] hover:bg-[#123B2A] text-white shadow-xl hover:shadow-2xl border border-[#B8CBA5]/30 transition-all transform hover:-translate-y-1"
          aria-label="Direct WhatsApp Support"
        >
          <span className="hidden sm:inline text-xs font-semibold tracking-wide text-[#F7F5EC] group-hover:text-white">
            WhatsApp Support
          </span>
          <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow">
            <MessageCircle className="w-4 h-4 fill-white" />
          </div>
        </a>

        {/* 24/7 Helpline Direct Dial */}
        <a
          href="tel:+919022288222"
          className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white shadow-lg transition-all transform hover:-translate-y-1"
          aria-label="Call 24/7 Helpline"
        >
          <Phone className="w-4 h-4 fill-white animate-pulse" />
          <span className="text-xs font-bold tracking-wide">
            90222 88222
          </span>
        </a>

        {/* Back to top */}
        {showTopBtn && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#123B2A] text-white flex items-center justify-center shadow-md hover:bg-[#1D5139] transition-all hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </>
  );
}
