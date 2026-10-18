"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Heart,
  ArrowUpRight,
  ShieldCheck,
  TreePine,
  ExternalLink,
  Palette,
  Send,
  CheckCircle2,
  ChevronUp,
  Lock,
} from "lucide-react";
import { useSiteContent } from "@/context/SiteContentContext";

export default function Footer() {
  const pathname = usePathname();
  const { content } = useSiteContent();
  const [newsletterEmail, setNewsletterEmail] = useState("");

  if (pathname?.startsWith("/admin")) {
    return null;
  }
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes("@")) {
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubscribed(true);
      setNewsletterEmail("");
    }, 700);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A2419] text-[#F7F5EC] pt-16 pb-24 md:pb-12 border-t border-[#1D5139]/50 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1D5139]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* 1. TOP IMPACT & CALL-TO-ACTION BANNER WITH ATMOSPHERIC BACKGROUND IMAGE */}
        <div className="relative rounded-3xl overflow-hidden mb-14 border border-[#B8CBA5]/20 shadow-2xl bg-[#05140D]">
          <Image
            src="/images/watershed-nature.jpg"
            alt="Nature and community solidarity in Jharkhand"
            fill
            className="object-cover object-center filter brightness-85"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          {/* Rich cinematic dark gradient overlays like homepage hero */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#05140D]/90 via-[#05140D]/65 to-[#05140D]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05140D] via-transparent to-black/50" />

          <div className="relative z-10 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-2">
              <span className="badge-pill bg-[#B8CBA5]/20 text-[#B8CBA5] border border-[#B8CBA5]/30 text-[10px]">
                Grassroots Solidarity • Mumbai & Jharkhand
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
                Together, We Turn Compassion Into <span className="italic text-[#B8CBA5]">Enduring Change.</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#F7F5EC]/85 font-light leading-relaxed">
                From emergency hospital advocacy for stranded migrant workers to elderly diagnostic health camps, child study kits, and traditional tribal art preservation.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <Link
                href="/donate"
                className="flex-1 sm:flex-initial px-6 py-3.5 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Support A Cause</span>
              </Link>
              <Link
                href="/art-store"
                className="flex-1 sm:flex-initial px-6 py-3.5 rounded-full bg-[#123B2A] hover:bg-[#1D5139] text-[#B8CBA5] hover:text-white text-xs sm:text-sm font-semibold tracking-wide transition-all border border-[#B8CBA5]/30 flex items-center justify-center gap-2"
              >
                <Palette className="w-4 h-4 text-[#E28723]" />
                <span>Art For Charity</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 2. MAIN 4-COLUMN FOOTER CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Organization Overview & Community Newsletter (4.5 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-2xl bg-white p-1 border border-[#B8CBA5]/30 shadow-md flex-shrink-0">
                <Image
                  src="/images/logo/jps-emblem.png"
                  alt="Jharkhandvasi Parivartan Sangh Official Emblem"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-white leading-tight">
                  झारखंडवासी परिवर्तन संघ
                </h4>
                <p className="text-[11px] text-[#E28723] font-bold tracking-wider mt-0.5">
                  एक जुर्रत... एक ज़रूरत
                </p>
                <p className="text-[10px] text-[#B8CBA5] font-medium tracking-wide">
                  JHARKHANDVASI PARIVARTAN SANGH
                </p>
              </div>
            </div>

            <p className="text-xs text-[#F7F5EC]/75 leading-relaxed font-light">
              Founded in 2013 under the leadership of Arvind Arya, Jharkhandvasi Parivartan Sangh (JPS) is a registered social welfare organization based in Borivali West, Mumbai. Dedicated to migrant worker protection, senior citizen healthcare, child education kits, and native forest conservation.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#B8CBA5] font-medium pt-1">
              <ShieldCheck className="w-4 h-4 text-[#E28723] flex-shrink-0" />
              <span>Registered Grassroots Social Welfare Organization</span>
            </div>

            {/* Grassroots Newsletter / Updates Subscription */}
            <div className="mt-2 p-4 rounded-2xl bg-[#123B2A]/60 border border-[#B8CBA5]/20 space-y-2.5">
              <span className="text-[11px] font-semibold text-[#B8CBA5] block">
                Stay Connected With Field Updates
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-[#B8CBA5] bg-[#1D5139]/60 p-2.5 rounded-xl border border-[#B8CBA5]/30">
                  <CheckCircle2 className="w-4 h-4 text-[#E28723]" />
                  <span>Thank you! You are subscribed to JPS community bulletins.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter email for updates..."
                    required
                    className="flex-1 px-3 py-2 text-xs rounded-xl bg-black/30 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-[#B8CBA5]"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-3.5 py-2 rounded-xl bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold transition-all flex items-center justify-center disabled:opacity-50"
                    aria-label="Subscribe to updates"
                  >
                    {isSubmitting ? "..." : <Send className="w-3.5 h-3.5" />}
                  </button>
                </form>
              )}
            </div>

            {/* Social channels */}
            <div className="pt-1 flex items-center gap-3">
              <a
                href="https://www.facebook.com/share/1EL6NNUDB8/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 text-xs text-[#B8CBA5] hover:text-white transition-colors border border-white/10 flex items-center gap-1.5"
                aria-label="Official Facebook Page"
              >
                <span>Facebook Community</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a
                href="https://wa.me/917808008058"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 text-xs text-white transition-colors border border-[#25D366]/40 flex items-center gap-1.5"
                aria-label="Official WhatsApp Helpline"
              >
                <span>WhatsApp Helpline</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (2.5 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h5 className="font-serif text-sm font-semibold text-white tracking-wider uppercase text-[#B8CBA5]">
              Quick Links
            </h5>
            <ul className="flex flex-col gap-2.5 text-xs text-[#F7F5EC]/80 font-light">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/our-work" className="hover:text-white transition-colors">Our Work & Programs</Link>
              </li>
              <li>
                <Link href="/art-store" className="hover:text-white transition-colors flex items-center gap-1.5 text-[#E28723] font-medium">
                  <Palette className="w-3.5 h-3.5" />
                  <span>Art for Charity</span>
                  <span className="px-1.5 py-0.2 rounded-full bg-[#E28723] text-white text-[9px] font-bold">New</span>
                </Link>
              </li>
              <li>
                <Link href="/nature" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Nature & Environment</span>
                  <TreePine className="w-3 h-3 text-[#B8CBA5]" />
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-white transition-colors">Impact & Stories</Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">Events & Gallery</Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">Resources & News</Link>
              </li>
              <li>
                <Link href="/get-involved" className="hover:text-white transition-colors">Get Involved (Volunteer)</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Causes (2.5 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h5 className="font-serif text-sm font-semibold text-white tracking-wider uppercase text-[#B8CBA5]">
              Core Programs
            </h5>
            <ul className="flex flex-col gap-2.5 text-xs text-[#F7F5EC]/80 font-light">
              <li>
                <Link href="/our-work#migrants" className="hover:text-white transition-colors">
                  Migrant Crisis Support & Hospital Aid
                </Link>
              </li>
              <li>
                <Link href="/our-work#seniors" className="hover:text-white transition-colors">
                  Senior Citizen Health & Geriatric Care
                </Link>
              </li>
              <li>
                <Link href="/our-work#education" className="hover:text-white transition-colors">
                  Child Protection & Education Kits
                </Link>
              </li>
              <li>
                <Link href="/our-work#health" className="hover:text-white transition-colors">
                  Free Medical & Diagnostic Health Camps
                </Link>
              </li>
              <li>
                <Link href="/our-work#women" className="hover:text-white transition-colors">
                  Women & Family Welfare Relief
                </Link>
              </li>
              <li>
                <Link href="/our-work#culture" className="hover:text-white transition-colors">
                  Tribal Heritage & Martyr Tributes
                </Link>
              </li>
              <li>
                <Link href="/nature#reforestation" className="hover:text-white transition-colors">
                  Native Sal Reforestation & Sapling Drives
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact & Helpline (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h5 className="font-serif text-sm font-semibold text-white tracking-wider uppercase text-[#B8CBA5]">
              Contact &amp; Official Offices
            </h5>
            <div className="flex flex-col gap-3.5 text-xs text-[#F7F5EC]/80 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E28723] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">
                    {content.organization.offices[0]?.title || "Registered Head Office (Mumbai)"}:
                  </strong>
                  <span>
                    {content.organization.offices[0]?.address ||
                      "32 Nalanda Society, Near Aastha Dairy, Galli No-1, Gorai-1, Borivali (West), Mumbai-400091"}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B8CBA5] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">
                    {content.organization.offices[1]?.title || "Branch Office (Giridih)"}:
                  </strong>
                  <span>
                    {content.organization.offices[1]?.address ||
                      "DK Traders, Buxidih Road, Near Burman Decorator, Giridih, Jharkhand - 815301"}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#E28723] flex-shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${content.organization.primaryPhone}`} className="text-white font-bold hover:text-[#B8CBA5] block">
                    {content.organization.primaryPhone}
                  </a>
                  <a href={`tel:${content.organization.secondaryPhone}`} className="text-[#F7F5EC]/90 text-[11px] hover:text-white block">
                    Alt Helpline: {content.organization.secondaryPhone}
                  </a>
                  <span className="text-[10px] text-[#B8CBA5]">24/7 Registered Community &amp; Crisis Helpline</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#E28723] flex-shrink-0 mt-0.5" />
                <div>
                  <a href={`mailto:${content.organization.email}`} className="hover:text-white block">
                    {content.organization.email}
                  </a>
                  <a href={`mailto:${content.organization.alternateEmail}`} className="hover:text-white block text-[11px] text-[#B8CBA5]">
                    {content.organization.alternateEmail}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-2 pt-3 border-t border-white/10 space-y-1.5 text-[11px] text-[#B8CBA5]/90">
              <div className="flex items-center gap-1.5 text-white font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E28723]" />
                <span>Reg. No: {content.organization.regNo}</span>
              </div>
              <div className="text-[10px] text-[#F7F5EC]/70">
                80G: {content.organization.bankDetails.taxExemption} | PAN: {content.organization.bankDetails.pan}
              </div>
              <div>
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#E28723] hover:underline mt-1"
                >
                  <span>Bank &amp; 80G Tax Exemption Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 3. BOTTOM STRIP WITH BACK-TO-TOP & ADMIN PORTAL LINK */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F5EC]/60 font-light">
          <div>
            © 2005–2026 {content.organization.hindiName} (रजि.) | {content.organization.tagline}
          </div>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <Link href="/about" className="hover:text-white transition-colors">Founding Story</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Emergency Redressal</Link>
            <Link href="/donate" className="hover:text-white transition-colors">Financial Transparency</Link>
            <Link
              href="/admin"
              className="inline-flex items-center gap-1.5 text-[#E28723] hover:text-[#f39c38] font-semibold transition-colors px-2.5 py-0.5 rounded-full bg-white/5 border border-[#E28723]/30"
              title="Manage website content, photos, and addresses"
            >
              <Lock className="w-3 h-3" />
              <span>Admin Portal</span>
            </Link>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#B8CBA5] hover:text-white transition-colors ml-2"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
