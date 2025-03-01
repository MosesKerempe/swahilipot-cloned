import Link from 'next/link';

export default function BlogLink() {
  return (
    <Link href="/blog" className="hover:text-primary dark:hover:text-blue-400">
      Blog
    </Link>
  );
}