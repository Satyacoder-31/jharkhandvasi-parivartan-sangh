"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Palette,
  TreePine,
  Droplets,
  Leaf,
  Calendar,
  Clock,
  MapPin,
  Music,
  Sparkles,
  MessageCircle,
  Video,
  FileImage,
  Download,
  Users,
  Award,
  Quote,
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import InteractiveMap from "@/components/InteractiveMap";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";
import { useSiteContent } from "@/context/SiteContentContext";
import { useLanguage } from "@/context/LanguageContext";

export default function HomeContent() {
  const { content } = useSiteContent();
  const { language, t } = useLanguage();
  const hp = content.homepage;

  const [eventMediaTab, setEventMediaTab] = useState<"video" | "anup-jalota" | "3d-logo" | "poster">("video");
  const [isPosterOpen, setIsPosterOpen] = useState(false);

  // Safe numeric fallbacks
  const stat1Num = typeof hp.stats.stat1.number === "number" ? hp.stats.stat1.number : parseInt(String(hp.stats.stat1.number), 10) || 20;
  const stat2Num = typeof hp.stats.stat2.number === "number" ? hp.stats.stat2.number : parseInt(String(hp.stats.stat2.number), 10) || 5200;
  const stat3Num = typeof hp.stats.stat3.number === "number" ? hp.stats.stat3.number : parseInt(String(hp.stats.stat3.number), 10) || 100;

  return (
    <div className="space-y-16 lg:space-y-24 pb-24 overflow-x-hidden w-full max-w-full">
      {/* 1. CINEMATIC HERO SLIDESHOW (DYNAMIC FROM CMS) */}
      <HeroSlider />

      {/* 1.5 LIVE EVENT SPOTLIGHT: GRAND KARMA MAHOTSAV 2026 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up" duration={800}>
          <div className="relative bg-gradient-to-br from-[#071F14] via-[#0F3524] to-[#123B2A] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-[#E28723]/60 shadow-2xl overflow-hidden">
            {/* Ambient decorative glowing spots */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#E28723]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1D5139]/40 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Column: Event Card Details */}
              <div className="lg:col-span-7 space-y-5">
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

                <div className="space-y-2">
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    🌿🙏 {language === "hi" ? "भव्य कर्मा महोत्सव 2026" : "Grand Karma Mahotsav 2026"} 🙏🌿
                  </h2>
                  <p className="text-xs sm:text-sm text-[#B8CBA5] font-medium tracking-wide">
                    {language === "hi"
                      ? "झारखंडवासी परिवर्तन संघ, मुंबई की ओर से जनजातीय गौरव दिवस के उपलक्ष्य में 'एक भारत, श्रेष्ठ भारत' की भावना के साथ भव्य कर्मा महोत्सव का आयोजन।"
                      : "Organized by Jharkhandvasi Parivartan Sangh, Mumbai, commemorating Janjatiya Gaurav Diwas in the vibrant spirit of 'Ek Bharat, Shreshtha Bharat'."}
                  </p>
                </div>

                {/* Event Schedule & Coordinates Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#E28723] flex items-center justify-center flex-shrink-0 shadow">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#B8CBA5] uppercase tracking-wider font-semibold block">
                        {language === "hi" ? "दिनांक (Date)" : "Event Date"}
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-white">
                        {language === "hi" ? "रविवार, 25 अक्टूबर 2026" : "Sunday, 25 October 2026"}
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#123B2A] border border-white/20 flex items-center justify-center flex-shrink-0 shadow">
                      <Clock className="w-5 h-5 text-[#E28723]" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#B8CBA5] uppercase tracking-wider font-semibold block">
                        {language === "hi" ? "समय (Time)" : "Timing"}
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-white">
                        {language === "hi" ? "दोपहर 12:30 से शाम 7:30 बजे तक" : "12:30 PM to 7:30 PM"}
                      </p>
                    </div>
                  </div>

                  <div className="sm:col-span-2 p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#B35E10] flex items-center justify-center flex-shrink-0 shadow">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#B8CBA5] uppercase tracking-wider font-semibold block">
                        {language === "hi" ? "स्थान (Venue Address)" : "Venue Location"}
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-white">
                        {language === "hi"
                          ? "वीर सावरकर उद्यान, एम. के. स्कूल के पास, टी.पी.एस. रोड नंबर 51, बोरीवली पश्चिम, मुंबई"
                          : "Veer Savarkar Udyan, Near M.K. School, T.P.S. Road No. 51, Borivali West, Mumbai"}
                      </p>
                    </div>
                  </div>

                  {/* Special Attraction: Vicky Musical Team */}
                  <div className="sm:col-span-2 p-3.5 rounded-2xl bg-[#E28723]/15 border border-[#E28723]/30 backdrop-blur-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#E28723] flex items-center justify-center flex-shrink-0 shadow">
                        <Music className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-[11px] text-[#E28723] uppercase tracking-wider font-bold">
                        {language === "hi" ? "विशेष आकर्षण: Vicky Musical Team एवं लोकगीत-लोकनृत्य" : "Special Attraction: Vicky Musical Team"}
                      </span>
                    </div>
                    <p className="text-xs text-white/90 font-medium">
                      {language === "hi"
                        ? "झारखंड की समृद्ध आदिवासी संस्कृति, पारंपरिक लोकगीत और लोकनृत्य की मनमोहक प्रस्तुतियां।"
                        : "Rich indigenous tribal music, Santhali dances, and cultural folklore of Jharkhand."}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {["नितेश कश्यप", "सतीश कुमार", "संजोग बंसल", "सुहानी ओरांव", "रिंकू"].map((artist) => (
                        <span key={artist} className="px-2.5 py-1 rounded-full bg-white/10 text-white text-[11px] font-semibold border border-white/15">
                          🎤 {artist}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hon'ble Dignitaries Strip */}
                  <div className="sm:col-span-2 p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#E28723]" />
                      <span className="text-[10px] text-[#B8CBA5] uppercase tracking-wider font-semibold">
                        {language === "hi" ? "सम्माननीय मुख्य अतिथिगण (Hon'ble Dignitaries)" : "Hon'ble Guests & Dignitaries"}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div className="p-2 rounded-xl bg-black/25 border border-white/10">
                        <span className="text-[9px] uppercase tracking-wider text-[#E28723] font-bold block">
                          {language === "hi" ? "मुख्य अतिथि" : "Chief Guest"}
                        </span>
                        <p className="text-xs font-bold text-white">माननीय श्री गोपाल शेट्टी</p>
                        <p className="text-[10px] text-[#F7F5EC]/70">जनसेवक, बोरीवली</p>
                      </div>
                      <div className="p-2 rounded-xl bg-black/25 border border-white/10">
                        <span className="text-[9px] uppercase tracking-wider text-[#E28723] font-bold block">
                          {language === "hi" ? "विशेष मुख्य अतिथि" : "Special Chief Guest"}
                        </span>
                        <p className="text-xs font-bold text-white">श्री संजय निरुपम जी</p>
                        <p className="text-[10px] text-[#F7F5EC]/70">पूर्व सांसद एवं शिवसेना नेता</p>
                      </div>
                      <div className="p-2 rounded-xl bg-black/25 border border-white/10">
                        <span className="text-[9px] uppercase tracking-wider text-[#E28723] font-bold block">
                          {language === "hi" ? "विशिष्ट अतिथि" : "Guest of Honour"}
                        </span>
                        <p className="text-xs font-bold text-white">माननीय श्री संजय उपाध्याय जी</p>
                        <p className="text-[10px] text-[#F7F5EC]/70">विधायक, बोरीवली</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slogan & Welcome Notice with Organizers */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
                    <p className="text-xs text-[#F7F5EC]/95 font-medium">
                      🙏 <strong>{language === "hi" ? "आप सभी सपरिवार सादर आमंत्रित हैं!" : "You are cordially invited with family & friends!"}</strong>
                    </p>
                    <span className="text-xs font-bold text-[#E28723] tracking-wide">
                      जय बिरसा मुंडा! जय झारखंड! जय महाराष्ट्र!
                    </span>
                  </div>
                  <div className="text-[11px] text-[#B8CBA5] border-t border-white/10 pt-1.5 text-center sm:text-left">
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

                {/* Contact & CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href="tel:+917808008058"
                    className="px-5 py-3 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold tracking-wide shadow-lg transition-all flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>78080 08058</span>
                  </a>

                  <a
                    href="tel:+919022288222"
                    className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold tracking-wide border border-white/20 shadow transition-all flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#B8CBA5]" />
                    <span>90222 88222</span>
                  </a>

                  <a
                    href="https://wa.me/917808008058?text=Namaste%2C%20I%20want%20details%20about%20Karma%20Mahotsav%202026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold tracking-wide shadow transition-all flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>व्हाट्सएप</span>
                  </a>

                  <Link
                    href="/events#karma-mahotsav"
                    className="px-5 py-3 rounded-full bg-transparent hover:bg-white/10 text-[#B8CBA5] hover:text-white text-xs font-bold tracking-wide border border-[#B8CBA5]/40 transition-all flex items-center gap-1.5"
                  >
                    <span>{language === "hi" ? "विस्तृत विवरण" : "Full Details"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Interactive Video & Poster Media Card */}
              <div className="lg:col-span-5 space-y-3">
                {/* Media Switcher Tabs */}
                <div className="flex items-center gap-1 p-1 bg-black/40 rounded-2xl border border-white/15">
                  <button
                    type="button"
                    onClick={() => setEventMediaTab("video")}
                    className={`flex-1 py-2 px-1.5 rounded-xl text-[10px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                      eventMediaTab === "video"
                        ? "bg-[#E28723] text-white shadow"
                        : "text-[#B8CBA5] hover:text-white"
                    }`}
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>{language === "hi" ? "कर्मा प्रोमो" : "Karma Promo"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setEventMediaTab("anup-jalota")}
                    className={`flex-1 py-2 px-1.5 rounded-xl text-[10px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                      eventMediaTab === "anup-jalota"
                        ? "bg-[#E28723] text-white shadow"
                        : "text-[#B8CBA5] hover:text-white"
                    }`}
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>{language === "hi" ? "अनूप जलोटा" : "Anup Jalota"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setEventMediaTab("3d-logo")}
                    className={`flex-1 py-2 px-1.5 rounded-xl text-[10px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                      eventMediaTab === "3d-logo"
                        ? "bg-[#E28723] text-white shadow"
                        : "text-[#B8CBA5] hover:text-white"
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{language === "hi" ? "3D लोगो" : "3D Emblem"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setEventMediaTab("poster")}
                    className={`flex-1 py-2 px-1.5 rounded-xl text-[10px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                      eventMediaTab === "poster"
                        ? "bg-[#E28723] text-white shadow"
                        : "text-[#B8CBA5] hover:text-white"
                    }`}
                  >
                    <FileImage className="w-3.5 h-3.5" />
                    <span>{language === "hi" ? "पोस्टर" : "Poster"}</span>
                  </button>
                </div>

                {/* Media Viewport */}
                {eventMediaTab === "3d-logo" ? (
                  <div className="relative rounded-2xl overflow-hidden border-2 border-[#E28723] bg-black shadow-2xl">
                    <video
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full aspect-[9/16] sm:aspect-video object-contain bg-black"
                    >
                      <source src="/videos/jps-official-3d-logo-animation.mp4" type="video/mp4" />
                      Your browser does not support video playback.
                    </video>
                    <div className="p-3 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between text-xs">
                      <span className="text-[#F7F5EC] font-semibold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#E28723]" />
                        आधिकारिक 3D प्रतीक चिह्न • एक जुर्रत... एक ज़रूरत
                      </span>
                      <a
                        href="/videos/jps-official-3d-logo-animation.mp4"
                        download="JPS-Official-3D-Emblem-Animation.mp4"
                        className="text-[#E28723] hover:underline flex items-center gap-1 font-bold"
                      >
                        <Download className="w-3 h-3" />
                        डाउनलोड
                      </a>
                    </div>
                  </div>
                ) : eventMediaTab === "anup-jalota" ? (
                  <div className="relative rounded-2xl overflow-hidden border-2 border-[#E28723] bg-black shadow-2xl">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full aspect-[9/16] sm:aspect-video object-contain bg-black"
                    >
                      <source src="/videos/anup-jalota-jharkhand-sthapana-diwas-message.mp4" type="video/mp4" />
                      Your browser does not support video playback.
                    </video>
                    <div className="p-3 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between text-xs">
                      <span className="text-[#F7F5EC] font-semibold flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-[#E28723]" />
                        पद्मश्री अनूप जलोटा - झारखंड स्थापना दिवस
                      </span>
                      <a
                        href="/videos/anup-jalota-jharkhand-sthapana-diwas-message.mp4"
                        download="Anup-Jalota-Jharkhand-Sthapana-Diwas-Message.mp4"
                        className="text-[#E28723] hover:underline flex items-center gap-1 font-bold"
                      >
                        <Download className="w-3 h-3" />
                        डाउनलोड
                      </a>
                    </div>
                  </div>
                ) : eventMediaTab === "video" ? (
                  <div className="relative rounded-2xl overflow-hidden border-2 border-[#E28723]/60 bg-black shadow-2xl">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      poster="/images/events/karma-mahotsav-2026-poster.jpg"
                      className="w-full aspect-[9/16] sm:aspect-video object-contain bg-black"
                    >
                      <source src="/videos/karma-mahotsav-2026.mp4" type="video/mp4" />
                      Your browser does not support video playback.
                    </video>
                    <div className="p-3 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between text-xs">
                      <span className="text-[#F7F5EC] font-semibold flex items-center gap-1.5">
                        <Video className="w-3.5 h-3.5 text-[#E28723]" />
                        Karma Mahotsav 2026 Promo
                      </span>
                      <a
                        href="/videos/karma-mahotsav-2026.mp4"
                        download="Karma-Mahotsav-2026-Invitation.mp4"
                        className="text-[#E28723] hover:underline flex items-center gap-1 font-bold"
                      >
                        <Download className="w-3 h-3" />
                        डाउनलोड
                      </a>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => setIsPosterOpen(true)}
                    className="relative cursor-pointer rounded-2xl overflow-hidden border-2 border-[#E28723]/60 bg-black/60 shadow-2xl group flex items-center justify-center p-2"
                  >
                    <div className="relative w-full aspect-[9/16] max-h-[460px]">
                      <Image
                        src="/images/events/karma-mahotsav-2026-poster.jpg"
                        alt="Grand Karma Mahotsav 2026 Official Invitation Poster"
                        fill
                        className="object-contain group-hover:scale-[1.02] transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 rounded-full bg-[#E28723] text-white text-xs font-bold shadow-lg">
                        🔍 {language === "hi" ? "पूरा पोस्टर देखें" : "Click to Enlarge"}
                      </span>
                    </div>
                  </div>
                )}

                {/* Sub-strip with direct download and maps links */}
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <a
                    href="/images/events/karma-mahotsav-2026-poster.jpg"
                    download="Karma-Mahotsav-2026-Poster.jpg"
                    className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-center font-semibold text-[#B8CBA5] hover:text-white transition-all flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5 text-[#E28723]" />
                    <span>{language === "hi" ? "पोस्टर डाउनलोड" : "Download Poster"}</span>
                  </a>

                  <a
                    href="https://maps.google.com/?q=Veer+Savarkar+Udyan+Borivali+West+Mumbai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-center font-semibold text-[#B8CBA5] hover:text-white transition-all flex items-center justify-center gap-1.5"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#E28723]" />
                    <span>{language === "hi" ? "गूगल मैप्स दिशा" : "Directions"}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Poster Fullscreen Modal */}
        {isPosterOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsPosterOpen(false)}
          >
            <div className="relative max-w-lg w-full max-h-[90vh] flex flex-col items-center">
              <button
                type="button"
                onClick={() => setIsPosterOpen(false)}
                className="self-end mb-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold hover:bg-white/40 transition"
              >
                ✕ बंद करें (Close)
              </button>
              <div className="relative w-full aspect-[9/16] max-h-[80vh] rounded-2xl overflow-hidden border-2 border-[#E28723]">
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

      {/* 2. VERIFIED STATISTICS STRIP (DYNAMIC INCREASING NUMBERS ON SCROLL) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up" duration={800}>
          <div className="relative bg-[#05140D] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#B8CBA5]/20 overflow-hidden">
            <Image
              src={hp.stats.backgroundImage || "/images/tree-planting.jpg"}
              alt="Native Sal trees and soil restoration nature backdrop"
              fill
              className="object-cover object-center filter brightness-85"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            {/* Rich cinematic dark gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#05140D]/90 via-[#05140D]/65 to-[#05140D]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05140D] via-transparent to-black/50" />
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {/* Stat 1 */}
              <div className="pt-4 sm:pt-0 sm:px-4 text-center">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#B8CBA5] block">
                  <AnimatedCounter target={stat1Num} suffix={hp.stats.stat1.suffix} duration={1800} />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-1 block">
                  {language === "hi" ? t("statYears") : hp.stats.stat1.label}
                </span>
                <span className="text-[11px] text-[#F7F5EC]/65 block mt-0.5">
                  {language === "hi" ? t("statYearsSub") : hp.stats.stat1.sublabel}
                </span>
              </div>

              {/* Stat 2 */}
              <div className="pt-4 sm:pt-0 sm:px-4 text-center">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E28723] block">
                  <AnimatedCounter target={stat2Num} suffix={hp.stats.stat2.suffix} duration={2200} />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-1 block">
                  {language === "hi" ? t("statWorkers") : hp.stats.stat2.label}
                </span>
                <span className="text-[11px] text-[#F7F5EC]/65 block mt-0.5">
                  {language === "hi" ? t("statWorkersSub") : hp.stats.stat2.sublabel}
                </span>
              </div>

              {/* Stat 3 */}
              <div className="pt-4 sm:pt-0 sm:px-4 text-center">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#B8CBA5] block">
                  <AnimatedCounter target={stat3Num} suffix={hp.stats.stat3.suffix} duration={2000} />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-1 block">
                  {language === "hi" ? t("statScreenings") : hp.stats.stat3.label}
                </span>
                <span className="text-[11px] text-[#F7F5EC]/65 block mt-0.5">
                  {language === "hi" ? t("statScreeningsSub") : hp.stats.stat3.sublabel}
                </span>
              </div>

              {/* Stat 4 */}
              <div className="pt-4 sm:pt-0 sm:px-4 text-center">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white block">
                  {hp.stats.stat4.number}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-1 block">
                  {language === "hi" ? t("statHelpline") : hp.stats.stat4.label}
                </span>
                <span className="text-[11px] text-[#E28723] font-mono block mt-0.5">
                  {language === "hi" ? t("statHelplineSub") : hp.stats.stat4.sublabel}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 2.5 DIGNITARY SPOTLIGHT: PADMA SHRI ANUP JALOTA VIDEO MESSAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up" duration={850}>
          <div className="relative bg-gradient-to-br from-[#071F14] via-[#0D2C1F] to-[#123B2A] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-[#E28723]/60 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#E28723]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1D5139]/40 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Dignitary Details & Spoken Message */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="badge-pill bg-[#E28723] text-white text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow">
                    <Sparkles className="w-3.5 h-3.5" />
                    {language === "hi" ? "राष्ट्रीय विभूति शुभकामना संदेश" : "National Icon Blessing & Endorsement"}
                  </span>
                  <span className="badge-pill bg-white/10 text-[#B8CBA5] border border-white/15 text-[10px]">
                    झारखंड स्थापना दिवस महोत्सव (मुंबई)
                  </span>
                  <span className="badge-pill bg-white/10 text-[#E28723] border border-white/15 text-[10px]">
                    15+ वर्ष सेवा सम्मान
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {language === "hi"
                      ? "भजन सम्राट पद्मश्री अनूप जलोटा जी का विशेष संदेश"
                      : "Special Video Message by Padma Shri Anup Jalota"}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#B8CBA5] font-medium">
                    {language === "hi"
                      ? "मुंबई में 18 नवंबर को आयोजित होने वाले झारखंड स्थापना दिवस महोत्सव के पावन अवसर पर झारखंडवासी परिवर्तन संघ एवं संस्थापक अरविंद आर्य जी के लिए प्रेरणादायी संदेश।"
                      : "Honoring Founder Arvind Arya and Jharkhandvasi Parivartan Sangh on the landmark Jharkhand Sthapana Diwas Mahotsav in Mumbai."}
                  </p>
                </div>

                {/* Spoken Quote Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-[#E28723]/30 backdrop-blur-sm space-y-3">
                  <div className="flex items-center gap-2 text-[#E28723]">
                    <Quote className="w-6 h-6 opacity-90 flex-shrink-0" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#B8CBA5]">
                      {language === "hi" ? "पद्मश्री अनूप जलोटा जी के शब्द" : "Words of Padma Shri Anup Jalota"}
                    </span>
                  </div>
                  <blockquote className="font-serif text-sm sm:text-base italic text-[#F7F5EC] leading-relaxed">
                    “मुंबई में 18 नवंबर को होने वाले झारखंड स्थापना दिवस महोत्सव में झारखंड वासी परिवर्तन संघ के संस्थापक अरविंद आर्य जी को हार्दिक बधाई देता हूं और आप सभी इन्हें शुभकामनाएं दें। इन्होंने 15 वर्षों में हजारों लोगों को संगठित किया है, जिसमें हर वर्ग और हर क्षेत्र के आम और खास लोग हैं। यह बहुत बड़ी बात है और ऐसे व्यक्ति को हमेशा बधाई देनी चाहिए, शुभकामनाएं देनी चाहिए। नमस्कार।”
                  </blockquote>
                  <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-[#B8CBA5]">
                    <span className="font-semibold text-white">
                      — पद्मश्री अनूप जलोटा (भारतीय गायक, संगीतकार एवं अभिनेता)
                    </span>
                    <span className="text-[#E28723] text-[11px]">
                      प्रशंसा: संस्थापक अरविंद आर्य जी
                    </span>
                  </div>
                </div>

                {/* Badges / Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] text-[#E28723] font-bold block uppercase">विभूति</span>
                    <strong className="text-white">पद्मश्री अनूप जलोटा</strong>
                    <span className="text-[10px] text-[#F7F5EC]/70 block">प्रख्यात संगीतकार व गायक</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] text-[#E28723] font-bold block uppercase">सम्मानित नेतृत्व</span>
                    <strong className="text-white">श्री अरविंद आर्य जी</strong>
                    <span className="text-[10px] text-[#F7F5EC]/70 block">संस्थापक, राष्ट्रीय अध्यक्ष JPS</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] text-[#E28723] font-bold block uppercase">आयोजन</span>
                    <strong className="text-white">18 नवंबर, मुंबई</strong>
                    <span className="text-[10px] text-[#F7F5EC]/70 block">झारखंड स्थापना दिवस समारोह</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="/videos/anup-jalota-jharkhand-sthapana-diwas-message.mp4"
                    download="Anup-Jalota-Jharkhand-Sthapana-Diwas-Message.mp4"
                    className="px-5 py-2.5 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold tracking-wide shadow-lg transition-all flex items-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{language === "hi" ? "वीडियो डाउनलोड करें (6.9 MB)" : "Download Video (6.9 MB)"}</span>
                  </a>

                  <a
                    href="https://wa.me/?text=%E0%A4%AA%E0%A4%A6%E0%A5%8D%E0%A4%AE%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80%20%E0%A4%85%E0%A4%A8%E0%A5%82%E0%A4%AA%20%E0%A4%9C%E0%A4%B2%E0%A5%8B%E0%A4%9F%E0%A4%BE%20%E0%A4%9C%E0%A5%80%20%E0%A4%95%E0%A4%BE%20%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%87%E0%A4%B7%20%E0%A4%B8%E0%A4%82%E0%A4%A6%E0%A5%87%E0%A4%B6%20%E0%A4%9D%E0%A4%BE%E0%A4%B0%E0%A4%96%E0%A4%82%E0%A4%A1%E0%A4%B5%E0%A4%BE%E0%A4%B8%E0%A5%80%20%E0%A4%AA%E0%A4%B0%E0%A4%BF%E0%A4%B5%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%A8%20%E0%A4%B8%E0%A4%82%E0%A4%98%20%E0%A4%8F%E0%A4%B5%E0%A4%82%20%E0%A4%B8%E0%A4%82%E0%A4%B8%E0%A5%8D%E0%A4%A5%E0%A4%BE%E0%A4%AA%E0%A4%95%20%E0%A4%85%E0%A4%B0%E0%A4%B5%E0%A4%BF%E0%A4%82%E0%A4%A6%20%E0%A4%86%E0%A4%B0%E0%A5%8D%E0%A4%AF%20%E0%A4%9C%E0%A5%80%20%E0%A4%95%E0%A5%87%20%E0%A4%B2%E0%A4%BF%E0%A4%8F%3A%20https%3A%2F%2Fjharkhandvasi-parivartan-sangh-rho.vercel.app%2Fevents%23anup-jalota-video"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold tracking-wide shadow transition-all flex items-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{language === "hi" ? "व्हाट्सएप पर शेयर करें" : "Share on WhatsApp"}</span>
                  </a>

                  <Link
                    href="/events#anup-jalota-video"
                    className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#B8CBA5] hover:text-white text-xs font-bold tracking-wide border border-white/20 transition-all flex items-center gap-1.5"
                  >
                    <span>{language === "hi" ? "कार्यक्रम विवरण" : "Event Coverage"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: High Quality Video Player */}
              <div className="lg:col-span-5 space-y-3">
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#E28723] shadow-2xl bg-black aspect-video flex items-center justify-center">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-contain bg-black"
                  >
                    <source src="/videos/anup-jalota-jharkhand-sthapana-diwas-message.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video playback.
                  </video>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-[#B8CBA5]">
                  <span className="flex items-center gap-1.5 text-white font-medium">
                    <Video className="w-3.5 h-3.5 text-[#E28723]" />
                    पद्मश्री अनूप जलोटा आधिकारिक संदेश (33s MP4)
                  </span>
                  <span className="text-[11px] text-[#E28723] font-semibold">
                    18 नवंबर, मुंबई
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. INTRODUCTION: WHO WE ARE (DYNAMIC FROM CMS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 border border-[#123B2A]/10 dark:border-[#B8CBA5]/20 shadow-xl bg-white dark:bg-[#071F14] text-[#17231C] dark:text-white">
          <Image
            src="/images/watershed-nature.jpg"
            alt="Pristine nature and forest rivers of Jharkhand"
            fill
            className="object-cover opacity-25 dark:opacity-35 filter brightness-90"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/70 dark:from-[#071F14]/95 dark:via-[#071F14]/85 dark:to-[#071F14]/70" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Text Column */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="left" duration={900}>
                <div className="space-y-6">
                  <span className="badge-pill bg-[#B8CBA5]/30 text-[#123B2A] dark:bg-[#B8CBA5]/20 dark:text-[#B8CBA5] border border-[#123B2A]/10 dark:border-[#B8CBA5]/30">
                    {language === "hi" ? t("hpAboutBadge") : hp.aboutIntro.badge}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#123B2A] dark:text-white leading-tight">
                    {language === "hi" ? (
                      <span>{t("hpAboutHeading")}</span>
                    ) : (
                      <>
                        {hp.aboutIntro.headingStart}{" "}
                        <span className="italic text-[#1D5139] dark:text-[#B8CBA5]">{hp.aboutIntro.headingItalic}</span>{" "}
                        {hp.aboutIntro.headingEnd}
                      </>
                    )}
                  </h2>
                  <p className="text-sm sm:text-base text-[#17231C]/85 dark:text-[#F7F5EC]/85 leading-relaxed font-light">
                    {language === "hi" ? t("hpAboutP1") : hp.aboutIntro.paragraph1}
                  </p>
                  <p className="text-sm text-[#17231C]/80 dark:text-[#F7F5EC]/80 leading-relaxed font-light">
                    {language === "hi" ? t("hpAboutP2") : hp.aboutIntro.paragraph2}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      href={hp.aboutIntro.primaryBtnHref || "/about"}
                      className="px-6 py-3 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold tracking-wide shadow transition-all flex items-center gap-2 group"
                    >
                      <span>{language === "hi" ? t("hpAboutBtnHistory") : hp.aboutIntro.primaryBtnText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href={hp.aboutIntro.secondaryBtnHref || "/contact"}
                      className="px-6 py-3 rounded-full border border-[#123B2A]/20 dark:border-white/20 text-[#123B2A] dark:text-[#F7F5EC] hover:bg-black/5 dark:hover:bg-white/10 text-xs font-semibold tracking-wide transition-all"
                    >
                      {language === "hi" ? t("hpAboutBtnFounder") : hp.aboutIntro.secondaryBtnText}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="right" duration={900} delay={150}>
                <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl border border-[#123B2A]/10 dark:border-white/15 group">
                  <Image
                    src={hp.aboutIntro.image || "/images/community-assembly.jpg"}
                    alt={hp.aboutIntro.imageTitle}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071F14]/90 via-[#071F14]/20 to-transparent" />
                  {/* Official Emblem Trust Badge with Slogan */}
                  <div className="absolute top-4 right-4 z-20 bg-white/95 dark:bg-[#071F14]/90 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-black/5 dark:border-white/15 flex items-center gap-2.5">
                    <div className="w-10 h-10 relative flex-shrink-0 bg-white rounded-xl p-1 shadow-sm border border-[#123B2A]/10">
                      <Image
                        src="/images/logo/jps-logo-full.png"
                        alt="JPS Official Emblem with Slogan"
                        width={40}
                        height={36}
                        unoptimized
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-left">
                      <p className="text-[11px] font-bold text-[#123B2A] dark:text-[#B8CBA5] leading-none">एक जुर्रत... एक ज़रूरत</p>
                      <p className="text-[9px] text-[#795943] dark:text-white/70 font-medium leading-tight mt-0.5">Regd. NGO E-30004</p>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-xs uppercase tracking-wider text-[#B8CBA5] font-semibold">
                      {hp.aboutIntro.imageTag}
                    </span>
                    <h4 className="font-serif text-lg font-normal">
                      {hp.aboutIntro.imageTitle}
                    </h4>
                    <p className="text-xs text-[#F7F5EC]/75 font-light">
                      {hp.aboutIntro.imageLocation}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIX CORE NGO PROGRAMS (DYNAMIC FROM CMS PROGRAMS LIST) */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-[#F7F5EC] dark:bg-[#071F14] text-[#17231C] dark:text-white border-y border-[#123B2A]/10 dark:border-[#B8CBA5]/20">
        <Image
          src="/images/hero-forest.jpg"
          alt="Ancient Sal and Mahua forest of Jharkhand"
          fill
          className="object-cover opacity-35 dark:opacity-45 filter brightness-85"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F5EC]/85 via-[#F7F5EC]/70 to-[#F7F5EC]/85 dark:from-[#071F14]/90 dark:via-[#071F14]/75 dark:to-[#071F14]/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <span className="badge-pill bg-[#B8CBA5]/30 text-[#123B2A] dark:bg-[#B8CBA5]/20 dark:text-[#B8CBA5] border border-[#123B2A]/10 dark:border-[#B8CBA5]/30">
                {language === "hi" ? t("hpProgBadge") : hp.programsHeader.badge}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#123B2A] dark:text-white">
                {language === "hi" ? (
                  <span>{t("hpProgHeading")}</span>
                ) : (
                  <>
                    {hp.programsHeader.headingStart}{" "}
                    <span className="italic text-[#1D5139] dark:text-[#B8CBA5]">{hp.programsHeader.headingItalic}</span>
                  </>
                )}
              </h2>
              <p className="text-xs sm:text-sm text-[#17231C]/80 dark:text-[#F7F5EC]/80 font-light leading-relaxed">
                {language === "hi" ? t("hpProgDesc") : hp.programsHeader.description}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.programs.slice(0, 6).map((prog, idx) => (
              <ScrollReveal key={prog.id} direction="up" delay={50 * (idx + 1)}>
                <div className="bg-white dark:bg-[#0D2C1F] rounded-3xl overflow-hidden border border-[#123B2A]/10 dark:border-[#B8CBA5]/20 shadow-md hover:shadow-xl hover:border-[#1D5139]/40 dark:hover:border-[#B8CBA5]/50 transition-all group flex flex-col justify-between h-full">
                  <div>
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={prog.image || "/images/community-assembly.jpg"}
                        alt={prog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="badge-pill bg-[#123B2A] text-[#B8CBA5] dark:bg-[#071F14]/90 backdrop-blur-sm text-[10px] border border-white/10">
                          {language === "hi" ? t(`prog${idx + 1}Badge`) : (prog.stats || "Active Program")}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 space-y-2">
                      <h3 className="font-serif text-xl font-normal text-[#123B2A] dark:text-white group-hover:text-[#1D5139] dark:group-hover:text-[#B8CBA5] transition-colors">
                        {language === "hi" ? (prog.hindiTitle || t(`prog${idx + 1}Title`)) : prog.title}
                      </h3>
                      <p className="text-xs text-[#17231C]/75 dark:text-[#F7F5EC]/75 font-light leading-relaxed line-clamp-3">
                        {language === "hi" ? t(`prog${idx + 1}Desc`) : prog.description}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <Link
                      href={`/our-work#${prog.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D5139] dark:text-[#B8CBA5] group-hover:underline"
                    >
                      <span>{language === "hi" ? "कार्यक्रम विस्तार देखें" : "Explore Program"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NATURE & ECOLOGICAL HARMONY (DYNAMIC FROM CMS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up" duration={800}>
          <div className="relative bg-white dark:bg-[#071F14] text-[#17231C] dark:text-white rounded-3xl overflow-hidden border border-[#123B2A]/10 dark:border-[#B8CBA5]/25 shadow-xl p-8 sm:p-12 lg:p-14">
            <Image
              src={hp.natureSection.image || "/images/watershed-nature.jpg"}
              alt="Natural watershed and pristine river of Jharkhand"
              fill
              className="object-cover opacity-35 dark:opacity-45 filter brightness-85"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/60 dark:from-[#071F14]/90 dark:via-[#071F14]/75 dark:to-[#071F14]/55" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="badge-pill bg-[#B8CBA5]/30 text-[#123B2A] dark:bg-[#B8CBA5]/20 dark:text-[#B8CBA5] border border-[#123B2A]/10 dark:border-[#B8CBA5]/30">
                  <TreePine className="w-3.5 h-3.5 text-[#E28723]" />
                  {language === "hi" ? t("hpNatureBadge") : hp.natureSection.badge}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#123B2A] dark:text-white">
                  {language === "hi" ? (
                    <span>{t("hpNatureHeading")}</span>
                  ) : (
                    <>
                      {hp.natureSection.headingStart}{" "}
                      <span className="italic text-[#1D5139] dark:text-[#B8CBA5]">{hp.natureSection.headingItalic}</span>
                    </>
                  )}
                </h2>
                <p className="text-xs sm:text-sm text-[#17231C]/85 dark:text-[#F7F5EC]/85 font-light leading-relaxed max-w-2xl">
                  {language === "hi" ? t("hpNatureDesc") : hp.natureSection.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-[#F7F5EC] dark:bg-[#123B2A]/80 border border-[#123B2A]/10 dark:border-[#B8CBA5]/20">
                    <TreePine className="w-4 h-4 text-[#E28723] mb-1" />
                    <span className="font-serif text-sm font-semibold text-[#123B2A] dark:text-white block">
                      {language === "hi" ? t("hpNatureCard1Title") : hp.natureSection.card1Title}
                    </span>
                    <span className="text-[11px] text-[#17231C]/70 dark:text-[#F7F5EC]/70">
                      {language === "hi" ? t("hpNatureCard1Desc") : hp.natureSection.card1Desc}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#F7F5EC] dark:bg-[#123B2A]/80 border border-[#123B2A]/10 dark:border-[#B8CBA5]/20">
                    <Leaf className="w-4 h-4 text-[#1D5139] dark:text-[#B8CBA5] mb-1" />
                    <span className="font-serif text-sm font-semibold text-[#123B2A] dark:text-white block">
                      {language === "hi" ? t("hpNatureCard2Title") : hp.natureSection.card2Title}
                    </span>
                    <span className="text-[11px] text-[#17231C]/70 dark:text-[#F7F5EC]/70">
                      {language === "hi" ? t("hpNatureCard2Desc") : hp.natureSection.card2Desc}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#F7F5EC] dark:bg-[#123B2A]/80 border border-[#123B2A]/10 dark:border-[#B8CBA5]/20">
                    <Droplets className="w-4 h-4 text-[#1D5139] dark:text-[#B8CBA5] mb-1" />
                    <span className="font-serif text-sm font-semibold text-[#123B2A] dark:text-white block">
                      {language === "hi" ? t("hpNatureCard3Title") : hp.natureSection.card3Title}
                    </span>
                    <span className="text-[11px] text-[#17231C]/70 dark:text-[#F7F5EC]/70">
                      {language === "hi" ? t("hpNatureCard3Desc") : hp.natureSection.card3Desc}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={hp.natureSection.actionBtnHref || "/nature"}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold tracking-wide shadow transition-all"
                  >
                    <span>{language === "hi" ? "पर्यावरण अभियान देखें" : hp.natureSection.actionBtnText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 hidden lg:block">
                <div className="relative h-72 rounded-2xl overflow-hidden border border-[#123B2A]/10 dark:border-white/15 shadow-xl">
                  <Image
                    src={hp.natureSection.sideImage || "/images/tree-planting.jpg"}
                    alt={hp.natureSection.sideTitle}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] text-[#B8CBA5] font-semibold uppercase tracking-wider block">
                      {hp.natureSection.sideTag}
                    </span>
                    <span className="font-serif text-sm">{hp.natureSection.sideTitle}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 6. 24/7 CRISIS RESPONSE SPOTLIGHT (DYNAMIC FROM CMS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative bg-[#F7F5EC] dark:bg-[#071F14] text-[#17231C] dark:text-white rounded-3xl overflow-hidden border border-[#123B2A]/10 dark:border-[#B8CBA5]/20 shadow-xl p-8 sm:p-12">
          <Image
            src="/images/senior-health.jpg"
            alt="Frontline healthcare and relief"
            fill
            className="object-cover opacity-30 dark:opacity-40 filter brightness-85"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F5EC]/90 via-[#F7F5EC]/75 to-[#F7F5EC]/60 dark:from-[#071F14]/90 dark:via-[#071F14]/75 dark:to-[#071F14]/60" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Content from Left */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="left" duration={800}>
                <div className="space-y-5">
                  <span className="badge-pill bg-[#E28723] text-white text-[11px] font-bold">
                    {language === "hi" ? t("hpCrisisBadge") : hp.crisisSection.badge}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-normal leading-tight text-[#123B2A] dark:text-white">
                    {language === "hi" ? (
                      <span>{t("hpCrisisHeading")}</span>
                    ) : (
                      <>
                        {hp.crisisSection.headingStart}{" "}
                        <span className="italic text-[#1D5139] dark:text-[#B8CBA5]">{hp.crisisSection.headingItalic}</span>
                      </>
                    )}
                  </h2>
                  <p className="text-sm text-[#17231C]/85 dark:text-[#F7F5EC]/85 font-light leading-relaxed max-w-xl">
                    {language === "hi" ? t("hpCrisisDesc") : hp.crisisSection.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={`tel:${hp.crisisSection.helplinePhone.replace(/\s+/g, "")}`}
                      className="px-6 py-3 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold tracking-wide shadow transition-all flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{language === "hi" ? t("hpCrisisCallBtn") : hp.crisisSection.helplineBtnText}</span>
                    </a>
                    <Link
                      href={hp.crisisSection.secondaryBtnHref || "/impact"}
                      className="px-6 py-3 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[#123B2A] dark:text-[#F7F5EC] text-xs font-semibold tracking-wide border border-[#123B2A]/10 dark:border-white/20 transition-all"
                    >
                      {language === "hi" ? "राहत कार्य विवरण" : hp.crisisSection.secondaryBtnText}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Image from Right */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="right" duration={800} delay={150}>
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-[#123B2A]/10 dark:border-white/10 shadow-lg group">
                  <Image
                    src={hp.crisisSection.image || "/images/volunteer-hands.jpg"}
                    alt={hp.crisisSection.imageTitle}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2419]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] text-[#B8CBA5] font-semibold block uppercase">
                      {hp.crisisSection.imageTag}
                    </span>
                    <span className="font-serif text-sm">{hp.crisisSection.imageTitle}</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CHARITY ART STORE & PAINTINGS FOR NGO DONATIONS (DYNAMIC FROM CMS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative bg-white dark:bg-[#071F14] text-[#17231C] dark:text-white rounded-3xl overflow-hidden border border-[#123B2A]/10 dark:border-[#B8CBA5]/20 shadow-xl p-8 sm:p-12">
          <Image
            src="/images/art-sohrai.jpg"
            alt="Traditional Sohrai tribal art painting"
            fill
            className="object-cover opacity-35 dark:opacity-45 filter brightness-85"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/80 to-white/65 dark:from-[#071F14]/90 dark:via-[#071F14]/80 dark:to-[#071F14]/65" />

          <div className="relative z-10 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#123B2A]/10 dark:border-white/10">
              <div className="max-w-2xl space-y-3">
                <span className="badge-pill bg-[#E28723] text-white text-[11px] font-bold">
                  <Palette className="w-3.5 h-3.5" />
                  {language === "hi" ? t("hpArtBadge") : hp.artSpotlight.badge}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#123B2A] dark:text-white">
                  {language === "hi" ? (
                    <span>{t("hpArtHeading")}</span>
                  ) : (
                    <>
                      {hp.artSpotlight.headingStart}{" "}
                      <span className="italic text-[#1D5139] dark:text-[#B8CBA5]">{hp.artSpotlight.headingItalic}</span>
                    </>
                  )}
                </h2>
                <p className="text-xs sm:text-sm text-[#17231C]/85 dark:text-[#F7F5EC]/85 font-light leading-relaxed">
                  {language === "hi" ? t("hpArtDesc") : hp.artSpotlight.description}
                </p>
              </div>

              <div className="flex-shrink-0">
                <Link
                  href={hp.artSpotlight.ctaBtnHref || "/art-store"}
                  className="px-6 py-3.5 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs sm:text-sm font-bold tracking-wide shadow-lg transition-all inline-flex items-center gap-2"
                >
                  <span>{language === "hi" ? "कलाकृतियां देखें" : hp.artSpotlight.ctaBtnText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Featured Artwork Cards (Dynamic from content.artStore) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.artStore.slice(0, 4).map((art, idx) => (
                <ScrollReveal key={art.id} direction="up" delay={50 * (idx + 1)}>
                  <div className="bg-[#FDFCF9] dark:bg-[#0D2C1F] rounded-2xl overflow-hidden border border-[#123B2A]/10 dark:border-white/10 group hover:border-[#1D5139]/40 dark:hover:border-[#B8CBA5]/40 transition-all flex flex-col justify-between h-full shadow-sm">
                    <div>
                      <div className="relative h-48 w-full overflow-hidden bg-[#123B2A]">
                        <Image
                          src={art.image || "/images/art-birsa.jpg"}
                          alt={art.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, 25vw"
                        />
                        <div className="absolute top-2.5 left-2.5">
                          <span className="badge-pill bg-[#123B2A]/85 text-[#B8CBA5] backdrop-blur-sm text-[10px]">
                            {art.categoryLabel || "Charity Art"}
                          </span>
                        </div>
                        <div className="absolute top-2.5 right-2.5">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#E28723] text-white text-[10px] font-bold shadow">
                            ₹{art.price.toLocaleString("en-IN")}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 space-y-2">
                        {art.hindiTitle && (
                          <span className="text-[10px] text-[#795943] dark:text-[#B8CBA5]/80 font-medium block">
                            {art.hindiTitle}
                          </span>
                        )}
                        <h4 className="font-serif text-sm font-semibold text-[#123B2A] dark:text-white group-hover:text-[#1D5139] dark:group-hover:text-[#B8CBA5] transition-colors line-clamp-1 leading-snug">
                          {art.title}
                        </h4>
                        <p className="text-[11px] text-[#17231C]/70 dark:text-[#F7F5EC]/70 line-clamp-2">
                          {art.description}
                        </p>
                        {art.impact && (
                          <div className="p-2.5 rounded-xl bg-[#E8F5E9] dark:bg-[#06180F] border border-[#2E7D32]/35 dark:border-[#2E7D32]/60 text-[11px] leading-snug shadow-sm">
                            <span className="font-bold text-[#1B5E20] dark:text-[#A5D6A7] block text-[10px] uppercase tracking-wide">
                              {language === "hi" ? "प्रत्यक्ष कल्याणकारी प्रभाव:" : "Direct Welfare Impact:"}
                            </span>
                            <span className="text-[#143E2B] dark:text-[#F1F8E9] font-medium text-[11px]">
                              {art.impact}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="p-4 pt-0">
                      <Link
                        href="/art-store"
                        className="w-full py-2.5 rounded-xl bg-[#123B2A] hover:bg-[#1D5139] text-white text-xs font-bold text-center block transition-all shadow-sm"
                      >
                        {language === "hi" ? `कला सहयोग • ₹${art.price.toLocaleString("en-IN")}` : `Acquire Artwork • ₹${art.price.toLocaleString("en-IN")}`}
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE PROJECT HUBS MAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up" duration={800}>
          <div className="relative rounded-3xl overflow-hidden p-1 sm:p-2 border border-[#123B2A]/10 dark:border-[#B8CBA5]/20 shadow-xl bg-[#F7F5EC] dark:bg-[#071F14]">
            <Image
              src="/images/hero-forest.jpg"
              alt="Forest backdrop"
              fill
              className="object-cover opacity-35 dark:opacity-45 filter brightness-85"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#F7F5EC]/85 via-[#F7F5EC]/70 to-[#F7F5EC]/85 dark:from-[#071F14]/90 dark:via-[#071F14]/80 dark:to-[#071F14]/90" />
            <div className="relative z-10">
              <InteractiveMap />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 9. VOLUNTEER & DONATE CTA (DYNAMIC FROM CMS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up" duration={700}>
          <div className="relative bg-[#05140D] text-white rounded-3xl p-8 sm:p-12 border border-[#B8CBA5]/25 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl overflow-hidden">
            <Image
              src={hp.volunteerCta.image || "/images/tree-planting.jpg"}
              alt="Volunteers planting native Sal saplings"
              fill
              className="object-cover object-center filter brightness-85"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            {/* Rich cinematic dark gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#05140D]/90 via-[#05140D]/65 to-[#05140D]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05140D] via-transparent to-black/50" />

            <div className="relative z-10 max-w-xl space-y-2">
              <span className="text-xs uppercase tracking-wider text-[#B8CBA5] font-bold">
                {language === "hi" ? t("hpVolEyebrow") : hp.volunteerCta.eyebrow}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal">
                {language === "hi" ? (
                  <span>{t("hpVolHeading")}</span>
                ) : (
                  <>
                    {hp.volunteerCta.headingStart}{" "}
                    <span className="italic text-[#B8CBA5]">{hp.volunteerCta.headingItalic}</span>
                  </>
                )}
              </h3>
              <p className="text-xs sm:text-sm text-[#F7F5EC]/80 font-light leading-relaxed">
                {language === "hi" ? t("hpVolDesc") : hp.volunteerCta.description}
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-3 flex-shrink-0">
              <Link
                href={hp.volunteerCta.primaryBtnHref || "/get-involved"}
                className="px-6 py-3 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold tracking-wide shadow transition-all"
              >
                {language === "hi" ? t("hpVolBtnJoin") : hp.volunteerCta.primaryBtnText}
              </Link>
              <Link
                href={hp.volunteerCta.secondaryBtnHref || "/donate"}
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wide border border-white/25 transition-all"
              >
                {language === "hi" ? t("hpVolBtnDonate") : hp.volunteerCta.secondaryBtnText}
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
