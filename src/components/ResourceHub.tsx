"use client";

import { useState } from "react";
import { Search, FileText, Download, BookOpen, Calendar, ArrowRight, Tag } from "lucide-react";

interface Resource {
  id: number;
  title: string;
  category: "welfare" | "environment" | "education" | "report";
  categoryLabel: string;
  date: string;
  readTime: string;
  summary: string;
  fileSize: string;
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Migrant Worker Legal Rights & Emergency Healthcare Protocol Handbook",
    category: "welfare",
    categoryLabel: "Welfare Guide",
    date: "January 2026",
    readTime: "8 min read",
    summary:
      "A comprehensive grassroots guide explaining hospital admission procedures, wage dispute mechanisms under Maharashtra state labor laws, and emergency helpline contact pathways.",
    fileSize: "1.4 MB PDF",
  },
  {
    id: 2,
    title: "Native Flora of Jharkhand: Sal, Mahua & Community Watershed Conservation",
    category: "environment",
    categoryLabel: "Environmental Study",
    date: "February 2026",
    readTime: "12 min read",
    summary:
      "A detailed botanical and ecological documentation outlining the environmental role of Shorea robusta (Sal trees) in preventing topsoil erosion and preserving tribal forest habitats.",
    fileSize: "2.8 MB PDF",
  },
  {
    id: 3,
    title: "Shiksha Protsahan: Foundational Literacy Framework for First-Generation Learners",
    category: "education",
    categoryLabel: "Education Resource",
    date: "November 2025",
    readTime: "6 min read",
    summary:
      "A teaching blueprint developed with grassroots volunteers and community centers to reduce dropout rates among children of seasonal migrant workers.",
    fileSize: "1.1 MB PDF",
  },
  {
    id: 4,
    title: "Geriatric Healthcare in Informal Urban Settlements: Field Findings",
    category: "welfare",
    categoryLabel: "Health Report",
    date: "December 2025",
    readTime: "10 min read",
    summary:
      "Analysis derived from over 150 health checkups conducted across suburban Mumbai, emphasizing preventative hypertension and diabetic monitoring for elderly citizens.",
    fileSize: "2.0 MB PDF",
  },
  {
    id: 5,
    title: "Community Cleanliness & Plastic Segregation Guide for Neighborhoods",
    category: "environment",
    categoryLabel: "Eco Guide",
    date: "October 2025",
    readTime: "5 min read",
    summary:
      "Practical actionable steps for low-income residential blocks to establish organic composting, reduce single-use plastic, and maintain hygienic drains.",
    fileSize: "850 KB PDF",
  },
  {
    id: 6,
    title: "Tribal Freedom Struggle of Jharkhand: Bhagwan Birsa Munda & Ulgulan Legacy",
    category: "report",
    categoryLabel: "Cultural Heritage",
    date: "November 2025",
    readTime: "15 min read",
    summary:
      "Historical reflection on the revolutionary Ulgulan movement, land rights dignity, and preserving tribal cultural identity among diaspora families in Mumbai.",
    fileSize: "1.9 MB PDF",
  },
];

export default function ResourceHub() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { key: "all", label: "All Publications" },
    { key: "welfare", label: "Welfare & Rights" },
    { key: "environment", label: "Nature & Ecology" },
    { key: "education", label: "Education & Literacy" },
    { key: "report", label: "Heritage & Reports" },
  ];

  const filtered = resources.filter((item) => {
    const matchesCat =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-3xl border border-[#123B2A]/10 shadow-sm">
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-[#123B2A]/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search guides, reports, research..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#F7F5EC] border border-[#123B2A]/10 text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {categories.map((c) => {
            const isActive = selectedCategory === c.key;
            return (
              <button
                key={c.key}
                onClick={() => setSelectedCategory(c.key)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#123B2A] text-white shadow-sm"
                    : "bg-[#F7F5EC] text-[#17231C]/80 hover:bg-[#6F8D58]/15 border border-[#123B2A]/10"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Resource Cards Grid */}
      {filtered.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-3xl border border-[#123B2A]/10">
          <BookOpen className="w-8 h-8 text-[#1D5139]/40 mx-auto mb-2" />
          <p className="text-sm text-[#17231C]/70">
            No resources match your current search query.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 border border-[#123B2A]/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="badge-pill bg-[#E9F0E4] text-[#123B2A] text-[10px]">
                    {item.categoryLabel}
                  </span>
                  <span className="text-[11px] text-[#795943] font-mono">
                    {item.readTime}
                  </span>
                </div>

                <h4 className="font-serif text-lg font-normal text-[#123B2A] leading-snug group-hover:text-[#1D5139] transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-[#17231C]/75 font-light leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#123B2A]/10 flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#795943] font-mono">
                  {item.fileSize}
                </span>

                <button
                  onClick={() =>
                    alert(`Sample Educational Document Preview: "${item.title}". Contact JPS Office (+91 78080 08058) for complete physical distribution batches.`)
                  }
                  className="inline-flex items-center gap-1.5 font-bold text-[#1D5139] hover:underline"
                >
                  <Download className="w-3.5 h-3.5 text-[#E28723]" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
