import Image from "next/image";
import Link from "next/link";
import { Heart, ShieldCheck, CheckCircle2, ArrowRight, Quote, Calendar, MapPin } from "lucide-react";

export const metadata = {
  title: "Impact & Stories | Jharkhandvasi Parivartan Sangh",
  description:
    "Real, verified field stories of compassion and transformation: Migrant crisis assistance, elder healthcare dignity, child education kits, and community solidarity across Mumbai and Jharkhand.",
};

const caseStudies = [
  {
    id: 1,
    title: "Emergency Casualty Assistance for a Stranded Laborer",
    category: "Migrant Relief",
    location: "Borivali West / Suburban Mumbai",
    date: "Field Archive 2025",
    image: "/images/community-assembly.jpg",
    summary:
      "When a 32-year-old construction laborer from Giridih suffered a severe workplace accident with no identification or family present, JPS volunteers arrived at the hospital within an hour.",
    details:
      "Our team coordinated with the treating medical officers, ensured emergency triage care without bureaucratic delay, arranged temporary sustenance, and established contact with his village family. After two weeks of supervised recuperation, JPS facilitated his safe return travel accompanied by a community volunteer.",
    outcome: "Full physical recovery and dignified reunification with family.",
  },
  {
    id: 2,
    title: "Restoring Health and Mobility for Elderly Widow Parvati Devi",
    category: "Senior Healthcare",
    location: "Borivali West Community Camp",
    date: "Camp Record 2025",
    image: "/images/senior-health.jpg",
    summary:
      "A 68-year-old elderly resident suffering from undiagnosed chronic hypertension and vision impairment received thorough free diagnostics at our monthly camp.",
    details:
      "Volunteer doctors conducted vitals screening, diagnosed stage-2 hypertension, and provided a two-month course of maintenance medication alongside dietary counseling. Our local youth volunteers established a weekly check-in routine to monitor her blood pressure and ensure prescription adherence.",
    outcome: "Stabilized blood pressure and active inclusion in elder support circles.",
  },
  {
    id: 3,
    title: "Shiksha Protsahan: Keeping Sunita in the Classroom",
    category: "Child Education",
    location: "Informal Settlement Learning Circle",
    date: "Academic Year 2025–26",
    image: "/images/hero-education.jpg",
    summary:
      "11-year-old Sunita, the eldest daughter of seasonal brick kiln laborers, faced school dropout due to a lack of basic school bags, textbooks, and fees.",
    details:
      "Through our Shiksha Protsahan drive, JPS supplied Sunita with a complete academic kit—uniform, notebooks, school bag, and geometry tools. Our education coordinator spoke with her parents, demonstrating the long-term benefit of unbroken schooling, and facilitated her enrollment in a local municipal school.",
    outcome: "Unbroken school attendance and top academic marks in class.",
  },
  {
    id: 4,
    title: "Reviving Degraded Red Soil with Native Sal Nurseries",
    category: "Environmental Action",
    location: "Saranda Foothills, West Singhbhum",
    date: "Monsoon Drive 2025",
    image: "/images/tree-planting.jpg",
    summary:
      "Tribal youth and community elders united to plant over 150 native Sal, Mahua, and Karanj saplings along an eroded hillside prone to topsoil runoff.",
    details:
      "Utilizing indigenous seed propagation techniques, the community nurtured saplings during the monsoon, creating earthen trenches to capture rainwater runoff. Six months later, over 85% of saplings had taken root, creating natural vegetative cover across what was previously barren soil.",
    outcome: "Reduced soil erosion and revitalized village watershed catchment.",
  },
];

export default function ImpactPage() {
  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. EDITORIAL PAGE HEADER */}
      <section className="bg-[#071F14] text-white pt-32 sm:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
        <Image
          src="/images/senior-health.jpg"
          alt="Healthcare camp and community support"
          fill
          priority
          className="object-cover opacity-50 filter brightness-85"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071F14] via-[#071F14]/80 to-black/60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="badge-pill bg-[#B8CBA5]/20 text-[#B8CBA5] border border-[#B8CBA5]/30">
              Grassroots Testimonies
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              Stories of <span className="italic text-[#B8CBA5]">Transformation</span> and Resilience
            </h1>
            <p className="text-sm sm:text-base text-[#F7F5EC]/85 font-light leading-relaxed">
              Every initiative of Jharkhandvasi Parivartan Sangh is measured not in abstract figures, but in real human dignity restored, children educated, and ecosystems revived.
            </p>
          </div>
        </div>
      </section>

      {/* 2. VERIFIED IMPACT METRICS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#F7F5EC] rounded-3xl p-8 border border-[#123B2A]/10 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs uppercase tracking-wider text-[#795943] font-bold">
              Verified Social Benchmarks
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#123B2A] mt-1">
              Honest Accountability to Our Community
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-white rounded-2xl border border-[#123B2A]/10">
              <span className="font-serif text-3xl font-bold text-[#1D5139] block">13+</span>
              <span className="text-xs text-[#17231C]/80 mt-1 block">Years of Grassroots Action</span>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-[#123B2A]/10">
              <span className="font-serif text-3xl font-bold text-[#E28723] block">5,200+</span>
              <span className="text-xs text-[#17231C]/80 mt-1 block">Connected Community Members</span>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-[#123B2A]/10">
              <span className="font-serif text-3xl font-bold text-[#1D5139] block">100+</span>
              <span className="text-xs text-[#17231C]/80 mt-1 block">Free Camps & Outreach Drives</span>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-[#123B2A]/10">
              <span className="font-serif text-3xl font-bold text-[#795943] block">24/7</span>
              <span className="text-xs text-[#17231C]/80 mt-1 block">Verified Emergency Helpline</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CASE STUDIES & STORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="max-w-2xl">
          <span className="badge-pill bg-[#B8CBA5]/20 text-[#123B2A] mb-2">
            Field Narratives
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#123B2A]">
            Real Stories From the Ground
          </h2>
          <p className="text-xs sm:text-sm text-[#795943] font-light mt-1">
            Names and identifying details are respectfully anonymized where necessary to safeguard beneficiary dignity and privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((story) => (
            <article
              key={story.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#123B2A]/10 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="badge-pill bg-[#123B2A]/85 text-[#B8CBA5] backdrop-blur-sm text-[10px]">
                      {story.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#795943]">
                    <span>📍 {story.location}</span>
                    <span className="font-mono">{story.date}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#123B2A] leading-snug">
                    {story.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#17231C]/80 font-light leading-relaxed">
                    {story.summary}
                  </p>

                  <div className="p-4 rounded-2xl bg-[#F7F5EC] border border-[#123B2A]/10 space-y-1 text-xs">
                    <strong className="text-[#123B2A] font-semibold block">Field Intervention:</strong>
                    <p className="text-[#17231C]/75 font-light leading-relaxed">
                      {story.details}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 border-t border-[#123B2A]/10 mt-4 flex items-center justify-between text-xs">
                <span className="text-[#1D5139] font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E28723]" />
                  <span>{story.outcome}</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#123B2A] text-white rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-normal">
            Help Write the Next Story of Transformation
          </h3>
          <p className="text-xs sm:text-sm text-[#F7F5EC]/80 font-light leading-relaxed max-w-lg mx-auto">
            Your volunteer hours or contributions directly empower the next child, elder, or family in urgent need.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/donate"
              className="px-6 py-3 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold tracking-wide shadow transition-all"
            >
              Support a Family (Donate)
            </Link>
            <Link
              href="/get-involved"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wide border border-white/20 transition-all"
            >
              Join Our Field Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
