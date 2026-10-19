import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Eye, 
  Sliders, 
  Sparkles,
  BarChart,
  ArrowUpRight
} from 'lucide-react';

export default function Projects({ data, onSelectProject, onOpenEdit }) {
  const [filter, setFilter] = useState('All');
  const { projects } = data;

  const categories = ['All', 'Power BI', 'Python', 'SQL', 'Excel'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === filter.toLowerCase() || p.tools.some(t => t.toLowerCase() === filter.toLowerCase()));

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-navy-900/60 border-t border-b border-slate-800/80">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-accent-sky/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono font-semibold uppercase">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Analytics Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            Real-world inspired business case studies demonstrating data modeling, SQL querying, exploratory analysis, and BI visualization.
          </p>
          <p className="text-xs font-mono text-accent-cyan/80">
            *All project templates are fully editable to match your personal datasets and repositories.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === cat
                  ? 'bg-accent-cyan text-slate-950 shadow-md shadow-accent-cyan/25 scale-105'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}

          <button
            onClick={onOpenEdit}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold text-accent-cyan bg-accent-cyan/10 border border-dashed border-accent-cyan/40 hover:bg-accent-cyan/20 transition-all flex items-center gap-1.5"
            title="Edit project names, links, or screenshots"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Customize Projects</span>
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between group"
            >
              <div>
                
                {/* Project Screenshot / Mockup */}
                <div 
                  className="relative aspect-video w-full overflow-hidden bg-navy-950 cursor-pointer border-b border-slate-800/80"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Category Pill Over Image */}
                  <div className="absolute top-3 left-3 bg-navy-950/90 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-700/80 text-xs font-mono font-semibold text-accent-cyan flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span>
                    <span>{project.category}</span>
                  </div>

                  {/* Hover Overlay with View Details Hint */}
                  <div className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-accent-cyan shadow-lg">
                      <Eye className="w-4 h-4" />
                      <span>View Case Study</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  
                  {/* Title */}
                  <h3 
                    onClick={() => onSelectProject(project)}
                    className="text-xl font-bold text-white group-hover:text-accent-sky transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-accent-sky transition-colors shrink-0" />
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* KPI Badges */}
                  {project.kpis && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                      {project.kpis.map((kpi, idx) => (
                        <div key={idx} className="bg-slate-950/70 border border-slate-800/90 rounded-lg p-2 text-center">
                          <div className="text-xs font-mono font-bold text-accent-cyan">{kpi.value}</div>
                          <div className="text-[10px] text-slate-400 truncate">{kpi.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {(project.tools || []).map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/80"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-6 py-4 bg-navy-950/60 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-sky hover:text-white transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                      title="View Source Code on GitHub"
                      aria-label="View Source Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  {project.dashboardUrl && (
                    <a
                      href={project.dashboardUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-accent-cyan hover:bg-accent-sky transition-colors shadow-sm"
                    >
                      <span>View Dashboard</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
