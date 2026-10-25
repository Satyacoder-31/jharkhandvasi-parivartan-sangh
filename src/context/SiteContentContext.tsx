"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { SiteContent, defaultSiteContent } from "@/data/defaultSiteContent";

interface SiteContentContextType {
  content: SiteContent;
  updateContent: (newContent: SiteContent) => void;
  updateSection: <K extends keyof SiteContent>(section: K, data: SiteContent[K]) => void;
  resetContent: () => void;
  exportContent: () => void;
  importContent: (jsonData: string) => boolean;
  isLoaded: boolean;
}

const STORAGE_KEY = "jps_site_content_v1";

const SiteContentContext = createContext<SiteContentContextType | undefined>(undefined);

function mergeWithDefaults(parsed: any): SiteContent {
  if (!parsed || typeof parsed !== "object") return defaultSiteContent;
  return {
    ...defaultSiteContent,
    ...parsed,
    organization: {
      ...defaultSiteContent.organization,
      ...(parsed.organization || {}),
      bankDetails: {
        ...defaultSiteContent.organization.bankDetails,
        ...(parsed.organization?.bankDetails || {}),
      },
      offices: parsed.organization?.offices || defaultSiteContent.organization.offices,
    },
    stats: {
      ...defaultSiteContent.stats,
      ...(parsed.stats || {}),
    },
    homepage: {
      ...defaultSiteContent.homepage,
      ...(parsed.homepage || {}),
      stats: {
        ...defaultSiteContent.homepage.stats,
        ...(parsed.homepage?.stats || {}),
        stat1: { ...defaultSiteContent.homepage.stats.stat1, ...(parsed.homepage?.stats?.stat1 || {}) },
        stat2: { ...defaultSiteContent.homepage.stats.stat2, ...(parsed.homepage?.stats?.stat2 || {}) },
        stat3: { ...defaultSiteContent.homepage.stats.stat3, ...(parsed.homepage?.stats?.stat3 || {}) },
        stat4: { ...defaultSiteContent.homepage.stats.stat4, ...(parsed.homepage?.stats?.stat4 || {}) },
      },
      aboutIntro: {
        ...defaultSiteContent.homepage.aboutIntro,
        ...(parsed.homepage?.aboutIntro || {}),
      },
      programsHeader: {
        ...defaultSiteContent.homepage.programsHeader,
        ...(parsed.homepage?.programsHeader || {}),
      },
      natureSection: {
        ...defaultSiteContent.homepage.natureSection,
        ...(parsed.homepage?.natureSection || {}),
      },
      crisisSection: {
        ...defaultSiteContent.homepage.crisisSection,
        ...(parsed.homepage?.crisisSection || {}),
      },
      artSpotlight: {
        ...defaultSiteContent.homepage.artSpotlight,
        ...(parsed.homepage?.artSpotlight || {}),
      },
      projectHubs: {
        ...defaultSiteContent.homepage.projectHubs,
        ...(parsed.homepage?.projectHubs || {}),
      },
      volunteerCta: {
        ...defaultSiteContent.homepage.volunteerCta,
        ...(parsed.homepage?.volunteerCta || {}),
      },
    },
    heroSlides: parsed.heroSlides || defaultSiteContent.heroSlides,
    about: {
      ...defaultSiteContent.about,
      ...(parsed.about || {}),
      leadership: (() => {
        const storedLeaders = Array.isArray(parsed.about?.leadership) ? parsed.about.leadership : [];
        const defaultLeaders = defaultSiteContent.about.leadership;
        const storedIds = new Set(storedLeaders.map((m: { id: string }) => m.id));
        const missingDefaults = defaultLeaders.filter((m) => !storedIds.has(m.id));
        return storedLeaders.length > 0 ? [...storedLeaders, ...missingDefaults] : defaultLeaders;
      })(),
    },
    programs: parsed.programs || defaultSiteContent.programs,
    artStore:
      Array.isArray(parsed.artStore) && parsed.artStore.length > 0 && parsed.artStore[0].impact
        ? parsed.artStore
        : defaultSiteContent.artStore,
    events: parsed.events || defaultSiteContent.events,
    mediaGallery: parsed.mediaGallery || defaultSiteContent.mediaGallery,
  };
}

export function SiteContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage & listen for cross-tab or in-page updates
  useEffect(() => {
    const loadContent = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          setContent(mergeWithDefaults(parsed));
        }
      } catch (e) {
        console.warn("Failed to read from localStorage:", e);
      } finally {
        setIsLoaded(true);
      }
    };

    loadContent();

    const handleSync = () => {
      loadContent();
    };

    window.addEventListener("storage", handleSync);
    window.addEventListener("jps-content-updated", handleSync);
    return () => {
      window.removeEventListener("storage", handleSync);
      window.removeEventListener("jps-content-updated", handleSync);
    };
  }, []);

  const saveToStorage = (newContent: SiteContent) => {
    setContent(newContent);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent));
      window.dispatchEvent(new Event("jps-content-updated"));
    } catch (e) {
      console.error("Failed to save content to localStorage:", e);
    }
  };

  const updateContent = (newContent: SiteContent) => {
    saveToStorage(newContent);
  };

  const updateSection = <K extends keyof SiteContent>(section: K, data: SiteContent[K]) => {
    const updated = {
      ...content,
      [section]: data,
    };
    saveToStorage(updated);
  };

  const resetContent = () => {
    saveToStorage(defaultSiteContent);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  };

  const exportContent = () => {
    try {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(content, null, 2));
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `jps-website-backup-${new Date().toISOString().split("T")[0]}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    } catch (e) {
      console.error("Export failed:", e);
    }
  };

  const importContent = (jsonData: string): boolean => {
    try {
      const parsed = JSON.parse(jsonData);
      if (!parsed.organization || !parsed.heroSlides) {
        throw new Error("Invalid backup JSON format");
      }
      saveToStorage(parsed);
      return true;
    } catch (e) {
      console.error("Import error:", e);
      return false;
    }
  };

  return (
    <SiteContentContext.Provider
      value={{
        content,
        updateContent,
        updateSection,
        resetContent,
        exportContent,
        importContent,
        isLoaded,
      }}
    >
      {children}
    </SiteContentContext.Provider>
  );
}

export function useSiteContent() {
  const context = useContext(SiteContentContext);
  if (!context) {
    // Graceful fallback to defaultSiteContent if used outside provider
    return {
      content: defaultSiteContent,
      updateContent: () => {},
      updateSection: () => {},
      resetContent: () => {},
      exportContent: () => {},
      importContent: () => false,
      isLoaded: true,
    };
  }
  return context;
}
