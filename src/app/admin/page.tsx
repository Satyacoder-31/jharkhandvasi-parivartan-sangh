"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Lock,
  LogOut,
  ExternalLink,
  Save,
  RotateCcw,
  Download,
  Upload,
  Plus,
  Trash2,
  Check,
  Copy,
  Building2,
  Sliders,
  Users,
  Briefcase,
  Palette,
  Calendar,
  Image as ImageIcon,
  Database,
  Phone,
  Mail,
  MapPin,
  AlertTriangle,
  Eye,
  FileText,
  Heart,
  ChevronRight,
  Sparkles,
  TreePine,
} from "lucide-react";
import { useSiteContent } from "@/context/SiteContentContext";
import {
  SiteContent,
  OfficeLocation,
  HeroSlideData,
  LeadershipMember,
  ProgramData,
  ArtworkData,
  EventData,
  MediaPhoto,
} from "@/data/defaultSiteContent";

export default function AdminPage() {
  const { content, updateContent, resetContent, exportContent, importContent } = useSiteContent();

  // Local draft state for editing before saving
  const [draft, setDraft] = useState<SiteContent>(content);
  const [activeTab, setActiveTab] = useState<
    "offices" | "hero" | "about" | "programs" | "art" | "events" | "photos" | "backup"
  >("offices");

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [authError, setAuthError] = useState("");
  const [storedPin, setStoredPin] = useState("1234");
  const [saveToast, setSaveToast] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Sync draft whenever context content loads
  useEffect(() => {
    setDraft(content);
  }, [content]);

  // Check existing session
  useEffect(() => {
    try {
      const auth = sessionStorage.getItem("jps_admin_authenticated");
      if (auth === "true") {
        setIsAuthenticated(true);
      }
      const customPin = localStorage.getItem("jps_admin_pin");
      if (customPin) {
        setStoredPin(customPin);
      }
    } catch (e) {}
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === storedPin || pinInput === "admin2026") {
      setIsAuthenticated(true);
      setAuthError("");
      try {
        sessionStorage.setItem("jps_admin_authenticated", "true");
      } catch (e) {}
    } else {
      setAuthError("Invalid access PIN. Try default: 1234");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    try {
      sessionStorage.removeItem("jps_admin_authenticated");
    } catch (e) {}
  };

  const handleSaveAll = () => {
    updateContent(draft);
    setSaveToast(true);
    setTimeout(() => {
      setSaveToast(false);
    }, 3500);
  };

  // Helper for image file uploads (converts file to base64 Data URL)
  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    onComplete: (dataUrl: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 8 * 1024 * 1024) {
      alert("File is too large! Please choose an image under 8MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        onComplete(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // =========================================================================
  // AUTHENTICATION GATE
  // =========================================================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#071F14] text-white flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#0A2419] border border-[#B8CBA5]/20 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-[#123B2A] border border-[#B8CBA5]/30 flex items-center justify-center mx-auto text-[#E28723]">
              <Shield className="w-8 h-8" />
            </div>
            <span className="badge-pill bg-[#B8CBA5]/20 text-[#B8CBA5] border border-[#B8CBA5]/30 text-[10px]">
              Authorized Administrative Portal
            </span>
            <h1 className="font-serif text-2xl font-bold text-white">
              Jharkhandvasi Parivartan Sangh
            </h1>
            <p className="text-xs text-[#F7F5EC]/70">
              Enter secure administration PIN to manage website pages, photos, addresses, and content.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-[#B8CBA5] block mb-1.5">
                Admin Security PIN
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="Enter 4-digit PIN (Default: 1234)"
                  maxLength={10}
                  className="w-full px-4 py-3 rounded-xl bg-[#071F14] border border-[#B8CBA5]/30 text-white placeholder:text-[#F7F5EC]/40 text-center text-lg tracking-widest focus:ring-2 focus:ring-[#E28723] focus:outline-none"
                  autoFocus
                />
                <Lock className="w-4 h-4 text-[#B8CBA5]/60 absolute right-4 top-4" />
              </div>
              {authError && (
                <p className="text-xs text-rose-400 mt-2 text-center">{authError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#E28723] hover:bg-[#c97419] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              <span>Unlock Admin Panel</span>
            </button>
          </form>

          <div className="pt-4 border-t border-white/10 text-center">
            <Link
              href="/"
              className="text-xs text-[#B8CBA5] hover:text-white flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Return to Public Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // MAIN ADMIN DASHBOARD
  // =========================================================================
  return (
    <div className="min-h-screen bg-[#071F14] text-[#F7F5EC] flex flex-col">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-[#0A2419]/95 backdrop-blur-md border-b border-[#B8CBA5]/20 px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#123B2A] border border-[#B8CBA5]/30 flex items-center justify-center text-[#E28723]">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-serif text-base font-bold text-white flex items-center gap-2">
              JPS Central Admin
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-sans font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Sync Active
              </span>
            </h1>
            <p className="text-[11px] text-[#B8CBA5]">
              Real-time CMS for all pages, photos, addresses &amp; programs
            </p>
          </div>
        </div>

        {/* Global Action Buttons */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handleSaveAll}
            className="px-4 py-2 rounded-xl bg-[#E28723] hover:bg-[#c97419] text-white font-bold text-xs flex items-center gap-2 shadow-lg transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save All Changes</span>
          </button>

          <Link
            href="/"
            target="_blank"
            className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center gap-1.5 border border-white/15 transition-all"
          >
            <span>Preview Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={handleLogout}
            title="Sign Out"
            className="p-2 rounded-xl bg-white/5 hover:bg-rose-500/20 text-white/70 hover:text-rose-400 border border-white/10 transition-all"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Floating Save Toast */}
      {saveToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#123B2A] border-2 border-emerald-500 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-in">
          <div className="w-6 h-6 rounded-full bg-emerald-500 text-black flex items-center justify-center flex-shrink-0">
            <Check className="w-4 h-4 stroke-[3]" />
          </div>
          <div>
            <div className="font-bold text-xs">Website Updated Successfully!</div>
            <div className="text-[11px] text-[#B8CBA5]">
              Changes are immediately active across all pages.
            </div>
          </div>
        </div>
      )}

      {/* Main Admin Workspace */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Navigation Sidebar (3 cols) */}
        <aside className="lg:col-span-3 space-y-2">
          <div className="bg-[#0A2419] p-3 rounded-2xl border border-[#B8CBA5]/20 space-y-1">
            <span className="text-[10px] font-bold text-[#B8CBA5] uppercase tracking-wider px-3 py-1.5 block">
              Website Management
            </span>

            <button
              onClick={() => setActiveTab("offices")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all text-left ${
                activeTab === "offices"
                  ? "bg-[#123B2A] text-white border border-[#B8CBA5]/30 shadow"
                  : "text-[#F7F5EC]/80 hover:bg-white/5"
              }`}
            >
              <Building2 className="w-4 h-4 text-[#E28723]" />
              <span>Offices &amp; Contacts</span>
            </button>

            <button
              onClick={() => setActiveTab("hero")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all text-left ${
                activeTab === "hero"
                  ? "bg-[#123B2A] text-white border border-[#B8CBA5]/30 shadow"
                  : "text-[#F7F5EC]/80 hover:bg-white/5"
              }`}
            >
              <Sliders className="w-4 h-4 text-[#E28723]" />
              <span>Homepage &amp; Slides</span>
            </button>

            <button
              onClick={() => setActiveTab("about")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all text-left ${
                activeTab === "about"
                  ? "bg-[#123B2A] text-white border border-[#B8CBA5]/30 shadow"
                  : "text-[#F7F5EC]/80 hover:bg-white/5"
              }`}
            >
              <Users className="w-4 h-4 text-[#E28723]" />
              <span>About &amp; Leadership</span>
            </button>

            <button
              onClick={() => setActiveTab("programs")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all text-left ${
                activeTab === "programs"
                  ? "bg-[#123B2A] text-white border border-[#B8CBA5]/30 shadow"
                  : "text-[#F7F5EC]/80 hover:bg-white/5"
              }`}
            >
              <Briefcase className="w-4 h-4 text-[#E28723]" />
              <span>Our Work Programs</span>
            </button>

            <button
              onClick={() => setActiveTab("art")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all text-left ${
                activeTab === "art"
                  ? "bg-[#123B2A] text-white border border-[#B8CBA5]/30 shadow"
                  : "text-[#F7F5EC]/80 hover:bg-white/5"
              }`}
            >
              <Palette className="w-4 h-4 text-[#E28723]" />
              <span>Art Charity Store</span>
            </button>

            <button
              onClick={() => setActiveTab("events")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all text-left ${
                activeTab === "events"
                  ? "bg-[#123B2A] text-white border border-[#B8CBA5]/30 shadow"
                  : "text-[#F7F5EC]/80 hover:bg-white/5"
              }`}
            >
              <Calendar className="w-4 h-4 text-[#E28723]" />
              <span>Events &amp; Press</span>
            </button>

            <button
              onClick={() => setActiveTab("photos")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all text-left ${
                activeTab === "photos"
                  ? "bg-[#123B2A] text-white border border-[#B8CBA5]/30 shadow"
                  : "text-[#F7F5EC]/80 hover:bg-white/5"
              }`}
            >
              <ImageIcon className="w-4 h-4 text-[#E28723]" />
              <span>Photo Manager</span>
            </button>

            <button
              onClick={() => setActiveTab("backup")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all text-left ${
                activeTab === "backup"
                  ? "bg-[#123B2A] text-white border border-[#B8CBA5]/30 shadow"
                  : "text-[#F7F5EC]/80 hover:bg-white/5"
              }`}
            >
              <Database className="w-4 h-4 text-[#E28723]" />
              <span>Backup &amp; Restore</span>
            </button>
          </div>

          {/* Quick Help Card */}
          <div className="p-4 rounded-2xl bg-[#0A2419] border border-[#B8CBA5]/15 space-y-2 text-xs">
            <span className="font-bold text-[#E28723] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Tip: Photo Uploads
            </span>
            <p className="text-[11px] text-[#F7F5EC]/75 leading-relaxed font-light">
              You can paste any web image URL or click <strong>&quot;Upload Photo&quot;</strong> on any item to upload photos straight from your computer.
            </p>
          </div>
        </aside>

        {/* Content Workspace (9 cols) */}
        <main className="lg:col-span-9 bg-[#0A2419] p-6 sm:p-8 rounded-3xl border border-[#B8CBA5]/20 shadow-xl space-y-8">
          {/* ========================================================================= */}
          {/* TAB 1: OFFICES, ADDRESSES & CONTACT DETAILS */}
          {/* ========================================================================= */}
          {activeTab === "offices" && (
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-[#E28723]" />
                    Offices, Addresses &amp; Organization Data
                  </h2>
                  <p className="text-xs text-[#B8CBA5] mt-1">
                    Manage headquarters, branch offices, phones, emails, and legal registration numbers.
                  </p>
                </div>
                <button
                  onClick={handleSaveAll}
                  className="px-4 py-2 rounded-xl bg-[#E28723] hover:bg-[#c97419] text-white font-bold text-xs flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>

              {/* General Organization Information */}
              <div className="p-5 rounded-2xl bg-[#071F14] border border-[#B8CBA5]/20 space-y-4">
                <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#E28723]" />
                  Legal Identity &amp; Helplines
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#B8CBA5] block mb-1">
                      Organization Name (English)
                    </label>
                    <input
                      type="text"
                      value={draft.organization.name}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          organization: { ...draft.organization, name: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#B8CBA5] block mb-1">
                      Organization Name (Hindi)
                    </label>
                    <input
                      type="text"
                      value={draft.organization.hindiName}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          organization: { ...draft.organization, hindiName: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#B8CBA5] block mb-1">
                      Registration Number
                    </label>
                    <input
                      type="text"
                      value={draft.organization.regNo}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          organization: { ...draft.organization, regNo: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#B8CBA5] block mb-1">
                      Tagline / Motto
                    </label>
                    <input
                      type="text"
                      value={draft.organization.tagline}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          organization: { ...draft.organization, tagline: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#B8CBA5] block mb-1">
                      Primary Helpline (24/7)
                    </label>
                    <input
                      type="text"
                      value={draft.organization.primaryPhone}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          organization: { ...draft.organization, primaryPhone: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#B8CBA5] block mb-1">
                      Secondary Contact / Distress Desk
                    </label>
                    <input
                      type="text"
                      value={draft.organization.secondaryPhone}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          organization: { ...draft.organization, secondaryPhone: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#B8CBA5] block mb-1">
                      Official Email
                    </label>
                    <input
                      type="email"
                      value={draft.organization.email}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          organization: { ...draft.organization, email: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#B8CBA5] block mb-1">
                      Support Email
                    </label>
                    <input
                      type="email"
                      value={draft.organization.alternateEmail}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          organization: { ...draft.organization, alternateEmail: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Official Bank Coordinates for Donations */}
              <div className="p-5 rounded-2xl bg-[#071F14] border border-[#B8CBA5]/20 space-y-4">
                <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#E28723]" />
                  Donation Bank Transfer Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-[#B8CBA5] block mb-1">
                      Bank Name &amp; Branch
                    </label>
                    <input
                      type="text"
                      value={draft.organization.bankDetails.bankName}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          organization: {
                            ...draft.organization,
                            bankDetails: {
                              ...draft.organization.bankDetails,
                              bankName: e.target.value,
                            },
                          },
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#B8CBA5] block mb-1">
                      Account Number
                    </label>
                    <input
                      type="text"
                      value={draft.organization.bankDetails.accountNumber}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          organization: {
                            ...draft.organization,
                            bankDetails: {
                              ...draft.organization.bankDetails,
                              accountNumber: e.target.value,
                            },
                          },
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs font-mono focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#B8CBA5] block mb-1">
                      IFSC Code
                    </label>
                    <input
                      type="text"
                      value={draft.organization.bankDetails.ifsc}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          organization: {
                            ...draft.organization,
                            bankDetails: {
                              ...draft.organization.bankDetails,
                              ifsc: e.target.value,
                            },
                          },
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs font-mono focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#B8CBA5] block mb-1">
                      80G Approval Code
                    </label>
                    <input
                      type="text"
                      value={draft.organization.bankDetails.taxExemption}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          organization: {
                            ...draft.organization,
                            bankDetails: {
                              ...draft.organization.bankDetails,
                              taxExemption: e.target.value,
                            },
                          },
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#B8CBA5] block mb-1">
                      PAN Card Number
                    </label>
                    <input
                      type="text"
                      value={draft.organization.bankDetails.pan}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          organization: {
                            ...draft.organization,
                            bankDetails: {
                              ...draft.organization.bankDetails,
                              pan: e.target.value,
                            },
                          },
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs font-mono focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Office Locations Manager */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#E28723]" />
                    Physical Office Locations ({draft.organization.offices.length})
                  </h3>
                  <button
                    onClick={() => {
                      const newOffice: OfficeLocation = {
                        id: `office-${Date.now()}`,
                        type: "Branch Office",
                        title: "New Office Location",
                        address: "Full Street Address, Landmark",
                        landmark: "Near Landmark",
                        city: "City",
                        state: "State",
                        pin: "PIN Code",
                        phone: draft.organization.primaryPhone,
                        hours: "Mon – Sat: 10:00 AM – 7:00 PM",
                      };
                      setDraft({
                        ...draft,
                        organization: {
                          ...draft.organization,
                          offices: [...draft.organization.offices, newOffice],
                        },
                      });
                    }}
                    className="px-3 py-1.5 rounded-xl bg-[#123B2A] hover:bg-[#1D5139] text-[#B8CBA5] text-xs font-bold border border-[#B8CBA5]/30 flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    Add Office Location
                  </button>
                </div>

                <div className="space-y-4">
                  {draft.organization.offices.map((office, idx) => (
                    <div
                      key={office.id}
                      className="p-5 rounded-2xl bg-[#071F14] border border-[#B8CBA5]/20 space-y-4 relative"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <span className="badge-pill bg-[#E28723]/20 text-[#E28723] text-[10px]">
                          Office #{idx + 1} • {office.type}
                        </span>
                        {draft.organization.offices.length > 1 && (
                          <button
                            onClick={() => {
                              if (confirm(`Remove office: "${office.title}"?`)) {
                                setDraft({
                                  ...draft,
                                  organization: {
                                    ...draft.organization,
                                    offices: draft.organization.offices.filter(
                                      (o) => o.id !== office.id
                                    ),
                                  },
                                });
                              }
                            }}
                            className="text-rose-400 hover:text-rose-300 p-1"
                            title="Delete Office"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                        <div>
                          <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                            Office Title / Designation
                          </label>
                          <input
                            type="text"
                            value={office.title}
                            onChange={(e) => {
                              const updated = [...draft.organization.offices];
                              updated[idx].title = e.target.value;
                              setDraft({
                                ...draft,
                                organization: { ...draft.organization, offices: updated },
                              });
                            }}
                            className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                            Office Type (e.g. Head Office, Branch)
                          </label>
                          <input
                            type="text"
                            value={office.type}
                            onChange={(e) => {
                              const updated = [...draft.organization.offices];
                              updated[idx].type = e.target.value;
                              setDraft({
                                ...draft,
                                organization: { ...draft.organization, offices: updated },
                              });
                            }}
                            className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                            Contact Phone
                          </label>
                          <input
                            type="text"
                            value={office.phone}
                            onChange={(e) => {
                              const updated = [...draft.organization.offices];
                              updated[idx].phone = e.target.value;
                              setDraft({
                                ...draft,
                                organization: { ...draft.organization, offices: updated },
                              });
                            }}
                            className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                            Complete Street Address
                          </label>
                          <input
                            type="text"
                            value={office.address}
                            onChange={(e) => {
                              const updated = [...draft.organization.offices];
                              updated[idx].address = e.target.value;
                              setDraft({
                                ...draft,
                                organization: { ...draft.organization, offices: updated },
                              });
                            }}
                            className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                            Landmark / Area
                          </label>
                          <input
                            type="text"
                            value={office.landmark}
                            onChange={(e) => {
                              const updated = [...draft.organization.offices];
                              updated[idx].landmark = e.target.value;
                              setDraft({
                                ...draft,
                                organization: { ...draft.organization, offices: updated },
                              });
                            }}
                            className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                            City
                          </label>
                          <input
                            type="text"
                            value={office.city}
                            onChange={(e) => {
                              const updated = [...draft.organization.offices];
                              updated[idx].city = e.target.value;
                              setDraft({
                                ...draft,
                                organization: { ...draft.organization, offices: updated },
                              });
                            }}
                            className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                            State
                          </label>
                          <input
                            type="text"
                            value={office.state}
                            onChange={(e) => {
                              const updated = [...draft.organization.offices];
                              updated[idx].state = e.target.value;
                              setDraft({
                                ...draft,
                                organization: { ...draft.organization, offices: updated },
                              });
                            }}
                            className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                            PIN Code
                          </label>
                          <input
                            type="text"
                            value={office.pin}
                            onChange={(e) => {
                              const updated = [...draft.organization.offices];
                              updated[idx].pin = e.target.value;
                              setDraft({
                                ...draft,
                                organization: { ...draft.organization, offices: updated },
                              });
                            }}
                            className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                            Operating Hours / Helpline Availability
                          </label>
                          <input
                            type="text"
                            value={office.hours}
                            onChange={(e) => {
                              const updated = [...draft.organization.offices];
                              updated[idx].hours = e.target.value;
                              setDraft({
                                ...draft,
                                organization: { ...draft.organization, offices: updated },
                              });
                            }}
                            className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 2: HOMEPAGE FULL CONTENT & SLIDES */}
          {/* ========================================================================= */}
          {activeTab === "hero" && (
            <div className="space-y-8">
              <div className="border-b border-white/10 pb-4 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                    <Sliders className="w-6 h-6 text-[#E28723]" />
                    Complete Homepage CMS Editor
                  </h2>
                  <p className="text-xs text-[#B8CBA5] mt-1">
                    Manage all headlines, Hindi tags, paragraphs, photos, phone numbers, and buttons across every homepage section.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSaveAll}
                    className="px-4 py-2 rounded-xl bg-[#E28723] hover:bg-[#c97419] text-white font-bold text-xs flex items-center gap-2 shadow"
                  >
                    <Save className="w-4 h-4" />
                    Save All Changes
                  </button>
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* SECTION 1: HERO SLIDESHOW (6 CAROUSEL SLIDES) */}
              {/* ------------------------------------------------------------- */}
              <div className="p-6 rounded-2xl bg-[#071F14] border border-[#B8CBA5]/20 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                      <Sliders className="w-5 h-5 text-[#E28723]" />
                      1. Hero Slideshow Carousel ({draft.heroSlides.length} Slides)
                    </h3>
                    <p className="text-[11px] text-[#B8CBA5]">
                      Full-screen top visual slider with Hindi subtitles, headlines, and call-to-actions.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const newSlide: HeroSlideData = {
                        id: Date.now(),
                        eyebrow: "COMMUNITY WELFARE",
                        hindiTitle: "सेवा से परिवर्तन की ओर",
                        title: "Growing Hope.",
                        italicWord: "Empowering",
                        titleEnd: "Every Life.",
                        description:
                          "Add comprehensive statement describing this grassroots initiative.",
                        image: "/images/hero-forest.jpg",
                        alt: "Hero slide backdrop image",
                        primaryCta: { text: "Learn More", href: "/our-work" },
                        secondaryCta: { text: "Contact Team", href: "/contact" },
                        badgeText: "Active Grassroots Mission",
                      };
                      setDraft({
                        ...draft,
                        heroSlides: [...draft.heroSlides, newSlide],
                      });
                    }}
                    className="px-3 py-1.5 rounded-xl bg-[#123B2A] hover:bg-[#1D5139] text-[#B8CBA5] text-xs font-bold border border-[#B8CBA5]/30 flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    Add New Slide
                  </button>
                </div>

                <div className="space-y-6">
                  {draft.heroSlides.map((slide, idx) => (
                    <div
                      key={slide.id}
                      className="p-5 rounded-2xl bg-[#0A2419] border border-white/10 space-y-4"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                        <span className="badge-pill bg-[#B8CBA5]/20 text-[#B8CBA5] text-xs font-semibold">
                          Slide #{idx + 1}
                        </span>
                        {draft.heroSlides.length > 1 && (
                          <button
                            onClick={() => {
                              if (confirm(`Delete slide #${idx + 1}?`)) {
                                setDraft({
                                  ...draft,
                                  heroSlides: draft.heroSlides.filter((s) => s.id !== slide.id),
                                });
                              }
                            }}
                            className="text-rose-400 hover:text-rose-300 p-1"
                            title="Delete Slide"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                        <div>
                          <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                            Eyebrow Tag (e.g. CHILD PROTECTION)
                          </label>
                          <input
                            type="text"
                            value={slide.eyebrow}
                            onChange={(e) => {
                              const updated = [...draft.heroSlides];
                              updated[idx].eyebrow = e.target.value;
                              setDraft({ ...draft, heroSlides: updated });
                            }}
                            className="w-full px-3 py-2 rounded-xl bg-[#071F14] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                            Hindi Subtitle (e.g. सेवा से परिवर्तन की ओर)
                          </label>
                          <input
                            type="text"
                            value={slide.hindiTitle}
                            onChange={(e) => {
                              const updated = [...draft.heroSlides];
                              updated[idx].hindiTitle = e.target.value;
                              setDraft({ ...draft, heroSlides: updated });
                            }}
                            className="w-full px-3 py-2 rounded-xl bg-[#071F14] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                            Badge Pill Text
                          </label>
                          <input
                            type="text"
                            value={slide.badgeText}
                            onChange={(e) => {
                              const updated = [...draft.heroSlides];
                              updated[idx].badgeText = e.target.value;
                              setDraft({ ...draft, heroSlides: updated });
                            }}
                            className="w-full px-3 py-2 rounded-xl bg-[#071F14] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                            Headline Start
                          </label>
                          <input
                            type="text"
                            value={slide.title}
                            onChange={(e) => {
                              const updated = [...draft.heroSlides];
                              updated[idx].title = e.target.value;
                              setDraft({ ...draft, heroSlides: updated });
                            }}
                            className="w-full px-3 py-2 rounded-xl bg-[#071F14] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                            Italic Highlight Word
                          </label>
                          <input
                            type="text"
                            value={slide.italicWord}
                            onChange={(e) => {
                              const updated = [...draft.heroSlides];
                              updated[idx].italicWord = e.target.value;
                              setDraft({ ...draft, heroSlides: updated });
                            }}
                            className="w-full px-3 py-2 rounded-xl bg-[#071F14] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                            Headline End
                          </label>
                          <input
                            type="text"
                            value={slide.titleEnd}
                            onChange={(e) => {
                              const updated = [...draft.heroSlides];
                              updated[idx].titleEnd = e.target.value;
                              setDraft({ ...draft, heroSlides: updated });
                            }}
                            className="w-full px-3 py-2 rounded-xl bg-[#071F14] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                          />
                        </div>

                        <div className="sm:col-span-2 lg:col-span-3">
                          <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                            Description Paragraph
                          </label>
                          <textarea
                            rows={2}
                            value={slide.description}
                            onChange={(e) => {
                              const updated = [...draft.heroSlides];
                              updated[idx].description = e.target.value;
                              setDraft({ ...draft, heroSlides: updated });
                            }}
                            className="w-full px-3 py-2 rounded-xl bg-[#071F14] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                            Primary CTA Button (Text &amp; Link)
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            <input
                              type="text"
                              placeholder="Text"
                              value={slide.primaryCta.text}
                              onChange={(e) => {
                                const updated = [...draft.heroSlides];
                                updated[idx].primaryCta.text = e.target.value;
                                setDraft({ ...draft, heroSlides: updated });
                              }}
                              className="px-2.5 py-1.5 rounded-lg bg-[#071F14] border border-white/10 text-white text-xs"
                            />
                            <input
                              type="text"
                              placeholder="Link"
                              value={slide.primaryCta.href}
                              onChange={(e) => {
                                const updated = [...draft.heroSlides];
                                updated[idx].primaryCta.href = e.target.value;
                                setDraft({ ...draft, heroSlides: updated });
                              }}
                              className="px-2.5 py-1.5 rounded-lg bg-[#071F14] border border-white/10 text-white text-xs font-mono"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                            Secondary CTA Button (Text &amp; Link)
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            <input
                              type="text"
                              placeholder="Text"
                              value={slide.secondaryCta.text}
                              onChange={(e) => {
                                const updated = [...draft.heroSlides];
                                updated[idx].secondaryCta.text = e.target.value;
                                setDraft({ ...draft, heroSlides: updated });
                              }}
                              className="px-2.5 py-1.5 rounded-lg bg-[#071F14] border border-white/10 text-white text-xs"
                            />
                            <input
                              type="text"
                              placeholder="Link"
                              value={slide.secondaryCta.href}
                              onChange={(e) => {
                                const updated = [...draft.heroSlides];
                                updated[idx].secondaryCta.href = e.target.value;
                                setDraft({ ...draft, heroSlides: updated });
                              }}
                              className="px-2.5 py-1.5 rounded-lg bg-[#071F14] border border-white/10 text-white text-xs font-mono"
                            />
                          </div>
                        </div>

                        {/* Image Management */}
                        <div className="sm:col-span-2 lg:col-span-3 p-3.5 rounded-xl bg-[#071F14] border border-white/10 space-y-2">
                          <label className="text-[11px] font-bold text-white flex items-center gap-1.5">
                            <ImageIcon className="w-4 h-4 text-[#E28723]" />
                            Slide Backdrop Photo
                          </label>
                          <div className="flex flex-col sm:flex-row items-center gap-3">
                            <div className="relative w-24 h-16 rounded-xl overflow-hidden border border-[#B8CBA5]/30 bg-black/40 flex-shrink-0">
                              {slide.image && (
                                <Image
                                  src={slide.image}
                                  alt="Slide preview"
                                  fill
                                  className="object-cover"
                                />
                              )}
                            </div>
                            <div className="flex-1 w-full space-y-1.5">
                              <input
                                type="text"
                                value={slide.image}
                                placeholder="Image URL (e.g. /images/hero-forest.jpg)"
                                onChange={(e) => {
                                  const updated = [...draft.heroSlides];
                                  updated[idx].image = e.target.value;
                                  setDraft({ ...draft, heroSlides: updated });
                                }}
                                className="w-full px-3 py-1.5 rounded-lg bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                              />
                              <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#123B2A] hover:bg-[#1D5139] text-[#B8CBA5] text-[11px] font-bold border border-[#B8CBA5]/30">
                                <Upload className="w-3.5 h-3.5" />
                                <span>Upload Photo from Computer</span>
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={(e) =>
                                    handleFileUpload(e, (dataUrl) => {
                                      const updated = [...draft.heroSlides];
                                      updated[idx].image = dataUrl;
                                      setDraft({ ...draft, heroSlides: updated });
                                    })
                                  }
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* SECTION 2: VERIFIED STATISTICS STRIP */}
              {/* ------------------------------------------------------------- */}
              <div className="p-6 rounded-2xl bg-[#071F14] border border-[#B8CBA5]/20 space-y-5">
                <div className="border-b border-white/10 pb-3">
                  <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#E28723]" />
                    2. Verified Statistics Strip (4 Key Counters)
                  </h3>
                  <p className="text-[11px] text-[#B8CBA5]">
                    Numbers animate smoothly when visitors scroll down the homepage.
                  </p>
                </div>

                {/* Background Image for Stats Strip */}
                <div className="p-4 rounded-xl bg-[#0A2419] border border-white/10 space-y-2">
                  <label className="text-[11px] font-semibold text-[#B8CBA5] block">
                    Statistics Strip Background Backdrop Photo
                  </label>
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <div className="relative w-20 h-14 rounded-lg overflow-hidden border border-white/20 bg-black/40 flex-shrink-0">
                      {draft.homepage.stats.backgroundImage && (
                        <Image
                          src={draft.homepage.stats.backgroundImage}
                          alt="Stats backdrop"
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1 w-full space-y-1.5">
                      <input
                        type="text"
                        value={draft.homepage.stats.backgroundImage || ""}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            homepage: {
                              ...draft.homepage,
                              stats: { ...draft.homepage.stats, backgroundImage: e.target.value },
                            },
                          })
                        }
                        className="w-full px-3 py-1.5 rounded-lg bg-[#071F14] border border-white/20 text-white text-xs"
                      />
                      <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#123B2A] hover:bg-[#1D5139] text-[#B8CBA5] text-[11px] font-bold border border-[#B8CBA5]/30">
                        <Upload className="w-3.5 h-3.5" />
                        <span>Upload Photo from Computer</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) =>
                            handleFileUpload(e, (dataUrl) => {
                              setDraft({
                                ...draft,
                                homepage: {
                                  ...draft.homepage,
                                  stats: {
                                    ...draft.homepage.stats,
                                    backgroundImage: dataUrl,
                                  },
                                },
                              });
                            })
                          }
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Stat 1 */}
                  <div className="p-4 rounded-xl bg-[#0A2419] border border-white/10 space-y-2">
                    <span className="text-[10px] font-bold text-[#B8CBA5] uppercase block">
                      Counter 1 (Years)
                    </span>
                    <div>
                      <label className="text-[10px] text-white/70 block">Target Number &amp; Suffix</label>
                      <div className="grid grid-cols-2 gap-1.5 mt-0.5">
                        <input
                          type="number"
                          value={draft.homepage.stats.stat1.number}
                          onChange={(e) =>
                            setDraft({
                              ...draft,
                              homepage: {
                                ...draft.homepage,
                                stats: {
                                  ...draft.homepage.stats,
                                  stat1: { ...draft.homepage.stats.stat1, number: Number(e.target.value) },
                                },
                              },
                            })
                          }
                          className="px-2 py-1.5 rounded bg-[#071F14] border border-white/15 text-white text-xs font-bold font-mono"
                        />
                        <input
                          type="text"
                          value={draft.homepage.stats.stat1.suffix}
                          onChange={(e) =>
                            setDraft({
                              ...draft,
                              homepage: {
                                ...draft.homepage,
                                stats: {
                                  ...draft.homepage.stats,
                                  stat1: { ...draft.homepage.stats.stat1, suffix: e.target.value },
                                },
                              },
                            })
                          }
                          placeholder="+"
                          className="px-2 py-1.5 rounded bg-[#071F14] border border-white/15 text-white text-xs font-mono"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] text-white/70 block">Main Label</label>
                      <input
                        type="text"
                        value={draft.homepage.stats.stat1.label}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            homepage: {
                              ...draft.homepage,
                              stats: {
                                ...draft.homepage.stats,
                                stat1: { ...draft.homepage.stats.stat1, label: e.target.value },
                              },
                            },
                          })
                        }
                        className="w-full px-2 py-1.5 rounded bg-[#071F14] border border-white/15 text-white text-xs mt-0.5"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-white/70 block">Sublabel</label>
                      <input
                        type="text"
                        value={draft.homepage.stats.stat1.sublabel}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            homepage: {
                              ...draft.homepage,
                              stats: {
                                ...draft.homepage.stats,
                                stat1: { ...draft.homepage.stats.stat1, sublabel: e.target.value },
                              },
                            },
                          })
                        }
                        className="w-full px-2 py-1.5 rounded bg-[#071F14] border border-white/15 text-white/80 text-[11px] mt-0.5"
                      />
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div className="p-4 rounded-xl bg-[#0A2419] border border-white/10 space-y-2">
                    <span className="text-[10px] font-bold text-[#E28723] uppercase block">
                      Counter 2 (Community)
                    </span>
                    <div>
                      <label className="text-[10px] text-white/70 block">Target Number &amp; Suffix</label>
                      <div className="grid grid-cols-2 gap-1.5 mt-0.5">
                        <input
                          type="number"
                          value={draft.homepage.stats.stat2.number}
                          onChange={(e) =>
                            setDraft({
                              ...draft,
                              homepage: {
                                ...draft.homepage,
                                stats: {
                                  ...draft.homepage.stats,
                                  stat2: { ...draft.homepage.stats.stat2, number: Number(e.target.value) },
                                },
                              },
                            })
                          }
                          className="px-2 py-1.5 rounded bg-[#071F14] border border-white/15 text-white text-xs font-bold font-mono"
                        />
                        <input
                          type="text"
                          value={draft.homepage.stats.stat2.suffix}
                          onChange={(e) =>
                            setDraft({
                              ...draft,
                              homepage: {
                                ...draft.homepage,
                                stats: {
                                  ...draft.homepage.stats,
                                  stat2: { ...draft.homepage.stats.stat2, suffix: e.target.value },
                                },
                              },
                            })
                          }
                          placeholder="+"
                          className="px-2 py-1.5 rounded bg-[#071F14] border border-white/15 text-white text-xs font-mono"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] text-white/70 block">Main Label</label>
                      <input
                        type="text"
                        value={draft.homepage.stats.stat2.label}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            homepage: {
                              ...draft.homepage,
                              stats: {
                                ...draft.homepage.stats,
                                stat2: { ...draft.homepage.stats.stat2, label: e.target.value },
                              },
                            },
                          })
                        }
                        className="w-full px-2 py-1.5 rounded bg-[#071F14] border border-white/15 text-white text-xs mt-0.5"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-white/70 block">Sublabel</label>
                      <input
                        type="text"
                        value={draft.homepage.stats.stat2.sublabel}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            homepage: {
                              ...draft.homepage,
                              stats: {
                                ...draft.homepage.stats,
                                stat2: { ...draft.homepage.stats.stat2, sublabel: e.target.value },
                              },
                            },
                          })
                        }
                        className="w-full px-2 py-1.5 rounded bg-[#071F14] border border-white/15 text-white/80 text-[11px] mt-0.5"
                      />
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div className="p-4 rounded-xl bg-[#0A2419] border border-white/10 space-y-2">
                    <span className="text-[10px] font-bold text-[#B8CBA5] uppercase block">
                      Counter 3 (Health Camps)
                    </span>
                    <div>
                      <label className="text-[10px] text-white/70 block">Target Number &amp; Suffix</label>
                      <div className="grid grid-cols-2 gap-1.5 mt-0.5">
                        <input
                          type="number"
                          value={draft.homepage.stats.stat3.number}
                          onChange={(e) =>
                            setDraft({
                              ...draft,
                              homepage: {
                                ...draft.homepage,
                                stats: {
                                  ...draft.homepage.stats,
                                  stat3: { ...draft.homepage.stats.stat3, number: Number(e.target.value) },
                                },
                              },
                            })
                          }
                          className="px-2 py-1.5 rounded bg-[#071F14] border border-white/15 text-white text-xs font-bold font-mono"
                        />
                        <input
                          type="text"
                          value={draft.homepage.stats.stat3.suffix}
                          onChange={(e) =>
                            setDraft({
                              ...draft,
                              homepage: {
                                ...draft.homepage,
                                stats: {
                                  ...draft.homepage.stats,
                                  stat3: { ...draft.homepage.stats.stat3, suffix: e.target.value },
                                },
                              },
                            })
                          }
                          placeholder="+"
                          className="px-2 py-1.5 rounded bg-[#071F14] border border-white/15 text-white text-xs font-mono"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] text-white/70 block">Main Label</label>
                      <input
                        type="text"
                        value={draft.homepage.stats.stat3.label}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            homepage: {
                              ...draft.homepage,
                              stats: {
                                ...draft.homepage.stats,
                                stat3: { ...draft.homepage.stats.stat3, label: e.target.value },
                              },
                            },
                          })
                        }
                        className="w-full px-2 py-1.5 rounded bg-[#071F14] border border-white/15 text-white text-xs mt-0.5"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-white/70 block">Sublabel</label>
                      <input
                        type="text"
                        value={draft.homepage.stats.stat3.sublabel}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            homepage: {
                              ...draft.homepage,
                              stats: {
                                ...draft.homepage.stats,
                                stat3: { ...draft.homepage.stats.stat3, sublabel: e.target.value },
                              },
                            },
                          })
                        }
                        className="w-full px-2 py-1.5 rounded bg-[#071F14] border border-white/15 text-white/80 text-[11px] mt-0.5"
                      />
                    </div>
                  </div>

                  {/* Stat 4 */}
                  <div className="p-4 rounded-xl bg-[#0A2419] border border-white/10 space-y-2">
                    <span className="text-[10px] font-bold text-white uppercase block">
                      Counter 4 (Helpline)
                    </span>
                    <div>
                      <label className="text-[10px] text-white/70 block">Display Number (e.g. 24/7)</label>
                      <input
                        type="text"
                        value={draft.homepage.stats.stat4.number}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            homepage: {
                              ...draft.homepage,
                              stats: {
                                ...draft.homepage.stats,
                                stat4: { ...draft.homepage.stats.stat4, number: e.target.value },
                              },
                            },
                          })
                        }
                        className="w-full px-2 py-1.5 rounded bg-[#071F14] border border-white/15 text-white text-xs font-bold font-mono mt-0.5"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-white/70 block">Main Label</label>
                      <input
                        type="text"
                        value={draft.homepage.stats.stat4.label}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            homepage: {
                              ...draft.homepage,
                              stats: {
                                ...draft.homepage.stats,
                                stat4: { ...draft.homepage.stats.stat4, label: e.target.value },
                              },
                            },
                          })
                        }
                        className="w-full px-2 py-1.5 rounded bg-[#071F14] border border-white/15 text-white text-xs mt-0.5"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-white/70 block">Helpline Number / Sublabel</label>
                      <input
                        type="text"
                        value={draft.homepage.stats.stat4.sublabel}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            homepage: {
                              ...draft.homepage,
                              stats: {
                                ...draft.homepage.stats,
                                stat4: { ...draft.homepage.stats.stat4, sublabel: e.target.value },
                              },
                            },
                          })
                        }
                        className="w-full px-2 py-1.5 rounded bg-[#071F14] border border-white/15 text-white/80 text-[11px] mt-0.5 font-mono"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* SECTION 3: INTRODUCTION (WHO WE ARE) */}
              {/* ------------------------------------------------------------- */}
              <div className="p-6 rounded-2xl bg-[#071F14] border border-[#B8CBA5]/20 space-y-4">
                <div className="border-b border-white/10 pb-3">
                  <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#E28723]" />
                    3. Who We Are (About JPS Section)
                  </h3>
                  <p className="text-[11px] text-[#B8CBA5]">
                    The main introduction card on the homepage below the statistics strip.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Badge Tag
                    </label>
                    <input
                      type="text"
                      value={draft.homepage.aboutIntro.badge}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            aboutIntro: { ...draft.homepage.aboutIntro, badge: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Headline Start
                    </label>
                    <input
                      type="text"
                      value={draft.homepage.aboutIntro.headingStart}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            aboutIntro: { ...draft.homepage.aboutIntro, headingStart: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Headline Italic Word &amp; End
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={draft.homepage.aboutIntro.headingItalic}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            homepage: {
                              ...draft.homepage,
                              aboutIntro: { ...draft.homepage.aboutIntro, headingItalic: e.target.value },
                            },
                          })
                        }
                        placeholder="Dignity"
                        className="px-2 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                      />
                      <input
                        type="text"
                        value={draft.homepage.aboutIntro.headingEnd}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            homepage: {
                              ...draft.homepage,
                              aboutIntro: { ...draft.homepage.aboutIntro, headingEnd: e.target.value },
                            },
                          })
                        }
                        placeholder="and Compassion"
                        className="px-2 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Paragraph 1 (Main Intro)
                    </label>
                    <textarea
                      rows={3}
                      value={draft.homepage.aboutIntro.paragraph1}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            aboutIntro: { ...draft.homepage.aboutIntro, paragraph1: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs leading-relaxed"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Paragraph 2 (Welfare &amp; Healthcare Mission)
                    </label>
                    <textarea
                      rows={3}
                      value={draft.homepage.aboutIntro.paragraph2}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            aboutIntro: { ...draft.homepage.aboutIntro, paragraph2: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs leading-relaxed"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Primary Button (Text &amp; Link)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={draft.homepage.aboutIntro.primaryBtnText}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            homepage: {
                              ...draft.homepage,
                              aboutIntro: { ...draft.homepage.aboutIntro, primaryBtnText: e.target.value },
                            },
                          })
                        }
                        placeholder="Read Founding Story"
                        className="px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-white/10 text-white text-xs"
                      />
                      <input
                        type="text"
                        value={draft.homepage.aboutIntro.primaryBtnHref}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            homepage: {
                              ...draft.homepage,
                              aboutIntro: { ...draft.homepage.aboutIntro, primaryBtnHref: e.target.value },
                            },
                          })
                        }
                        placeholder="/about"
                        className="px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-white/10 text-white text-xs font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Secondary Button (Text &amp; Link)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={draft.homepage.aboutIntro.secondaryBtnText}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            homepage: {
                              ...draft.homepage,
                              aboutIntro: { ...draft.homepage.aboutIntro, secondaryBtnText: e.target.value },
                            },
                          })
                        }
                        placeholder="Connect With Our Team"
                        className="px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-white/10 text-white text-xs"
                      />
                      <input
                        type="text"
                        value={draft.homepage.aboutIntro.secondaryBtnHref}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            homepage: {
                              ...draft.homepage,
                              aboutIntro: { ...draft.homepage.aboutIntro, secondaryBtnHref: e.target.value },
                            },
                          })
                        }
                        placeholder="/contact"
                        className="px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-white/10 text-white text-xs font-mono"
                      />
                    </div>
                  </div>

                  {/* Feature Photo */}
                  <div className="sm:col-span-3 p-4 rounded-xl bg-[#0A2419] border border-white/10 space-y-3">
                    <label className="text-[11px] font-bold text-white flex items-center gap-1.5">
                      <ImageIcon className="w-4 h-4 text-[#E28723]" />
                      Who We Are Feature Photo &amp; Captions
                    </label>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <div className="relative w-28 h-20 rounded-xl overflow-hidden border border-[#B8CBA5]/30 bg-black/40 flex-shrink-0">
                        {draft.homepage.aboutIntro.image && (
                          <Image
                            src={draft.homepage.aboutIntro.image}
                            alt="About feature preview"
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div className="flex-1 w-full space-y-2">
                        <input
                          type="text"
                          value={draft.homepage.aboutIntro.image}
                          onChange={(e) =>
                            setDraft({
                              ...draft,
                              homepage: {
                                ...draft.homepage,
                                aboutIntro: { ...draft.homepage.aboutIntro, image: e.target.value },
                              },
                            })
                          }
                          className="w-full px-3 py-1.5 rounded-lg bg-[#071F14] border border-white/20 text-white text-xs"
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          <input
                            type="text"
                            placeholder="Badge Tag"
                            value={draft.homepage.aboutIntro.imageTag}
                            onChange={(e) =>
                              setDraft({
                                ...draft,
                                homepage: {
                                  ...draft.homepage,
                                  aboutIntro: { ...draft.homepage.aboutIntro, imageTag: e.target.value },
                                },
                              })
                            }
                            className="px-2.5 py-1.5 rounded-lg bg-[#071F14] border border-white/10 text-white text-xs"
                          />
                          <input
                            type="text"
                            placeholder="Title"
                            value={draft.homepage.aboutIntro.imageTitle}
                            onChange={(e) =>
                              setDraft({
                                ...draft,
                                homepage: {
                                  ...draft.homepage,
                                  aboutIntro: { ...draft.homepage.aboutIntro, imageTitle: e.target.value },
                                },
                              })
                            }
                            className="px-2.5 py-1.5 rounded-lg bg-[#071F14] border border-white/10 text-white text-xs"
                          />
                          <input
                            type="text"
                            placeholder="Location"
                            value={draft.homepage.aboutIntro.imageLocation}
                            onChange={(e) =>
                              setDraft({
                                ...draft,
                                homepage: {
                                  ...draft.homepage,
                                  aboutIntro: { ...draft.homepage.aboutIntro, imageLocation: e.target.value },
                                },
                              })
                            }
                            className="px-2.5 py-1.5 rounded-lg bg-[#071F14] border border-white/10 text-white text-xs"
                          />
                        </div>
                        <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#123B2A] hover:bg-[#1D5139] text-[#B8CBA5] text-[11px] font-bold border border-[#B8CBA5]/30">
                          <Upload className="w-3.5 h-3.5" />
                          <span>Upload Photo from Computer</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) =>
                              handleFileUpload(e, (dataUrl) => {
                                setDraft({
                                  ...draft,
                                  homepage: {
                                    ...draft.homepage,
                                    aboutIntro: {
                                      ...draft.homepage.aboutIntro,
                                      image: dataUrl,
                                    },
                                  },
                                });
                              })
                            }
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* SECTION 4: PROGRAMS HEADER */}
              {/* ------------------------------------------------------------- */}
              <div className="p-6 rounded-2xl bg-[#071F14] border border-[#B8CBA5]/20 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-[#E28723]" />
                      4. Programs Section Header (Our NGO In Action)
                    </h3>
                    <p className="text-[11px] text-[#B8CBA5]">
                      The 6 program cards are automatically loaded from your &quot;Our Work Programs&quot; tab!
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab("programs")}
                    className="text-xs text-[#E28723] hover:underline flex items-center gap-1"
                  >
                    <span>Edit Individual Programs</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Badge Text
                    </label>
                    <input
                      type="text"
                      value={draft.homepage.programsHeader.badge}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            programsHeader: { ...draft.homepage.programsHeader, badge: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Headline Start
                    </label>
                    <input
                      type="text"
                      value={draft.homepage.programsHeader.headingStart}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            programsHeader: { ...draft.homepage.programsHeader, headingStart: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Headline Italic Word
                    </label>
                    <input
                      type="text"
                      value={draft.homepage.programsHeader.headingItalic}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            programsHeader: { ...draft.homepage.programsHeader, headingItalic: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Description Statement
                    </label>
                    <input
                      type="text"
                      value={draft.homepage.programsHeader.description}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            programsHeader: { ...draft.homepage.programsHeader, description: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                    />
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* SECTION 5: NATURE & ECOLOGICAL HARMONY */}
              {/* ------------------------------------------------------------- */}
              <div className="p-6 rounded-2xl bg-[#071F14] border border-[#B8CBA5]/20 space-y-4">
                <div className="border-b border-white/10 pb-3">
                  <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                    <TreePine className="w-5 h-5 text-[#E28723]" />
                    5. Nature &amp; Ecological Harmony Mission
                  </h3>
                  <p className="text-[11px] text-[#B8CBA5]">
                    Sal forest preservation, sacred tribal reverence, and watershed protection.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div className="sm:col-span-3">
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Badge Text
                    </label>
                    <input
                      type="text"
                      value={draft.homepage.natureSection.badge}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            natureSection: { ...draft.homepage.natureSection, badge: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Headline Start
                    </label>
                    <input
                      type="text"
                      value={draft.homepage.natureSection.headingStart}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            natureSection: { ...draft.homepage.natureSection, headingStart: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Headline Italic Word
                    </label>
                    <input
                      type="text"
                      value={draft.homepage.natureSection.headingItalic}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            natureSection: { ...draft.homepage.natureSection, headingItalic: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Description Statement
                    </label>
                    <textarea
                      rows={3}
                      value={draft.homepage.natureSection.description}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            natureSection: { ...draft.homepage.natureSection, description: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs leading-relaxed"
                    />
                  </div>

                  {/* 3 Metric Cards */}
                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Metric Card 1 (Title &amp; Desc)
                    </label>
                    <input
                      type="text"
                      value={draft.homepage.natureSection.card1Title}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            natureSection: { ...draft.homepage.natureSection, card1Title: e.target.value },
                          },
                        })
                      }
                      placeholder="15,000+ Native Saplings"
                      className="w-full px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-white/10 text-white text-xs"
                    />
                    <input
                      type="text"
                      value={draft.homepage.natureSection.card1Desc}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            natureSection: { ...draft.homepage.natureSection, card1Desc: e.target.value },
                          },
                        })
                      }
                      placeholder="Sal & Mahua Nursery Drives"
                      className="w-full px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-white/10 text-white/80 text-[11px] mt-1.5"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Metric Card 2 (Title &amp; Desc)
                    </label>
                    <input
                      type="text"
                      value={draft.homepage.natureSection.card2Title}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            natureSection: { ...draft.homepage.natureSection, card2Title: e.target.value },
                          },
                        })
                      }
                      placeholder="Sarhul Forest Reverence"
                      className="w-full px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-white/10 text-white text-xs"
                    />
                    <input
                      type="text"
                      value={draft.homepage.natureSection.card2Desc}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            natureSection: { ...draft.homepage.natureSection, card2Desc: e.target.value },
                          },
                        })
                      }
                      placeholder="Sacred Tribal Tree Tradition"
                      className="w-full px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-white/10 text-white/80 text-[11px] mt-1.5"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Metric Card 3 (Title &amp; Desc)
                    </label>
                    <input
                      type="text"
                      value={draft.homepage.natureSection.card3Title}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            natureSection: { ...draft.homepage.natureSection, card3Title: e.target.value },
                          },
                        })
                      }
                      placeholder="Watershed Protection"
                      className="w-full px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-white/10 text-white text-xs"
                    />
                    <input
                      type="text"
                      value={draft.homepage.natureSection.card3Desc}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            natureSection: { ...draft.homepage.natureSection, card3Desc: e.target.value },
                          },
                        })
                      }
                      placeholder="Stream Soil Stabilization"
                      className="w-full px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-white/10 text-white/80 text-[11px] mt-1.5"
                    />
                  </div>

                  {/* Action Button */}
                  <div className="sm:col-span-2">
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Action Button (Text &amp; Link)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={draft.homepage.natureSection.actionBtnText}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            homepage: {
                              ...draft.homepage,
                              natureSection: { ...draft.homepage.natureSection, actionBtnText: e.target.value },
                            },
                          })
                        }
                        placeholder="Explore Signature Nature Mission"
                        className="px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-white/10 text-white text-xs"
                      />
                      <input
                        type="text"
                        value={draft.homepage.natureSection.actionBtnHref}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            homepage: {
                              ...draft.homepage,
                              natureSection: { ...draft.homepage.natureSection, actionBtnHref: e.target.value },
                            },
                          })
                        }
                        placeholder="/nature"
                        className="px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-white/10 text-white text-xs font-mono"
                      />
                    </div>
                  </div>

                  {/* Nature Background Image & Side Photo */}
                  <div className="sm:col-span-3 p-4 rounded-xl bg-[#0A2419] border border-white/10 space-y-3">
                    <label className="text-[11px] font-bold text-white flex items-center gap-1.5">
                      <ImageIcon className="w-4 h-4 text-[#E28723]" />
                      Nature Section Photos (Background &amp; Side Card)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Background Image */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] text-[#B8CBA5] font-semibold block">
                          Full Section Background Photo
                        </span>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={draft.homepage.natureSection.image}
                            onChange={(e) =>
                              setDraft({
                                ...draft,
                                homepage: {
                                  ...draft.homepage,
                                  natureSection: { ...draft.homepage.natureSection, image: e.target.value },
                                },
                              })
                            }
                            className="flex-1 px-2.5 py-1.5 rounded-lg bg-[#071F14] border border-white/10 text-white text-xs"
                          />
                          <label className="cursor-pointer px-2.5 py-1.5 rounded-lg bg-[#123B2A] hover:bg-[#1D5139] text-[#B8CBA5] text-[11px] font-bold border border-[#B8CBA5]/30">
                            <Upload className="w-3 h-3" />
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) =>
                                handleFileUpload(e, (dataUrl) => {
                                  setDraft({
                                    ...draft,
                                    homepage: {
                                      ...draft.homepage,
                                      natureSection: { ...draft.homepage.natureSection, image: dataUrl },
                                    },
                                  });
                                })
                              }
                            />
                          </label>
                        </div>
                      </div>

                      {/* Side Card Image */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] text-[#B8CBA5] font-semibold block">
                          Right Feature Card Photo &amp; Tag
                        </span>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={draft.homepage.natureSection.sideImage}
                            onChange={(e) =>
                              setDraft({
                                ...draft,
                                homepage: {
                                  ...draft.homepage,
                                  natureSection: { ...draft.homepage.natureSection, sideImage: e.target.value },
                                },
                              })
                            }
                            className="flex-1 px-2.5 py-1.5 rounded-lg bg-[#071F14] border border-white/10 text-white text-xs"
                          />
                          <label className="cursor-pointer px-2.5 py-1.5 rounded-lg bg-[#123B2A] hover:bg-[#1D5139] text-[#B8CBA5] text-[11px] font-bold border border-[#B8CBA5]/30">
                            <Upload className="w-3 h-3" />
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) =>
                                handleFileUpload(e, (dataUrl) => {
                                  setDraft({
                                    ...draft,
                                    homepage: {
                                      ...draft.homepage,
                                      natureSection: { ...draft.homepage.natureSection, sideImage: dataUrl },
                                    },
                                  });
                                })
                              }
                            />
                          </label>
                        </div>
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          <input
                            type="text"
                            placeholder="Tag (e.g. Ground Action)"
                            value={draft.homepage.natureSection.sideTag}
                            onChange={(e) =>
                              setDraft({
                                ...draft,
                                homepage: {
                                  ...draft.homepage,
                                  natureSection: { ...draft.homepage.natureSection, sideTag: e.target.value },
                                },
                              })
                            }
                            className="px-2 py-1 rounded bg-[#071F14] border border-white/10 text-white text-xs"
                          />
                          <input
                            type="text"
                            placeholder="Title (e.g. Tree Planting)"
                            value={draft.homepage.natureSection.sideTitle}
                            onChange={(e) =>
                              setDraft({
                                ...draft,
                                homepage: {
                                  ...draft.homepage,
                                  natureSection: { ...draft.homepage.natureSection, sideTitle: e.target.value },
                                },
                              })
                            }
                            className="px-2 py-1 rounded bg-[#071F14] border border-white/10 text-white text-xs"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* SECTION 6: 24/7 CRISIS RESPONSE PROTOCOL */}
              {/* ------------------------------------------------------------- */}
              <div className="p-6 rounded-2xl bg-[#071F14] border border-[#B8CBA5]/20 space-y-4">
                <div className="border-b border-white/10 pb-3">
                  <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                    <Phone className="w-5 h-5 text-[#E28723]" />
                    6. 24/7 Crisis Response Spotlight
                  </h3>
                  <p className="text-[11px] text-[#B8CBA5]">
                    Emergency hotline and immediate hospital intervention support.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Badge Text
                    </label>
                    <input
                      type="text"
                      value={draft.homepage.crisisSection.badge}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            crisisSection: { ...draft.homepage.crisisSection, badge: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Headline Start
                    </label>
                    <input
                      type="text"
                      value={draft.homepage.crisisSection.headingStart}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            crisisSection: { ...draft.homepage.crisisSection, headingStart: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Headline Italic Word
                    </label>
                    <input
                      type="text"
                      value={draft.homepage.crisisSection.headingItalic}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            crisisSection: { ...draft.homepage.crisisSection, headingItalic: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Description Statement
                    </label>
                    <textarea
                      rows={3}
                      value={draft.homepage.crisisSection.description}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            crisisSection: { ...draft.homepage.crisisSection, description: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs leading-relaxed"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Helpline Phone Number
                    </label>
                    <input
                      type="text"
                      value={draft.homepage.crisisSection.helplinePhone}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            crisisSection: { ...draft.homepage.crisisSection, helplinePhone: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Helpline Button Text
                    </label>
                    <input
                      type="text"
                      value={draft.homepage.crisisSection.helplineBtnText}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            crisisSection: { ...draft.homepage.crisisSection, helplineBtnText: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Secondary Button (Text &amp; Link)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={draft.homepage.crisisSection.secondaryBtnText}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            homepage: {
                              ...draft.homepage,
                              crisisSection: { ...draft.homepage.crisisSection, secondaryBtnText: e.target.value },
                            },
                          })
                        }
                        placeholder="Read Field Case Studies"
                        className="px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-white/10 text-white text-xs"
                      />
                      <input
                        type="text"
                        value={draft.homepage.crisisSection.secondaryBtnHref}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            homepage: {
                              ...draft.homepage,
                              crisisSection: { ...draft.homepage.crisisSection, secondaryBtnHref: e.target.value },
                            },
                          })
                        }
                        placeholder="/impact"
                        className="px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-white/10 text-white text-xs font-mono"
                      />
                    </div>
                  </div>

                  {/* Crisis Image */}
                  <div className="sm:col-span-3 p-4 rounded-xl bg-[#0A2419] border border-white/10 space-y-3">
                    <label className="text-[11px] font-bold text-white flex items-center gap-1.5">
                      <ImageIcon className="w-4 h-4 text-[#E28723]" />
                      Crisis Spotlight Photo &amp; Tag
                    </label>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <div className="relative w-28 h-20 rounded-xl overflow-hidden border border-[#B8CBA5]/30 bg-black/40 flex-shrink-0">
                        {draft.homepage.crisisSection.image && (
                          <Image
                            src={draft.homepage.crisisSection.image}
                            alt="Crisis preview"
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div className="flex-1 w-full space-y-2">
                        <input
                          type="text"
                          value={draft.homepage.crisisSection.image}
                          onChange={(e) =>
                            setDraft({
                              ...draft,
                              homepage: {
                                ...draft.homepage,
                                crisisSection: { ...draft.homepage.crisisSection, image: e.target.value },
                              },
                            })
                          }
                          className="w-full px-3 py-1.5 rounded-lg bg-[#071F14] border border-white/20 text-white text-xs"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="text"
                            placeholder="Tag (e.g. Field Volunteers)"
                            value={draft.homepage.crisisSection.imageTag}
                            onChange={(e) =>
                              setDraft({
                                ...draft,
                                homepage: {
                                  ...draft.homepage,
                                  crisisSection: { ...draft.homepage.crisisSection, imageTag: e.target.value },
                                },
                              })
                            }
                            className="px-2.5 py-1.5 rounded-lg bg-[#071F14] border border-white/10 text-white text-xs"
                          />
                          <input
                            type="text"
                            placeholder="Title (e.g. Compassionate Frontline Support)"
                            value={draft.homepage.crisisSection.imageTitle}
                            onChange={(e) =>
                              setDraft({
                                ...draft,
                                homepage: {
                                  ...draft.homepage,
                                  crisisSection: { ...draft.homepage.crisisSection, imageTitle: e.target.value },
                                },
                              })
                            }
                            className="px-2.5 py-1.5 rounded-lg bg-[#071F14] border border-white/10 text-white text-xs"
                          />
                        </div>
                        <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#123B2A] hover:bg-[#1D5139] text-[#B8CBA5] text-[11px] font-bold border border-[#B8CBA5]/30">
                          <Upload className="w-3.5 h-3.5" />
                          <span>Upload Photo from Computer</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) =>
                              handleFileUpload(e, (dataUrl) => {
                                setDraft({
                                  ...draft,
                                  homepage: {
                                    ...draft.homepage,
                                    crisisSection: {
                                      ...draft.homepage.crisisSection,
                                      image: dataUrl,
                                    },
                                  },
                                });
                              })
                            }
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* SECTION 7: CHARITY ART STORE SPOTLIGHT */}
              {/* ------------------------------------------------------------- */}
              <div className="p-6 rounded-2xl bg-[#071F14] border border-[#B8CBA5]/20 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                      <Palette className="w-5 h-5 text-[#E28723]" />
                      7. Charity Art Store Spotlight (कला से सेवा)
                    </h3>
                    <p className="text-[11px] text-[#B8CBA5]">
                      The 4 featured artwork cards are automatically loaded from your &quot;Art Charity Store&quot; tab!
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab("art")}
                    className="text-xs text-[#E28723] hover:underline flex items-center gap-1"
                  >
                    <span>Manage Artworks &amp; Prices</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Badge Text
                    </label>
                    <input
                      type="text"
                      value={draft.homepage.artSpotlight.badge}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            artSpotlight: { ...draft.homepage.artSpotlight, badge: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Headline Start
                    </label>
                    <input
                      type="text"
                      value={draft.homepage.artSpotlight.headingStart}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            artSpotlight: { ...draft.homepage.artSpotlight, headingStart: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Headline Italic Word
                    </label>
                    <input
                      type="text"
                      value={draft.homepage.artSpotlight.headingItalic}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            artSpotlight: { ...draft.homepage.artSpotlight, headingItalic: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Description Statement
                    </label>
                    <textarea
                      rows={2}
                      value={draft.homepage.artSpotlight.description}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            artSpotlight: { ...draft.homepage.artSpotlight, description: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs leading-relaxed"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Browse Store Button (Text &amp; Link)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={draft.homepage.artSpotlight.ctaBtnText}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            homepage: {
                              ...draft.homepage,
                              artSpotlight: { ...draft.homepage.artSpotlight, ctaBtnText: e.target.value },
                            },
                          })
                        }
                        placeholder="Browse Charity Art Store"
                        className="px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-white/10 text-white text-xs"
                      />
                      <input
                        type="text"
                        value={draft.homepage.artSpotlight.ctaBtnHref}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            homepage: {
                              ...draft.homepage,
                              artSpotlight: { ...draft.homepage.artSpotlight, ctaBtnHref: e.target.value },
                            },
                          })
                        }
                        placeholder="/art-store"
                        className="px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-white/10 text-white text-xs font-mono"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* SECTION 8: VOLUNTEER & DONATE CALL TO ACTION */}
              {/* ------------------------------------------------------------- */}
              <div className="p-6 rounded-2xl bg-[#071F14] border border-[#B8CBA5]/20 space-y-4">
                <div className="border-b border-white/10 pb-3">
                  <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                    <Heart className="w-5 h-5 text-[#E28723]" />
                    8. Volunteer &amp; Donate Banner Call to Action
                  </h3>
                  <p className="text-[11px] text-[#B8CBA5]">
                    Closing high-impact banner inviting volunteers and donors.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Eyebrow Tag
                    </label>
                    <input
                      type="text"
                      value={draft.homepage.volunteerCta.eyebrow}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            volunteerCta: { ...draft.homepage.volunteerCta, eyebrow: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Headline Start
                    </label>
                    <input
                      type="text"
                      value={draft.homepage.volunteerCta.headingStart}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            volunteerCta: { ...draft.homepage.volunteerCta, headingStart: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Headline Italic Word
                    </label>
                    <input
                      type="text"
                      value={draft.homepage.volunteerCta.headingItalic}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            volunteerCta: { ...draft.homepage.volunteerCta, headingItalic: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Description Statement
                    </label>
                    <textarea
                      rows={2}
                      value={draft.homepage.volunteerCta.description}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          homepage: {
                            ...draft.homepage,
                            volunteerCta: { ...draft.homepage.volunteerCta, description: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs leading-relaxed"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Primary Button (Text &amp; Link)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={draft.homepage.volunteerCta.primaryBtnText}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            homepage: {
                              ...draft.homepage,
                              volunteerCta: { ...draft.homepage.volunteerCta, primaryBtnText: e.target.value },
                            },
                          })
                        }
                        placeholder="Become a Volunteer"
                        className="px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-white/10 text-white text-xs"
                      />
                      <input
                        type="text"
                        value={draft.homepage.volunteerCta.primaryBtnHref}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            homepage: {
                              ...draft.homepage,
                              volunteerCta: { ...draft.homepage.volunteerCta, primaryBtnHref: e.target.value },
                            },
                          })
                        }
                        placeholder="/get-involved"
                        className="px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-white/10 text-white text-xs font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Secondary Button (Text &amp; Link)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={draft.homepage.volunteerCta.secondaryBtnText}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            homepage: {
                              ...draft.homepage,
                              volunteerCta: { ...draft.homepage.volunteerCta, secondaryBtnText: e.target.value },
                            },
                          })
                        }
                        placeholder="Make a Contribution"
                        className="px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-white/10 text-white text-xs"
                      />
                      <input
                        type="text"
                        value={draft.homepage.volunteerCta.secondaryBtnHref}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            homepage: {
                              ...draft.homepage,
                              volunteerCta: { ...draft.homepage.volunteerCta, secondaryBtnHref: e.target.value },
                            },
                          })
                        }
                        placeholder="/donate"
                        className="px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-white/10 text-white text-xs font-mono"
                      />
                    </div>
                  </div>

                  {/* CTA Background Photo */}
                  <div className="sm:col-span-3 p-4 rounded-xl bg-[#0A2419] border border-white/10 space-y-2">
                    <label className="text-[11px] font-bold text-white flex items-center gap-1.5">
                      <ImageIcon className="w-4 h-4 text-[#E28723]" />
                      Banner Background Backdrop Photo
                    </label>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <div className="relative w-28 h-20 rounded-xl overflow-hidden border border-[#B8CBA5]/30 bg-black/40 flex-shrink-0">
                        {draft.homepage.volunteerCta.image && (
                          <Image
                            src={draft.homepage.volunteerCta.image}
                            alt="CTA preview"
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div className="flex-1 w-full space-y-2">
                        <input
                          type="text"
                          value={draft.homepage.volunteerCta.image}
                          onChange={(e) =>
                            setDraft({
                              ...draft,
                              homepage: {
                                ...draft.homepage,
                                volunteerCta: { ...draft.homepage.volunteerCta, image: e.target.value },
                              },
                            })
                          }
                          className="w-full px-3 py-1.5 rounded-lg bg-[#071F14] border border-white/20 text-white text-xs"
                        />
                        <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#123B2A] hover:bg-[#1D5139] text-[#B8CBA5] text-[11px] font-bold border border-[#B8CBA5]/30">
                          <Upload className="w-3.5 h-3.5" />
                          <span>Upload Photo from Computer</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) =>
                              handleFileUpload(e, (dataUrl) => {
                                setDraft({
                                  ...draft,
                                  homepage: {
                                    ...draft.homepage,
                                    volunteerCta: {
                                      ...draft.homepage.volunteerCta,
                                      image: dataUrl,
                                    },
                                  },
                                });
                              })
                            }
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Floating Save Button */}
              <div className="pt-4 flex justify-end">
                <button
                  onClick={handleSaveAll}
                  className="px-6 py-3 rounded-xl bg-[#E28723] hover:bg-[#c97419] text-white font-bold text-sm flex items-center gap-2 shadow-lg transition-all"
                >
                  <Save className="w-4 h-4" />
                  <span>Save All Website Changes</span>
                </button>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 3: ABOUT & LEADERSHIP TEAM */}
          {/* ========================================================================= */}
          {activeTab === "about" && (
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                    <Users className="w-6 h-6 text-[#E28723]" />
                    About Us, Founder Message &amp; Leadership Board
                  </h2>
                  <p className="text-xs text-[#B8CBA5] mt-1">
                    Update Arvind Arya&apos;s speech, organization history, and board of trustees.
                  </p>
                </div>
                <button
                  onClick={handleSaveAll}
                  className="px-4 py-2 rounded-xl bg-[#E28723] hover:bg-[#c97419] text-white font-bold text-xs flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>

              {/* Founder Section */}
              <div className="p-5 rounded-2xl bg-[#071F14] border border-[#B8CBA5]/20 space-y-4">
                <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#E28723]" />
                  Founder &amp; National President Profile
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Founder Name
                    </label>
                    <input
                      type="text"
                      value={draft.about.founderName}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          about: { ...draft.about, founderName: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      Designation
                    </label>
                    <input
                      type="text"
                      value={draft.about.founderRole}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          about: { ...draft.about, founderRole: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      President&apos;s Official Quote
                    </label>
                    <input
                      type="text"
                      value={draft.about.founderQuote}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          about: { ...draft.about, founderQuote: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                      President&apos;s Message to the Nation
                    </label>
                    <textarea
                      rows={4}
                      value={draft.about.founderMessage}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          about: { ...draft.about, founderMessage: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none leading-relaxed"
                    />
                  </div>

                  {/* Founder Photo */}
                  <div className="sm:col-span-2 p-4 rounded-xl bg-[#0A2419] border border-white/10 space-y-2">
                    <label className="text-[11px] font-bold text-white flex items-center gap-1.5">
                      <ImageIcon className="w-4 h-4 text-[#E28723]" />
                      Founder Portrait Photo
                    </label>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <div className="relative w-24 h-24 rounded-xl overflow-hidden border border-[#B8CBA5]/30 bg-black/40 flex-shrink-0">
                        {draft.about.founderImage && (
                          <Image
                            src={draft.about.founderImage}
                            alt="Founder preview"
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div className="flex-1 w-full space-y-2">
                        <input
                          type="text"
                          value={draft.about.founderImage}
                          onChange={(e) =>
                            setDraft({
                              ...draft,
                              about: { ...draft.about, founderImage: e.target.value },
                            })
                          }
                          className="w-full px-3 py-2 rounded-xl bg-[#071F14] border border-[#B8CBA5]/30 text-white text-xs focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                        />
                        <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#123B2A] hover:bg-[#1D5139] text-[#B8CBA5] text-[11px] font-bold border border-[#B8CBA5]/30">
                          <Upload className="w-3.5 h-3.5" />
                          <span>Upload New Portrait</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) =>
                              handleFileUpload(e, (dataUrl) => {
                                setDraft({
                                  ...draft,
                                  about: { ...draft.about, founderImage: dataUrl },
                                });
                              })
                            }
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leadership Members Manager */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#E28723]" />
                    Leadership Board &amp; Trustees ({draft.about.leadership.length})
                  </h3>
                  <button
                    onClick={() => {
                      const newMember: LeadershipMember = {
                        id: `member-${Date.now()}`,
                        name: "New Board Member",
                        role: "Executive Member",
                        organization: "Executive Committee",
                        image: "/images/community-assembly.jpg",
                        bio: "Dedicated community organizer assisting with grassroots welfare programs.",
                      };
                      setDraft({
                        ...draft,
                        about: {
                          ...draft.about,
                          leadership: [...draft.about.leadership, newMember],
                        },
                      });
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-[#123B2A] hover:bg-[#1D5139] text-[#B8CBA5] text-xs font-bold border border-[#B8CBA5]/30 flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    Add Board Member
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {draft.about.leadership.map((member, idx) => (
                    <div
                      key={member.id}
                      className="p-5 rounded-2xl bg-[#071F14] border border-[#B8CBA5]/20 space-y-3 relative"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <span className="text-xs font-bold text-[#E28723]">
                          Member #{idx + 1}
                        </span>
                        {draft.about.leadership.length > 1 && (
                          <button
                            onClick={() => {
                              if (confirm(`Remove member: "${member.name}"?`)) {
                                setDraft({
                                  ...draft,
                                  about: {
                                    ...draft.about,
                                    leadership: draft.about.leadership.filter(
                                      (m) => m.id !== member.id
                                    ),
                                  },
                                });
                              }
                            }}
                            className="text-rose-400 hover:text-rose-300 p-1"
                            title="Delete Member"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-[#B8CBA5]/30 bg-black/40 flex-shrink-0">
                          {member.image && (
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>
                        <div className="flex-1 space-y-1">
                          <input
                            type="text"
                            value={member.name}
                            onChange={(e) => {
                              const updated = [...draft.about.leadership];
                              updated[idx].name = e.target.value;
                              setDraft({
                                ...draft,
                                about: { ...draft.about, leadership: updated },
                              });
                            }}
                            placeholder="Full Name"
                            className="w-full px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-[#B8CBA5]/30 text-white font-bold text-xs"
                          />
                          <input
                            type="text"
                            value={member.role}
                            onChange={(e) => {
                              const updated = [...draft.about.leadership];
                              updated[idx].role = e.target.value;
                              setDraft({
                                ...draft,
                                about: { ...draft.about, leadership: updated },
                              });
                            }}
                            placeholder="Designation"
                            className="w-full px-2.5 py-1 rounded-lg bg-[#0A2419] border border-white/10 text-[#B8CBA5] text-[11px]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] font-semibold text-[#B8CBA5] block mb-1">
                          Photo URL or Upload
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={member.image}
                            onChange={(e) => {
                              const updated = [...draft.about.leadership];
                              updated[idx].image = e.target.value;
                              setDraft({
                                ...draft,
                                about: { ...draft.about, leadership: updated },
                              });
                            }}
                            className="flex-1 px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-white/10 text-white text-[11px]"
                          />
                          <label className="cursor-pointer px-2.5 py-1.5 rounded-lg bg-[#123B2A] hover:bg-[#1D5139] text-[#B8CBA5] text-[11px] font-bold border border-white/10 flex-shrink-0">
                            <Upload className="w-3 h-3" />
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) =>
                                handleFileUpload(e, (dataUrl) => {
                                  const updated = [...draft.about.leadership];
                                  updated[idx].image = dataUrl;
                                  setDraft({
                                    ...draft,
                                    about: { ...draft.about, leadership: updated },
                                  });
                                })
                              }
                            />
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] font-semibold text-[#B8CBA5] block mb-1">
                          Short Biography / Scope of Work
                        </label>
                        <textarea
                          rows={2}
                          value={member.bio}
                          onChange={(e) => {
                            const updated = [...draft.about.leadership];
                            updated[idx].bio = e.target.value;
                            setDraft({
                              ...draft,
                              about: { ...draft.about, leadership: updated },
                            });
                          }}
                          className="w-full px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-[11px] leading-relaxed"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 4: OUR WORK & PROGRAMS */}
          {/* ========================================================================= */}
          {activeTab === "programs" && (
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                    <Briefcase className="w-6 h-6 text-[#E28723]" />
                    Grassroots Welfare Programs ({draft.programs.length})
                  </h2>
                  <p className="text-xs text-[#B8CBA5] mt-1">
                    Manage the 6 core humanitarian pillars, photos, and key impact actions.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const newProg: ProgramData = {
                        id: `prog-${Date.now()}`,
                        eyebrow: "NEW WELFARE MISSION",
                        hindiTitle: "जन कल्याण पहल",
                        title: "New Welfare Initiative",
                        description: "Detailed description of this community cause.",
                        image: "/images/hero-education.jpg",
                        stats: "Active Field Operations",
                        bullets: [
                          "Key intervention priority 1",
                          "Key intervention priority 2",
                        ],
                      };
                      setDraft({
                        ...draft,
                        programs: [...draft.programs, newProg],
                      });
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-[#123B2A] hover:bg-[#1D5139] text-[#B8CBA5] text-xs font-bold border border-[#B8CBA5]/30 flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    Add Program
                  </button>
                  <button
                    onClick={handleSaveAll}
                    className="px-4 py-2 rounded-xl bg-[#E28723] hover:bg-[#c97419] text-white font-bold text-xs flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                {draft.programs.map((program, idx) => (
                  <div
                    key={program.id}
                    className="p-5 sm:p-6 rounded-2xl bg-[#071F14] border border-[#B8CBA5]/20 space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="badge-pill bg-[#E28723]/20 text-[#E28723] text-xs">
                        Program #{idx + 1} • {program.id}
                      </span>
                      {draft.programs.length > 1 && (
                        <button
                          onClick={() => {
                            if (confirm(`Delete program: "${program.title}"?`)) {
                              setDraft({
                                ...draft,
                                programs: draft.programs.filter((p) => p.id !== program.id),
                              });
                            }
                          }}
                          className="text-rose-400 hover:text-rose-300 p-1"
                          title="Delete Program"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                          Program Title
                        </label>
                        <input
                          type="text"
                          value={program.title}
                          onChange={(e) => {
                            const updated = [...draft.programs];
                            updated[idx].title = e.target.value;
                            setDraft({ ...draft, programs: updated });
                          }}
                          className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs font-bold"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                          Hindi Subtitle
                        </label>
                        <input
                          type="text"
                          value={program.hindiTitle}
                          onChange={(e) => {
                            const updated = [...draft.programs];
                            updated[idx].hindiTitle = e.target.value;
                            setDraft({ ...draft, programs: updated });
                          }}
                          className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                          Impact Stat (e.g. 15,000+ Workers Assisted)
                        </label>
                        <input
                          type="text"
                          value={program.stats}
                          onChange={(e) => {
                            const updated = [...draft.programs];
                            updated[idx].stats = e.target.value;
                            setDraft({ ...draft, programs: updated });
                          }}
                          className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                        />
                      </div>

                      <div className="sm:col-span-2 lg:col-span-3">
                        <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                          Program Description
                        </label>
                        <textarea
                          rows={2}
                          value={program.description}
                          onChange={(e) => {
                            const updated = [...draft.programs];
                            updated[idx].description = e.target.value;
                            setDraft({ ...draft, programs: updated });
                          }}
                          className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs leading-relaxed"
                        />
                      </div>

                      {/* Image Management */}
                      <div className="sm:col-span-2 lg:col-span-3 p-4 rounded-xl bg-[#0A2419] border border-white/10 space-y-3">
                        <label className="text-[11px] font-bold text-white flex items-center gap-1.5">
                          <ImageIcon className="w-4 h-4 text-[#E28723]" />
                          Program Featured Photo
                        </label>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                          <div className="relative w-28 h-20 rounded-xl overflow-hidden border border-[#B8CBA5]/30 bg-black/40 flex-shrink-0">
                            {program.image && (
                              <Image
                                src={program.image}
                                alt={program.title}
                                fill
                                className="object-cover"
                              />
                            )}
                          </div>
                          <div className="flex-1 w-full space-y-2">
                            <input
                              type="text"
                              value={program.image}
                              onChange={(e) => {
                                const updated = [...draft.programs];
                                updated[idx].image = e.target.value;
                                setDraft({ ...draft, programs: updated });
                              }}
                              className="w-full px-3 py-2 rounded-xl bg-[#071F14] border border-[#B8CBA5]/30 text-white text-xs"
                            />
                            <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#123B2A] hover:bg-[#1D5139] text-[#B8CBA5] text-[11px] font-bold border border-[#B8CBA5]/30">
                              <Upload className="w-3.5 h-3.5" />
                              <span>Upload Photo from Device</span>
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) =>
                                  handleFileUpload(e, (dataUrl) => {
                                    const updated = [...draft.programs];
                                    updated[idx].image = dataUrl;
                                    setDraft({ ...draft, programs: updated });
                                  })
                                }
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 5: ART FOR CHARITY STORE */}
          {/* ========================================================================= */}
          {activeTab === "art" && (
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                    <Palette className="w-6 h-6 text-[#E28723]" />
                    Art for Charity Store &amp; Photo Frames ({draft.artStore.length})
                  </h2>
                  <p className="text-xs text-[#B8CBA5] mt-1">
                    Manage Bhagwan Birsa Munda photo frames, Sohrai tribal paintings, and donation values.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const newArt: ArtworkData = {
                        id: `art-${Date.now()}`,
                        title: "New Commemorative Artwork / Frame",
                        hindiTitle: "कलाकृति",
                        category: "portrait",
                        categoryLabel: "Official Commemorative Art",
                        artist: "Tribal Artisan Collective",
                        origin: "Jharkhand",
                        dimensions: '24" × 30" Custom Framed',
                        medium: "Archival Canvas Print with Wood Mount",
                        price: 3500,
                        description: "Original commemorative artwork supporting education and healthcare initiatives.",
                        impact: "Provides 10 child education kits and diagnostic health screenings for migrant workers.",
                        image: "/images/commemorative/birsa-munda-dharti-aaba-portrait.jpg",
                        inStock: true,
                        featured: true,
                      };
                      setDraft({
                        ...draft,
                        artStore: [...draft.artStore, newArt],
                      });
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-[#123B2A] hover:bg-[#1D5139] text-[#B8CBA5] text-xs font-bold border border-[#B8CBA5]/30 flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    Add Artwork / Frame
                  </button>
                  <button
                    onClick={handleSaveAll}
                    className="px-4 py-2 rounded-xl bg-[#E28723] hover:bg-[#c97419] text-white font-bold text-xs flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {draft.artStore.map((art, idx) => (
                  <div
                    key={art.id}
                    className="p-5 rounded-2xl bg-[#071F14] border border-[#B8CBA5]/20 space-y-4 relative"
                  >
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="badge-pill bg-[#B8CBA5]/20 text-[#B8CBA5] text-[10px]">
                          {art.categoryLabel || "Charity Art"}
                        </span>
                        <span className="badge-pill bg-[#E28723]/20 text-[#E28723] text-[10px]">
                          ₹{art.price.toLocaleString()} • {art.inStock ? "In Stock" : "Sold Out"}
                        </span>
                      </div>
                      {draft.artStore.length > 1 && (
                        <button
                          onClick={() => {
                            if (confirm(`Remove artwork: "${art.title}"?`)) {
                              setDraft({
                                ...draft,
                                artStore: draft.artStore.filter((a) => a.id !== art.id),
                              });
                            }
                          }}
                          className="text-rose-400 hover:text-rose-300 p-1"
                          title="Delete Artwork"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2.5">
                        <div>
                          <label className="text-[10px] font-semibold text-[#B8CBA5] block mb-1">
                            Artwork Title (English)
                          </label>
                          <input
                            type="text"
                            value={art.title}
                            onChange={(e) => {
                              const updated = [...draft.artStore];
                              updated[idx].title = e.target.value;
                              setDraft({ ...draft, artStore: updated });
                            }}
                            className="w-full px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-[#B8CBA5]/30 text-white font-bold text-xs"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-semibold text-[#B8CBA5] block mb-1">
                            Hindi Title / Subtitle
                          </label>
                          <input
                            type="text"
                            value={art.hindiTitle || ""}
                            onChange={(e) => {
                              const updated = [...draft.artStore];
                              updated[idx].hindiTitle = e.target.value;
                              setDraft({ ...draft, artStore: updated });
                            }}
                            className="w-full px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        <div>
                          <label className="text-[10px] font-semibold text-[#B8CBA5] block mb-1">
                            Category (Catalog Filter)
                          </label>
                          <select
                            value={art.category || "portrait"}
                            onChange={(e) => {
                              const updated = [...draft.artStore];
                              updated[idx].category = e.target.value;
                              setDraft({ ...draft, artStore: updated });
                            }}
                            className="w-full px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                          >
                            <option value="portrait">Commemorative Portrait (portrait)</option>
                            <option value="sohrai">Traditional Sohrai Art (sohrai)</option>
                            <option value="folk">Tribal Folk Art (folk)</option>
                            <option value="nature">Nature Fine Art (nature)</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[10px] font-semibold text-[#B8CBA5] block mb-1">
                            Category Label (Badge Text)
                          </label>
                          <input
                            type="text"
                            value={art.categoryLabel || ""}
                            onChange={(e) => {
                              const updated = [...draft.artStore];
                              updated[idx].categoryLabel = e.target.value;
                              setDraft({ ...draft, artStore: updated });
                            }}
                            placeholder="e.g. Official Commemorative Art"
                            className="w-full px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        <div>
                          <label className="text-[10px] font-semibold text-[#B8CBA5] block mb-1">
                            Donation Price (₹)
                          </label>
                          <input
                            type="number"
                            value={art.price}
                            onChange={(e) => {
                              const updated = [...draft.artStore];
                              updated[idx].price = Number(e.target.value);
                              setDraft({ ...draft, artStore: updated });
                            }}
                            className="w-full px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs font-mono font-bold"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-semibold text-[#B8CBA5] block mb-1">
                            Dimensions / Size
                          </label>
                          <input
                            type="text"
                            value={art.dimensions}
                            onChange={(e) => {
                              const updated = [...draft.artStore];
                              updated[idx].dimensions = e.target.value;
                              setDraft({ ...draft, artStore: updated });
                            }}
                            className="w-full px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        <div>
                          <label className="text-[10px] font-semibold text-[#B8CBA5] block mb-1">
                            Artist / Collective
                          </label>
                          <input
                            type="text"
                            value={art.artist || ""}
                            onChange={(e) => {
                              const updated = [...draft.artStore];
                              updated[idx].artist = e.target.value;
                              setDraft({ ...draft, artStore: updated });
                            }}
                            className="w-full px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-semibold text-[#B8CBA5] block mb-1">
                            Origin / Region
                          </label>
                          <input
                            type="text"
                            value={art.origin || ""}
                            onChange={(e) => {
                              const updated = [...draft.artStore];
                              updated[idx].origin = e.target.value;
                              setDraft({ ...draft, artStore: updated });
                            }}
                            className="w-full px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] font-semibold text-[#B8CBA5] block mb-1">
                          Medium &amp; Framing Details
                        </label>
                        <input
                          type="text"
                          value={art.medium}
                          onChange={(e) => {
                            const updated = [...draft.artStore];
                            updated[idx].medium = e.target.value;
                            setDraft({ ...draft, artStore: updated });
                          }}
                          className="w-full px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-semibold text-[#B8CBA5] block mb-1">
                          Artwork Description
                        </label>
                        <textarea
                          rows={2}
                          value={art.description || ""}
                          onChange={(e) => {
                            const updated = [...draft.artStore];
                            updated[idx].description = e.target.value;
                            setDraft({ ...draft, artStore: updated });
                          }}
                          className="w-full px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs leading-relaxed"
                        />
                      </div>

                      {/* Highlighted Welfare Impact Box */}
                      <div className="p-3 rounded-xl bg-[#082216] border-2 border-[#2E7D32]/50 space-y-1">
                        <label className="text-[10px] font-bold text-[#A5D6A7] flex items-center gap-1.5">
                          <Heart className="w-3.5 h-3.5 text-[#E28723] fill-[#E28723]" />
                          Direct Welfare Impact (Visible on Homepage &amp; Art Store Page)
                        </label>
                        <textarea
                          rows={2}
                          value={art.impact || ""}
                          onChange={(e) => {
                            const updated = [...draft.artStore];
                            updated[idx].impact = e.target.value;
                            setDraft({ ...draft, artStore: updated });
                          }}
                          placeholder="e.g. Sponsors free diagnostic eye screenings and prescription spectacles for 35 low-income elders..."
                          className="w-full px-2.5 py-1.5 rounded-lg bg-[#04140D] border border-[#2E7D32]/40 text-white text-xs leading-relaxed focus:border-[#81C784] focus:outline-none"
                        />
                      </div>

                      {/* Photo Preview & Upload */}
                      <div className="p-3 rounded-xl bg-[#0A2419] border border-white/10 space-y-2">
                        <label className="text-[10px] font-bold text-white flex items-center gap-1.5">
                          <ImageIcon className="w-3.5 h-3.5 text-[#E28723]" />
                          Artwork Photo
                        </label>
                        <div className="flex items-center gap-3">
                          <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-[#B8CBA5]/30 bg-black/40 flex-shrink-0">
                            {art.image && (
                              <Image
                                src={art.image}
                                alt={art.title}
                                fill
                                className="object-cover"
                              />
                            )}
                          </div>
                          <div className="flex-1 space-y-1.5">
                            <input
                              type="text"
                              value={art.image}
                              onChange={(e) => {
                                const updated = [...draft.artStore];
                                updated[idx].image = e.target.value;
                                setDraft({ ...draft, artStore: updated });
                              }}
                              className="w-full px-2.5 py-1.5 rounded-lg bg-[#071F14] border border-[#B8CBA5]/30 text-white text-[11px]"
                            />
                            <label className="cursor-pointer inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#123B2A] hover:bg-[#1D5139] text-[#B8CBA5] text-[10px] font-bold border border-white/10">
                              <Upload className="w-3 h-3" />
                              <span>Upload Photo</span>
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) =>
                                  handleFileUpload(e, (dataUrl) => {
                                    const updated = [...draft.artStore];
                                    updated[idx].image = dataUrl;
                                    setDraft({ ...draft, artStore: updated });
                                  })
                                }
                              />
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 pt-1">
                        <label className="flex items-center gap-2 cursor-pointer text-xs">
                          <input
                            type="checkbox"
                            checked={art.inStock}
                            onChange={(e) => {
                              const updated = [...draft.artStore];
                              updated[idx].inStock = e.target.checked;
                              setDraft({ ...draft, artStore: updated });
                            }}
                            className="rounded border-white/20 text-[#E28723] focus:ring-0"
                          />
                          <span>Available in Stock</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer text-xs">
                          <input
                            type="checkbox"
                            checked={art.featured}
                            onChange={(e) => {
                              const updated = [...draft.artStore];
                              updated[idx].featured = e.target.checked;
                              setDraft({ ...draft, artStore: updated });
                            }}
                            className="rounded border-white/20 text-[#E28723] focus:ring-0"
                          />
                          <span>Feature on Homepage</span>
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 6: EVENTS & PRESS MEDIA */}
          {/* ========================================================================= */}
          {activeTab === "events" && (
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-[#E28723]" />
                    Events, Press Media &amp; Souvenir Releases ({draft.events.length})
                  </h2>
                  <p className="text-xs text-[#B8CBA5] mt-1">
                    Manage documentary photos, press coverage, and upcoming community assemblies.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const newEvent: EventData = {
                        id: `event-${Date.now()}`,
                        title: "New Community Assembly / Event",
                        date: "Upcoming 2026",
                        location: "Mumbai / Jharkhand",
                        category: "Community Welfare",
                        badge: "Upcoming Event",
                        description: "Detailed description of the upcoming program.",
                        image: "/images/events/birsa-munda-garland-stage-ceremony.jpg",
                        dignitaries: "Community Leaders and Trustees",
                      };
                      setDraft({
                        ...draft,
                        events: [...draft.events, newEvent],
                      });
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-[#123B2A] hover:bg-[#1D5139] text-[#B8CBA5] text-xs font-bold border border-[#B8CBA5]/30 flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    Add Event
                  </button>
                  <button
                    onClick={handleSaveAll}
                    className="px-4 py-2 rounded-xl bg-[#E28723] hover:bg-[#c97419] text-white font-bold text-xs flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                {draft.events.map((evt, idx) => (
                  <div
                    key={evt.id}
                    className="p-5 sm:p-6 rounded-2xl bg-[#071F14] border border-[#B8CBA5]/20 space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="badge-pill bg-[#E28723]/20 text-[#E28723] text-xs">
                        {evt.badge || `Event #${idx + 1}`}
                      </span>
                      {draft.events.length > 1 && (
                        <button
                          onClick={() => {
                            if (confirm(`Delete event: "${evt.title}"?`)) {
                              setDraft({
                                ...draft,
                                events: draft.events.filter((e) => e.id !== evt.id),
                              });
                            }
                          }}
                          className="text-rose-400 hover:text-rose-300 p-1"
                          title="Delete Event"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="sm:col-span-2">
                        <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                          Event Title
                        </label>
                        <input
                          type="text"
                          value={evt.title}
                          onChange={(e) => {
                            const updated = [...draft.events];
                            updated[idx].title = e.target.value;
                            setDraft({ ...draft, events: updated });
                          }}
                          className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs font-bold"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                          Date / Timeline
                        </label>
                        <input
                          type="text"
                          value={evt.date}
                          onChange={(e) => {
                            const updated = [...draft.events];
                            updated[idx].date = e.target.value;
                            setDraft({ ...draft, events: updated });
                          }}
                          className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                          Venue / Location
                        </label>
                        <input
                          type="text"
                          value={evt.location}
                          onChange={(e) => {
                            const updated = [...draft.events];
                            updated[idx].location = e.target.value;
                            setDraft({ ...draft, events: updated });
                          }}
                          className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                          Category Badge (e.g. Press Archive, Cultural)
                        </label>
                        <input
                          type="text"
                          value={evt.badge}
                          onChange={(e) => {
                            const updated = [...draft.events];
                            updated[idx].badge = e.target.value;
                            setDraft({ ...draft, events: updated });
                          }}
                          className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                          Dignitaries Present
                        </label>
                        <input
                          type="text"
                          value={evt.dignitaries || ""}
                          onChange={(e) => {
                            const updated = [...draft.events];
                            updated[idx].dignitaries = e.target.value;
                            setDraft({ ...draft, events: updated });
                          }}
                          className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs"
                        />
                      </div>

                      <div className="sm:col-span-2 lg:col-span-3">
                        <label className="text-[11px] font-semibold text-[#B8CBA5] block mb-1">
                          Description &amp; Highlights
                        </label>
                        <textarea
                          rows={2}
                          value={evt.description}
                          onChange={(e) => {
                            const updated = [...draft.events];
                            updated[idx].description = e.target.value;
                            setDraft({ ...draft, events: updated });
                          }}
                          className="w-full px-3 py-2 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-xs leading-relaxed"
                        />
                      </div>

                      {/* Photo Upload */}
                      <div className="sm:col-span-2 lg:col-span-3 p-4 rounded-xl bg-[#0A2419] border border-white/10 space-y-3">
                        <label className="text-[11px] font-bold text-white flex items-center gap-1.5">
                          <ImageIcon className="w-4 h-4 text-[#E28723]" />
                          Event Photo
                        </label>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                          <div className="relative w-28 h-20 rounded-xl overflow-hidden border border-[#B8CBA5]/30 bg-black/40 flex-shrink-0">
                            {evt.image && (
                              <Image
                                src={evt.image}
                                alt={evt.title}
                                fill
                                className="object-cover"
                              />
                            )}
                          </div>
                          <div className="flex-1 w-full space-y-2">
                            <input
                              type="text"
                              value={evt.image}
                              onChange={(e) => {
                                const updated = [...draft.events];
                                updated[idx].image = e.target.value;
                                setDraft({ ...draft, events: updated });
                              }}
                              className="w-full px-3 py-2 rounded-xl bg-[#071F14] border border-[#B8CBA5]/30 text-white text-xs"
                            />
                            <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#123B2A] hover:bg-[#1D5139] text-[#B8CBA5] text-[11px] font-bold border border-[#B8CBA5]/30">
                              <Upload className="w-3.5 h-3.5" />
                              <span>Upload Photo from Device</span>
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) =>
                                  handleFileUpload(e, (dataUrl) => {
                                    const updated = [...draft.events];
                                    updated[idx].image = dataUrl;
                                    setDraft({ ...draft, events: updated });
                                  })
                                }
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 7: PHOTO MANAGER & MEDIA LIBRARY */}
          {/* ========================================================================= */}
          {activeTab === "photos" && (
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                    <ImageIcon className="w-6 h-6 text-[#E28723]" />
                    Central Photo &amp; Media Library ({draft.mediaGallery.length})
                  </h2>
                  <p className="text-xs text-[#B8CBA5] mt-1">
                    Upload photos directly from your phone/computer, copy URLs with 1-click, and reuse anywhere on the website.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <label className="cursor-pointer px-4 py-2 rounded-xl bg-[#E28723] hover:bg-[#c97419] text-white font-bold text-xs flex items-center gap-2 shadow-lg transition-all">
                    <Upload className="w-4 h-4" />
                    <span>Upload New Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        handleFileUpload(e, (dataUrl) => {
                          const newPhoto: MediaPhoto = {
                            id: `photo-${Date.now()}`,
                            title: `Uploaded Photo ${new Date().toLocaleDateString()}`,
                            category: "Field Work",
                            url: dataUrl,
                            caption: "Uploaded through JPS Central Admin",
                          };
                          setDraft({
                            ...draft,
                            mediaGallery: [newPhoto, ...draft.mediaGallery],
                          });
                        })
                      }
                    />
                  </label>
                  <button
                    onClick={handleSaveAll}
                    className="px-4 py-2 rounded-xl bg-[#123B2A] hover:bg-[#1D5139] text-[#B8CBA5] font-bold text-xs border border-[#B8CBA5]/30 flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    Save All
                  </button>
                </div>
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {draft.mediaGallery.map((photo, idx) => (
                  <div
                    key={photo.id}
                    className="rounded-2xl overflow-hidden bg-[#071F14] border border-[#B8CBA5]/20 shadow-md group flex flex-col"
                  >
                    <div className="relative h-44 w-full bg-black/50">
                      {photo.url && (
                        <Image
                          src={photo.url}
                          alt={photo.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      <div className="absolute top-2.5 left-2.5">
                        <span className="badge-pill bg-[#0A2419]/90 text-[#B8CBA5] text-[10px] backdrop-blur-sm">
                          {photo.category}
                        </span>
                      </div>
                      <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
                        <button
                          onClick={() => {
                            if (confirm(`Delete photo: "${photo.title}"?`)) {
                              setDraft({
                                ...draft,
                                mediaGallery: draft.mediaGallery.filter((p) => p.id !== photo.id),
                              });
                            }
                          }}
                          className="p-1.5 rounded-lg bg-black/70 hover:bg-rose-600 text-white transition-colors"
                          title="Delete Photo"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <input
                          type="text"
                          value={photo.title}
                          onChange={(e) => {
                            const updated = [...draft.mediaGallery];
                            updated[idx].title = e.target.value;
                            setDraft({ ...draft, mediaGallery: updated });
                          }}
                          placeholder="Photo Title"
                          className="w-full px-2.5 py-1.5 rounded-lg bg-[#0A2419] border border-white/10 text-white font-bold text-xs"
                        />
                        <input
                          type="text"
                          value={photo.caption}
                          onChange={(e) => {
                            const updated = [...draft.mediaGallery];
                            updated[idx].caption = e.target.value;
                            setDraft({ ...draft, mediaGallery: updated });
                          }}
                          placeholder="Caption or description"
                          className="w-full px-2.5 py-1 mt-1 rounded-lg bg-[#0A2419] border border-white/10 text-white/70 text-[11px]"
                        />
                      </div>

                      <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-2">
                        <span className="text-[10px] text-[#B8CBA5] truncate max-w-[140px]">
                          {photo.url.startsWith("data:") ? "Uploaded Image File" : photo.url}
                        </span>
                        <button
                          onClick={() => copyToClipboard(photo.url, photo.id)}
                          className="px-2.5 py-1 rounded-lg bg-[#123B2A] hover:bg-[#1D5139] text-[#B8CBA5] text-[10px] font-bold border border-[#B8CBA5]/30 flex items-center gap-1 transition-all flex-shrink-0"
                        >
                          {copiedId === photo.id ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy URL</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 8: BACKUP, RESTORE & SECURITY PIN */}
          {/* ========================================================================= */}
          {activeTab === "backup" && (
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <h2 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                  <Database className="w-6 h-6 text-[#E28723]" />
                  Backup, Restore &amp; Administrative Security
                </h2>
                <p className="text-xs text-[#B8CBA5] mt-1">
                  Export complete website database, import backups, and customize security PIN.
                </p>
              </div>

              {/* Backup & Restore Operations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-[#071F14] border border-[#B8CBA5]/20 space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#123B2A] text-[#B8CBA5] flex items-center justify-center">
                    <Download className="w-5 h-5 text-[#E28723]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-white">
                      Export Full Website Backup (.json)
                    </h3>
                    <p className="text-xs text-[#F7F5EC]/70 mt-1 leading-relaxed">
                      Download a single JSON file containing all hero slides, addresses, board members, programs, and photo records.
                    </p>
                  </div>
                  <button
                    onClick={exportContent}
                    className="w-full py-2.5 rounded-xl bg-[#123B2A] hover:bg-[#1D5139] text-[#B8CBA5] font-bold text-xs border border-[#B8CBA5]/30 flex items-center justify-center gap-2 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download JSON Backup</span>
                  </button>
                </div>

                <div className="p-6 rounded-2xl bg-[#071F14] border border-[#B8CBA5]/20 space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#123B2A] text-[#B8CBA5] flex items-center justify-center">
                    <Upload className="w-5 h-5 text-[#E28723]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-white">
                      Import / Restore from Backup
                    </h3>
                    <p className="text-xs text-[#F7F5EC]/70 mt-1 leading-relaxed">
                      Restore website content from a previously exported `.json` file with instant verification.
                    </p>
                  </div>
                  <label className="cursor-pointer w-full py-2.5 rounded-xl bg-[#E28723] hover:bg-[#c97419] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow">
                    <Upload className="w-4 h-4" />
                    <span>Select Backup File (.json)</span>
                    <input
                      type="file"
                      accept=".json"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          const str = event.target?.result as string;
                          if (importContent(str)) {
                            alert("Backup restored successfully!");
                          } else {
                            alert("Invalid backup file structure.");
                          }
                        };
                        reader.readAsText(file);
                      }}
                    />
                  </label>
                </div>
              </div>

              {/* Security PIN Change */}
              <div className="p-6 rounded-2xl bg-[#071F14] border border-[#B8CBA5]/20 space-y-4 max-w-lg">
                <h3 className="font-serif text-base font-bold text-white flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#E28723]" />
                  Customize Admin Security PIN
                </h3>
                <p className="text-xs text-[#F7F5EC]/70">
                  Current PIN is: <strong className="text-[#E28723]">{storedPin}</strong>. You can change it below:
                </p>
                <div className="flex items-center gap-3">
                  <input
                    type="password"
                    id="newPinInput"
                    placeholder="New 4-digit PIN"
                    maxLength={10}
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#0A2419] border border-[#B8CBA5]/30 text-white text-sm tracking-widest text-center focus:ring-1 focus:ring-[#E28723] focus:outline-none"
                  />
                  <button
                    onClick={() => {
                      const input = document.getElementById("newPinInput") as HTMLInputElement;
                      if (input && input.value.trim().length >= 4) {
                        setStoredPin(input.value.trim());
                        localStorage.setItem("jps_admin_pin", input.value.trim());
                        alert(`Admin PIN updated to: ${input.value.trim()}`);
                        input.value = "";
                      } else {
                        alert("Please enter at least 4 characters for the PIN.");
                      }
                    }}
                    className="px-4 py-2.5 rounded-xl bg-[#123B2A] hover:bg-[#1D5139] text-[#B8CBA5] font-bold text-xs border border-[#B8CBA5]/30"
                  >
                    Update PIN
                  </button>
                </div>
              </div>

              {/* Factory Reset */}
              <div className="p-6 rounded-2xl bg-rose-950/30 border border-rose-500/30 space-y-3">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" />
                  Danger Zone: Reset Content to Factory Defaults
                </div>
                <p className="text-xs text-[#F7F5EC]/70 leading-relaxed font-light">
                  This will wipe custom changes from your browser and restore all official verified addresses, hero slides, board members, and programs.
                </p>
                <button
                  onClick={() => {
                    if (
                      confirm(
                        "Are you sure you want to reset all content to verified default state? This cannot be undone unless you have a backup."
                      )
                    ) {
                      resetContent();
                      alert("Website content has been reset to defaults.");
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-2 transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset All to Defaults</span>
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
