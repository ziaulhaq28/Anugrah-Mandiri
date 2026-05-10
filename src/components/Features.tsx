import { motion } from "motion/react";
import { HandCoins, Zap, ShieldCheck } from "lucide-react";

const stats = [
  {
    title: "Harga Bersahabat",
    desc: "Layanan AC profesional tanpa menguras anggaran.",
    icon: HandCoins
  },
  {
    title: "Layanan Darurat 24/7",
    desc: "Siap diandalkan kapan pun Anda membutuhkan.",
    icon: Zap
  },
  {
    title: "Ahli Di Semua Bidang",
    desc: "Menangani perbaikan dan perawatan AC untuk rumah, kantor, dan bisnis.",
    icon: ShieldCheck
  }
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-primary-blue text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none grayscale brightness-200">
         <img src="https://www.transparenttextures.com/patterns/cubes.png" alt="pattern" className="w-full h-full object-cover" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-brand-yellow font-black uppercase text-xs tracking-widest mb-4">Mengapa Memilih Kami?</div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Perbaikan Berkualitas <br />
              Untuk Kenyamanan <br />
              Ruangan Anda
            </h2>
            <p className="text-blue-50 font-medium mb-10 max-w-lg leading-relaxed">
              Setiap perbaikan AC dilakukan dengan teliti, menggunakan metode yang 
              akurat dan proses yang rapi agar hasilnya optimal dan kenyamanan Anda tetap terjaga.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl inline-flex items-center gap-6 border border-white/10">
              <div className="text-4xl font-black text-white">4.5/5</div>
              <div className="h-10 w-px bg-white/20" />
              <div>
                <div className="text-sm font-black">Skor Kepercayaan Kami</div>
                <div className="text-[10px] text-blue-100 font-bold uppercase tracking-widest">Lebih Dari 2.000 Pelanggan Mempercayai</div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {stats.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 hover:bg-white/20 transition-all p-8 rounded-2xl border border-white/5 flex items-start gap-6 group"
              >
                <div className="w-12 h-12 bg-brand-yellow rounded-xl flex items-center justify-center text-gray-900 shadow-lg group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-black mb-2">{item.title}</h4>
                  <p className="text-blue-100 font-medium text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
