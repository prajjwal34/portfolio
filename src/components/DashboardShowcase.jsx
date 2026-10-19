import React, { useState } from 'react';
import { 
  Layout, 
  ExternalLink, 
  Github, 
  Sliders, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  Maximize2
} from 'lucide-react';

export default function DashboardShowcase({ data, onOpenEdit }) {
  const { dashboardShowcase } = data;
  const [activeTab, setActiveTab] = useState(0);

  if (!dashboardShowcase || dashboardShowcase.length === 0) return null;

  const currentDashboard = dashboardShowcase[activeTab] || dashboardShowcase[0];

  return (
    <section id="dashboards" className="py-24 relative overflow-hidden bg-navy-950">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-teal/10 border border-accent-teal/20 text-accent-teal text-xs font-mono font-semibold uppercase">
            <Layout className="w-3.5 h-3.5" />
            <span>Interactive Visualizations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dashboard Showcase
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            Deep dive into production-ready business intelligence dashboards designed for clarity, interactivity, and executive impact.
          </p>
        </div>

        {/* Dashboard Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {dashboardShowcase.map((dash, idx) => (
            <button
              key={dash.id || idx}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-accent-cyan text-slate-950 shadow-lg shadow-accent-cyan/20 scale-105'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <span>{dash.title.split('(')[0]}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                activeTab === idx ? 'bg-slate-950/20 text-slate-900 font-bold' : 'bg-slate-800 text-slate-400'
              }`}>
                {dash.type}
              </span>
            </button>
          ))}

          <button
            onClick={onOpenEdit}
            className="p-2.5 rounded-xl text-accent-cyan bg-accent-cyan/10 border border-dashed border-accent-cyan/40 hover:bg-accent-cyan/20 text-xs font-semibold flex items-center gap-1.5"
            title="Edit Dashboard Details"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Edit Dashboards</span>
          </button>
        </div>

        {/* Large Showcase Container */}
        <div className="glass-card rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
          
          {/* Top Bar */}
          <div className="px-6 py-4 bg-navy-900/90 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {currentDashboard.title}
                </h3>
              </div>
              <p className="text-xs text-accent-cyan font-mono mt-0.5">
                {currentDashboard.type}
              </p>
            </div>

            {/* Links */}
            <div className="flex items-center gap-3">
              {currentDashboard.repoUrl && (
                <a
                  href={currentDashboard.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Repository</span>
                </a>
              )}

              {currentDashboard.liveUrl && (
                <a
                  href={currentDashboard.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-accent-cyan to-accent-sky hover:opacity-95 transition-all shadow-md shadow-accent-cyan/25"
                >
                  <span>Open Live Dashboard</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Main Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8">
            
            {/* Left Large Screenshot Placeholder */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-navy-950 shadow-inner group">
                <img
                  src={currentDashboard.previewImage}
                  alt={currentDashboard.title}
                  className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute bottom-3 right-3 bg-navy-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-mono text-slate-300 flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>Preview View</span>
                </div>
              </div>

              {/* Tools Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs font-mono text-slate-400">Toolkit:</span>
                {(currentDashboard.tools || []).map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-accent-sky border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Information Panel */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Business Problem */}
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase font-mono tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  <span>Business Problem Addressed</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {currentDashboard.problem}
                </p>
              </div>

              {/* Solution Implemented */}
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-accent-cyan text-xs font-bold uppercase font-mono tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Analytical Solution & Architecture</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {currentDashboard.solution}
                </p>
              </div>

              {/* Key Metrics Delivered */}
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase font-mono tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Key Metrics & Tracked KPIs</span>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {(currentDashboard.keyMetrics || []).map((metric, idx) => (
                    <div 
                      key={idx}
                      className="p-2.5 rounded-xl bg-navy-900 border border-slate-800 text-xs font-mono text-slate-200"
                    >
                      {metric}
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
