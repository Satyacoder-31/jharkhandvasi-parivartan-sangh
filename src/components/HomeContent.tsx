"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Palette,
  TreePine,
  Droplets,
  Leaf,
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import InteractiveMap from "@/components/InteractiveMap";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";
import { useSiteContent } from "@/context/SiteContentContext";

export default function HomeContent() {
  const { content } = useSiteContent();
  const hp = content.homepage;

  // Safe numeric fallbacks
  const stat1Num = typeof hp.stats.stat1.number === "number" ? hp.stats.stat1.number : parseInt(String(hp.stats.stat1.number), 10) || 20;
  const stat2Num = typeof hp.stats.stat2.number === "number" ? hp.stats.stat2.number : parseInt(String(hp.stats.stat2.number), 10) || 5200;
  const stat3Num = typeof hp.stats.stat3.number === "number" ? hp.stats.stat3.number : parseInt(String(hp.stats.stat3.number), 10) || 100;

  return (
    <div className="space-y-16 lg:space-y-24 pb-16 overflow-hidden">
      {/* 1. CINEMATIC HERO SLIDESHOW (DYNAMIC FROM CMS) */}
      <HeroSlider />

      {/* 2. VERIFIED STATISTICS STRIP (DYNAMIC INCREASING NUMBERS ON SCROLL) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up" duration={800}>
          <div className="relative bg-[#05140D] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#B8CBA5]/20 overflow-hidden">
            <Image
              src={hp.stats.backgroundImage || "/images/tree-planting.jpg"}
              alt="Native Sal trees and soil restoration nature backdrop"
              fill
              className="object-cover object-center filter brightness-85"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            {/* Rich cinematic dark gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#05140D]/90 via-[#05140D]/65 to-[#05140D]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05140D] via-transparent to-black/50" />
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {/* Stat 1 */}
              <div className="pt-4 sm:pt-0 sm:px-4 text-center">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#B8CBA5] block">
                  <AnimatedCounter target={stat1Num} suffix={hp.stats.stat1.suffix} duration={1800} />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-1 block">
                  {hp.stats.stat1.label}
                </span>
                <span className="text-[11px] text-[#F7F5EC]/65 block mt-0.5">
                  {hp.stats.stat1.sublabel}
                </span>
              </div>

              {/* Stat 2 */}
              <div className="pt-4 sm:pt-0 sm:px-4 text-center">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E28723] block">
                  <AnimatedCounter target={stat2Num} suffix={hp.stats.stat2.suffix} duration={2200} />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-1 block">
                  {hp.stats.stat2.label}
                </span>
                <span className="text-[11px] text-[#F7F5EC]/65 block mt-0.5">
                  {hp.stats.stat2.sublabel}
                </span>
              </div>

              {/* Stat 3 */}
              <div className="pt-4 sm:pt-0 sm:px-4 text-center">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#B8CBA5] block">
                  <AnimatedCounter target={stat3Num} suffix={hp.stats.stat3.suffix} duration={2000} />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-1 block">
                  {hp.stats.stat3.label}
                </span>
                <span className="text-[11px] text-[#F7F5EC]/65 block mt-0.5">
                  {hp.stats.stat3.sublabel}
                </span>
              </div>

              {/* Stat 4 */}
              <div className="pt-4 sm:pt-0 sm:px-4 text-center">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white block">
                  {hp.stats.stat4.number}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-1 block">
                  {hp.stats.stat4.label}
                </span>
                <span className="text-[11px] text-[#E28723] font-mono block mt-0.5">
                  {hp.stats.stat4.sublabel}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. INTRODUCTION: WHO WE ARE (DYNAMIC FROM CMS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 border border-[#123B2A]/10 dark:border-[#B8CBA5]/20 shadow-xl bg-white dark:bg-[#071F14] text-[#17231C] dark:text-white">
          <Image
            src="/images/watershed-nature.jpg"
            alt="Pristine nature and forest rivers of Jharkhand"
            fill
            className="object-cover opacity-35 dark:opacity-45 filter brightness-85"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/60 dark:from-[#071F14]/90 dark:via-[#071F14]/75 dark:to-[#071F14]/60" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Text Column */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="left" duration={900}>
                <div className="space-y-6">
                  <span className="badge-pill bg-[#B8CBA5]/30 text-[#123B2A] dark:bg-[#B8CBA5]/20 dark:text-[#B8CBA5] border border-[#123B2A]/10 dark:border-[#B8CBA5]/30">
                    {hp.aboutIntro.badge}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#123B2A] dark:text-white leading-tight">
                    {hp.aboutIntro.headingStart}{" "}
                    <span className="italic text-[#1D5139] dark:text-[#B8CBA5]">{hp.aboutIntro.headingItalic}</span>{" "}
                    {hp.aboutIntro.headingEnd}
                  </h2>
                  <p className="text-sm sm:text-base text-[#17231C]/85 dark:text-[#F7F5EC]/85 leading-relaxed font-light">
                    {hp.aboutIntro.paragraph1}
                  </p>
                  <p className="text-sm text-[#17231C]/80 dark:text-[#F7F5EC]/80 leading-relaxed font-light">
                    {hp.aboutIntro.paragraph2}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      href={hp.aboutIntro.primaryBtnHref || "/about"}
                      className="px-6 py-3 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold tracking-wide shadow transition-all flex items-center gap-2 group"
                    >
                      <span>{hp.aboutIntro.primaryBtnText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href={hp.aboutIntro.secondaryBtnHref || "/contact"}
                      className="px-6 py-3 rounded-full border border-[#123B2A]/20 dark:border-white/20 text-[#123B2A] dark:text-[#F7F5EC] hover:bg-black/5 dark:hover:bg-white/10 text-xs font-semibold tracking-wide transition-all"
                    >
                      {hp.aboutIntro.secondaryBtnText}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="right" duration={900} delay={150}>
                <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl border border-[#123B2A]/10 dark:border-white/15 group">
                  <Image
                    src={hp.aboutIntro.image || "/images/community-assembly.jpg"}
                    alt={hp.aboutIntro.imageTitle}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071F14]/90 via-[#071F14]/20 to-transparent" />
                  {/* Official Emblem Trust Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-white/95 dark:bg-[#071F14]/90 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-lg border border-black/5 dark:border-white/15 flex items-center gap-2">
                    <div className="w-8 h-8 relative flex-shrink-0">
                      <Image
                        src="/images/logo/jps-emblem.png"
                        alt="JPS Official Emblem"
                        width={32}
                        height={32}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-bold text-[#123B2A] dark:text-[#B8CBA5] leading-none">एक जुर्रत... एक ज़रूरत</p>
                      <p className="text-[9px] text-[#795943] dark:text-white/70 font-medium leading-tight mt-0.5">Regd. NGO E-30004</p>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-xs uppercase tracking-wider text-[#B8CBA5] font-semibold">
                      {hp.aboutIntro.imageTag}
                    </span>
                    <h4 className="font-serif text-lg font-normal">
                      {hp.aboutIntro.imageTitle}
                    </h4>
                    <p className="text-xs text-[#F7F5EC]/75 font-light">
                      {hp.aboutIntro.imageLocation}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIX CORE NGO PROGRAMS (DYNAMIC FROM CMS PROGRAMS LIST) */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-[#F7F5EC] dark:bg-[#071F14] text-[#17231C] dark:text-white border-y border-[#123B2A]/10 dark:border-[#B8CBA5]/20">
        <Image
          src="/images/hero-forest.jpg"
          alt="Ancient Sal and Mahua forest of Jharkhand"
          fill
          className="object-cover opacity-35 dark:opacity-45 filter brightness-85"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F5EC]/85 via-[#F7F5EC]/70 to-[#F7F5EC]/85 dark:from-[#071F14]/90 dark:via-[#071F14]/75 dark:to-[#071F14]/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <span className="badge-pill bg-[#B8CBA5]/30 text-[#123B2A] dark:bg-[#B8CBA5]/20 dark:text-[#B8CBA5] border border-[#123B2A]/10 dark:border-[#B8CBA5]/30">
                {hp.programsHeader.badge}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#123B2A] dark:text-white">
                {hp.programsHeader.headingStart}{" "}
                <span className="italic text-[#1D5139] dark:text-[#B8CBA5]">{hp.programsHeader.headingItalic}</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#17231C]/80 dark:text-[#F7F5EC]/80 font-light leading-relaxed">
                {hp.programsHeader.description}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.programs.slice(0, 6).map((prog, idx) => (
              <ScrollReveal key={prog.id} direction="up" delay={50 * (idx + 1)}>
                <div className="bg-white dark:bg-[#0D2C1F] rounded-3xl overflow-hidden border border-[#123B2A]/10 dark:border-[#B8CBA5]/20 shadow-md hover:shadow-xl hover:border-[#1D5139]/40 dark:hover:border-[#B8CBA5]/50 transition-all group flex flex-col justify-between h-full">
                  <div>
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={prog.image || "/images/community-assembly.jpg"}
                        alt={prog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="badge-pill bg-[#123B2A] text-[#B8CBA5] dark:bg-[#071F14]/90 backdrop-blur-sm text-[10px] border border-white/10">
                          {prog.stats || "Active Program"}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 space-y-2">
                      <h3 className="font-serif text-xl font-normal text-[#123B2A] dark:text-white group-hover:text-[#1D5139] dark:group-hover:text-[#B8CBA5] transition-colors">
                        {prog.title}
                      </h3>
                      <p className="text-xs text-[#17231C]/75 dark:text-[#F7F5EC]/75 font-light leading-relaxed line-clamp-3">
                        {prog.description}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <Link
                      href={`/our-work#${prog.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D5139] dark:text-[#B8CBA5] group-hover:underline"
                    >
                      <span>Explore Program</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NATURE & ECOLOGICAL HARMONY (DYNAMIC FROM CMS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up" duration={800}>
          <div className="relative bg-white dark:bg-[#071F14] text-[#17231C] dark:text-white rounded-3xl overflow-hidden border border-[#123B2A]/10 dark:border-[#B8CBA5]/25 shadow-xl p-8 sm:p-12 lg:p-14">
            <Image
              src={hp.natureSection.image || "/images/watershed-nature.jpg"}
              alt="Natural watershed and pristine river of Jharkhand"
              fill
              className="object-cover opacity-35 dark:opacity-45 filter brightness-85"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/60 dark:from-[#071F14]/90 dark:via-[#071F14]/75 dark:to-[#071F14]/55" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="badge-pill bg-[#B8CBA5]/30 text-[#123B2A] dark:bg-[#B8CBA5]/20 dark:text-[#B8CBA5] border border-[#123B2A]/10 dark:border-[#B8CBA5]/30">
                  <TreePine className="w-3.5 h-3.5 text-[#E28723]" />
                  {hp.natureSection.badge}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#123B2A] dark:text-white">
                  {hp.natureSection.headingStart}{" "}
                  <span className="italic text-[#1D5139] dark:text-[#B8CBA5]">{hp.natureSection.headingItalic}</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#17231C]/85 dark:text-[#F7F5EC]/85 font-light leading-relaxed max-w-2xl">
                  {hp.natureSection.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-[#F7F5EC] dark:bg-[#123B2A]/80 border border-[#123B2A]/10 dark:border-[#B8CBA5]/20">
                    <TreePine className="w-4 h-4 text-[#E28723] mb-1" />
                    <span className="font-serif text-sm font-semibold text-[#123B2A] dark:text-white block">
                      {hp.natureSection.card1Title}
                    </span>
                    <span className="text-[11px] text-[#17231C]/70 dark:text-[#F7F5EC]/70">
                      {hp.natureSection.card1Desc}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#F7F5EC] dark:bg-[#123B2A]/80 border border-[#123B2A]/10 dark:border-[#B8CBA5]/20">
                    <Leaf className="w-4 h-4 text-[#1D5139] dark:text-[#B8CBA5] mb-1" />
                    <span className="font-serif text-sm font-semibold text-[#123B2A] dark:text-white block">
                      {hp.natureSection.card2Title}
                    </span>
                    <span className="text-[11px] text-[#17231C]/70 dark:text-[#F7F5EC]/70">
                      {hp.natureSection.card2Desc}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#F7F5EC] dark:bg-[#123B2A]/80 border border-[#123B2A]/10 dark:border-[#B8CBA5]/20">
                    <Droplets className="w-4 h-4 text-[#1D5139] dark:text-[#B8CBA5] mb-1" />
                    <span className="font-serif text-sm font-semibold text-[#123B2A] dark:text-white block">
                      {hp.natureSection.card3Title}
                    </span>
                    <span className="text-[11px] text-[#17231C]/70 dark:text-[#F7F5EC]/70">
                      {hp.natureSection.card3Desc}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={hp.natureSection.actionBtnHref || "/nature"}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold tracking-wide shadow transition-all"
                  >
                    <span>{hp.natureSection.actionBtnText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 hidden lg:block">
                <div className="relative h-72 rounded-2xl overflow-hidden border border-[#123B2A]/10 dark:border-white/15 shadow-xl">
                  <Image
                    src={hp.natureSection.sideImage || "/images/tree-planting.jpg"}
                    alt={hp.natureSection.sideTitle}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] text-[#B8CBA5] font-semibold uppercase tracking-wider block">
                      {hp.natureSection.sideTag}
                    </span>
                    <span className="font-serif text-sm">{hp.natureSection.sideTitle}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 6. 24/7 CRISIS RESPONSE SPOTLIGHT (DYNAMIC FROM CMS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative bg-[#F7F5EC] dark:bg-[#071F14] text-[#17231C] dark:text-white rounded-3xl overflow-hidden border border-[#123B2A]/10 dark:border-[#B8CBA5]/20 shadow-xl p-8 sm:p-12">
          <Image
            src="/images/senior-health.jpg"
            alt="Frontline healthcare and relief"
            fill
            className="object-cover opacity-30 dark:opacity-40 filter brightness-85"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F5EC]/90 via-[#F7F5EC]/75 to-[#F7F5EC]/60 dark:from-[#071F14]/90 dark:via-[#071F14]/75 dark:to-[#071F14]/60" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Content from Left */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="left" duration={800}>
                <div className="space-y-5">
                  <span className="badge-pill bg-[#E28723] text-white text-[11px] font-bold">
                    {hp.crisisSection.badge}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-normal leading-tight text-[#123B2A] dark:text-white">
                    {hp.crisisSection.headingStart}{" "}
                    <span className="italic text-[#1D5139] dark:text-[#B8CBA5]">{hp.crisisSection.headingItalic}</span>
                  </h2>
                  <p className="text-sm text-[#17231C]/85 dark:text-[#F7F5EC]/85 font-light leading-relaxed max-w-xl">
                    {hp.crisisSection.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={`tel:${hp.crisisSection.helplinePhone.replace(/\s+/g, "")}`}
                      className="px-6 py-3 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold tracking-wide shadow transition-all flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{hp.crisisSection.helplineBtnText}</span>
                    </a>
                    <Link
                      href={hp.crisisSection.secondaryBtnHref || "/impact"}
                      className="px-6 py-3 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[#123B2A] dark:text-[#F7F5EC] text-xs font-semibold tracking-wide border border-[#123B2A]/10 dark:border-white/20 transition-all"
                    >
                      {hp.crisisSection.secondaryBtnText}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Image from Right */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="right" duration={800} delay={150}>
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-[#123B2A]/10 dark:border-white/10 shadow-lg group">
                  <Image
                    src={hp.crisisSection.image || "/images/volunteer-hands.jpg"}
                    alt={hp.crisisSection.imageTitle}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2419]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] text-[#B8CBA5] font-semibold block uppercase">
                      {hp.crisisSection.imageTag}
                    </span>
                    <span className="font-serif text-sm">{hp.crisisSection.imageTitle}</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CHARITY ART STORE & PAINTINGS FOR NGO DONATIONS (DYNAMIC FROM CMS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative bg-white dark:bg-[#071F14] text-[#17231C] dark:text-white rounded-3xl overflow-hidden border border-[#123B2A]/10 dark:border-[#B8CBA5]/20 shadow-xl p-8 sm:p-12">
          <Image
            src="/images/art-sohrai.jpg"
            alt="Traditional Sohrai tribal art painting"
            fill
            className="object-cover opacity-35 dark:opacity-45 filter brightness-85"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/80 to-white/65 dark:from-[#071F14]/90 dark:via-[#071F14]/80 dark:to-[#071F14]/65" />

          <div className="relative z-10 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#123B2A]/10 dark:border-white/10">
              <div className="max-w-2xl space-y-3">
                <span className="badge-pill bg-[#E28723] text-white text-[11px] font-bold">
                  <Palette className="w-3.5 h-3.5" />
                  {hp.artSpotlight.badge}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#123B2A] dark:text-white">
                  {hp.artSpotlight.headingStart}{" "}
                  <span className="italic text-[#1D5139] dark:text-[#B8CBA5]">{hp.artSpotlight.headingItalic}</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#17231C]/85 dark:text-[#F7F5EC]/85 font-light leading-relaxed">
                  {hp.artSpotlight.description}
                </p>
              </div>

              <div className="flex-shrink-0">
                <Link
                  href={hp.artSpotlight.ctaBtnHref || "/art-store"}
                  className="px-6 py-3.5 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs sm:text-sm font-bold tracking-wide shadow-lg transition-all inline-flex items-center gap-2"
                >
                  <span>{hp.artSpotlight.ctaBtnText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Featured Artwork Cards (Dynamic from content.artStore) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.artStore.slice(0, 4).map((art, idx) => (
                <ScrollReveal key={art.id} direction="up" delay={50 * (idx + 1)}>
                  <div className="bg-[#FDFCF9] dark:bg-[#0D2C1F] rounded-2xl overflow-hidden border border-[#123B2A]/10 dark:border-white/10 group hover:border-[#1D5139]/40 dark:hover:border-[#B8CBA5]/40 transition-all flex flex-col justify-between h-full shadow-sm">
                    <div>
                      <div className="relative h-48 w-full overflow-hidden bg-[#123B2A]">
                        <Image
                          src={art.image || "/images/art-birsa.jpg"}
                          alt={art.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, 25vw"
                        />
                        <div className="absolute top-2.5 left-2.5">
                          <span className="badge-pill bg-[#123B2A]/85 text-[#B8CBA5] backdrop-blur-sm text-[10px]">
                            {art.categoryLabel || "Charity Art"}
                          </span>
                        </div>
                        <div className="absolute top-2.5 right-2.5">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#E28723] text-white text-[10px] font-bold shadow">
                            ₹{art.price.toLocaleString("en-IN")}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 space-y-2">
                        {art.hindiTitle && (
                          <span className="text-[10px] text-[#795943] dark:text-[#B8CBA5]/80 font-medium block">
                            {art.hindiTitle}
                          </span>
                        )}
                        <h4 className="font-serif text-sm font-semibold text-[#123B2A] dark:text-white group-hover:text-[#1D5139] dark:group-hover:text-[#B8CBA5] transition-colors line-clamp-1 leading-snug">
                          {art.title}
                        </h4>
                        <p className="text-[11px] text-[#17231C]/70 dark:text-[#F7F5EC]/70 line-clamp-2">
                          {art.description}
                        </p>
                        {art.impact && (
                          <div className="p-2.5 rounded-xl bg-[#E8F5E9] dark:bg-[#06180F] border border-[#2E7D32]/35 dark:border-[#2E7D32]/60 text-[11px] leading-snug shadow-sm">
                            <span className="font-bold text-[#1B5E20] dark:text-[#A5D6A7] block text-[10px] uppercase tracking-wide">
                              Direct Welfare Impact:
                            </span>
                            <span className="text-[#143E2B] dark:text-[#F1F8E9] font-medium text-[11px]">
                              {art.impact}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="p-4 pt-0">
                      <Link
                        href="/art-store"
                        className="w-full py-2.5 rounded-xl bg-[#123B2A] hover:bg-[#1D5139] text-white text-xs font-bold text-center block transition-all shadow-sm"
                      >
                        Acquire Artwork • ₹{art.price.toLocaleString("en-IN")}
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE PROJECT HUBS MAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up" duration={800}>
          <div className="relative rounded-3xl overflow-hidden p-1 sm:p-2 border border-[#123B2A]/10 dark:border-[#B8CBA5]/20 shadow-xl bg-[#F7F5EC] dark:bg-[#071F14]">
            <Image
              src="/images/hero-forest.jpg"
              alt="Forest backdrop"
              fill
              className="object-cover opacity-35 dark:opacity-45 filter brightness-85"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#F7F5EC]/85 via-[#F7F5EC]/70 to-[#F7F5EC]/85 dark:from-[#071F14]/90 dark:via-[#071F14]/80 dark:to-[#071F14]/90" />
            <div className="relative z-10">
              <InteractiveMap />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 9. VOLUNTEER & DONATE CTA (DYNAMIC FROM CMS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up" duration={700}>
          <div className="relative bg-[#05140D] text-white rounded-3xl p-8 sm:p-12 border border-[#B8CBA5]/25 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl overflow-hidden">
            <Image
              src={hp.volunteerCta.image || "/images/tree-planting.jpg"}
              alt="Volunteers planting native Sal saplings"
              fill
              className="object-cover object-center filter brightness-85"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            {/* Rich cinematic dark gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#05140D]/90 via-[#05140D]/65 to-[#05140D]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05140D] via-transparent to-black/50" />

            <div className="relative z-10 max-w-xl space-y-2">
              <span className="text-xs uppercase tracking-wider text-[#B8CBA5] font-bold">
                {hp.volunteerCta.eyebrow}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal">
                {hp.volunteerCta.headingStart}{" "}
                <span className="italic text-[#B8CBA5]">{hp.volunteerCta.headingItalic}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#F7F5EC]/80 font-light leading-relaxed">
                {hp.volunteerCta.description}
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-3 flex-shrink-0">
              <Link
                href={hp.volunteerCta.primaryBtnHref || "/get-involved"}
                className="px-6 py-3 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold tracking-wide shadow transition-all"
              >
                {hp.volunteerCta.primaryBtnText}
              </Link>
              <Link
                href={hp.volunteerCta.secondaryBtnHref || "/donate"}
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wide border border-white/25 transition-all"
              >
                {hp.volunteerCta.secondaryBtnText}
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
