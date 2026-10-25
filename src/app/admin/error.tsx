"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Admin Portal Error:", error);
  }, [error]);

  const handleHardReset = () => {
    try {
      sessionStorage.removeItem("jps_admin_authenticated");
    } catch (e) {}
    window.location.href = "/admin";
  };

  return (
    <div className="min-h-screen bg-[#071F14] text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#0A2419] border border-[#B8CBA5]/20 rounded-3xl p-8 sm:p-10 shadow-2xl text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h1 className="font-serif text-2xl font-bold text-white">
            Admin Portal Access
          </h1>
          <p className="text-xs text-[#F7F5EC]/70 leading-relaxed">
            The admin portal encountered a loading issue. Clicking below will refresh your session and load the latest portal dashboard cleanly.
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleHardReset}
            className="w-full py-3.5 rounded-xl bg-[#E28723] hover:bg-[#c97419] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reload Admin Portal</span>
          </button>

          <Link
            href="/"
            className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-[#B8CBA5] font-semibold text-xs transition-all border border-white/10 flex items-center justify-center gap-2"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Public Website</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
