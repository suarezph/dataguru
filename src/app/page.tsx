import Contact from './index/Contact';
import { DataProcess } from './index/DataProcess';
import FAQ from './index/FAQ';
import Footer from './index/Footer';
import Header from './index/Header';
import Hero from './index/Hero';
import { HowItWorks } from './index/HowItWorks';
import Services from './index/Services';
import { TechStack } from './index/TechStack';

export default function Page() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <DataProcess />
      <TechStack />
      <Services />
      <HowItWorks />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
