"use client";

import { useState } from "react";
import { Send, Phone, AlertCircle, CheckCircle2, MessageSquare, ShieldAlert } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Emergency Migrant Assistance",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [caseId, setCaseId] = useState("");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.phone.trim() || formData.phone.length < 10)
      errs.phone = "Please enter a valid 10-digit phone number.";
    if (!formData.message.trim())
      errs.message = "Please describe the situation or inquiry.";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valErrors = validate();
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setCaseId(`JPS-REQ-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#123B2A]/10 shadow-xl max-w-xl mx-auto">
      {/* High-priority Emergency Protocol Banner */}
      <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-3 mb-6">
        <ShieldAlert className="w-5 h-5 text-[#E28723] flex-shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <strong>Immediate Crisis / Life-Threatening Distress?</strong> Please do not wait for a web form response. Call our direct 24/7 Helpline immediately at{" "}
          <a href="tel:+917808008058" className="underline font-bold text-[#123B2A]">
            +91 78080 08058
          </a>{" "}
          or message via WhatsApp.
        </div>
      </div>

      {isSuccess ? (
        <div className="text-center py-6 space-y-3 animate-fade-in">
          <div className="w-14 h-14 rounded-full bg-[#1D5139] text-[#B8CBA5] flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-8 h-8 text-[#B8CBA5]" />
          </div>
          <h3 className="font-serif text-xl font-normal text-[#123B2A]">
            Request Logged Successfully
          </h3>
          <p className="text-xs text-[#17231C]/80 max-w-md mx-auto leading-relaxed">
            Thank you, {formData.name}. Our field desk has received your details. A volunteer will review and respond as quickly as possible.
          </p>
          <div className="p-3 bg-[#F7F5EC] rounded-xl text-xs font-mono text-[#123B2A]">
            Case Reference: <strong>{caseId}</strong>
          </div>
          <button
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                name: "",
                phone: "",
                email: "",
                subject: "Emergency Migrant Assistance",
                message: "",
              });
            }}
            className="text-xs text-[#1D5139] font-bold hover:underline pt-2 block"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1 mb-4">
            <h3 className="font-serif text-2xl font-normal text-[#123B2A]">
              Send Us a Message
            </h3>
            <p className="text-xs text-[#795943]">
              Reach our central team in Borivali West, Mumbai.
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#123B2A] mb-1">
              Select Category
            </label>
            <select
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-[#123B2A]/20 bg-[#FDFCF9] text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
            >
              <option value="Emergency Migrant Assistance">
                Emergency Migrant Distress / Hospital Aid
              </option>
              <option value="Senior Health Camp Request">
                Senior Citizen Health Camp Request
              </option>
              <option value="Child Education Sponsorship">
                Child Education / Study Kit Support
              </option>
              <option value="Tree Planting & Nature Project">
                Tree Planting & Nature Conservation
              </option>
              <option value="Volunteer Inquiry">Volunteer & Partnership Inquiry</option>
              <option value="General Communication">General Communication</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#123B2A] mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Arvind Kumar"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none ${
                  errors.name ? "border-red-500 bg-red-50/50" : "border-[#123B2A]/20 bg-[#FDFCF9]"
                }`}
              />
              {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#123B2A] mb-1">
                Contact Phone *
              </label>
              <input
                type="tel"
                placeholder="e.g. +91 78080 08058"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none ${
                  errors.phone ? "border-red-500 bg-red-50/50" : "border-[#123B2A]/20 bg-[#FDFCF9]"
                }`}
              />
              {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#123B2A] mb-1">
              Email Address (Optional)
            </label>
            <input
              type="email"
              placeholder="e.g. contact@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-[#123B2A]/20 bg-[#FDFCF9] text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#123B2A] mb-1">
              Detailed Description / Address *
            </label>
            <textarea
              rows={4}
              placeholder="Please provide specifics regarding the assistance requested or your message..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:ring-2 focus:ring-[#1D5139] focus:outline-none ${
                errors.message ? "border-red-500 bg-red-50/50" : "border-[#123B2A]/20 bg-[#FDFCF9]"
              }`}
            />
            {errors.message && <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-full bg-[#123B2A] hover:bg-[#1D5139] text-[#F7F5EC] text-xs font-bold tracking-wide shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isSubmitting ? (
              <span>Sending Details...</span>
            ) : (
              <>
                <Send className="w-4 h-4 text-[#E28723]" />
                <span>Submit Inquiry / Request</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
