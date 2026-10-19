import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle, 
  AlertCircle, 
  Lightbulb, 
  TrendingUp, 
  Layers
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-navy-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-navy-950/80 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30">
              {project.category}
            </span>
            <span className="text-slate-400 text-xs hidden sm:inline">• Project Case Study</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8">
          
          {/* Title & Short Summary */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.fullDescription || project.shortDescription}
            </p>
          </div>

          {/* Screenshot / Mockup Preview */}
          <div className="rounded-xl overflow-hidden border border-slate-800 bg-navy-950 relative group">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full max-h-[360px] object-cover object-top" 
            />
          </div>

          {/* Tools & Tech Stack */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Tools & Technologies Utilized:
            </h4>
            <div className="flex flex-wrap gap-2">
              {(project.tools || []).map((tool, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 border border-slate-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* KPIs Grid */}
          {project.kpis && (
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Key Analytical KPIs:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.kpis.map((kpi, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
                    <p className="text-lg font-bold text-accent-cyan font-mono">{kpi.value}</p>
                    <p className="text-xs text-slate-400 font-medium">{kpi.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Problem, Approach & Business Impact */}
          {project.details && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              {/* Problem */}
              <div className="p-5 rounded-xl bg-slate-950/40 border border-slate-800/80 space-y-2">
                <div className="flex items-center gap-2 text-rose-400 text-sm font-bold">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Business Problem</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.details.problem}
                </p>
              </div>

              {/* Approach */}
              <div className="p-5 rounded-xl bg-slate-950/40 border border-slate-800/80 space-y-2">
                <div className="flex items-center gap-2 text-accent-sky text-sm font-bold">
                  <Layers className="w-4 h-4" />
                  <span>Methodology & Approach</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.details.approach}
                </p>
              </div>

              {/* Key Insights */}
              <div className="md:col-span-2 p-5 rounded-xl bg-slate-950/40 border border-slate-800/80 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 text-sm font-bold">
                  <Lightbulb className="w-4 h-4" />
                  <span>Key Analytical Insights Discovered</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {project.details.keyInsights.map((insight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Business Impact */}
              <div className="md:col-span-2 p-5 rounded-xl bg-gradient-to-r from-accent-cyan/10 to-accent-blue/10 border border-accent-cyan/30 space-y-2">
                <div className="flex items-center gap-2 text-accent-cyan text-sm font-bold">
                  <TrendingUp className="w-4 h-4" />
                  <span>Business Impact & ROI</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {project.details.businessImpact}
                </p>
              </div>

            </div>
          )}

        </div>

        {/* Modal Bottom Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-navy-950/90 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors"
          >
            Close Details
          </button>

          <div className="flex items-center gap-2.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View Code</span>
              </a>
            )}

            {project.dashboardUrl && (
              <a
                href={project.dashboardUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-accent-cyan to-accent-sky hover:opacity-95 transition-all shadow-md shadow-accent-cyan/20"
              >
                <span>View Dashboard</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
