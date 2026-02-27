import { motion } from 'motion/react';
import { LOGOS } from '../constants';

export function LogoCloud() {
  return (
    <section className="py-20 overflow-hidden border-y border-brand-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-white/30 font-bold">Trusted by Global Leaders</span>
      </div>
      
      <div className="flex relative">
        <motion.div 
          animate={{ x: [0, -1920] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-20 items-center pr-20"
        >
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className="flex-shrink-0 w-40 h-20 flex items-center justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <img 
                src={logo.logo} 
                alt={logo.name} 
                className="max-w-full max-h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
