"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Heart,
  Menu,
  X,
  Palette,
  Phone,
  MessageCircle,
  Sun,
  Moon,
  ArrowUpRight,
  Lock,
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  // Scroll to top on initial page load / refresh
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Main navigation links with badge for Charity Art Store
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Work", href: "/our-work" },
    { name: "Art for Charity", href: "/art-store", badge: "New" },
    { name: "Impact", href: "/impact" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* HEADER NAVBAR (BLENDS WITH HERO AT TOP, SOLID FROSTED GLASS WHEN SCROLLED) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-[#071F14]/95 backdrop-blur-md shadow-md border-b border-black/5 dark:border-white/10 py-3.5 text-[#123B2A] dark:text-[#F7F5EC]"
            : "bg-gradient-to-b from-black/85 via-black/45 to-transparent py-4 sm:py-5 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* 1. BRAND LOGO & IDENTITY */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div
              className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all group-hover:scale-105 shadow-sm ${
                isScrolled
                  ? "bg-[#123B2A] dark:bg-[#1D5139] text-[#B8CBA5]"
                  : "bg-white/20 backdrop-blur-md text-white border border-white/30"
              }`}
            >
              <svg viewBox="0 0 36 36" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor">
                <path d="M18 3C17.4 3 17 3.4 17 4C17 11.2 12.3 16.5 6 17C5.4 17.05 5 17.5 5 18C5 18.5 5.4 18.95 6 19C12.3 19.5 17 24.8 17 32C17 32.6 17.4 33 18 33C18.6 33 19 32.6 19 32C19 24.8 23.7 19.5 30 19C30.6 18.95 31 18.5 31 18C31 17.5 30.6 17.05 30 17C23.7 16.5 19 11.2 19 4C19 3.4 18.6 3 18 3Z" />
                <circle cx="18" cy="18" r="3" fill="#E28723" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span
                className={`font-serif font-bold text-base sm:text-lg tracking-tight leading-none ${
                  isScrolled ? "text-[#123B2A] dark:text-white" : "text-white"
                }`}
              >
                JPS
              </span>
              <span
                className={`text-[11px] sm:text-xs font-medium tracking-tight leading-snug mt-0.5 ${
                  isScrolled ? "text-[#123B2A]/80 dark:text-[#F7F5EC]/80" : "text-white/90 drop-shadow-sm"
                }`}
              >
                झारखंडवासी परिवर्तन संघ
              </span>
            </div>
          </Link>

          {/* 2. SPACIOUS DESKTOP NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 flex-1 justify-center max-w-3xl">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-full text-xs xl:text-sm font-semibold tracking-wide transition-all relative flex items-center gap-1.5 whitespace-nowrap ${
                    isScrolled
                      ? isActive
                        ? "bg-[#123B2A] dark:bg-[#1D5139] text-white shadow-sm"
                        : "text-[#17231C]/80 dark:text-[#F7F5EC]/85 hover:text-[#123B2A] dark:hover:text-white hover:bg-[#123B2A]/5 dark:hover:bg-white/10"
                      : isActive
                        ? "bg-white/25 text-white backdrop-blur-md shadow-sm border border-white/30"
                        : "text-white/90 hover:text-white hover:bg-white/15"
                  }`}
                >
                  {link.badge && <Palette className="w-3.5 h-3.5 text-[#E28723] flex-shrink-0" />}
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.5 rounded-full bg-[#E28723] text-white text-[9px] font-bold leading-none tracking-tight">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* 3. RIGHT CONTROLS: THEME TOGGLE & DONATE (PERFECTLY ALIGNED) */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
            {/* Interactive Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-full transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#B8CBA5] ${
                isScrolled
                  ? "bg-gray-100 dark:bg-white/10 text-[#123B2A] dark:text-[#F7F5EC] hover:bg-gray-200 dark:hover:bg-white/20"
                  : "bg-white/15 hover:bg-white/25 text-white border border-white/20"
              }`}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-[#E28723] transition-transform hover:rotate-90" />
              ) : (
                <Moon className="w-4 h-4 transition-transform hover:-rotate-45" />
              )}
            </button>

            {/* Admin Portal Quick Access */}
            <Link
              href="/admin"
              className={`p-2 rounded-xl transition-all ${
                isScrolled
                  ? "text-[#123B2A]/70 dark:text-white/70 hover:text-[#E28723] hover:bg-black/5 dark:hover:bg-white/10"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
              title="Admin Portal (Manage Website Content)"
            >
              <Lock className="w-4 h-4" />
            </Link>

            {/* Donate CTA Button */}
            <Link
              href="/donate"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all shadow-sm hover:shadow group ${
                isScrolled
                  ? "bg-[#123B2A] dark:bg-[#E28723] hover:bg-[#1D5139] dark:hover:bg-[#c97419] text-white"
                  : "bg-[#E28723] hover:bg-[#c97419] text-white shadow-lg"
              }`}
            >
              <Heart className="w-3.5 h-3.5 fill-white group-hover:scale-110 transition-transform" />
              <span>Donate</span>
            </Link>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors focus:outline-none ${
                isScrolled
                  ? "text-[#123B2A] dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                  : "text-white hover:bg-white/15"
              }`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* 4. MOBILE NAVIGATION DRAWER */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-[#F7F5EC] dark:bg-[#071F14] shadow-2xl flex flex-col justify-between p-6 overflow-y-auto animate-fade-in z-50 text-[#17231C] dark:text-[#F7F5EC] border-l border-black/10 dark:border-white/10">
            <div>
              {/* Drawer Top Row */}
              <div className="flex items-center justify-between pb-4 border-b border-[#123B2A]/10 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#123B2A] text-white flex items-center justify-center font-bold text-sm shadow">
                    JPS
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-sm text-[#123B2A] dark:text-white">
                      झारखंडवासी परिवर्तन संघ
                    </h3>
                    <p className="text-[11px] text-[#795943] dark:text-[#B8CBA5]">Borivali West, Mumbai</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl text-[#123B2A] dark:text-white hover:bg-[#6F8D58]/20"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Theme Toggle in Mobile Drawer */}
              <div className="mt-4 p-3 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-between">
                <span className="text-xs font-semibold">Theme</span>
                <button
                  onClick={toggleTheme}
                  className="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#123B2A] text-xs font-bold shadow-sm flex items-center gap-1.5 border border-black/5 dark:border-white/10"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="w-3.5 h-3.5 text-[#E28723]" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-3.5 h-3.5 text-[#123B2A]" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </div>

              {/* Mobile Drawer Links */}
              <nav className="mt-4 flex flex-col gap-1.5">
                {[
                  ...navLinks,
                  { name: "Nature & Ecology", href: "/nature" },
                  { name: "Get Involved", href: "/get-involved" },
                ].map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${
                        isActive
                          ? "bg-[#123B2A] dark:bg-[#1D5139] text-white font-bold shadow-sm"
                          : "text-[#17231C]/90 dark:text-[#F7F5EC]/90 hover:bg-[#6F8D58]/15 dark:hover:bg-white/10"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {link.name === "Art for Charity" && <Palette className="w-4 h-4 text-[#E28723]" />}
                        <span>{link.name}</span>
                      </span>
                      {link.badge ? (
                        <span className="px-2 py-0.5 rounded-full bg-[#E28723] text-white text-[10px] font-bold">
                          {link.badge}
                        </span>
                      ) : (
                        <ArrowUpRight className="w-4 h-4 opacity-40" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Drawer Bottom Actions */}
            <div className="pt-6 border-t border-[#123B2A]/10 dark:border-white/10 flex flex-col gap-2.5">
              <Link
                href="/donate"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold flex items-center justify-center gap-2 shadow"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                Support Our Mission (Donate)
              </Link>
              <a
                href="tel:+917808008058"
                className="w-full py-2.5 rounded-full border border-[#123B2A] dark:border-white/30 text-[#123B2A] dark:text-white text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#123B2A]/5 dark:hover:bg-white/5"
              >
                <Phone className="w-3.5 h-3.5 text-[#E28723]" />
                Call Helpline: +91 78080 08058
              </a>
              <a
                href="https://wa.me/917808008058"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#123B2A] dark:text-[#B8CBA5] text-xs font-medium flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp Coordination</span>
              </a>
              <Link
                href="/admin"
                onClick={() => setIsOpen(false)}
                className="w-full py-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-[#123B2A] dark:text-[#B8CBA5] text-xs font-semibold flex items-center justify-center gap-2 border border-black/10 dark:border-white/15"
              >
                <Lock className="w-3.5 h-3.5 text-[#E28723]" />
                <span>Admin Management Portal</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 5. MOBILE BOTTOM QUICK-ACTION BAR (Shows on screen < 768px for immediate access) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#123B2A] dark:bg-[#071F14] border-t border-[#1D5139] px-4 py-2.5 flex items-center justify-between gap-3 md:hidden shadow-2xl">
        <a
          href="tel:+917808008058"
          className="flex-1 py-2 px-3 rounded-full bg-[#0A2419] text-white text-xs font-semibold flex items-center justify-center gap-1.5 border border-white/10"
        >
          <Phone className="w-3.5 h-3.5 text-[#E28723]" />
          <span>Call Helpline</span>
        </a>
        <Link
          href="/donate"
          className="flex-1 py-2 px-3 rounded-full bg-[#E28723] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow"
        >
          <Heart className="w-3.5 h-3.5 fill-white" />
          <span>Donate Now</span>
        </Link>
      </div>
    </>
  );
}
