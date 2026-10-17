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

export const metadata = {
  title: "Our Work & Programs | Jharkhandvasi Parivartan Sangh",
  description:
    "Explore the six core pillars of JPS: Migrant worker crisis assistance, senior citizen healthcare, child protection & education, medical camps, women relief, and tribal cultural preservation.",
};

const programs = [
  {
    id: "migrants",
    title: "Migrant Worker Welfare & Legal Assistance",
    eyebrow: "24/7 Emergency Response",
    image: "/images/community-assembly.jpg",
    overview:
      "Thousands of migrant workers move from rural Jharkhand to industrial and construction corridors across Mumbai and Maharashtra. When sudden industrial accidents, hospital rejections, wage non-payment, or fatal tragedies strike, workers and their families back home are left completely defenseless.",
    activities: [
      "24/7 Helpline operation for stranded and distressed workers across Mumbai MMR.",
      "Emergency hospital coordination, casualty admission support, and patient advocacy.",
      "Mediation with contractors and labor authorities for withheld salaries and compensation.",
      "Complete legal, administrative, and logistical assistance for the dignified repatriation of mortal remains to native ancestral villages.",
    ],
    beneficiaries: "Migrant laborers, daily-wage workers, and their distant families.",
    outcomes:
      "Over hundreds of distress calls addressed, critical emergency admissions facilitated, and families supported during acute humanitarian crises.",
    cta: { text: "Call Emergency Helpline", href: "tel:+919022288222" },
    hasEmergencyPanel: true,
  },
  {
    id: "seniors",
    title: "Senior Citizen Health & Dignity",
    eyebrow: "Geriatric Healthcare",
    image: "/images/senior-health.jpg",
    overview:
      "In low-income and working-class settlements, elderly citizens frequently lack access to routine health monitoring, geriatric specialists, or funds for basic hypertension and diabetes medications. JPS bridges this divide through respectful community health clinics.",
    activities: [
      "Regular free geriatric checkup camps organized in Borivali West and surrounding suburbs.",
      "Screenings for blood pressure, random blood sugar, vision problems, and chronic pain.",
      "Free distribution of basic prescribed medicines and nutritional advice.",
      "Mental health and social companionship circles to prevent elder isolation.",
    ],
    beneficiaries: "Low-income senior citizens, widows, and retired daily-wage laborers.",
    outcomes:
      "Regular health screenings providing early diagnosis for hypertension and chronic ailments, restoring dignity and care to neighborhood elders.",
    cta: { text: "Request Medical Help", href: "/contact" },
  },
  {
    id: "education",
    title: "Child Protection & Education (CWC Collaboration)",
    eyebrow: "Shiksha Protsahan",
    image: "/images/hero-education.jpg",
    overview:
      "Children of seasonal migrant laborers are among the most vulnerable to school dropouts, street labor, and exploitation. JPS works directly at the grassroots to safeguard children's fundamental right to childhood and uninterrupted education.",
    activities: [
      "Institutional coordination with government Child Welfare Committees (CWC) for child safety.",
      "Shiksha Protsahan study kit distribution (school bags, notebooks, geometry boxes, uniforms).",
      "Parental counseling sessions addressing the value of schooling over premature labor.",
      "Volunteer-led foundational reading and arithmetic circles in informal settlements.",
    ],
    beneficiaries: "Underprivileged children, first-generation learners, and at-risk minors.",
    outcomes:
      "Hundreds of learning kits distributed, preventing dropouts and helping children stay enrolled and inspired in regular schools.",
    cta: { text: "Support Child Education", href: "/donate" },
  },
  {
    id: "health",
    title: "Free Medical & Diagnostic Camps",
    eyebrow: "Preventive Care",
    image: "/images/events/eye-camp-medical-checkup.jpg",
    overview:
      "Healthcare should never depend on financial privilege. JPS brings certified medical doctors, nurses, and diagnostic equipment directly into community halls and bastis across Mumbai.",
    activities: [
      "General physician consultations, pediatric checks, and vitals monitoring.",
      "Basic pathology testing and referral networks to municipal public hospitals.",
      "Health hygiene workshops, clean water guidance, and seasonal disease prevention.",
      "Coordination of voluntary blood donation camps for city blood banks.",
    ],
    beneficiaries: "Slum residents, migrant households, women, and underserved families.",
    outcomes:
      "Free medical access provided to community members who otherwise delay medical intervention due to exorbitant private clinical costs.",
    cta: { text: "Host a Health Camp", href: "/contact" },
  },
  {
    id: "women",
    title: "Women Empowerment & Family Welfare Relief",
    eyebrow: "Dignified Livelihoods",
    image: "/images/women-empowerment.jpg",
    overview:
      "Migrant women and single mothers carry immense domestic and financial burdens, often navigating crisis situations in silence. JPS delivers targeted humanitarian assistance, skill mentorship, and relief packages.",
    activities: [
      "Emergency dry ration kit distributions (flour, rice, pulses, cooking oil) to families in acute distress.",
      "Self-Help Group (SHG) guidance, tailoring manuals, and basic vocational kits.",
      "Confidential counseling and mediation for domestic conflicts and legal vulnerability.",
      "Maternal health awareness and infant nutrition assistance.",
    ],
    beneficiaries: "Single mothers, migrant women workers, and distressed households.",
    outcomes:
      "Sustainable relief and self-reliance guidance provided to dozens of families, empowering women as leaders of family well-being.",
    cta: { text: "Support Family Relief", href: "/donate" },
  },
  {
    id: "culture",
    title: "Tribal Heritage & Martyr Tributes",
    eyebrow: "Preserving Cultural Roots",
    image: "/images/events/magazine-launch-babulal-marandi-prahlad-modi.jpg",
    overview:
      "Migrating thousands of kilometers away from ancestral forests can erode cultural identity and indigenous pride. JPS celebrates and preserves the glorious history of Jharkhand's tribal revolutionaries in Mumbai.",
    activities: [
      "Annual celebration of Bhagwan Birsa Munda Smruti Sohala / Jayanti in Mumbai.",
      "Commemoration of tribal freedom fighters Veer Tilka Manjhi, Sidho-Kanho, and Chand-Bhairav.",
      "Traditional festivals such as Karam and Sarhul celebrated with folk music and community solidarity.",
      "Youth workshops on indigenous environmental ethics and the sacred bond between humanity and nature.",
    ],
    beneficiaries: "Jharkhand diaspora community, youth, and the broader Mumbai citizenry.",
    outcomes:
      "Uniting over 5,000 community members annually, instilling cultural self-respect and educating the wider public about tribal contributions to India's freedom.",
    cta: { text: "View Cultural Events", href: "/events" },
  },
];

export default function OurWorkPage() {
  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. EDITORIAL PAGE HEADER */}
      <section className="bg-[#071F14] text-white pt-32 sm:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
        <Image
          src="/images/hero-education.jpg"
          alt="Child education and grassroots work"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071F14] via-[#071F14]/80 to-black/60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="badge-pill bg-[#B8CBA5]/20 text-[#B8CBA5] border border-[#B8CBA5]/30">
              Grassroots Impact Pillars
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              Our Work & <span className="italic text-[#B8CBA5]">Social Welfare</span> Programs
            </h1>
            <p className="text-sm sm:text-base text-[#F7F5EC]/85 font-light leading-relaxed">
              Six dedicated areas of grassroots intervention addressing migrant vulnerability, healthcare access, child literacy, women's resilience, and tribal cultural preservation.
            </p>
          </div>

          {/* Quick Anchor Navigation Strip */}
          <div className="flex flex-wrap gap-2 pt-8">
            {programs.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F7F5EC] text-xs font-semibold tracking-wide border border-white/15 transition-all"
              >
                {p.title.split("&")[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PROGRAM SECTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
        {programs.map((program, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <ScrollReveal
              key={program.id}
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
                    src={program.image}
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
                      Program Pillar 0{idx + 1}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#123B2A]">
                      {program.title}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-[#17231C]/80 font-light leading-relaxed">
                    {program.overview}
                  </p>

                  {/* Emergency Assistance Panel for Migrants */}
                  {program.hasEmergencyPanel && (
                    <div className="p-4 rounded-2xl bg-[#E9F0E4] border border-[#6F8D58]/30 flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#1D5139] flex-shrink-0 mt-0.5" />
                      <div className="text-xs text-[#123B2A]">
                        <strong className="block text-[#1D5139] font-bold">
                          24/7 Migrant Distress Helpline: +91 90222 88222
                        </strong>
                        Our emergency response protocol is active day and night for hospital casualties, accidents, or urgent repatriation coordination.
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#123B2A]">
                      Core Interventions:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#17231C]/80 font-light">
                      {program.activities.map((act, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#1D5139] flex-shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      href={program.cta.href}
                      className="px-6 py-2.5 rounded-full bg-[#123B2A] hover:bg-[#1D5139] text-white text-xs font-bold tracking-wide shadow transition-all flex items-center gap-1.5"
                    >
                      <span>{program.cta.text}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/donate"
                      className="text-xs font-semibold text-[#795943] hover:underline"
                    >
                      Support this initiative →
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
            Need Direct Community Assistance?
          </h3>
          <p className="text-xs sm:text-sm text-[#F7F5EC]/80 font-light leading-relaxed max-w-lg mx-auto">
            Our volunteers in Borivali West and across Mumbai are available to listen, advise, and intervene. Reach out through our verified channels.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="tel:+919022288222"
              className="px-6 py-3 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold tracking-wide shadow transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Helpline: +91 90222 88222</span>
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wide border border-white/20 transition-all"
            >
              Write To Our Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
