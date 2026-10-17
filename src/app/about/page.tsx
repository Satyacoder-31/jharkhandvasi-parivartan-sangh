import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Heart,
  Users,
  MapPin,
  CheckCircle2,
  Award,
  Clock,
  Sparkles,
  Quote,
  Building2,
  Compass,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "About Us | Jharkhandvasi Parivartan Sangh (JPS)",
  description:
    "Learn about Jharkhandvasi Parivartan Sangh (JPS), established in 2005 and registered under no. E-30004/MUMBAI under Founder/President Arvind Arya. Discover our 20-year journey, mission, values, and 16-member Public Relation Team.",
};

const timelineEvents = [
  {
    year: "2005",
    title: "Movement Inception in Mumbai",
    description:
      "Arvindkumar Arya initiated a grassroots support group to assist underprivileged Jharkhandi laborers facing wage disputes, language barriers, and sudden medical crises in Mumbai.",
  },
  {
    year: "2013",
    title: "Formal NGO Registration (E-30004/MUMBAI)",
    description:
      "Officially registered under the Maharashtra Public Trust Act (Reg. No. E-30004/07/07/2013 MUMBAI) committed to fostering social, cultural, educational, and medical welfare.",
  },
  {
    year: "2015",
    title: "Medical Camps & Eye Care Drives",
    description:
      "Partnered with leading surgeons and multi-specialty hospitals to deliver regular free eye checkups, diagnostic testing, and spectacles distribution across Mumbai suburbs.",
  },
  {
    year: "2018",
    title: "Educational Initiatives & Skill Building",
    description:
      "Collaborated with educational institutions and Child Welfare Committees to supply school kits, scholarships, and vocational counseling for underprivileged migrant youth.",
  },
  {
    year: "2020–21",
    title: "Nationwide COVID-19 Relief Intervention",
    description:
      "Operated 24/7 emergency helplines, distributing dry ration packets, emergency hospital coordination, and facilitating safe transit for migrant laborers across India.",
  },
  {
    year: "2022",
    title: "NITI Aayog Darpan & 80G Statutory Recognition",
    description:
      "Secured formal NITI Aayog registration (MH/2022/0329647/22-11-2022) and Income Tax 80G certification (AABTJ8020A24MB02) ensuring complete institutional transparency.",
  },
  {
    year: "2023–24",
    title: "Jharkhand Sthapna Diwas in Mumbai",
    description:
      "Organized landmark cultural celebrations uniting thousands of diaspora members, Maharashtra state ministers, and community leaders with traditional Santhali and Chhau dances.",
  },
  {
    year: "2025–26",
    title: "Entering 3rd Decade of Service",
    description:
      "Expanding welfare reach with backing from prominent IAS & IRS officers from Jharkhand, formalizing employment assistance, and protecting tribal environmental roots.",
  },
];

const leadershipTeam = [
  { name: "Dr. Avinash Gupta", role: "Patron", badge: "Patron", category: "Patron", image: "/images/leadership/dr-avinash-gupta.jpg" },
  { name: "Shri Ramkumar Pal", role: "Patron", badge: "Patron", category: "Patron", image: "/images/leadership/ramkumar-pal.jpg" },
  { name: "Shri Ganpat Kothari", role: "Patron", badge: "Patron", category: "Patron", image: "/images/leadership/ganpat-kothari.jpg" },
  { name: "Shri Manulal Baitha", role: "Patron / Senior Member", badge: "Patron", category: "Patron", image: "/images/leadership/manulal-baitha.jpg" },
  { name: "Shri Arvind Arya", role: "Founder & Chairman", badge: "Founder / President", category: "Executive", image: "/images/leadership/arvind-arya.jpg" },
  { name: "Shri Umashankar Modi", role: "National Working President", badge: "Working President", category: "Executive", image: "/images/leadership/umashankar-modi.jpg" },
  { name: "Shri Vishal Bhagat", role: "National Vice President", badge: "Vice President", category: "Executive", image: "/images/leadership/vishal-bhagat.jpg" },
  { name: "Shri Dwarika Singh", role: "National Vice President", badge: "Vice President", category: "Executive", image: "/images/leadership/dwarika-singh.jpg" },
  { name: "Shri Niranjan Kumar", role: "National General Secretary", badge: "General Secretary", category: "Secretariat", image: "/images/leadership/niranjan-kumar.jpg" },
  { name: "Shri Tulsi Yadav", role: "National General Secretary", badge: "General Secretary", category: "Secretariat", image: "/images/leadership/tulsi-yadav.jpg" },
  { name: "Shri Manoj Kumar", role: "National Organisation Secretary", badge: "Org. Secretary", category: "Secretariat", image: "/images/leadership/manoj-kumar.jpg" },
  { name: "Shri Kamdev Sahu", role: "National Secretary", badge: "Secretary", category: "Secretariat", image: "/images/leadership/kamdev-sahu.jpg" },
  { name: "Shri Sunil Arya", role: "National Treasurer", badge: "Finance / Treasurer", category: "Secretariat", image: "/images/leadership/sunil-arya.jpg" },
  { name: "Shri Rajiv Rohit", role: "National Media-In-Charge", badge: "Press & Media", category: "Specialized", image: "/images/leadership/rajiv-rohit.jpg" },
  { name: "Shri Jay Saha", role: "National Liaison Head", badge: "State Liaison", category: "Specialized", image: "/images/leadership/jay-saha.jpg" },
  { name: "Shri Pradeep Lal", role: "National Advisor", badge: "Advisory Board", category: "Specialized", image: "/images/leadership/pradeep-lal.jpg" },
];

export default function AboutPage() {
  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. EDITORIAL PAGE HEADER */}
      <section className="bg-[#071F14] text-white pt-32 sm:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
        <Image
          src="/images/community-assembly.jpg"
          alt="Jharkhandvasi Parivartan Sangh Community Assembly"
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071F14] via-[#071F14]/80 to-black/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge-pill bg-[#B8CBA5]/20 text-[#B8CBA5] border border-[#B8CBA5]/30">
                Movement Estd. 2005 • Regd. 2013
              </span>
              <span className="text-xs text-[#E28723] font-semibold tracking-wider">
                Reg No. E-30004/MUMBAI
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              Two Decades of <span className="italic text-[#B8CBA5]">Service</span>, Unity & Cultural Pride
            </h1>
            <p className="text-sm sm:text-base text-[#F7F5EC]/85 font-light leading-relaxed">
              Serving as a lifeline for Jharkhandis in Mumbai and building an unshakeable bond between the people of Maharashtra and Jharkhand.
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#1D5139] rounded-full blur-3xl opacity-40 pointer-events-none" />
      </section>

      {/* 2. FOUNDER PRESIDENT MESSAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-[#123B2A] to-[#0A2419] text-white rounded-3xl p-8 sm:p-12 border border-[#B8CBA5]/20 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-[#1D5139]/40 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-3">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-[#B8CBA5]/50 overflow-hidden shadow-2xl bg-[#1D5139] relative">
                <Image
                  src="/images/leadership/arvind-arya.jpg"
                  alt="Shri Arvind Arya - Founder & President"
                  fill
                  className="object-cover object-top"
                  sizes="180px"
                  priority
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Shri Arvind Arya
                </h3>
                <p className="text-xs text-[#E28723] font-semibold uppercase tracking-wider">
                  Founder & National President
                </p>
                <p className="text-[11px] text-[#B8CBA5] mt-0.5">
                  Jharkhandvasi Parivartan Sangh
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-[#E28723]">
                <Quote className="w-8 h-8 opacity-80" />
                <span className="text-xs uppercase font-bold tracking-widest text-[#B8CBA5]">
                  Message from the Founder
                </span>
              </div>
              <blockquote className="font-serif text-lg sm:text-xl font-light italic leading-relaxed text-[#F7F5EC]">
                “Two decades of service have allowed us to understand the pulse of the Jharkhandi community and the challenges they face.
                Our journey has been made possible through the support and blessings of every individual who believes in our cause. As we move forward, we seek your continued support to bring the dreams of Jharkhandis to fruition.
                Together, we can create a future where every Jharkhandi, regardless of where they reside, has the opportunity to thrive.”
              </blockquote>
              <p className="text-xs sm:text-sm text-[#F7F5EC]/75 font-light leading-relaxed pt-2 border-t border-white/10">
                Jharkhandvasi Parivartan Sangh is more than an NGO; it is a lifeline for the people of Jharkhand. With a strong foundation built on service, dedication, and cultural pride, the Organization has become a trusted name in Mumbai and is poised to expand its work across new horizons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY & MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" duration={900}>
              <div className="relative h-[420px] sm:h-[500px] rounded-3xl overflow-hidden shadow-xl border border-[#123B2A]/10 group">
                <Image
                  src="/images/community-assembly.jpg"
                  alt="Arvind Arya and community members in Mumbai"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123B2A]/95 via-[#123B2A]/25 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                  <span className="badge-pill bg-[#E28723] text-white text-[10px] uppercase font-bold">
                    Grassroots Inception (2005)
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal">
                    Transforming Lives Through Tireless Dedication
                  </h3>
                  <p className="text-xs text-[#F7F5EC]/80 font-light">
                    Headquartered at 32 Nalanda Society, Gorai-1, Borivali (West), Mumbai
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="right" duration={900} delay={150}>
              <span className="badge-pill bg-[#B8CBA5]/20 text-[#123B2A]">
                Our Origin Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#123B2A] leading-tight">
                Born Out of the Need to <span className="italic text-[#6F8D58]">Support Our People</span>
              </h2>
              <p className="text-sm text-[#17231C]/80 leading-relaxed font-light">
                <strong>Jharkhandvasi Parivartan Sangh (JPS)</strong>, established in <strong>2005</strong>, is a transformative movement born out of the need to support the underprivileged Jharkhandis who have migrated to Mumbai in search of livelihood.
              </p>
              <p className="text-sm text-[#17231C]/80 leading-relaxed font-light">
                What began as a small initiative with the vision of uplifting and assisting the migrant community has now blossomed into a registered NGO in <strong>2013 bearing no. E30004/MUMBAI</strong> committed to fostering social, cultural, educational, and medical welfare of Jharkhandis in Mumbai and beyond.
              </p>
              <p className="text-sm text-[#17231C]/80 leading-relaxed font-light">
                The institution's inception was driven by the relentless efforts of <strong>Mr. Arvindkumar Arya</strong>, whose tireless dedication to the betterment of Jharkhandi people has created a robust platform for social change. Through various initiatives, Jharkhandvasi Parivartan Sangh has not only improved the lives of migrants in Mumbai but also helped strengthen the bond between the people of Maharashtra and Jharkhand.
              </p>
              <div className="p-4 rounded-2xl bg-[#F7F5EC] border border-[#123B2A]/10 text-xs text-[#123B2A] flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#1D5139] flex-shrink-0" />
                <span>
                  Official Motto: <strong>एक जुर्रत... एक ज़रूरत</strong> • Registered under Maharashtra Public Trust Act.
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. MISSION, VISION, VALUES (3 PILLARS) */}
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
                Bridging Homeland & City
              </h3>
              <p className="text-xs sm:text-sm text-[#17231C]/80 font-light leading-relaxed">
                The mission of Jharkhandvasi Parivartan Sangh is to empower Jharkhandis by creating a bridge between their homeland and their new life in Mumbai. With deep commitment to community development, the Sangh works on several fronts — from medical and educational aid to cultural promotion and nationalism.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#123B2A]/10 shadow-sm space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1D5139]">
                Cultural Roots
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#123B2A]">
                Preserving Heritage
              </h3>
              <p className="text-xs sm:text-sm text-[#17231C]/80 font-light leading-relaxed">
                By highlighting the rich cultural heritage of Jharkhand — celebrating Bhagwan Birsa Munda, Chhau dance, Sarhul, and Santhali traditions — JPS seeks to ensure that Jharkhandis in Mumbai never feel disconnected from their roots.
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
                <strong>Service (सेवा), Unity (एकता), and Struggle (संघर्ष)</strong>. With unyielding dedication, the Sangh treats every individual seeking assistance as family, offering prompt relief regardless of background.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 16-MEMBER PUBLIC RELATION TEAM & LEADERSHIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="badge-pill bg-[#B8CBA5]/20 text-[#123B2A]">
            Official Public Relation Team
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#123B2A]">
            Organizational Leadership & Key Office Bearers
          </h2>
          <p className="text-xs sm:text-sm text-[#17231C]/75 font-light">
            Dedicated patrons, executive office bearers, and secretaries guiding Jharkhandvasi Parivartan Sangh across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {leadershipTeam.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-[#123B2A]/10 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-56 sm:h-64 bg-[#071F14]/5 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md backdrop-blur-md ${
                        member.category === "Patron"
                          ? "bg-[#795943]/90 text-white"
                          : member.category === "Executive"
                          ? "bg-[#E28723]/90 text-white"
                          : "bg-[#1D5139]/90 text-white"
                      }`}
                    >
                      {member.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <span className="text-[10px] text-[#B8CBA5] font-semibold tracking-wide uppercase block">
                      {member.category} Body
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-1.5">
                  <h4 className="font-serif text-lg font-bold text-[#123B2A] group-hover:text-[#1D5139] transition-colors leading-snug">
                    {member.name}
                  </h4>
                  <p className="text-xs text-[#795943] font-medium leading-relaxed">
                    {member.role}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-2 border-t border-[#123B2A]/5 text-[11px] text-[#17231C]/65 flex items-center justify-between">
                <span>JPS National Body</span>
                <span className="text-[#1D5139] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CIVIL SERVICES & MAHARASHTRA TIES (WITH REAL DOCUMENTARY PHOTOS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#123B2A] text-white p-8 sm:p-10 rounded-3xl border border-[#B8CBA5]/20 space-y-3">
            <Building2 className="w-8 h-8 text-[#E28723]" />
            <h3 className="font-serif text-2xl font-normal">
              Strengthening Maharashtra & Jharkhand Ties
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F5EC]/80 font-light leading-relaxed">
              JPS acts as a platform for strengthening ties between Maharashtra and Jharkhand, both culturally and socially. It has successfully fostered relationships with ministers and cultural departments of Maharashtra, gaining institutional backing for migrant welfare and cultural exchange.
            </p>
          </div>

          <div className="bg-[#1D5139] text-white p-8 sm:p-10 rounded-3xl border border-[#B8CBA5]/20 space-y-3">
            <Award className="w-8 h-8 text-[#B8CBA5]" />
            <h3 className="font-serif text-2xl font-normal">
              Elite Administrative & Civil Servant Backing
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F5EC]/80 font-light leading-relaxed">
              With the support of educated, elite, and community-minded individuals from Jharkhand holding prestigious designations in the Government of India through their office as <strong>IAS and IRS officers</strong>, the Sangh is turning the aspirations of Jharkhandis into reality.
            </p>
          </div>
        </div>

        {/* Real Documentary Archive Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          <div className="bg-white rounded-2xl overflow-hidden border border-[#123B2A]/10 shadow-sm group">
            <div className="relative h-48 w-full">
              <Image
                src="/images/events/pravasi-sammelan-memorandum-presentation.jpg"
                alt="Memorandum Presentation to Gopal Shetty & Sanjay Upadhyay"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-bold text-[#E28723] uppercase tracking-wider block">
                Pravasi Sammelan (Borivali 2026)
              </span>
              <h5 className="font-serif text-sm font-bold text-[#123B2A] leading-snug">
                Memorandum to Ex-MP Gopal Shetty &amp; MLA Sanjay Upadhyay
              </h5>
              <p className="text-[11px] text-[#17231C]/70 font-light">
                Joint charter for migrant welfare, hospital access, and emergency assistance with youth leader Devendra Mahato.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-[#123B2A]/10 shadow-sm group">
            <div className="relative h-48 w-full">
              <Image
                src="/images/events/shivaji-maharaj-throne-delegation.jpg"
                alt="JPS Core Team Homage at Chhatrapati Shivaji Maharaj Throne"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-bold text-[#1D5139] uppercase tracking-wider block">
                Maharashtra Cultural Tribute
              </span>
              <h5 className="font-serif text-sm font-bold text-[#123B2A] leading-snug">
                Executive Homage at Chhatrapati Shivaji Maharaj Throne
              </h5>
              <p className="text-[11px] text-[#17231C]/70 font-light">
                JPS core executive leadership paying respects before the iconic golden throne statue in Mumbai.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-[#123B2A]/10 shadow-sm group">
            <div className="relative h-48 w-full">
              <Image
                src="/images/events/governor-radhakrishnan-meeting.jpg"
                alt="JPS delegation meeting with Jharkhand Governor CP Radhakrishnan"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-bold text-[#795943] uppercase tracking-wider block">
                Raj Bhavan Conclave
              </span>
              <h5 className="font-serif text-sm font-bold text-[#123B2A] leading-snug">
                With Former Jharkhand Governor CP Radhakrishnan
              </h5>
              <p className="text-[11px] text-[#17231C]/70 font-light">
                Submitting statewide development proposals and tribal welfare charters to the Hon&apos;ble Governor.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-[#123B2A]/10 shadow-sm group">
            <div className="relative h-48 w-full">
              <Image
                src="/images/events/ashish-shelar-felicitation.jpg"
                alt="Felicitation of Adv. Ashish Shelar (Mumbai BJP President)"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-bold text-[#1D5139] uppercase tracking-wider block">
                Maharashtra Assembly
              </span>
              <h5 className="font-serif text-sm font-bold text-[#123B2A] leading-snug">
                Felicitation of Adv. Ashish Shelar (Mumbai BJP President)
              </h5>
              <p className="text-[11px] text-[#17231C]/70 font-light">
                Building inter-state support for migrant social security and grassroots welfare networks.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-[#123B2A]/10 shadow-sm group">
            <div className="relative h-48 w-full">
              <Image
                src="/images/events/babulal-marandi-meeting.jpg"
                alt="Arvind Arya with First Chief Minister Babulal Marandi"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-bold text-[#795943] uppercase tracking-wider block">
                Leadership Dialogue
              </span>
              <h5 className="font-serif text-sm font-bold text-[#123B2A] leading-snug">
                Arvind Arya with First CM Babulal Marandi
              </h5>
              <p className="text-[11px] text-[#17231C]/70 font-light">
                Consultations on migrant welfare rights, tribal environmental protection, and diaspora initiatives.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-[#123B2A]/10 shadow-sm group">
            <div className="relative h-48 w-full">
              <Image
                src="/images/events/mumbai-police-presentation.jpg"
                alt="Magazine presentation to Greater Mumbai Police Officers"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-bold text-[#E28723] uppercase tracking-wider block">
                Law Enforcement Liaison
              </span>
              <h5 className="font-serif text-sm font-bold text-[#123B2A] leading-snug">
                Presentation to Greater Mumbai Police Officers
              </h5>
              <p className="text-[11px] text-[#17231C]/70 font-light">
                Coordinating with police leadership for anti-trafficking vigilance and protection of domestic workers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. VISUAL MILESTONE TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="badge-pill bg-[#B8CBA5]/20 text-[#123B2A]">
            Organizational Milestones
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#123B2A]">
            Two Decades of Continuous Service (2005–2026)
          </h2>
        </div>

        <div className="relative border-l-2 border-[#123B2A]/20 ml-4 sm:ml-32 space-y-10">
          {timelineEvents.map((evt, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              <div className="sm:absolute sm:-left-32 sm:w-24 sm:text-right sm:top-0.5">
                <span className="font-serif text-lg font-bold text-[#1D5139] bg-[#E9F0E4] px-2.5 py-1 rounded-lg">
                  {evt.year}
                </span>
              </div>

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

      {/* 8. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#123B2A] text-white rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4 shadow-xl">
          <h3 className="font-serif text-2xl sm:text-3xl font-normal">
            Be Part of Our Next Decade of Transformation
          </h3>
          <p className="text-xs sm:text-sm text-[#F7F5EC]/80 font-light leading-relaxed max-w-lg mx-auto">
            Explore our programs in healthcare, education, culture, and nature, or join our active volunteer force across Mumbai and Jharkhand.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/our-work"
              className="px-6 py-3 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold tracking-wide shadow transition-all"
            >
              Explore Our Work
            </Link>
            <Link
              href="/donate"
              className="px-6 py-3 rounded-full bg-[#1D5139] hover:bg-[#071F14] text-white text-xs font-semibold tracking-wide border border-white/20 transition-all"
            >
              Bank & 80G Donation Details
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wide border border-white/20 transition-all"
            >
              Contact Offices
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
