import Link from 'next/link';
import { motion } from 'framer-motion';

interface DonateBtnProps {
  onLinkClick: () => void;
}

export default function DonateBtn({ onLinkClick }: DonateBtnProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href="/stwdonate/support-stw"
        className="px-4 py-2 bg-primary text-white dark:bg-blue-500 dark:text-white rounded-lg transition-all duration-300 hover:bg-primary-dark dark:hover:bg-blue-600 shadow-md"
        aria-label="Donate to Support STW"
        onClick={onLinkClick} // Handle the onClick here
      >
        Donate
      </Link>
    </motion.div>
  );
}
