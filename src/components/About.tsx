import { motion } from "motion/react";
import { Phone } from "lucide-react";

export default function About() {
  return (
    <section id="tentang" className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images Left */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="pt-12"
              >
                <img 
                  src="/images/regenerated_image_1778224980434.jpg" 
                  alt="Technician 1" 
                  className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <img 
                  src="/images/regenerated_image_1778224703020.jpg" 
                  alt="Technician 2" 
                  className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
                />
              </motion.div>
            </div>
            
            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -bottom-8 -right-8 bg-white p-8 rounded-full shadow-2xl flex items-center justify-center border-4 border-blue-50"
            >
              <div className="text-center">
                <div className="text-primary-blue font-black text-3xl leading-none">10+</div>
                <div className="text-[10px] font-black uppercase text-gray-400 tracking-tighter">Tahun <br /> Pengalaman</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Right */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="text-brand-yellow font-black uppercase text-xs tracking-widest mb-3">Tentang Kami</div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                Teknisi Ahli, <br />
                AC Dingin & Nyaman <br />
                Setiap Saat.
              </h2>
            </div>
            
            <p className="text-gray-500 font-medium leading-relaxed max-w-lg">
              Kami memastikan setiap perbaikan AC dilakukan dengan standar terbaik. 
              Proses yang halus, hasil yang kuat, dan kenyamanan yang kembali pulih 
              adalah komitmen kami untuk Anda.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
            >
              <div className="flex items-center gap-4 bg-yellow-50 p-4 rounded-2xl border border-yellow-100 flex-1 sm:flex-initial">
                <div className="w-12 h-12 bg-brand-yellow rounded-full flex-shrink-0 flex items-center justify-center text-gray-900 shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">24/7 Panggilan</div>
                  <div className="text-lg sm:text-xl font-black text-gray-900">0813-3235-6794</div>
                </div>
              </div>
              <a 
                href="https://wa.me/6281332356794" 
                className="bg-primary-blue text-white px-8 py-5 rounded-xl font-black text-sm hover:bg-secondary-blue transition-all shadow-md shadow-blue-200 text-center flex items-center justify-center"
              >
                Hubungi Sekarang
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
