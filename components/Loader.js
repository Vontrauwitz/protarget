// components/Loader.js
import { useEffect, useState } from 'react';

const Loader = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + '.' : ''));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-300 rounded-full animate-spin blur"></div>
        <div className="absolute inset-2 bg-gray-900 rounded-full"></div>
      </div>
      <p className="mt-4 text-2xl font-bold text-white">
        Loading{dots}
      </p>
    </div>
  );
};

export default Loader;