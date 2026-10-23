"use client";

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
  Clock,
  Music,
  MessageCircle,
} from "lucide-react";
import GalleryLightbox from "@/components/GalleryLightbox";
import PressMediaViewer from "@/components/PressMediaViewer";
import { useSiteContent } from "@/context/SiteContentContext";
import { useLanguage } from "@/context/LanguageContext";

export default function EventsContent() {
  const { content } = useSiteContent();
  const { language, t } = useLanguage();
  const pastEvents = content.events || [];
  const organization = content.organization;

  return (
    <div className="space-y-16 lg:space-y-24 pb-24 overflow-x-hidden w-full max-w-full">
      {/* 1. EDITORIAL PAGE HEADER */}
      <section className="bg-[#05140D] text-white pt-32 sm:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
        <Image
          src="/images/cultural-birsa.jpg"
          alt="Cultural commemoration events"
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
              {language === "hi" ? "सामुदायिक गतिविधियां एवं मीडिया" : "Community Chronicle & Media"}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              {language === "hi" ? (
                <>कार्यक्रम, जनसभाएं एवं <span className="italic text-[#B8CBA5]">मीडिया कवरेज</span></>
              ) : (
                <>Events, Field Gatherings & <span className="italic text-[#B8CBA5]">Media Coverage</span></>
              )}
            </h1>
            <p className="text-sm sm:text-base text-[#F7F5EC]/85 font-light leading-relaxed">
              {language === "hi" ? t("eventsSubheadline") : "Moments of collective action, cultural heritage, eye health camps, and statewide recognition across Mumbai and Jharkhand."}
            </p>
          </div>
        </div>
      </section>

      {/* 2. GRAND FEATURED UPCOMING EVENT: KARMA MAHOTSAV 2026 */}
      <section id="karma-mahotsav" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-28">
        <div className="relative bg-gradient-to-br from-[#071F14] via-[#0F3524] to-[#123B2A] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-[#E28723] shadow-2xl overflow-hidden">
          {/* Ambient lighting & decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E28723]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1D5139]/50 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Event Details & Schedule */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge-pill bg-[#E28723] text-white text-[11px] font-bold uppercase tracking-wider animate-pulse flex items-center gap-1.5 shadow">
                  <Sparkles className="w-3.5 h-3.5" />
                  {language === "hi" ? "आगामी भव्य आयोजन • 25 अक्टूबर 2026" : "Live Upcoming Festival • 25 Oct 2026"}
                </span>
                <span className="badge-pill bg-white/10 text-[#B8CBA5] border border-white/15 text-[10px]">
                  जनजातीय गौरव दिवस
                </span>
                <span className="badge-pill bg-white/10 text-[#E28723] border border-white/15 text-[10px]">
                  एक भारत, श्रेष्ठ भारत
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  🌿🙏 {language === "hi" ? "भव्य कर्मा महोत्सव 2026" : "Grand Karma Mahotsav 2026"} 🙏🌿
                </h2>
                <p className="text-xs sm:text-sm text-[#F7F5EC]/90 font-light leading-relaxed">
                  {language === "hi"
                    ? "झारखंडवासी परिवर्तन संघ, मुंबई की ओर से जनजातीय गौरव दिवस के उपलक्ष्य में 'एक भारत, श्रेष्ठ भारत' की भावना के साथ भव्य कर्मा महोत्सव का भव्य आयोजन।"
                    : "Organized by Jharkhandvasi Parivartan Sangh, Mumbai, celebrating Janjatiya Gaurav Diwas in the vibrant spirit of 'Ek Bharat, Shreshtha Bharat'."}
                </p>
              </div>

              {/* Schedule cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E28723] flex items-center justify-center flex-shrink-0 shadow">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#B8CBA5] uppercase tracking-wider font-semibold block">
                      {language === "hi" ? "दिनांक (Date)" : "Event Date"}
                    </span>
                    <p className="text-sm font-bold text-white">
                      {language === "hi" ? "रविवार, 25 अक्टूबर 2026" : "Sunday, 25 October 2026"}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#123B2A] border border-white/20 flex items-center justify-center flex-shrink-0 shadow">
                    <Clock className="w-5 h-5 text-[#E28723]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#B8CBA5] uppercase tracking-wider font-semibold block">
                      {language === "hi" ? "समय (Timing)" : "Event Timing"}
                    </span>
                    <p className="text-sm font-bold text-white">
                      {language === "hi" ? "दोपहर 12:30 से शाम 7:30 बजे तक" : "12:30 PM to 7:30 PM"}
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-2 p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#B35E10] flex items-center justify-center flex-shrink-0 shadow">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#B8CBA5] uppercase tracking-wider font-semibold block">
                      {language === "hi" ? "स्थान (Venue Location)" : "Official Venue"}
                    </span>
                    <p className="text-sm font-bold text-white">
                      {language === "hi" ? "वीर सावरकर उद्यान, बोरीवली पश्चिम, मुंबई" : "Veer Savarkar Udyan, Borivali West, Mumbai"}
                    </p>
                    <p className="text-[11px] text-[#F7F5EC]/70 pt-0.5">
                      Near Borivali Station &amp; Link Road • Central Public Amphitheater
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-2 p-4 rounded-2xl bg-[#E28723]/15 border border-[#E28723]/35 backdrop-blur-sm flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E28723] flex items-center justify-center flex-shrink-0 shadow">
                    <Music className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#E28723] uppercase tracking-wider font-bold block">
                      {language === "hi" ? "विशेष आकर्षण (Special Attraction)" : "Special Highlights & Performances"}
                    </span>
                    <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                      <strong>Vicky Musical Team</strong> {language === "hi" ? "एवं झारखंड की समृद्ध आदिवासी संस्कृति, पारंपरिक लोकगीत और लोकनृत्य (झुमर, पाइका, मांदर एवं नगाड़ा वादन)।" : "& live indigenous folk music, traditional Santhali dances, and Mandar-Nagara percussion ensembles."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Cordial Invitation & Slogan */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <p className="text-xs sm:text-sm text-[#F7F5EC]/95">
                  🙏 <strong>{language === "hi" ? "आप सभी सपरिवार सादर आमंत्रित हैं।" : "You and your family are cordially invited!"}</strong>
                </p>
                <span className="text-xs font-bold text-[#E28723] tracking-wide">
                  जय बिरसा मुंडा! जय झारखंड! जय महाराष्ट्र!
                </span>
              </div>

              {/* Contact buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="tel:+917808008058"
                  className="px-6 py-3.5 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold tracking-wide shadow-xl transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>संपर्क: 78080 08058</span>
                </a>

                <a
                  href="tel:+919022288222"
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold tracking-wide border border-white/25 shadow transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#B8CBA5]" />
                  <span>90222 88222</span>
                </a>

                <a
                  href="https://wa.me/917808008058?text=Namaste%2C%20I%20want%20to%20attend%20Karma%20Mahotsav%202026%20at%20Veer%20Savarkar%20Udyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold tracking-wide shadow-xl transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>व्हाट्सएप पूछताछ</span>
                </a>

                <a
                  href="https://maps.google.com/?q=Veer+Savarkar+Udyan+Borivali+West+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-transparent hover:bg-white/10 text-[#B8CBA5] hover:text-white text-xs font-bold tracking-wide border border-[#B8CBA5]/40 transition-all flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>गूगल मैप्स लोकेशन</span>
                </a>
              </div>
            </div>

            {/* Right: Cultural Visual Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-96 sm:h-[420px] w-full rounded-3xl overflow-hidden border-2 border-[#E28723]/60 shadow-2xl group">
                <Image
                  src="/images/gallery/tribal-cultural-ensemble-artists-stage.jpg"
                  alt="Tribal folk artists performing at Karma Mahotsav"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="badge-pill bg-[#E28723] text-white text-[10px] font-bold">
                    वीर सावरकर उद्यान, बोरीवली (प.)
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                    प्रकृति एवं संस्कृति का पावन पर्व: कर्मा पूजा
                  </h3>
                  <p className="text-xs text-[#F7F5EC]/85 font-light leading-relaxed">
                    झारखंड के गौरवशाली लोकनृत्य, मांदर की थाप एवं Vicky Musical Team के साथ सांस्कृतिक एकता का महापर्व।
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center text-xs text-[#B8CBA5]">
                📍 <strong>स्थल:</strong> वीर सावरकर उद्यान, बोरीवली (प.), मुंबई • <strong>दिनांक:</strong> 25 अक्टूबर 2026
              </div>
            </div>
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

            {/* Right: Narrative Details */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <span className="badge-pill bg-[#E28723] text-white text-[10px] uppercase font-bold">
                  Recent Milestone Conclave
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal mt-2 leading-tight">
                  Pravasi Jharkhandvasi Bhavya Milan Samaroh (10 Oct 2026)
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

      {/* 3. PAST KEY COMMUNITY INITIATIVES (DYNAMIC FROM CMS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="max-w-2xl">
          <span className="badge-pill bg-[#B8CBA5]/20 text-[#123B2A] mb-2">
            Field Gatherings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#123B2A]">
            Milestone Community Gatherings ({pastEvents.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pastEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#123B2A]/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 w-full bg-[#071F14]">
                  <Image
                    src={evt.image || "/images/cultural-birsa.jpg"}
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
                    {evt.description}
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
