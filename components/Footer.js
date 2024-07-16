// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-pantone-green text-white py-6">
        <div className="container mx-auto text-center font-aeonik-light">
          <p>&copy; 2024 ProTarget. All rights reserved.</p>
          <p className="mt-2">
            <a href="tel:+12122578400" className="hover:underline">+1 212-257-8400</a> | 
            <a href="mailto:info@protarget.com" className="hover:underline ml-2">info@protarget.com</a>
          </p>
        </div>
      </footer>
    );
  }
  