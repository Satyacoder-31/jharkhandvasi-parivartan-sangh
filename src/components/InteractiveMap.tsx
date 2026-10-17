"use client";

import { useState } from "react";
import { MapPin, Phone, Users, CheckCircle, ExternalLink, ShieldCheck } from "lucide-react";

interface Hub {
  id: string;
  name: string;
  region: string;
  state: string;
  category: string;
  description: string;
  activities: string[];
  helpline: string;
  established: string;
}

const hubs: Hub[] = [
  {
    id: "mumbai",
    name: "Mumbai Registered Head Office & Central Helpline",
    region: "32 Nalanda Society, Gorai-1, Borivali West",
    state: "Maharashtra",
    category: "Operational Headquarters",
    description:
      "Core operational hub managing 24/7 emergency response for migrant laborers, free eye and medical checkup camps, hospital liaison, and legal aid across the Mumbai Metropolitan Region.",
    activities: [
      "24/7 Emergency Helpline (+91 78080 08058 / +91 90222 88222)",
      "Senior Citizen Free Medical & Eye Camps",
      "Coordination with Child Welfare Committee (CWC)",
      "Mortal Remains Dignified Repatriation Support",
    ],
    helpline: "+91 78080 08058",
    established: "2005 (Movement) / 2013 (Trust)",
  },
  {
    id: "giridih",
    name: "Giridih Official Branch Office",
    region: "DK Traders, Buxidih Road, Near Bus Stand",
    state: "Jharkhand",
    category: "Official State Branch",
    description:
      "Official regional branch coordinating community outreach, family distress relief, educational development, and returning worker rehabilitation across Giridih and surrounding districts.",
    activities: [
      "Grassroots Family Distress Assistance",
      "Youth Skill Development & Educational Guidance",
      "Inter-state Coordination with Mumbai Head Office",
    ],
    helpline: "+91 78080 08058",
    established: "2013",
  },
  {
    id: "ranchi",
    name: "Ranchi Administrative Liaison Cell",
    region: "Ranchi District",
    state: "Jharkhand",
    category: "State Coordination",
    description:
      "Coordinates with district collectors, labor departments, and village panchayats for migrant worker rehabilitation, compensation claims, and grassroots family relief.",
    activities: [
      "Panchayat Level Family Distress Relief",
      "Inter-state Administrative Liaison",
      "Rehabilitation Coordination for Returned Workers",
    ],
    helpline: "+91 78080 08058",
    established: "2016",
  },
  {
    id: "singhbhum",
    name: "West Singhbhum Community Forestry & Nature Hub",
    region: "Saranda Forest Foothills",
    state: "Jharkhand",
    category: "Nature & Ecology Hub",
    description:
      "Signature environmental center focused on native Sal and Mahua tree sapling nurseries, sacred grove (Sarna Sthal) awareness, community cleanliness drives, and soil conservation.",
    activities: [
      "Community Tree Planting & Sapling Nurseries",
      "Water Catchment & Watershed Protection Awareness",
      "Tribal Ecological Heritage Documentation",
    ],
    helpline: "Inquiry via Central Helpline",
    established: "Active Proposed Area",
  },
  {
    id: "dumka",
    name: "Santhal Pargana Child Literacy & Welfare Cluster",
    region: "Dumka & Subdivisions",
    state: "Jharkhand",
    category: "Education Outreach",
    description:
      "Focuses on rural child schooling encouragement, distribution of Shiksha Protsahan kits, learning material support, and girl child educational retention.",
    activities: [
      "Shiksha Protsahan Study Kit Distribution",
      "Community Study Centers & Mentorship",
      "School Dropout Prevention Drives",
    ],
    helpline: "Inquiry via Central Helpline",
    established: "2018",
  },
];

export default function InteractiveMap() {
  const [selectedHub, setSelectedHub] = useState<Hub>(hubs[0]);

  return (
    <div className="bg-[#123B2A] text-white rounded-3xl p-6 sm:p-10 border border-[#B8CBA5]/20 shadow-xl">
      <div className="max-w-3xl mb-8">
        <span className="badge-pill bg-[#B8CBA5]/20 text-[#B8CBA5] border border-[#B8CBA5]/30 mb-3">
          Verified Project Locations
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
          Grassroots Presence Across <span className="italic text-[#B8CBA5]">Mumbai & Jharkhand</span>
        </h3>
        <p className="text-sm text-[#F7F5EC]/80 mt-2 font-light">
          JPS bridges the migrant corridor between Western India and Eastern Jharkhand, providing direct assistance where vulnerability is highest.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Hub Selection Buttons (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {hubs.map((hub) => {
            const isSelected = selectedHub.id === hub.id;
            return (
              <button
                key={hub.id}
                onClick={() => setSelectedHub(hub)}
                className={`text-left p-4 rounded-2xl transition-all border ${
                  isSelected
                    ? "bg-[#1D5139] border-[#B8CBA5] shadow-lg translate-x-1"
                    : "bg-[#0A2419]/60 border-white/10 hover:bg-[#1D5139]/40 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-[#E28723] font-semibold tracking-wider text-[11px] uppercase">
                    {hub.category}
                  </span>
                  <span className="text-[#B8CBA5] font-mono text-[11px]">
                    {hub.state}
                  </span>
                </div>
                <h4 className="font-serif text-base font-medium text-white">
                  {hub.name}
                </h4>
                <p className="text-xs text-[#F7F5EC]/70 mt-1 line-clamp-1 font-light">
                  📍 {hub.region}, {hub.state}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Hub Detail Card (7 cols) */}
        <div className="lg:col-span-7 bg-[#1D5139]/90 rounded-2xl p-6 sm:p-8 border border-[#B8CBA5]/25 shadow-inner space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/15">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#B8CBA5] font-semibold">
                {selectedHub.category}
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-normal text-white mt-1">
                {selectedHub.name}
              </h4>
              <p className="text-xs text-[#F7F5EC]/75 mt-0.5">
                📍 {selectedHub.region}, {selectedHub.state}
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#123B2A] text-[#B8CBA5] text-xs font-medium border border-[#B8CBA5]/20">
              {selectedHub.established}
            </span>
          </div>

          <p className="text-sm text-[#F7F5EC]/90 leading-relaxed font-light">
            {selectedHub.description}
          </p>

          <div className="space-y-3">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-[#B8CBA5]">
              Active Grassroots Activities:
            </h5>
            <ul className="space-y-2">
              {selectedHub.activities.map((act, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-[#F7F5EC]/85">
                  <CheckCircle className="w-4 h-4 text-[#E28723] flex-shrink-0 mt-0.5" />
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#E28723]" />
              <span className="text-[#F7F5EC]/80">Helpline:</span>
              <strong className="text-white font-medium">{selectedHub.helpline}</strong>
            </div>
            <div className="flex items-center gap-1.5 text-[#B8CBA5] text-[11px]">
              <ShieldCheck className="w-4 h-4 text-[#E28723]" />
              <span>Verified Community Center</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
