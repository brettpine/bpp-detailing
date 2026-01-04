import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Area from "@/components/sections/Area";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
      <div className="min-h-screen bg-white">
        <Header />
        <main id="main" className="pt-20">
          <Hero />
          <Services />
          <Gallery />
          <Area />
          <Contact />
          <Footer />
        </main>
      </div>
  );
}
