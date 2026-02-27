import { motion } from 'motion/react';
import { ArrowUpRight, Instagram, Linkedin, Twitter, Mail, Phone, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer id="footer" className="pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-[10rem] font-bold uppercase leading-none mb-12"
          >
            Let's Build <br />
            <span className="text-stroke">Together</span>
          </motion.h2>
          
          <div className="flex flex-col items-center gap-6">
            <motion.a
              href="mailto:kayslone.dara@gmail.com"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 text-2xl md:text-4xl font-display hover:text-brand-accent transition-colors group"
            >
              kayslone.dara@gmail.com
              <ArrowUpRight className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </motion.a>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-8 mt-4"
            >
              <a href="tel:+2347078838227" className="flex items-center gap-2 text-brand-white/60 hover:text-brand-white transition-colors">
                <Phone size={18} /> 0707 883 8227
              </a>
              <a href="https://wa.me/2347078838227" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-brand-white/60 hover:text-brand-white transition-colors">
                <MessageCircle size={18} /> WhatsApp
              </a>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-brand-white/10 gap-8">
          <div className="text-xl font-display font-bold tracking-tighter">
            OKIKI<span className="text-brand-accent">.</span>
          </div>

          <div className="flex gap-8">
            <a href="https://www.instagram.com/dara.kayslone/" target="_blank" rel="noreferrer" className="text-brand-white/40 hover:text-brand-white transition-colors"><Instagram size={20} /></a>
            <a href="https://www.linkedin.com/in/darakayslone/" target="_blank" rel="noreferrer" className="text-brand-white/40 hover:text-brand-white transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:kayslone.dara@gmail.com" className="text-brand-white/40 hover:text-brand-white transition-colors"><Mail size={20} /></a>
          </div>

          <div className="text-[10px] uppercase tracking-[0.2em] text-brand-white/30">
            © 2024 Daramola Okiki Favour. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
