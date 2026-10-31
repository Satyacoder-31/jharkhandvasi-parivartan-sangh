import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Phone, CheckCircle2, Download, MessageCircle } from "lucide-react";
import MembershipForm from "@/components/MembershipForm";

export const metadata = {
  title: "Official Membership Form (सदस्यता पत्र) | Jharkhandvasi Parivartan Sangh",
  description:
    "Official membership application form of Jharkhandvasi Parivartan Sangh (Regd. No. E-30004/MUMBAI). Fill online and submit directly via WhatsApp to +91 78080 08058.",
};

export default function MembershipPage() {
  return (
    <div className="space-y-12 lg:space-y-16 pb-24 overflow-x-hidden w-full max-w-full">
      {/* 1. EDITORIAL HEADER */}
      <section className="bg-[#05140D] text-white pt-32 sm:pt-40 pb-16 lg:pb-24 relative overflow-hidden">
        <Image
          src="/images/community-assembly.jpg"
          alt="JPS Members Assembly"
          fill
          priority
          className="object-cover object-center filter brightness-75"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05140D]/95 via-[#05140D]/75 to-[#05140D]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05140D] via-transparent to-black/60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="badge-pill bg-[#E28723]/20 text-[#E28723] border border-[#E28723]/30 font-bold">
              Official JPS Membership Desk
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              सदस्यता पत्र <span className="italic text-[#B8CBA5]">MEMBERSHIP</span> FORM
            </h1>
            <p className="text-sm sm:text-base text-[#F7F5EC]/85 font-light leading-relaxed">
              झारखंडवासी परिवर्तन संघ (रजि.) की आधिकारिक सदस्यता प्राप्त करें। ऑनलाइन फॉर्म भरकर अपना आवेदन संस्था के अधिकृत व्हाट्सएप नंबर <strong>+91 78080 08058</strong> पर प्रेषित करें।
            </p>
            <div className="pt-2 flex flex-wrap gap-3 text-xs">
              <a
                href="#form-section"
                className="px-6 py-3 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white font-bold shadow-lg transition-all"
              >
                ऑनलाइन फॉर्म भरें (Fill Online)
              </a>
              <a
                href="https://wa.me/917808008058?text=Namaste%2C%20I%20want%20to%20inquire%20about%20JPS%20Membership"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold shadow-lg transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>व्हाट्सएप संपर्क: 78080 08058</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MEMBERSHIP FORM EMBEDDED */}
      <section id="form-section" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-28">
        <MembershipForm />
      </section>
    </div>
  );
}
