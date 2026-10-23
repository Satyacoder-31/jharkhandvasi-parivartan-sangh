"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Eye, Tag, ChevronDown, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export interface GalleryItem {
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
    title: "Felicitation of Sanjay Upadhyay (MLA, Borivali Mumbai)",
    category: "community",
    categoryLabel: "Legislative Leadership",
    image: "/images/events/ashish-shelar-felicitation.jpg",
    location: "Borivali, Mumbai",
    description: "Presenting 'Apna Jharkhand' souvenir magazine and coordinating migrant social security with Borivali MLA Shri Sanjay Upadhyay.",
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
  {
    id: 21,
    title: "Official Bank of India (BOI) UPI Scan & Pay QR",
    category: "community",
    categoryLabel: "Official Donation Channel",
    image: "/images/gallery/jps-official-bank-of-india-upi-qr.jpg",
    location: "BOI Charkop Branch / Mumbai Headquarters",
    description: "Official Bank of India Unified Payments Interface (UPI) QR code for direct public contributions and 80G donations.",
  },
  {
    id: 22,
    title: "Jharkhand Sthapna Diwas 25th Silver Jubilee Commemoration",
    category: "culture",
    categoryLabel: "Silver Jubilee Mahotsav",
    image: "/images/gallery/jharkhand-25-years-silver-jubilee-commemoration.jpg",
    location: "Mumbai & Statewide",
    description: "Official commemorative tribute celebrating 25 years of Jharkhand statehood and the enduring legacy of Dharti Aaba Bhagwan Birsa Munda.",
  },
  {
    id: 23,
    title: "Humanitarian Migrant Repatriation & Emergency Aid",
    category: "community",
    categoryLabel: "Migrant Emergency Relief",
    image: "/images/gallery/emergency-migrant-ambulance-repatriation-service.jpg",
    location: "Mumbai to Giridih, Jharkhand",
    description: "Emergency ambulance arrangement and compassionate repatriation support provided by JPS team for the bereaved family of deceased worker Janki Saw.",
  },
  {
    id: 24,
    title: "Felicitation of Distinguished Social & Civic Dignitary",
    category: "community",
    categoryLabel: "Dignitary Felicitation",
    image: "/images/gallery/distinguished-patron-floral-felicitation.jpg",
    location: "Civic Secretariat, Mumbai",
    description: "Founder Arvind Arya honoring esteemed patron with ceremonial shawl and floral bouquet in support of grassroots outreach.",
  },
  {
    id: 25,
    title: "150th Birsa Munda Jayanti & 25th Statehood Day Assembly",
    category: "culture",
    categoryLabel: "Statehood & Jayanti Conclave",
    image: "/images/gallery/birsa-munda-150-jayanti-sthapna-diwas-assembly.jpg",
    location: "Central Mumbai Auditorium",
    description: "Grand convening of JPS core executive leadership commemorating the 150th birth anniversary of Bhagwan Birsa Munda and 25 years of Jharkhand.",
  },
  {
    id: 26,
    title: "Chhath Mahaparv Mahotsav — Surya Dev Arghya Assembly",
    category: "culture",
    categoryLabel: "Traditional Mahaparv",
    image: "/images/gallery/chhath-puja-mahotsav-blessings-poster.jpg",
    location: "Mumbai Coastal Ghats & Charkop",
    description: "Official community greetings and executive committee arrangements for the pious Chhath Puja celebrations across Mumbai.",
  },
  {
    id: 27,
    title: "Arvind Arya in Dialogue with Smt. Amruta Fadnavis",
    category: "community",
    categoryLabel: "Civic Leadership Conclave",
    image: "/images/gallery/arvind-arya-amruta-fadnavis-civic-meeting.jpg",
    location: "Mumbai Cultural Conclave",
    description: "Founder Arvind Arya interacting with Smt. Amruta Fadnavis, discussing community development and social assistance networks.",
  },
  {
    id: 28,
    title: "JPS Executive Delegation at Civic Leadership Gathering",
    category: "community",
    categoryLabel: "Inter-State Collaboration",
    image: "/images/gallery/civic-delegation-statehood-conclave.jpg",
    location: "Maharashtra Assembly Precincts",
    description: "Executive committee members engaging with state dignitaries to advance migrant protections and social security.",
  },
  {
    id: 29,
    title: "Statehood Honors & Cultural Recognition Ceremony",
    category: "culture",
    categoryLabel: "Tribal Cultural Honors",
    image: "/images/gallery/jharkhand-cultural-stage-award-ceremony-1.jpg",
    location: "Main Auditorium Stage, Mumbai",
    description: "Felicitation of grassroots cultural ambassadors, artists, and community patrons during the annual foundation festival.",
  },
  {
    id: 30,
    title: "Diaspora Foundation Ceremony — Stage Welcome",
    category: "community",
    categoryLabel: "Diaspora Conclave",
    image: "/images/gallery/diaspora-samaroh-stage-welcome-dignitaries.jpg",
    location: "Mumbai Cultural Hall",
    description: "Warm ceremonial welcome to community elders and social workers advocating for Jharkhand migrant welfare.",
  },
  {
    id: 31,
    title: "Presentation of Traditional Shawl and Award of Honor",
    category: "culture",
    categoryLabel: "Statehood Honors",
    image: "/images/gallery/tribal-heritage-honorary-shawl-presentation.jpg",
    location: "Auditorium Stage",
    description: "Honoring senior diaspora leaders with traditional ceremonial stole and certificate of excellence for two decades of selfless service.",
  },
  {
    id: 32,
    title: "Core Organizers & Youth Wing Conclave Assembly",
    category: "community",
    categoryLabel: "Youth Leadership",
    image: "/images/gallery/community-organizers-stage-assembly.jpg",
    location: "Mumbai Conclave Stage",
    description: "JPS youth coordinators and organizing committee members taking pledge for united community service and social reform.",
  },
  {
    id: 33,
    title: "Annual Social Excellence Memento Presentation",
    category: "community",
    categoryLabel: "Excellence Awards",
    image: "/images/gallery/annual-awards-dignitary-memento-presentation.jpg",
    location: "Grand Conclave Stage",
    description: "Distinguished guests conferring prestigious mementos and tokens of appreciation upon frontline community champions.",
  },
  {
    id: 34,
    title: "Jharkhand Sthapna Diwas Stage Gathering",
    category: "culture",
    categoryLabel: "Cultural Commemoration",
    image: "/images/gallery/jharkhand-foundation-day-stage-conclave.jpg",
    location: "Auditorium Stage, Mumbai",
    description: "Grand assembly of diaspora delegates representing all 24 districts of Jharkhand at the annual commemorative conclave.",
  },
  {
    id: 35,
    title: "Felicitation with Commemorative Medal & Certificate",
    category: "community",
    categoryLabel: "Public Recognition",
    image: "/images/gallery/community-service-medal-presentation.jpg",
    location: "Stage Auditorium",
    description: "Distinguished patrons presenting official commemorative medals for tireless contributions to community health and education.",
  },
  {
    id: 36,
    title: "Grand Cultural Felicitation & Community Dialogue",
    category: "culture",
    categoryLabel: "Cultural Heritage",
    image: "/images/gallery/cultural-commemoration-felicitation-ceremony.jpg",
    location: "Mumbai Auditorium",
    description: "Celebration of rich tribal arts, folk music, and linguistic unity bringing together migrants and urban communities.",
  },
  {
    id: 37,
    title: "Traditional Santhali Folk Dance & Music Recital",
    category: "culture",
    categoryLabel: "Folk Dance & Music",
    image: "/images/gallery/traditional-santhali-dance-performance-stage.jpg",
    location: "Main Cultural Amphitheater",
    description: "Vibrant performance by indigenous artists in authentic tribal attire, celebrating the agrarian rhythms and folklore of Jharkhand.",
  },
  {
    id: 38,
    title: "Indigenous Folk Ensemble in Traditional Attire",
    category: "culture",
    categoryLabel: "Tribal Arts & Performance",
    image: "/images/gallery/tribal-cultural-ensemble-artists-stage.jpg",
    location: "Cultural Festival Stage",
    description: "Artists performing the time-honored Jhumar and Paika dance rituals with traditional Mandar, Nagara, and Dholak instruments.",
  },
  {
    id: 39,
    title: "Santhal Folk Troupe Heritage Showcase",
    category: "culture",
    categoryLabel: "Indigenous Heritage",
    image: "/images/gallery/tribal-folk-troupe-celebration-recital.jpg",
    location: "Annual Statehood Mahotsav Stage",
    description: "Showcasing the living heritage of Jharkhand through synchronized tribal dance formations and ancestral songs.",
  },
  {
    id: 40,
    title: "Traditional Mandar & Nagara Percussion Ensemble",
    category: "culture",
    categoryLabel: "Tribal Music",
    image: "/images/gallery/folk-artists-traditional-musical-instruments.jpg",
    location: "Mahotsav Stage",
    description: "Master drummers playing rhythmic Mandar and Bansuri melodies celebrating the harvest and nature spirits.",
  },
  {
    id: 41,
    title: "Youth Wing Planning & Community Action Meeting",
    category: "education",
    categoryLabel: "Youth Empowerment",
    image: "/images/gallery/youth-organizers-memorial-assembly.jpg",
    location: "JPS Coordination Centre",
    description: "Strategic planning circle for student scholarships, competitive exam coaching camps, and community library setup.",
  },
  {
    id: 42,
    title: "Mahila Shakti & Self-Help Group Leadership Conclave",
    category: "women",
    categoryLabel: "Women Empowerment",
    image: "/images/gallery/women-empowerment-shg-community-conclave.jpg",
    location: "Community Center, Borivali",
    description: "Empowering migrant women and artisans with financial literacy, traditional handicraft marketing, and legal counseling.",
  },
  {
    id: 43,
    title: "Grassroots Mahila Samiti Welfare Assembly",
    category: "women",
    categoryLabel: "Women Self-Help",
    image: "/images/gallery/grassroots-mahila-samiti-welfare-gathering.jpg",
    location: "Borivali Community Hall",
    description: "Active discussion on nutritional welfare for mothers, girl-child education grants, and family medical assistance.",
  },
  {
    id: 44,
    title: "Senior Citizens & Migrant Health Diagnostic Camp",
    category: "healthcare",
    categoryLabel: "Free Health Camp",
    image: "/images/gallery/free-health-diagnostic-camp-elders-checkup.jpg",
    location: "Community Medical Centre, Mumbai",
    description: "Voluntary doctors conducting free blood sugar, hypertension, and general health diagnostics for underprivileged families.",
  },
  {
    id: 45,
    title: "Preventive Health Screening & Medicine Distribution",
    category: "healthcare",
    categoryLabel: "Preventive Healthcare",
    image: "/images/gallery/community-medical-checkup-blood-pressure-screening.jpg",
    location: "Mumbai Suburban Ward",
    description: "Qualified medical practitioners providing free consultations, vitals screening, and essential medicines to daily-wage workers.",
  },
  {
    id: 46,
    title: "Doctor Consultation for Migrant Labor Families",
    category: "healthcare",
    categoryLabel: "Family Medical Aid",
    image: "/images/gallery/doctor-consultation-migrant-labor-family-camp.jpg",
    location: "Slum Cluster Medical Outpost",
    description: "Free pediatric and maternal healthcare consultations with follow-up referrals at major civil hospitals.",
  },
  {
    id: 47,
    title: "Book Distribution & Child Literacy Outreach Camp",
    category: "education",
    categoryLabel: "Child Education",
    image: "/images/gallery/educational-scholarship-book-distribution-camp.jpg",
    location: "Primary Learning Centre, Borivali",
    description: "Supplying free school textbooks, exercise notebooks, and stationery kits to children of construction workers and migrants.",
  },
  {
    id: 48,
    title: "Student Felicitation for Academic Achievement",
    category: "education",
    categoryLabel: "Scholarship Honors",
    image: "/images/gallery/student-felicitation-academic-excellence.jpg",
    location: "Auditorium Hall",
    description: "Rewarding high-achieving 10th and 12th board students from low-income families with merit scholarships and career mentorship.",
  },
  {
    id: 49,
    title: "Community Library & Reading Circle Initiative",
    category: "education",
    categoryLabel: "Community Library",
    image: "/images/gallery/community-library-initiative-reading-circle.jpg",
    location: "Suburban Reading Room",
    description: "Inauguration of community study rooms equipped with competitive exam guides, computers, and tribal history literature.",
  },
  {
    id: 50,
    title: "Youth Volunteer Brigade Relief Distribution",
    category: "community",
    categoryLabel: "Disaster & Relief Aid",
    image: "/images/gallery/youth-volunteers-relief-material-dispatch.jpg",
    location: "JPS Emergency Hub",
    description: "Mobilizing essential ration kits, hygiene supplies, and emergency warm blankets during monsoon flooding.",
  },
  {
    id: 51,
    title: "Jal Jungle Zameen — Environmental Stewardship Rally",
    category: "nature",
    categoryLabel: "Nature & Forest Rights",
    image: "/images/gallery/jal-jungle-zameen-environmental-rally.jpg",
    location: "Public Park & Memorial Circle",
    description: "Raising public consciousness on sacred grove preservation, afforestation drives, and protecting Jharkhand natural biodiversity.",
  },
  {
    id: 52,
    title: "Tree Plantation & Urban Green Canopy Campaign",
    category: "nature",
    categoryLabel: "Afforestation Drive",
    image: "/images/gallery/tree-plantation-green-earth-campaign.jpg",
    location: "Gorai Nature Belt, Borivali",
    description: "Planting indigenous saplings (Neem, Peepal, Sal) to commemorate World Environment Day and combat urban heat islands.",
  },
  {
    id: 53,
    title: "Tribal Ethno-botany & Herbal Medicine Workshop",
    category: "nature",
    categoryLabel: "Traditional Ecology",
    image: "/images/gallery/indigenous-herbal-medicinal-plant-awareness.jpg",
    location: "Ecology Exhibition Pavilion",
    description: "Documenting and safeguarding traditional Adivasi knowledge of medicinal forest flora and sustainable herbal remedies.",
  },
  {
    id: 54,
    title: "Pravasi Milan Samaroh — Grand Stage with Dignitaries",
    category: "community",
    categoryLabel: "Grand Stage Assembly",
    image: "/images/gallery/pravasi-samaroh-grand-stage-dignitaries.jpg",
    location: "Veer Savarkar Udyan, Mumbai",
    description: "Public convening on migrant identity and rights, attended by thousands of diaspora members, lawmakers, and community elders.",
  },
  {
    id: 55,
    title: "Felicitation of Founding Veterans & Diaspora Elders",
    category: "community",
    categoryLabel: "Elder Honors",
    image: "/images/gallery/community-elders-felicitation-ceremony.jpg",
    location: "Auditorium Dais",
    description: "Honoring senior community stalwarts who nurtured the Sangh since its inception in 2005 with lifelong dedication.",
  },
  {
    id: 56,
    title: "Presentation of Migrant Rights & Social Security Charter",
    category: "community",
    categoryLabel: "Policy Advocacy",
    image: "/images/gallery/keynote-speech-migrant-rights-charter.jpg",
    location: "Borivali Conference Dais",
    description: "Articulating actionable state-level policies for inter-state migrant health insurance, legal helpline, and worker registration.",
  },
  {
    id: 57,
    title: "Vibrant Public Audience & Community Gathering",
    category: "community",
    categoryLabel: "Public Assembly",
    image: "/images/gallery/public-gathering-civic-solidarity.jpg",
    location: "Open-Air Amphitheater, Mumbai",
    description: "Families, youth, and workers assembled in solidarity, celebrating the cultural pride and socio-economic progress of Jharkhandis.",
  },
  {
    id: 58,
    title: "Concluding Ceremony — Unity Anthem & Community Pledge",
    category: "culture",
    categoryLabel: "Solidarity Pledge",
    image: "/images/gallery/concluding-anthem-solidarity-pledge.jpg",
    location: "Main Dais, Mumbai",
    description: "Delegates and attendees standing united for the state song, reaffirming commitment to unity, education, and cultural pride.",
  },
];

export default function GalleryLightbox() {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const filters = [
    { key: "all", label: language === "hi" ? "सभी चित्र" : "All Chronicles" },
    { key: "culture", label: language === "hi" ? "आदिवासी संस्कृति" : "Tribal Heritage" },
    { key: "community", label: language === "hi" ? "प्रवासी एवं समाज" : "Migrant & Community" },
    { key: "healthcare", label: language === "hi" ? "स्वास्थ्य एवं वृद्धजन" : "Healthcare & Elders" },
    { key: "education", label: language === "hi" ? "बाल शिक्षा" : "Child Education" },
    { key: "women", label: language === "hi" ? "महिला सशक्तिकरण" : "Women & Family" },
    { key: "nature", label: language === "hi" ? "जल-जंगल-ज़मीन" : "Nature & Ecology" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  // Reset pagination when filter changes
  useEffect(() => {
    setVisibleCount(12);
  }, [activeFilter]);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

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
    <div className="space-y-8">
      {/* Category Filter Pills & Counts */}
      <div className="flex flex-wrap items-center gap-2">
        {filters.map((f) => {
          const isActive = activeFilter === f.key;
          const count =
            f.key === "all"
              ? galleryItems.length
              : galleryItems.filter((item) => item.category === f.key).length;

          return (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 ${
                isActive
                  ? "bg-[#123B2A] text-white shadow-md scale-[1.02]"
                  : "bg-[#F7F5EC] text-[#17231C]/80 hover:bg-[#6F8D58]/15 border border-[#123B2A]/10 hover:border-[#123B2A]/25"
              }`}
            >
              <span>{f.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  isActive
                    ? "bg-white/20 text-[#B8CBA5]"
                    : "bg-[#123B2A]/10 text-[#123B2A]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setLightboxIndex(index)}
            className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300 border border-[#123B2A]/10 bg-[#0A2419]"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Ambient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2419] via-[#0A2419]/35 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Top Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="badge-pill bg-[#123B2A]/85 backdrop-blur-sm text-[#B8CBA5] border border-white/20 text-[10px] font-semibold">
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
              <p className="text-xs text-[#F7F5EC]/70 line-clamp-2 font-light pt-0.5">
                {item.description}
              </p>
            </div>

            {/* Eye Icon Hover Prompt */}
            <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white shadow-lg">
              <Eye className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="flex flex-col items-center justify-center pt-4 space-y-2">
          <button
            onClick={() => setVisibleCount((prev) => prev + 12)}
            className="px-8 py-3.5 rounded-full bg-[#123B2A] hover:bg-[#1D5139] text-white text-xs font-bold tracking-wider uppercase shadow-lg transition-all flex items-center gap-2 hover:gap-3"
          >
            <span>
              {language === "hi" ? "और तस्वीरें देखें" : "Load More Photographs"}
            </span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <p className="text-xs text-[#17231C]/60 font-light">
            {language === "hi"
              ? `${filteredItems.length} में से ${displayedItems.length} तस्वीरें प्रदर्शित`
              : `Displaying ${displayedItems.length} of ${filteredItems.length} photographs`}
          </p>
        </div>
      )}

      {/* Interactive Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            title="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => ((prev! - 1 + filteredItems.length) % filteredItems.length));
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            title="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            title="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div
            className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-2xl overflow-hidden bg-black/50">
              <Image
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>

            {/* Caption & Metadata */}
            <div className="w-full mt-4 text-white space-y-1.5 text-center sm:text-left px-2">
              <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2">
                <span className="badge-pill bg-[#E28723] text-white text-[10px] font-bold">
                  {filteredItems[lightboxIndex].categoryLabel}
                </span>
                <span className="text-xs text-[#B8CBA5] font-mono">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
              </div>
              <h3 className="font-serif text-lg sm:text-2xl font-normal leading-snug">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#F7F5EC]/80 font-light leading-relaxed max-w-3xl">
                {filteredItems[lightboxIndex].description}
              </p>
              <p className="text-[11px] text-[#B8CBA5]">
                📍 {filteredItems[lightboxIndex].location}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
