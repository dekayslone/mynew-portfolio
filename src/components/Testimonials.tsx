import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export function Testimonials() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.3em] text-brand-accent font-bold mb-4 block"
            >
              Testimonials
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-bold uppercase">Client <br /><span className="text-stroke">Voices</span></h2>
          </div>
            <div className="text-right">
            <div className="text-4xl font-display font-bold mb-1">4.9/5</div>
            <div className="text-[10px] uppercase tracking-widest text-brand-white/30">Average Client Rating</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass p-8 rounded-[2rem] flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} className="fill-brand-accent text-brand-accent" />
                  ))}
                </div>
                <p className="text-lg text-brand-white/70 italic font-serif leading-relaxed mb-8">
                  "{t.content}"
                </p>
              </div>
              
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="font-bold uppercase text-sm">{t.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-brand-white/30">{t.role}</p>
                </div>
                <span className="text-brand-accent font-mono text-xs">{t.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
