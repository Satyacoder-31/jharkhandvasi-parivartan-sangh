import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Phone,
  Sparkles,
  Heart,
  Newspaper,
  Tv,
  CheckCircle2,
  Award,
} from "lucide-react";
import GalleryLightbox from "@/components/GalleryLightbox";

export const metadata = {
  title: "Events & Press Media | Jharkhandvasi Parivartan Sangh",
  description:
    "Photo chronicles, media coverage, and community gatherings of JPS: Jharkhand Sthapna Diwas, Bhagwan Birsa Munda Smruti Sohala, eye checkup camps, and news press reports.",
};

const pastEvents = [
  {
    id: 1,
    title: "Jharkhand Sthapna Diwas Festival Mumbai",
    date: "15 November (Annual Commemoration)",
    location: "Mumbai Auditoriums & Cultural Halls",
    category: "Cultural Commemoration",
    image: "/images/cultural-birsa.jpg",
    desc: "Annual landmark cultural gathering honoring Jharkhand's foundation day, bringing traditional Santhali dances, Chhau performers, and state ministers to celebrate diaspora solidarity.",
  },
  {
    id: 2,
    title: "Free Eye Checkup & Spectacles Distribution Camp",
    date: "Periodic Community Outreach",
    location: "Dahisar & Borivali West, Mumbai",
    category: "Medical Outreach",
    image: "/images/senior-health.jpg",
    desc: "Comprehensive diagnostic eye care camp organized with leading surgeons; over 250 free prescription spectacles distributed to low-income seniors and migrant laborers.",
  },
  {
    id: 3,
    title: "Shiksha Protsahan School Kit Distribution Drive",
    date: "Annual Academic Term Launch",
    location: "Suburban Community Center",
    category: "Child Education",
    image: "/images/hero-education.jpg",
    desc: "Outreach program distributing school bags, notebooks, textbooks, and writing supplies to children of seasonal migrant workers.",
  },
  {
    id: 4,
    title: "Bhagwan Birsa Munda National Tribute & Chowk Assembly",
    date: "Birth Anniversary Observance",
    location: "Birsa Munda Chowk & Community Centers",
    category: "Nationalism & Heritage",
    image: "/images/art-birsa.jpg",
    desc: "Honoring Dharti Aaba Bhagwan Birsa Munda's courage and sacrifice, promoting national pride and cultural roots among youth.",
  },
];

const pressClippings = [
  {
    publication: "Navbharat Times (NBT)",
    headline: "झारखंड स्थापना दिवस धूमधाम से मनाया",
    date: "Statehood Day Coverage",
    badge: "Leading Daily",
    summary:
      "Extensive coverage of Jharkhandvasi Parivartan Sangh's grand cultural event uniting thousands of Jharkhandis in Mumbai with traditional music and dignitaries.",
  },
  {
    publication: "Dainik Jagran",
    headline: "मध्यमवर्गीय परिवार के लिए अलग से फंड जारी करे राज्य सरकार: अरविंद आर्य",
    date: "Policy & Press Statement",
    badge: "National Hindi Daily",
    summary:
      "JPS Founder/President Arvind Arya's appeal to state authorities to allocate dedicated emergency welfare reserves for migrant and middle-class families.",
  },
  {
    publication: "Dahisar Samachar / Local Press",
    headline: "दहिसर में सरस्वती पूजा पर श्रद्धालुओं की भीड़ — संघ ने बांटे 250 चश्मे",
    date: "Healthcare Relief",
    badge: "Mumbai Local News",
    summary:
      "Free medical and ophthalmology camp where JPS provided doctor consultations and distributed 250 free corrective glasses to underserved residents.",
  },
  {
    publication: "Santhal Hool Express",
    headline: "मुंबई में मनाया गया 22वां झारखंड स्थापना दिवस महोत्सव",
    date: "Diaspora Chronicle",
    badge: "Regional Express",
    summary:
      "Felicitation of prominent leaders and industrialists including Mohan Prasad Saw of Giridih and Pravasi Group director Sikandar Ali for social services.",
  },
  {
    publication: "Prabhat Khabar",
    headline: "झारखंडवासी परिवर्तन संघ मुंबई ने मनाया झारखंड स्थापना दिवस",
    date: "Cultural Heritage",
    badge: "Jharkhand Daily",
    summary:
      "Highlighting traditional tribal dance forms, indigenous percussion instruments, and the diaspora's enduring ties between Maharashtra and Jharkhand.",
  },
  {
    publication: "Dainik Pehla Samachar & Dabang Duniya",
    headline: "झारखंड के स्थापना दिवस पर जुटे कई दिग्गज",
    date: "Special Report",
    badge: "Press Syndicate",
    summary:
      "Assembly of state ministers, administrative officers, community elders, and social workers at the annual JPS convention in Mumbai.",
  },
];

export default function EventsPage() {
  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. EDITORIAL PAGE HEADER */}
      <section className="bg-[#071F14] text-white pt-32 sm:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
        <Image
          src="/images/cultural-birsa.jpg"
          alt="Cultural commemoration events"
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071F14] via-[#071F14]/75 to-black/40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="badge-pill bg-[#B8CBA5]/20 text-[#B8CBA5] border border-[#B8CBA5]/30">
              Community Chronicle & Media
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              Events, Field Gatherings & <span className="italic text-[#B8CBA5]">Media Coverage</span>
            </h1>
            <p className="text-sm sm:text-base text-[#F7F5EC]/85 font-light leading-relaxed">
              Moments of collective action, cultural heritage, eye health camps, and statewide recognition across Mumbai and Jharkhand.
            </p>
          </div>
        </div>
      </section>

      {/* 2. UPCOMING COMMUNITY PROGRAM ADVISORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#F7F5EC] rounded-3xl p-8 border border-[#123B2A]/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="max-w-xl space-y-1">
            <span className="text-xs uppercase tracking-wider text-[#E28723] font-bold">
              Program Schedule Advisory
            </span>
            <h3 className="font-serif text-2xl font-normal text-[#123B2A]">
              Get Latest Dates for Medical Camps & Drives
            </h3>
            <p className="text-xs text-[#17231C]/75 font-light leading-relaxed">
              Exact dates and venues for our upcoming medical camps, eye checkup drives, and kit distributions in Mumbai and Giridih are shared with registered volunteers and community members.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:+917808008058"
              className="px-5 py-3 rounded-full bg-[#123B2A] hover:bg-[#1D5139] text-white text-xs font-bold tracking-wide shadow transition-all flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#E28723]" />
              <span>Call Helpline: 78080 08058</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. PAST KEY COMMUNITY INITIATIVES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="max-w-2xl">
          <span className="badge-pill bg-[#B8CBA5]/20 text-[#123B2A] mb-2">
            Field Gatherings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#123B2A]">
            Milestone Community Gatherings
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pastEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#123B2A]/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 w-full">
                  <Image
                    src={evt.image}
                    alt={evt.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="badge-pill bg-[#123B2A]/85 text-[#B8CBA5] backdrop-blur-sm text-[10px]">
                      {evt.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#795943] font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#E28723]" />
                    <span>{evt.date}</span>
                  </div>
                  <h3 className="font-serif text-base font-normal text-[#123B2A] leading-snug">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-[#17231C]/75 font-light leading-relaxed">
                    {evt.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-[#123B2A]/10 mt-2 text-[11px] text-[#795943]">
                📍 {evt.location}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PRESS MEDIA COVERAGE & RECOGNITION (FROM SOUVENIR) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="badge-pill bg-[#B8CBA5]/20 text-[#123B2A] mb-2">
              National & Regional Media
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#123B2A]">
              Press Media Coverage & Statewide Recognition
            </h2>
            <p className="text-xs sm:text-sm text-[#17231C]/75 font-light mt-1">
              Documented news reports highlighting JPS's welfare initiatives, cultural festivals, and humanitarian relief.
            </p>
          </div>

          {/* Official Media Partner */}
          <div className="p-4 rounded-2xl bg-[#071F14] text-white border border-[#1D5139] flex items-center gap-3.5 shadow">
            <div className="w-10 h-10 rounded-xl bg-[#E28723] text-white flex items-center justify-center flex-shrink-0">
              <Tv className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#B8CBA5] block">
                Official Media Partner
              </span>
              <h4 className="font-serif text-base font-bold text-white">
                ONTV (Digitec Media LLP)
              </h4>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pressClippings.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-[#123B2A]/10 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#123B2A]/10 text-[#123B2A]">
                    {item.badge}
                  </span>
                  <Newspaper className="w-4 h-4 text-[#795943]" />
                </div>
                <h4 className="font-serif text-base font-bold text-[#123B2A] leading-snug">
                  {item.publication}
                </h4>
                <p className="text-xs text-[#E28723] font-medium italic">
                  “{item.headline}”
                </p>
                <p className="text-xs text-[#17231C]/75 font-light leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-[#123B2A]/5 text-[11px] text-[#795943] flex items-center justify-between">
                <span>{item.date}</span>
                <span className="text-[#1D5139] font-medium">Archive Verified ✓</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. DOCUMENTARY PHOTO GALLERY WITH LIGHTBOX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="max-w-2xl">
          <span className="badge-pill bg-[#B8CBA5]/20 text-[#123B2A] mb-2">
            Visual Archive
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#123B2A]">
            Documentary Photo Chronicle
          </h2>
          <p className="text-xs sm:text-sm text-[#795943] font-light mt-1">
            Click on any image to open the full-size view with detailed contextual notes.
          </p>
        </div>

        <GalleryLightbox />
      </section>
    </div>
  );
}
