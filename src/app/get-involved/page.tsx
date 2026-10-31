import Image from "next/image";
import Link from "next/link";
import {
  HeartHandshake,
  BookOpen,
  Stethoscope,
  TreePine,
  Briefcase,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import GetInvolvedForms from "@/components/GetInvolvedForms";

export const metadata = {
  title: "Get Involved, Membership & Volunteer | Jharkhandvasi Parivartan Sangh",
  description:
    "Apply for official membership of Jharkhandvasi Parivartan Sangh or join as an active volunteer. Mentor children, assist senior health camps, participate in tree planting, and support migrant families in Mumbai and Jharkhand.",
};

const volunteerWays = [
  {
    icon: Stethoscope,
    title: "Healthcare Camps & Elder Care",
    desc: "Assist doctors and nursing teams during weekend geriatric diagnostic camps in Borivali West, managing vitals testing and medicine distribution.",
  },
  {
    icon: BookOpen,
    title: "Child Education & Mentorship",
    desc: "Conduct reading, writing, and foundational mathematics sessions for first-generation learners and distribute Shiksha Protsahan study kits.",
  },
  {
    icon: Users,
    title: "Migrant Crisis Support & Helpline",
    desc: "Support our 24/7 emergency response team by visiting local hospital emergency rooms and guiding workers through administrative documentation.",
  },
  {
    icon: TreePine,
    title: "Community Native Tree Planting",
    desc: "Get your hands in the soil by preparing sapling nurseries, planting native Sal and Mahua saplings, and organizing neighborhood cleanup drives.",
  },
  {
    icon: Briefcase,
    title: "Professional & Legal Services",
    desc: "Offer pro bono legal consultation for wage disputes, medical advice, accounting assistance, or digital content design.",
  },
  {
    icon: HeartHandshake,
    title: "Institutional & CSR Partnerships",
    desc: "Collaborate with JPS on verified CSR employee engagement, educational supply drives, and community health sponsorships.",
  },
];

export default function GetInvolvedPage() {
  return (
    <div className="space-y-16 lg:space-y-24 pb-24 overflow-x-hidden w-full max-w-full">
      {/* 1. EDITORIAL PAGE HEADER */}
      <section className="bg-[#05140D] text-white pt-32 sm:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
        <Image
          src="/images/volunteer-hands.jpg"
          alt="Volunteers joining hands in community solidarity"
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
              Grassroots Participation & Membership
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              Lend Your Hands. <span className="italic text-[#B8CBA5]">Transform</span> Lives.
            </h1>
            <p className="text-sm sm:text-base text-[#F7F5EC]/85 font-light leading-relaxed">
              Real social change is created by people who show up. Apply for verified membership or join our frontline volunteer corps across Mumbai and Jharkhand.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#membership-form"
                className="px-6 py-3 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold shadow-lg transition-all"
              >
                सदस्यता फॉर्म भरें (Apply for Membership)
              </a>
              <a
                href="https://wa.me/917808008058?text=Namaste%2C%20I%20want%20to%20apply%20for%20JPS%20Membership"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold shadow-lg transition-all flex items-center gap-2"
              >
                व्हाट्सएप संपर्क: 78080 08058
              </a>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#1D5139] rounded-full blur-3xl opacity-40 pointer-events-none" />
      </section>

      {/* 2. PHOTO & INTRO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative h-[360px] sm:h-[440px] rounded-3xl overflow-hidden shadow-xl border border-[#123B2A]/10">
            <Image
              src="/images/volunteer-hands.jpg"
              alt="Volunteers joining hands in community solidarity"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#123B2A]/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs uppercase tracking-wider text-[#B8CBA5] font-semibold">
                Grassroots Volunteer Network
              </span>
              <h3 className="font-serif text-xl font-normal">
                Community Organizers & Dedicated Youth
              </h3>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <span className="badge-pill bg-[#B8CBA5]/20 text-[#123B2A]">
              Why Join JPS?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#123B2A]">
              Direct Grassroots Experience Without Bureaucracy
            </h2>
            <p className="text-sm text-[#17231C]/80 font-light leading-relaxed">
              When you join Jharkhandvasi Parivartan Sangh, you do not sit in endless strategy meetings. You meet the workers whose wages were saved, hold the hand of an elder receiving their first eye screening, and see the genuine joy of a child holding their first storybook.
            </p>
            <ul className="space-y-2 text-xs text-[#17231C]/80 font-light">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1D5139]" />
                <span>Meaningful weekend engagements that fit around your job or studies.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1D5139]" />
                <span>Official membership identity card issued after verification.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1D5139]" />
                <span>A warm, inclusive community culture anchored in secular brotherhood.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. WAYS TO CONTRIBUTE GRID */}
      <section className="bg-[#F7F5EC] dark:bg-[#071F14] py-16 sm:py-20 border-y border-[#123B2A]/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="badge-pill bg-[#B8CBA5]/30 text-[#123B2A] dark:text-[#B8CBA5]">
              Contribution Paths
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#123B2A] dark:text-[#F7F5EC]">
              Six Ways You Can Make an Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerWays.map((way, idx) => {
              const Icon = way.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-white/5 p-6 sm:p-8 rounded-3xl border border-[#123B2A]/10 dark:border-white/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#E9F0E4] dark:bg-white/10 text-[#1D5139] dark:text-[#E28723] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-normal text-[#123B2A] dark:text-[#F7F5EC]">
                      {way.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#17231C]/75 dark:text-[#F7F5EC]/75 font-light leading-relaxed">
                      {way.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. MEMBERSHIP & VOLUNTEER REGISTRATION FORMS */}
      <section id="membership-form" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-28">
        <GetInvolvedForms />
      </section>
    </div>
  );
}
