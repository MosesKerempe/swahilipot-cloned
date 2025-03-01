import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'small' | 'medium' | 'large';
}

export default function Logo({ variant = 'dark', size = 'medium' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-primary';
  
  const sizeClasses = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl'
  };

  return (
    <Link href="/" className="flex items-center">
      <div className={`font-bold ${textColor} ${sizeClasses[size]}`}>
        SwahiliPot Hub
      </div>
    </Link>
  );
}