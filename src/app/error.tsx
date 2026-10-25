"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#05140D] text-[#F7F5EC] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-[#071F14] border border-[#1D5139] rounded-3xl p-8 sm:p-10 shadow-2xl text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#E28723]/10 border border-[#E28723]/30 flex items-center justify-center mx-auto text-[#E28723]">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h1 className="font-serif text-2xl font-bold text-white">
            Page Refresh Needed
          </h1>
          <p className="text-xs text-[#F7F5EC]/70 leading-relaxed">
            A newer version of the website or content has been updated. Please refresh to load the latest pages and media seamlessly.
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => window.location.reload()}
            className="w-full py-3.5 rounded-xl bg-[#E28723] hover:bg-[#c97419] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Refresh Page</span>
          </button>

          <Link
            href="/"
            className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-[#B8CBA5] font-semibold text-xs transition-all border border-white/10 flex items-center justify-center gap-2"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
