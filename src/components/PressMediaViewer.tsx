"use client";

import { useState } from "react";
import Image from "next/image";
import { Newspaper, ZoomIn, X, ExternalLink, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";

interface PressItem {
  id: string;
  publication: string;
  headline: string;
  date: string;
  badge: string;
  image: string;
  summary: string;
  fullExcerpt?: string;
}

const pressItems: PressItem[] = [
  {
    id: "jagran",
    publication: "Jharkhand Jagran (दैनिक जागरण)",
    headline: "मध्यमवर्गीय परिवार के लिए अलग से फंड जारी करें राज्य सरकारें : अरविन्द आर्य",
    date: "विशेष राष्ट्रीय वक्तव्य",
    badge: "National Hindi Daily",
    image: "/images/press/dainik-jagran-arvind-arya.jpg",
    summary:
      "संस्थापक/राष्ट्रीय अध्यक्ष अरविंद आर्य ने केंद्र व राज्य सरकारों से कोविड लॉकडाउन व आपातकाल के दौरान प्रवासी व मध्यमवर्गीय परिवारों के लिए विशेष राहत पैकेज और कल्याणकारी फंड की मांग उठाई।",
    fullExcerpt:
      "झारखंडवासी परिवर्तन संघ के राष्ट्रीय अध्यक्ष अरविंद आर्य ने कहा कि मुंबई, दिल्ली, चेन्नई जैसे प्रदेशों में रहने वाले मध्यमवर्गीय परिवारों को हर महीने घर का भाड़ा, बिजली-पानी का बिल, राशन और मेडिकल खर्च वहन करना पड़ता है। सरकार इनके लिए विशेष राहत फंड का प्रावधान करे।",
  },
  {
    id: "nbt",
    publication: "Navbharat Times (नवभारत टाइम्स - NBT)",
    headline: "जवान बनाने के लिए बच्चियों को इंजेक्शन देती थी मालकिन — मानव तस्करी भंडाफोड़",
    date: "मुंबई महानगरीय खोजी रिपोर्ट",
    badge: "Leading Metro Daily",
    image: "/images/press/nbt-human-trafficking-expose.jpg",
    summary:
      "मुंबई की पॉश सोसायटी में झारखंड से तस्करी कर लाई गई नाबालिग युवतियों को प्रताड़ित करने का बड़ा खुलासा; झारखंडवासी परिवर्तन संघ के हस्तक्षेप और कानूनी लड़ाई से बच्चियों को मुक्ति मिली।",
    fullExcerpt:
      "चारकोप पुलिस स्टेशन के अंतर्गत दर्ज मामले में मानव तस्करों के जरिए झारखंड की रहने वाली दो युवतियों को प्रताड़ित किया जा रहा था। मामले की सूचना पर संघ व पुलिस प्रशासन की त्वरित कार्रवाई से युवतियों को महिला सुधार गृह में सुरक्षित पहुंचाया गया।",
  },
  {
    id: "santhal-hool",
    publication: "Santhal Hool Express (संथाल हूल एक्सप्रेस)",
    headline: "मुंबई में मनाया गया 22वाँ झारखंड स्थापना दिवस महोत्सव",
    date: "22 नवंबर 2022 • गिरिडीह / साहिबगंज",
    badge: "Jharkhand Regional Express",
    image: "/images/press/santhal-hool-express-22nd-sthapna.jpg",
    summary:
      "दादर के शिवाजी मंदिर हॉल में त्रैमासिक पत्रिका 'अपना झारखंड' का विमोचन; प्रधानमंत्री नरेंद्र मोदी के भ्राता प्रह्लाद दामोदरदास मोदी, विधायक अमित यादव, वरिष्ठ अधिवक्ता आशीष शेलार द्वारा सम्मान।",
    fullExcerpt:
      "प्रकृति की गोद में बसे राज्य का सुंदर होना लाजिमी है: मुख्य अतिथि प्रह्लाद दामोदरदास मोदी ने कहा कि झारखंड जल और जंगल का राज्य है। संस्था के संस्थापक अध्यक्ष अरविंद आर्य ने बताया कि संघ पिछले 22 वर्षों से इस महोत्सव का सफल आयोजन कर रहा है।",
  },
  {
    id: "pahla-samachar",
    publication: "Dainik Pahla Samachar (दैनिक पहला समाचार)",
    headline: "झारखंड के स्थापना दिवस पर जुटे कई दिग्गज",
    date: "30 नवंबर 2023 • मुंबई",
    badge: "Press Syndicate",
    image: "/images/press/pahla-samachar-sthapna-diwas.jpg",
    summary:
      "कांदिवली ईस्ट स्थित तेरापंथ भवन ऑडिटोरियम में भव्य आयोजन; भाजपा राष्ट्रीय प्रवक्ता तुहीन सिन्हा, आजसू प्रथम अध्यक्ष ललित महतो व मुंबई के गणमान्य हस्तियों की उपस्थिति।",
    fullExcerpt:
      "मुंबई में दिखा झारखंड की झलक। विभिन्न क्षेत्रों में उत्कृष्ट योगदान देने वाले समाजसेवियों को धरती आबा बिरसा मुंडा अवार्ड से सम्मानित किया गया। संस्थापक अध्यक्ष अरविंद आर्य ने कहा कि मुंबई में बसे झारखंडी भाइयों के कल्याण हेतु संघ सदैव तत्पर है।",
  },
  {
    id: "pratahkal",
    publication: "Pratahkal (प्रातःकाल - pratahkai.com)",
    headline: "झारखंडवासी परिवर्तन संघ द्वारा सांस्कृतिक कार्यक्रम का आयोजन",
    date: "बोरिवली कोरा केन्द्र ग्राउंड",
    badge: "State Daily",
    image: "/images/press/pratahkal-cultural-mahotsav.jpg",
    summary:
      "बोरिवली में भव्य सांस्कृतिक कार्यक्रम एवं अतिथि सम्मान समारोह; सुप्रसिद्ध झारखंडी गायक नितेश कच्छप व गायिका गरिमा एक्का की शानदार सांगीतिक प्रस्तुतियां।",
    fullExcerpt:
      "शिवसेना नेता संजय निरुपम, शिवा शेट्टी, जयप्रकाश सिंह सहित कई वरिष्ठ नेता उपस्थित रहे। गायक नितेश कच्छप के लोकप्रिय लोकगीतों पर दर्शक झूमते नजर आए। संयोजक मनुलाल बैठा व रामकुमार पाल के मार्गदर्शन में कार्यक्रम संपन्न हुआ।",
  },
  {
    id: "jagat-prahari",
    publication: "Jagat Prahari (जगत प्रहरी)",
    headline: "दहिसर में सरस्वती पूजा पर श्रद्धालुओं की भीड़ — संघ ने बांटे 250 चश्मे",
    date: "26 जनवरी 2015",
    badge: "Community Outreach",
    image: "/images/press/jagat-prahari-sarawati-puja.jpg",
    summary:
      "दहिसर में पारंपरिक सरस्वती पूजा के अवसर पर निःशुल्क नेत्र जांच एवं मोतियाबिंद शिविर का आयोजन; 250 जरूरतमंद वृद्धों को चश्मे वितरित।",
    fullExcerpt:
      "संघ के राष्ट्रीय अध्यक्ष एवं संस्थापक अरविंद कुमार ने बताया कि प्राचीन परंपराओं के अनुसार पूजा समिति द्वारा पिछले दो सालों से ज्ञान की देवी मां सरस्वती की पूजा विधिपूर्वक संपन्न की जा रही है और साथ ही चिकित्सा सहायता शिविर चलाए जा रहे हैं।",
  },
  {
    id: "hindustan",
    publication: "Hindustan (दैनिक हिंदुस्तान)",
    headline: "मुंबई में धूमधाम से झारखंड का स्थापना दिवस मना",
    date: "राज्य स्थापना दिवस विशेष",
    badge: "National Hindi Daily",
    image: "/images/press/hindustan-sthapna-diwas.jpg",
    summary:
      "मुंबई में रह रहे हजारों झारखंडियों ने अपनी सांस्कृतिक विरासत, लोकनृत्य और संगीत के साथ स्थापना दिवस मनाया; प्रवासी श्रमिकों के लिए सामाजिक सुरक्षा योजनाओं की समीक्षा।",
    fullExcerpt:
      "झारखंड के पूर्व मुख्यमंत्री बाबूलाल मरांडी एवं वरिष्ठ जनप्रतिनिधियों ने मुंबई में झारखंडियों के अधिकारों की रक्षा व सामाजिक सशक्तिकरण के प्रयासों की भूरि-भूरि प्रशंसा की।",
  },
  {
    id: "foundation-awards",
    publication: "Dadar Shivaji Mandir Chronicle",
    headline: "झारखंड स्थापना दिवस पर प्रतिभाओं का सम्मान",
    date: "वार्षिक सम्मेलन",
    badge: "Heritage Archive",
    image: "/images/press/jharkhand-foundation-day-award.jpg",
    summary:
      "मुंबई में 15 वर्षों से निरंतर आयोजित स्थापना दिवस समारोह में साहित्य, सिनेमा, चिकित्सा और समाजसेवा की 22 विभूतियों को शॉल और प्रशस्ति पत्र भेंट।",
    fullExcerpt:
      "झारखंड के प्राकृतिक सौंदर्य, खनिज संपदा और जनजातीय संस्कृति को प्रदर्शित करती रंगारंग सांस्कृतिक संध्या में संथाली, छऊ और करमा नृत्यों का सजीव मंचन किया गया।",
  },
];

export default function PressMediaViewer() {
  const [selectedItem, setSelectedItem] = useState<PressItem | null>(null);

  return (
    <div className="space-y-16">
      {/* 1. STATEWIDE NEWSPAPER MAP OF JHARKHAND — CLEAR OPEN DISPLAY */}
      <div className="bg-gradient-to-br from-[#071F14] via-[#0E2F20] to-[#05180F] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#B8CBA5]/25 shadow-2xl relative overflow-hidden space-y-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1D5139]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge-pill bg-[#E28723]/20 text-[#E28723] border border-[#E28723]/30">
              Official Media Collage
            </span>
            <span className="text-xs text-[#B8CBA5] font-semibold tracking-wider">
              अखबारों के पन्नों में झारखंड • 2005–2026
            </span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white">
            The <span className="text-[#B8CBA5] italic">Statewide Newspaper Map</span> of Jharkhand
          </h3>

          <p className="text-sm sm:text-base text-[#F7F5EC]/85 font-light leading-relaxed">
            Every curve and boundary of this map is composed of real newspaper clippings and headlines capturing JPS&apos;s two decades of humanitarian work across all 24 districts — from Sahibganj, Deoghar, and Giridih to Ranchi, Palamu, and the Mumbai diaspora.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] text-[#B8CBA5] uppercase block font-semibold">Media Sources</span>
              <span className="font-serif text-base font-bold text-white">15+ Dailies</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] text-[#E28723] uppercase block font-semibold">Districts Covered</span>
              <span className="font-serif text-base font-bold text-white">All 24 Districts</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
              <span className="text-[10px] text-[#B8CBA5] uppercase block font-semibold">Archive Span</span>
              <span className="font-serif text-base font-bold text-white">2005 – 2026</span>
            </div>
          </div>
        </div>

        {/* Clear, High-Resolution Map Showcase Displayed Directly on the Page */}
        <div className="relative z-10 bg-[#04120A] rounded-2xl border-2 border-[#B8CBA5]/30 p-4 sm:p-8 flex flex-col items-center justify-center shadow-2xl">
          <div className="relative w-full h-[450px] sm:h-[600px] lg:h-[720px] max-w-5xl">
            <Image
              src="/images/press/jharkhand-newspaper-map.png"
              alt="Statewide Newspaper Map of Jharkhand - JPS Media Chronicle"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>

          {/* Clean Caption & Download Bar */}
          <div className="w-full max-w-5xl mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F5EC]/80">
            <div className="flex items-center gap-2 text-center sm:text-left">
              <MapPin className="w-4 h-4 text-[#E28723] flex-shrink-0" />
              <span>
                <strong>Official Archival Silhouette:</strong> 3573 × 2851 px resolution featuring 15+ regional Hindi dailies across all 24 districts of Jharkhand.
              </span>
            </div>

            <a
              href="/images/press/jharkhand-newspaper-map.png"
              download="Jharkhand-Newspaper-Map-JPS.png"
              className="px-5 py-2.5 rounded-full bg-[#E28723] hover:bg-[#c9741b] text-white text-xs font-bold tracking-wider transition-all flex items-center gap-2 flex-shrink-0 shadow-md"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Download Original Full-Res PNG</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. REAL PRESS CLIPPINGS GALLERY WITH INTERACTIVE VIEWER */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="badge-pill bg-[#B8CBA5]/20 text-[#123B2A] mb-1">
              Archival Evidence
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#123B2A]">
              Original Newspaper Articles & Investigation Scans
            </h3>
            <p className="text-xs text-[#17231C]/75 font-light">
              Click on any newspaper clipping below to open the complete high-resolution scanned report.
            </p>
          </div>
          <span className="text-xs font-semibold text-[#1D5139] bg-[#E9F0E4] px-3 py-1.5 rounded-full self-start sm:self-auto">
            {pressItems.length} Scanned Articles Available
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pressItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-white rounded-2xl overflow-hidden border border-[#123B2A]/10 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full bg-[#f4f1ea] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.headline}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#123B2A]/90 text-[#B8CBA5] backdrop-blur-sm shadow">
                      {item.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-sm p-1.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-3.5 h-3.5 text-[#E28723]" />
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <span className="text-[10px] text-[#795943] font-semibold tracking-wide uppercase block">
                    {item.publication}
                  </span>
                  <h4 className="font-serif text-sm font-bold text-[#123B2A] group-hover:text-[#1D5139] transition-colors leading-snug line-clamp-2">
                    {item.headline}
                  </h4>
                  <p className="text-[11px] text-[#17231C]/75 font-light leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-2 border-t border-[#123B2A]/5 text-[10px] text-[#795943] flex items-center justify-between">
                <span>{item.date}</span>
                <span className="text-[#1D5139] font-medium group-hover:underline flex items-center gap-1">
                  Read Scan →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL 1: HIGH-RES NEWSPAPER ARTICLE LIGHTBOX */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-[#0b1712] text-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden border border-[#B8CBA5]/30 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2">
                <Newspaper className="w-4 h-4 text-[#E28723]" />
                <span className="text-xs uppercase font-bold tracking-wider text-[#B8CBA5]">
                  {selectedItem.publication}
                </span>
                <span className="text-xs text-white/40">•</span>
                <span className="text-xs text-white/70">{selectedItem.date}</span>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-4">
              <div className="relative w-full h-[60vh] max-h-[600px] bg-black/40 rounded-xl overflow-hidden border border-white/10">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.headline}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 800px"
                  priority
                />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
                  {selectedItem.headline}
                </h3>
                <p className="text-xs sm:text-sm text-[#F7F5EC]/85 font-light leading-relaxed">
                  {selectedItem.fullExcerpt || selectedItem.summary}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/10 flex items-center justify-between flex-shrink-0 bg-black/30">
              <span className="text-xs text-[#B8CBA5]">
                Source: Jharkhandvasi Parivartan Sangh Official Archive
              </span>
              <a
                href={selectedItem.image}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#E28723] hover:underline flex items-center gap-1 font-semibold"
              >
                Open Original Image <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
