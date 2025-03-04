// import Link from 'next/link';

// export default function BlogLink() {
//   return (
//     <Link href="/blog" className="hover:text-primary dark:hover:text-blue-400">
//       Blog
//     </Link>
//   );
// }

import Link from 'next/link';

export default function BlogLink() {
  return (
    <Link
      href="/blog"
      className="hover:text-primary dark:hover:text-blue-400 text-gray-800 dark:text-white px-4 py-2 rounded transition-all duration-300"
      aria-label="Go to Blog page"
    >
      Blog
    </Link>
  );
}
