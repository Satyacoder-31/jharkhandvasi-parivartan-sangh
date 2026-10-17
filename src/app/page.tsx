import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  ShieldCheck,
  CheckCircle,
  Phone,
  Calendar,
  Users,
  Sparkles,
  BookOpen,
  MapPin,
  ExternalLink,
  Stethoscope,
  HeartHandshake,
  Palette,
  Tag,
  TreePine,
  Droplets,
  Leaf,
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import InteractiveMap from "@/components/InteractiveMap";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Jharkhandvasi Parivartan Sangh | सेवा से परिवर्तन की ओर",
  description:
    "Official website of Jharkhandvasi Parivartan Sangh (JPS). A grassroots social welfare NGO serving migrant workers, vulnerable elders, and underprivileged children across Mumbai and Jharkhand. Helpline: +91 78080 08058 / +91 90222 88222.",
};

export default function HomePage() {
  return (
    <div className="space-y-16 lg:space-y-24 pb-16 overflow-hidden">
      {/* 1. CINEMATIC HERO SLIDESHOW (NGO WELFARE FOCUS IN NATURE THEME) */}
      <HeroSlider />

      {/* 2. VERIFIED STATISTICS STRIP (ANIMATED INCREASING NUMBERS ON SCROLL) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up" duration={800}>
          <div className="relative bg-[#123B2A] dark:bg-[#071F14] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#B8CBA5]/20 overflow-hidden">
            <Image
              src="/images/tree-planting.jpg"
              alt="Native Sal trees and soil restoration nature backdrop"
              fill
              className="object-cover opacity-45 filter brightness-85"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071F14]/90 via-[#071F14]/75 to-[#071F14]/85 dark:from-[#071F14]/90 dark:via-[#071F14]/75 dark:to-[#071F14]/85" />
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {/* Stat 1: 20+ Years */}
              <div className="pt-4 sm:pt-0 sm:px-4 text-center">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#B8CBA5] block">
                  <AnimatedCounter target={20} suffix="+" duration={1800} />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-1 block">
                  Years of NGO Service
                </span>
                <span className="text-[11px] text-[#F7F5EC]/65 block mt-0.5">
                  Estd. 2005 • Regd. 2013
                </span>
              </div>

              {/* Stat 2: 5200+ Network */}
              <div className="pt-4 sm:pt-0 sm:px-4 text-center">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E28723] block">
                  <AnimatedCounter target={5200} suffix="+" duration={2200} />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-1 block">
                  Community Network
                </span>
                <span className="text-[11px] text-[#F7F5EC]/65 block mt-0.5">
                  Workers & Families Connected
                </span>
              </div>

              {/* Stat 3: 100+ Camps */}
              <div className="pt-4 sm:pt-0 sm:px-4 text-center">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#B8CBA5] block">
                  <AnimatedCounter target={100} suffix="+" duration={2000} />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-1 block">
                  Health & Relief Camps
                </span>
                <span className="text-[11px] text-[#F7F5EC]/65 block mt-0.5">
                  Free Medical & Education Drives
                </span>
              </div>

              {/* Stat 4: 24/7 Helpline */}
              <div className="pt-4 sm:pt-0 sm:px-4 text-center">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white block">
                  24/7
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-1 block">
                  Emergency Helpline
                </span>
                <span className="text-[11px] text-[#E28723] font-mono block mt-0.5">
                  +91 78080 08058
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. INTRODUCTION: WHO WE ARE (NATURE BACKGROUND PHOTO ON SCROLL) */}
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
            {/* Left Text Column: Slides from Left */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="left" duration={900}>
                <div className="space-y-6">
                  <span className="badge-pill bg-[#B8CBA5]/30 text-[#123B2A] dark:bg-[#B8CBA5]/20 dark:text-[#B8CBA5] border border-[#123B2A]/10 dark:border-[#B8CBA5]/30">
                    About Our NGO
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#123B2A] dark:text-white leading-tight">
                    Serving the Underserved with <span className="italic text-[#1D5139] dark:text-[#B8CBA5]">Dignity</span> and Compassion
                  </h2>
                  <p className="text-sm sm:text-base text-[#17231C]/85 dark:text-[#F7F5EC]/85 leading-relaxed font-light">
                    <strong>Jharkhandvasi Parivartan Sangh (JPS)</strong> is a grassroots non-governmental social welfare organization headquartered in Borivali West, Mumbai. Founded under the leadership of <strong>Arvind Arya</strong>, JPS is dedicated to protecting the rights, healthcare, and dignity of migrant laborers, vulnerable elders, and marginalized children.
                  </p>
                  <p className="text-sm text-[#17231C]/80 dark:text-[#F7F5EC]/80 leading-relaxed font-light">
                    Whether providing 24/7 emergency intervention for injured or stranded workers, coordinating with government Child Welfare Committees (CWC) to keep children in schools, or hosting free geriatric diagnostic health camps in suburban neighborhoods, our mission is human transformation: <em>"समाज के लिए, समाज के साथ"</em>.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      href="/about"
                      className="px-6 py-3 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold tracking-wide shadow transition-all flex items-center gap-2 group"
                    >
                      <span>Read Founding Story</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/contact"
                      className="px-6 py-3 rounded-full border border-[#123B2A]/20 dark:border-white/20 text-[#123B2A] dark:text-[#F7F5EC] hover:bg-black/5 dark:hover:bg-white/10 text-xs font-semibold tracking-wide transition-all"
                    >
                      Connect With Our Team
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Image Column: Slides from Right */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="right" duration={900} delay={150}>
                <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl border border-[#123B2A]/10 dark:border-white/15 group">
                  <Image
                    src="/images/community-assembly.jpg"
                    alt="Community assembly of Jharkhandvasi Parivartan Sangh in Mumbai"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071F14]/90 via-[#071F14]/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-xs uppercase tracking-wider text-[#B8CBA5] font-semibold">
                      एक ज़रूरत • एक प्रयास • एक बदलाव
                    </span>
                    <h4 className="font-serif text-lg font-normal">
                      Grassroots Community Assembly & Workers' Welfare
                    </h4>
                    <p className="text-xs text-[#F7F5EC]/75 font-light">
                      Mumbai Suburban Community Hall
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIX CORE NGO PROGRAMS (SCROLL REVEAL STAGGER WITH NATURE FOREST BACKGROUND) */}
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
                Our NGO In Action
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#123B2A] dark:text-white">
                Grassroots Programs Transforming <span className="italic text-[#1D5139] dark:text-[#B8CBA5]">Lives</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#17231C]/80 dark:text-[#F7F5EC]/80 font-light leading-relaxed">
                Direct humanitarian action conducted across Mumbai suburban neighborhoods and coordinated with regional teams in Jharkhand.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Migrant Worker Welfare */}
            <ScrollReveal direction="up" delay={50}>
              <div className="bg-white dark:bg-[#0D2C1F] rounded-3xl overflow-hidden border border-[#123B2A]/10 dark:border-[#B8CBA5]/20 shadow-md hover:shadow-xl hover:border-[#1D5139]/40 dark:hover:border-[#B8CBA5]/50 transition-all group flex flex-col justify-between h-full">
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/images/community-assembly.jpg"
                      alt="Migrant Worker Welfare and Legal Aid"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="badge-pill bg-[#123B2A] text-[#B8CBA5] dark:bg-[#071F14]/90 backdrop-blur-sm text-[10px] border border-white/10">
                        24/7 Helpline
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-xl font-normal text-[#123B2A] dark:text-white group-hover:text-[#1D5139] dark:group-hover:text-[#B8CBA5] transition-colors">
                      Migrant Worker Welfare & Legal Aid
                    </h3>
                    <p className="text-xs text-[#17231C]/75 dark:text-[#F7F5EC]/75 font-light leading-relaxed">
                      Immediate intervention for workers facing wage withholding, emergency trauma, medical crisis, and dignified repatriation of mortal remains.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href="/our-work#migrants"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D5139] dark:text-[#B8CBA5] group-hover:underline"
                  >
                    <span>Explore Program</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* 2. Senior Citizen Health */}
            <ScrollReveal direction="up" delay={150}>
              <div className="bg-white dark:bg-[#0D2C1F] rounded-3xl overflow-hidden border border-[#123B2A]/10 dark:border-[#B8CBA5]/20 shadow-md hover:shadow-xl hover:border-[#1D5139]/40 dark:hover:border-[#B8CBA5]/50 transition-all group flex flex-col justify-between h-full">
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/images/senior-health.jpg"
                      alt="Senior Citizen Health and Dignity"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="badge-pill bg-[#123B2A] text-[#B8CBA5] dark:bg-[#071F14]/90 backdrop-blur-sm text-[10px] border border-white/10">
                        Elder Care
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-xl font-normal text-[#123B2A] dark:text-white group-hover:text-[#1D5139] dark:group-hover:text-[#B8CBA5] transition-colors">
                      Senior Citizen Health & Dignity
                    </h3>
                    <p className="text-xs text-[#17231C]/75 dark:text-[#F7F5EC]/75 font-light leading-relaxed">
                      Free specialized geriatric checkups, blood sugar and pressure testing, and continuous diagnostic care for elderly residents in Borivali West.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href="/our-work#seniors"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D5139] dark:text-[#B8CBA5] group-hover:underline"
                  >
                    <span>Explore Program</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* 3. Child Protection & Education */}
            <ScrollReveal direction="up" delay={250}>
              <div className="bg-white dark:bg-[#0D2C1F] rounded-3xl overflow-hidden border border-[#123B2A]/10 dark:border-[#B8CBA5]/20 shadow-md hover:shadow-xl hover:border-[#1D5139]/40 dark:hover:border-[#B8CBA5]/50 transition-all group flex flex-col justify-between h-full">
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/images/hero-education.jpg"
                      alt="Child Protection and Education"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="badge-pill bg-[#123B2A] text-[#B8CBA5] dark:bg-[#071F14]/90 backdrop-blur-sm text-[10px] border border-white/10">
                        Child Literacy
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-xl font-normal text-[#123B2A] dark:text-white group-hover:text-[#1D5139] dark:group-hover:text-[#B8CBA5] transition-colors">
                      Child Protection & Education
                    </h3>
                    <p className="text-xs text-[#17231C]/75 dark:text-[#F7F5EC]/75 font-light leading-relaxed">
                      Active coordination with Child Welfare Committees (CWC) to prevent exploitation, alongside distributing Shiksha Protsahan study kits.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href="/our-work#education"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D5139] dark:text-[#B8CBA5] group-hover:underline"
                  >
                    <span>Explore Program</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* 4. Free Medical Camps */}
            <ScrollReveal direction="up" delay={100}>
              <div className="bg-white dark:bg-[#0D2C1F] rounded-3xl overflow-hidden border border-[#123B2A]/10 dark:border-[#B8CBA5]/20 shadow-md hover:shadow-xl hover:border-[#1D5139]/40 dark:hover:border-[#B8CBA5]/50 transition-all group flex flex-col justify-between h-full">
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/images/events/eye-camp-medical-checkup.jpg"
                      alt="Free Medical & Diagnostic Health Camps"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="badge-pill bg-[#123B2A] text-[#B8CBA5] dark:bg-[#071F14]/90 backdrop-blur-sm text-[10px] border border-white/10">
                        Free Clinics
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-xl font-normal text-[#123B2A] dark:text-white group-hover:text-[#1D5139] dark:group-hover:text-[#B8CBA5] transition-colors">
                      Free Medical & Diagnostic Camps
                    </h3>
                    <p className="text-xs text-[#17231C]/75 dark:text-[#F7F5EC]/75 font-light leading-relaxed">
                      Bringing doctors and pathology diagnostic tests directly into low-income communities to treat acute ailments and distribute medicines.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href="/our-work#health"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D5139] dark:text-[#B8CBA5] group-hover:underline"
                  >
                    <span>Explore Program</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* 5. Women & Family Relief */}
            <ScrollReveal direction="up" delay={200}>
              <div className="bg-white dark:bg-[#0D2C1F] rounded-3xl overflow-hidden border border-[#123B2A]/10 dark:border-[#B8CBA5]/20 shadow-md hover:shadow-xl hover:border-[#1D5139]/40 dark:hover:border-[#B8CBA5]/50 transition-all group flex flex-col justify-between h-full">
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/images/women-empowerment.jpg"
                      alt="Women and Family Relief Support"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="badge-pill bg-[#123B2A] text-[#B8CBA5] dark:bg-[#071F14]/90 backdrop-blur-sm text-[10px] border border-white/10">
                        Family Relief
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-xl font-normal text-[#123B2A] dark:text-white group-hover:text-[#1D5139] dark:group-hover:text-[#B8CBA5] transition-colors">
                      Women & Family Relief
                    </h3>
                    <p className="text-xs text-[#17231C]/75 dark:text-[#F7F5EC]/75 font-light leading-relaxed">
                      Emergency dry ration kits, counseling for single mothers in distress, domestic dispute mediation, and self-reliance guidance.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href="/our-work#women"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D5139] dark:text-[#B8CBA5] group-hover:underline"
                  >
                    <span>Explore Program</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* 6. Cultural Heritage */}
            <ScrollReveal direction="up" delay={300}>
              <div className="bg-white dark:bg-[#0D2C1F] rounded-3xl overflow-hidden border border-[#123B2A]/10 dark:border-[#B8CBA5]/20 shadow-md hover:shadow-xl hover:border-[#1D5139]/40 dark:hover:border-[#B8CBA5]/50 transition-all group flex flex-col justify-between h-full">
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/images/events/sthapna-diwas-stage-felicitation.jpg"
                      alt="Jharkhand Sthapna Diwas Mahotsav Cultural Commemoration"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="badge-pill bg-[#123B2A] text-[#B8CBA5] dark:bg-[#071F14]/90 backdrop-blur-sm text-[10px] border border-white/10">
                        Cultural Unity
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-xl font-normal text-[#123B2A] dark:text-white group-hover:text-[#1D5139] dark:group-hover:text-[#B8CBA5] transition-colors">
                      Tribal Heritage & Martyr Tributes
                    </h3>
                    <p className="text-xs text-[#17231C]/75 dark:text-[#F7F5EC]/75 font-light leading-relaxed">
                      Annual commemorations honoring freedom fighter Bhagwan Birsa Munda, Veer Tilka Manjhi, Sidho-Kanho, and traditional community festivals.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href="/our-work#culture"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D5139] dark:text-[#B8CBA5] group-hover:underline"
                  >
                    <span>Explore Program</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. NATURE & ECOLOGICAL HARMONY (NATURE BACKGROUND PHOTO ON SCROLL) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up" duration={800}>
          <div className="relative bg-white dark:bg-[#071F14] text-[#17231C] dark:text-white rounded-3xl overflow-hidden border border-[#123B2A]/10 dark:border-[#B8CBA5]/25 shadow-xl p-8 sm:p-12 lg:p-14">
            <Image
              src="/images/watershed-nature.jpg"
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
                  प्रकृति और पर्यावरण संरक्षण • Nature & Sustainability
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#123B2A] dark:text-white">
                  Connecting Sacred Sal Forests, Clean Waters & <span className="italic text-[#1D5139] dark:text-[#B8CBA5]">Community Welfare</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#17231C]/85 dark:text-[#F7F5EC]/85 font-light leading-relaxed max-w-2xl">
                  Jharkhand is defined by its deep sacred groves, Sal and Mahua canopies, and living river watersheds. At JPS, environmental conservation is an organic part of human upliftment. We nurture native sapling nurseries, protect natural aquifers, and unite diaspora families in ecological respect.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-[#F7F5EC] dark:bg-[#123B2A]/80 border border-[#123B2A]/10 dark:border-[#B8CBA5]/20">
                    <TreePine className="w-4 h-4 text-[#E28723] mb-1" />
                    <span className="font-serif text-sm font-semibold text-[#123B2A] dark:text-white block">15,000+ Native Saplings</span>
                    <span className="text-[11px] text-[#17231C]/70 dark:text-[#F7F5EC]/70">Sal & Mahua Nursery Drives</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#F7F5EC] dark:bg-[#123B2A]/80 border border-[#123B2A]/10 dark:border-[#B8CBA5]/20">
                    <Leaf className="w-4 h-4 text-[#1D5139] dark:text-[#B8CBA5] mb-1" />
                    <span className="font-serif text-sm font-semibold text-[#123B2A] dark:text-white block">Sarhul Forest Reverence</span>
                    <span className="text-[11px] text-[#17231C]/70 dark:text-[#F7F5EC]/70">Sacred Tribal Tree Tradition</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#F7F5EC] dark:bg-[#123B2A]/80 border border-[#123B2A]/10 dark:border-[#B8CBA5]/20">
                    <Droplets className="w-4 h-4 text-[#1D5139] dark:text-[#B8CBA5] mb-1" />
                    <span className="font-serif text-sm font-semibold text-[#123B2A] dark:text-white block">Watershed Protection</span>
                    <span className="text-[11px] text-[#17231C]/70 dark:text-[#F7F5EC]/70">Stream Soil Stabilization</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/nature"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold tracking-wide shadow transition-all"
                  >
                    <span>Explore Signature Nature Mission</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 hidden lg:block">
                <div className="relative h-72 rounded-2xl overflow-hidden border border-[#123B2A]/10 dark:border-white/15 shadow-xl">
                  <Image
                    src="/images/tree-planting.jpg"
                    alt="Community tree planting in Jharkhand"
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] text-[#B8CBA5] font-semibold uppercase tracking-wider block">
                      Ground Action
                    </span>
                    <span className="font-serif text-sm">Community Native Sapling Planting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 6. 24/7 CRISIS RESPONSE SPOTLIGHT (LEFT/RIGHT SCROLL REVEAL) */}
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
                    24/7 Crisis Response Protocol
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-normal leading-tight text-[#123B2A] dark:text-white">
                    Emergency Intervention for <span className="italic text-[#1D5139] dark:text-[#B8CBA5]">Migrant Workers</span>
                  </h2>
                  <p className="text-sm text-[#17231C]/85 dark:text-[#F7F5EC]/85 font-light leading-relaxed max-w-xl">
                    When an underprivileged worker faces sudden medical trauma, accident, or acute crisis in Mumbai, families hundreds of kilometers away in Jharkhand have nowhere to turn. Our volunteer team arrives at hospitals and police jurisdictions day and night to provide immediate patient advocacy and dignified repatriation support.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href="tel:+917808008058"
                      className="px-6 py-3 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold tracking-wide shadow transition-all flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Helpline: +91 78080 08058</span>
                    </a>
                    <Link
                      href="/impact"
                      className="px-6 py-3 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[#123B2A] dark:text-[#F7F5EC] text-xs font-semibold tracking-wide border border-[#123B2A]/10 dark:border-white/20 transition-all"
                    >
                      Read Field Case Studies
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
                    src="/images/volunteer-hands.jpg"
                    alt="JPS volunteers supporting community in Mumbai"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2419]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] text-[#B8CBA5] font-semibold block uppercase">
                      Field Volunteers
                    </span>
                    <span className="font-serif text-sm">Compassionate Frontline Support</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CHARITY ART STORE & PAINTINGS FOR NGO DONATIONS (कला से सेवा) */}
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
                  कला से सेवा • Art for Social Impact
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#123B2A] dark:text-white">
                  Portraits & Tribal Paintings <span className="italic text-[#1D5139] dark:text-[#B8CBA5]">for Charity</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#17231C]/85 dark:text-[#F7F5EC]/85 font-light leading-relaxed">
                  Support JPS by acquiring authentic handmade artworks created by indigenous tribal artisans and youth painters. 100% of your suggested donation directly finances medicine for destitute seniors, school kits for children, and emergency relief for stranded migrant workers.
                </p>
              </div>

              <div className="flex-shrink-0">
                <Link
                  href="/art-store"
                  className="px-6 py-3.5 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs sm:text-sm font-bold tracking-wide shadow-lg transition-all inline-flex items-center gap-2"
                >
                  <span>Browse Charity Art Store</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 4 Featured Artwork Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Art 1: Birsa Munda Portrait */}
              <ScrollReveal direction="up" delay={50}>
                <div className="bg-[#FDFCF9] dark:bg-[#0D2C1F] rounded-2xl overflow-hidden border border-[#123B2A]/10 dark:border-white/10 group hover:border-[#1D5139]/40 dark:hover:border-[#B8CBA5]/40 transition-all flex flex-col justify-between h-full">
                  <div>
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src="/images/art-birsa.jpg"
                        alt="Bhagwan Birsa Munda Oil Portrait"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 25vw"
                      />
                      <div className="absolute top-2.5 right-2.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#E28723] text-white text-[10px] font-bold shadow">
                          Donation: ₹7,500
                        </span>
                      </div>
                    </div>
                    <div className="p-4 space-y-1.5">
                      <span className="text-[10px] text-[#1D5139] dark:text-[#B8CBA5] font-semibold uppercase tracking-wider block">
                        Historical Portrait
                      </span>
                      <h4 className="font-serif text-sm font-medium text-[#123B2A] dark:text-white group-hover:text-[#1D5139] dark:group-hover:text-[#B8CBA5] transition-colors line-clamp-1">
                        Bhagwan Birsa Munda Oil Portrait
                      </h4>
                      <p className="text-[11px] text-[#17231C]/70 dark:text-[#F7F5EC]/70 line-clamp-2">
                        Fine art oil on canvas honoring the tribal freedom fighter and folk hero.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <Link
                      href="/art-store"
                      className="w-full py-2 rounded-xl bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 text-[#123B2A] dark:text-[#B8CBA5] dark:hover:text-white text-xs font-semibold text-center block transition-all"
                    >
                      Acquire Artwork
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              {/* Art 2: Sohrai Tree of Life */}
              <ScrollReveal direction="up" delay={100}>
                <div className="bg-[#FDFCF9] dark:bg-[#0D2C1F] rounded-2xl overflow-hidden border border-[#123B2A]/10 dark:border-white/10 group hover:border-[#1D5139]/40 dark:hover:border-[#B8CBA5]/40 transition-all flex flex-col justify-between h-full">
                  <div>
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src="/images/art-sohrai.jpg"
                        alt="Sohrai Tree of Life Mural"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 25vw"
                      />
                      <div className="absolute top-2.5 right-2.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#E28723] text-white text-[10px] font-bold shadow">
                          Donation: ₹4,500
                        </span>
                      </div>
                    </div>
                    <div className="p-4 space-y-1.5">
                      <span className="text-[10px] text-[#1D5139] dark:text-[#B8CBA5] font-semibold uppercase tracking-wider block">
                        Traditional Sohrai Art
                      </span>
                      <h4 className="font-serif text-sm font-medium text-[#123B2A] dark:text-white group-hover:text-[#1D5139] dark:group-hover:text-[#B8CBA5] transition-colors line-clamp-1">
                        Tree of Life (Kalpavriksha) Mural
                      </h4>
                      <p className="text-[11px] text-[#17231C]/70 dark:text-[#F7F5EC]/70 line-clamp-2">
                        Intricate indigenous earth pigments depicting peacocks, deer, and the sacred tree.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <Link
                      href="/art-store"
                      className="w-full py-2 rounded-xl bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 text-[#123B2A] dark:text-[#B8CBA5] dark:hover:text-white text-xs font-semibold text-center block transition-all"
                    >
                      Acquire Artwork
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              {/* Art 3: Sarhul Folk Festival */}
              <ScrollReveal direction="up" delay={150}>
                <div className="bg-[#FDFCF9] dark:bg-[#0D2C1F] rounded-2xl overflow-hidden border border-[#123B2A]/10 dark:border-white/10 group hover:border-[#1D5139]/40 dark:hover:border-[#B8CBA5]/40 transition-all flex flex-col justify-between h-full">
                  <div>
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src="/images/art-sarhul.jpg"
                        alt="Sarhul Sal Blossom Celebration Dance"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 25vw"
                      />
                      <div className="absolute top-2.5 right-2.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#E28723] text-white text-[10px] font-bold shadow">
                          Donation: ₹3,600
                        </span>
                      </div>
                    </div>
                    <div className="p-4 space-y-1.5">
                      <span className="text-[10px] text-[#1D5139] dark:text-[#B8CBA5] font-semibold uppercase tracking-wider block">
                        Tribal Folk Culture
                      </span>
                      <h4 className="font-serif text-sm font-medium text-[#123B2A] dark:text-white group-hover:text-[#1D5139] dark:group-hover:text-[#B8CBA5] transition-colors line-clamp-1">
                        Sarhul Sal Blossom Celebration
                      </h4>
                      <p className="text-[11px] text-[#17231C]/70 dark:text-[#F7F5EC]/70 line-clamp-2">
                        Vibrant village dance celebrating the blooming Sal tree and spring harvest.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <Link
                      href="/art-store"
                      className="w-full py-2 rounded-xl bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 text-[#123B2A] dark:text-[#B8CBA5] dark:hover:text-white text-xs font-semibold text-center block transition-all"
                    >
                      Acquire Artwork
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              {/* Art 4: Netarhat Forest Watercolor */}
              <ScrollReveal direction="up" delay={200}>
                <div className="bg-[#FDFCF9] dark:bg-[#0D2C1F] rounded-2xl overflow-hidden border border-[#123B2A]/10 dark:border-white/10 group hover:border-[#1D5139]/40 dark:hover:border-[#B8CBA5]/40 transition-all flex flex-col justify-between h-full">
                  <div>
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src="/images/art-forest.jpg"
                        alt="Netarhat Sal Canopy & River Mist"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 25vw"
                      />
                      <div className="absolute top-2.5 right-2.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#E28723] text-white text-[10px] font-bold shadow">
                          Donation: ₹2,800
                        </span>
                      </div>
                    </div>
                    <div className="p-4 space-y-1.5">
                      <span className="text-[10px] text-[#1D5139] dark:text-[#B8CBA5] font-semibold uppercase tracking-wider block">
                        Nature Landscape
                      </span>
                      <h4 className="font-serif text-sm font-medium text-[#123B2A] dark:text-white group-hover:text-[#1D5139] dark:group-hover:text-[#B8CBA5] transition-colors line-clamp-1">
                        Netarhat Sal Canopy & Mist
                      </h4>
                      <p className="text-[11px] text-[#17231C]/70 dark:text-[#F7F5EC]/70 line-clamp-2">
                        Serene watercolor capturing the ancient hills and mist-laden rivers of Chota Nagpur.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <Link
                      href="/art-store"
                      className="w-full py-2 rounded-xl bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 text-[#123B2A] dark:text-[#B8CBA5] dark:hover:text-white text-xs font-semibold text-center block transition-all"
                    >
                      Acquire Artwork
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE PROJECT HUBS MAP (SCROLL REVEAL UP WITH NATURE BACKGROUND) */}
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
            <div className="absolute inset-0 bg-gradient-to-b from-[#F7F5EC]/85 via-[#F7F5EC]/75 to-[#F7F5EC]/85 dark:from-[#071F14]/90 dark:via-[#071F14]/80 dark:to-[#071F14]/90" />
            <div className="relative z-10">
              <InteractiveMap />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 9. VOLUNTEER & DONATE CTA (SCROLL REVEAL FADE WITH BACKGROUND IMAGE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up" duration={700}>
          <div className="relative bg-[#123B2A] dark:bg-[#071F14] text-white rounded-3xl p-8 sm:p-12 border border-[#B8CBA5]/25 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl overflow-hidden">
            <Image
              src="/images/tree-planting.jpg"
              alt="Volunteers planting native Sal saplings"
              fill
              className="object-cover opacity-45 filter brightness-85"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#123B2A]/90 via-[#123B2A]/75 to-[#123B2A]/60 dark:from-[#071F14]/90 dark:via-[#071F14]/75 dark:to-[#071F14]/60" />

            <div className="relative z-10 max-w-xl space-y-2">
              <span className="text-xs uppercase tracking-wider text-[#B8CBA5] font-bold">
                Direct Grassroots Participation
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal">
                Your Time & Support Turn Compassion Into <span className="italic text-[#B8CBA5]">Enduring Action</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#F7F5EC]/80 font-light leading-relaxed">
                Whether you can volunteer at weekend health camps, mentor a child, or contribute towards emergency patient relief, every action counts.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-3 flex-shrink-0">
              <Link
                href="/get-involved"
                className="px-6 py-3 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold tracking-wide shadow transition-all"
              >
                Become a Volunteer
              </Link>
              <Link
                href="/donate"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wide border border-white/25 transition-all"
              >
                Make a Contribution
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
