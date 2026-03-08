import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ProjectGrid } from '../components/ProjectGrid';
import { FlyersGallery } from '../components/FlyersGallery';
import { About } from '../components/About';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
import { LogoCloud } from '../components/LogoCloud';
import { Testimonials } from '../components/Testimonials';
import { Pricing } from '../components/Pricing';
import { ProjectDetail } from '../components/ProjectDetail';
import { BentoServices } from '../components/BentoServices';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { FAQ } from '../components/FAQ';
import { MovingGrid } from '../components/MovingGrid';
import { MoodSwitcher } from '../components/MoodSwitcher';
import { Project } from '../constants';
import { useEffect, useState } from 'react';

export function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Prevent scroll when project detail is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <div className="relative min-h-screen selection:bg-brand-accent selection:text-white overflow-x-hidden">
      <MovingGrid />
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-accent pointer-events-none z-[9999] hidden md:block"
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: 'spring', damping: 30, stiffness: 250, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-accent rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{ x: mousePos.x - 3, y: mousePos.y - 3 }}
        transition={{ type: 'spring', damping: 40, stiffness: 400, mass: 0.2 }}
      />

      <Navbar />
      <MoodSwitcher />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            
            <LogoCloud />

            <BentoServices />

            <ProjectGrid onProjectSelect={setSelectedProject} />
            
            <FlyersGallery />
            
            <ProcessTimeline />

            <About />

            <Pricing />

            <Testimonials />

            <FAQ />
            
            <ContactForm />

            {/* Marquee Section */}
            <div className="py-20 overflow-hidden border-y border-white/5 bg-brand-accent/5">
              <motion.div 
                animate={{ x: [0, -1000] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex whitespace-nowrap gap-20 items-center"
              >
                {[...Array(10)].map((_, i) => (
                  <span key={i} className="text-6xl md:text-8xl font-bold uppercase opacity-20 italic font-display">
                    Visionary Design • Strategic Motion • Brand Identity •
                  </span>
                ))}
              </motion.div>
            </div>

            <Footer />
          </motion.div>
        </AnimatePresence>
      </main>

      <ProjectDetail 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
