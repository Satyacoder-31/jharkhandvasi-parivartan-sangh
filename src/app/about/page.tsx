import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Heart, Users, MapPin, CheckCircle2, Award, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "About Us | Jharkhandvasi Parivartan Sangh",
  description:
    "Learn about Jharkhandvasi Parivartan Sangh (JPS), founded in 2013 by Arvind Arya in Borivali West, Mumbai. Dedicated to migrant welfare, child education, senior healthcare, and cultural unity.",
};

const timelineEvents = [
  {
    year: "2013",
    title: "Founding in Borivali West, Mumbai",
    description:
      "Arvind Arya and dedicated community members established Jharkhandvasi Parivartan Sangh to create a reliable grassroots safety net for migrant workers and vulnerable families living in Mumbai.",
  },
  {
    year: "2015",
    title: "Inauguration of Senior Citizen Health Drives",
    description:
      "Launched periodic free health checkup camps in Mumbai suburban neighborhoods, providing doctor consultations, blood pressure checks, and blood sugar tests for low-income elders.",
  },
  {
    year: "2018",
    title: "Child Literacy & CWC Institutional Collaboration",
    description:
      "Initiated formal coordination with Child Welfare Committees (CWC) and launched the Shiksha Protsahan kit distribution program to ensure children from migrant households remain in school.",
  },
  {
    year: "2020–21",
    title: "Pandemic Crisis Support & Repatriation Assistance",
    description:
      "Mobilized 24/7 helpline intervention during national lockdowns, supplying dry ration packages, coordinating hospital admissions, and facilitating emergency relief between Mumbai and Jharkhand.",
  },
  {
    year: "2023",
    title: "Decade of Community Service & Cultural Solidarity",
    description:
      "Marked 10 years of continuous service with expanded commemorations of Bhagwan Birsa Munda Jayanti, uniting over 5,000 community members and social workers.",
  },
  {
    year: "2026",
    title: "Nature, Sustainability & Environmental Outreach",
    description:
      "Formalized community tree planting drives, native Sal and Mahua sapling nurseries, and environmental education connecting rural ecological roots with urban communities.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. EDITORIAL PAGE HEADER */}
      <section className="bg-[#071F14] text-white pt-32 sm:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
        <Image
          src="/images/community-assembly.jpg"
          alt="Community assembly background"
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071F14] via-[#071F14]/75 to-black/40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="badge-pill bg-[#B8CBA5]/20 text-[#B8CBA5] border border-[#B8CBA5]/30">
              Our Journey • Estd. 2013
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              Rooted in Compassion. <span className="italic text-[#B8CBA5]">Dedicated</span> to Human Dignity.
            </h1>
            <p className="text-sm sm:text-base text-[#F7F5EC]/85 font-light leading-relaxed">
              For over a decade, Jharkhandvasi Parivartan Sangh has stood beside the hardworking migrant labor community, elderly citizens, and young dreamers in Mumbai and Jharkhand.
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#1D5139] rounded-full blur-3xl opacity-40 pointer-events-none" />
      </section>

      {/* 2. FOUNDING STORY & ARVIND ARYA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" duration={900}>
              <div className="relative h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-[#123B2A]/10 group">
                <Image
                  src="/images/community-assembly.jpg"
                  alt="Arvind Arya and community members in Mumbai"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123B2A]/90 via-[#123B2A]/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-xs text-[#E28723] uppercase font-semibold tracking-wider">
                    Founder Leadership
                  </span>
                  <h3 className="font-serif text-xl font-normal">
                    Arvind Arya & Community Social Workers
                  </h3>
                  <p className="text-xs text-[#F7F5EC]/75 font-light">
                    Headquarters in Borivali West, Mumbai
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6">
            <ScrollReveal direction="right" duration={900} delay={150}>
              <div className="space-y-6">
                <span className="badge-pill bg-[#B8CBA5]/20 text-[#123B2A]">
                  Founding Story
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#123B2A] leading-tight">
                  Bridging Distances with <span className="italic text-[#6F8D58]">Grassroots Solidarity</span>
                </h2>
                <p className="text-sm text-[#17231C]/80 leading-relaxed font-light">
                  In 2013, founder <strong>Arvind Arya</strong> recognized an acute gap in institutional support for workers arriving in Mumbai from the mineral-rich, forested plateaus of Jharkhand. Often facing unfamiliar urban legal systems, wage disputes, language barriers, and sudden medical crises with zero family network nearby, thousands of workers had nowhere to turn during emergencies.
                </p>
                <p className="text-sm text-[#17231C]/80 leading-relaxed font-light">
                  Jharkhandvasi Parivartan Sangh began not as an abstract boardroom non-profit, but as a spontaneous brotherhood answering late-night phone calls, visiting suburban hospital casualty wards, and mediating with municipal bodies to ensure that no laborer suffered alone.
                </p>
                <div className="p-4 rounded-2xl bg-[#F7F5EC] border border-[#123B2A]/10 text-xs text-[#123B2A] flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#1D5139] flex-shrink-0" />
                  <span>
                    Operating with transparent community oversight and verified direct action in Borivali West and across Mumbai suburbs.
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. MISSION, VISION, VALUES */}
      <section className="bg-[#F7F5EC] py-16 sm:py-20 border-y border-[#123B2A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="badge-pill bg-[#B8CBA5]/30 text-[#123B2A]">
              Guiding Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#123B2A]">
              The Soul of Our Movement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-[#123B2A]/10 shadow-sm space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E28723]">
                Our Mission
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#123B2A]">
                Unconditional Support
              </h3>
              <p className="text-xs sm:text-sm text-[#17231C]/80 font-light leading-relaxed">
                To provide 24/7 crisis response, healthcare aid, and legal guidance to migrant families, while championing child schooling and elder health through transparent grassroots programs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#123B2A]/10 shadow-sm space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1D5139]">
                Our Vision
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#123B2A]">
                Equal Dignity for All
              </h3>
              <p className="text-xs sm:text-sm text-[#17231C]/80 font-light leading-relaxed">
                A society where every migrant worker lives with protected human rights, every elder receives gentle medical care, no child is deprived of education, and natural habitats thrive.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#123B2A]/10 shadow-sm space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#795943]">
                Core Values
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#123B2A]">
                सेवा, एकता, संघर्ष
              </h3>
              <p className="text-xs sm:text-sm text-[#17231C]/80 font-light leading-relaxed">
                <strong>Service (सेवा), Unity (एकता), Perseverance (संघर्ष), and Integrity (पारदर्शिता)</strong>. We treat every individual seeking assistance as family, without distinction of caste or creed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISUAL MILESTONE TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="badge-pill bg-[#B8CBA5]/20 text-[#123B2A]">
            Organizational Milestones
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#123B2A]">
            A Decade of Continuous Service (2013–2026)
          </h2>
        </div>

        <div className="relative border-l-2 border-[#123B2A]/20 ml-4 sm:ml-32 space-y-12">
          {timelineEvents.map((evt, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              {/* Year Badge on the Left */}
              <div className="sm:absolute sm:-left-32 sm:w-24 sm:text-right sm:top-0.5">
                <span className="font-serif text-lg font-bold text-[#1D5139] bg-[#E9F0E4] px-2.5 py-1 rounded-lg">
                  {evt.year}
                </span>
              </div>

              {/* Dot */}
              <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-[#123B2A] border-4 border-[#FDFCF9] group-hover:scale-125 transition-transform" />

              <div className="bg-white p-6 rounded-2xl border border-[#123B2A]/10 shadow-sm space-y-1 group-hover:shadow-md transition-shadow">
                <h3 className="font-serif text-lg font-normal text-[#123B2A]">
                  {evt.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#17231C]/75 font-light leading-relaxed">
                  {evt.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#123B2A] text-white rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-normal">
            Be Part of Our Next Chapter
          </h3>
          <p className="text-xs sm:text-sm text-[#F7F5EC]/80 font-light leading-relaxed max-w-lg mx-auto">
            Explore our six ongoing programs or join hands with us as an active volunteer in Mumbai or Jharkhand.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/our-work"
              className="px-6 py-3 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold tracking-wide shadow transition-all"
            >
              Explore Our Work
            </Link>
            <Link
              href="/get-involved"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wide border border-white/20 transition-all"
            >
              Join Our Volunteer Force
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
