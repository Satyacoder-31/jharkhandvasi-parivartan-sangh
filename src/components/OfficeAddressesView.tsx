"use client";

import React from "react";
import { Building2, MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";
import { useSiteContent } from "@/context/SiteContentContext";

export default function OfficeAddressesView() {
  const { content } = useSiteContent();
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
                {office.type || `Office #${idx + 1}`}
              </span>
              <h4 className="font-serif text-base font-semibold text-[#123B2A] dark:text-white">
                {office.title}
              </h4>
              <p className="text-xs text-[#17231C]/80 dark:text-[#F7F5EC]/80 mt-1 leading-relaxed font-light">
                {office.address}
                {office.landmark && `, ${office.landmark}`}
                {office.city && `, ${office.city}`}
                {office.state && `, ${office.state}`}
                {office.pin && ` – ${office.pin}`}.
              </p>
              {office.hours && (
                <div className="flex items-center gap-1.5 text-[11px] text-[#795943] dark:text-[#B8CBA5] mt-1.5 font-medium">
                  <Clock className="w-3 h-3 text-[#E28723]" />
                  <span>{office.hours}</span>
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="p-5 rounded-2xl bg-white dark:bg-[#0A2419] border border-[#123B2A]/10 text-xs">
          Loading offices...
        </div>
      )}

      {/* Phone Helpline */}
      <div className="p-5 rounded-2xl bg-white dark:bg-[#0A2419] border border-[#123B2A]/10 dark:border-[#B8CBA5]/20 shadow-sm flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#E9F0E4] dark:bg-[#123B2A] text-[#1D5139] dark:text-[#B8CBA5] flex items-center justify-center flex-shrink-0">
          <Phone className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-serif text-base font-semibold text-[#123B2A] dark:text-white">
            Helplines &amp; Telephones
          </h4>
          <a
            href={`tel:${organization.primaryPhone}`}
            className="text-xs text-[#1D5139] dark:text-[#B8CBA5] font-bold block mt-1 hover:underline"
          >
            {organization.primaryPhone} (Primary Official Helpline)
          </a>
          <a
            href={`tel:${organization.secondaryPhone}`}
            className="text-xs text-[#1D5139] dark:text-[#B8CBA5] font-semibold block mt-0.5 hover:underline"
          >
            {organization.secondaryPhone} (24/7 Distress Desk)
          </a>
          <span className="text-[11px] text-[#795943] dark:text-[#F7F5EC]/70 block mt-0.5">
            Round the clock for medical, social &amp; legal emergencies.
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
            WhatsApp Assistance
          </h4>
          <a
            href={`https://wa.me/${organization.primaryPhone.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#1D5139] dark:text-[#B8CBA5] font-bold block mt-1 hover:underline"
          >
            {organization.primaryPhone} (Chat directly)
          </a>
          <span className="text-[11px] text-[#795943] dark:text-[#F7F5EC]/70 block mt-0.5">
            Send incident documents, medical records, or location pins.
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
            Emails &amp; Web Portal
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
