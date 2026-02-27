import { motion } from 'motion/react';
import { ArrowUpRight, Zap, Shield, Sparkles, Globe } from 'lucide-react';

export function BentoServices() {
  return (
    <section id="services" className="py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 h-full md:h-[600px]">
          {/* Main Service */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 glass p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] flex flex-col justify-between group hover:border-brand-accent transition-all"
          >
            <div>
              <div className="w-16 h-16 bg-brand-accent rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
                <Sparkles className="text-white" size={32} />
              </div>
              <h3 className="text-4xl font-bold uppercase mb-6">Visual <br />Identity</h3>
              <p className="text-white/50 text-lg font-light leading-relaxed">
                Crafting iconic brands that resonate. From logo suites to comprehensive design systems that scale across all platforms.
              </p>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-brand-accent font-mono text-xs">01</span>
              <ArrowUpRight className="text-white/20 group-hover:text-brand-accent transition-colors" />
            </div>
          </motion.div>

          {/* Secondary Service 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 glass p-10 rounded-[3rem] flex flex-col justify-between group hover:border-brand-accent transition-all"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold uppercase mb-2">Motion Design</h3>
                <p className="text-white/50 text-sm font-light">Dynamic storytelling through 2D/3D animation.</p>
              </div>
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
                <Zap className="text-brand-accent" size={24} />
              </div>
            </div>
            <div className="flex justify-between items-end mt-8">
              <span className="text-brand-accent font-mono text-xs">02</span>
              <ArrowUpRight className="text-white/20 group-hover:text-brand-accent transition-colors" />
            </div>
          </motion.div>

          {/* Secondary Service 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass p-10 rounded-[3rem] flex flex-col justify-between group hover:border-brand-accent transition-all"
          >
            <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 transition-colors">
              <Shield className="text-brand-accent" size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase mb-2">Strategy</h3>
              <p className="text-white/50 text-xs font-light">Market positioning and brand architecture.</p>
            </div>
            <div className="flex justify-between items-end mt-6">
              <span className="text-brand-accent font-mono text-xs">03</span>
            </div>
          </motion.div>

          {/* Secondary Service 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="glass p-10 rounded-[3rem] flex flex-col justify-between group hover:border-brand-accent transition-all"
          >
            <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 transition-colors">
              <Globe className="text-brand-accent" size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase mb-2">Web Development</h3>
              <p className="text-white/50 text-xs font-light mb-2">Custom high-performance websites starting from ₦100K.</p>
              <span className="text-brand-accent text-[10px] font-bold uppercase tracking-widest">Starting from ₦100K</span>
            </div>
            <div className="flex justify-between items-end mt-6">
              <span className="text-brand-accent font-mono text-xs">04</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
