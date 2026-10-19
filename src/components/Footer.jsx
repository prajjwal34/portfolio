import React from 'react';
import { 
  BarChart3, 
  ArrowUp, 
  Linkedin, 
  Github, 
  Mail, 
  Heart 
} from 'lucide-react';

export default function Footer({ data }) {
  const { personal } = data;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navy-950 border-t border-slate-800/90 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand & Title */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-accent-cyan/15 flex items-center justify-center text-accent-cyan">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white text-base">
                {personal.fullName || "Data Analyst Candidate"}
              </p>
              <p className="text-xs text-slate-400 font-mono">
                {personal.professionalTitle || "Data Analyst | Power BI Developer"}
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {personal.linkedin && (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-accent-cyan hover:border-accent-cyan/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}

            {personal.github && (
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-accent-sky hover:border-accent-sky/40 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            {personal.email && (
              <a
                href={`mailto:${personal.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-0.5"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent-cyan" />
          </button>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            © {currentYear} {personal.fullName || "Data Analyst"}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Built with React, Vite & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
