import { motion } from 'motion/react';
import { PROCESS } from '../constants';

export function ProcessTimeline() {
  return (
    <section className="py-32 px-6 bg-brand-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-brand-accent font-bold mb-4 block"
          >
            The Journey
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-bold uppercase">How I <span className="text-stroke">Work</span></h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {PROCESS.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative group"
            >
              <div className="text-8xl font-display font-bold text-white/5 absolute -top-10 -left-4 group-hover:text-brand-accent/10 transition-colors">
                {item.step}
              </div>
              <div className="relative z-10 pt-12">
                <h3 className="text-2xl font-bold uppercase mb-4">{item.title}</h3>
                <p className="text-white/50 font-light leading-relaxed">{item.desc}</p>
              </div>
              {i < PROCESS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
