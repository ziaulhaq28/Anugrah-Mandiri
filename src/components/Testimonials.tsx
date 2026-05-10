import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Budi Santoso",
    role: "Penerang Rumah",
    text: "Layanan sangat profesional. Teknisi datang tepat waktu dan kerjanya sangat rapi. AC saya jadi dingin kembali seperti baru. Sangat direkomendasikan untuk warga Jogja!",
    rating: 5
  },
  {
    name: "Siska Putri",
    role: "Ibu Rumah Tangga",
    text: "Harga sangat bersahabat dan transparan. Tidak ada biaya tambahan yang aneh-aneh. Terima kasih CV Anugrah Mandiri atas layanannya yang luar biasa.",
    rating: 5
  },
  {
    name: "Andi Wijaya",
    role: "Pemilik Toko",
    text: "Respon cepat dan teknisinya sangat ahli. Menangani masalah AC di toko saya dengan sangat efisien. Hasilnya memuaskan dan bergaransi.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-brand-yellow font-black uppercase text-xs tracking-widest mb-4">Ulasan Pelanggan</div>
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight text-center">
             Apa Yang Mereka Katakan <br />
             Tentang Kami?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, idx) => (
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
              className="bg-[#fbfbfb] p-10 rounded-3xl border border-gray-50 flex flex-col items-center text-center relative group hover:bg-primary-blue hover:text-white transition-all duration-500"
            >
              <div className="absolute -top-6 bg-brand-yellow p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                <Quote size={24} className="text-gray-900" />
              </div>
              
              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
              
              <p className="font-medium leading-relaxed mb-8 text-sm italic">
                "{item.text}"
              </p>
              
              <div>
                <div className="font-black text-lg mb-1">{item.name}</div>
                <div className="text-[10px] font-black uppercase tracking-widest opacity-60">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
