"use client";

import { useState } from "react";
import { Heart, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight, Info, HelpCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Tier {
  amount: number;
  label: string;
  impact: string;
  impactHi: string;
}

const tiers: Tier[] = [
  {
    amount: 500,
    label: "₹500",
    impact: "Provides emergency dry ration kit and essential food supplies for a distressed migrant family.",
    impactHi: "संकटग्रस्त प्रवासी श्रमिक परिवार के लिए आपातकालीन सूखा राशन किट एवं भोजन सामग्री।",
  },
  {
    amount: 1500,
    label: "₹1,500",
    impact: "Sponsors complete Shiksha Protsahan study kits (notebooks, bags, stationery) for 3 underprivileged school children.",
    impactHi: "3 जरूरतमंद स्कूली बच्चों के लिए संपूर्ण शिक्षा प्रोत्साहन किट (बैग, कॉपियां, स्टेशनरी)।",
  },
  {
    amount: 3500,
    label: "₹3,500",
    impact: "Covers free diagnostic blood sugar tests, vitals checkup, and doctor-prescribed medicines for elderly patients in Borivali.",
    impactHi: "बोरीवली में बुजुर्ग मरीजों के लिए निःशुल्क रक्त जांच, स्वास्थ्य परीक्षण और दवाएं।",
  },
  {
    amount: 5000,
    label: "₹5,000",
    impact: "Funds community nursery cultivation and planting care for 25 native Sal, Mahua, and Neem tree saplings.",
    impactHi: "झारखंड में 25 देशी साल, महुआ और नीम के पौधों की नर्सरी देखरेख एवं वृक्षारोपण।",
  },
];

export default function DonationCalculator() {
  const { language, t } = useLanguage();
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

  const activeTier = tiers.find((t) => t.amount === selectedAmount);
  const currentImpact = language === "hi"
    ? (activeTier?.impactHi || `आपका ₹${currentAmount.toLocaleString("en-IN")} का सहयोग मुंबई और झारखंड में जमीनी सामाजिक सेवा कार्यों में उपयोग होगा।`)
    : (activeTier?.impact || `Your generous contribution of ₹${currentAmount.toLocaleString("en-IN")} directly funds essential grassroots social welfare and community relief across Mumbai and Jharkhand.`);

  const causeOptions = [
    { key: "All Community Causes", en: "All Community Causes", hi: "सभी सामुदायिक कार्य" },
    { key: "Migrant Crisis Aid", en: "Migrant Crisis Aid", hi: "प्रवासी संकट सहायता" },
    { key: "Child Literacy Kits", en: "Child Literacy Kits", hi: "बाल शिक्षा किट" },
    { key: "Senior Health Camps", en: "Senior Health Camps", hi: "वरिष्ठ स्वास्थ्य शिविर" },
    { key: "Tree Planting & Ecology", en: "Tree Planting & Ecology", hi: "वृक्षारोपण एवं पर्यावरण" },
  ];

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName.trim() || !donorPhone.trim()) {
      alert(language === "hi" ? "कृपया अपना नाम और मोबाइल नंबर दर्ज करें।" : "Please provide your name and phone number to record your pledge.");
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
            {language === "hi" ? "सुझावित सहयोग श्रेणियां" : "Suggested Contribution Tiers"}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#123B2A]">
            {language === "hi" ? "पारदर्शी प्रभाव कैलकुलेटर" : "Transparent Impact Calculator"}
          </h3>
          <p className="text-xs sm:text-sm text-[#795943] mt-1 font-light">
            {language === "hi"
              ? "आपका हर सहयोग वास्तविक जरूरतमंदों तक पहुंचता है। कृपया कोई श्रेणी चुनें या अपनी इच्छानुसार राशि दर्ज करें।"
              : "Every contribution directly supports real people and community interventions. Choose a suggested tier or specify a custom pledge."}
          </p>
        </div>

        {/* Cause Pillar Selection */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-[#123B2A] mb-2 uppercase tracking-wider">
            {language === "hi" ? t("calcPurpose") : "Choose Purpose Allocation:"}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {causeOptions.map((cause) => (
              <button
                key={cause.key}
                type="button"
                onClick={() => setSelectedCause(cause.key)}
                className={`p-2.5 rounded-xl text-xs font-medium text-left border transition-all ${
                  selectedCause === cause.key
                    ? "bg-[#123B2A] text-white border-[#123B2A] shadow-sm"
                    : "bg-[#F7F5EC] text-[#17231C]/80 border-[#123B2A]/10 hover:bg-[#6F8D58]/10"
                }`}
              >
                {language === "hi" ? cause.hi : cause.en}
              </button>
            ))}
          </div>
        </div>

        {/* Suggested Amount Buttons */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-[#123B2A] mb-2 uppercase tracking-wider">
            {language === "hi" ? "सुझावित राशि चुनें (रुपये):" : "Select Suggested Contribution (INR):"}
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
            {language === "hi" ? "अथवा अन्य कोई राशि दर्ज करें (रुपये):" : "Or Specify Custom Amount (INR):"}
          </label>
          <div className="relative max-w-xs">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-[#123B2A]">
              ₹
            </span>
            <input
              type="number"
              placeholder={language === "hi" ? "उदा. 2500" : "e.g. 2500"}
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
              {language === "hi"
                ? `₹${currentAmount.toLocaleString("en-IN")} का अनुमानित प्रभाव`
                : `Estimated Impact For ₹${currentAmount.toLocaleString("en-IN")} (${selectedCause})`}
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
            <strong className="text-[#123B2A] dark:text-[#E28723] font-bold">
              {language === "hi" ? "सत्यापन एवं सुरक्षा सूचना:" : "Verification & Anti-Fraud Notice:"}
            </strong>{" "}
            <span>
              {language === "hi"
                ? "JPS वित्तीय दान स्वीकार करने से पहले प्रत्यक्ष सत्यापन अनिवार्य करता है। हम किसी अनाधिकृत तीसरे पक्ष के पेमेंट गेटवे का उपयोग नहीं करते। संकल्प दर्ज करने के उपरांत अधिकृत प्रतिनिधि आपको संस्था का सत्यापित बैंक खाता व 80G विवरण प्रदान करेंगे।"
                : "JPS requires direct verification before receiving monetary donations. We do not process untracked third-party web gateways without authorized representative confirmation. Recording a pledge registers your generous intent; an authorized representative will provide official verified bank account details."}
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
              {language === "hi" ? "सहयोग संकल्प सफलतापूर्वक दर्ज हुआ!" : "Donation Pledge Recorded!"}
            </h4>
            <p className="text-xs text-[#F7F5EC]/80 max-w-md mx-auto font-light leading-relaxed">
              {language === "hi"
                ? `धन्यवाद, ${donorName} जी। आपका ₹${currentAmount.toLocaleString("en-IN")} का सहयोग संकल्प संदर्भ संख्या ${pledgeToken} के साथ दर्ज हो चुका है।`
                : `Thank you, ${donorName}. Your pledge of ₹${currentAmount.toLocaleString("en-IN")} has been registered with reference ${pledgeToken}.`}
            </p>
            <div className="p-4 bg-white/10 rounded-2xl text-xs max-w-lg mx-auto text-[#B8CBA5] space-y-1.5 text-left border border-white/15">
              <div className="font-bold text-white uppercase text-[11px] tracking-wider">
                {language === "hi" ? "आधिकारिक बैंक ट्रांसफर विवरण:" : "Official Bank Transfer Coordinates:"}
              </div>
              <div className="text-white text-xs">
                <strong>{language === "hi" ? "बैंक:" : "Bank:"}</strong> Bank of India (BOI), Mahavirnagar Charkop
              </div>
              <div className="text-[#E28723] font-mono font-bold text-sm">
                A/C: 013610110004678 • IFSC: BKID0000136
              </div>
              <div className="text-[11px] text-[#F7F5EC]/80">
                80G: AABTJ8020A24MB02 | PAN: AABTJ8020A
              </div>
              <div className="text-[11px] text-[#B8CBA5] pt-1">
                {language === "hi" ? "भुगतान रसीद हेल्पलाइन पर साझा करें:" : "Share payment screenshot or query to Helpline:"}{" "}
                <strong className="text-white">+91 78080 08058</strong> / <strong className="text-white">+91 90222 88222</strong>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handlePledgeSubmit} className="space-y-4 pt-4 border-t border-[#123B2A]/10 dark:border-white/10">
            <h4 className="text-xs font-bold text-[#123B2A] dark:text-[#B8CBA5] uppercase tracking-wider">
              {language === "hi" ? "अपना सहयोग संकल्प दर्ज करें:" : "Record Your Contribution Pledge:"}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                placeholder={language === "hi" ? "आपका पूरा नाम *" : "Your Full Name *"}
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                required
                className="px-4 py-2.5 rounded-xl border border-[#123B2A]/20 dark:border-[#B8CBA5]/30 bg-[#FDFCF9] dark:bg-[#071F14] text-[#17231C] dark:text-[#F7F5EC] placeholder:text-[#17231C]/50 dark:placeholder:text-[#F7F5EC]/40 text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
              />
              <input
                type="tel"
                placeholder={language === "hi" ? "मोबाइल / व्हाट्सएप *" : "Mobile / WhatsApp *"}
                value={donorPhone}
                onChange={(e) => setDonorPhone(e.target.value)}
                required
                className="px-4 py-2.5 rounded-xl border border-[#123B2A]/20 dark:border-[#B8CBA5]/30 bg-[#FDFCF9] dark:bg-[#071F14] text-[#17231C] dark:text-[#F7F5EC] placeholder:text-[#17231C]/50 dark:placeholder:text-[#F7F5EC]/40 text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
              />
              <input
                type="email"
                placeholder={language === "hi" ? "ईमेल पता (वैकल्पिक)" : "Email Address (Optional)"}
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
