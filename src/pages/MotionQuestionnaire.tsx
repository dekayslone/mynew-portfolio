import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowLeft, Send, CheckCircle, Video, Target, FileText, Palette, Layers, Monitor, Music, Clock, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MovingGrid } from '../components/MovingGrid';

export function MotionQuestionnaire() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/mykdorzd', {
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
          <h2 className="text-4xl font-bold uppercase mb-4">Project Brief Received!</h2>
          <p className="text-brand-white/50 mb-8 leading-relaxed">
            Thank you for the detailed motion design brief. I'll dive into your requirements and get back to you with a proposal and timeline shortly.
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
            Motion Design <span className="text-stroke">Brief</span>
          </motion.h1>
          <div className="glass p-8 md:p-12 rounded-[2.5rem] border-brand-accent/20">
            <p className="text-brand-white/70 text-lg leading-relaxed">
              Great motion design starts with a clear vision. This questionnaire helps me understand your project goals, target audience, and aesthetic preferences to create a video that truly resonates.
            </p>
          </div>
        </header>

        <form onSubmit={handleSubmit} className="space-y-16">
          {/* Section 1: Contact Information */}
          <section className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-brand-accent/20 rounded-lg flex items-center justify-center">
                <Info className="text-brand-accent" size={20} />
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-wider">1. Contact Information</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-brand-white/40 ml-2">Full Name</label>
                <input required name="full_name" type="text" placeholder="Your Name" className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-brand-white/40 ml-2">Company/Brand Name</label>
                <input required name="company_name" type="text" placeholder="Brand Name" className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-brand-white/40 ml-2">Email Address</label>
                <input required name="email" type="email" placeholder="your@email.com" className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-brand-white/40 ml-2">Phone Number</label>
                <input required name="phone" type="tel" placeholder="Your Phone Number" className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-brand-white/40 ml-2">Website (if any)</label>
                <input name="website" type="url" placeholder="https://..." className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-brand-white/40 ml-2">Social Media Links</label>
                <input name="social_links" type="text" placeholder="Instagram, LinkedIn, etc." className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors" />
              </div>
            </div>
          </section>

          {/* Section 2: Project Overview */}
          <section className="space-y-8 pt-12 border-t border-brand-white/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-brand-accent/20 rounded-lg flex items-center justify-center">
                <Video className="text-brand-accent" size={20} />
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-wider">2. Project Overview</h2>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-brand-white/40 ml-2">Project Title</label>
              <input required name="project_title" type="text" placeholder="What is the title of the project?" className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors" />
            </div>

            <div className="space-y-4">
              <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">What type of video do you need?</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Explainer Video', 'Product Promo', 'Social Media Ad', 'Logo Animation', 'Event Promo', 'YouTube Intro/Outro', 'Educational Video'].map(type => (
                  <label key={type} className="flex items-center gap-3 glass p-4 rounded-xl cursor-pointer hover:bg-brand-white/5 transition-colors">
                    <input type="checkbox" name="video_type" value={type} className="accent-brand-accent" />
                    <span className="text-sm">{type}</span>
                  </label>
                ))}
                <div className="col-span-full">
                  <input name="video_type_other" type="text" placeholder="Other..." className="w-full bg-brand-white/5 border border-brand-white/10 rounded-xl px-4 py-3 focus:border-brand-accent outline-none transition-colors text-sm" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">What is the main goal of this video?</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Increase sales', 'Brand awareness', 'Product launch', 'Education', 'Social media engagement'].map(goal => (
                  <label key={goal} className="flex items-center gap-3 glass p-4 rounded-xl cursor-pointer hover:bg-brand-white/5 transition-colors">
                    <input type="checkbox" name="video_goal" value={goal} className="accent-brand-accent" />
                    <span className="text-sm">{goal}</span>
                  </label>
                ))}
                <div className="col-span-full">
                  <input name="video_goal_other" type="text" placeholder="Other..." className="w-full bg-brand-white/5 border border-brand-white/10 rounded-xl px-4 py-3 focus:border-brand-accent outline-none transition-colors text-sm" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">Where will this video be published?</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Instagram', 'TikTok', 'YouTube', 'Website', 'TV', 'WhatsApp'].map(platform => (
                  <label key={platform} className="flex items-center gap-3 glass p-4 rounded-xl cursor-pointer hover:bg-brand-white/5 transition-colors">
                    <input type="checkbox" name="publish_platform" value={platform} className="accent-brand-accent" />
                    <span className="text-sm">{platform}</span>
                  </label>
                ))}
                <div className="col-span-full">
                  <input name="publish_platform_other" type="text" placeholder="Other..." className="w-full bg-brand-white/5 border border-brand-white/10 rounded-xl px-4 py-3 focus:border-brand-accent outline-none transition-colors text-sm" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Target Audience */}
          <section className="space-y-8 pt-12 border-t border-brand-white/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-brand-accent/20 rounded-lg flex items-center justify-center">
                <Target className="text-brand-accent" size={20} />
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-wider">3. Target Audience</h2>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-brand-white/40 ml-2">Who is your target audience?</label>
              <textarea name="target_audience" rows={3} placeholder="Age range, gender, location, profession, interests..." className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors resize-none" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-brand-white/40 ml-2">What problem does this audience have?</label>
              <textarea name="audience_problem" rows={2} placeholder="Describe the pain point your video addresses" className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors resize-none" />
            </div>

            <div className="space-y-4">
              <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">What action should they take after watching?</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Buy', 'Sign up', 'Follow', 'Contact', 'Learn more'].map(action => (
                  <label key={action} className="flex items-center gap-3 glass p-4 rounded-xl cursor-pointer hover:bg-brand-white/5 transition-colors">
                    <input type="checkbox" name="desired_action" value={action} className="accent-brand-accent" />
                    <span className="text-sm">{action}</span>
                  </label>
                ))}
                <div className="col-span-full">
                  <input name="desired_action_other" type="text" placeholder="Other..." className="w-full bg-brand-white/5 border border-brand-white/10 rounded-xl px-4 py-3 focus:border-brand-accent outline-none transition-colors text-sm" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Script & Messaging */}
          <section className="space-y-8 pt-12 border-t border-brand-white/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-brand-accent/20 rounded-lg flex items-center justify-center">
                <FileText className="text-brand-accent" size={20} />
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-wider">4. Script & Messaging</h2>
            </div>

            <div className="space-y-4">
              <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">Do you already have a script?</label>
              <div className="flex gap-8">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="has_script" value="yes" className="accent-brand-accent" />
                  <span className="text-brand-white">Yes (I will provide it)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="has_script" value="no" className="accent-brand-accent" />
                  <span className="text-brand-white">No (I need scriptwriting)</span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-brand-white/40 ml-2">What key message must be included?</label>
              <textarea name="key_message" rows={2} className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors resize-none" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-brand-white/40 ml-2">Specific words/phrases to use</label>
                <textarea name="must_use_phrases" rows={2} className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors resize-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-brand-white/40 ml-2">Anything that must NOT be mentioned?</label>
                <textarea name="must_not_mention" rows={2} className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors resize-none" />
              </div>
            </div>
          </section>

          {/* Section 5: Branding & Style */}
          <section className="space-y-8 pt-12 border-t border-brand-white/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-brand-accent/20 rounded-lg flex items-center justify-center">
                <Palette className="text-brand-accent" size={20} />
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-wider">5. Branding & Style</h2>
            </div>

            <div className="space-y-4">
              <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">Do you have brand guidelines?</label>
              <div className="flex gap-8">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="has_guidelines" value="yes" className="accent-brand-accent" />
                  <span className="text-brand-white">Yes</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="has_guidelines" value="no" className="accent-brand-accent" />
                  <span className="text-brand-white">No</span>
                </label>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-brand-white/40 ml-2">Brand Colors</label>
                <input name="brand_colors" type="text" placeholder="Hex codes or names" className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-brand-white/40 ml-2">Brand Fonts</label>
                <input name="brand_fonts" type="text" placeholder="Font names" className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors" />
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">What style do you prefer?</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Minimal', 'Corporate', 'Bold & Energetic', 'Luxury', 'Cartoon', '3D', 'Tech/Futuristic'].map(style => (
                  <label key={style} className="flex items-center gap-3 glass p-4 rounded-xl cursor-pointer hover:bg-brand-white/5 transition-colors">
                    <input type="checkbox" name="style_preference" value={style} className="accent-brand-accent" />
                    <span className="text-sm">{style}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-brand-white/40 ml-2">Reference Videos (Links)</label>
              <textarea name="reference_links" rows={2} placeholder="Share 2–3 videos you like..." className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors resize-none" />
            </div>
          </section>

          {/* Section 6: Technical Requirements */}
          <section className="space-y-8 pt-12 border-t border-brand-white/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-brand-accent/20 rounded-lg flex items-center justify-center">
                <Monitor className="text-brand-accent" size={20} />
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-wider">6. Technical Requirements</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-brand-white/40 ml-2">Desired video length</label>
                <input name="video_length" type="text" placeholder="e.g. 30 seconds, 2 minutes" className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors" />
              </div>
            </div>
          </section>

          {/* Section 7: Audio */}
          <section className="space-y-8 pt-12 border-t border-brand-white/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-brand-accent/20 rounded-lg flex items-center justify-center">
                <Music className="text-brand-accent" size={20} />
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-wider">7. Audio</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">Do you need voiceover?</label>
                <div className="grid grid-cols-2 gap-4">
                  {['Male', 'Female', 'AI Voice', 'No voiceover'].map(vo => (
                    <label key={vo} className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="voiceover_need" value={vo} className="accent-brand-accent" />
                      <span className="text-sm text-brand-white">{vo}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-brand-white/40 ml-2">Preferred accent (if any)</label>
                <input name="voiceover_accent" type="text" className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">Do you need background music?</label>
                <div className="flex gap-8">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="need_music" value="yes" className="accent-brand-accent" />
                    <span className="text-brand-white">Yes</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="need_music" value="no" className="accent-brand-accent" />
                    <span className="text-brand-white">No</span>
                  </label>
                </div>
              </div>
              <div className="space-y-4">
                <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">Music Style</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Corporate', 'Afrobeat', 'Cinematic', 'Upbeat', 'Calm'].map(m => (
                    <label key={m} className="flex items-center gap-2 text-xs text-brand-white">
                      <input type="checkbox" name="music_style" value={m} className="accent-brand-accent" />
                      <span>{m}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Timeline & Budget */}
          <section className="space-y-8 pt-12 border-t border-brand-white/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-brand-accent/20 rounded-lg flex items-center justify-center">
                <Clock className="text-brand-accent" size={20} />
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-wider">8. Timeline & Budget</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-brand-white/40 ml-2">Project deadline</label>
                <input required name="deadline" type="text" placeholder="e.g. Oct 20th" className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors" />
              </div>
              <div className="space-y-4">
                <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">Is this timeline flexible?</label>
                <div className="flex gap-8">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="timeline_flexible" value="yes" className="accent-brand-accent" />
                    <span className="text-brand-white">Yes</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="timeline_flexible" value="no" className="accent-brand-accent" />
                    <span className="text-brand-white">No</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block text-sm uppercase tracking-widest font-bold text-brand-white/60">Budget range</label>
                <div className="space-y-2">
                  {['₦50k – ₦150k', '₦150k – ₦300k', '₦300k+'].map(b => (
                    <label key={b} className="flex items-center gap-3 cursor-pointer glass p-3 rounded-xl hover:bg-brand-white/5 transition-colors">
                      <input type="radio" name="budget_range" value={b} className="accent-brand-accent" />
                      <span className="text-sm text-brand-white">{b}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-brand-white/40 ml-2">Revision rounds included</label>
                <input name="revision_rounds" type="text" defaultValue="3 Rounds" className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors" />
              </div>
            </div>
          </section>

          {/* Section 9: Additional Info */}
          <section className="space-y-8 pt-12 border-t border-brand-white/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-brand-accent/20 rounded-lg flex items-center justify-center">
                <Info className="text-brand-accent" size={20} />
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-wider">9. Additional Info</h2>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-brand-white/40 ml-2">Anything else I should know?</label>
              <textarea name="additional_info" rows={3} className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors resize-none" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-brand-white/40 ml-2">Who is the final decision maker?</label>
                <input name="decision_maker" type="text" className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-brand-white/40 ml-2">How did you hear about us?</label>
                <input name="referral_source" type="text" className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors" />
              </div>
            </div>
          </section>

          <div className="pt-12">
            <button 
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-6 bg-brand-accent text-brand-white rounded-2xl font-bold uppercase tracking-[0.3em] hover:bg-brand-accent/80 transition-all flex items-center justify-center gap-4 disabled:opacity-50"
            >
              {status === 'submitting' ? 'Sending Brief...' : (
                <>
                  Submit Motion Brief
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
