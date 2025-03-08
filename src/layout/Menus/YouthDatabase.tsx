import Link from 'next/link';

interface YouthDatabaseProps {
  onLinkClick?: () => void;
}

export default function YouthDatabase({ onLinkClick }: YouthDatabaseProps) {
  return (
    <Link
      href="/youth/JoinYouth"
      className="hover:text-primary dark:hover:text-blue-400 transition-colors duration-300"
      aria-label="Youth Database"
      onClick={onLinkClick} // ✅ Now it supports onClick
    >
      Youth Database
    </Link>
  );
}
