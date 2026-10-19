import React from 'react';
import { 
  Lightbulb, 
  Filter, 
  LineChart, 
  LayoutDashboard, 
  GraduationCap, 
  CheckCircle2, 
  Target,
  Workflow
} from 'lucide-react';

export default function About({ data, onOpenEdit }) {
  const { about, personal } = data;

  const pillarIcons = {
    'analytical-thinking': <Lightbulb className="w-6 h-6 text-amber-400" />,
    'data-cleaning': <Filter className="w-6 h-6 text-accent-cyan" />,
    'eda-insights': <LineChart className="w-6 h-6 text-accent-sky" />,
    'bi-dashboards': <LayoutDashboard className="w-6 h-6 text-accent-indigo" />
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-navy-900/40 border-t border-b border-slate-800/80">
      
      {/* Decorative gradient spot */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono font-semibold uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {about.title || "About Me"}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            {about.subtitle || "Turning Complex Datasets into Meaningful Business Intelligence"}
          </p>
        </div>

        {/* Narrative & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Narrative Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4 border border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-sky/15 flex items-center justify-center text-accent-sky">
                  <Workflow className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Entry-Level Data Analyst</h3>
                  <p className="text-xs font-mono text-accent-cyan">B.Tech Graduate • Ready for Full-Time Roles</p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {about.introduction}
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {about.detailedBio}
              </p>

              {/* Core Strengths Checklist */}
              <div className="pt-4 border-t border-slate-800 space-y-2.5">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Key Technical Competencies:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0" />
                    <span>Data Cleaning & Imputation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0" />
                    <span>SQL Query Optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0" />
                    <span>DAX Measures & Power BI ETL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0" />
                    <span>Data-Driven Storytelling</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Candidate Mindset Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-accent-blue/10 via-slate-900 to-accent-cyan/10 border border-slate-700/80 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent-cyan/20 flex items-center justify-center text-accent-cyan shrink-0 mt-0.5">
                <Target className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">Why Hire Me as a Fresher?</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  I combine an engineering foundation with active hands-on portfolio practice. I don't just write queries; I ask business questions, validate assumptions against real data, and communicate recommendations with clarity.
                </p>
              </div>
            </div>
          </div>

          {/* Right 4 Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(about.corePillars || []).map((pillar) => (
              <div 
                key={pillar.id}
                className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-800/90 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {pillarIcons[pillar.id] || <CheckCircle2 className="w-6 h-6 text-accent-cyan" />}
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-accent-sky transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
