import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowLeft, Send, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MovingGrid } from '../components/MovingGrid';

export function BrandQuestionnaire() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/xdalbrrz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass p-12 rounded-[3rem] max-w-xl w-full text-center"
        >
          <div className="w-20 h-20 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="text-brand-accent" size={40} />
          </div>
          <h2 className="text-4xl font-bold uppercase mb-4">Response Received!</h2>
          <p className="text-brand-white/50 mb-8 leading-relaxed">
            Thank you for completing the Brand Discovery Questionnaire. I will review your responses in detail and get back to you shortly to discuss the next steps.
          </p>
          <Link to="/" className="inline-block px-8 py-4 bg-brand-accent text-brand-white rounded-full font-bold uppercase tracking-widest hover:bg-brand-accent/80 transition-colors">
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-black py-20 px-6 relative">
      <MovingGrid />
      <div className="max-w-4xl mx-auto relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-white/40 hover:text-brand-accent transition-colors mb-12 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="uppercase tracking-widest text-xs font-bold">Back to Portfolio</span>
        </Link>

        <header className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold uppercase mb-8"
          >
            Brand Discovery <span className="text-stroke">Questionnaire</span>
          </motion.h1>
          <div className="glass p-8 md:p-12 rounded-[2.5rem] border-brand-accent/20">
            <p className="text-brand-white/70 text-lg leading-relaxed mb-6">
              A logo is a cornerstone of your brand’s identity. It serves as the visual representation of your brand, making it essential to create something that is not only simple, relevant, and memorable, but also deeply connected to your brand’s values and message. The primary function of a logo is to represent your brand effectively, leaving a lasting impression while being versatile and functional across all platforms and mediums.
            </p>
            <p className="text-brand-accent font-medium italic">
              This series of questions will help us gain a deeper understanding of your brand’s essence and how to translate it into a powerful logo design.
            </p>
          </div>
        </header>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Section 1: Basic Info */}
          <section className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">1. Email Address</label>
                <input 
                  required
                  type="email" 
                  name="email"
                  placeholder="your@email.com"
                  className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors"
                />
              </div>
              <div className="space-y-4">
                <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">2. Full Brand Name</label>
                <input 
                  required
                  type="text" 
                  name="brand_name"
                  placeholder="What name should appear with your logo?"
                  className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">3. Core Focus & Services</label>
              <textarea 
                required
                name="services_focus"
                rows={3}
                placeholder="What services does your brand offer, or what is the core focus of your brand?"
                className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors resize-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">4. Brand's Core Purpose</label>
                <input 
                  required
                  type="text" 
                  name="core_purpose"
                  placeholder="Why does your brand exist?"
                  className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors"
                />
              </div>
              <div className="space-y-4">
                <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">5. Core Values</label>
                <input 
                  required
                  type="text" 
                  name="core_values"
                  placeholder="What values guide your brand?"
                  className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">6. Tagline or Motto</label>
                <input 
                  type="text" 
                  name="tagline"
                  placeholder="Your brand's slogan (if any)"
                  className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors"
                />
              </div>
              <div className="space-y-4">
                <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">7. Social Media / Website</label>
                <input 
                  type="text" 
                  name="social_links"
                  placeholder="Links to your current presence"
                  className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Vision & Audience */}
          <section className="space-y-8 pt-12 border-t border-brand-white/5">
            <div className="space-y-4">
              <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">8. Goals, Vision & Mission</label>
              <textarea 
                required
                name="vision_mission"
                rows={4}
                placeholder="What are your brand's long-term goals and mission?"
                className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors resize-none"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">9. Five Key Words</label>
              <input 
                required
                type="text" 
                name="key_words"
                placeholder="Identify five words that represent your brand's essence"
                className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">10. Ideal Client (Target Audience)</label>
              <textarea 
                required
                name="target_audience"
                rows={3}
                placeholder="Who is your ideal client and how would you define them?"
                className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors resize-none"
              />
            </div>
          </section>

          {/* Section 3: Context & History */}
          <section className="space-y-8 pt-12 border-t border-brand-white/5">
            <div className="space-y-4">
              <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">11. Primary Reason for Logo</label>
              <textarea 
                required
                name="logo_reason"
                rows={2}
                placeholder="Why do you want to create a logo for your brand now?"
                className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors resize-none"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">12. Main Competitors</label>
              <textarea 
                required
                name="competitors"
                rows={2}
                placeholder="Who are your main competitors or similar brands?"
                className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors resize-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">13. Date Founded</label>
                <input 
                  type="text" 
                  name="founded_date"
                  placeholder="When was your brand founded?"
                  className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors"
                />
              </div>
              <div className="space-y-4">
                <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">14. Registration Status</label>
                <input 
                  type="text" 
                  name="registration_status"
                  placeholder="Is your company officially registered?"
                  className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors"
                />
              </div>
            </div>
          </section>

          {/* Section 4: Personality & Aesthetics */}
          <section className="space-y-8 pt-12 border-t border-brand-white/5">
            <div className="glass p-8 rounded-3xl mb-8">
              <h3 className="text-xl font-bold uppercase mb-4">15. Brand Personality</h3>
              <p className="text-brand-white/50 text-sm leading-relaxed mb-6">
                Define your brand's character. Consider these spectrums: Simple vs Intricate, Fun vs Serious, Conservative vs Extravagant, Approachable vs Authoritative, Professional vs Casual, Modern vs Classic, Sporty vs Elegant, Extreme vs Safe.
              </p>
              <textarea 
                required
                name="brand_personality"
                rows={4}
                placeholder="What qualities should your brand embody? What emotions should clients feel?"
                className="w-full bg-brand-white/10 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors resize-none"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">16. Brand Vision (In Detail)</label>
              <textarea 
                required
                name="brand_vision_detail"
                rows={5}
                placeholder="How do you envision your brand in detail?"
                className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors resize-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">17. Font Preferences</label>
                <input 
                  type="text" 
                  name="font_preferences"
                  placeholder="Any specific fonts or styles you like?"
                  className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors"
                />
              </div>
              <div className="space-y-4">
                <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">18. Colour Preferences</label>
                <input 
                  type="text" 
                  name="colour_preferences"
                  placeholder="Any specific colors you want to use?"
                  className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors"
                />
              </div>
            </div>
          </section>

          <div className="pt-12">
            <button 
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-6 bg-brand-accent text-brand-white rounded-2xl font-bold uppercase tracking-[0.3em] hover:bg-brand-accent/80 transition-all flex items-center justify-center gap-4 disabled:opacity-50"
            >
              {status === 'submitting' ? 'Sending...' : (
                <>
                  Submit Questionnaire
                  <Send size={20} />
                </>
              )}
            </button>
            {status === 'error' && (
              <p className="text-red-500 text-center mt-4 font-bold">Something went wrong. Please try again.</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
