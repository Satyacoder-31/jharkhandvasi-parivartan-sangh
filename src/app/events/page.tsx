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
    title: "Pravasi Jharkhandvasi Bhavya Milan Samaroh (Borivali)",
    date: "10 October 2026 (Veer Savarkar Udyan)",
    location: "Veer Savarkar Udyan, Borivali (W), Mumbai",
    category: "Pravasi Sammelan 2026",
    image: "/images/events/pravasi-sammelan-memorandum-presentation.jpg",
    desc: "Grand diaspora conference with Former MP Gopal Shetty, MLA Sanjay Upadhyay, and youth leader Devendra Mahato submitting the joint memorandum for migrant welfare.",
  },
  {
    id: 2,
    title: "Jharkhand Sthapna Diwas Festival Mumbai",
    date: "15 November (Annual Commemoration)",
    location: "Mumbai Auditoriums & Cultural Halls",
    category: "Cultural Commemoration",
    image: "/images/events/sthapna-diwas-stage-felicitation.jpg",
    desc: "Annual landmark cultural gathering honoring Jharkhand's foundation day, bringing traditional Santhali dances, Chhau performers, and state ministers to celebrate diaspora solidarity.",
  },
  {
    id: 3,
    title: "Free Eye Checkup & Spectacles Distribution Camp",
    date: "Periodic Community Outreach",
    location: "Dahisar & Borivali West, Mumbai",
    category: "Medical Outreach",
    image: "/images/events/eye-camp-medical-checkup.jpg",
    desc: "Comprehensive diagnostic eye care camp organized with leading surgeons; over 250 free prescription spectacles distributed to low-income seniors and migrant laborers.",
  },
  {
    id: 4,
    title: "Vimochen of 'Apna Jharkhand' Magazine",
    date: "Annual Statehood Celebration",
    location: "Shivaji Mandir Hall, Dadar Mumbai",
    category: "Publication & Media",
    image: "/images/events/magazine-launch-babulal-marandi-prahlad-modi.jpg",
    desc: "Grand launch of the official quarterly magazine 'अपना झारखंड' by First CM Babulal Marandi, Adv. Ashish Shelar, Prahlad Modi, and Anup Jalota.",
  },
  {
    id: 5,
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

      {/* 2.5 SPOTLIGHT RECENT MILESTONE: PRAVASI SAMMELAN 2026 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#071F14] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#1D5139] shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1D5139]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Photos */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-[#1D5139] shadow-lg group">
                <Image
                  src="/images/events/pravasi-sammelan-memorandum-presentation.jpg"
                  alt="Memorandum presentation at Pravasi Jharkhandvasi Sammelan"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="badge-pill bg-[#E28723] text-white text-[10px] uppercase font-bold mb-1">
                    Veer Savarkar Udyan, Borivali (W)
                  </span>
                  <p className="text-xs text-white/90 font-medium">
                    Arvind Arya, MLA Sanjay Upadhyay, Ex-MP Gopal Shetty &amp; Devendra Mahato presenting the Pravasi Welfare Memorandum
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="relative h-28 rounded-xl overflow-hidden border border-[#1D5139]/60">
                  <Image
                    src="/images/events/pravasi-sammelan-borivali-poster.jpg"
                    alt="Official Event Invitation Poster"
                    fill
                    className="object-cover"
                    sizes="20vw"
                  />
                </div>
                <div className="relative h-28 rounded-xl overflow-hidden border border-[#1D5139]/60">
                  <Image
                    src="/images/events/pravasi-sammelan-mla-sanjay-upadhyay-speech.jpg"
                    alt="Keynote Address by MLA Sanjay Upadhyay"
                    fill
                    className="object-cover"
                    sizes="20vw"
                  />
                </div>
                <div className="relative h-28 rounded-xl overflow-hidden border border-[#1D5139]/60">
                  <Image
                    src="/images/events/pravasi-sammelan-arvind-arya-felicitation.jpg"
                    alt="Felicitation of Founder Arvind Arya"
                    fill
                    className="object-cover"
                    sizes="20vw"
                  />
                </div>
              </div>
            </div>

            {/* Right: Event Information & Dignitaries */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="badge-pill bg-[#E28723] text-white text-xs font-bold uppercase tracking-wider">
                    Recent Conclave
                  </span>
                  <span className="text-xs text-[#B8CBA5]">
                    10 October 2026 • 3:30 PM
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-white">
                  प्रवासी झारखंडवासी भव्य मिलन समारोह
                </h2>
                <p className="text-xs sm:text-sm text-[#F7F5EC]/85 font-light leading-relaxed">
                  A historic diaspora assembly convened at <strong>Veer Savarkar Udyan, Borivali (West), Mumbai</strong> uniting community leaders, public representatives, and youth activists to advance migrant rights and socio-economic support.
                </p>
              </div>

              {/* Dignitaries List */}
              <div className="space-y-2.5 pt-2 border-t border-[#1D5139]/80 text-xs">
                <div className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-[#E28723] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Chief Guest:</strong>{" "}
                    <span className="text-[#F7F5EC]/90">माननीय श्री गोपाल शेट्टी (जनसेवक / पूर्व सांसद, बोरीवली, मुंबई)</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-[#B8CBA5] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Special Guest:</strong>{" "}
                    <span className="text-[#F7F5EC]/90">माननीय श्री संजय उपाध्याय (विधायक, बोरीवली)</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-[#B8CBA5] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Special Guest:</strong>{" "}
                    <span className="text-[#F7F5EC]/90">श्री देवेन्द्र महतो (वरिष्ठ उपाध्यक्ष JLKM, सामाजिक कार्यकर्ता एवं युवा आवाज)</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E28723] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Convener &amp; Leadership:</strong>{" "}
                    <span className="text-[#F7F5EC]/90">श्री अरविंद आर्य (संस्थापक राष्ट्रीय अध्यक्ष, JPS), सुधाकांत पांडे, शेखर अहिरे (भाजपा वॉर्ड १६ अध्यक्ष)</span>
                  </div>
                </div>
              </div>

              {/* Resolutions */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-[#F7F5EC]/80 space-y-1.5">
                <p className="font-semibold text-white">Charter of Action &amp; Key Resolutions:</p>
                <p>• Submission of joint memorandum seeking emergency transit care, subsidized hospital access, and migrant labor protection.</p>
                <p>• Keynote address by MLA Sanjay Upadhyay committing municipal and state liaison backing for Jharkhandi migrants in Mumbai.</p>
                <p>• Ceremonial felicitation of Founder Arvind Arya with sacred &apos;श्री राम&apos; angavastram and floral honors.</p>
              </div>
            </div>
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
