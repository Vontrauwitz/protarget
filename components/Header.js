// components/Header.js
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FaPhone } from 'react-icons/fa';
import { SpainFlag, CanadaFlag, QuebecIcon } from './Svg';
import Logo from './Logo';

export default function Header() {
  const { t } = useTranslation('header');
  const router = useRouter();
  const { locale, locales } = router;
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const changeLanguage = (selectedLocale) => {
    router.push(router.pathname, router.asPath, { locale: selectedLocale });
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getFlagIcon = (loc) => {
    switch (loc) {
      case 'es': return <SpainFlag className="inline w-4 h-4 mr-2" />;
      case 'en-US': return <CanadaFlag className="inline w-4 h-4 mr-2" />;
      case 'fr': return <QuebecIcon className="inline w-4 h-4 mr-2" />;
      default: return null;
    }
  };

  const getLocaleName = (loc) => {
    switch (loc) {
      case 'es': return 'Español';
      case 'en-US': return 'English';
      case 'fr': return 'Français';
      default: return loc;
    }
  };

  return (
    <header className="bg-pantone-purple shadow-lg relative h-16">
      <div className="container mx-auto px-4 h-full flex justify-end items-center">
        <div className="absolute left-4 -bottom-12 z-10">
          <Logo />
        </div>
        <nav className="hidden md:flex items-center space-x-4 font-aeonik-regular text-sm">
          <Link href="/about" className="text-white hover:text-pantone-lavender">{t('aboutUs')}</Link>
          <Link href="/services" className="text-white hover:text-pantone-lavender">{t('services')}</Link>
          <Link href="/case-studies" className="text-white hover:text-pantone-lavender">{t('caseStudies')}</Link>
          <Link href="/contact" className="text-white hover:text-pantone-lavender">{t('contact')}</Link>
          <a href="tel:+15146191358" className="text-white hover:text-pantone-lavender flex items-center text-xs">
            <FaPhone className="mr-1" /> +1(514)619-1358
          </a>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-pantone-green text-white font-aeonik-regular px-2 py-1 rounded flex items-center"
            >
              {getFlagIcon(locale)} {getLocaleName(locale)}
              <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.92l3.71-3.7a.75.75 0 111.06 1.06l-4.25 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
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
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-pantone-lavender"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden absolute right-0 top-16 bg-pantone-purple bg-opacity-90 z-40 p-4 rounded-bl-lg shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link href="/about" className="text-white hover:text-pantone-lavender" onClick={() => setIsMenuOpen(false)}>{t('aboutUs')}</Link>
            <Link href="/services" className="text-white hover:text-pantone-lavender" onClick={() => setIsMenuOpen(false)}>{t('services')}</Link>
            <Link href="/case-studies" className="text-white hover:text-pantone-lavender" onClick={() => setIsMenuOpen(false)}>{t('caseStudies')}</Link>
            <Link href="/contact" className="text-white hover:text-pantone-lavender" onClick={() => setIsMenuOpen(false)}>{t('contact')}</Link>
            <a href="tel:+15146191358" className="text-white hover:text-pantone-lavender flex items-center">
              <FaPhone className="mr-2" /> +1(514)619-1358
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}