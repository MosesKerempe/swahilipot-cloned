import Link from 'next/link';

export default function DonateBtn() {
  return (
    <Link href="/stwdonate/support-stw" className="hover:text-primary dark:hover:text-blue-400">
      Donate
    </Link>
  );
}