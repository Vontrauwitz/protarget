// pages/case-studies.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import CaseStudyCard from '../components/CaseStudyCard';

export default function CaseStudies() {
  return (
    <>
      <Header />
      <main className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard title="Proyecto 1" description="Descripción del proyecto 1" />
            <CaseStudyCard title="Proyecto 2" description="Descripción del proyecto 2" />
            {/* Otros proyectos */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
