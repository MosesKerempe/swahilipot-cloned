import Link from 'next/link';
import { motion } from 'framer-motion';

// Define the type for the MenuCTA props
interface MenuCTAProps {
  onLinkClick: () => void;
}

export default function MenuCTA({ onLinkClick }: MenuCTAProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
      <Link
        href="/joinus" 
        className="inline-flex items-center px-8 py-3 text-white bg-primary rounded-full shadow-md
                   hover:bg-primary-dark dark:hover:bg-blue-600
                   transition-all duration-300 whitespace-nowrap"
        aria-label="Join our community"
        onClick={onLinkClick} // Handle the click
      >
        Join Us
      </Link>
    </motion.div>
  );
}
