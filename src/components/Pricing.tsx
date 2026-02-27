import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { PRICING } from '../constants';

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 bg-brand-white text-brand-black rounded-[3rem] md:rounded-[5rem] mx-2 md:mx-6 my-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-brand-accent font-bold mb-4 block"
          >
            Investment
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-bold uppercase">Service <span className="italic font-serif lowercase text-brand-accent">Rates</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRICING.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-black/5 p-10 rounded-[2.5rem] shadow-xl border border-brand-black/5 flex flex-col h-full"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold uppercase mb-2">{plan.title}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm opacity-50 uppercase tracking-widest">Starting from</span>
                  <span className="text-4xl font-display font-bold text-brand-accent">₦{plan.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-center gap-3 text-sm opacity-70">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center text-white bg-brand-accent">
                      <Check size={12} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact-form"
                className="w-full py-4 rounded-2xl text-center font-bold uppercase tracking-widest transition-all bg-brand-black text-brand-white hover:bg-brand-accent hover:text-white"
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
