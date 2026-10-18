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
    navAbout: "About",
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
    statYears: "Years Active",
    statYearsSub: "2005 - 2026 Continuous",
    statWorkers: "Workers Assisted",
    statWorkersSub: "Mumbai & Maharashtra",
    statDistricts: "Districts Covered",
    statDistrictsSub: "Across Jharkhand & MMR",
    statHelpline: "Helpline Active",
    statHelplineSub: "Dedicated Crisis Desk",

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
    statYears: "वर्षों की सेवा",
    statYearsSub: "2005 - 2026 निरंतर",
    statWorkers: "श्रमिकों को सहायता",
    statWorkersSub: "मुंबई और महाराष्ट्र",
    statDistricts: "जिले आच्छादित",
    statDistrictsSub: "झारखंड और मुंबई संभाग",
    statHelpline: "हेल्पलाइन सक्रिय",
    statHelplineSub: "समर्पित राहत डेस्क",

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
    setLanguage(language === "en" ? "hi" : "en");
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
