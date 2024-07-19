// pages/contact.js
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import Layout from '../components/Layout';

export default function Contact() {
  const { t } = useTranslation('contact');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí manejarías el envío del formulario, por ejemplo, enviarlo a una API
    setSubmitted(true);
  };

  return (
    <Layout>
      <main className="min-h-screen py-16 bg-gray-50">
        <section className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 font-aeonik-bold text-pantone-purple animate-fade-in">{t('contactUs')}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative bg-white shadow-md rounded p-6 transform transition-transform hover:-translate-y-2 hover:shadow-lg">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                      {t('name')}
                    </label>
                    <input
                      className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pantone-purple focus:border-transparent transition-colors"
                      id="name"
                      type="text"
                      placeholder={t('namePlaceholder')}
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                      {t('email')}
                    </label>
                    <input
                      className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pantone-purple focus:border-transparent transition-colors"
                      id="email"
                      type="email"
                      placeholder={t('emailPlaceholder')}
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                      {t('message')}
                    </label>
                    <textarea
                      className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pantone-purple focus:border-transparent transition-colors"
                      id="message"
                      rows="5"
                      placeholder={t('messagePlaceholder')}
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="flex justify-center">
                    <button
                      className="py-2 px-6 bg-pantone-purple text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pantone-purple transition-transform transform hover:-translate-y-1"
                      type="submit"
                    >
                      {t('sendMessage')}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-pantone-purple">{t('thankYou')}</h3>
                  <p className="mt-4 text-gray-700">{t('messageReceived')}</p>
                </div>
              )}
            </div>
            <div className="relative">
              <h3 className="text-2xl font-bold text-pantone-purple mb-4">{t('ourLocation')}</h3>
              <div className="overflow-hidden rounded shadow-md transform transition-transform hover:scale-105">
                <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11168.951643560347!2d-73.73622401284182!3d45.58576190000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc922ff474a2bdf%3A0x7bea0f1ab34d4ecd!2sPro%20Target%20Inc!5e0!3m2!1ses-419!2sca!4v1721248911750!5m2!1ses-419!2sca" 
                  width="100%"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded"
                ></iframe>
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
      ...(await serverSideTranslations(locale, ['contact', 'header'])),
    },
  };
}
