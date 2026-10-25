"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
  Globe,
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, toggleLanguage, t } = useLanguage();

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

  // Hide the public website Navbar when viewing the Admin Panel
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  // Main navigation links with dynamic translation
  const navLinks = [
    { name: t("navHome"), href: "/" },
    { name: t("navAbout"), href: "/about" },
    { name: t("navOurWork"), href: "/our-work" },
    { name: t("navArtStore"), href: "/art-store", badge: "New" },
    { name: t("navImpact"), href: "/impact" },
    { name: t("navEvents"), href: "/events" },
    { name: t("navContact"), href: "/contact" },
  ];

  return (
    <>
      {/* HEADER NAVBAR (BLENDS WITH HERO AT TOP, SOLID FROSTED GLASS WHEN SCROLLED) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-[#071F14]/95 backdrop-blur-md shadow-md border-b border-black/5 dark:border-white/10 text-[#123B2A] dark:text-[#F7F5EC]"
            : "bg-gradient-to-b from-black/90 via-black/60 to-transparent text-white"
        }`}
      >
        {/* TOP LIVE ANNOUNCEMENT RIBBON: GRAND KARMA MAHOTSAV 2026 */}
        <div className="bg-gradient-to-r from-[#0F3524] via-[#123B2A] to-[#B35E10] text-white text-[11px] sm:text-xs py-1.5 px-3 border-b border-white/10 shadow-inner">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap text-center">
            <span className="bg-[#E28723] text-white font-bold px-2 py-0.5 rounded-full text-[9px] uppercase tracking-wider animate-pulse flex-shrink-0">
              {language === "hi" ? "आगामी भव्य आयोजन" : "Live Upcoming Event"}
            </span>
            <span className="font-medium text-white/95 truncate sm:overflow-visible">
              🌿 <strong>{language === "hi" ? "भव्य कर्मा महोत्सव 2026" : "Grand Karma Mahotsav 2026"}</strong>: {language === "hi" ? "रविवार, 25 अक्टूबर • दोपहर 12:30 से शाम 7:30 • वीर सावरकर उद्यान, बोरीवली (प.)" : "Sunday, 25 Oct • 12:30 PM - 7:30 PM • Veer Savarkar Udyan, Borivali (W)"}
            </span>
            <Link
              href="/events#karma-mahotsav"
              className="text-[#B8CBA5] hover:text-white font-bold underline inline-flex items-center gap-0.5 flex-shrink-0 text-[10px] sm:text-xs ml-1"
            >
              <span>{language === "hi" ? "पूरा निमंत्रण देखें" : "View Invitation"}</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
          {/* 1. BRAND LOGO & IDENTITY WITH OFFICIAL JPS EMBLEM & SLOGAN */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink min-w-0">
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-105 shadow-md flex-shrink-0 p-0.5 bg-white border ${
                isScrolled
                  ? "border-[#123B2A]/20 shadow-sm"
                  : "border-white/40 shadow-md"
              }`}
            >
              <Image
                src="/images/logo/jps-logo-full.png"
                alt="Jharkhandvasi Parivartan Sangh Official Logo with Slogan"
                width={48}
                height={48}
                priority
                unoptimized
                className="w-full h-full object-contain rounded-lg"
              />
            </div>

            <div className="flex flex-col min-w-0">
              <span
                className={`font-serif font-bold text-base sm:text-lg tracking-tight leading-none ${
                  isScrolled ? "text-[#123B2A] dark:text-white" : "text-white"
                }`}
              >
                JPS
              </span>
              <span
                className={`text-[10px] sm:text-xs font-semibold tracking-tight leading-snug mt-0.5 truncate max-w-[115px] sm:max-w-none ${
                  isScrolled ? "text-[#123B2A]/85 dark:text-[#F7F5EC]/85" : "text-white/95 drop-shadow-sm"
                }`}
              >
                {language === "hi" ? "झारखंडवासी परिवर्तन संघ" : "Jharkhandvasi Parivartan Sangh"}
              </span>
              <span className="text-[8px] sm:text-[9px] font-bold text-[#E28723] leading-none mt-0.5 block">
                एक जुर्रत... एक ज़रूरत
              </span>
            </div>
          </Link>

          {/* 2. SPACIOUS DESKTOP NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 flex-1 justify-center max-w-3xl">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
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

          {/* 3. RIGHT CONTROLS: LANGUAGE SWITCHER, THEME, ADMIN, DONATE & GUARANTEED MOBILE MENU */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
            {/* Interactive Bilingual Switcher (English ↔ Hindi) */}
            <button
              onClick={toggleLanguage}
              className={`px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all flex items-center gap-1 border shadow-xs focus:outline-none ${
                isScrolled
                  ? "bg-gray-100 dark:bg-white/10 text-[#123B2A] dark:text-[#F7F5EC] border-black/10 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/20"
                  : "bg-white/15 hover:bg-white/25 text-white border-white/25 backdrop-blur-md"
              }`}
              aria-label={`Switch to ${language === "en" ? "Hindi" : "English"}`}
              title={`Switch language / भाषा बदलें (Current: ${language === "en" ? "English" : "हिंदी"})`}
            >
              <Globe className="w-3.5 h-3.5 text-[#E28723]" />
              <span className={language === "en" ? "text-[#E28723] font-black" : "opacity-70"}>EN</span>
              <span className="opacity-30 text-[10px]">|</span>
              <span className={language === "hi" ? "text-[#E28723] font-black" : "opacity-70"}>हिं</span>
            </button>

            {/* Interactive Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#B8CBA5] ${
                isScrolled
                  ? "bg-gray-100 dark:bg-white/10 text-[#123B2A] dark:text-[#F7F5EC] hover:bg-gray-200 dark:hover:bg-white/20"
                  : "bg-white/15 hover:bg-white/25 text-white border border-white/20 backdrop-blur-md"
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

            {/* Admin Portal Quick Access (Desktop & Tablet) */}
            <a
              href="/admin"
              className={`hidden sm:flex p-2 rounded-xl transition-all ${
                isScrolled
                  ? "text-[#123B2A]/70 dark:text-white/70 hover:text-[#E28723] hover:bg-black/5 dark:hover:bg-white/10"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
              title="Admin Portal (Manage Website Content)"
            >
              <Lock className="w-4 h-4" />
            </a>

            {/* Donate CTA Button (Desktop & Tablet) */}
            <Link
              href="/donate"
              className={`hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all shadow-sm hover:shadow group ${
                isScrolled
                  ? "bg-[#123B2A] dark:bg-[#E28723] hover:bg-[#1D5139] dark:hover:bg-[#c97419] text-white"
                  : "bg-[#E28723] hover:bg-[#c97419] text-white shadow-lg"
              }`}
            >
              <Heart className="w-3.5 h-3.5 fill-white group-hover:scale-110 transition-transform" />
              <span>{t("btnDonate")}</span>
            </Link>

            {/* High-Visibility Mobile Hamburger Menu Button (Guaranteed to stay within screen) */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden flex-shrink-0 flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl transition-all font-bold text-xs tracking-wide focus:outline-none focus:ring-2 focus:ring-[#E28723] shadow-sm ${
                isScrolled
                  ? "bg-[#123B2A] text-white dark:bg-[#1D5139] dark:text-white hover:bg-[#1D5139]"
                  : "bg-white/25 hover:bg-white/35 text-white backdrop-blur-md border border-white/30"
              }`}
              aria-label={isOpen ? t("navClose") : t("navMenu")}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4 text-white" />}
              <span className="font-bold text-[11px] uppercase tracking-wider">{isOpen ? t("navClose") : t("navMenu")}</span>
            </button>
          </div>
        </div>
      </header>

      {/* 4. MOBILE NAVIGATION DRAWER */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-[#F7F5EC] dark:bg-[#071F14] shadow-2xl flex flex-col justify-between p-5 sm:p-6 overflow-y-auto animate-fade-in z-[101] text-[#17231C] dark:text-[#F7F5EC] border-l border-black/10 dark:border-white/10">
            <div>
              {/* Drawer Top Row with Official Emblem */}
              <div className="flex items-center justify-between pb-4 border-b border-[#123B2A]/10 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-12 h-12 rounded-xl bg-white p-0.5 border border-[#123B2A]/20 shadow flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/images/logo/jps-logo-full.png"
                      alt="JPS Logo with Slogan"
                      width={48}
                      height={48}
                      unoptimized
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-sm text-[#123B2A] dark:text-white leading-tight">
                      {t("orgName")}
                    </h3>
                    <p className="text-[10px] text-[#E28723] font-bold tracking-wider">{t("orgHindiMotto")}</p>
                    <p className="text-[10px] text-[#795943] dark:text-[#B8CBA5]">{t("orgLocation")}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl text-[#123B2A] dark:text-white hover:bg-[#6F8D58]/20 focus:outline-none"
                  aria-label={t("navClose")}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Language Selector in Mobile Drawer */}
              <div className="mt-3 p-3 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#E28723]" />
                  <span className="text-xs font-semibold">{t("langSwitch")}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white dark:bg-[#123B2A] p-1 rounded-xl border border-black/5 dark:border-white/10 shadow-sm">
                  <button
                    onClick={() => setLanguage("en")}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      language === "en"
                        ? "bg-[#123B2A] text-white dark:bg-[#E28723] dark:text-white shadow"
                        : "text-[#123B2A]/70 dark:text-white/70 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLanguage("hi")}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      language === "hi"
                        ? "bg-[#123B2A] text-white dark:bg-[#E28723] dark:text-white shadow"
                        : "text-[#123B2A]/70 dark:text-white/70 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    हिंदी
                  </button>
                </div>
              </div>

              {/* Theme Toggle in Mobile Drawer */}
              <div className="mt-2.5 p-3 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-between">
                <span className="text-xs font-semibold">{language === "hi" ? "थीम" : "Theme"}</span>
                <button
                  onClick={toggleTheme}
                  className="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#123B2A] text-xs font-bold shadow-sm flex items-center gap-1.5 border border-black/5 dark:border-white/10"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="w-3.5 h-3.5 text-[#E28723]" />
                      <span>{t("themeLight")}</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-3.5 h-3.5 text-[#123B2A]" />
                      <span>{t("themeDark")}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Mobile Drawer Navigation Links */}
              <nav className="mt-4 flex flex-col gap-1.5">
                {[
                  ...navLinks,
                  { name: t("navNature"), href: "/nature" },
                  { name: t("navGetInvolved"), href: "/get-involved" },
                ].map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${
                        isActive
                          ? "bg-[#123B2A] dark:bg-[#1D5139] text-white font-bold shadow-sm"
                          : "text-[#17231C]/90 dark:text-[#F7F5EC]/90 hover:bg-[#6F8D58]/15 dark:hover:bg-white/10"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {link.href === "/art-store" && <Palette className="w-4 h-4 text-[#E28723]" />}
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
                {t("btnSupportMission")}
              </Link>
              <a
                href="tel:+917808008058"
                className="w-full py-2.5 rounded-full border border-[#123B2A] dark:border-white/30 text-[#123B2A] dark:text-white text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#123B2A]/5 dark:hover:bg-white/5"
              >
                <Phone className="w-3.5 h-3.5 text-[#E28723]" />
                {t("btnCallHelpline")}: +91 78080 08058
              </a>
              <a
                href="https://wa.me/917808008058"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#123B2A] dark:text-[#B8CBA5] text-xs font-medium flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>{t("btnWhatsAppSupport")}</span>
              </a>
              <a
                href="/admin"
                onClick={() => setIsOpen(false)}
                className="w-full py-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-[#123B2A] dark:text-[#B8CBA5] text-xs font-semibold flex items-center justify-center gap-2 border border-black/10 dark:border-white/15"
              >
                <Lock className="w-3.5 h-3.5 text-[#E28723]" />
                <span>{t("navAdmin")}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 5. UNIFIED MOBILE BOTTOM QUICK-ACTION BAR (Fixed on screen < 768px for immediate access without collisions) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#071F14]/98 backdrop-blur-lg border-t border-[#1D5139]/80 px-2 py-2 flex items-center justify-around gap-1.5 md:hidden shadow-2xl">
        {/* Call Helpline */}
        <a
          href="tel:+917808008058"
          className="flex-1 py-1.5 px-1 rounded-xl bg-[#0A2419] text-white text-[10px] font-semibold flex flex-col items-center justify-center gap-0.5 border border-white/10 active:scale-95 transition-transform"
          aria-label="Call Helpline 78080 08058"
        >
          <Phone className="w-4 h-4 text-[#E28723]" />
          <span className="leading-tight truncate max-w-full">{t("btnCall")}</span>
        </a>

        {/* WhatsApp Coordination */}
        <a
          href="https://wa.me/917808008058?text=Hello%20Jharkhandvasi%20Parivartan%20Sangh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-1.5 px-1 rounded-xl bg-[#0A2419] text-white text-[10px] font-semibold flex flex-col items-center justify-center gap-0.5 border border-[#25D366]/30 active:scale-95 transition-transform"
          aria-label="WhatsApp Coordination"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          <span className="leading-tight truncate max-w-full">{t("btnWhatsApp")}</span>
        </a>

        {/* Open Navigation Menu */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex-1 py-1.5 px-1 rounded-xl bg-white/10 hover:bg-white/15 text-white text-[10px] font-bold flex flex-col items-center justify-center gap-0.5 border border-white/15 active:scale-95 transition-transform"
          aria-label={isOpen ? t("navClose") : t("navMenu")}
        >
          {isOpen ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4 text-[#B8CBA5]" />}
          <span className="leading-tight truncate max-w-full">{isOpen ? t("navClose") : t("navMenu")}</span>
        </button>

        {/* Donate CTA Button */}
        <Link
          href="/donate"
          className="flex-1 py-1.5 px-1 rounded-xl bg-[#E28723] hover:bg-[#c97419] text-white text-[10px] font-bold flex flex-col items-center justify-center gap-0.5 shadow-md active:scale-95 transition-transform"
          aria-label="Donate"
        >
          <Heart className="w-4 h-4 fill-white text-white" />
          <span className="leading-tight truncate max-w-full">{t("btnDonate")}</span>
        </Link>
      </div>
    </>
  );
}
