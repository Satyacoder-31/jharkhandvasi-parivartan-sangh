"use client";

import React from "react";
import { Building2, MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";
import { useSiteContent } from "@/context/SiteContentContext";
import { useLanguage } from "@/context/LanguageContext";

export default function OfficeAddressesView() {
  const { content } = useSiteContent();
  const { language } = useLanguage();
  const { organization } = content;

  return (
    <div className="space-y-4">
      {/* Dynamic Offices List */}
      {organization.offices && organization.offices.length > 0 ? (
        organization.offices.map((office, idx) => (
          <div
            key={office.id || idx}
            className="p-5 rounded-2xl bg-white dark:bg-[#0A2419] border border-[#123B2A]/10 dark:border-[#B8CBA5]/20 shadow-sm flex items-start gap-4 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-[#E9F0E4] dark:bg-[#123B2A] text-[#1D5139] dark:text-[#B8CBA5] flex items-center justify-center flex-shrink-0">
              {idx === 0 ? <Building2 className="w-5 h-5" /> : <MapPin className="w-5 h-5" />}
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#E28723] block">
                {language === "hi"
                  ? (idx === 0 ? "मुख्य पंजीकृत कार्यालय" : "शाखा कार्यालय")
                  : (office.type || `Office #${idx + 1}`)}
              </span>
              <h4 className="font-serif text-base font-semibold text-[#123B2A] dark:text-white">
                {language === "hi"
                  ? (idx === 0 ? "पंजीकृत केंद्रीय कार्यालय (मुंबई)" : "शाखा कार्यालय (गिरिडीह, झारखंड)")
                  : office.title}
              </h4>
              <p className="text-xs text-[#17231C]/80 dark:text-[#F7F5EC]/80 mt-1 leading-relaxed font-light">
                {language === "hi"
                  ? (idx === 0
                    ? "32 नालंदा सोसाइटी, आस्था डेयरी के पास, गली नं-1, गोराई-1, बोरीवली (प.), मुंबई – 400091."
                    : "डीके ट्रेडर्स, बक्सीडीह रोड, बर्मन डेकोरेटर के पास, गिरिडीह, झारखंड – 815301.")
                  : `${office.address}${office.landmark ? `, ${office.landmark}` : ""}${office.city ? `, ${office.city}` : ""}${office.state ? `, ${office.state}` : ""}${office.pin ? ` – ${office.pin}` : ""}.`}
              </p>
              {office.hours && (
                <div className="flex items-center gap-1.5 text-[11px] text-[#795943] dark:text-[#B8CBA5] mt-1.5 font-medium">
                  <Clock className="w-3 h-3 text-[#E28723]" />
                  <span>{language === "hi" ? "कार्य समय: प्रातः 9:00 से रात्रि 9:00 (हेल्पलाइन 24/7 सक्रिय)" : office.hours}</span>
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="p-5 rounded-2xl bg-white dark:bg-[#0A2419] border border-[#123B2A]/10 text-xs">
          {language === "hi" ? "कार्यालय विवरण लोड हो रहा है..." : "Loading offices..."}
        </div>
      )}

      {/* Phone Helpline */}
      <div className="p-5 rounded-2xl bg-white dark:bg-[#0A2419] border border-[#123B2A]/10 dark:border-[#B8CBA5]/20 shadow-sm flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#E9F0E4] dark:bg-[#123B2A] text-[#1D5139] dark:text-[#B8CBA5] flex items-center justify-center flex-shrink-0">
          <Phone className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-serif text-base font-semibold text-[#123B2A] dark:text-white">
            {language === "hi" ? "हेल्पलाइन एवं फोन संपर्क" : "Helplines & Telephones"}
          </h4>
          <a
            href={`tel:${organization.primaryPhone}`}
            className="text-xs text-[#1D5139] dark:text-[#B8CBA5] font-bold block mt-1 hover:underline"
          >
            {organization.primaryPhone} {language === "hi" ? "(मुख्य आधिकारिक हेल्पलाइन)" : "(Primary Official Helpline)"}
          </a>
          <a
            href={`tel:${organization.secondaryPhone}`}
            className="text-xs text-[#1D5139] dark:text-[#B8CBA5] font-semibold block mt-0.5 hover:underline"
          >
            {organization.secondaryPhone} {language === "hi" ? "(24/7 आपातकालीन डेस्क)" : "(24/7 Distress Desk)"}
          </a>
          <span className="text-[11px] text-[#795943] dark:text-[#F7F5EC]/70 block mt-0.5">
            {language === "hi" ? "चिकित्सीय, सामाजिक और कानूनी आपातकाल हेतु 24 घंटे उपलब्ध।" : "Round the clock for medical, social & legal emergencies."}
          </span>
        </div>
      </div>

      {/* WhatsApp Support */}
      <div className="p-5 rounded-2xl bg-white dark:bg-[#0A2419] border border-[#123B2A]/10 dark:border-[#B8CBA5]/20 shadow-sm flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#E9F0E4] dark:bg-[#123B2A] text-[#1D5139] dark:text-[#B8CBA5] flex items-center justify-center flex-shrink-0">
          <MessageCircle className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-serif text-base font-semibold text-[#123B2A] dark:text-white">
            {language === "hi" ? "व्हाट्सएप सहायता" : "WhatsApp Assistance"}
          </h4>
          <a
            href={`https://wa.me/${organization.primaryPhone.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#1D5139] dark:text-[#B8CBA5] font-bold block mt-1 hover:underline"
          >
            {organization.primaryPhone} {language === "hi" ? "(सीधा चैट करें)" : "(Chat directly)"}
          </a>
          <span className="text-[11px] text-[#795943] dark:text-[#F7F5EC]/70 block mt-0.5">
            {language === "hi" ? "दस्तावेज, अस्पताल पर्ची या स्थान साझा करने हेतु।" : "Send incident documents, medical records, or location pins."}
          </span>
        </div>
      </div>

      {/* Email Addresses & Web */}
      <div className="p-5 rounded-2xl bg-white dark:bg-[#0A2419] border border-[#123B2A]/10 dark:border-[#B8CBA5]/20 shadow-sm flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#E9F0E4] dark:bg-[#123B2A] text-[#1D5139] dark:text-[#B8CBA5] flex items-center justify-center flex-shrink-0">
          <Mail className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-serif text-base font-semibold text-[#123B2A] dark:text-white">
            {language === "hi" ? "ईमेल संपर्क" : "Emails & Web Portal"}
          </h4>
          <a
            href={`mailto:${organization.email}`}
            className="text-xs text-[#1D5139] dark:text-[#B8CBA5] font-medium block mt-1 hover:underline"
          >
            {organization.email}
          </a>
          <a
            href={`mailto:${organization.alternateEmail}`}
            className="text-xs text-[#795943] dark:text-[#F7F5EC]/70 block hover:underline"
          >
            {organization.alternateEmail}
          </a>
        </div>
      </div>
    </div>
  );
}
