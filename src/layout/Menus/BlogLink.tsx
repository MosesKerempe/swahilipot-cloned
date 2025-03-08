import Link from 'next/link';
import { motion } from 'framer-motion';

// Define the props type for BlogLink
interface BlogLinkProps {
  onLinkClick: () => void;
}

export default function BlogLink({ onLinkClick }: BlogLinkProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Next.js 13+ supports the Link component without the <a> tag */}
      <Link
        href="/blog"
        className="hover:text-primary dark:hover:text-blue-400 text-gray-800 dark:text-white px-4 py-2 rounded transition-all duration-300"
        aria-label="Go to Blog page"
        onClick={onLinkClick} // Handle the onLinkClick here
      >
        Blog
      </Link>
    </motion.div>
  );
}
