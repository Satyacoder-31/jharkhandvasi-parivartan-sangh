"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "hi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const STORAGE_KEY = "jps_site_language";

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Brand & Identity
    orgName: "Jharkhandvasi Parivartan Sangh",
    orgSubtitle: "Community Welfare & Social Impact",
    orgMotto: "A daring step... A true necessity",
    orgHindiMotto: "एक जुर्रत... एक ज़रूरत",
    orgValues: "Service • Unity • Struggle",
    orgLocation: "Borivali West, Mumbai",

    // Navigation Links
    navHome: "Home",
    navAbout: "About Us",
    navOurWork: "Our Work",
    navArtStore: "Art for Charity",
    navImpact: "Impact",
    navEvents: "Events",
    navContact: "Contact",
    navNature: "Nature & Ecology",
    navGetInvolved: "Get Involved",
    navDonate: "Donate",
    navAdmin: "Admin Portal",
    navMenu: "Menu",
    navClose: "Close",

    // Quick Actions
    btnCall: "Call",
    btnCallHelpline: "Call Helpline",
    btnWhatsApp: "WhatsApp",
    btnWhatsAppSupport: "WhatsApp Coordination",
    btnDonate: "Donate",
    btnDonateNow: "Donate Now",
    btnSupportMission: "Support Our Mission",
    btnLearnMore: "Learn More",
    btnViewPrograms: "View All Programs",
    btnVolunteer: "Join as Volunteer",
    btnSendMessage: "Send Message",
    btnExploreArt: "Explore Charity Art",
    btnReadStory: "Read Full Story",

    // Themes & Languages
    themeLight: "Light Mode",
    themeDark: "Dark Mode",
    langEnglish: "English",
    langHindi: "हिंदी",
    langSwitch: "Language / भाषा",

    // Common Badges
    badgeMovement: "Movement Estd. 2005 • Regd. 2013",
    badgeRegNo: "Reg No. E-30004/MUMBAI",
    badge80G: "80G Tax Deductible (50%)",
    badgeVerified: "Verified Public Trust",
    badgeEmergency: "24/7 Emergency Support",

    // Stats Labels
    statYears: "Years of Grassroots Action",
    statYearsSub: "2005 - 2026 Continuous",
    statWorkers: "Migrants & Families Assisted",
    statWorkersSub: "Across Mumbai & Maharashtra",
    statScreenings: "Eye & Health Camps",
    statScreeningsSub: "Free Diagnostics & Glasses",
    statHelpline: "Emergency Crisis Desk",
    statHelplineSub: "Dedicated 24/7 Helpline",

    // Homepage - Hero Slides
    hero1Eyebrow: "SERVICE • EMPOWERMENT • TRANSFORMATION",
    hero1Title: "Growing Hope. Nurturing Lives. Transforming Communities.",
    hero1Desc: "Standing beside migrant families, empowering children with education, caring for elders, and preserving Jharkhand's natural heritage through compassion and collective grassroots action.",
    hero1PrimaryCta: "Explore Our Work",
    hero1SecondaryCta: "Become a Volunteer",
    hero1Badge: "Native Forestry & Sustainable Communities",

    hero2Eyebrow: "CHILD PROTECTION & LITERACY",
    hero2Title: "Educating Minds. Igniting Brighter Futures.",
    hero2Desc: "Active coordination with the Child Welfare Committee (CWC) to combat child vulnerability and distribute Shiksha Protsahan study kits, uniforms, and learning materials.",
    hero2PrimaryCta: "Child Welfare Programs",
    hero2SecondaryCta: "Support Education",
    hero2Badge: "Child Welfare Committee (CWC) Collaboration",

    hero3Eyebrow: "WORKER RIGHTS & SOCIAL SECURITY",
    hero3Title: "Protecting Labor. Defending Dignity & Justice.",
    hero3Desc: "Standing in solidarity with unorganized migrant workers across Maharashtra. Emergency hospital intervention, workplace accident compensation advocacy, and safe transit.",
    hero3PrimaryCta: "24/7 Helpline Assistance",
    hero3SecondaryCta: "Hospital Crisis Desk",
    hero3Badge: "24/7 Active Crisis Helpline: +91 78080 08058",

    hero4Eyebrow: "HEALTHCARE & GERIATRIC WELFARE",
    hero4Title: "Restoring Vision. Caring for Vulnerable Elders.",
    hero4Desc: "Monthly free comprehensive diagnostic health camps and eye screenings for over 100 seniors in Borivali West, providing free corrective spectacles and medicines.",
    hero4PrimaryCta: "Healthcare Camps",
    hero4SecondaryCta: "Sponsor Senior Health",
    hero4Badge: "Monthly Free Eye Screening Camps",

    // Homepage - About Intro
    hpAboutBadge: "Two Decades of Grassroots Dedication",
    hpAboutHeading: "A Lifeline of Solidarity for Migrant Workers and Vulnerable Families",
    hpAboutP1: "Founded in 2005 and officially registered in 2013 under Mumbai Public Trust regulations, Jharkhandvasi Parivartan Sangh (JPS) is the premier grassroots community support network for unorganized workers, vulnerable elders, and diaspora families from Jharkhand living in the Mumbai Metropolitan Region.",
    hpAboutP2: "Led by founder-president Arvind Arya, our volunteers run a 24/7 emergency distress desk, intervene in critical hospital admissions, distribute student kits in coordination with the Child Welfare Committee, conduct monthly elder health camps, and plant native Sal trees in Jharkhand.",
    hpAboutBtnHistory: "Read Our Full Journey",
    hpAboutBtnFounder: "Founder President's Message",

    // Homepage - Programs Header & Items
    hpProgBadge: "Pillars of Impact",
    hpProgHeading: "Compassionate Intervention Across Six Core Domains",
    hpProgDesc: "From emergency hospital intervention to cultural pride, our work creates dignity, health security, and sustainable resilience.",

    prog1Title: "Migrant Crisis Support & Hospital Aid",
    prog1Desc: "24/7 emergency response for stranded, injured, or unwell migrant laborers in Mumbai. Free legal aid, hospital mediation, and safe transport.",
    prog1Badge: "24/7 Crisis Response",

    prog2Title: "Senior Citizen Health & Geriatric Care",
    prog2Desc: "Monthly diagnostic medical and eye checkup camps for over 100 seniors in Borivali West with free corrective spectacles and medicines.",
    prog2Badge: "Free Eye Checkups",

    prog3Title: "Child Protection & Education Kits",
    prog3Desc: "Partnering with the Child Welfare Committee (CWC) to protect vulnerable children and distribute Shiksha Protsahan school kits.",
    prog3Badge: "CWC Partnership",

    prog4Title: "Free Medical & Diagnostic Health Camps",
    prog4Desc: "Mobile health screening camps with voluntary doctors, basic vitals diagnostic tests, and preventive hygiene education.",
    prog4Badge: "Free Medicines",

    prog5Title: "Women & Family Welfare Relief",
    prog5Desc: "Emergency dry ration kits, clothing distribution, and counseling support for distressed immigrant women and families.",
    prog5Badge: "Family Relief",

    prog6Title: "Tribal Heritage & Cultural Identity",
    prog6Desc: "Commemorating Bhagwan Birsa Munda Jayanti, Karma and Sarhul festivals, and promoting traditional Sohrai folk art.",
    prog6Badge: "Cultural Pride",

    // Homepage - Emergency Crisis Banner
    hpCrisisBadge: "24/7 Emergency Response",
    hpCrisisHeading: "Facing a Medical, Industrial or Legal Crisis in Mumbai?",
    hpCrisisDesc: "Our dedicated crisis response team arrives at public hospitals within hours to assist stranded migrant workers and families.",
    hpCrisisCallBtn: "Call Helpline: 78080 08058",
    hpCrisisWhatsAppBtn: "WhatsApp Coordination",

    // Homepage - Nature Section
    hpNatureBadge: "Ecology & Climate Action",
    hpNatureHeading: "Protecting the Sacred Forests and Watersheds of Jharkhand",
    hpNatureDesc: "Native Sal tree planting, preservation of sacred tribal groves (Sarna Sthal), and community watershed rejuvenation.",
    hpNatureCard1Title: "Native Sal Forest Restoration",
    hpNatureCard1Desc: "Reforestation of degraded hill tracts in West Singhbhum using indigenous Sal and Mahua saplings.",
    hpNatureCard2Title: "Sacred Grove (Sarna Sthal) Protection",
    hpNatureCard2Desc: "Defending traditional indigenous spiritual forest groves from commercial deforestation.",
    hpNatureCard3Title: "Water Stream & Bank Stabilization",
    hpNatureCard3Desc: "Planting soil-binding native species like Karanj and Palash along stream embankments.",

    // Homepage - Charity Art
    hpArtBadge: "Art for a Cause",
    hpArtHeading: "Indigenous Folk Art Driving Grassroots Change",
    hpArtDesc: "Original Sohrai and Khovar folk paintings donated by rural tribal artisans to fund emergency migrant care.",

    // Homepage - Volunteer CTA
    hpVolEyebrow: "Become a Changemaker",
    hpVolHeading: "Lend Your Voice, Hands and Compassion",
    hpVolDesc: "Real change happens when good people stand together. Join our volunteer movement today.",
    hpVolBtnJoin: "Join as Volunteer",
    hpVolBtnDonate: "Support with Donation",

    // About Page
    aboutHeadline: "Two Decades of Service, Unity & Cultural Pride",
    aboutSubheadline: "Serving as a lifeline for Jharkhandis in Mumbai and building an unshakeable bond between the people of Maharashtra and Jharkhand.",
    aboutFounderTitle: "Founder President's Message",
    aboutFounderName: "Shri Arvind Arya",
    aboutFounderRole: "Founder & Chairman, Jharkhandvasi Parivartan Sangh",
    aboutFounderQuote: "When a migrant worker is stranded or falling ill thousands of miles away from home, what they need most is not pity, but dignity and brotherhood. That is the soul of JPS.",
    aboutFounderMessage: "Since 2005, we have dedicated every single day to ensuring no Jharkhandi worker feels alone in Mumbai. We fight for their medical rights, ensure their children get education, and celebrate our tribal identity with pride.",
    aboutMissionTitle: "Our Mission",
    aboutMissionDesc: "To provide comprehensive social, legal, medical, and educational security to unorganized migrant laborers and diaspora families.",
    aboutVisionTitle: "Our Vision",
    aboutVisionDesc: "An empowered society where migrant workers live with dignity, children thrive in school, and tribal heritage is celebrated across India.",

    // Donate Page
    donateHeadline: "Giving with Integrity and Legal Transparency",
    donateSubheadline: "Your contribution funds free eye checkups & spectacles, emergency hospital care for migrant laborers, school kits for underprivileged children, and reforestation in Jharkhand.",
    donateBankTitle: "Official Bank Coordinates & Tax Exemption",
    donateBankName: "Bank of India",
    donateAccountName: "Jharkhandvasi Parivartan Sangh",
    donate80GNotice: "Donations are eligible for 50% tax exemption under Section 80G of the Income Tax Act.",
    donateTaxExemption: "50% Tax Deductible under 80G",
    donatePanNotice: "PAN & 80G receipt issued for every donation.",
    calcTitle: "Choose Your Contribution",
    calcPurpose: "Choose Purpose Allocation:",
    calcAllCauses: "All Community Causes",
    calcMigrantAid: "Migrant Crisis Aid",
    calcChildLiteracy: "Child Literacy Kits",
    calcSeniorHealth: "Senior Health Camps",
    calcEcology: "Tree Planting & Ecology",

    // Contact Page
    contactHeadline: "Get in Touch with Our Offices",
    contactSubheadline: "We operate a 24/7 emergency response network alongside our registered head office in Borivali West, Mumbai and branch in Giridih, Jharkhand.",
    contactEmergencyTitle: "24-Hour Emergency Intervention Protocol",
    contactEmergencyHeading: "Facing Immediate Medical or Distress Crisis?",
    contactEmergencyDesc: "For urgent hospital assistance, industrial trauma, or emergency travel coordination, please dial our dedicated emergency helpline directly.",
    contactFormTitle: "Send Us a Direct Message",
    contactFormName: "Your Full Name",
    contactFormPhone: "Phone Number",
    contactFormEmail: "Email Address",
    contactFormSubject: "Subject / Purpose",
    contactFormMessage: "Your Message",
    contactFormSubmit: "Send Message",
    contactFormSubmitting: "Sending Message...",
    contactFormSuccess: "Thank you! Your message has been received by our Borivali West office.",

    // Events Page
    eventsHeadline: "Events, Field Gatherings & Media Coverage",
    eventsSubheadline: "Moments of collective action, cultural heritage, eye health camps, and statewide recognition across Mumbai and Jharkhand.",
    eventsSpotlightTitle: "Pravasi Jharkhandvasi Sammelan 2026",
    eventsSpotlightDesc: "Veer Savarkar Udyan, Borivali (W) - Arvind Arya, MLA Sanjay Upadhyay, Ex-MP Gopal Shetty & Devendra Mahato presenting the Pravasi Welfare Memorandum.",

    // Footer
    footerDesc: "Founded in 2013 under the leadership of Arvind Arya, Jharkhandvasi Parivartan Sangh (JPS) is a registered social welfare organization based in Borivali West, Mumbai. Dedicated to migrant worker protection, senior citizen healthcare, child education kits, and native forest conservation.",
    footerRegisteredOrg: "Registered Grassroots Social Welfare Organization",
    footerStayConnected: "Stay Connected With Field Updates",
    footerSubscribeSuccess: "Thank you! You are subscribed to JPS community bulletins.",
    footerSubscribePlaceholder: "Enter email for updates...",
    footerQuickLinks: "Quick Links",
    footerCorePrograms: "Core Programs",
    footerContactOffices: "Contact & Official Offices",
    footerHeadOffice: "Registered Head Office (Mumbai)",
    footerBranchOffice: "Branch Office (Giridih)",
    footerHelplineLabel: "24/7 Registered Community & Crisis Helpline",
    footerTaxNotice: "Bank & 80G Tax Exemption Details",
    footerCopyright: "© 2005–2026 Jharkhandvasi Parivartan Sangh (Regd.) | Service to Transformation",
    footerBackToTop: "Back to Top",
    footerFoundingStory: "Founding Story",
    footerEmergencyRedressal: "Emergency Redressal",
    footerFinancialTransparency: "Financial Transparency",

    // Preloader
    loadingText: "Loading Experience",
  },
  hi: {
    // Brand & Identity
    orgName: "झारखंडवासी परिवर्तन संघ",
    orgSubtitle: "सामुदायिक कल्याण एवं सामाजिक परिवर्तन",
    orgMotto: "एक जुर्रत... एक ज़रूरत",
    orgHindiMotto: "एक जुर्रत... एक ज़रूरत",
    orgValues: "सेवा • एकता • संघर्ष",
    orgLocation: "बोरीवली पश्चिम, मुंबई",

    // Navigation Links
    navHome: "मुखपृष्ठ",
    navAbout: "हमारे बारे में",
    navOurWork: "हमारे कार्य",
    navArtStore: "कला और सेवा",
    navImpact: "प्रभाव",
    navEvents: "कार्यक्रम",
    navContact: "संपर्क करें",
    navNature: "पर्यावरण व प्रकृति",
    navGetInvolved: "जुड़ें",
    navDonate: "सहयोग करें",
    navAdmin: "प्रशासन पोर्टल",
    navMenu: "मेनू",
    navClose: "बंद करें",

    // Quick Actions
    btnCall: "कॉल करें",
    btnCallHelpline: "हेल्पलाइन कॉल",
    btnWhatsApp: "व्हाट्सएप",
    btnWhatsAppSupport: "व्हाट्सएप समन्वय",
    btnDonate: "सहयोग",
    btnDonateNow: "सहयोग करें (दान)",
    btnSupportMission: "हमारे मिशन को सहयोग दें",
    btnLearnMore: "और जानें",
    btnViewPrograms: "सभी कार्य देखें",
    btnVolunteer: "स्वयंसेवक बनें",
    btnSendMessage: "संदेश भेजें",
    btnExploreArt: "कला दीर्घा देखें",
    btnReadStory: "पूरी कहानी पढ़ें",

    // Themes & Languages
    themeLight: "लाइट मोड",
    themeDark: "डार्क मोड",
    langEnglish: "English",
    langHindi: "हिंदी",
    langSwitch: "भाषा / Language",

    // Common Badges
    badgeMovement: "अभियान स्थापना 2005 • पंजीकृत 2013",
    badgeRegNo: "पंजीकरण संख्या E-30004/MUMBAI",
    badge80G: "80G कर छूट मान्य (50%)",
    badgeVerified: "सत्यापित सार्वजनिक ट्रस्ट",
    badgeEmergency: "24/7 आपातकालीन सहायता",

    // Stats Labels
    statYears: "वर्षों की निरंतर सेवा",
    statYearsSub: "2005 - 2026 निरंतर जमीनी कार्य",
    statWorkers: "श्रमिकों व परिवारों को सहायता",
    statWorkersSub: "मुंबई और महाराष्ट्र संभाग में",
    statScreenings: "नेत्र जांच व स्वास्थ्य शिविर",
    statScreeningsSub: "निःशुल्क जांच, दवा व चश्मा वितरण",
    statHelpline: "आपातकालीन राहत डेस्क",
    statHelplineSub: "24/7 सक्रिय हेल्पलाइन डेस्क",

    // Homepage - Hero Slides
    hero1Eyebrow: "सेवा • सशक्तिकरण • परिवर्तन",
    hero1Title: "आशा का संचार, जीवन संवारना और समुदायों का सशक्तिकरण",
    hero1Desc: "प्रवासी परिवारों के साथ खड़े रहना, बच्चों को शिक्षा से सशक्त बनाना, बुजुर्गों की सेवा और झारखंड की प्राकृतिक धरोहर का संरक्षण।",
    hero1PrimaryCta: "हमारे कार्य देखें",
    hero1SecondaryCta: "स्वयंसेवक बनें",
    hero1Badge: "प्राकृतिक वानिकी एवं सतत समुदाय",

    hero2Eyebrow: "बाल संरक्षण एवं साक्षरता",
    hero2Title: "शिक्षा का प्रकाश, उज्ज्वल भविष्य की नई शुरुआत",
    hero2Desc: "बाल कल्याण समिति (CWC) के समन्वय से शिक्षा प्रोत्साहन किट, स्कूल बैग, पुस्तकें व शिक्षण सामग्री वितरण अभियान।",
    hero2PrimaryCta: "बाल कल्याण कार्यक्रम",
    hero2SecondaryCta: "शिक्षा में सहयोग दें",
    hero2Badge: "बाल कल्याण समिति (CWC) सहयोग",

    hero3Eyebrow: "श्रमिक अधिकार एवं सामाजिक सुरक्षा",
    hero3Title: "श्रमिकों की सुरक्षा, सम्मान और न्याय का संकल्प",
    hero3Desc: "महाराष्ट्र में असंगठित प्रवासी श्रमिकों के साथ अटूट एकजुटता। अस्पताल आपातकाल, औद्योगिक दुर्घटना मुआवजा और सुरक्षित गृह वापसी समन्वय।",
    hero3PrimaryCta: "24/7 हेल्पलाइन सहायता",
    hero3SecondaryCta: "अस्पताल सहायता डेस्क",
    hero3Badge: "24/7 सक्रिय संकट हेल्पलाइन: +91 78080 08058",

    hero4Eyebrow: "स्वास्थ्य सेवा एवं वरिष्ठ कल्याण",
    hero4Title: "दृष्टि बहाली, वरिष्ठ नागरिकों की आत्मीय सेवा",
    hero4Desc: "बोरीवली पश्चिम में 100 से अधिक बुजुर्गों के लिए मासिक निःशुल्क नेत्र जांच, मोतियाबिंद परामर्श, चश्मा व दवा वितरण शिविर।",
    hero4PrimaryCta: "स्वास्थ्य शिविर देखें",
    hero4SecondaryCta: "वरिष्ठ स्वास्थ्य सहयोग",
    hero4Badge: "मासिक निःशुल्क नेत्र जांच शिविर",

    // Homepage - About Intro
    hpAboutBadge: "दो दशकों की समर्पित जमीनी सेवा",
    hpAboutHeading: "प्रवासी श्रमिकों और असहाय परिवारों के लिए एक अटूट संबल",
    hpAboutP1: "वर्ष 2005 में स्थापित और 2013 में मुंबई पब्लिक ट्रस्ट अधिनियम के तहत पंजीकृत, झारखंडवासी परिवर्तन संघ (JPS) मुंबई संभाग में रहने वाले झारखंडी प्रवासियों, असंगठित श्रमिकों, बुजुर्गों और बच्चों के लिए सबसे विश्वसनीय जमीनी सहारा है।",
    hpAboutP2: "संस्थापक अध्यक्ष श्री अरविंद आर्य के नेतृत्व में, हमारे स्वयंसेवक 24/7 आपातकालीन राहत डेस्क संचालित करते हैं, गंभीर अस्पताल मामलों में सहायता करते हैं, बाल कल्याण समिति के साथ मिलकर शिक्षा किट बांटते हैं और पर्यावरण संरक्षण के लिए वृक्षारोपण करते हैं।",
    hpAboutBtnHistory: "हमारी पूरी यात्रा पढ़ें",
    hpAboutBtnFounder: "संस्थापक अध्यक्ष का संदेश",

    // Homepage - Programs Header & Items
    hpProgBadge: "प्रमुख सेवा स्तंभ",
    hpProgHeading: "छह प्रमुख क्षेत्रों में समर्पित जनकल्याणकारी कार्य",
    hpProgDesc: "अस्पताल में आपातकालीन राहत से लेकर सांस्कृतिक स्वाभिमान तक, हमारा हर कार्य समाज में सम्मान और सुरक्षा स्थापित करता है।",

    prog1Title: "प्रवासी श्रमिक संकट सहायता एवं अस्पताल सेवा",
    prog1Desc: "मुंबई में असहाय, बीमार या दुर्घटनाग्रस्त प्रवासी श्रमिकों के लिए 24/7 राहत। निःशुल्क कानूनी सलाह, अस्पताल व्यवस्था और सुरक्षित गृह वापसी।",
    prog1Badge: "24/7 संकट सहायता",

    prog2Title: "वरिष्ठ नागरिक स्वास्थ्य एवं आत्मीय देखभाल",
    prog2Desc: "बोरीवली पश्चिम में 100 से अधिक बुजुर्गों के लिए निःशुल्क नेत्र परीक्षण, मोतियाबिंद जांच, चश्मा एवं दवा वितरण शिविर।",
    prog2Badge: "निःशुल्क नेत्र जांच",

    prog3Title: "बाल संरक्षण एवं शिक्षा प्रोत्साहन किट",
    prog3Desc: "बाल कल्याण समिति (CWC) के साथ मिलकर जरूरतमंद बच्चों की सुरक्षा और स्कूल बैग, कॉपियां व पुस्तकें वितरण।",
    prog3Badge: "CWC साझेदारी",

    prog4Title: "निःशुल्क चिकित्सा एवं स्वास्थ्य जांच शिविर",
    prog4Desc: "अनुभवी चिकित्सकों की देखरेख में नियमित स्वास्थ्य शिविर, आवश्यक जांच, दवा वितरण और स्वास्थ्य जागरूकता कार्यक्रम।",
    prog4Badge: "निःशुल्क दवाएं",

    prog5Title: "महिला एवं पारिवारिक कल्याण राहत",
    prog5Desc: "कठिन परिस्थितियों में फंसी प्रवासी महिलाओं और परिवारों के लिए सूखा राशन, वस्त्र वितरण और सामाजिक परामर्श।",
    prog5Badge: "पारिवारिक राहत",

    prog6Title: "आदिवासी संस्कृति एवं सांस्कृतिक पहचान",
    prog6Desc: "भगवान बिरसा मुंडा जयंती, करमा, सरहुल जैसे पारंपरिक पर्वों का आयोजन और सोहराई लोक कला का संवर्धन।",
    prog6Badge: "सांस्कृतिक स्वाभिमान",

    // Homepage - Emergency Crisis Banner
    hpCrisisBadge: "24/7 आपातकालीन सहायता",
    hpCrisisHeading: "मुंबई में किसी चिकित्सा, औद्योगिक या कानूनी संकट में हैं?",
    hpCrisisDesc: "हमारी समर्पित राहत टीम मुंबई के सरकारी व निजी अस्पतालों में पहुंचकर असहाय प्रवासी श्रमिकों की तत्काल मदद करती है।",
    hpCrisisCallBtn: "हेल्पलाइन कॉल: 78080 08058",
    hpCrisisWhatsAppBtn: "व्हाट्सएप आपातकालीन डेस्क",

    // Homepage - Nature Section
    hpNatureBadge: "पर्यावरण व जल संरक्षण",
    hpNatureHeading: "झारखंड के वनों, मिट्टी और प्राकृतिक जल स्रोतों का संरक्षण",
    hpNatureDesc: "देशी साल, करंज और पलाश का वृक्षारोपण, पवित्र सरना स्थलों का संरक्षण और ग्रामीण जल संचयन अभियान।",
    hpNatureCard1Title: "देशी साल वृक्षारोपण अभियान",
    hpNatureCard1Desc: "पश्चिमी सिंहभूम के पर्वतीय ढलानों पर देशी साल और महुआ के पौधों का रोपण व संरक्षण।",
    hpNatureCard2Title: "पवित्र सरना स्थल संरक्षण",
    hpNatureCard2Desc: "आदिवासी समाज के पारंपरिक पवित्र वनों को व्यावसायिक कटाई से बचाने का संकल्प।",
    hpNatureCard3Title: "प्राकृतिक जल संचयन एवं तटबंध",
    hpNatureCard3Desc: "नदी-नालों के किनारों पर करंज और पलाश लगाकर मिट्टी का कटाव रोकने का प्रयास।",

    // Homepage - Charity Art
    hpArtBadge: "कला और सेवा",
    hpArtHeading: "पारंपरिक सोहराई कला से मानवीय सहायता",
    hpArtDesc: "स्थानीय लोक कलाकारों की कलाकृतियों से मिलने वाला सहयोग सीधे राहत कार्यों में उपयोग होता है।",

    // Homepage - Volunteer CTA
    hpVolEyebrow: "परिवर्तन के संवाहक बनें",
    hpVolHeading: "सेवा में हाथ बढ़ाएं और जरूरतमंदों का जीवन संवारें",
    hpVolDesc: "सच्चा बदलाव तभी संभव है जब समाज के संवेदनशील लोग एक साथ खड़े हों। आज ही हमारे स्वयंसेवक बनें।",
    hpVolBtnJoin: "स्वयंसेवक बनें",
    hpVolBtnDonate: "दान देकर सहयोग करें",

    // About Page
    aboutHeadline: "दो दशकों की सेवा, एकता और सांस्कृतिक स्वाभिमान",
    aboutSubheadline: "मुंबई में झारखंडियों के लिए जीवनरेखा और महाराष्ट्र व झारखंड के बीच अटूट भाईचारे का निर्माण।",
    aboutFounderTitle: "संस्थापक अध्यक्ष का संदेश",
    aboutFounderName: "श्री अरविंद आर्य",
    aboutFounderRole: "संस्थापक अध्यक्ष, झारखंडवासी परिवर्तन संघ",
    aboutFounderQuote: "जब कोई श्रमिक अपने घर से हजारों मील दूर बीमार या असहाय होता है, तो उसे दया नहीं, सम्मान और अपनेपन की जरूरत होती है। यही JPS की आत्मा है।",
    aboutFounderMessage: "2005 से हमारा संकल्प रहा है कि मुंबई में किसी भी प्रवासी मजदूर को अकेलापन न महसूस हो। हम उनके इलाज, बच्चों की पढ़ाई और सांस्कृतिक सम्मान के लिए हर पल खड़े हैं।",
    aboutMissionTitle: "हमारा उद्देश्य",
    aboutMissionDesc: "असंगठित प्रवासी श्रमिकों और उनके परिवारों को सामाजिक, कानूनी, चिकित्सीय और शैक्षिक सुरक्षा प्रदान करना।",
    aboutVisionTitle: "हमारी दृष्टि",
    aboutVisionDesc: "एक ऐसा सशक्त समाज जहां हर प्रवासी श्रमिक गरिमा से जिए, बच्चों को बेहतर शिक्षा मिले और आदिवासी संस्कृति का मान बढ़े।",

    // Donate Page
    donateHeadline: "ईमानदारी और कानूनी पारदर्शिता के साथ सहयोग",
    donateSubheadline: "आपका योगदान असहाय श्रमिकों के अस्पताल उपचार, बच्चों की शिक्षा किट, वरिष्ठ नेत्र जांच शिविर और वृक्षारोपण में उपयोग होता है।",
    donateBankTitle: "आधिकारिक बैंक खाता एवं 80G कर छूट विवरण",
    donateBankName: "बैंक ऑफ इंडिया",
    donateAccountName: "झारखंडवासी परिवर्तन संघ",
    donate80GNotice: "आयकर अधिनियम की धारा 80G के तहत सभी दान पर 50% कर छूट मान्य है।",
    donateTaxExemption: "80G के तहत 50% कर छूट मान्य",
    donatePanNotice: "प्रत्येक दान पर पैन व 80G रसीद जारी की जाती है।",
    calcTitle: "अपनी सहयोग राशि चुनें",
    calcPurpose: "सहयोग का उद्देश्य चुनें:",
    calcAllCauses: "सभी सामुदायिक कार्य",
    calcMigrantAid: "प्रवासी संकट सहायता",
    calcChildLiteracy: "बाल शिक्षा किट",
    calcSeniorHealth: "वरिष्ठ स्वास्थ्य शिविर",
    calcEcology: "वृक्षारोपण एवं पर्यावरण",

    // Contact Page
    contactHeadline: "हमारे कार्यालयों से संपर्क करें",
    contactSubheadline: "हम मुंबई बोरीवली पश्चिम स्थित मुख्य कार्यालय और गिरिडीह झारखंड शाखा के साथ 24/7 आपातकालीन सेवा संचालित करते हैं।",
    contactEmergencyTitle: "24-घंटे आपातकालीन सहायता सेवा",
    contactEmergencyHeading: "क्या आप किसी तत्काल चिकित्सा या संकट में हैं?",
    contactEmergencyDesc: "तत्काल अस्पताल भर्ती, दुर्घटना या संकट के लिए हमारी आपातकालीन हेल्पलाइन पर तुरंत संपर्क करें।",
    contactFormTitle: "हमें संदेश भेजें",
    contactFormName: "आपका पूरा नाम",
    contactFormPhone: "मोबाइल नंबर",
    contactFormEmail: "ईमेल पता",
    contactFormSubject: "विषय / कारण",
    contactFormMessage: "आपका संदेश",
    contactFormSubmit: "संदेश भेजें",
    contactFormSubmitting: "संदेश भेजा जा रहा है...",
    contactFormSuccess: "धन्यवाद! आपका संदेश हमारे बोरीवली कार्यालय को प्राप्त हो गया है।",

    // Events Page
    eventsHeadline: "कार्यक्रम, जनसभाएं एवं मीडिया कवरेज",
    eventsSubheadline: "मुंबई और झारखंड में सामूहिक प्रयास, सांस्कृतिक धरोहर, स्वास्थ्य शिविर और मीडिया में हमारी पहचान।",
    eventsSpotlightTitle: "प्रवासी झारखंडवासी सम्मेलन 2026",
    eventsSpotlightDesc: "वीर सावरकर उद्यान, बोरीवली (प.) - श्री अरविंद आर्य, विधायक संजय उपाध्याय, पूर्व सांसद गोपाल शेट्टी एवं देवेंद्र महतो द्वारा प्रवासी कल्याण ज्ञापन प्रस्तुत किया गया।",

    // Footer
    footerDesc: "श्री अरविंद आर्य के नेतृत्व में स्थापित, झारखंडवासी परिवर्तन संघ (JPS) बोरीवली पश्चिम, मुंबई स्थित एक पंजीकृत सामाजिक कल्याण संस्था है। जो प्रवासी श्रमिक सहायता, वरिष्ठ नागरिक स्वास्थ्य, बाल शिक्षा और पर्यावरण संरक्षण के लिए समर्पित है।",
    footerRegisteredOrg: "पंजीकृत जमीनी सामाजिक कल्याण संगठन",
    footerStayConnected: "जमीनी गतिविधियों से जुड़े रहें",
    footerSubscribeSuccess: "धन्यवाद! आप JPS सामुदायिक बुलेटिन से जुड़ गए हैं।",
    footerSubscribePlaceholder: "अपडेट के लिए ईमेल दर्ज करें...",
    footerQuickLinks: "त्वरित लिंक",
    footerCorePrograms: "प्रमुख सेवा स्तंभ",
    footerContactOffices: "संपर्क एवं आधिकारिक कार्यालय",
    footerHeadOffice: "पंजीकृत मुख्य कार्यालय (मुंबई)",
    footerBranchOffice: "शाखा कार्यालय (गिरिडीह)",
    footerHelplineLabel: "24/7 पंजीकृत सामुदायिक एवं संकट हेल्पलाइन",
    footerTaxNotice: "बैंक एवं 80G कर छूट विवरण",
    footerCopyright: "© 2005–2026 झारखंडवासी परिवर्तन संघ (रजि.) | सेवा से परिवर्तन की ओर",
    footerBackToTop: "ऊपर जाएं",
    footerFoundingStory: "स्थापना की कहानी",
    footerEmergencyRedressal: "आपातकालीन निवारण",
    footerFinancialTransparency: "वित्तीय पारदर्शिता",

    // Preloader
    loadingText: "लोड हो रहा है",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default language is English ('en') as explicitly requested by user
  const [language, setLanguageState] = useState<Language>("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "hi" || saved === "en") {
        setLanguageState(saved);
      }
    } catch (e) {
      // Ignore localStorage errors
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.setAttribute("lang", lang);
    } catch (e) {}
  };

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "hi" : "en";
    setLanguage(nextLang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
