import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Menu, 
  X, 
  FileText, 
  Send, 
  Sliders, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function Navbar({ data, onOpenEdit }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Dashboards', href: '#dashboards' },
    { label: 'Education', href: '#education' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy-950/85 backdrop-blur-md border-b border-slate-800/90 shadow-lg shadow-black/30 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#" 
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-blue to-accent-cyan p-0.5 shadow-md shadow-accent-cyan/20 group-hover:shadow-accent-cyan/40 transition-all duration-300">
              <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-accent-cyan group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg tracking-tight text-white group-hover:text-accent-sky transition-colors">
                  {data.personal.fullName || 'Data Analyst'}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
                Turning Data Into Decisions
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-accent-sky hover:bg-slate-800/60 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Live Biodata Customizer Trigger */}
            <button
              onClick={onOpenEdit}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/30 hover:bg-accent-cyan/20 transition-all duration-200 shadow-sm shadow-accent-cyan/10"
              title="Click to edit all details, bio, and projects live!"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Edit Biodata</span>
            </button>

            {/* Quick Resume Link */}
            <a
              href={data.personal.resumeUrl}
              download
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5 text-accent-sky" />
              <span>Resume</span>
            </a>

            {/* Contact / Hire Me */}
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-gradient-to-r from-accent-cyan to-accent-sky hover:from-accent-sky hover:to-accent-cyan transition-all duration-300 shadow-md shadow-accent-cyan/25 hover:shadow-accent-cyan/40 hover:-translate-y-0.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenEdit}
              className="p-2 rounded-lg text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/30 text-xs flex items-center gap-1"
              title="Edit Biodata"
            >
              <Sliders className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-950/95 border-b border-slate-800 px-4 pt-3 pb-6 backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEdit();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/30"
              >
                <Sliders className="w-4 h-4" />
                <span>Customize Biodata & Details</span>
              </button>
              <a
                href={data.personal.resumeUrl}
                download
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-200 bg-slate-800"
              >
                <FileText className="w-4 h-4 text-accent-sky" />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-accent-cyan to-accent-sky"
              >
                <Send className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
