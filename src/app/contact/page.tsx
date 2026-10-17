import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  ShieldAlert,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Building2,
  Globe,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact & Official Offices | Jharkhandvasi Parivartan Sangh",
  description:
    "Official contact coordinates for Jharkhandvasi Parivartan Sangh (JPS). Registered Head Office in Gorai-1 Borivali West, Mumbai, and Branch Office in Giridih, Jharkhand. 24/7 Helpline: +91 78080 08058 / +91 90222 88222.",
};

export default function ContactPage() {
  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. EDITORIAL PAGE HEADER */}
      <section className="bg-[#071F14] text-white pt-32 sm:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
        <Image
          src="/images/community-assembly.jpg"
          alt="Community assembly and support desk"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071F14] via-[#071F14]/80 to-black/60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge-pill bg-[#B8CBA5]/20 text-[#B8CBA5] border border-[#B8CBA5]/30">
                Official Offices & Helplines
              </span>
              <span className="text-xs text-[#E28723] font-semibold tracking-wider">
                Mumbai • Giridih
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              Get in Touch with <span className="italic text-[#B8CBA5]">Our Offices</span>
            </h1>
            <p className="text-sm sm:text-base text-[#F7F5EC]/85 font-light leading-relaxed">
              We operate a 24/7 emergency response network for migrant workers and families, alongside our registered central office in Borivali West, Mumbai and branch in Giridih, Jharkhand.
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#1D5139] rounded-full blur-3xl opacity-40 pointer-events-none" />
      </section>

      {/* 2. EMERGENCY ASSISTANCE HIGHLIGHT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#E28723] text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                24-Hour Emergency Intervention Protocol
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal">
              Facing Immediate Medical or Distress Crisis?
            </h3>
            <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed">
              For urgent hospital assistance, industrial trauma, or emergency travel coordination, please dial our dedicated emergency helpline directly.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+917808008058"
              className="px-6 py-3.5 rounded-full bg-[#123B2A] hover:bg-[#1D5139] text-white text-xs font-bold tracking-wide shadow transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#E28723]" />
              <span>Call +91 78080 08058</span>
            </a>
            <a
              href="https://wa.me/917808008058?text=Emergency%20Assistance%20Requested"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-semibold tracking-wide border border-white/30 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Helpline</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. CONTACT CHANNELS & FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Office Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="badge-pill bg-[#B8CBA5]/20 text-[#123B2A] mb-2">
                Official Locations
              </span>
              <h2 className="font-serif text-3xl font-normal text-[#123B2A]">
                Headquarters & Communications
              </h2>
            </div>

            <div className="space-y-4">
              {/* Registered Head Office (Mumbai) */}
              <div className="p-5 rounded-2xl bg-white border border-[#123B2A]/10 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E9F0E4] text-[#1D5139] flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#E28723] block">
                    Registered Head Office (Mumbai)
                  </span>
                  <h4 className="font-serif text-base font-semibold text-[#123B2A]">
                    Jharkhandvasi Parivartan Sangh
                  </h4>
                  <p className="text-xs text-[#17231C]/80 mt-1 leading-relaxed font-light">
                    32 Nalanda Society, Near Aastha Dairy, Galli No-1, Gorai-1, Borivali (West), Mumbai – 400091, Maharashtra.
                  </p>
                  <p className="text-[11px] text-[#795943] mt-1 font-medium">
                    Reg. No: E-30004/07/07/2013 MUMBAI
                  </p>
                </div>
              </div>

              {/* Branch Office (Giridih, Jharkhand) */}
              <div className="p-5 rounded-2xl bg-white border border-[#123B2A]/10 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E9F0E4] text-[#1D5139] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#1D5139] block">
                    Branch Office (Jharkhand)
                  </span>
                  <h4 className="font-serif text-base font-semibold text-[#123B2A]">
                    Giridih Coordination Center
                  </h4>
                  <p className="text-xs text-[#17231C]/80 mt-1 leading-relaxed font-light">
                    DK Traders, Buxidih Road, Near Burman Decorator, Giridih, Jharkhand – 815301.
                  </p>
                </div>
              </div>

              {/* Phone Helpline */}
              <div className="p-5 rounded-2xl bg-white border border-[#123B2A]/10 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E9F0E4] text-[#1D5139] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#123B2A]">
                    Helplines & Telephones
                  </h4>
                  <a
                    href="tel:+917808008058"
                    className="text-xs text-[#1D5139] font-bold block mt-1 hover:underline"
                  >
                    +91 78080 08058 (Primary Official Helpline)
                  </a>
                  <a
                    href="tel:+919022288222"
                    className="text-xs text-[#1D5139] font-semibold block mt-0.5 hover:underline"
                  >
                    +91 90222 88222 (24/7 Distress Desk)
                  </a>
                  <span className="text-[11px] text-[#795943] block mt-0.5">
                    Round the clock for medical, social & legal emergencies.
                  </span>
                </div>
              </div>

              {/* WhatsApp Support */}
              <div className="p-5 rounded-2xl bg-white border border-[#123B2A]/10 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E9F0E4] text-[#1D5139] flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#123B2A]">
                    WhatsApp Assistance
                  </h4>
                  <a
                    href="https://wa.me/917808008058"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#1D5139] font-bold block mt-1 hover:underline"
                  >
                    +91 78080 08058 (Chat directly)
                  </a>
                  <span className="text-[11px] text-[#795943] block mt-0.5">
                    Send incident documents, medical records, or location pins.
                  </span>
                </div>
              </div>

              {/* Email Addresses & Web */}
              <div className="p-5 rounded-2xl bg-white border border-[#123B2A]/10 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E9F0E4] text-[#1D5139] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#123B2A]">
                    Emails & Web Portal
                  </h4>
                  <a
                    href="mailto:jpsngo12@gmail.com"
                    className="text-xs text-[#1D5139] font-medium block mt-1 hover:underline"
                  >
                    jpsngo12@gmail.com
                  </a>
                  <a
                    href="mailto:info@jpsngo.org"
                    className="text-xs text-[#795943] block hover:underline"
                  >
                    info@jpsngo.org
                  </a>
                  <a
                    href="https://www.jpsngo.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#E28723] font-semibold block mt-1 hover:underline flex items-center gap-1"
                  >
                    <Globe className="w-3 h-3" />
                    <span>www.jpsngo.org</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Support Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#123B2A]/10 shadow-sm space-y-6">
            <div className="space-y-1">
              <span className="badge-pill bg-[#B8CBA5]/20 text-[#123B2A]">
                Direct Query Intake
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#123B2A]">
                Send an Online Message to Our Office
              </h3>
              <p className="text-xs text-[#17231C]/75 font-light">
                Fill in your details below. For urgent matters, our coordination desk will call or WhatsApp you directly.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
