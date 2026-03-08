import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ALL_FLYERS } from '../constants';
import { useState } from 'react';

type GalleryCategory = 'flyer' | 'motion' | 'website';

export function DesignGallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('flyer');

  const categories: { id: GalleryCategory; label: string; enabled: boolean }[] = [
    { id: 'flyer', label: 'Flyer Design', enabled: true },
    { id: 'motion', label: 'Motion Design', enabled: false },
    { id: 'website', label: 'Website', enabled: false },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold uppercase">Design Gallery</h1>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-4 mb-16 flex-wrap">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => category.enabled && setActiveCategory(category.id)}
              disabled={!category.enabled}
              className={`relative px-6 py-3 font-semibold uppercase text-sm tracking-wider transition-all ${
                activeCategory === category.id
                  ? 'text-brand-accent'
                  : category.enabled
                  ? 'text-white/60 hover:text-white'
                  : 'text-white/30 cursor-not-allowed'
              }`}
            >
              {category.label}
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent"
                  transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                />
              )}
              {!category.enabled && (
                <span className="ml-2 text-xs text-white/30">Coming Soon</span>
              )}
            </motion.button>
          ))}
        </div>

        {/* Flyer Design Section */}
        {activeCategory === 'flyer' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-12">
              <p className="text-white/50 mb-8">
                A collection of promotional flyers and design campaigns
              </p>
            </div>

            {ALL_FLYERS.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ALL_FLYERS.map((flyer, index) => (
                  <motion.div
                    key={flyer.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-brand-accent/50 transition-all duration-300 cursor-pointer"
                  >
                    {/* Flyer Preview */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-black/50">
                      <img
                        src={flyer.imageUrl}
                        alt={flyer.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Flyer Info */}
                    <div className="p-6">
                      <h3 className="text-white font-semibold text-lg">{flyer.name}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-white/50">No flyers added yet</p>
              </div>
            )}
          </motion.div>
        )}

        {/* Motion Design Section */}
        {activeCategory === 'motion' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center py-20"
          >
            <p className="text-white/50 text-lg">Coming soon...</p>
          </motion.div>
        )}

        {/* Website Section */}
        {activeCategory === 'website' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center py-20"
          >
            <p className="text-white/50 text-lg">Coming soon...</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
