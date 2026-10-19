import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle2, 
  Copy, 
  AlertCircle,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

export default function Contact({ data, onShowToast }) {
  const { personal, contact } = data;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCopyEmail = () => {
    if (personal.email) {
      navigator.clipboard.writeText(personal.email);
      if (onShowToast) {
        onShowToast({
          type: 'success',
          message: `Copied "${personal.email}" to clipboard!`
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // If an endpoint like Formspree is provided
    if (contact.formspreeEndpoint && contact.formspreeEndpoint.startsWith('http')) {
      try {
        const response = await fetch(contact.formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          if (onShowToast) {
            onShowToast({
              type: 'success',
              message: 'Message sent successfully! Thank you.'
            });
          }
        } else {
          throw new Error('Form service returned an error.');
        }
      } catch (err) {
        setStatus('error');
        setErrorMessage('Failed to send message via form service. Please use the direct email link.');
      }
    } else {
      // Direct Email Client Fallback (RFC Mailto)
      const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
        formData.subject || `Inquiry from ${formData.name} regarding Data Analyst Role`
      )}&body=${encodeURIComponent(
        `Hi ${personal.fullName},\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      )}`;

      window.location.href = mailtoUrl;
      setStatus('success');
      if (onShowToast) {
        onShowToast({
          type: 'info',
          message: 'Opening your default email app to send message!'
        });
      }
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-navy-950">
      
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono font-semibold uppercase">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {contact.headline || "Let's Connect & Discuss Opportunities"}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            {contact.subheadline || "I am actively seeking an entry-level Data Analyst role. Whether you have an open position or an analytics project, I'd love to hear from you!"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-accent-cyan" />
                <span>Contact Channels</span>
              </h3>

              <div className="space-y-4">
                
                {/* Email Item */}
                <div className="flex items-start justify-between gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-mono">Email Address</p>
                      <a 
                        href={`mailto:${personal.email}`}
                        className="text-sm font-semibold text-white hover:text-accent-cyan transition-colors"
                      >
                        {personal.email || "aman.dataanalyst@example.com"}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                    title="Copy Email"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                {/* Phone Item */}
                {personal.phone && (
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-mono">Phone Number</p>
                      <a 
                        href={`tel:${personal.phone}`}
                        className="text-sm font-semibold text-white hover:text-accent-cyan transition-colors"
                      >
                        {personal.phone}
                      </a>
                    </div>
                  </div>
                )}

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-accent-sky/10 flex items-center justify-center text-accent-sky shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">Current Location</p>
                    <p className="text-sm font-semibold text-white">
                      {personal.location || "Bengaluru, India"}
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Professional Networks:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {personal.linkedin && (
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-accent-cyan/40 text-xs font-semibold text-slate-300 hover:text-white transition-all group"
                    >
                      <Linkedin className="w-4 h-4 text-accent-cyan group-hover:scale-110 transition-transform" />
                      <span>LinkedIn Profile</span>
                    </a>
                  )}

                  {personal.github && (
                    <a
                      href={personal.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-accent-cyan/40 text-xs font-semibold text-slate-300 hover:text-white transition-all group"
                    >
                      <Github className="w-4 h-4 text-accent-sky group-hover:scale-110 transition-transform" />
                      <span>GitHub Profile</span>
                    </a>
                  )}
                </div>
              </div>

            </div>

            {/* Recruiter Response Promise */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 text-xs text-slate-400 font-mono">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Response turnaround: Usually within 24 business hours.</span>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Leave a note with your organization's requirements and I'll get back to you promptly.
                </p>
              </div>

              {/* Status Alert */}
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800/60 flex items-start gap-3 text-xs sm:text-sm text-emerald-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Thank you for reaching out!</p>
                    <p className="text-emerald-300/80 text-xs mt-0.5">
                      Your message has been initiated. I look forward to connecting with you.
                    </p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-800/60 flex items-start gap-3 text-xs sm:text-sm text-rose-200">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Unable to send</p>
                    <p className="text-rose-300/80 text-xs mt-0.5">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-300">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Priya Sharma"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-slate-800 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan outline-none text-sm text-white placeholder-slate-600 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-300">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="priya@company.com"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-slate-800 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan outline-none text-sm text-white placeholder-slate-600 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-300">
                    Subject / Role Opportunity
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Junior Data Analyst Position at [Company]"
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-slate-800 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan outline-none text-sm text-white placeholder-slate-600 transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-300">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe the opportunity, role requirements, or project details..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-slate-800 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan outline-none text-sm text-white placeholder-slate-600 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-accent-cyan via-accent-sky to-accent-blue hover:opacity-95 transition-all shadow-lg shadow-accent-cyan/20 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {status === 'submitting' ? 'Processing...' : 'Send Message'}
                  </span>
                </button>

                {/* Backend Note */}
                <p className="text-[11px] font-mono text-slate-500 text-center pt-2">
                  ℹ️ Uses default email client fallback or optional Formspree integration configured in portfolioData.js
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
