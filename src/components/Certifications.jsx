import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle2, Sliders } from 'lucide-react';

export default function Certifications({ data, onOpenEdit }) {
  const { certificationsSection } = data;

  if (
    !certificationsSection || 
    !certificationsSection.showSection || 
    !certificationsSection.items || 
    certificationsSection.items.length === 0
  ) {
    return null;
  }

  return (
    <section id="certifications" className="py-20 relative overflow-hidden bg-navy-950 border-t border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo text-xs font-mono font-semibold uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {certificationsSection.title || "Certifications & Achievements"}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            {certificationsSection.subtitle || "Continuous skill development and verified credentials"}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsSection.items.map((cert) => (
            <div
              key={cert.id}
              className="glass-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                    <Calendar className="w-3 h-3 text-accent-sky" />
                    <span>{cert.issueDate}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-accent-sky transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-accent-cyan font-mono mt-1">
                    {cert.issuer}
                  </p>
                </div>

                {cert.skillsLearned && (
                  <div className="pt-2">
                    <p className="text-[11px] font-mono text-slate-400 mb-1">Focus Areas:</p>
                    <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                      {cert.skillsLearned}
                    </p>
                  </div>
                )}
              </div>

              {cert.credentialUrl && (
                <div className="pt-4 mt-4 border-t border-slate-800 flex justify-between items-center">
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent-sky hover:text-white transition-colors"
                  >
                    <span>View Credential</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
