import React, { useState } from 'react';
import { 
  BarChart3, 
  PieChart, 
  Database, 
  Code2, 
  TrendingUp, 
  Sliders, 
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';

export default function Skills({ data, onOpenEdit }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const { skills } = data;

  const iconMap = {
    BarChart3: <BarChart3 className="w-5 h-5 text-accent-cyan" />,
    PieChart: <PieChart className="w-5 h-5 text-accent-sky" />,
    Database: <Database className="w-5 h-5 text-accent-indigo" />,
    Code2: <Code2 className="w-5 h-5 text-accent-teal" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-amber-400" />
  };

  const categories = ['All', ...skills.map(s => s.category)];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-navy-950">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-accent-blue/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-sky/10 border border-accent-sky/20 text-accent-sky text-xs font-mono font-semibold uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills & Toolkit
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            A comprehensive, hands-on stack for data extraction, transformation, visualization, and insight generation.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
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
            title="Edit skill items or percentages"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Customize Skills</span>
          </button>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skillGroup, index) => (
            <div 
              key={skillGroup.category || index}
              className="glass-card rounded-2xl p-6 border border-slate-800/90 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Card Title & Icon */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center">
                    {iconMap[skillGroup.iconName] || <Layers className="w-5 h-5 text-accent-cyan" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {skillGroup.category}
                    </h3>
                    <p className="text-[11px] text-slate-400 line-clamp-1">
                      {skillGroup.description}
                    </p>
                  </div>
                </div>

                {/* Skill Items List */}
                <div className="space-y-4 mt-5">
                  {skillGroup.items.map((item, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium text-slate-200">{item.name}</span>
                        <span className="font-mono text-accent-cyan font-semibold">{item.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-accent-blue via-accent-sky to-accent-cyan rounded-full transition-all duration-500"
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Tag */}
              <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{skillGroup.items.length} Core Areas</span>
                <span className="text-accent-cyan/80">Editable Levels</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
