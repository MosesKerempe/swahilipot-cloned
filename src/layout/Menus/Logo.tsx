import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative h-10 w-40">
        <Image 
          src="/images/logo.png" 
          alt="SwahiliPot Hub Logo" 
          width={160} 
          height={40} 
          priority
        />
      </div>
    </Link>
  );
}