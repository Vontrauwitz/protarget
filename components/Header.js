// components/Header.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export default function Header() {
  const { t } = useTranslation('header');
  const router = useRouter();
  const { locale, locales } = router;

  const changeLanguage = (e) => {
    const selectedLocale = e.target.value;
    router.push(router.pathname, router.asPath, { locale: selectedLocale });
  };

  return (
    <header className="bg-pantone-purple shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white font-aeonik-bold">
          <Link href="/">ProTarget</Link>
        </div>
        <nav className="space-x-6 font-aeonik-regular">
          <Link href="/about" className="text-white hover:text-pantone-lavender">{t('aboutUs')}</Link>
          <Link href="/services" className="text-white hover:text-pantone-lavender">{t('services')}</Link>
          <Link href="/case-studies" className="text-white hover:text-pantone-lavender">{t('caseStudies')}</Link>
          <Link href="/blog" className="text-white hover:text-pantone-lavender">{t('blog')}</Link>
          <Link href="/careers" className="text-white hover:text-pantone-lavender">{t('careers')}</Link>
          <Link href="/contact" className="text-white hover:text-pantone-lavender">{t('contact')}</Link>
          <select
            onChange={changeLanguage}
            value={locale}
            className="ml-4 bg-pantone-green text-white font-aeonik-regular px-2 py-1 rounded"
          >
            {locales.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </nav>
      </div>
    </header>
  );
}
