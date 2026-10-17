import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ShieldCheck,
  CheckCircle2,
  Phone,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  Building2,
  FileText,
  CreditCard,
  QrCode,
  Copy,
} from "lucide-react";
import DonationCalculator from "@/components/DonationCalculator";

export const metadata = {
  title: "Donate & 80G Tax Exemption | Jharkhandvasi Parivartan Sangh",
  description:
    "Support the grassroots welfare work of Jharkhandvasi Parivartan Sangh (JPS). Verified Bank of India account coordinates, Section 80G tax exemption (AABTJ8020A24MB02), and NITI Aayog registration (MH/2022/0329647).",
};

const transparencyPoints = [
  {
    title: "100% Direct Field Utilization",
    desc: "Every rupee directly funds free medicines and diagnostic eye camps, school kits for children, emergency worker hospital aid, and native saplings in Jharkhand.",
  },
  {
    title: "Section 80G Tax Exemption",
    desc: "All contributions are eligible for 50% tax deduction under Section 80G of the Indian Income Tax Act (Reg. No. AABTJ8020A24MB02).",
  },
  {
    title: "NITI Aayog Darpan Accredited",
    desc: "Formally registered on the Government of India NITI Aayog NGO Darpan portal under unique ID MH/2022/0329647/22-11-2022.",
  },
  {
    title: "Verified Banking Protocol",
    desc: "Official donations are received exclusively in our designated Bank of India public trust account, eliminating commercial middle-men.",
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
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge-pill bg-[#B8CBA5]/20 text-[#B8CBA5] border border-[#B8CBA5]/30">
                Official Donation Portal
              </span>
              <span className="text-xs text-[#E28723] font-semibold tracking-wider">
                80G: AABTJ8020A24MB02
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              Giving with <span className="italic text-[#B8CBA5]">Integrity</span> and Legal Transparency
            </h1>
            <p className="text-sm sm:text-base text-[#F7F5EC]/85 font-light leading-relaxed">
              Your contribution funds free eye checkups & spectacles, emergency hospital care for migrant laborers, school kits for underprivileged children, and reforestation in Jharkhand.
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#1D5139] rounded-full blur-3xl opacity-40 pointer-events-none" />
      </section>

      {/* 2. OFFICIAL BANK ACCOUNT COORDINATES (FROM BROCHURE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-[#123B2A] to-[#0A2419] text-white rounded-3xl p-8 sm:p-12 border border-[#B8CBA5]/25 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1D5139]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="badge-pill bg-[#E28723] text-white text-[10px] uppercase font-bold tracking-wider">
                  Verified Trust Account
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal mt-2">
                  Official Bank Coordinates & Tax Exemption
                </h2>
                <p className="text-xs sm:text-sm text-[#F7F5EC]/80 font-light mt-1">
                  Electronic NEFT, RTGS, IMPS & UPI Transfer Details
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs bg-white/10 px-4 py-2 rounded-full border border-white/15 w-fit">
                <ShieldCheck className="w-4 h-4 text-[#E28723]" />
                <span>80G Tax Deductible (50%)</span>
              </div>
            </div>

            {/* Bank Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-[#B8CBA5] font-semibold block">
                  Beneficiary Name
                </span>
                <h4 className="font-serif text-base font-bold text-white">
                  Jharkhandvasi Parivartan Sangh
                </h4>
                <p className="text-[11px] text-[#F7F5EC]/60">Registered Public Charitable Trust</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-[#B8CBA5] font-semibold block">
                  Bank Name
                </span>
                <h4 className="font-serif text-base font-bold text-white">
                  Bank of India (BOI)
                </h4>
                <p className="text-[11px] text-[#F7F5EC]/60">Mahavirnagar, Charkop Branch</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-[#B8CBA5] font-semibold block">
                  Account Number
                </span>
                <h4 className="font-mono text-lg font-bold text-[#E28723] tracking-wider select-all">
                  013610110004678
                </h4>
                <p className="text-[11px] text-[#F7F5EC]/60">Current Trust Account</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-[#B8CBA5] font-semibold block">
                  IFSC Code
                </span>
                <h4 className="font-mono text-base font-bold text-white tracking-wider select-all">
                  BKID0000136
                </h4>
                <p className="text-[11px] text-[#F7F5EC]/60">Bank of India, Charkop</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-[#B8CBA5] font-semibold block">
                  PAN Card Number
                </span>
                <h4 className="font-mono text-base font-bold text-white tracking-wider select-all">
                  AABTJ8020A
                </h4>
                <p className="text-[11px] text-[#F7F5EC]/60">Permanent Account Number</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-[#B8CBA5] font-semibold block">
                  Section 80G Registration
                </span>
                <h4 className="font-mono text-sm font-bold text-[#B8CBA5] tracking-wider select-all">
                  AABTJ8020A24MB02
                </h4>
                <p className="text-[11px] text-[#F7F5EC]/60">Income Tax Department Exemption</p>
              </div>
            </div>

            {/* Statutory strip */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
              <div className="space-y-1">
                <div className="text-[#B8CBA5] font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E28723]" />
                  <span><strong>NITI Aayog Darpan Unique ID:</strong> MH/2022/0329647/22-11-2022</span>
                </div>
                <div className="text-[#F7F5EC]/70 text-[11px]">
                  <strong>Trust Registration:</strong> E-30004/07/07/2013 MUMBAI MAHARASHTRA
                </div>
              </div>

              <a
                href="tel:+917808008058"
                className="px-5 py-2.5 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white font-bold text-xs flex items-center gap-2 shadow flex-shrink-0"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Donor Desk: 78080 08058</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRANSPARENCY PRINCIPLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {transparencyPoints.map((pt, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-3xl border border-[#123B2A]/10 shadow-sm space-y-2 hover:shadow-md transition-shadow"
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

      {/* 4. INTERACTIVE DONATION CALCULATOR & PLEDGE FLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <DonationCalculator />
      </section>

      {/* 5. VERIFICATION HOTLINE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#1D5139] text-white rounded-3xl p-8 sm:p-12 border border-[#B8CBA5]/25 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#B8CBA5] font-bold">
              Direct Contact With Our Office
            </span>
            <h3 className="font-serif text-2xl font-normal">
              Questions Regarding CSR, In-Kind Kits or 80G Receipts?
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F5EC]/80 font-light">
              We welcome CSR collaborations, corporate sponsorship for medical camps, and in-kind donations of unopened school bags, notebooks, and diagnostic supplies.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+917808008058"
              className="px-6 py-3.5 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold tracking-wide shadow transition-all flex items-center gap-2 flex-shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>Helpline: +91 78080 08058</span>
            </a>
            <a
              href="tel:+919022288222"
              className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wide border border-white/20 transition-all flex items-center gap-2 flex-shrink-0"
            >
              <span>+91 90222 88222</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
