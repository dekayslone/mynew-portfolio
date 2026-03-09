import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MagneticButton } from './MagneticButton';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Portfolio', href: '/design-gallery' },
    { name: 'Contact', href: '#contact-form' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-display font-bold tracking-tighter"
        >
          <Link 
            to="/"
            className="hover:text-brand-accent transition-colors"
          >
            DOF<span className="text-brand-accent">.</span>
          </Link>
        </motion.div>

          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link, i) => (
              link.href.startsWith('/') ? (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="text-sm uppercase tracking-widest font-medium hover:text-brand-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ) : (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-sm uppercase tracking-widest font-medium hover:text-brand-accent transition-colors"
                >
                  {link.name}
                </motion.a>
              )
            ))}
            <MagneticButton href="#contact-form">
              <motion.button
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('contact-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-6 py-2 border border-brand-white/20 rounded-full text-xs uppercase tracking-widest hover:bg-brand-white hover:text-brand-black transition-all"
              >
                Let's Talk
              </motion.button>
            </MagneticButton>
          </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-black z-[60] flex flex-col p-12 md:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <Link 
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-xl font-display font-bold tracking-tighter hover:text-brand-accent transition-colors"
              >
                OKIKI<span className="text-brand-accent">.</span>
              </Link>
              <button onClick={() => setIsOpen(false)} className="text-brand-white">
                <X size={32} />
              </button>
            </div>
            
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                link.href.startsWith('/') ? (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl font-display font-bold uppercase tracking-tighter hover:text-brand-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-4xl font-display font-bold uppercase tracking-tighter hover:text-brand-accent transition-colors"
                  >
                    {link.name}
                  </motion.a>
                )
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-brand-white/10">
              <p className="text-[10px] uppercase tracking-widest text-brand-white/30 mb-4">Let's Connect</p>
              <a href="mailto:kayslone.dara@gmail.com" className="text-lg block mb-2">kayslone.dara@gmail.com</a>
              <a href="tel:+2347078838227" className="text-lg block">0707 883 8227</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
