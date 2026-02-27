import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Palette, X, Check } from 'lucide-react';

type Mood = 'default' | 'luxury' | 'brutalist' | 'neon';

const MOODS: { id: Mood; name: string; color: string; desc: string }[] = [
  { id: 'default', name: 'Original', color: '#F27D26', desc: 'Modern & Bold' },
  { id: 'luxury', name: 'Luxury', color: '#D4AF37', desc: 'Elegant & Timeless' },
  { id: 'brutalist', name: 'Brutalist', color: '#FF3E00', desc: 'Raw & Impactful' },
  { id: 'neon', name: 'Neon', color: '#00F0FF', desc: 'Cyber & Future' },
];

export function MoodSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMood, setCurrentMood] = useState<Mood>('default');

  useEffect(() => {
    const savedMood = localStorage.getItem('portfolio-mood') as Mood;
    if (savedMood) {
      setCurrentMood(savedMood);
      document.documentElement.setAttribute('data-mood', savedMood);
    }
  }, []);

  const handleMoodChange = (mood: Mood) => {
    setCurrentMood(mood);
    document.documentElement.setAttribute('data-mood', mood);
    localStorage.setItem('portfolio-mood', mood);
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:left-8 z-[100] flex flex-col-reverse md:flex-col items-end md:items-start gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
            className="glass p-3 md:p-4 rounded-[2rem] md:rounded-[2.5rem] flex flex-col gap-2 min-w-[200px] shadow-2xl"
          >
            <div className="px-3 py-1 mb-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-white/40 font-bold">Select Brand Mood</span>
            </div>
            
            {MOODS.map((mood) => (
              <button
                key={mood.id}
                onClick={() => handleMoodChange(mood.id)}
                className={`group flex items-center justify-between gap-4 px-4 py-3 rounded-2xl transition-all duration-300 ${
                  currentMood === mood.id 
                    ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/20' 
                    : 'hover:bg-brand-white/5 text-brand-white/70 hover:text-brand-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-2.5 h-2.5 rounded-full ring-2 ring-offset-2 ring-offset-transparent transition-all group-hover:scale-125" 
                    style={{ 
                      backgroundColor: mood.color,
                      borderColor: currentMood === mood.id ? 'white' : 'transparent'
                    }}
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-xs font-bold uppercase tracking-wider">{mood.name}</span>
                    <span className={`text-[8px] uppercase tracking-widest opacity-50 ${currentMood === mood.id ? 'text-white' : ''}`}>
                      {mood.desc}
                    </span>
                  </div>
                </div>
                {currentMood === mood.id && (
                  <motion.div layoutId="check" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <Check size={14} strokeWidth={3} />
                  </motion.div>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 md:w-16 md:h-16 bg-brand-accent text-white rounded-full shadow-2xl flex items-center justify-center group overflow-hidden"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: 'spring', damping: 20 }}
        >
          {isOpen ? <X size={28} /> : <Palette size={28} />}
        </motion.div>
        
        {/* Pulse effect when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-20" />
        )}
      </motion.button>
    </div>
  );
}
