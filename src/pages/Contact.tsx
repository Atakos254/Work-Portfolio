import React, { useState } from 'react';
import {
  Mail, Phone, MapPin, MessageSquare, Send, CheckCircle,
  Loader2, Clock, Zap, ChevronDown, AlertCircle,
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
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    if (serverError) {
      setServerError(null);
    }
  };

  const WEB3FORMS_ACCESS_KEY =
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'f63a2ed9-d435-4a60-89dd-3e2d578e9ff4';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus('loading');
    setServerError(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          subject: `Portfolio Inquiry: [${form.subject}] from ${form.name}`,
          inquiry_type: form.subject,
          message: form.message,
          from_name: form.name,
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setStatus('success');
      } else {
        throw new Error(data?.message || 'Failed to submit form. Please check your access key or try again.');
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unable to send message right now.';
      setServerError(msg);
      setStatus('error');
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-3.5 sm:px-4 py-2.5 rounded-xl bg-white dark:bg-[#0e1422] border text-base sm:text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500
     focus:outline-none focus:ring-2 transition-all duration-200 shadow-subtle ${
       errors[field]
         ? 'border-red-400 dark:border-red-500/80 focus:border-red-500 focus:ring-red-500/20'
         : 'border-neutral-200 dark:border-neutral-700 focus:border-neutral-900 dark:focus:border-neutral-300 focus:ring-neutral-900/10 dark:focus:ring-white/10'
     }`;

  const whatsappMsg = encodeURIComponent(
    'Hello Emmanuel, I found your portfolio and I would like to discuss a project with you.'
  );

  return (
    <div className="min-h-screen py-16 sm:py-20 bg-white dark:bg-[#090d16] transition-colors">
      <div className="section-wrapper">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <div className="text-xs font-bold tracking-widest text-neutral-500 dark:text-neutral-400 uppercase mb-2">Get In Touch</div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-neutral-950 dark:text-white mb-3 tracking-tight">Let’s Build Something Efficient</h1>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-xl text-sm sm:text-base leading-relaxed">
            Open to select consulting engagements, system deployments and forward-looking engineering roles across East Africa &amp; the World.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-stretch">
          {/* ── Left Column ──────────────────────────────────────── */}
          <div className="lg:col-span-2 flex flex-col justify-between space-y-6 lg:space-y-0 h-full">
            {/* Direct Contact */}
            <div className="bg-white dark:bg-[#0e1422] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 sm:p-6 shadow-sm">
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-5">
                Direct Contact
              </h2>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`mailto:${profileData.contact.email}`}
                    aria-label="Send email to Emmanuel"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center shrink-0">
                      <Mail size={15} className="text-neutral-700 dark:text-neutral-300" />
                    </div>
                    <div>
                      <div className="text-[10px] text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-0.5 font-semibold">Email</div>
                      <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors">
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
                    <div className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center shrink-0">
                      <Phone size={15} className="text-neutral-700 dark:text-neutral-300" />
                    </div>
                    <div>
                      <div className="text-[10px] text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-0.5 font-semibold">Phone / WhatsApp</div>
                      <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors">
                        {profileData.contact.phone}
                      </div>
                    </div>
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center shrink-0">
                    <MapPin size={15} className="text-neutral-700 dark:text-neutral-300" />
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-0.5 font-semibold">Location</div>
                    <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{profileData.contact.location}</div>
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
                className="btn-secondary w-full justify-center"
              >
                <MessageSquare size={16} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Availability */}
            <div className="bg-white dark:bg-[#0e1422] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-bold text-neutral-900 dark:text-white">Working Hours & Availability</span>
              </div>
              <div className="space-y-2 text-xs text-neutral-600 dark:text-neutral-300 font-medium">
                <div className="flex items-center gap-2">
                  <Clock size={13} className="text-neutral-500 dark:text-neutral-400" />
                  Mon – Fri · 08:00 – 18:00 EAT
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={13} className="text-neutral-500 dark:text-neutral-400" />
                  Response within 24 hours
                </div>
              </div>
              <div className="mt-4 flex gap-2.5 flex-wrap">
                {profileData.contact.linkedin && (
                  <a
                    href={profileData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Emmanuel's LinkedIn profile"
                    className="btn-secondary text-xs py-2 px-3.5 group"
                  >
                    <svg className="w-3.5 h-3.5 fill-neutral-900 dark:fill-neutral-200 group-hover:fill-white dark:group-hover:fill-[#090d16] group-active:fill-white dark:group-active:fill-[#090d16] transition-colors shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                )}
                {profileData.contact.github && (
                  <a
                    href={profileData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Emmanuel's GitHub profile"
                    className="btn-secondary text-xs py-2 px-3.5 group"
                  >
                    <svg className="w-3.5 h-3.5 fill-neutral-900 dark:fill-neutral-200 group-hover:fill-white dark:group-hover:fill-[#090d16] group-active:fill-white dark:group-active:fill-[#090d16] transition-colors shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* ── Right Column — Form ───────────────────────────────── */}
          <div className="lg:col-span-3 flex flex-col h-full">
            <div className="bg-white dark:bg-[#0e1422] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 sm:p-6 shadow-sm h-full flex flex-col justify-between">
              <h2 className="text-xl font-bold text-neutral-950 dark:text-white mb-4 tracking-tight">Send an Inquiry</h2>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-1 flex flex-col items-center justify-center text-center gap-4 py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 flex items-center justify-center">
                      <CheckCircle size={32} className="text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-950 dark:text-white">Message Sent</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 max-w-xs">
                      Emmanuel will reply within 24 hours. You can also reach him directly on WhatsApp for faster response.
                    </p>
                    <button
                      onClick={() => { setStatus('idle'); setServerError(null); setForm({ name: '', email: '', subject: '', message: '' }); }}
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
                    className="flex-1 flex flex-col justify-between space-y-4"
                    aria-label="Contact inquiry form"
                  >
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5 uppercase tracking-wider">
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
                      {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5 uppercase tracking-wider">
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
                      {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5 uppercase tracking-wider">
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
                          <option value="" disabled className="bg-white dark:bg-[#0e1422] text-neutral-900 dark:text-white">Select inquiry type…</option>
                          {inquiryTypes.map(t => (
                            <option key={t} value={t} className="bg-white dark:bg-[#0e1422] text-neutral-900 dark:text-white">{t}</option>
                          ))}
                        </select>
                        <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 pointer-events-none" />
                      </div>
                      {errors.subject && <p className="text-red-500 text-xs mt-1 font-medium">{errors.subject}</p>}
                    </div>

                    {/* Message */}
                    <div className="flex-1 flex flex-col">
                      <label htmlFor="contact-message" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5 uppercase tracking-wider">
                        Project Details / Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={3}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Describe your project, location, load requirements, or how I can help…"
                        className={inputClass('message') + ' resize-none flex-1 min-h-[85px]'}
                      />
                      <div className="flex justify-between mt-1">
                        {errors.message
                          ? <p className="text-red-500 text-xs font-medium">{errors.message}</p>
                          : <span />}
                        <span className="text-xs text-neutral-400 dark:text-neutral-500">{form.message.length} chars</span>
                      </div>
                    </div>

                    {/* Error Banner */}
                    {serverError && (
                      <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-xs text-red-700 dark:text-red-300 flex items-start gap-2.5">
                        <AlertCircle size={15} className="text-red-500 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <p className="font-medium">{serverError}</p>
                          <p>
                            You can also email directly to{' '}
                            <a
                              href={`mailto:${profileData.contact.email}?subject=${encodeURIComponent(
                                `[${form.subject || 'Inquiry'}] from ${form.name || 'Visitor'}`
                              )}&body=${encodeURIComponent(form.message)}`}
                              className="font-semibold underline hover:text-red-900 dark:hover:text-red-200"
                            >
                              {profileData.contact.email}
                            </a>
                          </p>
                        </div>
                      </div>
                    )}

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
