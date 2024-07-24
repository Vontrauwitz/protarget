import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/Layout';

const Page = () => {
  const [containerHeight, setContainerHeight] = useState('auto');
  const { t } = useTranslation('page');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.local-marketing-reports.com/m/assets-v2/lead-gen/js/external/widget-builder.js';
    script.async = true;
    script.dataset.widgetId = 'a7e7ec873629ff35c55a5b317d03f8898d9f4c01';
    const widgetContainer = document.getElementById('widget-container');
    if (widgetContainer) {
      widgetContainer.appendChild(script);
    }

    const adjustHeight = () => {
      const widgetElement = document.querySelector('#widget-container iframe');
      if (widgetElement) {
        setContainerHeight(`${widgetElement.scrollHeight}px`);
      }
    };

    script.onload = () => {
      setTimeout(adjustHeight, 1000); // Ajusta la altura después de 1 segundo para dar tiempo al widget a cargarse
    };
    window.addEventListener('resize', adjustHeight);

    return () => {
      if (widgetContainer && widgetContainer.contains(script)) {
        widgetContainer.removeChild(script);
      }
      window.removeEventListener('resize', adjustHeight);
    };
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            {t('title')}
          </h1>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 ease-in-out" style={{ minHeight: '100px' }}>
            <div className="p-6" style={{ height: containerHeight }}>
              <div 
                id="widget-container" 
                className="w-full h-full"
              />
            </div>
          </div>
          <p className="text-center mt-8 text-lg font-semibold text-pantone-purple">
            {t('cta')}
          </p>
        </div>
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
              'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
              sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}</style>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['page'])),
    },
  };
}

export default Page;