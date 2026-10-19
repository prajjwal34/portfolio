import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  CheckCircle2, 
  Sparkles, 
  FileCheck,
  FolderOpen,
  X
} from 'lucide-react';

export default function ResumeSection({ data, onOpenEdit }) {
  const { resume, personal } = data;
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-navy-900/60 border-t border-slate-800/80">
      
      {/* Decorative gradient spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-blue/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono font-semibold uppercase">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Resume & Professional Summary
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            {resume.subheadline || "Download my complete resume for a detailed view of my academic background, technical skills, and data project milestones."}
          </p>
        </div>

        {/* Resume Card */}
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Visual Icon & Highlights */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-accent-cyan to-accent-blue p-0.5 shadow-lg shadow-accent-cyan/20">
                  <div className="w-full h-full bg-navy-950 rounded-[14px] flex items-center justify-center">
                    <FileCheck className="w-6 h-6 text-accent-cyan" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {personal.fullName || "Candidate"}'s Data Analyst Resume
                  </h3>
                  <p className="text-xs font-mono text-accent-cyan">
                    Format: PDF • Updated for 2024 / 2025 Hiring
                  </p>
                </div>
              </div>

              {/* Highlights List */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Key Qualifications Highlighted in CV:
                </p>
                <div className="space-y-2.5">
                  {(resume.highlights || []).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href={personal.resumeUrl || resume.filePath}
                  download={resume.downloadFileName || "Data_Analyst_Resume.pdf"}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-accent-cyan via-accent-sky to-accent-blue hover:opacity-95 transition-all shadow-lg shadow-accent-cyan/20 hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>

                <button
                  onClick={() => setShowPreviewModal(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all hover:-translate-y-0.5"
                >
                  <Eye className="w-4 h-4 text-accent-sky" />
                  <span>View Resume</span>
                </button>
              </div>

            </div>

            {/* Right Column: PDF File Location & Instructions Card */}
            <div className="lg:col-span-5 bg-navy-950/80 rounded-2xl p-6 border border-slate-800/90 space-y-4">
              <div className="flex items-center gap-2 text-accent-cyan font-mono text-xs font-bold uppercase">
                <FolderOpen className="w-4 h-4" />
                <span>Resume PDF Setup Guide</span>
              </div>

              <div className="space-y-2 text-xs text-slate-300 leading-relaxed font-mono bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                <p className="text-slate-400 font-sans font-semibold text-xs">
                  How to link your own resume:
                </p>
                <p className="text-accent-sky">1. Name your file: <code className="text-white bg-slate-800 px-1 py-0.5 rounded">resume.pdf</code></p>
                <p className="text-accent-sky">2. Place it in: <code className="text-white bg-slate-800 px-1 py-0.5 rounded">/public/resume.pdf</code></p>
                <p className="text-emerald-400">3. Both buttons will automatically serve your live PDF!</p>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Need to link an external Google Drive or LinkedIn PDF instead? You can simply change the URL in the <strong>Edit Biodata</strong> drawer!
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Resume In-Browser Preview Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl h-[85vh] bg-navy-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-navy-950 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-accent-cyan" />
                <span className="font-bold text-white text-sm">
                  Resume Preview: {resume.filePath || "/resume.pdf"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={personal.resumeUrl || resume.filePath}
                  download={resume.downloadFileName || "Data_Analyst_Resume.pdf"}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-accent-cyan"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
                <button
                  onClick={() => setShowPreviewModal(false)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Iframe Content */}
            <div className="flex-1 bg-slate-950 p-2 overflow-hidden flex flex-col items-center justify-center">
              <iframe
                src={personal.resumeUrl || resume.filePath}
                title="Resume PDF Viewer"
                className="w-full h-full rounded-xl border border-slate-800"
                onError={() => {}}
              />
              <div className="p-3 text-center text-xs text-slate-400 font-mono">
                Note: If preview does not render in your local browser, please verify that <code>public/resume.pdf</code> has been created.
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
