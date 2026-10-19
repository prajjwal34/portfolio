import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Linkedin, 
  Github, 
  Database, 
  BarChart2, 
  CheckCircle,
  Sparkles,
  MapPin,
  Camera
} from 'lucide-react';

export default function Hero({ data, onOpenEdit }) {
  const [imageError, setImageError] = useState(false);
  const { personal, hero } = data;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden data-grid-bg">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent-cyan/15 rounded-full blur-[130px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-accent-blue/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Recruiter Hiring Status Banner */}
        <div className="flex justify-center md:justify-start mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-md shadow-accent-cyan/5 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-300">
              {personal.statusBadge || "Actively Looking for Data Analyst Opportunities | Immediate Joiner"}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 text-center md:text-left space-y-6">
            
            <div className="space-y-3">
              <div className="inline-block">
                <span className="text-sm font-semibold tracking-wider uppercase text-accent-cyan font-mono">
                  Hi, I'm {personal.fullName || "[Your Full Name]"} 👋
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                <span className="text-gradient">
                  {hero.headline || "Turning Data Into Decisions."}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-accent-sky/90 font-mono pt-1">
                {personal.professionalTitle || "Data Analyst | Power BI Developer | SQL | Python | Advanced Excel"}
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {hero.subheadline || "I'm a Data Analyst passionate about transforming raw data into actionable insights through data analysis, interactive dashboards, and data-driven storytelling."}
            </p>

            {/* Location & Quick Contact Indicator */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs sm:text-sm text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-accent-cyan" />
                {personal.location || "Bengaluru, India"}
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-sky"></span>
                {personal.yearsExperience || "Fresher (B.Tech Graduate)"}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-accent-cyan via-accent-sky to-accent-blue hover:opacity-95 transition-all duration-300 shadow-lg shadow-accent-cyan/25 hover:shadow-accent-cyan/40 hover:-translate-y-0.5"
              >
                <span>{hero.primaryButtonText || "View My Projects"}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 hover:border-slate-600 transition-all duration-300 hover:-translate-y-0.5 shadow-md"
              >
                <Download className="w-4 h-4 text-accent-cyan" />
                <span>{hero.secondaryButtonText || "Download Resume"}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-accent-sky" />
                <span>{hero.contactButtonText || "Contact Me"}</span>
              </a>
            </div>

            {/* Social Links & Edit Shortcut */}
            <div className="pt-4 flex items-center justify-center md:justify-start gap-4">
              <span className="text-xs text-slate-400 font-mono">Connect:</span>
              
              {personal.linkedin && (
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-slate-800 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}

              {personal.github && (
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-slate-800 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}

              {personal.email && (
                <a
                  href={`mailto:${personal.email}`}
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-slate-800 transition-all"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}

              <button
                onClick={onOpenEdit}
                className="ml-2 text-xs text-slate-400 hover:text-accent-cyan underline underline-offset-4 decoration-accent-cyan/40 transition-colors"
              >
                ✏️ Edit My Info
              </button>
            </div>

          </div>

          {/* Right Column: Profile Photo Card with Tech Framing */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative glow & gradient frame */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-accent-cyan/40 via-accent-blue/20 to-transparent shadow-2xl shadow-accent-cyan/15">
                <div className="relative rounded-[22px] overflow-hidden bg-navy-900/90 border border-slate-800/80 backdrop-blur-xl p-5">
                  
                  {/* Photo Display Area */}
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-navy-950 border border-slate-800 group">
                    <img
                      src={imageError ? "/images/profile-placeholder.svg" : (personal.profileImage || "/images/profile-placeholder.svg")}
                      alt={personal.fullName || "Data Analyst"}
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Quick photo replacement helper badge */}
                    <div className="absolute bottom-2 left-2 right-2 bg-navy-950/90 backdrop-blur-md border border-slate-700/80 rounded-xl px-3 py-2 text-center opacity-90 group-hover:opacity-100 transition-opacity">
                      <p className="text-[11px] font-mono text-accent-cyan flex items-center justify-center gap-1.5">
                        <Camera className="w-3.5 h-3.5" />
                        <span>Place photo in /public/images/profile.jpg</span>
                      </p>
                    </div>
                  </div>

                  {/* Candidate Name Card Below Photo */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-white text-base">
                        {personal.fullName || "[Your Full Name]"}
                      </p>
                      <p className="text-xs font-mono text-accent-cyan">
                        B.Tech Graduate • Data Analyst
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-1 rounded-full">
                      <CheckCircle className="w-3 h-3" />
                      <span>Ready to Join</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Tech Badge 1: Power BI & SQL */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-slate-900/95 border border-slate-700/90 rounded-xl p-3 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3 animate-float">
                <div className="w-9 h-9 rounded-lg bg-accent-cyan/15 flex items-center justify-center text-accent-cyan">
                  <BarChart2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Power BI & DAX</p>
                  <p className="text-[10px] text-slate-400 font-mono">Interactive Dashboards</p>
                </div>
              </div>

              {/* Floating Tech Badge 2: SQL & Python */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-slate-900/95 border border-slate-700/90 rounded-xl p-3 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent-blue/15 flex items-center justify-center text-accent-sky">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">SQL & Python</p>
                  <p className="text-[10px] text-slate-400 font-mono">Data Cleansing & CTEs</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Hero KPI Stats Ribbon */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {(hero.metrics || []).map((metric, idx) => (
              <div 
                key={idx}
                className="glass-card rounded-2xl p-4 sm:p-5 text-center border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-sky font-mono">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
