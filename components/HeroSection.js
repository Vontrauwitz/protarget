// components/HeroSection.js
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SEOScript from '../components/SEOScript';

export default function HeroSection() {
  const { t } = useTranslation('heroSection');
  const [videoSrc, setVideoSrc] = useState('');
  const router = useRouter();

  useEffect(() => {
    const videos = [
      '/videos/video1.mp4',
      '/videos/video2.mp4',
      '/videos/video3.mp4',
      '/videos/video4.mp4'
    ];
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    setVideoSrc(randomVideo);
  }, []);

  const openSEOWidget = () => {
    console.log('Redirigiendo a /script');
    router.push('/script');
  };

  const goToContact = () => {
    console.log('Redirigiendo a /contact');
    router.push('/contact');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {videoSrc && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          loop
          muted
        ></video>
      )}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-aeonik-bold leading-tight mb-6">
          {t('headline')}
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-aeonik-light mb-8">
          {t('subheadline')}
        </p>
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-aeonik-bold mb-4 text-pantone-lavender">
            {t('digitalPresenceTitle')}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-6">
            {t('digitalPresenceDescription')}
          </p>
          <button 
            className="px-8 py-4 bg-pantone-purple hover:bg-pantone-lavender text-white rounded-full font-aeonik-bold text-lg sm:text-xl transition duration-300 ease-in-out transform hover:scale-105"
            onClick={openSEOWidget}
          >
            {t('checkPresenceButton')}
          </button>
        </div>
        <div className="flex justify-center">
          <button 
            className="px-6 py-3 bg-pantone-green hover:bg-pantone-lavender rounded-full font-aeonik-regular text-black hover:text-white transition duration-300 ease-in-out"
            onClick={goToContact}
          >
            {t('contactUs')}
          </button>
        </div>
      </div>
      <SEOScript />
    </section>
  );
}