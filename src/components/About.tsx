import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-brand-white text-brand-black rounded-[3rem] md:rounded-[5rem] mx-2 md:mx-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://res.cloudinary.com/dajmxjgzq/image/upload/v1773415221/Profile_Picture_ypxmj6.png" 
                alt="Daramola Okiki Favour" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-accent rounded-full flex items-center justify-center text-white font-display font-bold text-center p-4 rotate-12 shadow-xl">
              Visionary Designer
            </div>
          </div>

          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.3em] text-brand-accent font-bold mb-8 block"
            >
              The Strategy
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold uppercase mb-8 leading-tight">
              Blending Strategy with Visual Storytelling.
            </h2>
            <div className="space-y-6 text-lg text-brand-black/70 font-light leading-relaxed">
              <p>
                I am Daramola Okiki Favour, a Brand Designer, Motion Designer, and Web Developer dedicated to crafting identities that don't just look good—they perform. 
              </p>
              <p>
                With a focus on high-level creative direction, I help founders and premium brands bridge the gap between their vision and their audience through strategic design and immersive motion.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h4 className="font-bold text-2xl mb-2">05+</h4>
                <p className="text-sm uppercase tracking-widest opacity-50">Years Experience</p>
              </div>
              <div>
                <h4 className="font-bold text-2xl mb-2">50+</h4>
                <p className="text-sm uppercase tracking-widest opacity-50">Global Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
