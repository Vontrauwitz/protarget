// components/HeroSection.js
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const { t } = useTranslation('heroSection');
  const [videoSrc, setVideoSrc] = useState('');

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

  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      {videoSrc && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          loop
          muted
        ></video>
      )}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-aeonik-bold">{t('headline')}</h1>
        <p className="mt-4 text-xl font-aeonik-light">{t('subheadline')}</p>
        <button className="mt-8 px-6 py-3 bg-pantone-purple hover:bg-pantone-lavender rounded font-aeonik-regular">
          {t('contactUs')}
        </button>
      </div>
    </section>
  );
}
