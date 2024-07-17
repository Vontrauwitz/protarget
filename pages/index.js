// pages/index.js
import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import Testimonial from '../components/Testimonial';
import { UpArrowIcon } from '../components/Svg';

export default function Home() {
  const { t } = useTranslation('index');
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
        <section className="services py-16">
          <div className="container mx-auto">
            <h2 className="text-4xl font-aeonik-bold text-center mb-8">{t('services')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard title={t('productManagement')} description={t('productManagementDesc')} />
              <ServiceCard title={t('productEngineering')} description={t('productEngineeringDesc')} />
              <ServiceCard title={t('productDesign')} description={t('productDesignDesc')} />
              <ServiceCard title={t('testingQA')} description={t('testingQADesc')} />
              <ServiceCard title={t('hostingSupport')} description={t('hostingSupportDesc')} />
            </div>
          </div>
        </section>
        <section className="testimonials py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-4xl font-aeonik-bold text-center mb-8 text-black">{t('testimonials')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Testimonial name="Justin Mast" position="Fundador, Bloomscape" quote={t('testimonialsText1')} />
              <Testimonial name="Jason Havens" position="CEO, NVS" quote={t('testimonialsText2')} />
              <Testimonial name="Richard Buchwald" position="Gerente de Marketing, NYSTEC" quote={t('testimonialsText3')} />
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['index', 'header', 'heroSection'])),
    },
  };
}
