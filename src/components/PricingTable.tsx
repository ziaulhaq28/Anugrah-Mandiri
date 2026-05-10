import { motion } from "motion/react";

const priceData = [
  { service: "Cuci AC 0.5 - 1 PK", price: "Rp65.000,-" },
  { service: "Cuci AC 1.5 - 2 PK", price: "Rp85.000,-" },
  { service: "Cuci AC Inverter 0.5 - 2 PK", price: "Rp125.000,-" },
  { service: "Tambah Freon AC 0.5 - 1 PK", price: "Rp225.000,-" },
  { service: "Tambah Freon AC 1.5 - 2 PK", price: "Rp275.000,-" },
  { service: "Isi Freon AC 0.5 - 1 PK", price: "Rp375.000,-" },
  { service: "Isi Freon AC 1.5 - 2 PK", price: "Rp475.000,-" },
  { service: "Vakum AC 0.5 - 1 PK", price: "Rp250.000,-" },
  { service: "Vakum AC 1.5 - 2 PK", price: "Rp300.000,-" },
  { service: "Flushing Vakum AC 0.5 - 1 PK", price: "Rp475.000,-" },
  { service: "Flushing Vakum AC 1.5 - 2 PK", price: "Rp575.000,-" },
  { service: "Tambah Oli AC 0.5 - 2 PK", price: "Rp275.000,- sampai Rp350.000,-" },
  { service: "Pasang AC 0.5 - 1 PK", price: "Rp350.000,-" },
  { service: "Pasang AC 1.5 - 2 PK", price: "Rp450.000,-" },
  { service: "Bongkar Pasang AC 0.5 - 1 PK", price: "Rp450.000,-" },
  { service: "Bongkar Pasang AC 1.5 - 2 PK", price: "Rp550.000,-" },
  { service: "Kapasitor 0.5 - 2 PK", price: "Rp275.000,- sampai Rp475.000,-" },
  { service: "Flushing Evaporator", price: "Rp375.000,-" },
  { service: "Pengelasan", price: "Rp175.000,- per titik" },
  { service: "Pengecekan AC", price: "Rp50.000,-" },
  { service: "Bobok Tembok", price: "Rp50.000,-" },
  { service: "Cuci Besar AC / Overhaul 0.5 - 1 PK", price: "Rp475.000,-" },
  { service: "Cuci Besar AC / Overhaul 1.5 - 2 PK", price: "Rp575.000,-" },
  { service: "Flushing R11 0.5 - 2 PK", price: "Rp475.000,- sampai Rp875.000,-" },
  { service: "Cairan Ultra Extreme 0.5 - 2 PK", price: "Rp275.000,-" },
  { service: "Bongkar AC 0.5 - 2 PK", price: "Rp175.000,-" },
];

export default function PricingTable() {
  return (
    <section id="harga" className="py-16 md:py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 bg-white px-4 py-2 rounded-full border border-blue-100 shadow-sm">
             <span className="text-primary-blue font-black tracking-tighter text-sm">ANUGRAH</span>
             <span className="text-brand-orange font-black tracking-tighter text-sm">MANDIRI</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            Daftar Harga Service AC
          </h3>
          <p className="text-gray-600 font-bold text-sm uppercase tracking-widest">Wilayah Yogyakarta & Sekitarnya</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-3xl shadow-2xl border-4 border-blue-900"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-950 text-white">
                <th className="p-5 font-black text-xs uppercase tracking-[0.2em]">No</th>
                <th className="p-5 font-black text-xs uppercase tracking-[0.2em]">Jenis Layanan</th>
                <th className="p-5 font-black text-xs uppercase tracking-[0.2em]">Estimasi Harga</th>
              </tr>
            </thead>
            <tbody className="text-[13px] font-bold text-gray-800">
              {priceData.map((item, idx) => (
                <tr 
                  key={idx} 
                  className={`${idx % 2 === 0 ? "bg-white" : "bg-blue-50"} border-b border-gray-100 hover:bg-brand-yellow/10 transition-colors`}
                >
                  <td className="p-4 text-center border-r border-gray-100 font-black text-primary-blue">{idx + 1}</td>
                  <td className="p-4 border-r border-gray-100 uppercase tracking-tight">{item.service}</td>
                  <td className="p-4 text-brand-orange font-black">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
        
        <div className="mt-8 text-gray-500 text-xs font-semibold space-y-2 px-4 italic leading-relaxed">
           <p>Untuk jeni bangunan gedung, pabrik, apertemen, dan kantor akan dikenakan biaya tambahan berupa transportasi sebesar Rp250.000,-</p>
           <p>Apabila terdapat pekerjaan selebih teknis sampai di lokasi Anda, maka akan dikenakan biaya kunjungan sebesar Rp50.000,-</p>
        </div>
      </div>
    </section>
  );
}
