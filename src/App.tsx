/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/Features";
import Process from "./components/Process";
import PricingTable from "./components/PricingTable";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Maps from "./components/Maps";
import Footer from "./components/Footer";

import { AttentionProvider } from "./context/AttentionContext";

export default function App() {
  return (
    <AttentionProvider>
      <div className="font-sans antialiased text-gray-900 selection:bg-orange-100 selection:text-orange-900">
        <TopBar />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyUs />
          <Process />
          <PricingTable />
          <Gallery />
          <Testimonials />
          <FAQ />
          <Maps />
        </main>
        <Footer />
        
        {/* WhatsApp Floating Button */}
        <a 
          href="https://wa.me/6281332356794" 
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center animate-bounce"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="WhatsApp" 
            className="w-8 h-8"
          />
        </a>
      </div>
    </AttentionProvider>
  );
}

