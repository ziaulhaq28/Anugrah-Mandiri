import { Facebook, Instagram, Twitter, Youtube, Clock } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-primary-blue text-white py-2 px-4 hidden lg:block text-xs font-semibold">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span>Butuh layanan service atau pasang AC?</span>
          <div className="flex items-center gap-2">
            <Clock size={14} />
            <span>Buka: 8.00 Pagi - 9.00 Malam</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span>Social Media :</span>
          <div className="flex items-center gap-3">
            <Facebook size={14} className="cursor-pointer hover:text-brand-yellow transition-colors" />
            <Instagram size={14} className="cursor-pointer hover:text-brand-yellow transition-colors" />
            <Twitter size={14} className="cursor-pointer hover:text-brand-yellow transition-colors" />
            <Youtube size={14} className="cursor-pointer hover:text-brand-yellow transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
}
