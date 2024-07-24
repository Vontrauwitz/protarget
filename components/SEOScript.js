// components/SEOScript.js
import Script from 'next/script'

export default function SEOScript({ onLoad }) {
  return (
    <Script
      id="brightlocal-script"
      src="https://www.local-marketing-reports.com/m/assets-v2/lead-gen/js/external/widget-builder.js"
      strategy="afterInteractive"
      onLoad={() => {
        console.log('Script de BrightLocal cargado');
        // Intentamos inicializar el widget después de un breve retraso
        setTimeout(() => {
          if (window.LMR && typeof window.LMR.init === 'function') {
            console.log('LMR.init está disponible');
            if (typeof onLoad === 'function') {
              onLoad();
            }
          } else {
            console.log('LMR o LMR.init no están disponibles después del retraso');
          }
        }, 1000);  // Esperamos 1 segundo
      }}
    />
  )
}