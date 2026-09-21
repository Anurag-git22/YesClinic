import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, AlertCircle, Send, MessageSquare } from 'lucide-react';
import { submitEnquiry, AppointmentEnquiry } from '@/lib/enquiry';
import { clinicData } from '@/data/clinic';
import { Reveal } from './ui/Reveal';

export const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState<AppointmentEnquiry>({
    fullName: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 2:00 PM)',
    serviceOrDoctor: 'Dr. Digambar Naik (Cardiology / Echo)',
    reasonForVisit: '',
    honeypot: '', // Hidden spam trap
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedResult, setSubmittedResult] = useState<{
    message: string;
    whatsappUrl?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const result = await submitEnquiry(formData);
      if (result.success) {
        setSubmittedResult({
          message: result.message,
          whatsappUrl: result.whatsappUrl,
        });
      } else {
        setErrorMessage(result.message);
      }
    } catch (err) {
      setErrorMessage("Something went wrong while submitting. Please call the clinic directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      preferredDate: '',
      preferredTime: 'Morning (10:00 AM - 2:00 PM)',
      serviceOrDoctor: 'Dr. Digambar Naik (Cardiology / Echo)',
      reasonForVisit: '',
      honeypot: '',
    });
    setSubmittedResult(null);
    setErrorMessage(null);
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" id="enquiry">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-ivory-blush px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-maroon">
              <Calendar className="h-3.5 w-3.5 text-crimson" />
              <span>Enquiry & Prior Appointment</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-maroon">
              Schedule Your Consultation
            </h2>

            <p className="font-body text-xs sm:text-sm text-ink/70 max-w-xl mx-auto">
              Please note: Submitting this form creates an enquiry request. Our clinic desk will contact you to confirm timing and doctor slot.
            </p>
          </div>
        </Reveal>

        {/* Floating White Panel over Warm Canvas */}
        <div className="rounded-3xl border border-ivory-sand bg-white p-6 sm:p-10 lg:p-12 shadow-elevated relative">
          <AnimatePresence mode="wait">
            {submittedResult ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-10 space-y-6"
              >
                <div className="h-16 w-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="h-10 w-10" />
                </div>

                <div className="space-y-2 max-w-lg mx-auto">
                  <h3 className="font-display text-2xl font-bold text-maroon">
                    Enquiry Request Received
                  </h3>
                  <p className="font-body text-sm text-ink/85 leading-relaxed">
                    {submittedResult.message}
                  </p>
                </div>

                {submittedResult.whatsappUrl && (
                  <div className="pt-2">
                    <a
                      href={submittedResult.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-emerald-800 transition-all"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Send Direct via WhatsApp</span>
                    </a>
                    <p className="text-[11px] text-ink/60 mt-2">
                      Click to open pre-filled enquiry directly in WhatsApp
                    </p>
                  </div>
                )}

                <div className="pt-6 border-t border-ivory-sand">
                  <button
                    onClick={handleReset}
                    className="text-xs font-bold uppercase tracking-wider text-crimson hover:text-maroon underline underline-offset-4"
                  >
                    Submit another enquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {/* Error Banner */}
                {errorMessage && (
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-xs font-medium text-red-800 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-red-600 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Honeypot field (hidden from human visitors) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website-hp">Leave this empty</label>
                  <input
                    type="text"
                    id="website-hp"
                    name="website-hp"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Patient Name & Phone Number (Row 1) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="patient-name"
                      className="block text-xs font-bold uppercase tracking-wider text-maroon"
                    >
                      Full Name <span className="text-crimson">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/40" />
                      <input
                        type="text"
                        id="patient-name"
                        required
                        placeholder="e.g. Ramesh Kadam"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full rounded-xl border border-ivory-sand bg-ivory-bg/40 pl-10 pr-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none focus:border-crimson focus:bg-white focus:ring-2 focus:ring-crimson/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="patient-phone"
                      className="block text-xs font-bold uppercase tracking-wider text-maroon"
                    >
                      Phone / WhatsApp Number <span className="text-crimson">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/40" />
                      <input
                        type="tel"
                        id="patient-phone"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-ivory-sand bg-ivory-bg/40 pl-10 pr-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none focus:border-crimson focus:bg-white focus:ring-2 focus:ring-crimson/20 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Email (optional) & Doctor / Service Select (Row 2) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="patient-email"
                      className="block text-xs font-bold uppercase tracking-wider text-maroon"
                    >
                      Email Address <span className="text-ink/40 text-[10px] font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/40" />
                      <input
                        type="email"
                        id="patient-email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-ivory-sand bg-ivory-bg/40 pl-10 pr-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none focus:border-crimson focus:bg-white focus:ring-2 focus:ring-crimson/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="service-select"
                      className="block text-xs font-bold uppercase tracking-wider text-maroon"
                    >
                      Doctor / Department
                    </label>
                    <select
                      id="service-select"
                      value={formData.serviceOrDoctor}
                      onChange={(e) => setFormData({ ...formData, serviceOrDoctor: e.target.value })}
                      className="w-full rounded-xl border border-ivory-sand bg-ivory-bg/40 px-4 py-3 text-sm text-ink outline-none focus:border-crimson focus:bg-white focus:ring-2 focus:ring-crimson/20 transition-all"
                    >
                      <option value="Dr. Digambar Naik (Cardiology / Echo)">Dr. Digambar Naik (Cardiology & Echo)</option>
                      <option value="Diabetes & Heart Care OPD">Diabetes & Heart Care OPD</option>
                      <option value="Polyclinic General Consultation">Polyclinic General Consultation</option>
                      <option value="Day Care Centre Observation">Day Care Centre Observation</option>
                      <option value="Derma Clinic (Skin & Hair)">Derma Clinic (Skin & Hair)</option>
                      <option value="General Health Checkup">General Health Checkup</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Date & Preferred Time Slot (Row 3) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="preferred-date"
                      className="block text-xs font-bold uppercase tracking-wider text-maroon"
                    >
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/40" />
                      <input
                        type="date"
                        id="preferred-date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full rounded-xl border border-ivory-sand bg-ivory-bg/40 pl-10 pr-4 py-3 text-sm text-ink outline-none focus:border-crimson focus:bg-white focus:ring-2 focus:ring-crimson/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="preferred-time"
                      className="block text-xs font-bold uppercase tracking-wider text-maroon"
                    >
                      Preferred Time Slot
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/40" />
                      <select
                        id="preferred-time"
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full rounded-xl border border-ivory-sand bg-ivory-bg/40 pl-10 pr-4 py-3 text-sm text-ink outline-none focus:border-crimson focus:bg-white focus:ring-2 focus:ring-crimson/20 transition-all"
                      >
                        <option value="Morning (10:00 AM - 2:00 PM)">Morning: 10:00 AM – 2:00 PM</option>
                        <option value="Evening (4:30 PM - 8:00 PM)">Evening: 4:30 PM – 8:00 PM</option>
                        <option value="Any Convenient Slot">Any Convenient Slot</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Reason for Visit (optional, non-sensitive) */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="reason-visit"
                    className="block text-xs font-bold uppercase tracking-wider text-maroon"
                  >
                    Reason For Visit <span className="text-ink/40 text-[10px] font-normal">(Brief description, please do not include confidential medical files)</span>
                  </label>
                  <textarea
                    id="reason-visit"
                    rows={3}
                    placeholder="e.g. Regular BP checkup, ECG routine screening, or skin consultation enquiry"
                    value={formData.reasonForVisit}
                    onChange={(e) => setFormData({ ...formData, reasonForVisit: e.target.value })}
                    className="w-full rounded-xl border border-ivory-sand bg-ivory-bg/40 px-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none focus:border-crimson focus:bg-white focus:ring-2 focus:ring-crimson/20 transition-all"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-[11px] text-ink/60 max-w-sm">
                    By submitting, you agree to receive a confirmation call/message from YES Day Care Clinic.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-crimson px-8 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-white shadow-crimson-soft hover:bg-crimson-lit transition-all disabled:opacity-50 min-h-[48px]"
                  >
                    {isSubmitting ? (
                      <span>Submitting Enquiry...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Submit Appointment Enquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
