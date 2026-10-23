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
    title: "Release of 'Apna Jharkhand' Magazine by Babulal Marandi & Prahlad Modi",
    category: "culture",
    categoryLabel: "Tribal Heritage & Magazine",
    image: "/images/events/magazine-launch-babulal-marandi-prahlad-modi.jpg",
    location: "Shivaji Mandir Hall, Dadar Mumbai",
    description: "Historic release of the official souvenir magazine by First CM Babulal Marandi, Adv. Ashish Shelar, Prahlad Modi, and Anup Jalota.",
  },
  {
    id: 2,
    title: "Dharti Aaba Birsa Munda Ratna Award Presentation",
    category: "community",
    categoryLabel: "State Honors",
    image: "/images/events/birsa-munda-award-prahlad-modi.jpg",
    location: "Mumbai Statehood Conclave",
    description: "Founder Arvind Arya honoring Chief Guest Shri Prahlad Damodardas Modi with the Dharti Aaba Birsa Munda Ratna Award and magazine.",
  },
  {
    id: 3,
    title: "Free Ophthalmology & Spectacles Distribution Camp",
    category: "healthcare",
    categoryLabel: "Healthcare & Elders",
    image: "/images/events/eye-camp-medical-checkup.jpg",
    location: "Dahisar & Borivali West, Mumbai",
    description: "Free eye checkups, diagnostic testing, and over 250 free prescription spectacles distributed to low-income seniors and migrant laborers.",
  },
  {
    id: 4,
    title: "Jharkhand Sthapna Diwas Mahotsav 2022 Stage Assembly",
    category: "culture",
    categoryLabel: "Cultural Commemoration",
    image: "/images/events/sthapna-diwas-stage-felicitation.jpg",
    location: "Kandivali Terapanth Bhavan Auditorium",
    description: "Grand cultural gathering honoring statehood with Santhali folk dances, civic honors, and community diaspora solidarity.",
  },
  {
    id: 5,
    title: "Leadership Delegation at Birsa Munda Chowk",
    category: "culture",
    categoryLabel: "Tribal Heritage",
    image: "/images/events/birsa-munda-chowk-mumbai.jpg",
    location: "Birsa Munda Chowk, Mumbai",
    description: "JPS leaders and organizers gathering at the iconic Birsa Munda Chowk memorial circle to pay homage to Dharti Aaba Bhagwan Birsa Munda.",
  },
  {
    id: 6,
    title: "Felicitation of Shri Prahlad Damodar Das Modi (Brother of PM Narendra Modi)",
    category: "community",
    categoryLabel: "Distinguished Dignitary",
    image: "/images/events/governor-radhakrishnan-meeting.jpg",
    location: "Dignitary Conclave, Mumbai",
    description: "Floral felicitation of Shri Prahlad Damodar Das Modi, brother of Hon'ble Prime Minister Narendra Damodar Das Modi, discussing social initiatives and migrant welfare.",
  },
  {
    id: 7,
    title: "Felicitation of Adv. Ashish Shelar (Mumbai BJP President)",
    category: "community",
    categoryLabel: "Civic Leadership",
    image: "/images/events/ashish-shelar-felicitation.jpg",
    location: "Mumbai Assembly Office",
    description: "Strengthening ties between Maharashtra and Jharkhand with senior leadership backing for migrant social security.",
  },
  {
    id: 8,
    title: "Founder Arvind Arya with First Chief Minister Babulal Marandi",
    category: "community",
    categoryLabel: "Leadership Conclave",
    image: "/images/events/babulal-marandi-meeting.jpg",
    location: "Ranchi / Mumbai",
    description: "Consultations on migrant welfare rights, tribal environmental preservation, and diaspora support networks.",
  },
  {
    id: 9,
    title: "Jharkhand Cultural & Architectural Heritage Panorama",
    category: "culture",
    categoryLabel: "Cultural Heritage",
    image: "/images/events/cultural-jharkhand-montage.jpg",
    location: "Statewide Jharkhand",
    description: "Rich cultural panorama of Jharkhand: Vidhan Sabha, Baidyanath Dham temple, JSCA stadium, Hundru falls, and traditional Santhali dancers.",
  },
  {
    id: 10,
    title: "Magazine Presentation to Greater Mumbai Police Officers",
    category: "community",
    categoryLabel: "Law & Protection",
    image: "/images/events/mumbai-police-presentation.jpg",
    location: "Greater Mumbai Police Headquarters",
    description: "Coordinating with police leadership for anti-trafficking vigilance and safety of migrant domestic workers.",
  },
  {
    id: 11,
    title: "Pravasi Jharkhandvasi Sammelan — Memorandum Presentation",
    category: "community",
    categoryLabel: "Pravasi Sammelan 2026",
    image: "/images/events/pravasi-sammelan-memorandum-presentation.jpg",
    location: "Veer Savarkar Udyan, Borivali (W), Mumbai",
    description: "Arvind Arya, MLA Sanjay Upadhyay, Former MP Gopal Shetty, and youth leader Devendra Mahato submitting the joint memorandum for migrant welfare.",
  },
  {
    id: 12,
    title: "Official Invitation: Pravasi Jharkhandvasi Bhavya Sammelan",
    category: "community",
    categoryLabel: "Official Conference Poster",
    image: "/images/events/pravasi-sammelan-borivali-poster.jpg",
    location: "Borivali West, Mumbai",
    description: "Official convening announcement featuring Chief Guest Gopal Shetty, MLA Sanjay Upadhyay, Devendra Mahato, and Founder Arvind Arya.",
  },
  {
    id: 13,
    title: "Keynote Address by MLA Sanjay Upadhyay at Veer Savarkar Udyan",
    category: "community",
    categoryLabel: "Keynote Address",
    image: "/images/events/pravasi-sammelan-mla-sanjay-upadhyay-speech.jpg",
    location: "Veer Savarkar Udyan, Borivali (W)",
    description: "Borivali MLA Shri Sanjay Upadhyay delivering the keynote address pledging institutional support for the migrant community.",
  },
  {
    id: 14,
    title: "Felicitation of Founder Arvind Arya with Sacred Angavastram",
    category: "community",
    categoryLabel: "Civic Felicitation",
    image: "/images/events/pravasi-sammelan-arvind-arya-felicitation.jpg",
    location: "Veer Savarkar Udyan, Mumbai",
    description: "Former MP Gopal Shetty and MLA Sanjay Upadhyay felicitating Arvind Arya with a floral bouquet and ceremonial 'श्री राम' stole.",
  },
  {
    id: 15,
    title: "JPS Executive Delegation at Chhatrapati Shivaji Maharaj Throne",
    category: "culture",
    categoryLabel: "Shivaji Maharaj Homage",
    image: "/images/events/shivaji-maharaj-throne-delegation.jpg",
    location: "Mumbai Memorial Circle",
    description: "JPS core office-bearers standing in tribute before the ornate golden throne statue of Chhatrapati Shivaji Maharaj.",
  },
  {
    id: 16,
    title: "Official Commemorative Frame: Dharti Aaba Bhagwan Birsa Munda",
    category: "culture",
    categoryLabel: "Bhagwan Birsa Munda Frame",
    image: "/images/events/birsa-munda-dharti-aaba-frame.jpg",
    location: "Statewide & Mumbai Distribution",
    description: "Official commemorative fine-art portrait 'धरती आबा बिरसा मुंडा' with JPS emblem and Founder Arvind Arya's dedication.",
  },
  {
    id: 17,
    title: "Birsa Munda Memorial Portrait Presentation to Dignitaries",
    category: "culture",
    categoryLabel: "Birsa Munda Presentation",
    image: "/images/events/birsa-munda-portrait-office-presentation.jpg",
    location: "Executive Offices, Mumbai",
    description: "Delegation led by Arvind Arya presenting the framed Birsa Munda memorial art to state leaders.",
  },
  {
    id: 18,
    title: "Pravasi Jharkhandvasi Bhavya Milan Stage Backdrop & Coordinates",
    category: "community",
    categoryLabel: "Official Stage Banner",
    image: "/images/events/pravasi-milan-samaroh-stage-banner.jpg",
    location: "Borivali Central Venue",
    description: "Official conference banner detailing registered Borivali headquarters, Giridih branch office, and leadership committee.",
  },
  {
    id: 19,
    title: "Shiksha Protsahan Child Literacy Outreach",
    category: "education",
    categoryLabel: "Child Education",
    image: "/images/hero-education.jpg",
    location: "Rural & Suburban Learning Circles",
    description: "Distribution of school bags, notebooks, and writing materials in active partnership with Child Welfare Committees (CWC).",
  },
  {
    id: 20,
    title: "Lush Forest Canopy & Watershed Ecosystem",
    category: "nature",
    categoryLabel: "Nature & Ecology",
    image: "/images/hero-forest.jpg",
    location: "Netarhat Plateau, Jharkhand",
    description: "Ancient Sal and Mahua trees preserving groundwater, biodiversity, and clean air for native communities.",
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
