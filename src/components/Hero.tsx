import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, ChevronRight } from "lucide-react";
import { useAttention } from "../context/AttentionContext";

const slides = [
  "/src/assets/images/regenerated_image_1778224701934.png",
  "https://i.ibb.co.com/4rp7sdZ/Professional-Ac-repair-services.jpg",
  "https://i.ibb.co.com/FqN0sWmw/Wall-Mounted-Air-Conditioner-Heat-Pump-Cleaning-Services-Residential-in-Greater-Montreal.jpg",
  "https://i.ibb.co.com/XkJdp7DX/image.jpg",
  "https://i.ibb.co.com/kg6XyxtH/10-Signs-You-Need-an-Air-Duct-Cleaning.jpg"
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isPulsing } = useAttention();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[75vh] max-h-[850px] flex items-center overflow-hidden bg-white">
      {/* Background Slideshow Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img 
              src={slides[currentSlide]} 
              className="w-full h-full object-cover object-center" 
              alt="Air Conditioning Professional Service" 
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Organic Glass Overlay - Not a box, but a fading blur */}
      <div 
        className="absolute inset-0 z-10" 
        style={{
          background: 'linear-gradient(to right, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 100%)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          maskImage: 'linear-gradient(to right, black 30%, transparent 90%)',
          WebkitMaskImage: 'linear-gradient(to right, black 30%, transparent 90%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-brand-yellow text-gray-900 px-5 py-2 rounded-full mb-8 shadow-lg"
            >
              <Zap size={16} className="animate-pulse" />
              <span className="font-black text-[10px] uppercase tracking-[0.2em]">Solusi AC Handal Jogja</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6"
            >
              Solusi AC <br />
              <span className="text-primary-blue underline decoration-brand-yellow underline-offset-8">Handal &</span> <br />
              <span className="text-brand-orange italic">Terpercaya</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-900 lg:text-gray-700 font-bold lg:font-medium text-base lg:text-xl leading-relaxed mb-10 max-w-lg"
            >
              Di Anugerah Mandiri, kami berkomitmen memberikan layanan perbaikan dan perawatan AC terbaik untuk menjaga kenyamanan rumah maupun tempat usaha Anda.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <motion.a 
                animate={isPulsing ? {
                  scale: [1, 1.05, 1, 1.05, 1],
                  backgroundColor: ["#1e3a8a", "#f97316", "#1e3a8a", "#f97316", "#1e3a8a"],
                  x: [0, -5, 5, -5, 5, 0]
                } : {}}
                transition={{ 
                  duration: 0.5, 
                  repeat: isPulsing ? Infinity : 0,
                  repeatType: "mirror"
                }}
                href="https://wa.me/6281332356794"
                className="w-full sm:w-auto bg-primary-blue text-white px-10 py-4 rounded-2xl font-black text-sm hover:bg-secondary-blue transition-all shadow-2xl shadow-blue-200 flex items-center justify-center gap-4 uppercase tracking-[0.1em] border-b-4 border-blue-900"
              >
                Hubungi Kami
                <ChevronRight size={20} />
              </motion.a>
              
              <div className="flex items-center gap-4 bg-white/30 backdrop-blur-md p-3 px-6 rounded-2xl border border-white/40 shadow-sm">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-4 h-4 text-brand-yellow fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-none">Terpercaya di Jogja</div>
                  <div className="text-sm font-black text-gray-900 mt-1">100% Bergaransi</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
