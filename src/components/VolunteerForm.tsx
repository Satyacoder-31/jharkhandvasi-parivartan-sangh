"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, HeartHandshake, Send, ShieldCheck, Sparkles } from "lucide-react";

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Mumbai",
    interests: [] as string[],
    availability: "Weekends",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [appId, setAppId] = useState("");

  const interestOptions = [
    "Migrant Worker Helpline & Emergency Aid",
    "Senior Citizen Health & Diagnostic Camps",
    "Child Literacy & Educational Kit Distribution",
    "Tree Planting & Community Environmental Drives",
    "Cultural Commemorations (Birsa Munda Jayanti)",
    "Legal, Medical or Administrative Consultation",
  ];

  const handleInterestToggle = (item: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(item)
        ? prev.interests.filter((i) => i !== item)
        : [...prev.interests, item],
    }));
    if (errors.interests) {
      setErrors((prev) => ({ ...prev, interests: "" }));
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your full name.";
    if (!formData.phone.trim() || formData.phone.length < 10)
      errs.phone = "Please enter a valid 10-digit mobile number.";
    if (!formData.email.trim() || !formData.email.includes("@"))
      errs.email = "Please enter a valid email address.";
    if (formData.interests.length === 0)
      errs.interests = "Please select at least one area of interest.";
    if (!formData.consent)
      errs.consent = "You must agree to participate in accordance with JPS values.";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate verified form processing workflow
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const generatedId = `JPS-VOL-${Math.floor(100000 + Math.random() * 900000)}`;
      setAppId(generatedId);
    }, 1200);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#123B2A]/10 shadow-xl max-w-2xl mx-auto">
      {isSuccess ? (
        <div className="text-center py-8 space-y-4 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-[#1D5139] text-[#B8CBA5] flex items-center justify-center mx-auto shadow-lg">
            <CheckCircle2 className="w-9 h-9 text-[#B8CBA5]" />
          </div>
          <span className="badge-pill bg-[#B8CBA5]/20 text-[#123B2A]">
            Application Registered
          </span>
          <h3 className="font-serif text-2xl font-normal text-[#123B2A]">
            Thank You, {formData.name}!
          </h3>
          <p className="text-sm text-[#17231C]/80 max-w-md mx-auto leading-relaxed">
            Your volunteer interest has been received. Our community coordinator from the Borivali West team will reach out to you via WhatsApp or phone within 48 hours.
          </p>
          <div className="p-4 rounded-2xl bg-[#F7F5EC] border border-[#123B2A]/10 text-xs font-mono text-[#123B2A] max-w-xs mx-auto">
            Volunteer Reference ID: <strong>{appId}</strong>
          </div>
          <div className="pt-2">
            <a
              href={`https://wa.me/917808008058?text=${encodeURIComponent(
                `*झारखंडवासी परिवर्तन संघ (रजि.) - स्वयंसेवक आवेदन*\n• संदर्भ: ${appId}\n• नाम: ${formData.name}\n• मोबाईल: ${formData.phone}\n• शहर: ${formData.city}\n• रुचि: ${formData.interests.join(", ")}\n• उपलब्धता: ${formData.availability}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>व्हाट्सएप पर पुष्टि भेजें (+91 78080 08058)</span>
            </a>
          </div>
          <button
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                name: "",
                phone: "",
                email: "",
                city: "Mumbai",
                interests: [],
                availability: "Weekends",
                message: "",
                consent: false,
              });
            }}
            className="text-xs text-[#1D5139] font-bold hover:underline pt-2 block"
          >
            Submit Another Application
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-[#E28723]" />
              <h3 className="font-serif text-2xl font-normal text-[#123B2A]">
                Volunteer Application Form
              </h3>
            </div>
            <p className="text-xs text-[#795943]">
              Join our frontline network of community workers in Mumbai and Jharkhand.
            </p>
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#123B2A] mb-1">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Ramesh Kumar"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none transition-all ${
                  errors.name ? "border-red-500 bg-red-50/50" : "border-[#123B2A]/20 bg-[#FDFCF9]"
                }`}
              />
              {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#123B2A] mb-1">
                Mobile Number (WhatsApp Preferred) *
              </label>
              <input
                type="tel"
                placeholder="e.g. +91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none transition-all ${
                  errors.phone ? "border-red-500 bg-red-50/50" : "border-[#123B2A]/20 bg-[#FDFCF9]"
                }`}
              />
              {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Email & City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#123B2A] mb-1">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="e.g. yourname@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none transition-all ${
                  errors.email ? "border-red-500 bg-red-50/50" : "border-[#123B2A]/20 bg-[#FDFCF9]"
                }`}
              />
              {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#123B2A] mb-1">
                Current City / Base
              </label>
              <input
                type="text"
                placeholder="e.g. Mumbai (Borivali, Andheri, Thane) / Ranchi"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-[#123B2A]/20 bg-[#FDFCF9] text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Areas of Interest Multi-select */}
          <div>
            <label className="block text-xs font-semibold text-[#123B2A] mb-1">
              Select Areas of Interest *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              {interestOptions.map((opt) => {
                const checked = formData.interests.includes(opt);
                return (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => handleInterestToggle(opt)}
                    className={`text-left p-2.5 rounded-xl text-xs transition-all border flex items-start gap-2 ${
                      checked
                        ? "bg-[#123B2A] text-white border-[#123B2A]"
                        : "bg-[#F7F5EC] text-[#17231C]/80 border-[#123B2A]/15 hover:bg-[#6F8D58]/10"
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded mt-0.5 flex-shrink-0 flex items-center justify-center text-[10px] ${
                        checked ? "bg-[#E28723] text-white font-bold" : "border border-[#123B2A]/30"
                      }`}
                    >
                      {checked && "✓"}
                    </span>
                    <span className="leading-tight">{opt}</span>
                  </button>
                );
              })}
            </div>
            {errors.interests && <p className="text-[11px] text-red-600 mt-1">{errors.interests}</p>}
          </div>

          {/* Availability */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#123B2A] mb-1">
                Your Availability
              </label>
              <select
                value={formData.availability}
                onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-[#123B2A]/20 bg-[#FDFCF9] text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
              >
                <option value="Weekends">Weekends Only</option>
                <option value="Weekdays">Weekdays Flexible</option>
                <option value="Emergency On-Call">Emergency On-Call (Helpline/Hospital)</option>
                <option value="Remote Digital">Remote Digital / Media Support</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#123B2A] mb-1">
                Relevant Skills / Profession
              </label>
              <input
                type="text"
                placeholder="e.g. Teacher, Nurse, Lawyer, Student, Social Worker"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-[#123B2A]/20 bg-[#FDFCF9] text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
              />
            </div>
          </div>

          {/* Consent Checkbox */}
          <div>
            <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#17231C]/80">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-0.5 rounded text-[#1D5139] focus:ring-[#1D5139]"
              />
              <span>
                I agree to volunteer with Jharkhandvasi Parivartan Sangh in a spirit of compassion, secular dignity, and selfless community service.
              </span>
            </label>
            {errors.consent && <p className="text-[11px] text-red-600 mt-1">{errors.consent}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-full bg-[#123B2A] hover:bg-[#1D5139] text-[#F7F5EC] text-xs font-bold tracking-wide shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isSubmitting ? (
              <span>Registering Volunteer Profile...</span>
            ) : (
              <>
                <Send className="w-4 h-4 text-[#E28723]" />
                <span>Submit Volunteer Application</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
