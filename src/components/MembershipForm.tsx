"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  FileText,
  User,
  MapPin,
  Phone,
  Briefcase,
  Users,
  ShieldCheck,
  Download,
  Printer,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FamilyMember {
  name: string;
  relation: string;
  dobOrAge: string;
  qualification: string;
}

export default function MembershipForm() {
  const { language } = useLanguage();
  const isHi = language === "hi";

  const [formData, setFormData] = useState({
    designation: "सामान्य सदस्य (General Member)",
    name: "",
    dob: "",
    age: "",
    placeOfBirth: "",
    anniversary: "",
    bloodGroup: "O+",
    education: "Graduation (स्नातक)",
    maritalStatus: "Married (विवाहित)",
    localAddress: "",
    permanentAddress: "",
    mobile: "",
    altContact: "",
    email: "",
    occupation: "Service (निजी सेवा / नौकरी)",
    dutiesPost: "",
    officeAddress: "",
    ngoOrParty: "No",
    ngoOrPartyDetails: "",
    documents: [
      "Aadhar Card",
      "PAN Card",
      "Passport Size Photo",
    ] as string[],
    declaration: false,
  });

  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([
    { name: "", relation: "", dobOrAge: "", qualification: "" },
  ]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [appId, setAppId] = useState("");
  const [generatedMessage, setGeneratedMessage] = useState("");

  const documentOptions = [
    { id: "Aadhar Card", label: isHi ? "आधार कार्ड (Aadhar Card)" : "Aadhar Card" },
    { id: "PAN Card", label: isHi ? "पैन कार्ड (PAN Card)" : "PAN Card" },
    { id: "Voter ID Card", label: isHi ? "मतदाता पहचान पत्र (Voter ID)" : "Voter ID Card" },
    { id: "Passport Size Photo", label: isHi ? "पासपोर्ट साइज फोटो (Passport Photo)" : "Passport Photo" },
    { id: "Bank AC / Passbook", label: isHi ? "बैंक पासबुक (Bank Passbook)" : "Bank AC / Passbook" },
    { id: "Ration Card", label: isHi ? "राशन कार्ड (Ration Card)" : "Ration Card" },
    { id: "Driving License", label: isHi ? "ड्राइविंग लाइसेंस (Driving License)" : "Driving License" },
    { id: "Domicile Certificate", label: isHi ? "निवास प्रमाण पत्र (Domicile)" : "Domicile Certificate" },
  ];

  const handleDocToggle = (docId: string) => {
    setFormData((prev) => ({
      ...prev,
      documents: prev.documents.includes(docId)
        ? prev.documents.filter((d) => d !== docId)
        : [...prev.documents, docId],
    }));
  };

  const handleFamilyChange = (index: number, field: keyof FamilyMember, val: string) => {
    setFamilyMembers((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: val };
      return copy;
    });
  };

  const addFamilyRow = () => {
    if (familyMembers.length < 5) {
      setFamilyMembers((prev) => [
        ...prev,
        { name: "", relation: "", dobOrAge: "", qualification: "" },
      ]);
    }
  };

  const removeFamilyRow = (index: number) => {
    if (familyMembers.length > 1) {
      setFamilyMembers((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = isHi ? "कृपया अपना पूरा नाम लिखें।" : "Please enter your full name.";
    }
    const cleanPhone = formData.mobile.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.mobile = isHi
        ? "कृपया वैध 10-अंकों का मोबाईल / व्हाट्सएप नंबर दर्ज करें।"
        : "Please enter a valid 10-digit mobile number.";
    }
    if (!formData.localAddress.trim()) {
      errs.localAddress = isHi
        ? "कृपया मुंबई का स्थानीय पता दर्ज करें।"
        : "Please enter your local address.";
    }
    if (!formData.permanentAddress.trim()) {
      errs.permanentAddress = isHi
        ? "कृपया अपना स्थाई पैतृक पता (झारखंड/गृह राज्य) दर्ज करें।"
        : "Please enter your permanent/native address.";
    }
    if (!formData.declaration) {
      errs.declaration = isHi
        ? "सदस्यता आवेदन के लिए शपथ व घोषणा स्वीकार करना अनिवार्य है।"
        : "You must accept the declaration to proceed.";
    }
    return errs;
  };

  const buildWhatsAppMessage = (refId: string) => {
    const familyText = familyMembers
      .filter((f) => f.name.trim() !== "")
      .map(
        (f, i) =>
          `  ${i + 1}. ${f.name} (${f.relation || "सदस्य"}, उम्र/जन्मतिथि: ${f.dobOrAge || "-"}, योग्यता: ${f.qualification || "-"})`
      )
      .join("\n");

    const docsText = formData.documents.join(", ");

    return (
      `*🌿 झारखंडवासी परिवर्तन संघ (रजि.)*\n` +
      `*MEMBERSHIP FORM • सदस्यता आवेदन पत्र*\n` +
      `---------------------------------------\n` +
      `📌 *संदर्भ संख्या (Ref ID):* ${refId}\n` +
      `📋 *पद (Designation):* ${formData.designation}\n\n` +
      `👤 *व्यक्तिगत विवरण (Personal Details):*\n` +
      `• *नाम (Name):* ${formData.name}\n` +
      `• *जन्म तारीख / उम्र:* ${formData.dob || "-"} (उम्र: ${formData.age || "-"} वर्ष)\n` +
      `• *जन्म स्थान (Birth Place):* ${formData.placeOfBirth || "-"}\n` +
      `• *शादी सालगिरह:* ${formData.anniversary || "-"}\n` +
      `• *रक्त श्रेणी (Blood Group):* ${formData.bloodGroup}\n` +
      `• *शिक्षा (Education):* ${formData.education}\n` +
      `• *वैवाहिक स्थिति:* ${formData.maritalStatus}\n\n` +
      `📍 *पते का विवरण (Address):*\n` +
      `• *मुंबई स्थानीय पता:* ${formData.localAddress}\n` +
      `• *स्थाई पैतृक पता:* ${formData.permanentAddress}\n\n` +
      `📞 *संपर्क विवरण (Contact):*\n` +
      `• *मोबाईल (WhatsApp):* ${formData.mobile}\n` +
      (formData.altContact ? `• *अतिरिक्त संपर्क:* ${formData.altContact}\n` : "") +
      (formData.email ? `• *ई-मेल:* ${formData.email}\n` : "") +
      `\n💼 *व्यवसाय विवरण (Occupation):*\n` +
      `• *व्यवसाय प्रकार:* ${formData.occupation}\n` +
      (formData.dutiesPost ? `• *पद / विभाग:* ${formData.dutiesPost}\n` : "") +
      (formData.officeAddress ? `• *कार्यालय पता:* ${formData.officeAddress}\n` : "") +
      (formData.ngoOrParty === "Yes" && formData.ngoOrPartyDetails
        ? `• *अन्य संस्था/पार्टी संबद्धता:* ${formData.ngoOrPartyDetails}\n`
        : "") +
      `\n👨‍👩‍👧 *पारिवारिक विवरण (Family Background):*\n` +
      (familyText ? `${familyText}\n` : "  (लागू नहीं / अलग से साझा किया जाएगा)\n") +
      `\n📑 *संलग्न दस्तावेज (Documents to provide):*\n` +
      `• ${docsText || "आधार कार्ड एवं फोटो"}\n\n` +
      `---------------------------------------\n` +
      `✅ *घोषणा (Pledge):*\n` +
      `"मैं घोषणा करता/करती हूँ कि उपरोक्त विवरण सही व सत्य है। मैं 'झारखंडवासी परिवर्तन संघ' का अवैतनिक कार्य करूंगा/करूंगी एवं संस्थान के सभी नियमों का पूर्ण पालन करूंगा/करूंगी।"\n` +
      `---------------------------------------\n` +
      `🌐 _भेजा गया: Jharkhandvasi Parivartan Sangh Official Portal (https://www.jpsngo.org)_`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valErrors = validate();
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      const firstError = Object.keys(valErrors)[0];
      const el = document.getElementById(`field-${firstError}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setErrors({});
    const generatedId = `JPS-MBR-${Math.floor(100000 + Math.random() * 900000)}`;
    setAppId(generatedId);

    const waMsg = buildWhatsAppMessage(generatedId);
    setGeneratedMessage(waMsg);
    setIsSuccess(true);

    // Open WhatsApp directly to target number 7808008058
    const waUrl = `https://wa.me/917808008058?text=${encodeURIComponent(waMsg)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white dark:bg-[#071F14] rounded-3xl p-6 sm:p-10 border border-[#123B2A]/15 dark:border-white/10 shadow-2xl max-w-4xl mx-auto">
      {/* OFFICIAL HEADER BANNER EMBEDDED FROM PHYSICAL FORM */}
      <div className="border-b-2 border-[#123B2A]/20 dark:border-white/15 pb-6 mb-8 text-center space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#795943] dark:text-[#B8CBA5]">
          <span className="font-mono font-semibold">Regd. No. E-30004/07/07/2013 MUMBAI</span>
          <span className="badge-pill bg-[#E28723]/15 text-[#E28723] border border-[#E28723]/30 font-bold">
            एक जुनून... एक जरूरत
          </span>
          <span className="font-mono">Estd. 2005</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123B2A] dark:text-[#F7F5EC] pt-2">
          झारखंडवासी परिवर्तन संघ (रजि.)
        </h2>
        <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#1D5139] dark:text-[#B8CBA5] uppercase">
          JHARKHANDVASI PARIVARTAN SANGH (REGD.)
        </p>

        <div className="inline-block mt-2 px-6 py-1.5 rounded-full bg-[#123B2A] dark:bg-[#1D5139] text-white text-sm sm:text-base font-bold shadow">
          MEMBERSHIP FORM • सदस्यता पत्र
        </div>

        <p className="text-xs text-[#17231C]/75 dark:text-[#F7F5EC]/75 pt-2 max-w-2xl mx-auto">
          {isHi
            ? "यह आधिकारिक सदस्यता फॉर्म भरकर सीधे संस्था के अधिकृत व्हाट्सएप नंबर +91 78080 08058 पर भेजें। फॉर्म सबमिट होते ही आपका आवेदन संस्था के रिकॉर्ड में दर्ज हो जाएगा।"
            : "Fill this official membership form to submit your application directly to the organization's WhatsApp desk at +91 78080 08058."}
        </p>
      </div>

      {isSuccess ? (
        <div className="text-center py-10 space-y-6 animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto shadow-xl border-2 border-[#25D366]">
            <CheckCircle2 className="w-12 h-12 text-[#25D366]" />
          </div>

          <div className="space-y-2">
            <span className="badge-pill bg-[#25D366]/20 text-[#123B2A] dark:text-[#B8CBA5] font-bold">
              {isHi ? "आवेदन तैयार • व्हाट्सएप पर अग्रेषित" : "Application Ready • Sent via WhatsApp"}
            </span>
            <h3 className="font-serif text-3xl font-bold text-[#123B2A] dark:text-[#F7F5EC]">
              {isHi ? `धन्यवाद, ${formData.name} जी!` : `Thank You, ${formData.name}!`}
            </h3>
            <p className="text-sm text-[#17231C]/80 dark:text-[#F7F5EC]/80 max-w-xl mx-auto leading-relaxed">
              {isHi
                ? "आपका सदस्यता पत्र सफलतापूर्वक तैयार कर अधिकृत हेल्पलाइन (+91 78080 08058) पर भेज दिया गया है। यदि व्हाट्सएप स्वतः नहीं खुला है, तो नीचे दिए गए बटन पर क्लिक करें।"
                : "Your membership application has been prepared and routed to our central desk at +91 78080 08058. If WhatsApp didn't open automatically, please click below."}
            </p>
          </div>

          {/* Reference Card */}
          <div className="p-5 rounded-2xl bg-[#F7F5EC] dark:bg-[#06180F] border border-[#123B2A]/20 dark:border-white/15 max-w-md mx-auto text-left space-y-2 text-xs">
            <div className="flex justify-between items-center border-b border-[#123B2A]/10 pb-2">
              <span className="text-[#795943] dark:text-[#B8CBA5]">संदर्भ टोकन (Reference ID):</span>
              <strong className="font-mono text-sm text-[#123B2A] dark:text-[#E28723]">{appId}</strong>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#795943] dark:text-[#B8CBA5]">आवेदक का नाम:</span>
              <strong className="text-[#123B2A] dark:text-[#F7F5EC]">{formData.name}</strong>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#795943] dark:text-[#B8CBA5]">मोबाईल नंबर:</span>
              <strong className="text-[#123B2A] dark:text-[#F7F5EC]">{formData.mobile}</strong>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#795943] dark:text-[#B8CBA5]">हेल्पलाइन डेस्क:</span>
              <strong className="text-[#25D366] font-bold">+91 78080 08058</strong>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/917808008058?text=${encodeURIComponent(generatedMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs tracking-wide shadow-xl transition-all flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{isHi ? "व्हाट्सएप चैट खोलें (+91 78080 08058)" : "Open WhatsApp (+91 78080 08058)"}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={handlePrint}
              type="button"
              className="px-6 py-3.5 rounded-full bg-white dark:bg-white/10 hover:bg-gray-100 dark:hover:bg-white/20 text-[#123B2A] dark:text-[#F7F5EC] font-bold text-xs border border-[#123B2A]/20 transition-all flex items-center gap-2"
            >
              <Printer className="w-4 h-4 text-[#E28723]" />
              <span>{isHi ? "फॉर्म प्रिंट करें / सेव करें" : "Print / Save Slip"}</span>
            </button>
          </div>

          {/* Download Original Scanned Physical Form */}
          <div className="pt-6 border-t border-[#123B2A]/10 dark:border-white/10 max-w-xl mx-auto space-y-3">
            <p className="text-xs text-[#795943] dark:text-[#B8CBA5] font-semibold">
              {isHi
                ? "मूल मुद्रित फॉर्म (Physical Printed Form) डाउनलोड करें:"
                : "Download original printed membership form:"}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="/images/membership/membership-form-page-1.jpg"
                download="JPS-Membership-Form-Page-1.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#F7F5EC] dark:bg-white/5 border border-[#123B2A]/15 text-[#123B2A] dark:text-[#F7F5EC] text-xs font-semibold hover:border-[#E28723] flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-[#E28723]" />
                <span>पृष्ठ 1 डाउनलोड (Page 1)</span>
              </a>
              <a
                href="/images/membership/membership-form-page-2.jpg"
                download="JPS-Membership-Form-Page-2.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#F7F5EC] dark:bg-white/5 border border-[#123B2A]/15 text-[#123B2A] dark:text-[#F7F5EC] text-xs font-semibold hover:border-[#E28723] flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-[#E28723]" />
                <span>पृष्ठ 2 डाउनलोड (Page 2)</span>
              </a>
            </div>
          </div>

          <button
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                designation: "सामान्य सदस्य (General Member)",
                name: "",
                dob: "",
                age: "",
                placeOfBirth: "",
                anniversary: "",
                bloodGroup: "O+",
                education: "Graduation (स्नातक)",
                maritalStatus: "Married (विवाहित)",
                localAddress: "",
                permanentAddress: "",
                mobile: "",
                altContact: "",
                email: "",
                occupation: "Service (निजी सेवा / नौकरी)",
                dutiesPost: "",
                officeAddress: "",
                ngoOrParty: "No",
                ngoOrPartyDetails: "",
                documents: ["Aadhar Card", "PAN Card", "Passport Size Photo"],
                declaration: false,
              });
            }}
            className="text-xs text-[#1D5139] dark:text-[#B8CBA5] font-bold hover:underline pt-4 block mx-auto"
          >
            {isHi ? "← नया सदस्यता फॉर्म भरें" : "← Fill Another Application"}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* SECTION 1: PERSONAL DETAILS */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#123B2A]/10 dark:border-white/10">
              <User className="w-4 h-4 text-[#E28723]" />
              <h3 className="font-serif text-lg font-bold text-[#123B2A] dark:text-[#F7F5EC]">
                1. व्यक्तिगत जानकारी (Personal Information)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2" id="field-name">
                <label className="block text-xs font-semibold text-[#123B2A] dark:text-[#F7F5EC] mb-1">
                  पूरा नाम (Full Name) *
                </label>
                <input
                  type="text"
                  placeholder="उदा. अनिरुद्ध आनंद (Aniruddh Anand)"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none transition-all ${
                    errors.name
                      ? "border-red-500 bg-red-50/50"
                      : "border-[#123B2A]/20 dark:border-white/20 bg-[#FDFCF9] dark:bg-black/20 text-[#123B2A] dark:text-white"
                  }`}
                />
                {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#123B2A] dark:text-[#F7F5EC] mb-1">
                  आवेदन पद (Designation)
                </label>
                <select
                  value={formData.designation}
                  onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#123B2A]/20 dark:border-white/20 bg-[#FDFCF9] dark:bg-black/20 text-[#123B2A] dark:text-white text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
                >
                  <option value="सामान्य सदस्य (General Member)">सामान्य सदस्य (General Member)</option>
                  <option value="सक्रिय कार्यकर्ता (Active Volunteer)">सक्रिय कार्यकर्ता (Active Volunteer)</option>
                  <option value="युवा प्रकोष्ठ (Youth Wing)">युवा प्रकोष्ठ (Youth Wing)</option>
                  <option value="महिला प्रकोष्ठ (Women Wing)">महिला प्रकोष्ठ (Women Wing)</option>
                  <option value="सलाहकार / संरक्षक (Advisor/Patron)">सलाहकार / संरक्षक (Advisor)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#123B2A] dark:text-[#F7F5EC] mb-1">
                  जन्म तारीख (DOB)
                </label>
                <input
                  type="text"
                  placeholder="उदा. 11 Dec 1994"
                  value={formData.dob}
                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#123B2A]/20 dark:border-white/20 bg-[#FDFCF9] dark:bg-black/20 text-[#123B2A] dark:text-white text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#123B2A] dark:text-[#F7F5EC] mb-1">
                  उम्र (Age)
                </label>
                <input
                  type="text"
                  placeholder="उदा. 32"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#123B2A]/20 dark:border-white/20 bg-[#FDFCF9] dark:bg-black/20 text-[#123B2A] dark:text-white text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#123B2A] dark:text-[#F7F5EC] mb-1">
                  जन्म स्थान (Place of Birth)
                </label>
                <input
                  type="text"
                  placeholder="उदा. धनबाद, रांची, गिरिडीह"
                  value={formData.placeOfBirth}
                  onChange={(e) => setFormData({ ...formData, placeOfBirth: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#123B2A]/20 dark:border-white/20 bg-[#FDFCF9] dark:bg-black/20 text-[#123B2A] dark:text-white text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#123B2A] dark:text-[#F7F5EC] mb-1">
                  रक्त समूह (Blood Group)
                </label>
                <select
                  value={formData.bloodGroup}
                  onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#123B2A]/20 dark:border-white/20 bg-[#FDFCF9] dark:bg-black/20 text-[#123B2A] dark:text-white text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
                >
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#123B2A] dark:text-[#F7F5EC] mb-1">
                  शिक्षा (Education)
                </label>
                <select
                  value={formData.education}
                  onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#123B2A]/20 dark:border-white/20 bg-[#FDFCF9] dark:bg-black/20 text-[#123B2A] dark:text-white text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
                >
                  <option value="Matric (10th)">मैट्रिक (10th)</option>
                  <option value="Intermediate (12th)">इंटरमीडिएट (12th)</option>
                  <option value="Graduation (स्नातक)">स्नातक (Graduation)</option>
                  <option value="Post Graduation (परास्नातक)">परास्नातक (Post Graduation)</option>
                  <option value="Technical / Diploma">डिप्लोमा / तकनीकी</option>
                  <option value="Other">अन्य (Other)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#123B2A] dark:text-[#F7F5EC] mb-1">
                  वैवाहिक स्थिति (Marital Status)
                </label>
                <select
                  value={formData.maritalStatus}
                  onChange={(e) => setFormData({ ...formData, maritalStatus: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#123B2A]/20 dark:border-white/20 bg-[#FDFCF9] dark:bg-black/20 text-[#123B2A] dark:text-white text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
                >
                  <option value="Single (गैर शादीशुदा)">गैर शादीशुदा (Single)</option>
                  <option value="Married (शादीशुदा)">शादीशुदा (Married)</option>
                  <option value="Divorcee (तलाक शुदा)">तलाक शुदा (Divorcee)</option>
                  <option value="Widow (विधवा)">विधवा (Widow)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#123B2A] dark:text-[#F7F5EC] mb-1">
                  शादी सालगिरह (Anniversary)
                </label>
                <input
                  type="text"
                  placeholder="उदा. 19th Nov"
                  value={formData.anniversary}
                  onChange={(e) => setFormData({ ...formData, anniversary: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#123B2A]/20 dark:border-white/20 bg-[#FDFCF9] dark:bg-black/20 text-[#123B2A] dark:text-white text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* SECTION 2: ADDRESS & CONTACT */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#123B2A]/10 dark:border-white/10">
              <MapPin className="w-4 h-4 text-[#E28723]" />
              <h3 className="font-serif text-lg font-bold text-[#123B2A] dark:text-[#F7F5EC]">
                2. पता एवं संपर्क सूत्र (Address & Contact)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div id="field-localAddress">
                <label className="block text-xs font-semibold text-[#123B2A] dark:text-[#F7F5EC] mb-1">
                  मुंबई का स्थानीय पता (Local Address) *
                </label>
                <textarea
                  rows={2}
                  placeholder="उदा. मुंबई वर्सोवा विलेज, अंधेरी / बोरीवली (प.), मुंबई"
                  value={formData.localAddress}
                  onChange={(e) => setFormData({ ...formData, localAddress: e.target.value })}
                  className={`w-full px-4 py-2 rounded-xl border text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none transition-all ${
                    errors.localAddress
                      ? "border-red-500 bg-red-50/50"
                      : "border-[#123B2A]/20 dark:border-white/20 bg-[#FDFCF9] dark:bg-black/20 text-[#123B2A] dark:text-white"
                  }`}
                />
                {errors.localAddress && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.localAddress}</p>
                )}
              </div>

              <div id="field-permanentAddress">
                <label className="block text-xs font-semibold text-[#123B2A] dark:text-[#F7F5EC] mb-1">
                  स्थाई पैतृक पता (Permanent / Native Address) *
                </label>
                <textarea
                  rows={2}
                  placeholder="उदा. ग्राम, पोस्ट, जिला - धनबाद / रांची / गिरिडीह, झारखंड"
                  value={formData.permanentAddress}
                  onChange={(e) => setFormData({ ...formData, permanentAddress: e.target.value })}
                  className={`w-full px-4 py-2 rounded-xl border text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none transition-all ${
                    errors.permanentAddress
                      ? "border-red-500 bg-red-50/50"
                      : "border-[#123B2A]/20 dark:border-white/20 bg-[#FDFCF9] dark:bg-black/20 text-[#123B2A] dark:text-white"
                  }`}
                />
                {errors.permanentAddress && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.permanentAddress}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div id="field-mobile">
                <label className="block text-xs font-semibold text-[#123B2A] dark:text-[#F7F5EC] mb-1">
                  मोबाईल नं. (WhatsApp नंबर) *
                </label>
                <input
                  type="tel"
                  placeholder="उदा. 9876543210"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none transition-all ${
                    errors.mobile
                      ? "border-red-500 bg-red-50/50"
                      : "border-[#123B2A]/20 dark:border-white/20 bg-[#FDFCF9] dark:bg-black/20 text-[#123B2A] dark:text-white"
                  }`}
                />
                {errors.mobile && <p className="text-[11px] text-red-600 mt-1">{errors.mobile}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#123B2A] dark:text-[#F7F5EC] mb-1">
                  अतिरिक्त संपर्क नं. (Alt. Mobile)
                </label>
                <input
                  type="tel"
                  placeholder="उदा. 9123287140"
                  value={formData.altContact}
                  onChange={(e) => setFormData({ ...formData, altContact: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#123B2A]/20 dark:border-white/20 bg-[#FDFCF9] dark:bg-black/20 text-[#123B2A] dark:text-white text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#123B2A] dark:text-[#F7F5EC] mb-1">
                  ई-मेल (Email Address)
                </label>
                <input
                  type="email"
                  placeholder="उदा. anand.aniruddh@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#123B2A]/20 dark:border-white/20 bg-[#FDFCF9] dark:bg-black/20 text-[#123B2A] dark:text-white text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* SECTION 3: OCCUPATION */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#123B2A]/10 dark:border-white/10">
              <Briefcase className="w-4 h-4 text-[#E28723]" />
              <h3 className="font-serif text-lg font-bold text-[#123B2A] dark:text-[#F7F5EC]">
                3. व्यवसाय एवं कार्य विवरण (Occupation & Employment)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#123B2A] dark:text-[#F7F5EC] mb-1">
                  व्यवसाय श्रेणी (Category)
                </label>
                <select
                  value={formData.occupation}
                  onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#123B2A]/20 dark:border-white/20 bg-[#FDFCF9] dark:bg-black/20 text-[#123B2A] dark:text-white text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
                >
                  <option value="Business (व्यवसाय)">व्यवसाय (Business)</option>
                  <option value="Government Employee (सरकारी कर्मचारी)">सरकारी कर्मचारी (Govt. Employee)</option>
                  <option value="Self-Employed (स्व-रोजगार)">स्व-रोजगार (Self-Employed)</option>
                  <option value="Service (निजी सेवा / नौकरी)">निजी नौकरी (Private Service)</option>
                  <option value="Student (विद्यार्थी)">विद्यार्थी (Student)</option>
                  <option value="Others (अन्य)">अन्य (Others)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#123B2A] dark:text-[#F7F5EC] mb-1">
                  पद / कार्य की स्थिति (Nature of Post)
                </label>
                <input
                  type="text"
                  placeholder="उदा. Cinematographer, Manager, Teacher"
                  value={formData.dutiesPost}
                  onChange={(e) => setFormData({ ...formData, dutiesPost: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#123B2A]/20 dark:border-white/20 bg-[#FDFCF9] dark:bg-black/20 text-[#123B2A] dark:text-white text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#123B2A] dark:text-[#F7F5EC] mb-1">
                  कार्यालय का पता (Office Address)
                </label>
                <input
                  type="text"
                  placeholder="उदा. मंत्रालय, मुंबई / अंधेरी एमआईडीसी"
                  value={formData.officeAddress}
                  onChange={(e) => setFormData({ ...formData, officeAddress: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#123B2A]/20 dark:border-white/20 bg-[#FDFCF9] dark:bg-black/20 text-[#123B2A] dark:text-white text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
                />
              </div>
            </div>

            {/* NGO/Party association */}
            <div className="p-3.5 rounded-2xl bg-[#F7F5EC] dark:bg-white/5 border border-[#123B2A]/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <span className="font-semibold text-[#123B2A] dark:text-[#F7F5EC]">
                क्या आप पूर्व में किसी अन्य एन.जी.ओ. अथवा संगठन से जुड़े हैं? (Associated to any NGO/Party?)
              </span>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="ngoParty"
                    checked={formData.ngoOrParty === "No"}
                    onChange={() => setFormData({ ...formData, ngoOrParty: "No", ngoOrPartyDetails: "" })}
                    className="text-[#1D5139]"
                  />
                  <span>नहीं (No)</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="ngoParty"
                    checked={formData.ngoOrParty === "Yes"}
                    onChange={() => setFormData({ ...formData, ngoOrParty: "Yes" })}
                    className="text-[#1D5139]"
                  />
                  <span>हाँ (Yes)</span>
                </label>
              </div>
            </div>
            {formData.ngoOrParty === "Yes" && (
              <input
                type="text"
                placeholder="यदि हाँ, तो संस्था / पार्टी का नाम बताएं"
                value={formData.ngoOrPartyDetails}
                onChange={(e) => setFormData({ ...formData, ngoOrPartyDetails: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-[#123B2A]/20 dark:border-white/20 bg-[#FDFCF9] dark:bg-black/20 text-[#123B2A] dark:text-white text-xs focus:ring-2 focus:ring-[#1D5139]"
              />
            )}
          </div>

          {/* SECTION 4: FAMILY BACKGROUND */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#123B2A]/10 dark:border-white/10">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#E28723]" />
                <h3 className="font-serif text-lg font-bold text-[#123B2A] dark:text-[#F7F5EC]">
                  4. पारिवारिक जानकारी (Family Background)
                </h3>
              </div>
              <button
                type="button"
                onClick={addFamilyRow}
                className="text-xs font-bold text-[#E28723] hover:underline"
              >
                + सदस्य जोड़ें (Add Member)
              </button>
            </div>

            <div className="space-y-2.5">
              {familyMembers.map((fam, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 p-3 rounded-xl bg-[#F7F5EC]/70 dark:bg-white/5 border border-[#123B2A]/10 dark:border-white/10"
                >
                  <input
                    type="text"
                    placeholder="सदस्य का नाम (उदा. पूजा देवी)"
                    value={fam.name}
                    onChange={(e) => handleFamilyChange(idx, "name", e.target.value)}
                    className="px-3 py-1.5 rounded-lg border border-[#123B2A]/15 bg-white dark:bg-black/30 text-xs text-[#123B2A] dark:text-white"
                  />
                  <input
                    type="text"
                    placeholder="संबंध (उदा. पत्नी / पुत्र / पिता)"
                    value={fam.relation}
                    onChange={(e) => handleFamilyChange(idx, "relation", e.target.value)}
                    className="px-3 py-1.5 rounded-lg border border-[#123B2A]/15 bg-white dark:bg-black/30 text-xs text-[#123B2A] dark:text-white"
                  />
                  <input
                    type="text"
                    placeholder="जन्मतिथि / उम्र (उदा. 24 July)"
                    value={fam.dobOrAge}
                    onChange={(e) => handleFamilyChange(idx, "dobOrAge", e.target.value)}
                    className="px-3 py-1.5 rounded-lg border border-[#123B2A]/15 bg-white dark:bg-black/30 text-xs text-[#123B2A] dark:text-white"
                  />
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="योग्यता (उदा. Graduation)"
                      value={fam.qualification}
                      onChange={(e) => handleFamilyChange(idx, "qualification", e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-[#123B2A]/15 bg-white dark:bg-black/30 text-xs text-[#123B2A] dark:text-white"
                    />
                    {familyMembers.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeFamilyRow(idx)}
                        className="text-red-500 hover:text-red-700 text-xs px-2 py-1 font-bold"
                        title="हटाएं"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 5: DOCUMENTS CHECKLIST */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-[#123B2A]/10 dark:border-white/10">
              <FileText className="w-4 h-4 text-[#E28723]" />
              <h3 className="font-serif text-lg font-bold text-[#123B2A] dark:text-[#F7F5EC]">
                5. आवश्यक कागजात (List of Documents to Share on WhatsApp)
              </h3>
            </div>
            <p className="text-xs text-[#795943] dark:text-[#B8CBA5]">
              आवेदन के उपरांत कृपया इन दस्तावेजों की साफ फोटो अथवा पीडीएफ व्हाट्सएप (+91 78080 08058) पर प्रेषित करें:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {documentOptions.map((doc) => {
                const checked = formData.documents.includes(doc.id);
                return (
                  <button
                    type="button"
                    key={doc.id}
                    onClick={() => handleDocToggle(doc.id)}
                    className={`p-2.5 rounded-xl text-xs text-left transition-all border flex items-center gap-2 ${
                      checked
                        ? "bg-[#123B2A] dark:bg-[#1D5139] text-white border-[#123B2A]"
                        : "bg-[#F7F5EC] dark:bg-white/5 text-[#17231C]/80 dark:text-[#F7F5EC]/80 border-[#123B2A]/15 hover:border-[#E28723]"
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded flex items-center justify-center text-[10px] flex-shrink-0 ${
                        checked ? "bg-[#E28723] text-white font-bold" : "border border-gray-400"
                      }`}
                    >
                      {checked && "✓"}
                    </span>
                    <span className="leading-tight text-[11px] truncate">{doc.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SECTION 6: DECLARATION & TERMS */}
          <div className="space-y-4 pt-2" id="field-declaration">
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-xs text-amber-950 dark:text-amber-200 space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#123B2A] dark:text-[#E28723]">
                <ShieldCheck className="w-4 h-4 text-[#E28723]" />
                <span>घोषणा एवं प्रतिज्ञा (Declaration & Pledge)</span>
              </div>
              <p className="leading-relaxed font-light">
                &ldquo;मैं घोषणा करता / करती हूँ कि उपरोक्त विवरण सही व सत्य है। मैं &lsquo;झारखंडवासी परिवर्तन संघ&rsquo; का अवैतनिक कार्य करूंगा / करूंगी। संस्थान के सभी नियमों का पालन करूंगा / करूंगी। उपरोक्त कथन पूर्ण व सत्य है। किसी भी तरह की असत्यता अथवा संस्थान विरोधी कार्य करते पाये जाने पर मेरी सदस्यता निरस्त कर उचित कार्यवाही की जा सकती है।&rdquo;
              </p>
              <ul className="list-disc list-inside text-[11px] space-y-0.5 opacity-90 pt-1">
                <li>पहचान पत्र के दुरुपयोग की सूचना मिलने पर सदस्यता रद्द की जा सकेगी।</li>
                <li>आवेदन प्राप्त होने के 45 दिनों के अंदर सत्यापन उपरांत परिचय पत्र प्रेषित किया जाएगा।</li>
              </ul>
            </div>

            <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#17231C]/90 dark:text-[#F7F5EC]/90 pt-1">
              <input
                type="checkbox"
                checked={formData.declaration}
                onChange={(e) => setFormData({ ...formData, declaration: e.target.checked })}
                className="mt-0.5 rounded text-[#1D5139] focus:ring-[#1D5139] w-4 h-4"
              />
              <span className="font-medium">
                उपरोक्त सभी शर्तें मुझे स्वीकार हैं तथा मैं झारखंडवासी परिवर्तन संघ की सदस्यता हेतु पूर्ण सहमति देता/देती हूँ। *
              </span>
            </label>
            {errors.declaration && (
              <p className="text-[11px] text-red-600 font-semibold">{errors.declaration}</p>
            )}
          </div>

          {/* SUBMIT BUTTON - SENDS TO WHATSAPP 7808008058 */}
          <div className="pt-4 space-y-3">
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-bold tracking-wide shadow-xl transition-all flex items-center justify-center gap-2 group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>
                {isHi
                  ? "सदस्यता फॉर्म सबमिट करें एवं व्हाट्सएप पर भेजें (+91 78080 08058)"
                  : "Submit & Send Membership Form to WhatsApp (+91 78080 08058)"}
              </span>
            </button>

            <div className="flex flex-wrap items-center justify-between text-[11px] text-[#795943] dark:text-[#B8CBA5] pt-1">
              <span>🔒 सुरक्षित एवं आधिकारिक डेटा ट्रांसमिशन</span>
              <span>24/7 हेल्पलाइन डेस्क: +91 78080 08058</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
