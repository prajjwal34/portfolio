import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Sliders, CheckCircle2 } from 'lucide-react';

export default function Education({ data, onOpenEdit }) {
  const { education } = data;

  if (!education || education.length === 0) return null;

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-navy-900/40 border-t border-slate-800/80">
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-accent-indigo/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-sky/10 border border-accent-sky/20 text-accent-sky text-xs font-mono font-semibold uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education Timeline
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            Formal technical education that built the core foundation for data structures, statistical analysis, and database management.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 relative group transition-all duration-300 hover:border-slate-700"
            >
              {/* Top Row: Degree & Year */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan"></span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-sm font-semibold text-accent-cyan font-mono">
                    {edu.specialization}
                  </p>
                  <p className="text-base text-slate-300 font-medium">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-accent-sky" />
                    <span>Graduated: {edu.graduationYear}</span>
                  </span>
                  {edu.location && (
                    <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-mono">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <span>{edu.location}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              {edu.description && (
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-5">
                  {edu.description}
                </p>
              )}

              {/* Relevant Coursework */}
              {edu.coursework && edu.coursework.length > 0 && (
                <div className="pt-5 mt-5 border-t border-slate-800/80 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    <BookOpen className="w-4 h-4 text-accent-cyan" />
                    <span>Relevant Coursework:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, cIdx) => (
                      <span 
                        key={cIdx}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-950/70 border border-slate-800 text-slate-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Edit Helper */}
              <div className="pt-4 flex justify-end">
                <button
                  onClick={onOpenEdit}
                  className="text-xs text-slate-500 hover:text-accent-cyan flex items-center gap-1 transition-colors"
                >
                  <Sliders className="w-3 h-3" />
                  <span>Edit College / Graduation Year</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
