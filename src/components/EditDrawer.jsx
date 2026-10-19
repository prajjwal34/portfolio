import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Copy, 
  RotateCcw, 
  User, 
  FileText, 
  Briefcase, 
  Cpu, 
  GraduationCap, 
  Award, 
  Check, 
  Sliders, 
  Info,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { initialPortfolioData } from '../data/portfolioData';

export default function EditDrawer({ 
  isOpen, 
  onClose, 
  portfolioData, 
  onUpdateData, 
  onShowToast 
}) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState(JSON.parse(JSON.stringify(portfolioData)));
  const [copied, setCopied] = useState(false);

  // Handle nested personal fields
  const handlePersonalChange = (field, value) => {
    const updated = {
      ...formData,
      personal: {
        ...formData.personal,
        [field]: value
      }
    };
    setFormData(updated);
    onUpdateData(updated);
  };

  // Handle hero fields
  const handleHeroChange = (field, value) => {
    const updated = {
      ...formData,
      hero: {
        ...formData.hero,
        [field]: value
      }
    };
    setFormData(updated);
    onUpdateData(updated);
  };

  // Handle about fields
  const handleAboutChange = (field, value) => {
    const updated = {
      ...formData,
      about: {
        ...formData.about,
        [field]: value
      }
    };
    setFormData(updated);
    onUpdateData(updated);
  };

  // Handle education fields
  const handleEducationChange = (index, field, value) => {
    const newEdu = [...formData.education];
    newEdu[index] = {
      ...newEdu[index],
      [field]: value
    };
    const updated = {
      ...formData,
      education: newEdu
    };
    setFormData(updated);
    onUpdateData(updated);
  };

  // Handle skill percentage change
  const handleSkillLevelChange = (groupIndex, itemIndex, value) => {
    const newSkills = [...formData.skills];
    newSkills[groupIndex].items[itemIndex].level = Number(value);
    const updated = {
      ...formData,
      skills: newSkills
    };
    setFormData(updated);
    onUpdateData(updated);
  };

  // Handle project link/title change
  const handleProjectChange = (index, field, value) => {
    const newProjects = [...formData.projects];
    newProjects[index] = {
      ...newProjects[index],
      [field]: value
    };
    const updated = {
      ...formData,
      projects: newProjects
    };
    setFormData(updated);
    onUpdateData(updated);
  };

  // Reset to initial data
  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all data back to the default sample templates?")) {
      const resetData = JSON.parse(JSON.stringify(initialPortfolioData));
      setFormData(resetData);
      onUpdateData(resetData);
      if (onShowToast) {
        onShowToast({
          type: 'info',
          message: 'Reset data back to default template.'
        });
      }
    }
  };

  // Generate JS file string for portfolioData.js
  const generateJsFileContent = () => {
    return `/**
 * =========================================================================
 * 📊 PORTFOLIO CONFIGURATION DATA (CUSTOMIZED & READY TO DEPLOY)
 * =========================================================================
 * Generated automatically from your in-browser Biodata Customizer!
 * Replace the content of src/data/portfolioData.js with this file to deploy.
 */

export const initialPortfolioData = ${JSON.stringify(formData, null, 2)};
`;
  };

  // Copy code to clipboard
  const handleCopyCode = () => {
    const code = generateJsFileContent();
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
    if (onShowToast) {
      onShowToast({
        type: 'success',
        message: 'Configuration copied! You can now paste it into src/data/portfolioData.js'
      });
    }
  };

  // Download portfolioData.js
  const handleDownloadFile = () => {
    const code = generateJsFileContent();
    const blob = new Blob([code], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolioData.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    if (onShowToast) {
      onShowToast({
        type: 'success',
        message: 'Downloaded portfolioData.js! Replace src/data/portfolioData.js with this file.'
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-2xl h-full bg-navy-950 border-l border-slate-800 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Drawer Header */}
        <div className="px-6 py-4 bg-navy-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-accent-cyan/15 flex items-center justify-center text-accent-cyan">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">
                Customize Biodata & Details
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                Changes apply instantly in real-time
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              title="Reset to default templates"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              aria-label="Close customizer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex overflow-x-auto gap-1 px-4 py-2.5 bg-navy-950 border-b border-slate-800/80 text-xs font-semibold text-slate-400 shrink-0">
          <button
            onClick={() => setActiveTab('personal')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'personal' ? 'bg-accent-cyan text-slate-950 font-bold' : 'hover:text-white hover:bg-slate-900'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>1. Personal & Links</span>
          </button>

          <button
            onClick={() => setActiveTab('hero')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'hero' ? 'bg-accent-cyan text-slate-950 font-bold' : 'hover:text-white hover:bg-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>2. Hero & About</span>
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'education' ? 'bg-accent-cyan text-slate-950 font-bold' : 'hover:text-white hover:bg-slate-900'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>3. Education</span>
          </button>

          <button
            onClick={() => setActiveTab('skills')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'skills' ? 'bg-accent-cyan text-slate-950 font-bold' : 'hover:text-white hover:bg-slate-900'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>4. Skills</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'projects' ? 'bg-accent-cyan text-slate-950 font-bold' : 'hover:text-white hover:bg-slate-900'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>5. Projects</span>
          </button>
        </div>

        {/* Tab Content Panel */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* TAB 1: PERSONAL & BIODATA */}
          {activeTab === 'personal' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 text-xs text-accent-cyan flex items-start gap-2">
                <Info className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  Fill in your authentic biodata and contact links below. As soon as you type, you'll see the website change immediately!
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Your Full Name</label>
                  <input
                    type="text"
                    value={formData.personal.fullName}
                    onChange={(e) => handlePersonalChange('fullName', e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3 py-2 rounded-lg bg-navy-900 border border-slate-700 text-sm text-white focus:border-accent-cyan outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Location (City, India)</label>
                  <input
                    type="text"
                    value={formData.personal.location}
                    onChange={(e) => handlePersonalChange('location', e.target.value)}
                    placeholder="e.g. Pune, Maharashtra, India"
                    className="w-full px-3 py-2 rounded-lg bg-navy-900 border border-slate-700 text-sm text-white focus:border-accent-cyan outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">Professional Title / Subtitle</label>
                <input
                  type="text"
                  value={formData.personal.professionalTitle}
                  onChange={(e) => handlePersonalChange('professionalTitle', e.target.value)}
                  placeholder="Data Analyst | Power BI Developer | SQL | Python | Advanced Excel"
                  className="w-full px-3 py-2 rounded-lg bg-navy-900 border border-slate-700 text-sm text-white focus:border-accent-cyan outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Email Address</label>
                  <input
                    type="email"
                    value={formData.personal.email}
                    onChange={(e) => handlePersonalChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-3 py-2 rounded-lg bg-navy-900 border border-slate-700 text-sm text-white focus:border-accent-cyan outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Phone Number</label>
                  <input
                    type="text"
                    value={formData.personal.phone}
                    onChange={(e) => handlePersonalChange('phone', e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 rounded-lg bg-navy-900 border border-slate-700 text-sm text-white focus:border-accent-cyan outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">LinkedIn URL</label>
                <input
                  type="text"
                  value={formData.personal.linkedin}
                  onChange={(e) => handlePersonalChange('linkedin', e.target.value)}
                  placeholder="https://linkedin.com/in/your-profile"
                  className="w-full px-3 py-2 rounded-lg bg-navy-900 border border-slate-700 text-sm text-white focus:border-accent-cyan outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">GitHub URL</label>
                <input
                  type="text"
                  value={formData.personal.github}
                  onChange={(e) => handlePersonalChange('github', e.target.value)}
                  placeholder="https://github.com/your-username"
                  className="w-full px-3 py-2 rounded-lg bg-navy-900 border border-slate-700 text-sm text-white focus:border-accent-cyan outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Resume PDF Path</label>
                  <input
                    type="text"
                    value={formData.personal.resumeUrl}
                    onChange={(e) => handlePersonalChange('resumeUrl', e.target.value)}
                    placeholder="/resume.pdf"
                    className="w-full px-3 py-2 rounded-lg bg-navy-900 border border-slate-700 text-sm text-white focus:border-accent-cyan outline-none"
                  />
                  <p className="text-[10px] text-slate-500">Put file as public/resume.pdf</p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Profile Image Path</label>
                  <input
                    type="text"
                    value={formData.personal.profileImage}
                    onChange={(e) => handlePersonalChange('profileImage', e.target.value)}
                    placeholder="/images/profile.jpg"
                    className="w-full px-3 py-2 rounded-lg bg-navy-900 border border-slate-700 text-sm text-white focus:border-accent-cyan outline-none"
                  />
                  <p className="text-[10px] text-slate-500">Put photo in public/images/profile.jpg</p>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">Hiring Status Badge</label>
                <input
                  type="text"
                  value={formData.personal.statusBadge}
                  onChange={(e) => handlePersonalChange('statusBadge', e.target.value)}
                  placeholder="Actively Looking for Data Analyst Opportunities | Immediate Joiner"
                  className="w-full px-3 py-2 rounded-lg bg-navy-900 border border-slate-700 text-sm text-white focus:border-accent-cyan outline-none"
                />
              </div>
            </div>
          )}

          {/* TAB 2: HERO & ABOUT */}
          {activeTab === 'hero' && (
            <div className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">Hero Headline</label>
                <input
                  type="text"
                  value={formData.hero.headline}
                  onChange={(e) => handleHeroChange('headline', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-navy-900 border border-slate-700 text-sm text-white focus:border-accent-cyan outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">Hero Subheadline</label>
                <textarea
                  rows="3"
                  value={formData.hero.subheadline}
                  onChange={(e) => handleHeroChange('subheadline', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-navy-900 border border-slate-700 text-sm text-white focus:border-accent-cyan outline-none resize-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">About Me: Introduction (B.Tech Fresher Narrative)</label>
                <textarea
                  rows="3"
                  value={formData.about.introduction}
                  onChange={(e) => handleAboutChange('introduction', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-navy-900 border border-slate-700 text-sm text-white focus:border-accent-cyan outline-none resize-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">About Me: Detailed Bio</label>
                <textarea
                  rows="4"
                  value={formData.about.detailedBio}
                  onChange={(e) => handleAboutChange('detailedBio', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-navy-900 border border-slate-700 text-sm text-white focus:border-accent-cyan outline-none resize-none"
                />
              </div>
            </div>
          )}

          {/* TAB 3: EDUCATION */}
          {activeTab === 'education' && (
            <div className="space-y-5">
              {formData.education.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-navy-900 border border-slate-800 space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Degree</label>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(idx, 'degree', e.target.value)}
                      placeholder="Bachelor of Technology (B.Tech)"
                      className="w-full px-3 py-2 rounded-lg bg-navy-950 border border-slate-700 text-sm text-white focus:border-accent-cyan outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Specialization / Branch</label>
                    <input
                      type="text"
                      value={edu.specialization}
                      onChange={(e) => handleEducationChange(idx, 'specialization', e.target.value)}
                      placeholder="Computer Science & Engineering"
                      className="w-full px-3 py-2 rounded-lg bg-navy-950 border border-slate-700 text-sm text-white focus:border-accent-cyan outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">College / University Name</label>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => handleEducationChange(idx, 'institution', e.target.value)}
                        placeholder="Your College Name"
                        className="w-full px-3 py-2 rounded-lg bg-navy-950 border border-slate-700 text-sm text-white focus:border-accent-cyan outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Graduation Year</label>
                      <input
                        type="text"
                        value={edu.graduationYear}
                        onChange={(e) => handleEducationChange(idx, 'graduationYear', e.target.value)}
                        placeholder="2024"
                        className="w-full px-3 py-2 rounded-lg bg-navy-950 border border-slate-700 text-sm text-white focus:border-accent-cyan outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Education Summary / Description</label>
                    <textarea
                      rows="3"
                      value={edu.description}
                      onChange={(e) => handleEducationChange(idx, 'description', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-navy-950 border border-slate-700 text-sm text-white focus:border-accent-cyan outline-none resize-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: SKILLS */}
          {activeTab === 'skills' && (
            <div className="space-y-6">
              <p className="text-xs text-slate-400">
                Adjust proficiency levels for each skill category. Changes appear instantly on the skills section!
              </p>

              {formData.skills.map((group, gIdx) => (
                <div key={gIdx} className="p-4 rounded-xl bg-navy-900 border border-slate-800 space-y-3">
                  <h4 className="text-sm font-bold text-accent-cyan">
                    {group.category}
                  </h4>
                  <div className="space-y-3">
                    {group.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-center gap-3">
                        <span className="text-xs text-slate-300 w-1/2 truncate">{item.name}</span>
                        <input
                          type="range"
                          min="40"
                          max="100"
                          value={item.level}
                          onChange={(e) => handleSkillLevelChange(gIdx, iIdx, e.target.value)}
                          className="w-1/3 accent-cyan-400"
                        />
                        <span className="text-xs font-mono text-accent-sky font-bold w-12 text-right">
                          {item.level}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 5: PROJECTS */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <p className="text-xs text-slate-400">
                Edit links and descriptions for your 5 featured projects. Point them to your actual GitHub repos and dashboards!
              </p>

              {formData.projects.map((proj, pIdx) => (
                <div key={proj.id || pIdx} className="p-4 rounded-xl bg-navy-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-accent-cyan">Project #{pIdx + 1} ({proj.category})</span>
                    <span className="text-[10px] text-slate-500 font-mono">{proj.id}</span>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Project Title</label>
                    <input
                      type="text"
                      value={proj.title}
                      onChange={(e) => handleProjectChange(pIdx, 'title', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-navy-950 border border-slate-700 text-xs text-white focus:border-accent-cyan outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Live Dashboard URL</label>
                    <input
                      type="text"
                      value={proj.dashboardUrl}
                      onChange={(e) => handleProjectChange(pIdx, 'dashboardUrl', e.target.value)}
                      placeholder="https://app.powerbi.com/..."
                      className="w-full px-3 py-1.5 rounded-lg bg-navy-950 border border-slate-700 text-xs text-white focus:border-accent-cyan outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">GitHub Repository URL</label>
                    <input
                      type="text"
                      value={proj.githubUrl}
                      onChange={(e) => handleProjectChange(pIdx, 'githubUrl', e.target.value)}
                      placeholder="https://github.com/..."
                      className="w-full px-3 py-1.5 rounded-lg bg-navy-950 border border-slate-700 text-xs text-white focus:border-accent-cyan outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Short Summary</label>
                    <textarea
                      rows="2"
                      value={proj.shortDescription}
                      onChange={(e) => handleProjectChange(pIdx, 'shortDescription', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-navy-950 border border-slate-700 text-xs text-white focus:border-accent-cyan outline-none resize-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 bg-navy-900 border-t border-slate-800 space-y-3">
          
          <div className="flex flex-wrap items-center gap-2">
            {/* Download Updated Config */}
            <button
              onClick={handleDownloadFile}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-accent-cyan to-accent-sky hover:opacity-95 transition-all shadow-md shadow-accent-cyan/20"
              title="Download portfolioData.js with all your current edits"
            >
              <Download className="w-4 h-4" />
              <span>Download Updated portfolioData.js</span>
            </button>

            {/* Copy JS Config */}
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              title="Copy code to clipboard"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied!' : 'Copy Config'}</span>
            </button>
          </div>

          <p className="text-[11px] font-mono text-slate-400 text-center">
            🚀 <strong>Ready to deploy?</strong> Simply replace <code className="text-accent-cyan">src/data/portfolioData.js</code> with this downloaded file and run <code className="text-white">npm run build</code>!
          </p>

        </div>

      </div>
    </div>
  );
}
