import Image from "next/image";
import Link from "next/link";
import { Heart, ShieldCheck, CheckCircle2, Phone, AlertTriangle, HelpCircle, ArrowRight } from "lucide-react";
import DonationCalculator from "@/components/DonationCalculator";

export const metadata = {
  title: "Donate & Transparency | Jharkhandvasi Parivartan Sangh",
  description:
    "Support the grassroots welfare work of Jharkhandvasi Parivartan Sangh with complete financial transparency, verified contribution pathways, and zero commercial intermediaries.",
};

const transparencyPoints = [
  {
    title: "Direct Field Utilization",
    desc: "Every rupee directly funds diagnostic supplies, school bags, notebooks, and emergency food relief for families in genuine distress.",
  },
  {
    title: "Verified Account Protocol",
    desc: "To prevent fraudulent intermediaries, official banking coordinates are provided exclusively through confirmed organization representatives.",
  },
  {
    title: "Donor Communication & Updates",
    desc: "Supporters receive direct visual updates and documentation regarding the camps, student drives, and relief interventions they make possible.",
  },
  {
    title: "Ethical Integrity & Dignity",
    desc: "We never exploit the faces of distressed beneficiaries for sensational marketing or fabricated statistical claims.",
  },
];

export default function DonatePage() {
  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. EDITORIAL PAGE HEADER */}
      <section className="bg-[#071F14] text-white pt-32 sm:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
        <Image
          src="/images/women-empowerment.jpg"
          alt="Empowerment and humanitarian care in Jharkhand"
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071F14] via-[#071F14]/75 to-black/40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="badge-pill bg-[#B8CBA5]/20 text-[#B8CBA5] border border-[#B8CBA5]/30">
              Responsible Giving
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              Giving with <span className="italic text-[#B8CBA5]">Integrity</span> and Purpose
            </h1>
            <p className="text-sm sm:text-base text-[#F7F5EC]/85 font-light leading-relaxed">
              Your contribution funds real medicine for elders, school kits for children, emergency relief for stranded workers, and saplings for Jharkhand's native soil.
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#1D5139] rounded-full blur-3xl opacity-40 pointer-events-none" />
      </section>

      {/* 2. TRANSPARENCY PRINCIPLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {transparencyPoints.map((pt, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-3xl border border-[#123B2A]/10 shadow-sm space-y-2"
            >
              <ShieldCheck className="w-6 h-6 text-[#1D5139]" />
              <h3 className="font-serif text-base font-bold text-[#123B2A]">
                {pt.title}
              </h3>
              <p className="text-xs text-[#17231C]/75 font-light leading-relaxed">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE DONATION CALCULATOR & PLEDGE FLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <DonationCalculator />
      </section>

      {/* 4. VERIFICATION HOTLINE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#1D5139] text-white rounded-3xl p-8 sm:p-12 border border-[#B8CBA5]/25 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#B8CBA5] font-bold">
              Speak Directly with Our Office
            </span>
            <h3 className="font-serif text-2xl font-normal">
              Questions Regarding Contributions or Large In-Kind Drives?
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F5EC]/80 font-light">
              We welcome in-kind donations of unopened stationery, school bags, non-perishable ration grains, and medical diagnostic test strips.
            </p>
          </div>
          <a
            href="tel:+919022288222"
            className="px-6 py-3 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold tracking-wide shadow transition-all flex items-center gap-2 flex-shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Call Desk: +91 90222 88222</span>
          </a>
        </div>
      </section>
    </div>
  );
}
