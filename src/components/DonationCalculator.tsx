"use client";

import { useState } from "react";
import { Heart, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight, Info, HelpCircle } from "lucide-react";

interface Tier {
  amount: number;
  label: string;
  impact: string;
}

const tiers: Tier[] = [
  {
    amount: 500,
    label: "₹500",
    impact: "Provides emergency dry ration kit and essential food supplies for a distressed migrant family.",
  },
  {
    amount: 1500,
    label: "₹1,500",
    impact: "Sponsors complete Shiksha Protsahan study kits (notebooks, bags, stationery) for 3 underprivileged school children.",
  },
  {
    amount: 3500,
    label: "₹3,500",
    impact: "Covers free diagnostic blood sugar tests, vitals checkup, and doctor-prescribed medicines for elderly patients in Borivali.",
  },
  {
    amount: 5000,
    label: "₹5,000",
    impact: "Funds community nursery cultivation and planting care for 25 native Sal, Mahua, and Neem tree saplings.",
  },
];

export default function DonationCalculator() {
  const [selectedAmount, setSelectedAmount] = useState<number>(1500);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [selectedCause, setSelectedCause] = useState<string>("All Community Causes");
  const [donorName, setDonorName] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [isPledging, setIsPledging] = useState(false);
  const [pledgeComplete, setPledgeComplete] = useState(false);
  const [pledgeToken, setPledgeToken] = useState("");

  const currentAmount = customAmount ? parseInt(customAmount) || 0 : selectedAmount;

  const currentImpact = tiers.find((t) => t.amount === selectedAmount)?.impact ||
    `Your generous contribution of ₹${currentAmount.toLocaleString()} directly funds essential grassroots social welfare and community relief across Mumbai and Jharkhand.`;

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName.trim() || !donorPhone.trim()) {
      alert("Please provide your name and phone number to record your pledge.");
      return;
    }

    setIsPledging(true);
    setTimeout(() => {
      setIsPledging(false);
      setPledgeComplete(true);
      setPledgeToken(`JPS-PLG-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1000);
  };

  return (
    <div className="space-y-12">
      {/* Interactive Contribution Selector */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#123B2A]/10 shadow-xl max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="badge-pill bg-[#B8CBA5]/20 text-[#123B2A] mb-3">
            Suggested Contribution Tiers
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#123B2A]">
            Transparent Impact Calculator
          </h3>
          <p className="text-xs sm:text-sm text-[#795943] mt-1 font-light">
            Every contribution directly supports real people and community interventions. Choose a suggested tier or specify a custom pledge.
          </p>
        </div>

        {/* Cause Pillar Selection */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-[#123B2A] mb-2 uppercase tracking-wider">
            Choose Purpose Allocation:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              "All Community Causes",
              "Migrant Crisis Aid",
              "Child Literacy Kits",
              "Senior Health Camps",
              "Tree Planting & Ecology",
            ].map((cause) => (
              <button
                key={cause}
                type="button"
                onClick={() => setSelectedCause(cause)}
                className={`p-2.5 rounded-xl text-xs font-medium text-left border transition-all ${
                  selectedCause === cause
                    ? "bg-[#123B2A] text-white border-[#123B2A] shadow-sm"
                    : "bg-[#F7F5EC] text-[#17231C]/80 border-[#123B2A]/10 hover:bg-[#6F8D58]/10"
                }`}
              >
                {cause}
              </button>
            ))}
          </div>
        </div>

        {/* Suggested Amount Buttons */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-[#123B2A] mb-2 uppercase tracking-wider">
            Select Suggested Contribution (INR):
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {tiers.map((t) => {
              const isSelected = selectedAmount === t.amount && !customAmount;
              return (
                <button
                  key={t.amount}
                  type="button"
                  onClick={() => {
                    setSelectedAmount(t.amount);
                    setCustomAmount("");
                  }}
                  className={`p-4 rounded-2xl border text-center transition-all ${
                    isSelected
                      ? "bg-[#1D5139] text-white border-[#1D5139] shadow-md scale-102"
                      : "bg-[#FDFCF9] text-[#123B2A] border-[#123B2A]/15 hover:border-[#1D5139]/40"
                  }`}
                >
                  <span className="font-serif text-xl sm:text-2xl font-bold block">
                    {t.label}
                  </span>
                  <span className="text-[10px] text-[#B8CBA5] block mt-0.5">
                    Suggested Tier
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Custom Amount Input */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-[#123B2A] mb-1">
            Or Specify Custom Amount (INR):
          </label>
          <div className="relative max-w-xs">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-[#123B2A]">
              ₹
            </span>
            <input
              type="number"
              placeholder="e.g. 2500"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-[#123B2A]/20 bg-[#FDFCF9] text-sm font-bold text-[#123B2A] focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
            />
          </div>
        </div>

        {/* Live Dynamic Impact Explanation Box */}
        <div className="p-5 rounded-2xl bg-[#E9F0E4] dark:bg-[#06180F] border border-[#6F8D58]/40 dark:border-[#B8CBA5]/30 text-[#123B2A] dark:text-[#F7F5EC] flex items-start gap-3 mb-8 shadow-sm">
          <Info className="w-5 h-5 text-[#1D5139] dark:text-[#B8CBA5] flex-shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-[#1D5139] dark:text-[#B8CBA5] uppercase tracking-wider block">
              Estimated Impact For ₹{currentAmount.toLocaleString()} ({selectedCause})
            </span>
            <p className="text-xs sm:text-sm text-[#123B2A] dark:text-[#F7F5EC] mt-1.5 leading-relaxed font-medium">
              {currentImpact}
            </p>
          </div>
        </div>

        {/* Pledge vs Payment Transparency Notice */}
        <div className="p-4 rounded-2xl bg-[#FFF8EE] dark:bg-[#1C1207] border border-[#E28723]/40 dark:border-[#E28723]/50 text-xs text-[#533D2E] dark:text-[#F7F5EC]/95 flex items-start gap-2.5 mb-8 shadow-sm">
          <AlertTriangle className="w-4 h-4 text-[#E28723] flex-shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-[#123B2A] dark:text-[#E28723] font-bold">Verification & Anti-Fraud Notice:</strong>{" "}
            <span>
              JPS requires direct verification before receiving monetary donations. We do not process untracked third-party web gateways without authorized representative confirmation. Recording a pledge registers your generous intent; an authorized representative will provide official verified bank account details.
            </span>
          </div>
        </div>

        {/* Pledge Registration Form */}
        {pledgeComplete ? (
          <div className="p-6 rounded-2xl bg-[#123B2A] text-white text-center space-y-3 animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-[#1D5139] text-[#B8CBA5] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7 text-[#B8CBA5]" />
            </div>
            <h4 className="font-serif text-xl font-normal text-white">
              Donation Pledge Recorded!
            </h4>
            <p className="text-xs text-[#F7F5EC]/80 max-w-md mx-auto font-light leading-relaxed">
              Thank you, <strong>{donorName}</strong>. Your pledge of ₹{currentAmount.toLocaleString()} for <em>{selectedCause}</em> has been registered with reference <strong>{pledgeToken}</strong>.
            </p>
            <div className="p-4 bg-white/10 rounded-2xl text-xs max-w-lg mx-auto text-[#B8CBA5] space-y-1.5 text-left border border-white/15">
              <div className="font-bold text-white uppercase text-[11px] tracking-wider">
                Official Bank Transfer Coordinates:
              </div>
              <div className="text-white text-xs">
                <strong>Bank:</strong> Bank of India (BOI), Mahavirnagar Charkop
              </div>
              <div className="text-[#E28723] font-mono font-bold text-sm">
                A/C: 013610110004678 • IFSC: BKID0000136
              </div>
              <div className="text-[11px] text-[#F7F5EC]/80">
                80G: AABTJ8020A24MB02 | PAN: AABTJ8020A
              </div>
              <div className="text-[11px] text-[#B8CBA5] pt-1">
                Share payment screenshot or query to Helpline: <strong className="text-white">+91 78080 08058</strong> / <strong className="text-white">+91 90222 88222</strong>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handlePledgeSubmit} className="space-y-4 pt-4 border-t border-[#123B2A]/10 dark:border-white/10">
            <h4 className="text-xs font-bold text-[#123B2A] dark:text-[#B8CBA5] uppercase tracking-wider">
              Record Your Contribution Pledge:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                placeholder="Your Full Name *"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                required
                className="px-4 py-2.5 rounded-xl border border-[#123B2A]/20 dark:border-[#B8CBA5]/30 bg-[#FDFCF9] dark:bg-[#071F14] text-[#17231C] dark:text-[#F7F5EC] placeholder:text-[#17231C]/50 dark:placeholder:text-[#F7F5EC]/40 text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Mobile / WhatsApp *"
                value={donorPhone}
                onChange={(e) => setDonorPhone(e.target.value)}
                required
                className="px-4 py-2.5 rounded-xl border border-[#123B2A]/20 dark:border-[#B8CBA5]/30 bg-[#FDFCF9] dark:bg-[#071F14] text-[#17231C] dark:text-[#F7F5EC] placeholder:text-[#17231C]/50 dark:placeholder:text-[#F7F5EC]/40 text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address (Optional)"
                value={donorEmail}
                onChange={(e) => setDonorEmail(e.target.value)}
                className="px-4 py-2.5 rounded-xl border border-[#123B2A]/20 dark:border-[#B8CBA5]/30 bg-[#FDFCF9] dark:bg-[#071F14] text-[#17231C] dark:text-[#F7F5EC] placeholder:text-[#17231C]/50 dark:placeholder:text-[#F7F5EC]/40 text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isPledging}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#123B2A] hover:bg-[#1D5139] text-white text-xs font-bold tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 text-[#E28723] fill-[#E28723]" />
              <span>
                {isPledging
                  ? "Recording Pledge..."
                  : `Submit Pledge for ₹${currentAmount.toLocaleString()}`}
              </span>
            </button>
          </form>
        )}
      </div>

      {/* Financial Transparency FAQ & Policy Strip */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#F7F5EC] p-6 rounded-3xl border border-[#123B2A]/10 space-y-2">
          <h4 className="font-serif text-base font-bold text-[#123B2A] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#1D5139]" />
            How Are Contributions Utilized?
          </h4>
          <p className="text-xs text-[#17231C]/80 leading-relaxed font-light">
            Funds are directly utilized to purchase medical diagnostic supplies for senior citizen health camps, school books and uniforms for children, emergency rations for distressed migrant families, and sapling nursery care in Jharkhand.
          </p>
        </div>

        <div className="bg-[#F7F5EC] p-6 rounded-3xl border border-[#123B2A]/10 space-y-2">
          <h4 className="font-serif text-base font-bold text-[#123B2A] flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#1D5139]" />
            Official Account & 80G Verification
          </h4>
          <p className="text-xs text-[#17231C]/80 leading-relaxed font-light">
            All donations are directly deposited into the official <strong>Bank of India (A/C: 013610110004678, IFSC: BKID0000136)</strong> trust account. Tax exemption receipts under Section 80G (Reg. AABTJ8020A24MB02) are issued upon donation. Helpline: <strong>+91 78080 08058</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
