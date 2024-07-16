// pages/about.js
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main className="py-16 bg-gray-50">
        <section className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 font-aeonik-bold text-pantone-purple">Sobre Nosotros</h2>
          <div className="flex flex-col lg:flex-row items-center mb-16">
            <img src="/images/team.jpg" alt="Team" className="w-full lg:w-1/2 rounded-lg shadow-lg mb-8 lg:mb-0 lg:mr-8" />
            <div className="text-gray-700 text-center lg:text-left lg:w-1/2 font-aeonik-regular">
              <p className="mb-6">
                ProTarget lanza y evoluciona productos digitales, desde sitios web y aplicaciones hasta servicios y herramientas empresariales.
              </p>
              <p className="mb-6">
                Somos un equipo diverso, enfocado en el crecimiento y comprometido con ayudar a los fundadores a tener éxito.
              </p>
              <p>
                Nuestra misión es entregar soluciones tecnológicas de alta calidad que no solo cumplan, sino que superen las expectativas de nuestros clientes.
              </p>
            </div>
          </div>
        </section>
        
        <section className="bg-pantone-lavender py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold text-center mb-12 font-aeonik-bold text-pantone-green">Nuestro Equipo</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <img src="/images/member1.jpg" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" />
                <h4 className="text-xl font-bold font-aeonik-bold text-pantone-purple">Nombre 1</h4>
                <p className="text-gray-700 font-aeonik-regular">CEO & Fundador</p>
              </div>
              <div className="text-center">
                <img src="/images/member2.jpg" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" />
                <h4 className="text-xl font-bold font-aeonik-bold text-pantone-purple">Nombre 2</h4>
                <p className="text-gray-700 font-aeonik-regular">CTO</p>
              </div>
              <div className="text-center">
                <img src="/images/member3.jpg" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" />
                <h4 className="text-xl font-bold font-aeonik-bold text-pantone-purple">Nombre 3</h4>
                <p className="text-gray-700 font-aeonik-regular">Director de Marketing</p>
              </div>
              <div className="text-center">
                <img src="/images/member4.jpg" alt="Team Member 4" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" />
                <h4 className="text-xl font-bold font-aeonik-bold text-pantone-purple">Nombre 4</h4>
                <p className="text-gray-700 font-aeonik-regular">Diseñador Principal</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold text-center mb-12 font-aeonik-bold text-pantone-purple">Nuestros Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center font-aeonik-regular text-gray-700">
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-2xl font-bold mb-4 font-aeonik-bold text-pantone-green">Innovación</h4>
                <p>Buscamos constantemente nuevas formas de innovar y mejorar nuestros procesos y productos.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-2xl font-bold mb-4 font-aeonik-bold text-pantone-green">Calidad</h4>
                <p>Nos comprometemos a entregar productos y servicios de la más alta calidad a nuestros clientes.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-2xl font-bold mb-4 font-aeonik-bold text-pantone-green">Compromiso</h4>
                <p>Estamos comprometidos con el éxito de nuestros clientes y trabajamos arduamente para lograrlo.</p>
              </div>
            </div>
          </div>
        </section>
        
      </main>
      <Footer />
    </>
  );
}
