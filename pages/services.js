// pages/services.js
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  const { t } = useTranslation('services');

  return (
    <Layout>
      <main className="min-h-screen py-16 bg-gray-50">
        <section className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 font-aeonik-bold text-pantone-purple">{t('ourServices')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard title={t('productManagement')} description={t('productManagementDesc')} tech={t('productManagementTech')} />
            <ServiceCard title={t('productEngineering')} description={t('productEngineeringDesc')} tech={t('productEngineeringTech')} />
            <ServiceCard title={t('productDesign')} description={t('productDesignDesc')} tech={t('productDesignTech')} />
            <ServiceCard title={t('testingQA')} description={t('testingQADesc')} tech={t('testingQATech')} />
            <ServiceCard title={t('hostingSupport')} description={t('hostingSupportDesc')} tech={t('hostingSupportTech')} />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['services', 'header'])),
    },
  };
}
