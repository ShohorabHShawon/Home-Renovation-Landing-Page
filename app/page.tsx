import Contact from '@/components/ui/Contact';
import Footer from '@/components/ui/Footer';
import Gallery from '@/components/ui/Gallery';
import Hero from '@/components/ui/Hero';
import Process from '@/components/ui/Process';
import Testimonials from '@/components/ui/Testimonials';

export default function App() {
  return (
    <div className="bg-[#FAF9F6] font-serif text-gray-800">
      <main>
        <Hero />
        <Process />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
