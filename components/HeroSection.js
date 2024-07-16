// components/HeroSection.js
export default function HeroSection() {
    return (
      <section className="hero bg-cover bg-center h-screen flex items-center justify-center text-white" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="text-center">
          <h1 className="text-5xl font-aeonik-bold">Transformamos tus ideas en productos digitales de alta calidad</h1>
          <p className="mt-4 text-xl font-aeonik-light">Produciendo software de alta calidad que cumple o supera las expectativas</p>
          <button className="mt-8 px-6 py-3 bg-pantone-purple hover:bg-pantone-lavender rounded font-aeonik-regular">Contáctanos</button>
        </div>
      </section>
    );
  }
  