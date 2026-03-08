import { motion } from 'motion/react';
import { Upload, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Flyer {
  id: string;
  name: string;
  url: string;
  uploadedAt: string;
}

export function FlyersGallery() {
  const [flyers, setFlyers] = useState<Flyer[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  // Load flyers from localStorage
  useEffect(() => {
    const savedFlyers = localStorage.getItem('portfolio-flyers');
    if (savedFlyers) {
      try {
        setFlyers(JSON.parse(savedFlyers));
      } catch (error) {
        console.error('Error loading flyers:', error);
      }
    }
  }, []);

  // Save flyers to localStorage
  useEffect(() => {
    localStorage.setItem('portfolio-flyers', JSON.stringify(flyers));
  }, [flyers]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (!files) return;

    setIsUploading(true);
    const reader = new FileReader();

    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      const newFlyer: Flyer = {
        id: Date.now().toString(),
        name: files[0].name,
        url: base64,
        uploadedAt: new Date().toLocaleDateString(),
      };
      setFlyers([newFlyer, ...flyers]);
      setIsUploading(false);
    };

    reader.readAsDataURL(files[0]);
  };

  const removeFlyer = (id: string) => {
    setFlyers(flyers.filter(flyer => flyer.id !== id));
  };

  return (
    <section id="flyers" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold uppercase mb-6">
            Flyers<br />Gallery
          </h2>
          <p className="text-white/50 max-w-sm">Upload and showcase your promotional flyers and designs</p>
        </div>

        {/* Upload Section */}
        <div className="mb-20">
          <label className="block cursor-pointer group">
            <div className="relative border-2 border-dashed border-brand-accent/50 rounded-lg p-12 hover:border-brand-accent transition-colors hover:bg-brand-accent/5">
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileUpload}
                disabled={isUploading}
                className="hidden"
              />
              <div className="flex flex-col items-center justify-center gap-4">
                <motion.div
                  animate={isUploading ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Upload className="w-12 h-12 text-brand-accent group-hover:scale-110 transition-transform" />
                </motion.div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-white mb-2">
                    {isUploading ? 'Uploading...' : 'Drop your flyer here'}
                  </p>
                  <p className="text-sm text-white/50">or click to select a file</p>
                  <p className="text-xs text-white/30 mt-2">Supports PNG, JPG, and PDF</p>
                </div>
              </div>
            </div>
          </label>
        </div>

        {/* Flyers Grid */}
        {flyers.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flyers.map((flyer, index) => (
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
                    src={flyer.url}
                    alt={flyer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Flyer Info */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="text-white font-semibold truncate">{flyer.name}</h3>
                    <p className="text-sm text-white/50">{flyer.uploadedAt}</p>
                  </div>

                  {/* Action Buttons */}
                  <button
                    onClick={() => removeFlyer(flyer.id)}
                    className="w-full flex items-center justify-center gap-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded px-3 py-2 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <X className="w-4 h-4" />
                    Remove
                  </button>
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
            <p className="text-white/50">No flyers uploaded yet. Start by uploading your first flyer above!</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
