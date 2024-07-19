// pages/prueba.js
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/Layout';

export default function Prueba() {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <h1 className="text-5xl font-bold text-center mb-12 font-aeonik-bold text-pantone-purple">{t('greeting')}</h1>
        <p className="text-gray-600 text-center font-aeonik-regular">{t('description')}</p>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
