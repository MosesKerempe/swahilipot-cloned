import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
      <Link href="/" className="flex items-center" aria-label="Go to Homepage">
        <div className="relative h-10 w-40 dark:brightness-90 ml-4"> {/* Add margin-left here */}
          <Image 
            src="/images/logo.png" 
            alt="SwahiliPot Hub Logo" 
            layout="fill" 
            objectFit="contain" 
            priority
          />
        </div>
      </Link>
    </motion.div>
  );
}
