"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play, Heart, Shield, Sparkles } from "lucide-react";

import { useSiteContent } from "@/context/SiteContentContext";
import { useLanguage } from "@/context/LanguageContext";

interface Slide {
  id: number;
  eyebrow: string;
  hindiTitle: string;
  title: string;
  italicWord: string;
  titleEnd: string;
  description: string;
  image: string;
  alt: string;
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
  badgeText: string;
}

const fallbackSlides: Slide[] = [
  {
    id: 1,
    eyebrow: "SERVICE • EMPOWERMENT • TRANSFORMATION",
    hindiTitle: "सेवा से परिवर्तन की ओर",
    title: "Growing Hope. Nurturing Lives.",
    italicWord: "Transforming",
    titleEnd: "Communities.",
    description:
      "Standing beside migrant families, empowering children with education, caring for elders, and preserving Jharkhand's natural heritage through compassion and collective grassroots action.",
    image: "/images/hero-forest.jpg",
    alt: "Lush green forest canopy of Jharkhand with morning sunlight",
    primaryCta: { text: "Explore Our Work", href: "/our-work" },
    secondaryCta: { text: "Become a Volunteer", href: "/get-involved" },
    badgeText: "Native Forestry & Sustainable Communities",
  },
  {
    id: 2,
    eyebrow: "CHILD PROTECTION & LITERACY",
    hindiTitle: "हर बच्चे को शिक्षा का अधिकार",
    title: "Educating Minds.",
    italicWord: "Igniting",
    titleEnd: "Brighter Futures.",
    description:
      "Active coordination with the Child Welfare Committee (CWC) to combat child vulnerability and distribute Shiksha Protsahan study kits, uniforms, and learning materials.",
    image: "/images/hero-education.jpg",
    alt: "Underprivileged children joyfully learning together outdoors",
    primaryCta: { text: "Child Welfare Programs", href: "/our-work#education" },
    secondaryCta: { text: "Support A Student", href: "/donate" },
    badgeText: "100+ Educational Kits Distributed",
  },
  {
    id: 3,
    eyebrow: "HEALTHCARE & GERIATRIC SUPPORT",
    hindiTitle: "हर जीवन में सम्मान, हर समाज में अवसर",
    title: "Dignity and Care for Our",
    italicWord: "Cherished",
    titleEnd: "Senior Citizens.",
    description:
      "Free medical checkups, vital health screenings, and supportive elder networks organized regularly across Borivali West and Mumbai suburbs.",
    image: "/images/senior-health.jpg",
    alt: "Doctor providing compassionate checkup to elderly citizen in health camp",
    primaryCta: { text: "Senior Health Initiatives", href: "/our-work#seniors" },
    secondaryCta: { text: "Request Medical Help", href: "/contact" },
    badgeText: "Free Health Camps in Borivali West",
  },
  {
    id: 4,
    eyebrow: "MIGRANT RIGHTS & CRISIS AID",
    hindiTitle: "एक ज़रूरत • एक प्रयास • एक बदलाव",
    title: "A Reliable Voice for",
    italicWord: "Dignified",
    titleEnd: "Migrant Labor.",
    description:
      "24/7 grassroots emergency helpline, medical intervention, legal redressal, and administrative coordination for dignified repatriation to native villages in Jharkhand.",
    image: "/images/community-assembly.jpg",
    alt: "Migrant worker community assembly discussing welfare in Mumbai",
    primaryCta: { text: "Emergency Support Protocol", href: "/contact" },
    secondaryCta: { text: "Learn Our Story", href: "/about" },
    badgeText: "24/7 Active Crisis Helpline: +91 90222 88222",
  },
  {
    id: 5,
    eyebrow: "20 YEARS OF SERVICE • SOUVENIR LAUNCH",
    hindiTitle: "अपना झारखंड — संस्कृति, एकता और सम्मान",
    title: "Celebrating Two Decades of",
    italicWord: "Cultural Pride",
    titleEnd: "& Diaspora Solidarity.",
    description:
      "Honoring Jharkhand's statehood in Mumbai with traditional Santhali dances, civil servant leadership, and the landmark release of 'अपना झारखंड' magazine.",
    image: "/images/events/magazine-launch-babulal-marandi-prahlad-modi.jpg",
    alt: "Release of Apna Jharkhand souvenir magazine by Babulal Marandi and Prahlad Modi",
    primaryCta: { text: "Explore Press & Media", href: "/events" },
    secondaryCta: { text: "Our Leadership Team", href: "/about" },
    badgeText: "Released by Hon'ble Dignitaries in Mumbai",
  },
  {
    id: 6,
    eyebrow: "PRAVASI SAMMELAN 2026 • VEER SAVARKAR UDYAN",
    hindiTitle: "प्रवासी झारखंडवासी भव्य मिलन समारोह",
    title: "Uniting Diaspora with Dignified",
    italicWord: "Institutional",
    titleEnd: "Representation.",
    description:
      "Historic Pravasi Sammelan convened in Borivali with Former MP Gopal Shetty, MLA Sanjay Upadhyay, youth leader Devendra Mahato, and Founder Arvind Arya presenting the migrant rights charter.",
    image: "/images/events/pravasi-sammelan-memorandum-presentation.jpg",
    alt: "Pravasi Jharkhandvasi Sammelan at Veer Savarkar Udyan Borivali with Gopal Shetty and Sanjay Upadhyay",
    primaryCta: { text: "View Event Chronicles", href: "/events" },
    secondaryCta: { text: "Our Leadership", href: "/about" },
    badgeText: "Welfare Charter & Keynote Address at Borivali",
  },
];

export default function HeroSlider() {
  const { content } = useSiteContent();
  const { language } = useLanguage();
  const slides = content.heroSlides && content.heroSlides.length > 0 ? content.heroSlides : fallbackSlides;

  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const getPrimaryCtaText = () => {
    if (language === "hi") {
      if (slides[current]?.primaryCta?.href === "/our-work") return "हमारे कार्य देखें";
      if (slides[current]?.primaryCta?.href === "/events") return "कार्यक्रम देखें";
      if (slides[current]?.primaryCta?.href === "/donate") return "सहयोग करें (दान)";
      if (slides[current]?.primaryCta?.href === "/nature") return "पर्यावरण अभियान";
      return "और जानें";
    }
    return slides[current]?.primaryCta?.text || "Explore";
  };

  const getSecondaryCtaText = () => {
    if (language === "hi") {
      if (slides[current]?.secondaryCta?.href === "/get-involved") return "स्वयंसेवक बनें";
      if (slides[current]?.secondaryCta?.href === "/about") return "हमारे बारे में";
      if (slides[current]?.secondaryCta?.href === "/contact") return "संपर्क करें";
      return "जुड़ें";
    }
    return slides[current]?.secondaryCta?.text || "Join Us";
  };

  // Safety check if slide index exceeds updated array length
  useEffect(() => {
    if (current >= slides.length) {
      setCurrent(0);
    }
  }, [slides.length, current]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full min-h-[620px] lg:min-h-[740px] flex items-center justify-center overflow-hidden bg-[#0A2419] text-white">
      {/* Background Images with Crossfade */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
          style={{ transitionProperty: "opacity, transform", transitionDuration: "1000ms" }}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={index === 0}
            className="object-cover object-center filter brightness-85"
            sizes="100vw"
          />
          {/* Rich cinematic dark gradient overlays (visible photo + high text contrast) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#05140D]/90 via-[#05140D]/65 to-[#05140D]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05140D] via-transparent to-black/50" />
        </div>
      ))}

      {/* Decorative Botanical Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6F8D58]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 sm:pt-40 pb-20 lg:pb-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Editorial Copy (7 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Eyebrow and Hindi Badge */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="badge-pill bg-[#B8CBA5]/20 text-[#B8CBA5] border border-[#B8CBA5]/30">
                <Sparkles className="w-3 h-3 text-[#E28723]" />
                {slides[current].eyebrow}
              </span>
              <span className="text-xs text-[#F7F5EC]/70 font-medium tracking-wide">
                • {slides[current].hindiTitle}
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-white max-w-3xl">
              {slides[current].title}{" "}
              <span className="italic text-[#B8CBA5] font-normal underline decoration-[#E28723]/60 decoration-2 underline-offset-8">
                {slides[current].italicWord}
              </span>{" "}
              {slides[current].titleEnd}
            </h1>

            {/* Supporting Statement */}
            <p className="text-sm sm:text-base lg:text-lg text-[#F7F5EC]/90 max-w-2xl leading-relaxed font-light">
              {slides[current].description}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href={slides[current].primaryCta.href}
                className="px-7 py-3.5 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs sm:text-sm font-bold tracking-wide shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 group"
              >
                <span>{getPrimaryCtaText()}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={slides[current].secondaryCta.href}
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F7F5EC] text-xs sm:text-sm font-semibold tracking-wide border border-white/25 backdrop-blur-sm transition-all"
              >
                {getSecondaryCtaText()}
              </Link>
            </div>
          </div>

          {/* Floating Initiative Spotlight Card (4 cols) */}
          <div className="lg:col-span-4 hidden lg:flex flex-col items-end">
            <div className="w-80 p-5 rounded-3xl bg-[#123B2A]/90 backdrop-blur-md border border-[#B8CBA5]/25 shadow-2xl text-white space-y-3">
              <div className="flex items-center justify-between text-xs text-[#B8CBA5]">
                <span className="font-semibold uppercase tracking-wider text-[10px]">
                  Verified Initiative
                </span>
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
              </div>
              <h4 className="font-serif text-lg font-medium leading-snug">
                {slides[current].badgeText}
              </h4>
              <p className="text-xs text-[#F7F5EC]/75 leading-relaxed font-light">
                Serving vulnerable workers, underprivileged children, and local families in Mumbai and rural Jharkhand.
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-[#B8CBA5] font-medium">Headquarters</span>
                <span className="text-white font-semibold">Borivali West, Mumbai</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Slider Navigation and Controls Bar */}
      <div className="absolute bottom-6 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Slide Counters and Progress Indicators */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#B8CBA5]">
              0{current + 1}
            </span>
            <div className="flex gap-1.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === current ? "w-8 bg-[#E28723]" : "w-3 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <span className="text-xs font-mono text-white/50">0{slides.length}</span>
          </div>

          {/* Navigation Controls: Prev, Next & Pause/Play */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10"
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              title={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={prevSlide}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
