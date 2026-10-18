"use client";

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
import OfficeAddressesView from "@/components/OfficeAddressesView";
import ContactForm from "@/components/ContactForm";
import { useSiteContent } from "@/context/SiteContentContext";

export default function ContactContent() {
  const { content } = useSiteContent();
  const organization = content.organization;
  const rawPhone = organization.primaryPhone.replace(/[^0-9]/g, "");

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. EDITORIAL PAGE HEADER */}
      <section className="bg-[#05140D] text-white pt-32 sm:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
        <Image
          src="/images/community-assembly.jpg"
          alt="Community assembly and support desk"
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
                Official Offices &amp; Helplines
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

      {/* 2. EMERGENCY ASSISTANCE HIGHLIGHT BANNER (DYNAMIC FROM CMS) */}
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
              href={`tel:${organization.primaryPhone || "+917808008058"}`}
              className="px-6 py-3.5 rounded-full bg-[#123B2A] hover:bg-[#1D5139] text-white text-xs font-bold tracking-wide shadow transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#E28723]" />
              <span>Call {organization.primaryPhone || "+91 78080 08058"}</span>
            </a>
            <a
              href={`https://wa.me/${rawPhone || "917808008058"}?text=Emergency%20Assistance%20Requested`}
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
                Official Locations ({organization.offices?.length || 2})
              </span>
              <h2 className="font-serif text-3xl font-normal text-[#123B2A]">
                Headquarters &amp; Communications
              </h2>
            </div>

            <OfficeAddressesView />
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
