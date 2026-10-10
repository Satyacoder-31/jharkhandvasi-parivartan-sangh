import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight, Phone, Sparkles, Heart } from "lucide-react";
import GalleryLightbox from "@/components/GalleryLightbox";

export const metadata = {
  title: "Events & Gallery | Jharkhandvasi Parivartan Sangh",
  description:
    "Photo chronicles and community gatherings of JPS: Bhagwan Birsa Munda Smruti Sohala, senior health camps, child education drives, and tree planting initiatives.",
};

const pastEvents = [
  {
    id: 1,
    title: "Bhagwan Birsa Munda Smruti Sohala Mumbai",
    date: "15 November (Annual Commemoration)",
    location: "Mumbai Community Hall",
    category: "Cultural Commemoration",
    image: "/images/cultural-birsa.jpg",
    desc: "Annual cultural gathering honoring the eternal courage and social legacy of Dharti Aaba Bhagwan Birsa Munda, uniting thousands of diaspora families in Mumbai.",
  },
  {
    id: 2,
    title: "Free Senior Citizen Diagnostic & Vitals Health Camp",
    date: "Periodic Community Outreach",
    location: "Borivali West, Mumbai",
    category: "Healthcare Outreach",
    image: "/images/senior-health.jpg",
    desc: "Comprehensive diagnostic camp offering blood pressure, blood glucose tests, physician consultation, and free essential medicines for elderly residents.",
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
    title: "Monsoon Community Native Tree Plantation Drive",
    date: "Monsoon Season Initiative",
    location: "Saranda Foothills & Watersheds",
    category: "Environmental Action",
    image: "/images/tree-planting.jpg",
    desc: "Planting native Sal, Mahua, and Neem saplings in eroded community lands to stabilize topsoil and nurture village micro-watersheds.",
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
              Community Chronicle
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              Events & Visual <span className="italic text-[#B8CBA5]">Gallery</span>
            </h1>
            <p className="text-sm sm:text-base text-[#F7F5EC]/85 font-light leading-relaxed">
              Moments of collective action, cultural heritage, medical service, and environmental restoration captured from our field programs in Mumbai and Jharkhand.
            </p>
          </div>
        </div>
      </section>

      {/* 2. UPCOMING COMMUNITY PROGRAM ADVISORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#F7F5EC] rounded-3xl p-8 border border-[#123B2A]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl space-y-1">
            <span className="text-xs uppercase tracking-wider text-[#E28723] font-bold">
              Upcoming Schedule Schedule Advisory
            </span>
            <h3 className="font-serif text-2xl font-normal text-[#123B2A]">
              Get Latest Dates for Health Camps & Drives
            </h3>
            <p className="text-xs text-[#17231C]/75 font-light">
              To ensure data honesty, exact dates and venue locations for upcoming weekend medical camps and kit distributions are shared directly with registered volunteers. Call or WhatsApp our Borivali office for the current month's schedule.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:+919022288222"
              className="px-5 py-3 rounded-full bg-[#123B2A] hover:bg-[#1D5139] text-white text-xs font-bold tracking-wide shadow transition-all flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#E28723]" />
              <span>Contact Office Desk</span>
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

      {/* 4. DOCUMENTARY PHOTO GALLERY WITH LIGHTBOX */}
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
