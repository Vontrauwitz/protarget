// components/Header.js
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { SpainFlag, CanadaFlag, QuebecIcon } from './Svg'; // Importa los componentes de bandera

export default function Header() {
  const { t } = useTranslation('header');
  const router = useRouter();
  const { locale, locales } = router;
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (selectedLocale) => {
    router.push(router.pathname, router.asPath, { locale: selectedLocale });
    setIsOpen(false);
  };

  const getFlagIcon = (loc) => {
    switch (loc) {
      case 'es':
        return <SpainFlag className="inline w-4 h-4 mr-2" />;
      case 'en-US':
        return <CanadaFlag className="inline w-4 h-4 mr-2" />;
      case 'fr':
        return <QuebecIcon className="inline w-4 h-4 mr-2" />;
      default:
        return null;
    }
  };

  const getLocaleName = (loc) => {
    switch (loc) {
      case 'es':
        return 'Español';
      case 'en-US':
        return 'English';
      case 'fr':
        return 'Français';
      default:
        return loc;
    }
  };

  return (
    <header className="bg-pantone-purple shadow z-50 relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white font-aeonik-bold">
          <Link href="/">ProTarget</Link>
        </div>
        <nav className="space-x-6 font-aeonik-regular flex items-center">
          <Link href="/about" className="text-white hover:text-pantone-lavender">{t('aboutUs')}</Link>
          <Link href="/services" className="text-white hover:text-pantone-lavender">{t('services')}</Link>
          <Link href="/case-studies" className="text-white hover:text-pantone-lavender">{t('caseStudies')}</Link>
          {/* <Link href="/blog" className="text-white hover:text-pantone-lavender">{t('blog')}</Link>
          <Link href="/careers" className="text-white hover:text-pantone-lavender">{t('careers')}</Link> */}
          <Link href="/contact" className="text-white hover:text-pantone-lavender">{t('contact')}</Link>
          <div className="relative ml-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-pantone-green text-white font-aeonik-regular px-2 py-1 rounded flex items-center"
            >
              {getFlagIcon(locale)} {getLocaleName(locale)}
              <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.92l3.71-3.7a.75.75 0 111.06 1.06l-4.25 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-50">
                {locales.map((loc) => (
                  <li key={loc}>
                    <button
                      onClick={() => changeLanguage(loc)}
                      className="flex items-center px-4 py-2 hover:bg-gray-100 w-full text-left text-black"
                    >
                      {getFlagIcon(loc)} {getLocaleName(loc)}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
