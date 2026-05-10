import { motion } from "motion/react";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useAttention } from "../context/AttentionContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isPulsing } = useAttention();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#" },
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Layanan", href: "#layanan" },
    { name: "Harga", href: "#harga" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 bg-white border-b border-gray-100 ${
        scrolled ? "fixed top-0 shadow-sm py-2" : "relative py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-black tracking-tighter text-blue-900 border-2 border-primary-blue px-2 py-0.5 rounded-lg flex items-center gap-1">
              <span className="text-brand-orange italic font-black">AM</span> 
              <span className="text-primary-blue text-lg">Anugrah</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-black uppercase text-secondary-blue hover:text-brand-orange transition-colors tracking-tight"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
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
              className="bg-primary-blue text-white px-6 py-2.5 rounded-xl text-sm font-black hover:bg-secondary-blue transition-all flex items-center gap-2 shadow-sm"
            >
              <Phone size={16} fill="white" />
              Konsultasi Gratis
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full overflow-hidden"
        >
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-4 pt-2">
              <a
                href="https://wa.me/6281332356794"
                className="w-full bg-orange-600 text-white px-6 py-3 rounded-xl text-center font-bold flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                WhatsApp Sekarang
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
