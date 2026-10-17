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

export function SiteContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize from localStorage or fallback to defaults
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Merge to guarantee new schema fields aren't missing
        setContent({
          ...defaultSiteContent,
          ...parsed,
          organization: {
            ...defaultSiteContent.organization,
            ...(parsed.organization || {}),
            bankDetails: {
              ...defaultSiteContent.organization.bankDetails,
              ...(parsed.organization?.bankDetails || {}),
            },
          },
          stats: {
            ...defaultSiteContent.stats,
            ...(parsed.stats || {}),
          },
          about: {
            ...defaultSiteContent.about,
            ...(parsed.about || {}),
          },
        });
      }
    } catch (e) {
      console.warn("Failed to read from localStorage:", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const saveToStorage = (newContent: SiteContent) => {
    setContent(newContent);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent));
      // Optionally notify any listeners
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
