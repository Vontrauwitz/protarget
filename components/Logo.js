// components/Logo.js
import Image from 'next/image';

export default function Logo() {
  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex justify-start pointer-events-none">
      <div className="relative pointer-events-auto" onClick={handleLogoClick}>
        <div className="w-[170px] h-[170px] sm:w-[220px] sm:h-[220px] md:w-[270px] md:h-[270px] lg:w-[300px] lg:h-[300px] drop-shadow-2xl">
          <Image
            src="/images/proTargetLogo.png"
            alt="ProTarget Logo"
            layout="responsive"
            width={300}
            height={300}
            priority
            placeholder="blur"
            blurDataURL="/images/proTargetLogoPlaceholder.png"
          />
        </div>
      </div>
    </div>
  );
}
