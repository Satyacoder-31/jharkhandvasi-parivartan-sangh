"use client";

import React, { useState } from "react";
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
  Check,
} from "lucide-react";
import DonationCalculator from "@/components/DonationCalculator";
import { useSiteContent } from "@/context/SiteContentContext";
import { useLanguage } from "@/context/LanguageContext";

export default function DonateContent() {
  const { content } = useSiteContent();
  const { language, t } = useLanguage();
  const organization = content.organization;
  const bankDetails = organization.bankDetails;
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const transparencyPoints = [
    {
      title: language === "hi" ? "100% प्रत्यक्ष जमीनी उपयोग" : "100% Direct Field Utilization",
      desc: language === "hi"
        ? "हर रुपया सीधे निःशुल्क दवा, नेत्र शिविर, बच्चों की शिक्षा किट, प्रवासी श्रमिक अस्पताल सहायता और झारखंड में देशी पौधरोपण में उपयोग होता है।"
        : "Every rupee directly funds free medicines and diagnostic eye camps, school kits for children, emergency worker hospital aid, and native saplings in Jharkhand.",
    },
    {
      title: language === "hi" ? "धारा 80G आयकर छूट" : "Section 80G Tax Exemption",
      desc: language === "hi"
        ? `भारतीय आयकर अधिनियम की धारा 80G (${bankDetails.taxExemption || "80G: AABTJ8020A24MB02"}) के तहत सभी योगदानों पर 50% कर छूट प्राप्त है।`
        : `All contributions are eligible for 50% tax deduction under Section 80G of the Indian Income Tax Act (${bankDetails.taxExemption || "80G: AABTJ8020A24MB02"}).`,
    },
    {
      title: language === "hi" ? "नीति आयोग दर्पण मान्यता प्राप्त" : "NITI Aayog Darpan Accredited",
      desc: language === "hi"
        ? "भारत सरकार के नीति आयोग एनजीओ दर्पण पोर्टल पर विशिष्ट आईडी MH/2022/0329647/22-11-2022 के तहत विधिवत पंजीकृत।"
        : "Formally registered on the Government of India NITI Aayog NGO Darpan portal under unique ID MH/2022/0329647/22-11-2022.",
    },
    {
      title: language === "hi" ? "सत्यापित बैंकिंग प्रक्रिया" : "Verified Banking Protocol",
      desc: language === "hi"
        ? `सभी दान केवल संस्था के आधिकारिक ${bankDetails.bankName || "बैंक ऑफ इंडिया"} सार्वजनिक ट्रस्ट खाते में प्राप्त किए जाते हैं।`
        : `Official donations are received exclusively in our designated ${bankDetails.bankName || "Bank of India"} public trust account, eliminating commercial middle-men.`,
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-24 overflow-x-hidden w-full max-w-full">
      {/* 1. EDITORIAL PAGE HEADER */}
      <section className="bg-[#05140D] text-white pt-32 sm:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
        <Image
          src="/images/women-empowerment.jpg"
          alt="Empowerment and humanitarian care in Jharkhand"
          fill
          priority
          className="object-cover object-center filter brightness-85"
          sizes="100vw"
        />
        {/* Rich cinematic dark gradient overlays like homepage hero */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05140D]/90 via-[#05140D]/65 to-[#05140D]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05140D] via-transparent to-black/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge-pill bg-[#B8CBA5]/20 text-[#B8CBA5] border border-[#B8CBA5]/30">
                {language === "hi" ? "आधिकारिक सहयोग पोर्टल" : "Official Donation Portal"}
              </span>
              <span className="text-xs text-[#E28723] font-semibold tracking-wider">
                {bankDetails.taxExemption || "80G: AABTJ8020A24MB02"}
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              {language === "hi" ? t("donateHeadline") : <>Giving with <span className="italic text-[#B8CBA5]">Integrity</span> and Legal Transparency</>}
            </h1>
            <p className="text-sm sm:text-base text-[#F7F5EC]/85 font-light leading-relaxed">
              {language === "hi" ? t("donateSubheadline") : "Your contribution funds free eye checkups & spectacles, emergency hospital care for migrant laborers, school kits for underprivileged children, and reforestation in Jharkhand."}
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#1D5139] rounded-full blur-3xl opacity-40 pointer-events-none" />
      </section>

      {/* 2. OFFICIAL BANK ACCOUNT COORDINATES (DYNAMIC FROM CMS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-[#123B2A] to-[#0A2419] text-white rounded-3xl p-8 sm:p-12 border border-[#B8CBA5]/25 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1D5139]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3.5">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-1.5 border border-white/30 shadow-lg flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/images/logo/jps-logo-full.png"
                    alt="Jharkhandvasi Parivartan Sangh Official Logo with Slogan"
                    width={80}
                    height={72}
                    unoptimized
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="badge-pill bg-[#E28723] text-white text-[10px] uppercase font-bold tracking-wider">
                    {language === "hi" ? "सत्यापित ट्रस्ट खाता" : "Verified Trust Account"}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-normal mt-1">
                    {language === "hi" ? t("donateBankTitle") : "Official Bank Coordinates & Tax Exemption"}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#F7F5EC]/80 font-light mt-0.5">
                    {language === "hi" ? "एनईएफटी, आरटीजीएस, आईएमपीएस एवं यूपीआई विवरण • ध्येय वाक्य: " : "Electronic NEFT, RTGS, IMPS & UPI Transfer Details • Motto: "}
                    <strong className="text-[#E28723]">एक जुर्रत... एक ज़रूरत</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs bg-white/10 px-4 py-2 rounded-full border border-white/15 w-fit">
                <ShieldCheck className="w-4 h-4 text-[#E28723]" />
                <span>{language === "hi" ? t("donateTaxExemption") : "80G Tax Deductible (50%)"}</span>
              </div>
            </div>

            {/* Official Bank of India UPI QR Card */}
            <div className="bg-white/10 border border-white/20 p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 sm:gap-8 shadow-2xl backdrop-blur-md">
              <div className="relative w-48 h-64 sm:w-56 sm:h-72 rounded-2xl overflow-hidden bg-white p-2 shadow-2xl flex-shrink-0 border-2 border-[#E28723]">
                <Image
                  src="/images/jps-official-upi-qr.jpg"
                  alt="Official Bank of India (BOI) UPI QR Code - Jharkhandvasi Parivartan Sangh"
                  fill
                  className="object-contain p-1"
                  sizes="(max-width: 640px) 192px, 224px"
                  priority
                />
              </div>
              <div className="space-y-3 text-center md:text-left flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E28723]/20 border border-[#E28723]/30 text-[#E28723] text-xs font-semibold">
                  <QrCode className="w-4 h-4" />
                  <span>{language === "hi" ? "आधिकारिक यूपीआई स्कैन एवं भुगतान" : "Official UPI Instant Scan & Pay"}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {language === "hi" ? "बैंक ऑफ़ इंडिया आधिकारिक यूपीआई क्यूआर" : "Bank of India (BOI) Official UPI QR"}
                </h3>
                <p className="text-xs sm:text-sm text-[#F7F5EC]/85 font-light leading-relaxed max-w-2xl">
                  {language === "hi"
                    ? "GPay, PhonePe, Paytm, BHIM या किसी भी बैंकिंग ऐप से सीधे स्कैन करें। सभी अंशदान धारा 80G के तहत 50% कर कटौती के पात्र हैं।"
                    : "Scan instantly with Google Pay, PhonePe, Paytm, BHIM or any UPI banking app. 100% direct contribution to registered trust programs with 80G tax exemption."}
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-2 text-[11px] text-[#B8CBA5]">
                  <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">BOI A/C: 013610110004678</span>
                  <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">IFSC: BKID0000136</span>
                  <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">Trust Reg: E-30004/MUMBAI</span>
                </div>
              </div>
            </div>

            {/* Bank Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-[#B8CBA5] font-semibold block">
                  Beneficiary Name
                </span>
                <h4 className="font-serif text-base font-bold text-white">
                  {organization.name || "Jharkhandvasi Parivartan Sangh"}
                </h4>
                <p className="text-[11px] text-[#F7F5EC]/60">Registered Public Charitable Trust</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-[#B8CBA5] font-semibold block">
                  Bank Name
                </span>
                <h4 className="font-serif text-base font-bold text-white">
                  {bankDetails.bankName || "Bank of India (BOI), Mahavirnagar Charkop"}
                </h4>
                <p className="text-[11px] text-[#F7F5EC]/60">Current Trust Account</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-1 relative group">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-[#B8CBA5] font-semibold block">
                    Account Number
                  </span>
                  <button
                    onClick={() => copyToClipboard(bankDetails.accountNumber, "acc")}
                    className="text-[10px] text-[#E28723] hover:text-white flex items-center gap-1"
                    title="Copy Account Number"
                  >
                    {copiedField === "acc" ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <h4 className="font-mono text-lg font-bold text-[#E28723] tracking-wider select-all">
                  {bankDetails.accountNumber || "013610110004678"}
                </h4>
                <p className="text-[11px] text-[#F7F5EC]/60">Verified Trust Account</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-[#B8CBA5] font-semibold block">
                    IFSC Code
                  </span>
                  <button
                    onClick={() => copyToClipboard(bankDetails.ifsc, "ifsc")}
                    className="text-[10px] text-[#E28723] hover:text-white flex items-center gap-1"
                    title="Copy IFSC Code"
                  >
                    {copiedField === "ifsc" ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <h4 className="font-mono text-base font-bold text-white tracking-wider select-all">
                  {bankDetails.ifsc || "BKID0000136"}
                </h4>
                <p className="text-[11px] text-[#F7F5EC]/60">Bank of India, Charkop Branch</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-[#B8CBA5] font-semibold block">
                  PAN Card Number
                </span>
                <h4 className="font-mono text-base font-bold text-white tracking-wider select-all">
                  {bankDetails.pan || "AABTJ8020A"}
                </h4>
                <p className="text-[11px] text-[#F7F5EC]/60">Permanent Account Number</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-[#B8CBA5] font-semibold block">
                  Section 80G Registration
                </span>
                <h4 className="font-mono text-sm font-bold text-[#B8CBA5] tracking-wider select-all">
                  {bankDetails.taxExemption || "80G: AABTJ8020A24MB02"}
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
                  <strong>Trust Registration:</strong> {organization.regNo || "E-30004/07/07/2013 MUMBAI MAHARASHTRA"}
                </div>
              </div>

              <a
                href={`tel:${organization.primaryPhone || "+917808008058"}`}
                className="px-5 py-2.5 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white font-bold text-xs flex items-center gap-2 shadow flex-shrink-0"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Donor Desk: {organization.primaryPhone || "78080 08058"}</span>
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
              {language === "hi" ? "हमारे कार्यालय से सीधा संपर्क" : "Direct Contact With Our Office"}
            </span>
            <h3 className="font-serif text-2xl font-normal">
              {language === "hi"
                ? "सीएसआर, सामग्री सहयोग अथवा 80G रसीद संबंधी कोई प्रश्न?"
                : "Questions Regarding CSR, In-Kind Kits or 80G Receipts?"}
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F5EC]/80 font-light">
              {language === "hi"
                ? "हम कॉर्पोरेट सीएसआर साझेदारी, स्वास्थ्य शिविरों के प्रायोजन और बच्चों के लिए नए स्कूल बैग व पठन सामग्री के सहयोग का स्वागत करते हैं।"
                : "We welcome CSR collaborations, corporate sponsorship for medical camps, and in-kind donations of unopened school bags, notebooks, and diagnostic supplies."}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${organization.primaryPhone || "+917808008058"}`}
              className="px-6 py-3.5 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold tracking-wide shadow transition-all flex items-center gap-2 flex-shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>{language === "hi" ? "हेल्पलाइन:" : "Helpline:"} {organization.primaryPhone || "+91 78080 08058"}</span>
            </a>
            <a
              href={`tel:${organization.secondaryPhone || "+919022288222"}`}
              className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wide border border-white/20 transition-all flex items-center gap-2 flex-shrink-0"
            >
              <span>{organization.secondaryPhone || "+91 90222 88222"}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
