import React, { useState } from 'react';
import { initialPortfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DashboardShowcase from './components/DashboardShowcase';
import Education from './components/Education';
import Certifications from './components/Certifications';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import EditDrawer from './components/EditDrawer';
import NotificationToast from './components/NotificationToast';
import { Sliders } from 'lucide-react';

export default function App() {
  const [portfolioData, setPortfolioData] = useState(initialPortfolioData);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (toastData) => {
    setToast(toastData);
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col relative selection:bg-accent-cyan/30 selection:text-accent-sky">
      
      {/* Top Fixed Navbar */}
      <Navbar 
        data={portfolioData} 
        onOpenEdit={() => setIsEditOpen(true)} 
      />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero 
          data={portfolioData} 
          onOpenEdit={() => setIsEditOpen(true)} 
        />
        
        <About 
          data={portfolioData} 
          onOpenEdit={() => setIsEditOpen(true)} 
        />
        
        <Skills 
          data={portfolioData} 
          onOpenEdit={() => setIsEditOpen(true)} 
        />
        
        <Projects 
          data={portfolioData} 
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenEdit={() => setIsEditOpen(true)} 
        />
        
        <DashboardShowcase 
          data={portfolioData} 
          onOpenEdit={() => setIsEditOpen(true)} 
        />
        
        <Education 
          data={portfolioData} 
          onOpenEdit={() => setIsEditOpen(true)} 
        />
        
        <Certifications 
          data={portfolioData} 
          onOpenEdit={() => setIsEditOpen(true)} 
        />
        
        <ResumeSection 
          data={portfolioData} 
          onOpenEdit={() => setIsEditOpen(true)} 
        />
        
        <Contact 
          data={portfolioData} 
          onShowToast={showToast} 
        />
      </main>

      {/* Footer */}
      <Footer data={portfolioData} />

      {/* Project Case Study Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* Live Customizer / Edit Biodata Drawer */}
      <EditDrawer 
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        portfolioData={portfolioData}
        onUpdateData={(newData) => setPortfolioData(newData)}
        onShowToast={showToast}
      />

      {/* Floating Shortcut Button to Open Edit Drawer */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsEditOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-navy-900/90 text-accent-cyan border border-accent-cyan/40 hover:bg-slate-800 shadow-xl shadow-accent-cyan/15 backdrop-blur-md transition-all hover:scale-105 group"
          title="Customize Biodata & Details"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
          </span>
          <Sliders className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          <span className="text-xs font-bold font-mono">Edit Mode</span>
        </button>
      </div>

      {/* Feedback Toast Notification */}
      <NotificationToast 
        toast={toast} 
        onClose={() => setToast(null)} 
      />

    </div>
  );
}
