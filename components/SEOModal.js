import { useState, useEffect } from 'react';

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      const script = document.createElement('script');
      script.src = 'https://www.local-marketing-reports.com/m/assets-v2/lead-gen/js/external/widget-builder.js';
      script.async = true;
      script.dataset.widgetId = 'a7e7ec873629ff35c55a5b317d03f8898d9f4c01';
      document.getElementById('widget-container').appendChild(script);

      return () => {
        // Cleanup script when the component unmounts
        document.getElementById('widget-container').removeChild(script);
      };
    }
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Análisis de Presencia en Línea
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Abrir Modal
        </button>
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </button>
              <h2 className="text-xl font-semibold mb-4">Análisis de Presencia en Línea</h2>
              <div
                id="widget-container"
                className="w-full"
                style={{ minHeight: '600px' }}
              />
            </div>
          </div>
        )}
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
  );
}

export default Page;
