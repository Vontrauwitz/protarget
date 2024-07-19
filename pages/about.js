// pages/about.js
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../components/Layout';

export default function About() {
  const { t } = useTranslation('about');

  return (
    <Layout>
      <main className="py-16 bg-gray-50">
        <section className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 font-aeonik-bold text-pantone-purple">{t('title')}</h2>
          <div className="flex flex-col lg:flex-row items-center mb-16">
            <Image src="/images/office_desk.jpg" alt="Team" width={800} height={600} className="w-full lg:w-1/2 rounded-lg shadow-lg mb-8 lg:mb-0 lg:mr-8" />
            <div className="text-gray-700 text-center lg:text-left lg:w-1/2 font-aeonik-regular">
              <p className="mb-6">
                {t('description1')}
              </p>
              <p className="mb-6">
                {t('description2')}
              </p>
              <p>
                {t('description3')}
              </p>
            </div>
          </div>
        </section>
        
        <section className="bg-pantone-lavender py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold text-center mb-12 font-aeonik-bold text-pantone-green">{t('team')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="image-zoom relative w-48 h-48 mx-auto mb-4">
                  <Image src="/images/ph.jpg" alt="Jean Philippe San Louis" layout="fill" className="rounded-full object-cover" />
                </div>
                <h4 className="text-xl font-bold font-aeonik-bold text-pantone-purple">Jean Philippe Saint Louis</h4>
                <p className="text-gray-700 font-aeonik-regular">{t('member1')}</p>
              </div>
              <div className="text-center">
                <div className="image-zoom relative w-48 h-48 mx-auto mb-4">
                  <Image src="/images/userNotFound.jpg" alt="Nombre 2" layout="fill" className="rounded-full object-cover" />
                </div>
                <h4 className="text-xl font-bold font-aeonik-bold text-pantone-purple">Nombre 2</h4>
                <p className="text-gray-700 font-aeonik-regular">{t('member2')}</p>
              </div>
              <div className="text-center">
                <div className="image-zoom relative w-48 h-48 mx-auto mb-4">
                  <Image src="/images/userNotFound.jpg" alt="Nombre 3" layout="fill" className="rounded-full object-cover" />
                </div>
                <h4 className="text-xl font-bold font-aeonik-bold text-pantone-purple">Nombre 3</h4>
                <p className="text-gray-700 font-aeonik-regular">{t('member3')}</p>
              </div>
              <div className="text-center">
                <div className="image-zoom relative w-48 h-48 mx-auto mb-4">
                  <Image src="/images/userNotFound.jpg" alt="Nombre 4" layout="fill" className="rounded-full object-cover" />
                </div>
                <h4 className="text-xl font-bold font-aeonik-bold text-pantone-purple">Nombre 4</h4>
                <p className="text-gray-700 font-aeonik-regular">{t('member4')}</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold text-center mb-12 font-aeonik-bold text-pantone-purple">{t('values')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center font-aeonik-regular text-gray-700">
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-2xl font-bold mb-4 font-aeonik-bold text-pantone-green">{t('innovation')}</h4>
                <p>{t('description1')}</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-2xl font-bold mb-4 font-aeonik-bold text-pantone-green">{t('quality')}</h4>
                <p>{t('description2')}</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-2xl font-bold mb-4 font-aeonik-bold text-pantone-green">{t('commitment')}</h4>
                <p>{t('description3')}</p>
              </div>
            </div>
          </div>
        </section>
        
      </main>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['header', 'about'])),
    },
  };
}
