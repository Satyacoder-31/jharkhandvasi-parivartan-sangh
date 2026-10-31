export interface OfficeLocation {
  id: string;
  type: string;
  title: string;
  address: string;
  landmark: string;
  city: string;
  state: string;
  pin: string;
  phone: string;
  hours: string;
}

export interface HeroSlideData {
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

export interface LeadershipMember {
  id: string;
  name: string;
  hindiName?: string;
  role: string;
  hindiRole?: string;
  organization: string;
  image: string;
  bio: string;
  phone?: string;
  email?: string;
  badge?: string;
  category?: string;
}

export interface ProgramData {
  id: string;
  eyebrow: string;
  hindiTitle: string;
  title: string;
  description: string;
  image: string;
  stats: string;
  bullets: string[];
  overview?: string;
  activities?: string[];
  beneficiaries?: string;
  outcomes?: string;
  cta?: { text: string; href: string };
  hasEmergencyPanel?: boolean;
}

export interface ArtworkData {
  id: string;
  title: string;
  hindiTitle: string;
  category: "sohrai" | "portrait" | "nature" | "folk" | string;
  categoryLabel: string;
  artist: string;
  origin: string;
  dimensions: string;
  medium: string;
  price: number;
  description: string;
  impact: string;
  image: string;
  inStock: boolean;
  featured: boolean;
}

export interface EventData {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  badge: string;
  description: string;
  image: string;
  dignitaries?: string;
  video?: string;
}

export interface MediaPhoto {
  id: string;
  title: string;
  category: "Leadership" | "Events" | "Field Work" | "Press" | "Art" | "Nature";
  url: string;
  caption: string;
}

export interface HomepageContent {
  stats: {
    backgroundImage?: string;
    stat1: { number: number; suffix: string; label: string; sublabel: string };
    stat2: { number: number; suffix: string; label: string; sublabel: string };
    stat3: { number: number; suffix: string; label: string; sublabel: string };
    stat4: { number: string; suffix: string; label: string; sublabel: string };
  };
  aboutIntro: {
    badge: string;
    headingStart: string;
    headingItalic: string;
    headingEnd: string;
    paragraph1: string;
    paragraph2: string;
    image: string;
    imageTag: string;
    imageTitle: string;
    imageLocation: string;
    primaryBtnText: string;
    primaryBtnHref: string;
    secondaryBtnText: string;
    secondaryBtnHref: string;
  };
  programsHeader: {
    badge: string;
    headingStart: string;
    headingItalic: string;
    description: string;
  };
  natureSection: {
    badge: string;
    headingStart: string;
    headingItalic: string;
    description: string;
    image: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    actionBtnText: string;
    actionBtnHref: string;
    sideImage: string;
    sideTag: string;
    sideTitle: string;
  };
  crisisSection: {
    badge: string;
    headingStart: string;
    headingItalic: string;
    description: string;
    helplinePhone: string;
    helplineBtnText: string;
    secondaryBtnText: string;
    secondaryBtnHref: string;
    image: string;
    imageTag: string;
    imageTitle: string;
  };
  artSpotlight: {
    badge: string;
    headingStart: string;
    headingItalic: string;
    description: string;
    ctaBtnText: string;
    ctaBtnHref: string;
  };
  projectHubs: {
    badge: string;
    headingStart: string;
    headingItalic: string;
    description: string;
  };
  volunteerCta: {
    eyebrow: string;
    headingStart: string;
    headingItalic: string;
    description: string;
    image: string;
    primaryBtnText: string;
    primaryBtnHref: string;
    secondaryBtnText: string;
    secondaryBtnHref: string;
  };
}

export interface SiteContent {
  organization: {
    name: string;
    hindiName: string;
    tagline: string;
    regNo: string;
    estd: string;
    primaryPhone: string;
    secondaryPhone: string;
    email: string;
    alternateEmail: string;
    website: string;
    bankDetails: {
      bankName: string;
      accountNumber: string;
      ifsc: string;
      taxExemption: string;
      pan: string;
    };
    offices: OfficeLocation[];
  };
  stats: {
    years: number;
    yearsLabel: string;
    workers: number;
    workersLabel: string;
    screenings: number;
    screeningsLabel: string;
    districts: number;
    districtsLabel: string;
  };
  homepage: HomepageContent;
  heroSlides: HeroSlideData[];
  about: {
    founderName: string;
    founderRole: string;
    founderImage: string;
    founderMessage: string;
    founderQuote: string;
    originStory: string;
    mission: string;
    vision: string;
    leadership: LeadershipMember[];
    headline?: string;
    subheadline?: string;
    foundedYear?: string;
    history?: string;
    timeline?: { year: string; title: string; description: string }[];
    emblemVideo?: string;
  };
  programs: ProgramData[];
  artStore: ArtworkData[];
  events: EventData[];
  mediaGallery: MediaPhoto[];
}

export const defaultSiteContent: SiteContent = {
  organization: {
    name: "Jharkhandvasi Parivartan Sangh",
    hindiName: "झारखंडवासी परिवर्तन संघ",
    tagline: "सेवा से परिवर्तन की ओर",
    regNo: "E-30004/07/07/2013 MUMBAI",
    estd: "2005",
    primaryPhone: "+91 78080 08058",
    secondaryPhone: "+91 78080 08058",
    email: "jpsngo12@gmail.com",
    alternateEmail: "help@jpsngo.org",
    website: "https://jharkhandvasi-parivartan-sangh-rho.vercel.app",
    bankDetails: {
      bankName: "Bank of India (BOI), Mahavirnagar Charkop",
      accountNumber: "013610110004678",
      ifsc: "BKID0000136",
      taxExemption: "80G: AABTJ8020A24MB02",
      pan: "AABTJ8020A",
    },
    offices: [
      {
        id: "mumbai-headquarters",
        type: "Head Office",
        title: "Registered Head Office (Mumbai)",
        address: "32 Nalanda Society, Near Aastha Dairy, Galli No-1, Gorai-1, Borivali (West)",
        landmark: "Gorai-1, Near Link Road",
        city: "Mumbai",
        state: "Maharashtra",
        pin: "400091",
        phone: "+91 78080 08058",
        hours: "Mon – Sat: 10:00 AM – 8:00 PM",
      },
      {
        id: "giridih-branch",
        type: "Regional Office",
        title: "Regional Branch Office (Jharkhand)",
        address: "DK Traders, Buxidih Road, Near Burman Decorator",
        landmark: "Near Tower Chowk",
        city: "Giridih",
        state: "Jharkhand",
        pin: "815301",
        phone: "+91 78080 08058",
        hours: "24/7 Grassroots Emergency Coordination",
      },
      {
        id: "malad-field-desk",
        type: "Suburban Helpdesk",
        title: "Migrant Labor Assistance Center (Malad)",
        address: "Room 14, Chawl No. 3, Kurar Village, Malad (East)",
        landmark: "Western Express Highway Corridor",
        city: "Mumbai",
        state: "Maharashtra",
        pin: "400097",
        phone: "+91 78080 08058",
        hours: "Daily: 9:00 AM – 9:00 PM",
      },
    ],
  },
  stats: {
    years: 20,
    yearsLabel: "Years of NGO Service",
    workers: 15000,
    workersLabel: "Migrant Workers & Families Aided",
    screenings: 8500,
    screeningsLabel: "Free Health Screenings Delivered",
    districts: 24,
    districtsLabel: "All Jharkhand Districts Covered",
  },
  homepage: {
    stats: {
      backgroundImage: "/images/tree-planting.jpg",
      stat1: { number: 20, suffix: "+", label: "Years of NGO Service", sublabel: "Estd. 2005 • Regd. 2013" },
      stat2: { number: 5200, suffix: "+", label: "Community Network", sublabel: "Workers & Families Connected" },
      stat3: { number: 100, suffix: "+", label: "Health & Relief Camps", sublabel: "Free Medical & Education Drives" },
      stat4: { number: "24/7", suffix: "", label: "Emergency Helpline", sublabel: "+91 78080 08058" },
    },
    aboutIntro: {
      badge: "About Our NGO",
      headingStart: "Serving the Underserved with",
      headingItalic: "Dignity",
      headingEnd: "and Compassion",
      paragraph1:
        "Jharkhandvasi Parivartan Sangh (JPS) is a grassroots non-governmental social welfare organization headquartered in Borivali West, Mumbai. Founded under the leadership of Arvind Arya, JPS is dedicated to protecting the rights, healthcare, and dignity of migrant laborers, vulnerable elders, and marginalized children.",
      paragraph2:
        "Whether providing 24/7 emergency intervention for injured or stranded workers, coordinating with government Child Welfare Committees (CWC) to keep children in schools, or hosting free geriatric diagnostic health camps in suburban neighborhoods, our mission is human transformation: \"समाज के लिए, समाज के साथ\".",
      image: "/images/community-assembly.jpg",
      imageTag: "एक ज़रूरत • एक प्रयास • एक बदलाव",
      imageTitle: "Grassroots Community Assembly & Workers' Welfare",
      imageLocation: "Mumbai Suburban Community Hall",
      primaryBtnText: "Read Founding Story",
      primaryBtnHref: "/about",
      secondaryBtnText: "Connect With Our Team",
      secondaryBtnHref: "/contact",
    },
    programsHeader: {
      badge: "Our NGO In Action",
      headingStart: "Grassroots Programs Transforming",
      headingItalic: "Lives",
      description:
        "Direct humanitarian action conducted across Mumbai suburban neighborhoods and coordinated with regional teams in Jharkhand.",
    },
    natureSection: {
      badge: "प्रकृति और पर्यावरण संरक्षण • Nature & Sustainability",
      headingStart: "Connecting Sacred Sal Forests, Clean Waters &",
      headingItalic: "Community Welfare",
      description:
        "Jharkhand is defined by its deep sacred groves, Sal and Mahua canopies, and living river watersheds. At JPS, environmental conservation is an organic part of human upliftment. We nurture native sapling nurseries, protect natural aquifers, and unite diaspora families in ecological respect.",
      image: "/images/watershed-nature.jpg",
      card1Title: "15,000+ Native Saplings",
      card1Desc: "Sal & Mahua Nursery Drives",
      card2Title: "Sarhul Forest Reverence",
      card2Desc: "Sacred Tribal Tree Tradition",
      card3Title: "Watershed Protection",
      card3Desc: "Stream Soil Stabilization",
      actionBtnText: "Explore Signature Nature Mission",
      actionBtnHref: "/nature",
      sideImage: "/images/tree-planting.jpg",
      sideTag: "Ground Action",
      sideTitle: "Community Native Sapling Planting",
    },
    crisisSection: {
      badge: "24/7 Crisis Response Protocol",
      headingStart: "Emergency Intervention for",
      headingItalic: "Migrant Workers",
      description:
        "When an underprivileged worker faces sudden medical trauma, accident, or acute crisis in Mumbai, families hundreds of kilometers away in Jharkhand have nowhere to turn. Our volunteer team arrives at hospitals and police jurisdictions day and night to provide immediate patient advocacy and dignified repatriation support.",
      helplinePhone: "+91 78080 08058",
      helplineBtnText: "Call Helpline: +91 78080 08058",
      secondaryBtnText: "Read Field Case Studies",
      secondaryBtnHref: "/impact",
      image: "/images/volunteer-hands.jpg",
      imageTag: "Field Volunteers",
      imageTitle: "Compassionate Frontline Support",
    },
    artSpotlight: {
      badge: "कला से सेवा • Art for Social Impact",
      headingStart: "Portraits & Tribal Paintings",
      headingItalic: "for Charity",
      description:
        "Support JPS by acquiring authentic handmade artworks created by indigenous tribal artisans and youth painters. 100% of your suggested donation directly finances medicine for destitute seniors, school kits for children, and emergency relief for stranded migrant workers.",
      ctaBtnText: "Browse Charity Art Store",
      ctaBtnHref: "/art-store",
    },
    projectHubs: {
      badge: "Verified Project Locations",
      headingStart: "Grassroots Presence Across",
      headingItalic: "Mumbai & Jharkhand",
      description:
        "JPS bridges the migrant corridor between Western India and Eastern Jharkhand, providing direct assistance where vulnerability is highest.",
    },
    volunteerCta: {
      eyebrow: "Direct Grassroots Participation",
      headingStart: "Your Time & Support Turn Compassion Into",
      headingItalic: "Enduring Action",
      description:
        "Whether you can volunteer at weekend health camps, mentor a child, or contribute towards emergency patient relief, every action counts.",
      image: "/images/tree-planting.jpg",
      primaryBtnText: "Become a Volunteer",
      primaryBtnHref: "/get-involved",
      secondaryBtnText: "Make a Contribution",
      secondaryBtnHref: "/donate",
    },
  },
  heroSlides: [
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
      badgeText: "24/7 Active Crisis Helpline: +91 78080 08058",
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
      eyebrow: "SACRED FORESTS & NATURE RESTORATION",
      hindiTitle: "प्रकृति और पर्यावरण संरक्षण",
      title: "Guardians of Sacred Sal Groves &",
      italicWord: "Living Water",
      titleEnd: "Sanctuaries.",
      description:
        "Preserving Jharkhand's indigenous ecology through community tree plantation drives, seed sharing, and clean water watershed management initiatives.",
      image: "/images/watershed-nature.jpg",
      alt: "Pristine forest river with clean flowing water in Jharkhand",
      primaryCta: { text: "Nature & Ecology Mission", href: "/nature" },
      secondaryCta: { text: "Donate for Saplings", href: "/donate" },
      badgeText: "5,000+ Native Saplings Planted",
    },
  ],
  about: {
    founderName: "Shri Arvind Arya",
    founderRole: "Founder & National President",
    founderImage: "/images/leadership/arvind-arya.jpg",
    founderMessage:
      "Jharkhand is not merely a land of mineral richness and deep Sal canopies; it is the living spirit of our hardworking ancestors. When our brothers and sisters migrate to Mumbai seeking honest livelihood, they must never feel abandoned or defenseless in times of sickness or tragedy. JPS was built on the foundation of compassion, justice, and solidarity. Every child we educate and every elderly patient we nurse brings us closer to a dignified society.",
    founderQuote: "एक जुर्रत... एक ज़रूरत — सेवा से परिवर्तन की ओर",
    originStory:
      "Jharkhandvasi Parivartan Sangh (JPS), established in 2005 and registered under the Maharashtra Public Trust Act in 2013 (Regd. No. E-30004/MUMBAI), began as a grassroots sanctuary for migrant laborers in Mumbai. Over two decades, it has evolved into a trusted interstate bridge connecting tribal roots in Jharkhand with Mumbai's bustling metropolitan life.",
    mission:
      "To protect, empower, and uplift migrant laborers, vulnerable elders, and marginalized children through immediate crisis relief, sustained healthcare access, educational sponsorship, and cultural identity preservation.",
    vision:
      "A compassionate, self-reliant diaspora where no migrant worker is denied justice or dignity, and every family remains proudly connected to their cultural heritage.",
    headline: "Two Decades of Service, Unity & Cultural Pride",
    subheadline: "Serving as a lifeline for Jharkhandis in Mumbai and building an unshakeable bond between the people of Maharashtra and Jharkhand.",
    foundedYear: "2005",
    history: "What began as a small initiative with the vision of uplifting and assisting the migrant community has now blossomed into a registered NGO in 2013 bearing no. E30004/MUMBAI committed to fostering social, cultural, educational, and medical welfare of Jharkhandis in Mumbai and beyond.",
    timeline: [
      { year: "2005", title: "Movement Inception in Mumbai", description: "Arvindkumar Arya initiated a grassroots support group to assist underprivileged Jharkhandi laborers facing wage disputes, language barriers, and sudden medical crises in Mumbai." },
      { year: "2013", title: "Formal NGO Registration (E-30004/MUMBAI)", description: "Officially registered under the Maharashtra Public Trust Act (Reg. No. E-30004/07/07/2013 MUMBAI) committed to fostering social, cultural, educational, and medical welfare." },
      { year: "2015", title: "Medical Camps & Eye Care Drives", description: "Partnered with leading surgeons and multi-specialty hospitals to deliver regular free eye checkups, diagnostic testing, and spectacles distribution across Mumbai suburbs." },
      { year: "2018", title: "Educational Initiatives & Skill Building", description: "Collaborated with educational institutions and Child Welfare Committees to supply school kits, scholarships, and vocational counseling for underprivileged migrant youth." },
      { year: "2020–21", title: "Nationwide COVID-19 Relief Intervention", description: "Operated 24/7 emergency helplines, distributing dry ration packets, emergency hospital coordination, and facilitating safe transit for migrant laborers across India." },
      { year: "2022", title: "NITI Aayog Darpan & 80G Statutory Recognition", description: "Secured formal NITI Aayog registration (MH/2022/0329647/22-11-2022) and Income Tax 80G certification (AABTJ8020A24MB02) ensuring complete institutional transparency." },
      { year: "2023–24", title: "Jharkhand Sthapna Diwas in Mumbai", description: "Organized landmark cultural celebrations uniting thousands of diaspora members, Maharashtra state ministers, and community leaders with traditional Santhali and Chhau dances." },
      { year: "2025–26", title: "Entering 3rd Decade of Service", description: "Expanding welfare reach with backing from prominent IAS & IRS officers from Jharkhand, formalizing employment assistance, and protecting tribal environmental roots." },
    ],
    emblemVideo: "/videos/jps-official-3d-logo-animation.mp4",
    leadership: [
      { id: "dr-avinash-gupta", name: "Dr. Avinash Gupta", role: "Patron", badge: "Patron", category: "Patron", image: "/images/leadership/dr-avinash-gupta.jpg", organization: "JPS Patron Council", bio: "Renowned medical consultant and philanthropist advising JPS health initiatives." },
      { id: "ramkumar-pal", name: "Shri Ramkumar Pal", role: "Patron", badge: "Patron", category: "Patron", image: "/images/leadership/ramkumar-pal.jpg", organization: "JPS Patron Council", bio: "Senior community patron and industrialist supporting diaspora social security." },
      { id: "ganpat-kothari", name: "Shri Ganpat Kothari", role: "Patron", badge: "Patron", category: "Patron", image: "/images/leadership/ganpat-kothari.jpg", organization: "JPS Patron Council", bio: "Eminent social philanthropist guiding institutional transparency and community welfare." },
      { id: "manulal-baitha", name: "Shri Manulal Baitha", role: "Patron", badge: "Patron", category: "Patron", image: "/images/leadership/manulal-baitha.jpg", organization: "JPS Patron Council", bio: "Senior statesman and community elder guiding migrant rights in Mumbai." },
      { id: "arvind-arya", name: "Shri Arvind Arya", role: "Founder / Chairman", badge: "Founder / Chairman", category: "Executive", image: "/images/leadership/arvind-arya.jpg", organization: "Jharkhandvasi Parivartan Sangh", bio: "Social reformer and grassroots activist leading migrant welfare, community health camps, and diaspora unity in Mumbai since 2005.", phone: "+91 78080 08058", email: "arvind.arya@jpsngo.org" },
      { id: "vishal-bhagat", name: "Shri Vishal Bhagat", role: "National Vice President", badge: "Vice President", category: "Executive", image: "/images/leadership/vishal-bhagat.jpg", organization: "Executive Committee", bio: "Leads youth welfare programs and hospital emergency triage coordination." },
      { id: "dwarika-singh", name: "Shri Dwarika Singh", role: "National Vice President", badge: "Vice President", category: "Executive", image: "/images/leadership/dwarika-singh.jpg", organization: "Executive Committee", bio: "Manages inter-district community outreach and worker transit support networks." },
      { id: "umashankar-modi", name: "Shri Umashankar Modi", role: "National Working President", badge: "Working President", category: "Executive", image: "/images/leadership/umashankar-modi.jpg", organization: "Executive Committee", bio: "Oversees nationwide operational campaigns, migrant grievance redressal, and branch coordination." },
      { id: "niranjan-kumar", name: "Shri Niranjan Kumar", role: "National General Secretary", badge: "General Secretary", category: "Secretariat", image: "/images/leadership/niranjan-kumar.jpg", organization: "JPS Secretariat", bio: "Coordinates central communications, organizational charters, and legal aid desks." },
      { id: "tulsi-yadav", name: "Shri Tulsi Yadav", role: "National General Secretary", badge: "General Secretary", category: "Secretariat", image: "/images/leadership/tulsi-yadav.jpg", organization: "JPS Secretariat", bio: "Directs labor welfare interventions and municipal hospital coordination." },
      { id: "manoj-kumar", name: "Shri Manoj Kumar", role: "National Organisation Secretary", badge: "Org. Secretary", category: "Secretariat", image: "/images/leadership/manoj-kumar.jpg", organization: "JPS Secretariat", bio: "Organizes volunteer brigades and field medical camp logistics across Mumbai suburbs." },
      { id: "kamdev-sahu", name: "Shri Kamdev Sahu", role: "National Secretary", badge: "Secretary", category: "Secretariat", image: "/images/leadership/kamdev-sahu.jpg", organization: "JPS Secretariat", bio: "Supervises educational supply distributions and child welfare drives." },
      { id: "sunil-arya", name: "Shri Sunil Arya", role: "National Treasurer", badge: "Treasurer", category: "Secretariat", image: "/images/leadership/sunil-arya.jpg", organization: "Board of Trustees", bio: "Maintains financial audit compliance, 80G tax exemptions, and relief fund accounts." },
      { id: "rajiv-rohit", name: "Shri Rajiv Rohit", role: "National Media-In-Charge", badge: "Media In-Charge", category: "Specialized", image: "/images/leadership/rajiv-rohit.jpg", organization: "Public Relations", bio: "Heads national media relations, press releases, and 'अपना झारखंड' publication." },
      { id: "jay-saha", name: "Shri Jay Saha", role: "National Liaison Head", badge: "Liaison Head", category: "Specialized", image: "/images/leadership/jay-saha.jpg", organization: "State Relations", bio: "Fosters institutional relations between Maharashtra and Jharkhand government departments." },
      { id: "pradeep-lal", name: "Shri Pradeep Lal", role: "National Advisor", badge: "Advisor", category: "Specialized", image: "/images/leadership/pradeep-lal.jpg", organization: "Advisory Council", bio: "Advises on statutory governance, trust legal frameworks, and policy initiatives." },
      { id: "deep-narayan-kushwaha", name: "Shri Deep Narayan Kushwaha", hindiName: "श्री दीप नारायण कुशवाहा", role: "National Advisor", hindiRole: "राष्ट्रीय सलाहकार", badge: "Advisor", category: "Specialized", image: "/images/leadership/deep-narayan-kushwaha.jpg", organization: "National Advisory Council", bio: "मार्गदर्शन, सामाजिक उत्थान एवं प्रवासी कल्याण हेतु समर्पित राष्ट्रीय सलाहकार।" },
    ],
  },
  programs: [
    {
      id: "migrants",
      eyebrow: "CORE PRIORITY • 24/7 HELPLINE",
      hindiTitle: "प्रवासी श्रमिक सुरक्षा एवं सहायता",
      title: "Migrant Worker Rights & Emergency Support",
      description:
        "Frontline emergency aid for unorganized migrant laborers in Mumbai facing medical crises, workplace exploitation, or sudden accidents.",
      image: "/images/community-assembly.jpg",
      stats: "15,000+ Workers Assisted",
      bullets: [
        "24/7 dedicated crisis response desk (+91 78080 08058)",
        "Hospital emergency admission and compassionate patient advocacy",
        "Free legal redressal and labor dispute mediation assistance",
        "Dignified coordination and logistics for repatriation of mortal remains",
      ],
    },
    {
      id: "seniors",
      eyebrow: "GERIATRIC WELFARE & HEALTHCARE",
      hindiTitle: "वरिष्ठ नागरिक स्वास्थ्य एवं सम्मान",
      title: "Senior Citizens Care & Free Medical Camps",
      description:
        "Comprehensive healthcare and preventative wellness screenings organized regularly across Borivali West and Mumbai suburbs.",
      image: "/images/senior-health.jpg",
      stats: "8,500+ Health Screenings",
      bullets: [
        "Bi-monthly comprehensive free medical and vital health screenings",
        "Free distribution of essential chronic medications and mobility aids",
        "Eye testing, cataract detection, and corrective spectacles distribution",
        "Active senior citizen community meetups combating elder loneliness",
      ],
    },
    {
      id: "education",
      eyebrow: "LITERACY & PROTECTION",
      hindiTitle: "शिक्षा प्रोत्साहन एवं बाल कल्याण",
      title: "Child Welfare & Education Sponsorship",
      description:
        "Protecting children of daily-wage migrants from school dropouts through active Child Welfare Committee coordination and learning kits.",
      image: "/images/hero-education.jpg",
      stats: "1,200+ School Kits Provided",
      bullets: [
        "Annual Shiksha Protsahan study kits (notebooks, bags, geometry sets)",
        "School admission guidance and fee support for migrant children",
        "Community weekend tutorial centers in suburban worker settlements",
        "Child protection seminars and anti-child-labor campaigns",
      ],
    },
    {
      id: "women",
      eyebrow: "LIVELIHOOD & SELF-RELIANCE",
      hindiTitle: "महिला सशक्तिकरण एवं आत्मनिर्भरता",
      title: "Women's Self-Help & Micro-Skill Training",
      description:
        "Fostering economic independence and vocational skills for underprivileged women from Jharkhand residing in Mumbai.",
      image: "/images/women-empowerment.jpg",
      stats: "650+ Women Trained",
      bullets: [
        "Vocational tailoring, embroidery, and handicraft training workshops",
        "Micro-enterprise financial literacy and Self-Help Group (SHG) formation",
        "Maternal healthcare counseling and nutritional guidance drives",
        "Legal awareness on women's rights and domestic grievance redressal",
      ],
    },
    {
      id: "nature",
      eyebrow: "ENVIRONMENTAL CONSERVATION",
      hindiTitle: "प्रकृति और पर्यावरण संरक्षण",
      title: "Native Forestry & Watershed Restoration",
      description:
        "Protecting Jharkhand's ecological heritage through tree plantation, watershed conservation, and environmental education.",
      image: "/images/watershed-nature.jpg",
      stats: "5,000+ Saplings Planted",
      bullets: [
        "Sal, Mahua, and native sapling plantations across degraded soils",
        "Soil conservation and rural watershed revival awareness drives",
        "Eco-solidarity camps connecting urban diaspora youth with mother nature",
        "Traditional organic farming and bio-compost promotion",
      ],
    },
    {
      id: "culture",
      eyebrow: "HERITAGE & DIASPORA SOLIDARITY",
      hindiTitle: "संस्कृति, कला एवं एकता",
      title: "Cultural Heritage & Diaspora Community Unity",
      description:
        "Preserving indigenous tribal arts, folk music, and commemorating freedom fighters like Bhagwan Birsa Munda.",
      image: "/images/cultural-birsa.jpg",
      stats: "20+ Years Documented",
      bullets: [
        "Annual Bhagwan Birsa Munda Smruti Samaroh in Mumbai",
        "Sohrai & Khovar traditional tribal mural exhibitions and art charity",
        "Publication of 'अपना झारखंड' souvenir documenting diaspora history",
        "Promoting Chhau, Jhumar, and Santhali folk performers on national stages",
      ],
    },
  ],
  artStore: [
    {
      id: "art-birsa-frame",
      title: "Official Commemorative Frame: Dharti Aaba Bhagwan Birsa Munda",
      hindiTitle: "धरती आबा भगवान बिरसा मुंडा स्मृति कलाकृति",
      category: "portrait",
      categoryLabel: "Official Commemorative Art",
      artist: "Commissioned by Arvind Arya, Jharkhandvasi Parivartan Sangh",
      origin: "Mumbai / Khunti, Jharkhand",
      dimensions: '24" × 34" Custom Framed Commemorative Display',
      medium: "Official JPS Archival Fine Art Print with Gold Frame Mount",
      price: 5100,
      description:
        "The official commemorative portrait of Bhagwan Birsa Munda bearing the JPS insignia and 'एक जुर्रत... एक ज़रूरत' motto, depicting Dharti Aaba holding his sacred bow with courage and freedom pride. Presented to state dignitaries and community patrons.",
      impact:
        "Sponsors free diagnostic eye screenings and prescription spectacles distribution for 35 low-income elders and migrant workers in Mumbai.",
      image: "/images/commemorative/birsa-munda-dharti-aaba-portrait.jpg",
      inStock: true,
      featured: true,
    },
    {
      id: "art-sohrai-wildlife",
      title: "Tree of Life & Forest Wildlife (Sohrai Masterpiece)",
      hindiTitle: "पारंपरिक सोहराय एवं कोहबर लोक कला",
      category: "sohrai",
      categoryLabel: "Traditional Sohrai Art",
      artist: "Tribal Women Artisan Collective, Hazaribagh / Jharkhand",
      origin: "Hazaribagh, Jharkhand",
      dimensions: '36" × 28" (Framed / Unframed on request)',
      medium: "Natural Earth Pigments on Primed Textured Canvas",
      price: 4500,
      description:
        "Intricate handmade Sohrai mural depicting the sacred Kalpavriksha (Tree of Life), peacocks, horned deer, and indigenous village motifs painted using natural ochre and earth pigments.",
      impact:
        "100% of this contribution funds complete Shiksha Protsahan study kits (notebooks, bags, uniforms) for 9 underprivileged school children.",
      image: "/images/art-sohrai.jpg",
      inStock: true,
      featured: true,
    },
    {
      id: "art-sarhul-celebration",
      title: "Sarhul Spring Flower Celebration",
      hindiTitle: "सरहुल लोक नृत्य एवं समुदाय उत्सव",
      category: "folk",
      categoryLabel: "Tribal Folk Art",
      artist: "Rural Folk Artisan Fellowship",
      origin: "Santhal Pargana, Jharkhand",
      dimensions: '32" × 24" Custom Mount',
      medium: "Traditional Tempera on Handmade Herbal Paper",
      price: 3800,
      description:
        "Joyful community celebration under flowering Sal trees honoring Mother Earth for the Sarhul festival, depicting unity, tribal drumming, and spring renewal.",
      impact:
        "Provides emergency dry ration kits (flour, rice, dal, oil) for 2 distressed migrant worker families facing sudden crisis in Mumbai.",
      image: "/images/art-sarhul.jpg",
      inStock: true,
      featured: true,
    },
    {
      id: "art-netarhat-forest",
      title: "Netarhat Mist & Sal Forest River Valley",
      hindiTitle: "नेतरहाट साल वन एवं प्राकृतिक नदी",
      category: "nature",
      categoryLabel: "Nature Fine Art",
      artist: "Volunteer Fine Arts Guild",
      origin: "Latehar / Netarhat, Jharkhand",
      dimensions: '28" × 22" Gallery Wrap',
      medium: "Fine Art Watercolor & Acrylic on Heavy Canvas",
      price: 2800,
      description:
        "Serene sunrise landscape capturing morning sunbeams penetrating the ancient Sal forest canopy with a clear mountain stream flowing over red rock banks.",
      impact:
        "Funds community tree sapling nurseries, soil preparation, and planting care for 25 native Sal and Mahua trees in degraded lands.",
      image: "/images/art-forest.jpg",
      inStock: true,
      featured: true,
    },
  ],
  events: [
    {
      id: "event-anup-jalota-sthapana-diwas",
      title: "Padma Shri Anup Jalota Video Blessings - Jharkhand Sthapana Diwas",
      date: "November 18",
      location: "Mumbai, Maharashtra",
      category: "Dignitary Blessings",
      badge: "Padma Shri Address",
      description:
        "Padma Shri Bhajan Samrat Anup Jalota delivered an inspiring video message congratulating Founder Arvind Arya and Jharkhandvasi Parivartan Sangh on Jharkhand Foundation Day in Mumbai, commending 15+ years of dedicated service in mobilizing and uplifting thousands of diaspora members.",
      image: "/images/cultural-birsa.jpg",
      video: "/videos/anup-jalota-jharkhand-sthapana-diwas-message.mp4",
      dignitaries: "Padma Shri Anup Jalota (Indian Musician & Actor), Founder Arvind Arya",
    },
    {
      id: "event-souvenir-launch",
      title: "Release of 'अपना झारखंड' Souvenir Magazine",
      date: "November 15, 2024",
      location: "Prabodhankar Thackeray Hall, Borivali (West), Mumbai",
      category: "Milestone Celebration",
      badge: "20-Year Souvenir Launch",
      description:
        "Marking two decades of relentless grassroots service, JPS celebrated Jharkhand Foundation Day with the release of the historic souvenir magazine 'अपना झारखंड'. Unveiled by distinguished dignitaries including former Chief Minister Shri Babulal Marandi and Shri Prahlad Modi.",
      image: "/images/events/magazine-launch-babulal-marandi-prahlad-modi.jpg",
      dignitaries: "Shri Babulal Marandi, Shri Prahlad Modi, Senior IPS/IAS Officers",
    },
    {
      id: "event-birsa-jayanti",
      title: "Bhagwan Birsa Munda 150th Janmotsav Samaroh",
      date: "November 15, 2025",
      location: "Borivali Suburban Cultural Grounds, Mumbai",
      category: "Cultural Commemoration",
      badge: "Statehood & Tribal Pride",
      description:
        "Grand assembly of over 2,500 diaspora members with traditional Santhali and Chhau folk dance performances, floral tributes before Dharti Aaba, and felicitation of community elders.",
      image: "/images/events/birsa-munda-garland-stage-ceremony.jpg",
      dignitaries: "Community Leaders, Cultural Envoys, Local Representatives",
    },
    {
      id: "event-health-camp-borivali",
      title: "Mega Free Health Screening & Medicine Camp",
      date: "January 26, 2026",
      location: "Gorai Community Hall, Borivali West, Mumbai",
      category: "Healthcare Action",
      badge: "Frontline Health",
      description:
        "Comprehensive health checkups conducted for 450+ migrant families, construction laborers, and senior citizens with free distribution of essential medications and eye checkups.",
      image: "/images/senior-health.jpg",
      dignitaries: "Dr. Rajesh Kumar (Chief Medical Coordinator), Volunteer Doctors",
    },
    {
      id: "event-newspaper-map-archive",
      title: "20-Year Statewide Press Archive & Coverage Map Release",
      date: "March 2026",
      location: "Mumbai Press Club & JPS Headquarters",
      category: "Press Archive",
      badge: "All 24 Districts Covered",
      description:
        "Unveiling the comprehensive media documentation tracking two decades of JPS interventions reported across leading dailies including Prabhat Khabar, Dainik Jagran, Hindustan, and Times of India.",
      image: "/images/press/jharkhand-newspaper-map.png",
      dignitaries: "Veteran Journalists, Legal Advocates, Community Trustees",
    },
  ],
  mediaGallery: [
    {
      id: "photo-1",
      title: "Apna Jharkhand Magazine Launch",
      category: "Events",
      url: "/images/events/magazine-launch-babulal-marandi-prahlad-modi.jpg",
      caption: "Former CM Babulal Marandi and Prahlad Modi releasing the landmark 20-year souvenir.",
    },
    {
      id: "photo-2",
      title: "Birsa Munda Garlanding Ceremony",
      category: "Events",
      url: "/images/events/birsa-munda-garland-stage-ceremony.jpg",
      caption: "President Arvind Arya and delegates paying floral homage to Bhagwan Birsa Munda.",
    },
    {
      id: "photo-3",
      title: "Pravasi Sammelan Memorandum",
      category: "Leadership",
      url: "/images/events/pravasi-sammelan-memorandum-presentation.jpg",
      caption: "Presentation of community charter to Ex-MP Gopal Shetty & MLA Sanjay Upadhyay.",
    },
    {
      id: "photo-4",
      title: "Shivaji Maharaj Throne Tribute",
      category: "Leadership",
      url: "/images/events/shivaji-maharaj-throne-delegation.jpg",
      caption: "Executive delegation honoring Maharashtra heritage before Chhatrapati Shivaji Maharaj.",
    },
    {
      id: "photo-5",
      title: "Statewide Press Coverage Map",
      category: "Press",
      url: "/images/press/jharkhand-newspaper-map.png",
      caption: "20 years of grassroots news coverage mapped across all 24 districts of Jharkhand.",
    },
    {
      id: "photo-6",
      title: "Bhagwan Birsa Munda Photo Frame",
      category: "Art",
      url: "/images/art/birsa-munda-frame.jpg",
      caption: "Traditional archival teak-finish portrait frame for charity donations.",
    },
    {
      id: "photo-7",
      title: "Senior Citizens Healthcare Camp",
      category: "Field Work",
      url: "/images/senior-health.jpg",
      caption: "Volunteer medical doctors conducting free checkups in Borivali West.",
    },
    {
      id: "photo-8",
      title: "Native Tree Plantation Drive",
      category: "Nature",
      url: "/images/tree-planting.jpg",
      caption: "Volunteers planting native Sal saplings for soil and water restoration.",
    },
    {
      id: "photo-9",
      title: "Child Education Outreach",
      category: "Field Work",
      url: "/images/hero-education.jpg",
      caption: "Distributing Shiksha Protsahan school kits to children of migrant laborers.",
    },
    {
      id: "photo-10",
      title: "Community Assembly in Mumbai",
      category: "Field Work",
      url: "/images/community-assembly.jpg",
      caption: "Migrant worker assembly resolving community disputes and welfare coordination.",
    },
  ],
};
