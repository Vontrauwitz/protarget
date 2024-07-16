// pages/services.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  return (
    <>
      <Header />
      <main className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard title="Gestión de Producto" description="Estrategia y administración de proyectos" />
            <ServiceCard title="Ingeniería de Producto" description="Desarrollo web y móvil, estrategia técnica, DevOps" />
            <ServiceCard title="Diseño de Producto" description="Investigación y estrategia de diseño, diseño centrado en el usuario, diseño visual e ilustración" />
            <ServiceCard title="Pruebas y QA" description="Desarrollo orientado a pruebas, pruebas crowdsourced, pruebas automatizadas" />
            <ServiceCard title="Hosting y Soporte" description="Alojamiento gestionado, actualizaciones de productos, mantenimiento preventivo" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
