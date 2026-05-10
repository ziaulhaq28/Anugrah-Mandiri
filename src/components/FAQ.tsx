import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Berapa lama garansi service yang diberikan?",
    a: "Kami memberikan garansi service selama 30 hari untuk pengerjaan cuci AC dan perbaikan ringan, serta garansi part sesuai ketentuan pabrik."
  },
  {
    q: "Apakah teknisi bisa datang di hari yang sama?",
    a: "Tergantung pada ketersediaan jadwal, namun kami selalu berusaha memberikan respon dan kunjungan di hari yang sama untuk area Yogyakarta."
  },
  {
    q: "Apakah ada biaya transport tambahan?",
    a: "Untuk area dalam Ringroad Yogyakarta, biaya transport sudah termasuk dalam harga layanan. Di luar area tersebut akan dikenakan biaya transport yang disesuaikan."
  },
  {
    q: "Bagaimana cara melakukan pembayaran?",
    a: "Pembayaran dapat dilakukan secara tunai kepada teknisi setelah pekerjaan selesai atau melalui transfer bank ke rekening resmi kami."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#fbfbfb]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-orange font-black uppercase text-xs tracking-widest mb-4">Pusat Bantuan</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight text-center">Pertanyaan Umum</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm shadow-blue-50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-8 flex items-center justify-between text-left hover:bg-blue-50/30 transition-colors"
              >
                <span className="text-lg font-black text-gray-900 pr-8">{faq.q}</span>
                <div className={`p-2 rounded-full transition-colors ${openIndex === idx ? "bg-primary-blue text-white" : "bg-gray-100 text-gray-500"}`}>
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-gray-500 font-medium leading-relaxed border-t border-gray-50 pt-6">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
