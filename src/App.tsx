import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Hero from '@/sections/Hero';
import Services from '@/sections/Services';
import Products from '@/sections/Products';
import Differentials from '@/sections/Differentials';
import HowItWorks from '@/sections/HowItWorks';
import Testimonials from '@/sections/Testimonials';
import FinalCta from '@/sections/FinalCta';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <Products />
        <Differentials />
        <HowItWorks />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
