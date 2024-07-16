// pages/index.js
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import Testimonial from '../components/Testimonial';
import { UpArrowIcon } from '../components/Svg';

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 300) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 300) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        {/* Servicios */}
        <section className="services py-16">
          <div className="container mx-auto">
            <h2 className="text-4xl font-aeonik-bold text-center mb-8">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard title="Gestión de Producto" description="Estrategia y administración de proyectos" />
              <ServiceCard title="Ingeniería de Producto" description="Desarrollo web y móvil, estrategia técnica, DevOps" />
              <ServiceCard title="Diseño de Producto" description="Investigación y estrategia de diseño, diseño centrado en el usuario, diseño visual e ilustración" />
              <ServiceCard title="Pruebas y QA" description="Desarrollo orientado a pruebas, pruebas crowdsourced, pruebas automatizadas" />
              <ServiceCard title="Hosting y Soporte" description="Alojamiento gestionado, actualizaciones de productos, mantenimiento preventivo" />
            </div>
          </div>
        </section>
        {/* Testimonios */}
        <section className="testimonials py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-4xl font-aeonik-bold text-center mb-8">Testimonios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Testimonial name="Justin Mast" position="Fundador, Bloomscape" quote="ProTarget convirtió nuestra visión en realidad con una ejecución impecable." />
              <Testimonial name="Jason Havens" position="CEO, NVS" quote="Para mí, todo fue excelente, lo que significa que ProTarget es bueno en lo que hace." />
              <Testimonial name="Richard Buchwald" position="Gerente de Marketing, NYSTEC" quote="ProTarget tiene una base sólida, un buen plan y mecanismos de respuesta funcionales." />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <button
        className={`fixed bottom-8 right-8 p-3 bg-pantone-purple text-white rounded-full shadow-lg transform transition-transform ${
          showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <UpArrowIcon />
      </button>
    </>
  );
}
