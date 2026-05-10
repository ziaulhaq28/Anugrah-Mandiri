import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Wrench, Wind, Droplets, X, CheckCircle2 } from "lucide-react";

interface ServiceItem {
  title: string;
  desc: string;
  icon: any;
  img: string;
  details: string[];
}

const services: ServiceItem[] = [
  {
    title: "Service & Cuci AC",
    desc: "Perawatan rutin untuk menjaga performa AC tetap optimal dan udara tetap bersih.",
    icon: Wind,
    img: "/src/assets/images/regenerated_image_1778224957843.jpg",
    details: [
      "Cuci filter & evaporator indoor",
      "Cuci fan & kondensor outdoor",
      "Pembersihan pipa drainase",
      "Pengecekan tekanan freon",
      "Pengecekan arus listrik (ampere)"
    ]
  },
  {
    title: "Bongkar Pasang AC",
    desc: "Layanan pindah AC atau pasang unit baru dengan teknik pemakuman standar pabrik.",
    icon: Wrench,
    img: "/src/assets/images/regenerated_image_1778224959433.jpg",
    details: [
      "Pemasangan unit indoor & outdoor",
      "Instalasi pipa tembaga & drainase",
      "Bongkar unit lama dengan rapi",
      "Vakum sistem sebelum running",
      "Uji coba performa & suhu"
    ]
  },
  {
    title: "Isi & Tambah Freon",
    desc: "Teknisi kami menangani pengecekan, deteksi kebocoran, dan pengisian freon R32, R410A, R22.",
    icon: Droplets,
    img: "/src/assets/images/regenerated_image_1778224960848.jpg",
    details: [
      "Deteksi kebocoran pipa & nepel",
      "Vakum sistem (jika diperlukan)",
      "Pengisian freon sesuai kapasitas",
      "Penyetelan tekanan optimal",
      "Cek suhu outlet indoor"
    ]
  },
  {
    title: "Perbaikan Kebocoran",
    desc: "Solusi untuk AC bocor air atau bocor freon dengan perbaikan permanen.",
    icon: Droplets,
    img: "/src/assets/images/regenerated_image_1778224962315.jpg",
    details: [
      "Perbaikan drainase tersumbat",
      "Pengelasan titik bocor freon",
      "Penggantian insulasi pipa",
      "Pengecekan talang air indoor",
      "Uji tekan nitrogen"
    ]
  },
  {
    title: "Ganti Sparepart",
    desc: "Penggantian kapasitor, overload, thermistor, atau komponen lainnya dengan part original.",
    icon: Wrench,
    img: "/src/assets/images/regenerated_image_1778335145726.jpg",
    details: [
      "Ganti Kapasitor Fan/Kompresor",
      "Ganti Thermistor Sensor",
      "Penggantian PCB Module",
      "Ganti Motor Fan Indoor/Outdoor",
      "Pemasangan Part Orisinil"
    ]
  },
  {
    title: "Instalasi Pipa",
    desc: "Pemasangan jalur pipa AC untuk gedung, rumah baru, atau renovasi dengan material premium.",
    icon: Wind,
    img: "/src/assets/images/regenerated_image_1778224978967.jpg",
    details: [
      "Tanam pipa di dalam tembok",
      "Gunakan pipa tembaga tebal (Tateyama/Hoda)",
      "Instalasi kabel kontrol SNI",
      "Instalasi drainase PVC",
      "Pressure test dengan Nitrogen"
    ]
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="layanan" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-yellow text-gray-900 px-4 py-1 font-black text-xs uppercase mb-4 rounded-sm tracking-widest">
            Layanan Terpopuler Kami
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
            Perbaikan AC <br />
            Berkualitas Yang Bisa <br />
            Anda Andalkan
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6,
                delay: idx * 0.1,
                ease: "easeOut"
              }}
              className="group text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mb-6 shadow-md ring-4 ring-yellow-50">
                <item.icon className="text-gray-900" size={24} />
              </div>
              <div className="mb-8 overflow-hidden rounded-2xl shadow-xl w-48 h-64 mx-auto group-hover:scale-105 transition-transform duration-500">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-2xl font-black text-gray-900 mb-4">{item.title}</h4>
              <p className="text-gray-500 font-medium leading-relaxed mb-8 px-4 text-sm">
                {item.desc}
              </p>
              <button 
                onClick={() => setSelectedService(item)}
                className="bg-primary-blue text-white px-8 py-2 rounded-lg font-black text-xs uppercase hover:bg-secondary-blue transition-all shadow-sm"
              >
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-48">
                <img 
                  src={selectedService.img} 
                  className="w-full h-full object-cover" 
                  alt={selectedService.title} 
                />
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-lg hover:scale-110 transition-transform"
                >
                  <X size={20} />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-yellow rounded-xl flex items-center justify-center text-gray-900">
                    <selectedService.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">{selectedService.title}</h3>
                </div>
                
                <p className="text-gray-500 font-medium leading-relaxed mb-6">
                  {selectedService.desc}
                </p>
                
                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-black uppercase text-gray-400 tracking-widest">Lingkup Kerja:</h4>
                  {selectedService.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                      <CheckCircle2 size={16} className="text-primary-blue" />
                      {detail}
                    </div>
                  ))}
                </div>

                <a 
                  href="https://wa.me/6281332356794"
                  className="w-full bg-primary-blue text-white py-4 rounded-xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-blue-100 hover:bg-secondary-blue transition-all"
                >
                  Pesan Sekarang
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
