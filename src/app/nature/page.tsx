import Image from "next/image";
import Link from "next/link";
import {
  TreePine,
  Droplets,
  Recycle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Layers,
  Leaf,
  Globe2,
} from "lucide-react";
import InteractiveMap from "@/components/InteractiveMap";

export const metadata = {
  title: "Nature & Sustainability | Jharkhandvasi Parivartan Sangh",
  description:
    "Explore JPS's signature nature & sustainability initiative: Sal forest conservation, native tree planting, watershed management, plastic reduction, and tribal ecological wisdom in Jharkhand and Mumbai.",
};

const nativeTrees = [
  {
    name: "Sal Tree (Shorea robusta)",
    hindi: "सखुआ / साल",
    role: "Keystone Species & Cultural Symbol",
    desc: "The sacred tree of tribal Sarhul celebrations and the backbone of Jharkhand's forests. Its extensive root architecture anchors red soil, prevents erosion, and regulates natural ground aquifers.",
    status: "Active Cultivation",
  },
  {
    name: "Mahua (Madhuca longifolia)",
    hindi: "महुआ",
    role: "Livelihood & Biodiversity Provider",
    desc: "A perennial source of nutrition, traditional remedies, and sustenance for forest-dwelling communities and birds. Critical for sustaining indigenous village ecosystems.",
    status: "Active Cultivation",
  },
  {
    name: "Palash (Butea monosperma)",
    hindi: "पलाश / ढाक",
    role: "Flame of the Forest & Soil Enricher",
    desc: "Known as the Flame of the Forest, Palash blossoms mark the arrival of spring. Its nitrogen-fixing properties restore soil fertility on degraded pasture hills.",
    status: "Seasonal Planting",
  },
  {
    name: "Karanj (Millettia pinnata)",
    hindi: "करंज",
    role: "Water Stream & Bank Stabilizer",
    desc: "Fast-growing hardy tree whose roots bind riverbanks, preventing landslides during monsoon deluges while producing traditional antiseptic seed oil.",
    status: "Active Cultivation",
  },
];

const ecoInitiatives = [
  {
    id: 1,
    title: "Community Native Sapling Nursery",
    category: "Reforestation",
    status: "Active",
    statusColor: "bg-emerald-100 text-emerald-800",
    desc: "Propagating wild-harvested Sal and Mahua seeds into sturdy saplings ready for community planting in degraded lands.",
    location: "West Singhbhum foothills, Jharkhand",
  },
  {
    id: 2,
    title: "Sacred Grove (Sarna Sthal) Preservation",
    category: "Tribal Ecology",
    status: "Active",
    statusColor: "bg-emerald-100 text-emerald-800",
    desc: "Documenting and protecting sacred tribal groves from encroachment and commercial logging, honoring indigenous environmental sanctity.",
    location: "Ranchi & Khunti Districts, Jharkhand",
  },
  {
    id: 3,
    title: "Neighborhood Plastic Reduction & Waste Segregation",
    category: "Urban Ecology",
    status: "Active",
    statusColor: "bg-emerald-100 text-emerald-800",
    desc: "Grassroots workshops in low-income Mumbai neighborhoods to discourage single-use plastic and introduce organic composting.",
    location: "Borivali West & Suburban Mumbai",
  },
  {
    id: 4,
    title: "Rainwater Watershed Catchment Campaign",
    category: "Water Security",
    status: "Proposed",
    statusColor: "bg-amber-100 text-amber-800",
    desc: "Proposed community bunding and earthen check-dam construction in rainfed rural villages to recharge dried village wells.",
    location: "Rural Santhal Pargana, Jharkhand",
  },
  {
    id: 5,
    title: "Eco-Literacy in Rural Primary Schools",
    category: "Environmental Education",
    status: "Upcoming",
    statusColor: "bg-blue-100 text-blue-800",
    desc: "Interactive outdoor nature sessions teaching students how to identify native trees, care for saplings, and maintain plastic-free schoolyards.",
    location: "Selected Community Schools",
  },
];

export default function NaturePage() {
  return (
    <div className="space-y-16 lg:space-y-24 pb-24 overflow-x-hidden w-full max-w-full">
      {/* 1. CINEMATIC NATURE HERO */}
      <section className="relative w-full min-h-[580px] lg:min-h-[680px] flex items-center justify-center bg-[#05140D] text-white overflow-hidden">
        <Image
          src="/images/hero-forest.jpg"
          alt="Ancient Sal and Mahua forest of Jharkhand with sun rays"
          fill
          priority
          className="object-cover object-center filter brightness-85"
          sizes="100vw"
        />
        {/* Rich cinematic dark gradient overlays like homepage hero */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05140D]/90 via-[#05140D]/65 to-[#05140D]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05140D] via-transparent to-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 sm:pt-40 pb-20 lg:pb-28 text-center space-y-6">
          <span className="badge-pill bg-[#B8CBA5]/20 text-[#B8CBA5] border border-[#B8CBA5]/30 mx-auto">
            <TreePine className="w-3.5 h-3.5 text-[#E28723]" />
            Signature Environmental Mission
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight max-w-4xl mx-auto">
            Honoring the Forest. <span className="italic text-[#B8CBA5]">Restoring</span> the Earth.
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#F7F5EC]/85 font-light max-w-2xl mx-auto leading-relaxed">
            Rooted in Jharkhand's indigenous worldview, Jharkhandvasi Parivartan Sangh connects forest preservation, watershed conservation, and urban environmental responsibility.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/get-involved"
              className="px-7 py-3.5 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs sm:text-sm font-bold tracking-wide shadow-lg transition-all"
            >
              Volunteer For Tree Planting
            </Link>
            <Link
              href="#directory"
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F7F5EC] text-xs sm:text-sm font-semibold tracking-wide border border-white/25 transition-all"
            >
              View Initiative Directory
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE INDIGENOUS PHILOSOPHY OF NATURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="badge-pill bg-[#B8CBA5]/20 text-[#123B2A]">
              Ecological Heritage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#123B2A] leading-tight">
              Nature is Not Property. <span className="italic text-[#6F8D58]">Nature is Kin.</span>
            </h2>
            <p className="text-sm text-[#17231C]/80 font-light leading-relaxed">
              In Jharkhand—the "Land of Forests"—tribal society has lived in balance with the Sal canopy for millennia. The sacred festival of <strong>Sarhul</strong> reveres the Sal tree in full bloom, symbolizing renewal, fertility, and mutual respect between humans and forest organisms.
            </p>
            <p className="text-sm text-[#17231C]/80 font-light leading-relaxed">
              When industrialization and climate fluctuations threaten these ecosystems, communities lose their clean mountain streams and medicinal biodiversity. JPS acts as an environmental guardian, fostering practical reforestation and teaching urban diaspora families the ecological roots of their homeland.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F7F5EC] border border-[#123B2A]/10">
                <Leaf className="w-5 h-5 text-[#1D5139] mb-1" />
                <h4 className="font-serif text-sm font-bold text-[#123B2A]">Native Reforestation</h4>
                <p className="text-[11px] text-[#795943] font-light">Prioritizing indigenous forest species over mono-crops.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F7F5EC] border border-[#123B2A]/10">
                <Droplets className="w-5 h-5 text-[#1D5139] mb-1" />
                <h4 className="font-serif text-sm font-bold text-[#123B2A]">Watershed Wisdom</h4>
                <p className="text-[11px] text-[#795943] font-light">Conserving rain runoff to nurture local underground aquifers.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-[#123B2A]/10">
            <Image
              src="/images/watershed-nature.jpg"
              alt="Pristine mountain stream and red soil banks in Jharkhand"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2419]/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs uppercase tracking-wider text-[#B8CBA5] font-semibold">
                Protected Watershed Corridor
              </span>
              <h4 className="font-serif text-lg font-normal">
                Netarhat Highlands & Subarnarekha River Basin
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NATIVE TREE DIRECTORY */}
      <section className="bg-[#F7F5EC] py-16 sm:py-20 border-y border-[#123B2A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="badge-pill bg-[#B8CBA5]/30 text-[#123B2A]">
              Botanical Heritage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#123B2A]">
              Native Trees of the Chota Nagpur Plateau
            </h2>
            <p className="text-xs sm:text-sm text-[#795943] font-light">
              Trees cultivated in our community nurseries for restorative soil stabilization and seasonal tribal sustenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nativeTrees.map((tree, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-3xl border border-[#123B2A]/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="badge-pill bg-[#E9F0E4] text-[#1D5139] text-[10px]">
                    {tree.status}
                  </span>
                  <h3 className="font-serif text-lg font-normal text-[#123B2A]">
                    {tree.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#795943] block">
                    {tree.hindi} • {tree.role}
                  </span>
                  <p className="text-xs text-[#17231C]/75 font-light leading-relaxed pt-1">
                    {tree.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ENVIRONMENTAL INITIATIVES DIRECTORY WITH STATUS LABELS */}
      <section id="directory" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <span className="badge-pill bg-[#B8CBA5]/20 text-[#123B2A] mb-2">
            Transparency in Action
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#123B2A]">
            Environmental Project Directory
          </h2>
          <p className="text-xs sm:text-sm text-[#795943] mt-1 font-light">
            We clearly label our projects as <strong>Active</strong>, <strong>Upcoming</strong>, or <strong>Proposed</strong> to uphold complete institutional honesty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ecoInitiatives.map((init) => (
            <div
              key={init.id}
              className="bg-white p-6 rounded-3xl border border-[#123B2A]/10 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-xs font-semibold text-[#795943]">
                    {init.category}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${init.statusColor}`}>
                    {init.status}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-normal text-[#123B2A]">
                  {init.title}
                </h3>
                <p className="text-xs text-[#17231C]/75 font-light leading-relaxed">
                  {init.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#123B2A]/10 text-xs text-[#795943] flex items-center justify-between">
                <span>📍 {init.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TREE PLANTING PHOTO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden h-[340px] sm:h-[420px] shadow-2xl border border-[#B8CBA5]/20 bg-[#05140D]">
          <Image
            src="/images/tree-planting.jpg"
            alt="Community tree planting in Jharkhand by JPS volunteers"
            fill
            className="object-cover object-center filter brightness-85"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          {/* Rich cinematic dark gradient overlays like homepage hero */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#05140D]/90 via-[#05140D]/65 to-[#05140D]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05140D] via-transparent to-black/50" />
          <div className="absolute inset-0 p-8 sm:p-14 flex flex-col justify-center max-w-xl text-white space-y-4">
            <span className="badge-pill bg-[#B8CBA5]/20 text-[#B8CBA5] border border-white/20 self-start">
              Planting Seeds of Transformation
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-normal leading-tight">
              Join Our Next Community Tree Planting Drive
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F5EC]/85 font-light leading-relaxed">
              Every sapling planted today shields our soil against drought, purifies the air, and protects our grandchildren's heritage.
            </p>
            <div className="pt-2">
              <Link
                href="/get-involved"
                className="px-6 py-3 rounded-full bg-[#E28723] hover:bg-[#c97419] text-white text-xs font-bold tracking-wide shadow transition-all inline-flex items-center gap-2"
              >
                <span>Register as an Eco Volunteer</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROJECT HUBS MAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <InteractiveMap />
      </section>
    </div>
  );
}
