import Link from 'next/link';

interface DonateBtnProps {
  onLinkClick?: () => void;
}

export default function DonateBtn({ onLinkClick }: DonateBtnProps) {
  return (
    <Link
      href="/stwdonate/support-stw"
      className="px-4 py-2 bg-primary text-white dark:bg-blue-600 rounded-lg hover:bg-primary/90 dark:hover:bg-blue-700 transition-colors"
      onClick={onLinkClick}
    >
      Donate
    </Link>
  );
}