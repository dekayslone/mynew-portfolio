import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Project } from '../constants';

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-brand-black overflow-y-auto"
      >
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={onClose}
          className="fixed top-8 right-8 z-[110] w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-brand-accent transition-colors"
        >
          <X size={24} />
        </motion.button>

        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-8">
                <span className="text-brand-accent uppercase tracking-[0.3em] text-xs font-bold block mb-4">
                  {project.category}
                </span>
                <h1 className="text-6xl md:text-8xl font-bold uppercase leading-none mb-8">
                  {project.title}
                </h1>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-12 border-y border-white/10 py-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 glass rounded-full flex items-center justify-center text-brand-accent">
                    <User size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-white/30 block">Client</span>
                    <span className="text-sm font-medium">{project.client}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 glass rounded-full flex items-center justify-center text-brand-accent">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-white/30 block">Year</span>
                    <span className="text-sm font-medium">{project.year}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 glass rounded-full flex items-center justify-center text-brand-accent">
                    <Tag size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-white/30 block">Role</span>
                    <span className="text-sm font-medium">{project.role}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 text-xl text-white/60 font-light leading-relaxed mb-12">
                <p>{project.fullDescription}</p>
              </div>

              <div className="flex flex-wrap gap-3 mb-12">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 glass rounded-full text-xs uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="group flex items-center gap-4 text-xl font-bold uppercase hover:text-brand-accent transition-colors">
                Live Project <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <img src={`https://res.cloudinary.com/dajmxjgzq/image/upload/v1772415887/Bullion-Word-Mapping-_-Moodboarding_013016_gr5u2s.jpg`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <img src={`https://res.cloudinary.com/dajmxjgzq/image/upload/v1772416482/Classic_Business_Cards_Mockup_yytray.jpg`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
