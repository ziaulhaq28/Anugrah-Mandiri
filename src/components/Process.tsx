import { motion } from "motion/react";
import { MessageCircle, MousePointer2, Settings, FileText, ChevronRight } from "lucide-react";

const steps = [
  {
    title: "Konsultasi",
    desc: "Dapatkan solusi AC dari teknisi berpengalaman.",
    icon: MessageCircle
  },
  {
    title: "Pilih Layanan",
    desc: "Tentukan layanan yang tepat untuk AC Anda.",
    icon: MousePointer2
  },
  {
    title: "Layanan Dilaksanakan",
    desc: "Perbaikan & perawatan AC cepat dan profesional.",
    icon: Settings
  },
  {
    title: "Laporan Lengkap",
    desc: "Terima laporan hasil perbaikan dan tips perawatan AC.",
    icon: FileText
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-[#fbfbfb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-brand-orange font-black uppercase text-xs tracking-widest mb-4">Proses Layanan</div>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Kesejukan Rumah, <br />
            Kenyamanan Keluarga
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6,
                delay: idx * 0.1,
                ease: "easeOut"
              }}
              className="relative flex flex-col items-center group"
            >
              {/* Arrow */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 -right-2 translate-x-1/2 z-10 text-brand-orange">
                  <ChevronRight size={24} className="animate-pulse" />
                </div>
              )}
              
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all w-full text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:bg-primary-blue transition-colors">
                  <item.icon className="text-primary-blue group-hover:text-white transition-colors" size={32} />
                </div>
                <h4 className="text-xl font-black text-gray-900 mb-4">{item.title}</h4>
                <p className="text-gray-500 font-medium text-xs leading-relaxed px-4">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
