import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import { useRef } from 'react';
import { MagneticButton } from './MagneticButton';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-accent/20 blur-[120px] rounded-full animate-pulse" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-1/4 -left-20 w-96 h-96 bg-brand-accent/10 blur-[120px] rounded-full" 
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ opacity }}
          className="mb-8"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-brand-accent font-semibold">
            Brand, Motion Designer & Web Developer
          </span>
        </motion.div>

        <motion.h1 
          style={{ opacity }}
          className="text-[clamp(2.5rem,12vw,10rem)] leading-[0.85] font-bold uppercase mb-12"
        >
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block"
          >
            Crafting
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block text-stroke"
          >
            Unforgettable
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="block"
          >
            Identities<span className="text-brand-accent">.</span>
          </motion.span>
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-end">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{ opacity }}
            className="text-lg md:text-xl text-brand-white/60 max-w-md font-light leading-relaxed"
          >
            Daramola Okiki Favour blends strategy, storytelling, and motion to build high-level visual experiences for visionary brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-end"
          >
            <MagneticButton href="#work">
              <div className="group relative w-32 h-32 rounded-full border border-brand-white/20 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all duration-500">
                <div className="absolute inset-0 rounded-full border border-brand-white/5 animate-ping opacity-20 group-hover:hidden" />
                <ArrowDownRight className="w-8 h-8 group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-white/40 rotate-90 origin-left translate-x-1">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-accent to-transparent" />
      </motion.div>
    </section>
  );
}
