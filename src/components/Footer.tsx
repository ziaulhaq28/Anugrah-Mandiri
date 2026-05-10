import React from "react";
import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { useAttention } from "../context/AttentionContext";

export default function Footer() {
  const { triggerAttention } = useAttention();

  const handleServiceClick = (e: React.MouseEvent) => {
    e.preventDefault();
    triggerAttention();
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 md:pt-20 pb-12 overflow-hidden relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
         <img src="https://www.transparenttextures.com/patterns/cubes.png" alt="pattern" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
          <div className="space-y-8">
            <h4 className="text-3xl font-black flex items-center gap-1">
              <span className="text-brand-orange italic">AM</span> <span className="text-white uppercase tracking-tighter">Anugrah</span>
            </h4>
            <p className="text-gray-400 leading-relaxed text-sm font-medium">
              Memberikan kenyamanan terbaik untuk udara ruangan Anda melalui layanan profesional, terpercaya, dan bergaransi di seluruh wilayah Yogyakarta.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-gray-900 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-lg font-black mb-8 border-l-4 border-brand-yellow pl-4 uppercase tracking-widest text-brand-yellow">Layanan Kami</h5>
            <ul className="space-y-4 text-gray-400 text-sm font-black uppercase tracking-tight">
              <li><a href="#" onClick={handleServiceClick} className="hover:text-brand-yellow transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="text-brand-yellow group-hover:translate-x-1 transition-transform" /> Service & Cuci AC</a></li>
              <li><a href="#" onClick={handleServiceClick} className="hover:text-brand-yellow transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="text-brand-yellow group-hover:translate-x-1 transition-transform" /> Bongkar Pasang AC</a></li>
              <li><a href="#" onClick={handleServiceClick} className="hover:text-brand-yellow transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="text-brand-yellow group-hover:translate-x-1 transition-transform" /> Isi & Tambah Freon</a></li>
              <li><a href="#" onClick={handleServiceClick} className="hover:text-brand-yellow transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="text-brand-yellow group-hover:translate-x-1 transition-transform" /> Perbaikan Kebocoran</a></li>
              <li><a href="#" onClick={handleServiceClick} className="hover:text-brand-yellow transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="text-brand-yellow group-hover:translate-x-1 transition-transform" /> Penggantian Sparepart</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-black mb-8 border-l-4 border-brand-yellow pl-4 uppercase tracking-widest text-brand-yellow">Area Layanan</h5>
            <ul className="space-y-4 text-gray-400 text-sm font-black uppercase tracking-tight">
              <li className="flex items-center gap-2"><span>»</span> Kota Yogyakarta</li>
              <li className="flex items-center gap-2"><span>»</span> Sleman</li>
              <li className="flex items-center gap-2"><span>»</span> Bantul</li>
              <li className="flex items-center gap-2"><span>»</span> Gunung Kidul</li>
              <li className="flex items-center gap-2"><span>»</span> Kulon Progo</li>
            </ul>
          </div>

          <div className="space-y-8">
             <div>
                <h5 className="text-sm font-black text-brand-yellow mb-4 uppercase tracking-widest border-l-4 border-brand-yellow pl-4">Hubungi Kami:</h5>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="text-brand-orange shrink-0" size={18} />
                    <p className="text-xs font-bold text-gray-300 leading-relaxed">
                       Jl. Glagahsari No. 68, Warungboto, <br />
                       Kec. Umbulharjo, Kota Yogyakarta, <br />
                       Daerah Istimewa Yogyakarta 55164
                    </p>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="text-brand-orange shrink-0" size={18} />
                    <span className="text-xs font-bold text-gray-300">0813-3235-6794</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="text-brand-orange shrink-0" size={18} />
                    <span className="text-xs font-bold text-gray-300">cs@anugerahmandiri.id</span>
                  </li>
                </ul>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">
          <p>© 2024 CV ANUGRAH MANDIRI. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
