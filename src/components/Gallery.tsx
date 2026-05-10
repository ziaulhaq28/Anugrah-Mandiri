import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";

const images = [
  "/images/regenerated_image_1778340578378.jpg",
  "/images/regenerated_image_1778340580225.jpg",
  "/images/regenerated_image_1778340581539.jpg",
  "/images/regenerated_image_1778340582773.jpg",
  "/images/regenerated_image_1778340583990.jpg",
  "/images/regenerated_image_1778340585205.jpg"
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  const toggleZoom = () => {
    setZoom((prev) => (prev === 1 ? 1.5 : 1));
  };

  return (
    <section id="gallery" className="py-16 md:py-20 bg-[#fbfbfb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-orange font-black uppercase text-xs tracking-widest mb-4 text-center">Portfolio Produk</h2>
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 text-center">Gallery Project</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5,
                delay: idx * 0.1,
                ease: "easeOut"
              }}
              className="group relative overflow-hidden rounded-3xl aspect-square shadow-md border border-white cursor-pointer"
              onClick={() => {
                setSelectedImg(img);
                setZoom(1);
              }}
            >
              <img 
                src={img} 
                alt={`Project ${idx + 1}`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary-blue/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <Maximize2 className="text-white" size={32} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-gray-950/95 p-4 lg:p-12 cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-brand-yellow transition-colors z-30">
              <X size={40} />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 z-30">
              <button 
                onClick={(e) => { e.stopPropagation(); toggleZoom(); }}
                className="text-white hover:text-brand-yellow transition-all"
              >
                {zoom === 1 ? <ZoomIn size={24} /> : <ZoomOut size={24} />}
              </button>
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[80vh] w-full h-full flex items-center justify-center overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={selectedImg}
                animate={{ scale: zoom }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="max-w-full max-h-full object-contain cursor-grab active:cursor-grabbing"
                alt="Selected Project"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
