// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-pantone-purple shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white font-aeonik-bold">
          <Link href="/">ProTarget</Link>
        </div>
        <nav className="space-x-6 font-aeonik-regular">
          <Link href="/about" className="text-white hover:text-pantone-lavender">About Us</Link>
          <Link href="/services" className="text-white hover:text-pantone-lavender">Services</Link>
          <Link href="/case-studies" className="text-white hover:text-pantone-lavender">Case Studies</Link>
          <Link href="/blog" className="text-white hover:text-pantone-lavender">Blog</Link>
          <Link href="/careers" className="text-white hover:text-pantone-lavender">Careers</Link>
          <Link href="/contact" className="text-white hover:text-pantone-lavender">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
