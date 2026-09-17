import React, { useState } from 'react';
import {
  Mail, Phone, MapPin, MessageSquare, Send, CheckCircle,
  Loader2, Clock, ExternalLink, Zap, ChevronDown,
} from 'lucide-react';
import { profileData } from '../data/profile';
import { motion, AnimatePresence } from 'framer-motion';

type InquiryType =
  | ''
  | 'Solar PV Design'
  | 'BESS Consultation'
  | 'IoT Telemetry'
  | 'Job Opportunity'
  | 'Other';

interface FormState {
  name: string;
  email: string;
  subject: InquiryType;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const inquiryTypes: InquiryType[] = [
  'Solar PV Design',
  'BESS Consultation',
  'IoT Telemetry',
  'Job Opportunity',
  'Other',
];

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = 'Full name is required.';
  if (!form.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!form.subject) errors.subject = 'Please select an inquiry type.';
  if (!form.message.trim() || form.message.length < 20)
    errors.message = 'Please provide at least 20 characters of detail.';
  return errors;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus('loading');
    // Simulate async submit
    setTimeout(() => setStatus('success'), 1800);
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-xl bg-white border text-sm text-neutral-900 placeholder:text-neutral-400
     focus:outline-none focus:ring-2 transition-all duration-200 shadow-subtle ${
       errors[field]
         ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
         : 'border-neutral-200 focus:border-neutral-900 focus:ring-neutral-900/10'
     }`;

  const whatsappMsg = encodeURIComponent(
    'Hello Emmanuel, I found your portfolio and I would like to discuss a project with you.'
  );

  return (
    <div className="min-h-screen py-16 sm:py-20 bg-white">
      <div className="section-wrapper">
        {/* Header */}
        <div className="mb-12 sm:mb-14">
          <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-2">Get In Touch</div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 mb-3 tracking-tight">Contact Emmanuel</h1>
          <p className="text-neutral-600 max-w-xl text-base leading-relaxed">
            Available for solar PV design consultations, BESS engineering, IoT integration projects,
            and full-time engineering roles across Kenya and East Africa.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* ── Left Column ──────────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-6">
            {/* Direct Contact */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-5">
                Direct Contact
              </h2>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`mailto:${profileData.contact.email}`}
                    aria-label="Send email to Emmanuel"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center shrink-0">
                      <Mail size={15} className="text-neutral-700" />
                    </div>
                    <div>
                      <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-0.5 font-semibold">Email</div>
                      <div className="text-sm font-semibold text-neutral-900 group-hover:text-neutral-950 transition-colors">
                        {profileData.contact.email}
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${profileData.contact.phone.replace(/\s/g, '')}`}
                    aria-label="Call Emmanuel"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center shrink-0">
                      <Phone size={15} className="text-neutral-700" />
                    </div>
                    <div>
                      <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-0.5 font-semibold">Phone / WhatsApp</div>
                      <div className="text-sm font-semibold text-neutral-900 group-hover:text-neutral-950 transition-colors">
                        {profileData.contact.phone}
                      </div>
                    </div>
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center shrink-0">
                    <MapPin size={15} className="text-neutral-700" />
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-0.5 font-semibold">Location</div>
                    <div className="text-sm font-semibold text-neutral-900">{profileData.contact.location}</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-3">
              <a
                href={`mailto:${profileData.contact.email}?subject=Engineering Enquiry`}
                aria-label="Send email to Emmanuel"
                className="btn-primary w-full justify-center"
              >
                <Mail size={16} />
                Send Email
              </a>
              <a
                href={`https://wa.me/254795628615?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Emmanuel on WhatsApp"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                           border border-neutral-300 text-neutral-900 bg-white hover:bg-neutral-50
                           transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageSquare size={16} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Availability */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-bold text-neutral-900">Working Hours & Availability</span>
              </div>
              <div className="space-y-2 text-xs text-neutral-600 font-medium">
                <div className="flex items-center gap-2">
                  <Clock size={13} className="text-neutral-500" />
                  Mon – Fri · 08:00 – 18:00 EAT
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={13} className="text-neutral-500" />
                  Response within 24 hours
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                {profileData.contact.linkedin && (
                  <a
                    href={profileData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-400 hover:border-blue-400 hover:text-blue-600 transition-all shadow-subtle"
                  >
                    <ExternalLink size={12} /> LinkedIn
                  </a>
                )}
                {profileData.contact.github && (
                  <a
                    href={profileData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-400 hover:border-slate-400 hover:text-slate-900 transition-all shadow-subtle"
                  >
                    <ExternalLink size={12} /> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* ── Right Column — Form ───────────────────────────────── */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Send an Inquiry</h2>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/80 dark:border-emerald-500/30 flex items-center justify-center">
                      <CheckCircle size={32} className="text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Message Received!</h3>
                    <p className="text-slate-600 dark:text-slate-400 max-w-xs">
                      Emmanuel will reply within 24 hours. You can also reach him directly on WhatsApp for faster response.
                    </p>
                    <button
                      onClick={() => { setStatus('idle'); setForm({ name: '', email: '', subject: '', message: '' }); }}
                      className="btn-secondary mt-2"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                    aria-label="Contact inquiry form"
                  >
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        autoComplete="name"
                        className={inputClass('name')}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        autoComplete="email"
                        className={inputClass('email')}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>}
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
                        Inquiry Type <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="contact-subject"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className={inputClass('subject') + ' appearance-none cursor-pointer pr-10'}
                        >
                          <option value="" disabled>Select inquiry type…</option>
                          {inquiryTypes.map(t => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                        <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      </div>
                      {errors.subject && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.subject}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
                        Project Details / Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Describe your project, location, load requirements, or how I can help…"
                        className={inputClass('message') + ' resize-none'}
                      />
                      <div className="flex justify-between mt-1.5">
                        {errors.message
                          ? <p className="text-red-500 text-xs font-medium">{errors.message}</p>
                          : <span />}
                        <span className="text-xs text-slate-400">{form.message.length} chars</span>
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      id="contact-submit"
                      disabled={status === 'loading'}
                      aria-label="Submit contact form"
                      className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
