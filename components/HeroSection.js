// components/HeroSection.js
import { useTranslation } from 'next-i18next';

export default function HeroSection() {
  const { t } = useTranslation('heroSection');

  return (
    <section
      className="hero bg-cover bg-center h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="text-center">
        <h1 className="text-5xl font-aeonik-bold">{t('headline')}</h1>
        <p className="mt-4 text-xl font-aeonik-light">{t('subheadline')}</p>
        <button className="mt-8 px-6 py-3 bg-pantone-purple hover:bg-pantone-lavender rounded font-aeonik-regular">
          {t('contactUs')}
        </button>
      </div>
    </section>
  );
}
