import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { PROJECTS, Project } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { useState, useRef } from 'react';

interface ProjectGridProps {
  onProjectSelect: (project: Project) => void;
}

export function ProjectGrid({ onProjectSelect }: ProjectGridProps) {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold uppercase mb-6">Selected<br />Works</h2>
            <p className="text-white/50 max-w-sm">A collection of projects where strategy meets high-end visual execution.</p>
          </div>
          <div className="text-sm uppercase tracking-widest text-white/30 font-mono">
            [ 04 Projects ]
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
          {PROJECTS.map((project, i) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={i} 
              onClick={() => onProjectSelect(project)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    x.set(mouseXPos / width - 0.5);
    y.set(mouseYPos / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index % 2 * 0.2 }}
      className="group cursor-none perspective-1000"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        style={{ rotateX, rotateY }}
        className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-8 transition-transform duration-200 ease-out"
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Custom Cursor Badge */}
        <motion.div 
          className="fixed top-0 left-0 w-24 h-24 bg-brand-accent rounded-full flex flex-col items-center justify-center text-white pointer-events-none z-50 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ 
            x: useSpring(useMotionValue(0), { stiffness: 250, damping: 25 }), 
            y: useSpring(useMotionValue(0), { stiffness: 250, damping: 25 }) 
          }}
          onUpdate={(latest) => {
            // This is a bit tricky since it's fixed. 
            // Better to use a local state for the badge position relative to the viewport
          }}
        >
          {/* Simpler approach: use the existing ArrowUpRight but make it follow mouse more dynamically */}
        </motion.div>

        <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <motion.div 
            className="w-20 h-20 rounded-full bg-brand-accent flex flex-col items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-2xl"
          >
            <ArrowUpRight className="text-white mb-1" size={24} />
            <span className="text-[8px] font-bold uppercase tracking-widest">View</span>
          </motion.div>
        </div>

        <div className="absolute top-6 left-6 flex gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 glass rounded-full text-[10px] uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
      
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-bold uppercase mb-2">{project.title}</h3>
          <p className="text-white/50 text-sm uppercase tracking-widest">{project.category}</p>
        </div>
        <span className="font-mono text-white/20">{project.year}</span>
      </div>
    </motion.div>
  );
}
