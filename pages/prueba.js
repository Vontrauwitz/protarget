// pages/prueba.js
import Head from 'next/head';
import { FacebookIcon, WhatsappIcon, HomeIcon, UpArrowIcon } from '../components/Svg';

export default function Prueba() {
  return (
    <>
      <Head>
        <title>Prueba de Fuentes</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center space-y-8">
        <h1 className="text-3xl">Texto con la fuente predeterminada (Default)</h1>
        <h1 className="text-3xl font-aeonik font-bold">Texto con la fuente Aeonik Bold</h1>
        <h1 className="text-3xl font-aeonik font-light">Texto con la fuente Aeonik Light</h1>
        <h1 className="text-3xl font-aeonik font-normal">Texto con la fuente Aeonik Regular</h1>
        <UpArrowIcon/>
      </div>
    </>
  );
}
