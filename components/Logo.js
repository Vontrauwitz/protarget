// components/Logo.js
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <div className="w-40 h-32 pt-2">
        <Image
          src="/images/proTargetLogo.png"
          alt="ProTarget Logo"
          width={128}
          height={128}
          layout="responsive"
        />
      </div>
    </Link>
  );
}