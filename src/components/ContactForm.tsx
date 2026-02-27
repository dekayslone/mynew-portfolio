import { motion } from 'motion/react';
import { useState } from 'react';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    setStatus('sending');
    
    try {
      // Using Formspree
      const response = await fetch('https://formspree.io/f/mqednvlg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again later.');
      setStatus('idle');
    }
  };

  return (
    <section id="contact-form" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.3em] text-brand-accent font-bold mb-8 block"
            >
              Get In Touch
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-bold uppercase mb-8">
              Let's start a <br />
              <span className="text-stroke">Project.</span>
            </h2>
            <p className="text-brand-white/50 text-lg max-w-md font-light leading-relaxed mb-12">
              Have a visionary idea? I'm here to help you bring it to life with strategy and motion. Fill out the form or reach out directly.
            </p>
            
            <div className="space-y-6">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-brand-white/30 mb-1">Email</span>
                <a href="mailto:kayslone.dara@gmail.com" className="text-xl hover:text-brand-accent transition-colors">kayslone.dara@gmail.com</a>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-brand-white/30 mb-1">Phone / WhatsApp</span>
                <a href="tel:+2347078838227" className="text-xl hover:text-brand-accent transition-colors">0707 883 8227</a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[2rem]"
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center mb-6">
                  <Send className="text-white" />
                </div>
                <h3 className="text-2xl font-bold uppercase mb-2">Message Sent!</h3>
                <p className="text-brand-white/50">I'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-sm uppercase tracking-widest text-brand-accent hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-brand-white/40 ml-2">Name</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      placeholder="Your Name"
                      className="bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-brand-white/40 ml-2">Email</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      placeholder="Your Email"
                      className="bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent transition-colors"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-brand-white/40 ml-2">Project Type</label>
                  <select 
                    name="projectType"
                    className="bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent transition-colors appearance-none"
                  >
                    <option className="bg-brand-black">Brand Identity</option>
                    <option className="bg-brand-black">Motion Design</option>
                    <option className="bg-brand-black">Web Development</option>
                    <option className="bg-brand-black">Visual Strategy</option>
                    <option className="bg-brand-black">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-brand-white/40 ml-2">Message</label>
                  <textarea 
                    required
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-5 bg-brand-accent text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-brand-white hover:text-brand-black transition-all disabled:opacity-50"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
