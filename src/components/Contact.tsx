import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Phone, MessageCircle, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Google PPC Campaign Management',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#ECE7F8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold tracking-wider uppercase text-[#0D9488] mb-2 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E1736]">
            Let's Work Together
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5F5577] leading-relaxed">
            Interested in optimizing your PPC ad spend, scaling an affiliate coupon portal, or exploring performance marketing opportunities? Let's connect.
          </p>
        </div>

        {/* 2-Column Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Phone & WhatsApp Card */}
            <div className="bg-white p-7 rounded-3xl border border-[#EDE8F8] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#ECFDF5] flex items-center justify-center text-[#059669]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1E1736]">
                      Phone & WhatsApp
                    </h3>
                    <div className="text-xs text-[#5F5577]">
                      Direct mobile connect
                    </div>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#059669] hover:bg-[#047857] rounded-xl shadow-xs transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat</span>
                </a>
              </div>

              <div className="p-3 bg-[#FAF8F5] rounded-2xl border border-[#EDE8F8] flex items-center justify-between gap-3">
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-base font-bold text-[#1E1736] hover:text-[#0D9488] font-mono tracking-tight"
                >
                  {PERSONAL_INFO.phone} <span className="text-xs text-[#71658E] font-normal font-sans">({PERSONAL_INFO.phoneInternational})</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="p-2 rounded-xl text-[#5F5577] hover:text-[#0D9488] hover:bg-white transition-colors cursor-pointer shrink-0"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="bg-white p-7 rounded-3xl border border-[#EDE8F8] shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#F0FDFA] flex items-center justify-center text-[#0D9488]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1E1736]">
                    Direct Email
                  </h3>
                  <div className="text-xs text-[#5F5577]">
                    Primary email contact
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#FAF8F5] rounded-2xl border border-[#EDE8F8] flex items-center justify-between gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm font-semibold text-[#1E1736] hover:text-[#0D9488] transition-colors truncate"
                >
                  {PERSONAL_INFO.email}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl text-[#5F5577] hover:text-[#0D9488] hover:bg-white transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Social Channels Card (LinkedIn & Instagram) */}
            <div className="bg-white p-7 rounded-3xl border border-[#EDE8F8] shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-[#1E1736]">
                Professional Profiles
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#FAF8F5] rounded-2xl border border-[#EDE8F8] hover:border-[#0A66C2] hover:bg-[#EFF6FF] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 fill-[#0A66C2]" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs font-bold text-[#1E1736]">LinkedIn</div>
                      <div className="text-[10px] text-[#5F5577]">areebaimran12</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#5F5577] group-hover:text-[#0A66C2] group-hover:translate-x-0.5 transition-all" />
                </a>

                <a
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#FAF8F5] rounded-2xl border border-[#EDE8F8] hover:border-[#E1306C] hover:bg-[#FDF2F8] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 fill-[#E1306C]" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs font-bold text-[#1E1736]">Instagram</div>
                      <div className="text-[10px] text-[#5F5577]">@imareeby</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#5F5577] group-hover:text-[#E1306C] group-hover:translate-x-0.5 transition-all" />
                </a>
              </div>
            </div>

            <div className="space-y-2 text-xs text-[#5F5577] px-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0D9488]" />
                <span>Available for immediate response via WhatsApp & Email</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>NDA & Client confidentiality assured</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#EDE8F8] shadow-xs">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-3xl bg-[#F0FDFA] text-[#0D9488] border border-[#CCFBF1] flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E1736]">
                    Message Sent Successfully
                  </h3>
                  <p className="text-sm text-[#5F5577] max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}! Your message regarding "{formData.subject}" has been received. You can also connect directly via WhatsApp at{' '}
                    <a href={PERSONAL_INFO.whatsappUrl} className="text-[#059669] font-bold underline">
                      {PERSONAL_INFO.phone}
                    </a>{' '}
                    or email at{' '}
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#0D9488] font-bold underline">
                      {PERSONAL_INFO.email}
                    </a>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'Google PPC Campaign Management', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 text-xs font-bold text-[#1E1736] bg-[#F0FDFA] hover:bg-[#CCFBF1] rounded-xl transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-[#1E1736] mb-1">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-[#5F5577] mb-4">
                    Inquire about PPC management, coupon portals, or affiliate operations.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-[#1E1736] mb-1.5">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EDE8F8] rounded-2xl text-sm text-[#1E1736] placeholder-[#A297BD] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/30 focus:border-[#0D9488] transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[#1E1736] mb-1.5">
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@brand.com"
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EDE8F8] rounded-2xl text-sm text-[#1E1736] placeholder-[#A297BD] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/30 focus:border-[#0D9488] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-[#1E1736] mb-1.5">
                      Subject / Project Scope
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EDE8F8] rounded-2xl text-sm text-[#1E1736] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/30 focus:border-[#0D9488] transition-all"
                    >
                      <option value="Google PPC Campaign Management">Google PPC Campaign Management</option>
                      <option value="Coupon & Deal Website Strategy">Coupon & Deal Website Strategy</option>
                      <option value="Awin / Impact.com Publisher Setup">Awin / Impact.com Publisher Setup</option>
                      <option value="Keyword & Product Intent Research">Keyword & Product Intent Research</option>
                      <option value="Affiliate Performance Tracking Audit">Affiliate Performance Tracking Audit</option>
                      <option value="Career / Employment Opportunity">Career / Employment Opportunity</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#1E1736] mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your campaign objectives, ad spend budget, or role specifications..."
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EDE8F8] rounded-2xl text-sm text-[#1E1736] placeholder-[#A297BD] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/30 focus:border-[#0D9488] transition-all resize-y"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || 'Inquiry')}&body=${encodeURIComponent(formData.message || '')}`}
                      className="text-xs text-[#0D9488] hover:underline font-semibold"
                    >
                      Open default email client
                    </a>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-gradient-to-r from-[#1E1736] via-[#134E4A] to-[#0D9488] hover:from-[#115E59] hover:to-[#0F766E] rounded-2xl shadow-md hover:shadow-lg hover:shadow-[#0D9488]/20 transition-all duration-200 cursor-pointer active:scale-[0.98]"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
