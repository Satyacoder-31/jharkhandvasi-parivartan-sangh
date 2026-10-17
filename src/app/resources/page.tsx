import Image from "next/image";
import Link from "next/link";
import { BookOpen, Search, Download, FileText, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import ResourceHub from "@/components/ResourceHub";

export const metadata = {
  title: "Resources & News | Jharkhandvasi Parivartan Sangh",
  description:
    "Knowledge hub, welfare guides, environmental research, educational frameworks, and organization announcements published by Jharkhandvasi Parivartan Sangh.",
};

export default function ResourcesPage() {
  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. EDITORIAL PAGE HEADER */}
      <section className="bg-[#071F14] text-white pt-32 sm:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
        <Image
          src="/images/watershed-nature.jpg"
          alt="Natural watershed and river conservation in Jharkhand"
          fill
          priority
          className="object-cover opacity-50 filter brightness-85"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071F14] via-[#071F14]/80 to-black/60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="badge-pill bg-[#B8CBA5]/20 text-[#B8CBA5] border border-[#B8CBA5]/30">
              Knowledge & Community Library
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              Resources, Guides & Field <span className="italic text-[#B8CBA5]">Updates</span>
            </h1>
            <p className="text-sm sm:text-base text-[#F7F5EC]/85 font-light leading-relaxed">
              Open-access educational materials, welfare handbooks, environmental conservation research, and public community announcements.
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#1D5139] rounded-full blur-3xl opacity-40 pointer-events-none" />
      </section>

      {/* 2. FEATURED PUBLICATION SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#F7F5EC] rounded-3xl p-8 sm:p-12 border border-[#123B2A]/10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="badge-pill bg-[#E9F0E4] text-[#1D5139] text-[10px]">
                Featured Field Handbook
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#123B2A]">
                Migrant Worker Legal Rights & Emergency Healthcare Protocol
              </h2>
              <p className="text-xs sm:text-sm text-[#17231C]/80 font-light leading-relaxed">
                A vital handbook designed for community organizers, social workers, and labor leaders in the Mumbai Metropolitan Region. Details the rights of unorganized workers, public hospital grievance procedures, statutory compensation for fatal industrial incidents, and legal aid helplines.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
                <a
                  href="tel:+919022288222"
                  className="px-6 py-2.5 rounded-full bg-[#123B2A] hover:bg-[#1D5139] text-white font-bold tracking-wide shadow flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5 text-[#E28723]" />
                  <span>Request Handbook PDF (+91 90222 88222)</span>
                </a>
                <span className="text-[#795943] font-mono">1.4 MB • Updated January 2026</span>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 bg-white rounded-2xl border border-[#123B2A]/10 text-center space-y-2">
              <BookOpen className="w-8 h-8 text-[#1D5139] mx-auto" />
              <h4 className="font-serif text-base font-bold text-[#123B2A]">
                Community Distribution
              </h4>
              <p className="text-xs text-[#795943] font-light">
                Printed physical editions are distributed free of cost during migrant labor union meetings and health camps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEARCHABLE RESOURCE HUB */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="max-w-2xl">
          <span className="badge-pill bg-[#B8CBA5]/20 text-[#123B2A] mb-2">
            Publication Archive
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#123B2A]">
            Search Publications & Toolkits
          </h2>
        </div>

        <ResourceHub />
      </section>

      {/* 4. DISCLOSURE ON SOURCING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-6 rounded-2xl bg-[#E9F0E4] border border-[#6F8D58]/30 text-xs text-[#123B2A] flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#1D5139] flex-shrink-0 mt-0.5" />
          <div className="leading-relaxed font-light">
            <strong>Publication Ethics:</strong> All educational manuals, welfare guides, and environmental documentation published here are curated strictly for non-commercial social assistance, community literacy, and public empowerment.
          </div>
        </div>
      </section>
    </div>
  );
}
