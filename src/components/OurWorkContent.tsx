"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Users,
  BookOpen,
  Calendar,
  Sparkles,
  AlertCircle,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useSiteContent } from "@/context/SiteContentContext";
import { useLanguage } from "@/context/LanguageContext";

export default function OurWorkContent() {
  const { content } = useSiteContent();
  const { language, t } = useLanguage();
  const programs = content.programs || [];
  const organization = content.organization;

  return (
    <div className="space-y-16 lg:space-y-24 pb-24 overflow-x-hidden w-full max-w-full">
      {/* 1. EDITORIAL PAGE HEADER */}
      <section className="bg-[#05140D] text-white pt-32 sm:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
        <Image
          src="/images/hero-education.jpg"
          alt="Child education and grassroots work"
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
            <span className="badge-pill bg-[#B8CBA5]/20 text-[#B8CBA5] border border-[#B8CBA5]/30">
              {language === "hi" ? "जमीनी सेवा स्तंभ" : "Grassroots Impact Pillars"}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              {language === "hi" ? (
                <>हमारे कार्य एवं <span className="italic text-[#B8CBA5]">समाज कल्याण</span> कार्यक्रम</>
              ) : (
                <>Our Work & <span className="italic text-[#B8CBA5]">Social Welfare</span> Programs</>
              )}
            </h1>
            <p className="text-sm sm:text-base text-[#F7F5EC]/85 font-light leading-relaxed">
              {language === "hi"
                ? "प्रवासी संकट, स्वास्थ्य सेवा, बाल साक्षरता, महिला संबल और आदिवासी सांस्कृतिक संरक्षण को समर्पित छह प्रमुख जनकल्याणकारी क्षेत्र।"
                : "Six dedicated areas of grassroots intervention addressing migrant vulnerability, healthcare access, child literacy, women's resilience, and tribal cultural preservation."}
            </p>
          </div>

          {/* Quick Anchor Navigation Strip */}
          <div className="flex flex-wrap gap-2 pt-8">
            {programs.map((p, idx) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F7F5EC] text-xs font-semibold tracking-wide border border-white/15 transition-all"
              >
                {language === "hi" ? (t(`prog${idx + 1}Badge`) || p.title.split("&")[0]) : p.title.split("&")[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PROGRAM SECTIONS (DYNAMIC FROM CMS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
        {programs.map((program, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <ScrollReveal
              key={program.id || idx}
              direction={isEven ? "left" : "right"}
              duration={850}
            >
              <div
                id={program.id}
                className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-3xl bg-white border border-[#123B2A]/10 shadow-sm"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md border border-[#123B2A]/10 group ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={program.image || "/images/community-assembly.jpg"}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="badge-pill bg-[#123B2A]/85 text-[#B8CBA5] backdrop-blur-sm text-[10px]">
                      {program.eyebrow}
                    </span>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-7 space-y-5 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#E28723] font-bold block mb-1">
                      {language === "hi" ? `सेवा स्तंभ 0${idx + 1}` : `Program Pillar 0${idx + 1}`}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#123B2A]">
                      {language === "hi" ? (t(`prog${idx + 1}Title`) || program.title) : program.title}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-[#17231C]/80 font-light leading-relaxed">
                    {language === "hi" ? (t(`prog${idx + 1}Desc`) || program.overview || program.description) : (program.overview || program.description)}
                  </p>

                  {/* Emergency Assistance Panel for Migrants */}
                  {(program.hasEmergencyPanel || program.id === "migrants") && (
                    <div className="p-4 rounded-2xl bg-[#E9F0E4] dark:bg-[#06180F] border border-[#6F8D58]/30 dark:border-[#B8CBA5]/30 flex items-start gap-3 shadow-sm">
                      <Phone className="w-5 h-5 text-[#1D5139] dark:text-[#B8CBA5] flex-shrink-0 mt-0.5" />
                      <div className="text-xs text-[#123B2A] dark:text-[#F7F5EC]">
                        <strong className="block text-[#1D5139] dark:text-[#E28723] font-bold">
                          {language === "hi" ? "24/7 प्रवासी संकट हेल्पलाइन:" : "24/7 Migrant Distress Helpline:"} {organization.secondaryPhone || "+91 90222 88222"}
                        </strong>
                        <span className="text-[#17231C]/90 dark:text-[#F7F5EC]/85">
                          {language === "hi"
                            ? "अस्पताल आपातकाल, दुर्घटना या सुरक्षित गृह वापसी के लिए हमारी राहत डेस्क दिन-रात सक्रिय है।"
                            : "Our emergency response protocol is active day and night for hospital casualties, accidents, or urgent repatriation coordination."}
                        </span>
                      </div>
                    </div>
                  )}

                  {((program.activities && program.activities.length > 0) || (program.bullets && program.bullets.length > 0)) && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#123B2A]">
                        {language === "hi" ? "प्रमुख कार्य एवं गतिविधियां:" : "Core Interventions:"}
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[#17231C]/80 font-light">
                        {(program.activities || program.bullets || []).map((act, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#1D5139] flex-shrink-0 mt-0.5" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {program.beneficiaries && (
                    <div className="p-3 rounded-xl bg-[#F7F5EC] border border-[#123B2A]/10 text-xs text-[#17231C]/85">
                      <strong>{language === "hi" ? "लक्षित लाभार्थी:" : "Target Beneficiaries:"}</strong> {program.beneficiaries}
                    </div>
                  )}

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      href={program.cta?.href || "/contact"}
                      className="px-6 py-2.5 rounded-full bg-[#123B2A] hover:bg-[#1D5139] text-white text-xs font-bold tracking-wide shadow transition-all flex items-center gap-1.5"
                    >
                      <span>{language === "hi" ? "इस कार्यक्रम से जुड़ें" : (program.cta?.text || "Connect With Program")}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/donate"
                      className="text-xs font-semibold text-[#795943] hover:underline"
                    >
                      {language === "hi" ? "इस कार्य में सहयोग दें →" : "Support this initiative →"}
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </section>

      {/* 3. BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#123B2A] text-white rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-normal">
            {language === "hi" ? "क्या आपको या किसी परिचित को सहायता की आवश्यकता है?" : "Need Direct Community Assistance?"}
          </h3>
          <p className="text-xs sm:text-sm text-[#F7F5EC]/80 font-light leading-relaxed max-w-lg mx-auto">
            {language === "hi"
              ? "बोरीवली पश्चिम और मुंबई संभाग में हमारे स्वयंसेवक सुनने, सलाह देने और सहायता करने हेतु सदैव तत्पर हैं।"
              : "Our volunteers in Borivali West and across Mumbai are available to listen, advise, and intervene. Reach out through our verified channels."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${organization.primaryPhone || "+919022288222"}`}
              className="px-6 py-3 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold tracking-wide shadow transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>{language === "hi" ? "हेल्पलाइन कॉल:" : "Call Helpline:"} {organization.primaryPhone || "+91 90222 88222"}</span>
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wide border border-white/20 transition-all"
            >
              {language === "hi" ? "कार्यालय को संदेश भेजें" : "Write To Our Office"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
