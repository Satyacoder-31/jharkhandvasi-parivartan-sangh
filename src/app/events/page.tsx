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
import PressMediaViewer from "@/components/PressMediaViewer";

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
    image: "/images/events/sthapna-diwas-stage-felicitation.jpg",
    desc: "Annual landmark cultural gathering honoring Jharkhand's foundation day, bringing traditional Santhali dances, Chhau performers, and state ministers to celebrate diaspora solidarity.",
  },
  {
    id: 2,
    title: "Free Eye Checkup & Spectacles Distribution Camp",
    date: "Periodic Community Outreach",
    location: "Dahisar & Borivali West, Mumbai",
    category: "Medical Outreach",
    image: "/images/events/eye-camp-medical-checkup.jpg",
    desc: "Comprehensive diagnostic eye care camp organized with leading surgeons; over 250 free prescription spectacles distributed to low-income seniors and migrant laborers.",
  },
  {
    id: 3,
    title: "Vimochen of 'Apna Jharkhand' Magazine",
    date: "Annual Statehood Celebration",
    location: "Shivaji Mandir Hall, Dadar Mumbai",
    category: "Publication & Media",
    image: "/images/events/magazine-launch-babulal-marandi-prahlad-modi.jpg",
    desc: "Grand launch of the official quarterly magazine 'अपना झारखंड' by First CM Babulal Marandi, Adv. Ashish Shelar, Prahlad Modi, and Anup Jalota.",
  },
  {
    id: 4,
    title: "Bhagwan Birsa Munda National Tribute & Chowk Assembly",
    date: "Birth Anniversary Observance",
    location: "Birsa Munda Chowk & Community Centers",
    category: "Nationalism & Heritage",
    image: "/images/events/birsa-munda-chowk-mumbai.jpg",
    desc: "Honoring Dharti Aaba Bhagwan Birsa Munda's courage and sacrifice at Birsa Munda Chowk, promoting national pride and cultural roots among youth.",
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

      {/* 4. STATEWIDE NEWSPAPER MAP & PRESS MEDIA COVERAGE */}
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
              Documented news reports and investigative coverage highlighting JPS&apos;s welfare initiatives, cultural festivals, and humanitarian relief.
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

        <PressMediaViewer />
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
