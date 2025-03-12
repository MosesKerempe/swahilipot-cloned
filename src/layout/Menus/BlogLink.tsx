import Link from 'next/link';

interface BlogLinkProps {
  onLinkClick?: () => void;
}

export default function BlogLink({ onLinkClick }: BlogLinkProps) {
  return (
    <Link
      href="/blog"
      className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
      onClick={onLinkClick}
    >
      Blog
    </Link>
  );
}