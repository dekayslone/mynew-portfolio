import { motion } from 'motion/react';
import { FEATURED_FLYERS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';


export function FlyersGallery() {
  return (
    <section id="flyers" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold uppercase mb-6">
              Flyers<br />Gallery
            </h2>
            <p className="text-white/50 max-w-sm">My collection of promotional flyers and designs</p>
          </div>
          <Link
            to="/design-gallery"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-accent/10 hover:bg-brand-accent/20 border border-brand-accent/30 hover:border-brand-accent/50 rounded-lg text-brand-accent font-semibold transition-all"
          >
            View All
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Flyers Grid */}
        {FEATURED_FLYERS.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_FLYERS.map((flyer, index) => (
              <motion.div
                key={flyer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-brand-accent/50 transition-all duration-300"
              >
                {/* Flyer Preview */}
                <div className="relative aspect-[3/4] overflow-hidden bg-black/50">
                  <img
                    src={flyer.imageUrl}
                    alt={flyer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Flyer Info */}
                <div className="p-4">
                  <h3 className="text-white font-semibold">{flyer.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-white/50">No flyers added yet. Add flyers to the FLYERS constant in src/constants.ts</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
