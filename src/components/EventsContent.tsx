"use client";

import { useState } from "react";
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
  Video,
  FileImage,
  Download,
  Share2,
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

  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);

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
        <div className="relative bg-gradient-to-br from-[#071F14] via-[#0F3524] to-[#123B2A] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-[#E28723] shadow-2xl overflow-hidden space-y-8">
          {/* Ambient lighting & decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E28723]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1D5139]/50 rounded-full blur-3xl pointer-events-none" />

          {/* Top Banner Row */}
          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge-pill bg-[#E28723] text-white text-[11px] font-bold uppercase tracking-wider animate-pulse flex items-center gap-1.5 shadow">
                <Sparkles className="w-3.5 h-3.5" />
                {language === "hi" ? "आगामी भव्य आयोजन • 25 अक्टूबर 2026" : "Upcoming Grand Celebration • 25 Oct 2026"}
              </span>
              <span className="badge-pill bg-white/10 text-[#B8CBA5] border border-white/15 text-[10px]">
                जनजातीय गौरव दिवस
              </span>
              <span className="badge-pill bg-white/10 text-[#E28723] border border-white/15 text-[10px]">
                एक भारत, श्रेष्ठ भारत
              </span>
            </div>

            <div className="space-y-2 max-w-4xl">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                🌿🙏 {language === "hi" ? "भव्य कर्मा महोत्सव 2026" : "Grand Karma Mahotsav 2026"} 🙏🌿
              </h2>
              <p className="text-sm sm:text-base text-[#F7F5EC]/90 font-light leading-relaxed">
                {language === "hi"
                  ? "झारखंडवासी परिवर्तन संघ, मुंबई की ओर से जनजातीय गौरव दिवस के उपलक्ष्य में 'एक भारत, श्रेष्ठ भारत' की भावना के साथ भव्य कर्मा महोत्सव का भव्य आयोजन।"
                  : "Organized by Jharkhandvasi Parivartan Sangh, Mumbai, celebrating Janjatiya Gaurav Diwas in the vibrant spirit of 'Ek Bharat, Shreshtha Bharat'."}
              </p>
            </div>
          </div>

          {/* Schedule & Venue Coordinates Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#E28723] flex items-center justify-center flex-shrink-0 shadow">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-[10px] text-[#B8CBA5] uppercase tracking-wider font-semibold block">
                  {language === "hi" ? "दिनांक (Date)" : "Event Date"}
                </span>
                <p className="text-sm font-bold text-white">
                  {language === "hi" ? "रविवार, 25 अक्टूबर 2026" : "Sunday, 25 Oct 2026"}
                </p>
                <span className="text-[10px] text-[#F7F5EC]/70">Diwali Season Festival</span>
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
                  {language === "hi" ? "दोपहर 12:30 से शाम 7:30 बजे" : "12:30 PM - 7:30 PM"}
                </p>
                <span className="text-[10px] text-[#F7F5EC]/70">Cultural &amp; Musical Sessions</span>
              </div>
            </div>

            <div className="sm:col-span-2 p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#B35E10] flex items-center justify-center flex-shrink-0 shadow">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-[10px] text-[#B8CBA5] uppercase tracking-wider font-semibold block">
                  {language === "hi" ? "स्थान (Official Venue)" : "Venue Location"}
                </span>
                <p className="text-sm font-bold text-white">
                  {language === "hi"
                    ? "वीर सावरकर उद्यान, एम. के. स्कूल के पास, टी.पी.एस. रोड नंबर 51, बोरीवली पश्चिम, मुंबई"
                    : "Veer Savarkar Udyan, Near M.K. School, T.P.S. Road No. 51, Borivali West, Mumbai"}
                </p>
                <span className="text-[10px] text-[#F7F5EC]/70">Near Borivali Station &amp; Link Road Junction</span>
              </div>
            </div>
          </div>

          {/* VIP Dignitaries & Hon'ble Guests Section */}
          <div className="relative z-10 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-3">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#E28723]" />
              <h3 className="font-serif text-lg font-bold text-white">
                {language === "hi" ? "सम्माननीय मुख्य अतिथिगण (Hon'ble Guests)" : "Hon'ble Guests & Dignitaries"}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-black/30 border border-white/15 flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#E28723]/20 border border-[#E28723] flex items-center justify-center text-[#E28723] font-bold text-xs flex-shrink-0">
                  1
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#E28723] block">
                    {language === "hi" ? "मुख्य अतिथि" : "Chief Guest"}
                  </span>
                  <h4 className="text-sm font-bold text-white">माननीय श्री गोपाल शेट्टी</h4>
                  <p className="text-xs text-[#B8CBA5]">जनसेवक, बोरीवली (पूर्व सांसद)</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/30 border border-white/15 flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#E28723]/20 border border-[#E28723] flex items-center justify-center text-[#E28723] font-bold text-xs flex-shrink-0">
                  2
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#E28723] block">
                    {language === "hi" ? "विशेष मुख्य अतिथि" : "Special Chief Guest"}
                  </span>
                  <h4 className="text-sm font-bold text-white">श्री संजय निरुपम जी</h4>
                  <p className="text-xs text-[#B8CBA5]">पूर्व सांसद एवं शिवसेना नेता</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/30 border border-white/15 flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#E28723]/20 border border-[#E28723] flex items-center justify-center text-[#E28723] font-bold text-xs flex-shrink-0">
                  3
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#E28723] block">
                    {language === "hi" ? "विशिष्ट अतिथि" : "Guest of Honour"}
                  </span>
                  <h4 className="text-sm font-bold text-white">माननीय श्री संजय उपाध्याय जी</h4>
                  <p className="text-xs text-[#B8CBA5]">विधायक, बोरीवली (मुंबई)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Special Attraction: Vicky Musical Team */}
          <div className="relative z-10 p-5 rounded-2xl bg-[#E28723]/15 border border-[#E28723]/40 backdrop-blur-sm space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#E28723] flex items-center justify-center text-white shadow">
                  <Music className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#E28723] block">
                    {language === "hi" ? "विशेष सांस्कृतिक आकर्षण" : "Special Cultural Attraction"}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-white">
                    Vicky Musical Team एवं पारंपरिक लोककला
                  </h4>
                </div>
              </div>
              <span className="text-xs text-[#B8CBA5] font-light">
                पारंपरिक झुमर, पाइका, मांदर एवं नगाड़ा वादन
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/90">
              {language === "hi"
                ? "झारखंड के सुप्रसिद्ध संगीत कलाकारों द्वारा मनमोहक प्रस्तुति, लोकगीत और लोकनृत्य का अद्वितीय संगम:"
                : "Captivating musical performances by renowned tribal and folk vocalists:"}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {[
                { name: "नितेश कश्यप", role: "Vocalist" },
                { name: "सतीश कुमार", role: "Vocalist" },
                { name: "संजोग बंसल", role: "Vocalist" },
                { name: "सुहानी ओरांव", role: "Singer" },
                { name: "रिंकू", role: "Performer" },
              ].map((artist) => (
                <div key={artist.name} className="p-2.5 rounded-xl bg-black/30 border border-white/10 text-center">
                  <p className="text-xs font-bold text-white">🎤 {artist.name}</p>
                  <span className="text-[9px] text-[#E28723] uppercase tracking-wider block">{artist.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DUAL SHOWCASE: OFFICIAL VIDEO TEASER + OFFICIAL POSTER */}
          <div id="karma-mahotsav-video" className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start scroll-mt-28">
            {/* Left: Video Player */}
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center justify-between">
                <span className="badge-pill bg-[#E28723] text-white text-[10px] font-bold flex items-center gap-1.5 shadow">
                  <Video className="w-3.5 h-3.5" />
                  {language === "hi" ? "आधिकारिक वीडियो आमंत्रण / Official Video Teaser" : "Official Video Invitation"}
                </span>
                <a
                  href="/videos/karma-mahotsav-2026.mp4"
                  download="Karma-Mahotsav-2026-Invitation.mp4"
                  className="text-xs font-bold text-[#E28723] hover:underline flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  {language === "hi" ? "वीडियो डाउनलोड करें" : "Download Video"}
                </a>
              </div>

              <div className="relative rounded-2xl overflow-hidden border-2 border-[#E28723] shadow-2xl bg-black aspect-video sm:aspect-video flex items-center justify-center">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/images/events/karma-mahotsav-2026-poster.jpg"
                  className="w-full h-full object-contain bg-black"
                >
                  <source src="/videos/karma-mahotsav-2026.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video playback.
                </video>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-[#B8CBA5]">
                <span>🎬 भव्य कर्मा महोत्सव 2026 आधिकारिक वीडियो आमंत्रण (13.4 MB MP4)</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://wa.me/?text=🌿🙏%20भव्य%20कर्मा%20महोत्सव%202026%20🙏🌿%0Aदिनांक:%20रविवार,%2025%20अक्टूबर%202026%0Aस्थान:%20वीर%20सावरकर%20उद्यान,%20बोरीवली%20पश्चिम,%20मुंबई%0Aदेखें%20वीडियो:%20https://jharkhandvasi-parivartan-sangh-rho.vercel.app/events%23karma-mahotsav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    व्हाट्सएप पर शेयर
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Official Event Poster */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="badge-pill bg-white/10 text-white text-[10px] font-bold border border-white/20 flex items-center gap-1.5">
                  <FileImage className="w-3.5 h-3.5 text-[#E28723]" />
                  {language === "hi" ? "आधिकारिक आमंत्रण पोस्टर" : "Official Invitation Poster"}
                </span>
                <a
                  href="/images/events/karma-mahotsav-2026-poster.jpg"
                  download="Karma-Mahotsav-2026-Poster.jpg"
                  className="text-xs font-bold text-[#E28723] hover:underline flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  {language === "hi" ? "पोस्टर डाउनलोड" : "Download Poster"}
                </a>
              </div>

              <div
                onClick={() => setIsPosterModalOpen(true)}
                className="relative cursor-pointer rounded-2xl overflow-hidden border-2 border-[#E28723]/70 bg-black/50 shadow-2xl group flex items-center justify-center p-3"
              >
                <div className="relative w-full aspect-[9/16] max-h-[460px]">
                  <Image
                    src="/images/events/karma-mahotsav-2026-poster.jpg"
                    alt="Grand Karma Mahotsav 2026 Official Poster"
                    fill
                    className="object-contain group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-[#E28723] text-white text-xs font-bold shadow-xl">
                    🔍 {language === "hi" ? "बड़ा करके देखें" : "Click to Enlarge"}
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-center text-[#B8CBA5]">
                📍 Veer Savarkar Udyan, Near M.K. School, T.P.S. Road No. 51, Borivali (W), Mumbai
              </p>
            </div>
          </div>

          {/* Slogan, Welcome Notice & Organizers Credit */}
          <div className="relative z-10 p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <p className="text-xs sm:text-sm text-[#F7F5EC]/95">
                🙏 <strong>{language === "hi" ? "आप सभी सपरिवार सादर आमंत्रित हैं।" : "You and your family are cordially invited!"}</strong>
              </p>
              <span className="text-xs font-bold text-[#E28723] tracking-wide">
                जय बिरसा मुंडा! जय झारखंड! जय महाराष्ट्र!
              </span>
            </div>
            <div className="border-t border-white/10 pt-2 text-xs text-[#B8CBA5] text-center sm:text-left">
              {language === "hi" ? (
                <>
                  <strong>आयोजक:</strong> अरविंद आर्य (संस्थापक राष्ट्रीय अध्यक्ष) • मोनिका (सह-आयोजक)
                </>
              ) : (
                <>
                  <strong>Organizers:</strong> Arvind Arya (Founder National President) • Monika (Co-organizer)
                </>
              )}
            </div>
          </div>

          {/* Contact buttons */}
          <div className="relative z-10 flex flex-wrap items-center gap-3 pt-2">
            <a
              href="tel:+917808008058"
              className="px-6 py-3.5 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold tracking-wide shadow-xl transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>हेल्पलाइन: 78080 08058</span>
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

        {/* Poster Fullscreen Modal */}
        {isPosterModalOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsPosterModalOpen(false)}
          >
            <div className="relative max-w-lg w-full max-h-[90vh] flex flex-col items-center">
              <button
                type="button"
                onClick={() => setIsPosterModalOpen(false)}
                className="self-end mb-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold hover:bg-white/40 transition"
              >
                ✕ बंद करें (Close)
              </button>
              <div className="relative w-full aspect-[9/16] max-h-[82vh] rounded-2xl overflow-hidden border-2 border-[#E28723]">
                <Image
                  src="/images/events/karma-mahotsav-2026-poster.jpg"
                  alt="Grand Karma Mahotsav 2026 Poster"
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
            </div>
          </div>
        )}
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
