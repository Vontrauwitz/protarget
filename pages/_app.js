// pages/_app.js
import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.js';
import SEOScript from '../components/SEOScript';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <SEOScript />
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);