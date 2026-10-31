"use client";

import { useState } from "react";
import { UserCheck, HeartHandshake, Download, MessageCircle, FileText } from "lucide-react";
import MembershipForm from "@/components/MembershipForm";
import VolunteerForm from "@/components/VolunteerForm";
import { useLanguage } from "@/context/LanguageContext";

export default function GetInvolvedForms() {
  const { language } = useLanguage();
  const isHi = language === "hi";
  const [activeTab, setActiveTab] = useState<"membership" | "volunteer">("membership");

  return (
    <div className="space-y-8">
      {/* Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setActiveTab("membership")}
          className={`px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all flex items-center gap-2 shadow-md ${
            activeTab === "membership"
              ? "bg-[#123B2A] dark:bg-[#1D5139] text-white ring-2 ring-[#E28723]"
              : "bg-white dark:bg-white/10 text-[#123B2A] dark:text-[#F7F5EC] hover:bg-[#F7F5EC] border border-[#123B2A]/15"
          }`}
        >
          <UserCheck className="w-4 h-4 text-[#E28723]" />
          <span>{isHi ? "आधिकारिक सदस्यता पत्र (Membership Form)" : "Official Membership Form"}</span>
          <span className="bg-[#25D366] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
            WhatsApp
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("volunteer")}
          className={`px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all flex items-center gap-2 shadow-md ${
            activeTab === "volunteer"
              ? "bg-[#123B2A] dark:bg-[#1D5139] text-white ring-2 ring-[#E28723]"
              : "bg-white dark:bg-white/10 text-[#123B2A] dark:text-[#F7F5EC] hover:bg-[#F7F5EC] border border-[#123B2A]/15"
          }`}
        >
          <HeartHandshake className="w-4 h-4 text-[#E28723]" />
          <span>{isHi ? "स्वयंसेवक पंजीकरण (Volunteer Network)" : "Volunteer Network Application"}</span>
        </button>
      </div>

      {/* Active Form */}
      {activeTab === "membership" ? (
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="badge-pill bg-[#25D366]/20 text-[#123B2A] dark:text-[#B8CBA5] font-bold">
              {isHi ? "व्हाट्सएप सदस्यता डेस्क: +91 78080 08058" : "WhatsApp Membership Desk: +91 78080 08058"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#123B2A] dark:text-[#F7F5EC]">
              {isHi ? "संस्था सदस्यता हेतु आवेदन करें" : "Apply for Official Membership"}
            </h2>
            <p className="text-xs text-[#795943] dark:text-[#B8CBA5]">
              {isHi
                ? "नीचे दिया गया फॉर्म भरकर सबमिट करें। आपका आवेदन स्वतः WhatsApp नंबर +91 78080 08058 पर प्रेषित हो जाएगा।"
                : "Complete the form below to transmit your verified membership application to WhatsApp at +91 78080 08058."}
            </p>
          </div>

          <MembershipForm />
        </div>
      ) : (
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="badge-pill bg-[#B8CBA5]/20 text-[#123B2A]">
              Join the Frontline
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#123B2A]">
              Apply to Join Our Volunteer Network
            </h2>
            <p className="text-xs text-[#795943] font-light">
              Fill in your details below. A coordinator from our Borivali West desk will reach out.
            </p>
          </div>

          <VolunteerForm />
        </div>
      )}
    </div>
  );
}
