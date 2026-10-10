"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Eye, Tag } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: "community" | "healthcare" | "education" | "nature" | "culture" | "women";
  categoryLabel: string;
  image: string;
  location: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Migrant Community Assembly & Welfare Discussion",
    category: "community",
    categoryLabel: "Community Welfare",
    image: "/images/community-assembly.jpg",
    location: "Mumbai",
    description: "Migrant laborers and social organizers gathering to discuss legal redressal, medical aid, and crisis emergency protocols.",
  },
  {
    id: 2,
    title: "Lush Forest Canopy & Watershed Ecosystem",
    category: "nature",
    categoryLabel: "Nature & Ecology",
    image: "/images/hero-forest.jpg",
    location: "Jharkhand",
    description: "Ancient Sal and Mahua trees preserving groundwater, biodiversity, and clean air for native communities.",
  },
  {
    id: 3,
    title: "Senior Citizen Free Medical & Diagnostic Camp",
    category: "healthcare",
    categoryLabel: "Elder Care",
    image: "/images/senior-health.jpg",
    location: "Borivali West, Mumbai",
    description: "Doctor and nursing staff providing free vitals testing, blood pressure checks, and doctor consultations for elderly residents.",
  },
  {
    id: 4,
    title: "Shiksha Protsahan Child Literacy Outreach",
    category: "education",
    categoryLabel: "Child Education",
    image: "/images/hero-education.jpg",
    location: "Rural Learning Circle",
    description: "Encouraging school attendance through notebook distributions, school bags, and compassionate foundational teaching.",
  },
  {
    id: 5,
    title: "Community Native Tree Planting Initiative",
    category: "nature",
    categoryLabel: "Nature & Ecology",
    image: "/images/tree-planting.jpg",
    location: "Jharkhand Watershed",
    description: "Youth volunteers and community elders planting native Sal and Neem saplings for sustainable environmental health.",
  },
  {
    id: 6,
    title: "Bhagwan Birsa Munda Smruti Sohala Tribute",
    category: "culture",
    categoryLabel: "Tribal Heritage",
    image: "/images/cultural-birsa.jpg",
    location: "Mumbai Community Hall",
    description: "Honoring the immortal legacy of revolutionary tribal freedom fighter Bhagwan Birsa Munda with floral garlands and community songs.",
  },
  {
    id: 7,
    title: "Women Self-Help Group & Relief Distribution",
    category: "women",
    categoryLabel: "Women Welfare",
    image: "/images/women-empowerment.jpg",
    location: "Suburban Mumbai",
    description: "Support kits, tailoring skill books, and emergency dry rations provided to single mothers and distressed migrant women.",
  },
  {
    id: 8,
    title: "Pristine Forest River & Catchment Stream",
    category: "nature",
    categoryLabel: "Nature & Ecology",
    image: "/images/watershed-nature.jpg",
    location: "Netarhat Plateau",
    description: "Clean freshwater streams flowing through rocky red soil and dense forest cover, highlighting the need for watershed conservation.",
  },
  {
    id: 9,
    title: "Grassroots Volunteer Solidarity Network",
    category: "community",
    categoryLabel: "Community Welfare",
    image: "/images/volunteer-hands.jpg",
    location: "Field Team, Mumbai",
    description: "Dedicated social workers and youth joining hands in community service, embodying the spirit of 'सेवा से परिवर्तन की ओर'.",
  },
];

export default function GalleryLightbox() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    { key: "all", label: "All Chronicles" },
    { key: "nature", label: "Nature & Ecology" },
    { key: "community", label: "Migrant & Community" },
    { key: "healthcare", label: "Healthcare & Elders" },
    { key: "education", label: "Child Education" },
    { key: "culture", label: "Tribal Heritage" },
    { key: "women", label: "Women & Family" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => ((prev! - 1 + filteredItems.length) % filteredItems.length));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {filters.map((f) => {
          const isActive = activeFilter === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                isActive
                  ? "bg-[#123B2A] text-white shadow-sm"
                  : "bg-[#F7F5EC] text-[#17231C]/80 hover:bg-[#6F8D58]/15 border border-[#123B2A]/10"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setLightboxIndex(index)}
            className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-[#123B2A]/10 bg-[#123B2A]"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Ambient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#123B2A] via-[#123B2A]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Top Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="badge-pill bg-[#123B2A]/80 backdrop-blur-sm text-[#B8CBA5] border border-white/20 text-[10px]">
                {item.categoryLabel}
              </span>
            </div>

            {/* Bottom Caption */}
            <div className="absolute bottom-4 left-4 right-4 z-10 text-white space-y-1">
              <span className="text-[11px] text-[#B8CBA5] font-medium block">
                📍 {item.location}
              </span>
              <h4 className="font-serif text-base font-normal leading-snug line-clamp-2">
                {item.title}
              </h4>
              <p className="text-xs text-[#F7F5EC]/70 line-clamp-2 font-light pt-1">
                {item.description}
              </p>
            </div>

            {/* Eye Icon Hover Prompt */}
            <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white">
              <Eye className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={() =>
              setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length)
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 hidden sm:block"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() =>
              setLightboxIndex((prev) => (prev! + 1) % filteredItems.length)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 hidden sm:block"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Center Card */}
          <div className="max-w-4xl w-full bg-[#123B2A] rounded-3xl overflow-hidden border border-[#B8CBA5]/20 shadow-2xl text-white">
            <div className="relative w-full h-[360px] sm:h-[500px]">
              <Image
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                fill
                className="object-contain bg-black/40"
                priority
              />
            </div>
            <div className="p-6 bg-[#0A2419] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#E28723] font-semibold">
                  {filteredItems[lightboxIndex].categoryLabel} • {filteredItems[lightboxIndex].location}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-normal text-white mt-1">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-xs text-[#F7F5EC]/75 font-light mt-1 max-w-xl">
                  {filteredItems[lightboxIndex].description}
                </p>
              </div>
              <span className="text-xs font-mono text-[#B8CBA5] flex-shrink-0">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
