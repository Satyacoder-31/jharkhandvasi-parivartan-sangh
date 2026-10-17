"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Palette,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Tag,
  ArrowRight,
  Info,
  Send,
  X,
  Phone,
  Sparkles,
} from "lucide-react";

interface Artwork {
  id: number;
  title: string;
  hindiTitle: string;
  category: "sohrai" | "portrait" | "nature" | "folk";
  categoryLabel: string;
  medium: string;
  dimensions: string;
  artist: string;
  suggestedDonation: number;
  image: string;
  description: string;
  impact: string;
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Tree of Life & Forest Wildlife (Sohrai Masterpiece)",
    hindiTitle: "पारंपरिक सोहराय एवं कोहबर लोक कला",
    category: "sohrai",
    categoryLabel: "Traditional Sohrai Art",
    medium: "Natural Earth Pigments on Primed Textured Canvas",
    dimensions: '36" × 28" (Framed / Unframed on request)',
    artist: "Tribal Women Artisan Collective, Hazaribagh / Jharkhand",
    suggestedDonation: 4500,
    image: "/images/art-sohrai.jpg",
    description:
      "Intricate handmade Sohrai mural depicting the sacred Kalpavriksha (Tree of Life), peacocks, horned deer, and indigenous village motifs painted using natural ochre and earth pigments.",
    impact:
      "100% of this contribution funds complete Shiksha Protsahan study kits (notebooks, bags, uniforms) for 9 underprivileged school children.",
  },
  {
    id: 2,
    title: "Official Commemorative Frame: Dharti Aaba Bhagwan Birsa Munda",
    hindiTitle: "धरती आबा भगवान बिरसा मुंडा स्मृति कलाकृति",
    category: "portrait",
    categoryLabel: "Official Commemorative Art",
    medium: "Official JPS Archival Fine Art Print with Gold Frame Mount",
    dimensions: '24" × 34" Custom Framed Commemorative Display',
    artist: "Commissioned by Arvind Arya, Jharkhandvasi Parivartan Sangh",
    suggestedDonation: 5100,
    image: "/images/commemorative/birsa-munda-dharti-aaba-portrait.jpg",
    description:
      "The official commemorative portrait of Bhagwan Birsa Munda bearing the JPS insignia and 'एक जुर्रत... एक ज़रूरत' motto, depicting Dharti Aaba holding his sacred bow with courage and freedom pride. Presented to state dignitaries and community patrons.",
    impact:
      "Sponsors free diagnostic eye screenings and prescription spectacles distribution for 35 low-income elders and migrant workers in Mumbai.",
  },
  {
    id: 3,
    title: "Sarhul Spring Flower Celebration",
    hindiTitle: "सरहुल लोक नृत्य एवं समुदाय उत्सव",
    category: "folk",
    categoryLabel: "Tribal Folk Art",
    medium: "Traditional Tempera on Handmade Herbal Paper",
    dimensions: '32" × 24" Custom Mount',
    artist: "Rural Folk Artisan Fellowship",
    suggestedDonation: 3800,
    image: "/images/art-sarhul.jpg",
    description:
      "Joyful community celebration under flowering Sal trees honoring Mother Earth for the Sarhul festival, depicting unity, tribal drumming, and spring renewal.",
    impact:
      "Provides emergency dry ration kits (flour, rice, dal, oil) for 2 distressed migrant worker families facing sudden crisis in Mumbai.",
  },
  {
    id: 4,
    title: "Netarhat Mist & Sal Forest River Valley",
    hindiTitle: "नेतरहाट साल वन एवं प्राकृतिक नदी",
    category: "nature",
    categoryLabel: "Nature Fine Art",
    medium: "Fine Art Watercolor & Acrylic on Heavy Canvas",
    dimensions: '28" × 22" Gallery Wrap',
    artist: "Volunteer Fine Arts Guild",
    suggestedDonation: 2800,
    image: "/images/art-forest.jpg",
    description:
      "Serene sunrise landscape capturing morning sunbeams penetrating the ancient Sal forest canopy with a clear mountain stream flowing over red rock banks.",
    impact:
      "Funds community tree sapling nurseries, soil preparation, and planting care for 25 native Sal and Mahua trees in degraded lands.",
  },
];

export default function ArtStorePage() {
  const [selectedArt, setSelectedArt] = useState<Artwork | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [buyerName, setBuyerName] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [buyerCity, setBuyerCity] = useState("");
  const [buyerAddress, setBuyerAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderRef, setOrderRef] = useState("");

  const filteredArt =
    selectedCategory === "all"
      ? artworks
      : artworks.filter((item) => item.category === selectedCategory);

  const handleAcquireSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerName.trim() || !buyerPhone.trim()) {
      alert("Please provide your name and contact phone number.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderComplete(true);
      setOrderRef(`JPS-ART-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1000);
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. CINEMATIC HERO WITH ATMOSPHERIC BACKGROUND IMAGE */}
      <section className="relative bg-[#071F14] text-white pt-32 sm:pt-40 pb-20 lg:pb-28 overflow-hidden">
        <Image
          src="/images/art-sohrai.jpg"
          alt="Traditional tribal art painting"
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071F14] via-[#071F14]/70 to-black/40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="badge-pill bg-[#B8CBA5]/20 text-[#B8CBA5] border border-[#B8CBA5]/30">
              <Palette className="w-3.5 h-3.5 text-[#E28723]" />
              कला से सेवा • Art For Social Impact
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              Portraits & Tribal Paintings <span className="italic text-[#B8CBA5]">for Charity</span>
            </h1>
            <p className="text-sm sm:text-base text-[#F7F5EC]/85 font-light leading-relaxed">
              Acquire authentic handmade tribal Sohrai murals, historical portraits of Bhagwan Birsa Munda, and nature paintings. 100% of proceeds directly fund our migrant worker emergency aid, free healthcare camps, and child education kits.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CHARITY ART STORE NOTICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#F7F5EC] rounded-3xl p-6 sm:p-8 border border-[#123B2A]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E28723]">
              How the Charity Art Store Works
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#123B2A]">
              Original Artworks with a Humanitarian Purpose
            </h3>
            <p className="text-xs text-[#17231C]/75 font-light leading-relaxed">
              Every piece in this catalog is donated by community folk artisans and youth volunteers to support Jharkhandvasi Parivartan Sangh. When you acquire an artwork, your donation receipt is generated, and our Borivali West office coordinates safe courier delivery to your doorstep.
            </p>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-[#123B2A]/10 text-center flex-shrink-0">
            <span className="font-serif text-2xl font-bold text-[#1D5139] block">100%</span>
            <span className="text-[11px] text-[#795943]">Direct Welfare Impact</span>
          </div>
        </div>
      </section>

      {/* 3. CATEGORY FILTERS & ART CATALOG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#123B2A]/10">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#123B2A]">
              Available Artworks & Paintings
            </h2>
            <p className="text-xs text-[#795943] mt-0.5">
              Select any piece to inspect details, dimensions, and register your acquisition pledge.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {[
              { key: "all", label: "All Artworks" },
              { key: "sohrai", label: "Sohrai Folk Art" },
              { key: "portrait", label: "Portraits" },
              { key: "folk", label: "Cultural Celebrations" },
              { key: "nature", label: "Nature Paintings" },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setSelectedCategory(f.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === f.key
                    ? "bg-[#123B2A] text-white shadow-sm"
                    : "bg-[#F7F5EC] text-[#17231C]/80 hover:bg-[#6F8D58]/15 border border-[#123B2A]/10"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Artworks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredArt.map((art) => (
            <div
              key={art.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#123B2A]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Artwork Image Container */}
                <div
                  onClick={() => setSelectedArt(art)}
                  className="relative h-64 w-full bg-[#123B2A] overflow-hidden cursor-pointer"
                >
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="badge-pill bg-[#123B2A]/85 text-[#B8CBA5] backdrop-blur-sm text-[10px]">
                      {art.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-[11px] text-[#795943] font-medium block">
                      {art.hindiTitle}
                    </span>
                    <h3 className="font-serif text-lg font-normal text-[#123B2A] group-hover:text-[#1D5139] transition-colors leading-snug">
                      {art.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#17231C]/75 font-light line-clamp-2">
                    {art.description}
                  </p>

                  <div className="p-3 rounded-xl bg-[#E9F0E4] border border-[#6F8D58]/20 text-[11px] text-[#123B2A] leading-relaxed">
                    <strong className="block text-[#1D5139]">Welfare Impact:</strong>
                    {art.impact}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-[#123B2A]/10 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#795943] font-semibold block">
                    Charity Donation
                  </span>
                  <span className="font-serif text-lg font-bold text-[#123B2A]">
                    ₹{art.suggestedDonation.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => {
                    setSelectedArt(art);
                    setOrderComplete(false);
                  }}
                  className="px-4 py-2 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold shadow transition-all flex items-center gap-1"
                >
                  <span>Acquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MODAL FOR ARTWORK ACQUISITION PLEDGE */}
      {selectedArt && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#123B2A]/20 flex flex-col md:flex-row max-h-[90vh] overflow-y-auto animate-fade-in relative">
            <button
              onClick={() => setSelectedArt(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white z-10 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Artwork Preview */}
            <div className="md:w-1/2 relative min-h-[300px] md:min-h-full bg-[#123B2A]">
              <Image
                src={selectedArt.image}
                alt={selectedArt.title}
                fill
                className="object-contain p-2"
              />
            </div>

            {/* Right: Details & Acquisition Form */}
            <div className="md:w-1/2 p-6 sm:p-8 space-y-5">
              <div>
                <span className="badge-pill bg-[#E9F0E4] text-[#1D5139] text-[10px] mb-2">
                  {selectedArt.categoryLabel}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#123B2A]">
                  {selectedArt.title}
                </h3>
                <span className="font-serif text-xl font-bold text-[#E28723] block mt-1">
                  ₹{selectedArt.suggestedDonation.toLocaleString()} Donation
                </span>
              </div>

              <div className="text-xs text-[#17231C]/80 space-y-1 font-light border-y border-[#123B2A]/10 py-3">
                <p><strong>Medium:</strong> {selectedArt.medium}</p>
                <p><strong>Dimensions:</strong> {selectedArt.dimensions}</p>
                <p><strong>Artisan:</strong> {selectedArt.artist}</p>
              </div>

              {orderComplete ? (
                <div className="p-5 rounded-2xl bg-[#E9F0E4] border border-[#6F8D58]/30 text-center space-y-2 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-[#1D5139] mx-auto" />
                  <h4 className="font-serif text-base font-bold text-[#123B2A]">
                    Acquisition Pledge Registered!
                  </h4>
                  <p className="text-xs text-[#17231C]/80">
                    Thank you, <strong>{buyerName}</strong>. Your reference token is <strong>{orderRef}</strong>.
                  </p>
                  <p className="text-[11px] text-[#795943]">
                    Our Borivali West office will call or WhatsApp you at <strong>{buyerPhone}</strong> to confirm packaging, shipping address, and verified donation coordinates.
                  </p>
                  <button
                    onClick={() => setSelectedArt(null)}
                    className="mt-2 text-xs font-bold text-[#1D5139] underline"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleAcquireSubmit} className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#123B2A]">
                    Acquisition & Delivery Details:
                  </h4>
                  <input
                    type="text"
                    placeholder="Your Full Name *"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    required
                    className="w-full px-3.5 py-2 rounded-xl border border-[#123B2A]/20 bg-[#FDFCF9] text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile / WhatsApp Number *"
                    value={buyerPhone}
                    onChange={(e) => setBuyerPhone(e.target.value)}
                    required
                    className="w-full px-3.5 py-2 rounded-xl border border-[#123B2A]/20 bg-[#FDFCF9] text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="City / Delivery Destination (e.g. Mumbai, Delhi, Ranchi)"
                    value={buyerCity}
                    onChange={(e) => setBuyerCity(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#123B2A]/20 bg-[#FDFCF9] text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-full bg-[#123B2A] hover:bg-[#1D5139] text-white text-xs font-bold shadow flex items-center justify-center gap-2"
                  >
                    <Heart className="w-4 h-4 text-[#E28723] fill-[#E28723]" />
                    <span>
                      {isSubmitting
                        ? "Registering Pledge..."
                        : `Pledge ₹${selectedArt.suggestedDonation.toLocaleString()} & Acquire`}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 5. ARTIST SUBMISSION CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#1D5139] text-white rounded-3xl p-8 sm:p-12 border border-[#B8CBA5]/25 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#B8CBA5] font-bold">
              Artists For Social Justice
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal">
              Are You an Artist Wishing to Donate Your Work?
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F5EC]/80 font-light leading-relaxed">
              We welcome folk artists, portrait painters, and photographers to contribute artworks to JPS. 100% of acquisition proceeds are allocated to community welfare and rural artisans.
            </p>
          </div>

          <a
            href="tel:+919022288222"
            className="px-6 py-3 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold tracking-wide shadow transition-all flex items-center gap-2 flex-shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Call Desk: +91 90222 88222</span>
          </a>
        </div>
      </section>
    </div>
  );
}
