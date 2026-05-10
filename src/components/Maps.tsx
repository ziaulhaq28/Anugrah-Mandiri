import { MapPin, ExternalLink } from "lucide-react";

export default function Maps() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.8546193636407!2d110.38575027588725!3d-7.805213692214742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57793d56f14b%3A0xc34cc45550a266b0!2sJl.%20Glagahsari%20No.68%2C%20Warungboto%2C%20Kec.%20Umbulharjo%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta%2055164!5e0!3m2!1sid!2sid!4v1715053645000!5m2!1sid!2sid";
  const externalLink = "https://maps.app.goo.gl/dEJsr8Hxh2SeTW24A"; // Note: User should provide actual shortened link if this is incorrect

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#fbfbfb] rounded-[40px] p-8 lg:p-12 shadow-sm border border-gray-100">
          <div>
            <div className="text-brand-orange font-black uppercase text-xs tracking-widest mb-4">Lokasi Kami</div>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Kunjungi Kantor Kami <br />
              Di Yogyakarta
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-primary-blue shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm font-black text-gray-900 mb-1">Alamat Kantor</div>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed">
                    Jl. Glagahsari No. 68, Warungboto, <br />
                    Kec. Umbulharjo, Kota Yogyakarta, <br />
                    Daerah Istimewa Yogyakarta 55164
                  </p>
                </div>
              </div>
            </div>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=Jl.+Glagahsari+No.68,+Warungboto,+Kec.+Umbulharjo,+Kota+Yogyakarta,+Daerah+Istimewa+Yogyakarta+55164`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-blue text-white px-8 py-4 rounded-xl font-black text-sm hover:bg-secondary-blue transition-all shadow-md shadow-blue-200"
            >
              Buka di Google Maps
              <ExternalLink size={18} />
            </a>
          </div>
          
          <div className="h-[400px] rounded-[32px] overflow-hidden shadow-2xl relative group">
            <iframe
              src={mapUrl}
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 bg-transparent pointer-events-none border-[12px] border-white rounded-[32px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
